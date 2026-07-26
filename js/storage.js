// ============================================================================
//  CRITTER QUEST — STORAGE
//  Saves trainer progress. If firebase-config.js is filled in AND the
//  Firestore rules allow the `critterquest` collection, progress syncs to the
//  cloud (keyed by trainer name). Otherwise everything falls back to
//  localStorage silently — the game is fully playable either way.
// ============================================================================

(function () {
  var LS_KEY = "critterquest-save-v1";
  var mode = "local";        // "local" | "cloud"
  var db = null;
  var pendingTimer = null;

  function initFirebase() {
    if (!window.FIREBASE_CONFIGURED || typeof firebase === "undefined") return false;
    try {
      if (!firebase.apps.length) firebase.initializeApp(window.FIREBASE_CONFIG);
      db = firebase.firestore();
      mode = "cloud";
      return true;
    } catch (e) {
      console.warn("Firebase init failed; using local save.", e);
      return false;
    }
  }

  function docRef(name) {
    return db.collection("critterquest").doc(name.trim().toLowerCase().replace(/[^a-z0-9_-]+/g, "-"));
  }

  function markLocal() {
    mode = "local";
    var badge = document.getElementById("storage-mode");
    if (badge) { badge.textContent = "💾 Local save"; badge.classList.add("local"); }
  }

  window.SaveStore = {
    init: function () { initFirebase(); return mode; },
    mode: function () { return mode; },

    // Load a save for this trainer name. Tries cloud first, falls back local.
    load: function (name, cb) {
      var localAll = {};
      try { localAll = JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch (e) {}
      var localSave = localAll[name.toLowerCase()] || null;
      if (mode === "cloud") {
        docRef(name).get().then(function (snap) {
          if (snap.exists) cb(snap.data(), "cloud");
          else cb(localSave, localSave ? "local" : "new");
        }).catch(function (err) {
          console.warn("Cloud load failed (check Firestore rules); using local.", err);
          markLocal();
          cb(localSave, localSave ? "local" : "new");
        });
      } else {
        cb(localSave, localSave ? "local" : "new");
      }
    },

    // Debounced save (called constantly while playing).
    save: function (name, data) {
      clearTimeout(pendingTimer);
      pendingTimer = setTimeout(function () {
        try {
          var all = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
          all[name.toLowerCase()] = data;
          localStorage.setItem(LS_KEY, JSON.stringify(all));
        } catch (e) {}
        if (mode === "cloud") {
          docRef(name).set(data).catch(function (err) {
            console.warn("Cloud save failed; continuing with local saves.", err);
            markLocal();
          });
        }
      }, 800);
    },

    reset: function (name) {
      try {
        var all = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
        delete all[name.toLowerCase()];
        localStorage.setItem(LS_KEY, JSON.stringify(all));
      } catch (e) {}
      if (mode === "cloud") docRef(name).delete().catch(function () {});
    },
  };
})();
