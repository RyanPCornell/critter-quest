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

  // 80 words per level. Keep each list inside its level's brief: 0 = 3–5
  // letters, 1 = 6–8 letters, 2 = tricky spellings + long science words.
  window.SPELL_BANKS = {
    0: [
      "cat","frog","tree","sun","fish","bird","cake","milk","star","rain",
      "jump","blue","rock","wind","leaf","nest","pond","sand","moon","seed",
      "claw","fur","tail","wing","paw","dust","fern","dune","glow","mist",
      "song","hill","wave","twig","bark","moss","fox","bee","owl","newt",
      "snow","ice","lake","cave","path","road","gate","door","home","farm",
      "barn","hay","egg","wolf","deer","bear","duck","crab","worm","moth",
      "ant","bug","toad","seal","mole","hare","lamb","colt","cub","den",
      "web","hive","pearl","shell","coal","gem","gold","iron","clay","mud",
    ],
    1: [
      "garden","planet","bridge","castle","monkey","pencil","orange","winter","basket","dragon",
      "forest","meadow","desert","turtle","flower","branch","cactus","valley","stream","lantern",
      "feather","volcano","pebble","serpent","whisper","thunder","crystal","journey","compass","explore",
      "creature","blossom","glimmer","shimmer","burrow","seedling","current","horizon","boulder","village",
      "morning","evening","sunrise","sunset","rainbow","autumn","summer","spring","season","weather",
      "climate","harvest","orchard","pasture","prairie","canyon","glacier","iceberg","blizzard","drizzle",
      "puddle","ripple","lagoon","wetland","thicket","bramble","sapling","pollen","nectar","beetle",
      "cricket","firefly","swallow","sparrow","dolphin","penguin","rabbit","badger","beaver","squirrel",
    ],
    2: [
      "necessary","rhythm","giraffe","knowledge","mysterious","temperature","environment","restaurant","vegetable","accommodate",
      "beautiful","definitely","embarrass","february","neighbor","occasion","receive","separate","tomorrow","vacuum",
      "weird","league","knight","island","calendar","curiosity","phenomenon","silhouette","miniature","camouflage",
      "luminescent","territory","migration","hibernate","ecosystem","photosynthesis","meticulous","perseverance","extraordinary","onomatopoeia",
      "conscience","acquaintance","bizarre","broccoli","cemetery","committee","conscious","dilemma","exaggerate","fluorescent",
      "foreign","guarantee","height","hierarchy","humorous","independent","jewelry","leisure","maintenance","maneuver",
      "mischievous","noticeable","occurrence","parallel","playwright","possession","privilege","pronunciation","recommend","resilience",
      "schedule","sincerely","thorough","twelfth","atmosphere","biodiversity","chlorophyll","constellation","metamorphosis","precipitation",
      // --- classic tricky spellings ---
      "absence","achieve","amateur","apparent","appreciate","argument","athlete","awkward","beginning","believe",
      "business","ceiling","colleague","column","commitment","competition","concentrate","controversy","convenience","courageous",
      "criticize","deceive","desperate","develop","difference","disappear","disappoint","discipline","eighth","equipment",
      "especially","excellent","existence","familiar","fascinate","forty","fulfill","gorgeous","grammar","grateful",
      "guidance","handkerchief","harass","hypocrite","ignorance","immediate","incredible","influence","intelligent","interrupt",
      "irresistible","lieutenant","lightning","magnificent","marriage","millennium","minuscule","mortgage","nuisance","opponent",
      // --- science & nature words (fit the game's world) ---
      "adaptation","amphibian","bacteria","carnivore","chrysalis","condensation","conservation","crustacean","decomposer","electricity",
      "endangered","equilibrium","erosion","evaporation","evolution","geothermal","gravitational","herbivore","hurricane","hydrogen",
      "invertebrate","magnetism","marsupial","meteorite","microscope","molecular","nocturnal","nutrients","organism","oxygen",
      "parasite","pollination","predator","renewable","respiration","sediment","symbiosis","telescope","thermometer","vertebrate",
    ],
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
