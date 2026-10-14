// ============================================================================
//  CRITTER QUEST — HEARING WORDS
//  SAY.speak(word) plays a real recording of the word when Wiktionary has one
//  (Wikimedia Commons audio, as MP3 so it plays on iPads too); otherwise the
//  browser's own text-to-speech voice reads it. SAY.meaning(word) fetches a
//  short Wiktionary definition, with the word itself blanked out so the
//  definition never gives the spelling away.
//  Answers are cached in localStorage so each word is fetched once per device.
//  If Wiktionary can't be reached (offline, slow, rate-limited) nothing is
//  cached: the voice reads the word this time and the lookup is retried later.
// ============================================================================
window.SAY = (function () {
  var KEY = "critterquest-say-v1";
  var cache = {};
  try { cache = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch (e) {}
  function store() { try { localStorage.setItem(KEY, JSON.stringify(cache)); } catch (e) {} }
  var pending = {}, player = null;

  // Resolves to the JSON, null for a page that doesn't exist (404), or
  // FAIL when the request didn't get an answer.
  var FAIL = { failed: true };
  function getJSON(url, ms) {
    var ctl = window.AbortController ? new AbortController() : null;
    var timer = setTimeout(function () { if (ctl) ctl.abort(); }, ms || 8000);
    return fetch(url, ctl ? { signal: ctl.signal } : {}).then(function (r) {
      clearTimeout(timer);
      return r.ok ? r.json() : r.status === 404 ? null : FAIL;
    }).catch(function () { clearTimeout(timer); return FAIL; });
  }
  function title(w) { return encodeURIComponent(w.replace(/ /g, "_")); }
  function cap(w) { return w.charAt(0).toUpperCase() + w.slice(1); }
  function audioFiles(ml) {
    return (ml.items || []).filter(function (i) { return i.type === "audio"; }).map(function (i) { return i.title; });
  }

  // Wiktionary page for the word: lowercase first, then Capitalised (names).
  // Resolves to a list of audio file titles, or FAIL.
  function mediaFiles(w) {
    var base = "https://en.wiktionary.org/api/rest_v1/page/media-list/";
    return getJSON(base + title(w)).then(function (ml) {
      if (ml === FAIL) return FAIL;
      var files = ml ? audioFiles(ml) : [];
      if (files.length || w === cap(w)) return files;
      return getJSON(base + title(cap(w))).then(function (m2) {
        return m2 === FAIL ? FAIL : m2 ? audioFiles(m2) : [];
      });
    });
  }
  // American recordings first, then any English one
  function rank(f) { return /en-us/i.test(f) ? 0 : /\(eng\)/i.test(f) ? 1 : /^File:En-/i.test(f) ? 2 : 3; }
  // MP3 version of a Commons audio file: a URL, "" (none), or FAIL
  function audioURL(file) {
    var api = "https://commons.wikimedia.org/w/api.php?action=query&prop=videoinfo&viprop=url|derivatives&format=json&origin=*&titles=";
    return getJSON(api + encodeURIComponent(file)).then(function (j) {
      if (j === FAIL) return FAIL;
      var pages = j && j.query ? Object.keys(j.query.pages).map(function (k) { return j.query.pages[k]; }) : [];
      var info = pages[0] && pages[0].videoinfo && pages[0].videoinfo[0];
      if (!info) return "";
      var mp3 = (info.derivatives || []).filter(function (d) { return /audio\/mpeg/.test(d.type); })[0];
      return mp3 ? mp3.src : /\.mp3/i.test(info.url) ? info.url : "";
    });
  }

  // Resolves to the recording's URL, "" if there is none, or FAIL.
  function lookup(w) {
    if (cache[w] && cache[w].a !== undefined) return Promise.resolve(cache[w].a);
    if (pending[w]) return pending[w];
    pending[w] = mediaFiles(w).then(function (files) {
      if (files === FAIL) return FAIL;
      files.sort(function (a, b) { return rank(a) - rank(b); });
      return files.length ? audioURL(files[0]) : "";
    }).then(function (url) {
      delete pending[w];
      if (url !== FAIL) { cache[w] = cache[w] || {}; cache[w].a = url; store(); }
      return url;
    });
    return pending[w];
  }

  function tts(w) {
    if (!window.speechSynthesis) return false;
    try {
      speechSynthesis.cancel();
      var u = new SpeechSynthesisUtterance(w);
      u.lang = "en-US"; u.rate = 0.8;
      var v = speechSynthesis.getVoices().filter(function (x) { return /en-US/i.test(x.lang); })[0];
      if (v) u.voice = v;
      speechSynthesis.speak(u);
      return true;
    } catch (e) { return false; }
  }

  // Play the word. Resolves with "recording", "voice" or "none".
  function speak(w) {
    if (player) { try { player.pause(); } catch (e) {} }
    return lookup(w).then(function (url) {
      if (!url || url === FAIL) return tts(w) ? "voice" : "none";
      return new Promise(function (resolve) {
        player = new Audio(url);
        player.onerror = function () { resolve(tts(w) ? "voice" : "none"); };
        var p = player.play();
        if (p && p.then) p.then(function () { resolve("recording"); }, function () { resolve(tts(w) ? "voice" : "none"); });
        else resolve("recording");
      });
    });
  }

  // A short definition with the word (and its endings) blanked out; "" if
  // there isn't one or Wiktionary can't be reached.
  function meaning(w) {
    if (cache[w] && cache[w].d !== undefined) return Promise.resolve(cache[w].d);
    var base = "https://en.wiktionary.org/api/rest_v1/page/definition/";
    return getJSON(base + title(w)).then(function (j) {
      if (j === FAIL || (j && j.en)) return j;
      return getJSON(base + title(cap(w)));
    }).then(function (j) {
      if (j === FAIL) return "";
      var d = "";
      ((j && j.en) || []).some(function (sec) {
        return (sec.definitions || []).some(function (x) {
          var t = String(x.definition || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
          if (t.length < 4) return false;
          d = (sec.partOfSpeech ? sec.partOfSpeech.toLowerCase() + ": " : "") + t;
          return true;
        });
      });
      // blank the word and its relatives (neurological → "neurology" too):
      // anything sharing its first ~60% of letters
      var stem = w.slice(0, Math.max(4, Math.ceil(w.length * 0.6)));
      if (w.length >= 4) d = d.replace(new RegExp("[a-z]*" + stem.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "[a-z]*", "gi"), "_____");
      cache[w] = cache[w] || {};
      cache[w].d = d;
      store();
      return d;
    });
  }

  return { speak: speak, meaning: meaning, preload: lookup, tts: tts };
})();
