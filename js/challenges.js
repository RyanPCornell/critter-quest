// ============================================================================
//  CRITTER QUEST — CHALLENGES
//  Math problem generator (4 difficulty levels) and spelling word banks
//  (3 levels + custom uploaded bank). Used by the catch encounter.
// ============================================================================

(function () {
  function ri(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  // ------------------------------------------------------------------ MATH
  window.MATH_LEVELS = [
    { id: 0, name: "Sprout",  desc: "Addition & subtraction within 20" },
    { id: 1, name: "Scout",   desc: "Add/subtract to 100 · times tables" },
    { id: 2, name: "Ranger",  desc: "Big multiplication · division · order of operations" },
    { id: 3, name: "Master",  desc: "Negatives · percents · solve for x" },
    { id: 4, name: "Kangaroo", desc: "Visual puzzles (Grade 3–4 Math-Kangaroo style)", kangaroo: true },
  ];

  window.makeMathProblem = function (level) {
    var a, b, c, kind;
    switch (level) {
      case 0:
        if (Math.random() < 0.5) { a = ri(1, 10); b = ri(1, 10); return { q: a + " + " + b + " = ?", a: a + b }; }
        a = ri(2, 20); b = ri(1, a); return { q: a + " − " + b + " = ?", a: a - b };
      case 1:
        kind = pick(["add", "sub", "mul"]);
        if (kind === "add") { a = ri(11, 89); b = ri(11, 99 - a > 10 ? 99 - a : 10); return { q: a + " + " + b + " = ?", a: a + b }; }
        if (kind === "sub") { a = ri(25, 99); b = ri(10, a - 1); return { q: a + " − " + b + " = ?", a: a - b }; }
        a = ri(2, 12); b = ri(2, 12); return { q: a + " × " + b + " = ?", a: a * b };
      case 2:
        kind = pick(["mul2", "div", "ops"]);
        if (kind === "mul2") { a = ri(12, 99); b = ri(3, 9); return { q: a + " × " + b + " = ?", a: a * b }; }
        if (kind === "div") { b = ri(3, 12); c = ri(3, 12); a = b * c; return { q: a + " ÷ " + b + " = ?", a: c }; }
        a = ri(2, 12); b = ri(2, 9); c = ri(2, 20); return { q: c + " + " + a + " × " + b + " = ?", a: c + a * b };
      default:
        kind = pick(["neg", "pct", "solvex", "sq"]);
        if (kind === "neg") { a = ri(-20, 20); b = ri(-20, 20); return { q: a + " + (" + b + ") = ?", a: a + b }; }
        if (kind === "pct") { var p = pick([10, 20, 25, 50, 75]); b = pick([20, 40, 60, 80, 120, 160, 200, 240]); return { q: p + "% of " + b + " = ?", a: b * p / 100 }; }
        if (kind === "sq") { a = ri(4, 15); return { q: a + "² = ?", a: a * a }; }
        a = ri(2, 9); c = ri(1, 9); var xVal = ri(2, 12); b = a * xVal + c;
        return { q: "Solve for x:  " + a + "x + " + c + " = " + b, a: xVal };
    }
  };

  // -------------------------------------------------------------- SPELLING
  window.SPELL_LEVELS = [
    { id: 0, name: "Hatchling", desc: "Short, friendly words (3–5 letters)" },
    { id: 1, name: "Fledgling", desc: "Everyday words (6–8 letters)" },
    { id: 2, name: "Wordsmith", desc: "Tricky spellings & long words" },
    { id: 3, name: "My Word Bank", desc: "Your own uploaded word list" },
    { id: 4, name: "Picture Words", desc: "See a picture, fill in the missing letters", picture: true },
  ];

  window.SPELL_BANKS = {
    0: ["cat","frog","tree","sun","fish","bird","cake","milk","star","rain","jump","blue","rock","wind","leaf","nest","pond","sand","moon","seed","claw","fur","tail","wing","paw","dust","fern","dune","glow","mist","song","hill","wave","twig","bark","moss","fox","bee","owl","newt"],
    1: ["garden","planet","bridge","castle","monkey","pencil","orange","winter","basket","dragon","forest","meadow","desert","turtle","flower","branch","cactus","valley","stream","lantern","feather","volcano","pebble","serpent","whisper","thunder","crystal","journey","compass","explore","creature","blossom","glimmer","shimmer","burrow","seedling","current","horizon","boulder","village"],
    2: ["necessary","rhythm","giraffe","knowledge","mysterious","temperature","environment","restaurant","vegetable","accommodate","beautiful","definitely","embarrass","february","neighbor","occasion","receive","separate","tomorrow","vacuum","weird","league","knight","island","calendar","curiosity","phenomenon","silhouette","miniature","camouflage","luminescent","territory","migration","hibernate","ecosystem","photosynthesis","meticulous","perseverance","extraordinary","onomatopoeia"],
  };

  // Parse a pasted/uploaded word list: accepts one word per line, or
  // comma/semicolon/tab separated. Returns a cleaned array.
  window.parseWordBank = function (text) {
    return (text || "")
      .split(/[\n,;\t]+/)
      .map(function (w) { return w.trim(); })
      .filter(function (w) { return /^[A-Za-z''-]{2,}$/.test(w); });
  };

  window.pickSpellWord = function (level, customBank) {
    if (level === 3 && customBank && customBank.length) return pick(customBank);
    var bank = window.SPELL_BANKS[level] || window.SPELL_BANKS[0];
    return pick(bank);
  };
})();
