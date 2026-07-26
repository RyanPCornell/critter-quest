// ============================================================================
//  CRITTER QUEST — SOCIAL (friends + trading)
//
//  Cloud-only features. Requires firebase-config.js to be filled in AND the
//  Firestore rules to allow the `critterquest` and `critterquest_trades`
//  collections (see firestore.rules). When saves are running in local mode,
//  the Friends panel explains that and stays disabled — the rest of the game
//  is unaffected.
//
//  TRADE PROTOCOL
//  --------------
//  A trade doc lives in `critterquest_trades`:
//    { from, fromName, to, toName, give, want, status, fromApplied, created }
//  `give`  = creature id the SENDER offers
//  `want`  = creature id the sender wants from the RECIPIENT
//  status: pending | accepted | declined | cancelled
//
//  Each side applies its own half of the swap so the two clients never write
//  each other's save documents (which would clobber concurrent progress):
//    * Recipient accepts -> applies its own delta, sets status='accepted'.
//    * Sender's client later sees status='accepted' && !fromApplied,
//      applies its own delta, sets fromApplied=true.
//  Trades only move DUPLICATES (count >= 2) so nobody can lose a Critterdex
//  entry they worked for.
// ============================================================================

(function () {
  var db = null;
  var me = null;              // slug of the signed-in trainer
  var pollTimer = null;
  var onChange = function () {};

  function slug(name) {
    return String(name || "").trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-");
  }

  function ready() {
    if (db) return true;
    if (window.SaveStore && SaveStore.mode() === "cloud" && typeof firebase !== "undefined") {
      try { db = firebase.firestore(); return true; } catch (e) { return false; }
    }
    return false;
  }

  function trainers() { return db.collection("critterquest"); }
  function trades()   { return db.collection("critterquest_trades"); }
  function messages() { return db.collection("critterquest_messages"); }

  window.SOCIAL = {
    init: function (myName, changeCb) {
      me = slug(myName);
      onChange = changeCb || function () {};
    },

    available: function () { return ready(); },
    slug: slug,
    myId: function () { return me; },

    // -------------------------------------------- village square board
    // A shared message board every player can read and (once they've earned
    // it) write to. Stored in the critterquest_messages collection.
    postMessage: function (name, text, cb) {
      if (!ready()) return cb({ error: "The message board needs cloud saves." });
      var clean = String(text || "").trim().slice(0, 140);
      if (!clean) return cb({ error: "Write something first!" });
      messages().add({ name: String(name).slice(0, 20), text: clean, created: Date.now() })
        .then(function () { cb({ ok: true }); })
        .catch(function (err) { cb({ error: "Couldn't post: " + (err && err.code || err) }); });
    },
    loadMessages: function (cb) {
      if (!ready()) return cb(null);
      messages().orderBy("created", "desc").limit(30).get()
        .then(function (snap) { cb(snap.docs.map(function (d) { return d.data(); })); })
        .catch(function () { cb(null); });
    },

    // ---------------------------------------------------------- friends
    // Adds each trainer to the other's friend list so both can trade.
    addFriend: function (name, myFriends, cb) {
      if (!ready()) return cb({ error: "Friends need cloud saves — see the note above." });
      var id = slug(name);
      if (!id) return cb({ error: "Enter a trainer name." });
      if (id === me) return cb({ error: "You're already your own best friend. 🙂" });
      if (myFriends.indexOf(id) >= 0) return cb({ error: "You're already friends with " + name + "." });
      trainers().doc(id).get().then(function (snap) {
        if (!snap.exists) return cb({ error: "No trainer named \"" + name + "\" has played yet." });
        var theirs = snap.data();
        var theirFriends = theirs.friends || [];
        if (theirFriends.indexOf(me) < 0) {
          theirFriends.push(me);
          trainers().doc(id).update({ friends: theirFriends }).catch(function () {});
        }
        cb({ ok: true, id: id, profile: theirs });
      }).catch(function (err) {
        cb({ error: "Couldn't reach the cloud: " + (err && err.code || err) });
      });
    },

    removeFriend: function (id, myFriends, cb) {
      if (!ready()) return cb({ error: "Needs cloud saves." });
      // only removes them from MY list; they keep me (rejoining is one click)
      cb({ ok: true, friends: myFriends.filter(function (f) { return f !== id; }) });
    },

    // Fetch profiles for a list of friend ids.
    loadFriends: function (ids, cb) {
      if (!ready() || !ids.length) return cb([]);
      Promise.all(ids.map(function (id) {
        return trainers().doc(id).get()
          .then(function (s) { return s.exists ? Object.assign({ id: id }, s.data()) : null; })
          .catch(function () { return null; });
      })).then(function (list) {
        cb(list.filter(Boolean));
      });
    },

    // ----------------------------------------------------------- trades
    propose: function (toId, toName, giveId, wantId, myName, cb) {
      if (!ready()) return cb({ error: "Trading needs cloud saves." });
      trades().add({
        from: me, fromName: myName, to: toId, toName: toName,
        give: giveId, want: wantId, status: "pending", fromApplied: false,
        created: Date.now(),
      }).then(function () { cb({ ok: true }); })
        .catch(function (err) { cb({ error: "Couldn't send offer: " + (err && err.code || err) }); });
    },

    // Everything involving me that still needs attention.
    loadTrades: function (cb) {
      if (!ready()) return cb({ incoming: [], outgoing: [] });
      var inbox = trades().where("to", "==", me).where("status", "==", "pending").get();
      var sent  = trades().where("from", "==", me).get();
      Promise.all([inbox, sent]).then(function (res) {
        function rows(snap) {
          return snap.docs.map(function (d) { return Object.assign({ _id: d.id }, d.data()); });
        }
        cb({
          incoming: rows(res[0]),
          outgoing: rows(res[1]).filter(function (t) {
            return t.status === "pending" || (t.status === "accepted" && !t.fromApplied);
          }),
        });
      }).catch(function () { cb({ incoming: [], outgoing: [] }); });
    },

    accept: function (tradeId, cb) {
      if (!ready()) return cb({ error: "Needs cloud saves." });
      trades().doc(tradeId).update({ status: "accepted", acceptedAt: Date.now() })
        .then(function () { cb({ ok: true }); })
        .catch(function (err) { cb({ error: String(err && err.code || err) }); });
    },

    decline: function (tradeId, cb) {
      if (!ready()) return cb({ error: "Needs cloud saves." });
      trades().doc(tradeId).update({ status: "declined" })
        .then(function () { cb({ ok: true }); })
        .catch(function () { cb({ error: "Couldn't decline." }); });
    },

    cancel: function (tradeId, cb) {
      if (!ready()) return cb({ error: "Needs cloud saves." });
      trades().doc(tradeId).update({ status: "cancelled" })
        .then(function () { cb({ ok: true }); })
        .catch(function () { cb({ error: "Couldn't cancel." }); });
    },

    markApplied: function (tradeId) {
      if (!ready()) return;
      trades().doc(tradeId).update({ fromApplied: true }).catch(function () {});
    },

    // Poll for incoming offers / completed trades in the background.
    startPolling: function (everyMs) {
      if (!ready()) return;
      clearInterval(pollTimer);
      pollTimer = setInterval(function () { onChange(); }, everyMs || 20000);
    },
    stopPolling: function () { clearInterval(pollTimer); },
  };
})();
