// ============================================================================
//  CRITTER QUEST — PICTURE WORD BANK
//  Powers the easiest spelling mode: a picture is shown (emoji or hand-drawn
//  SVG), the word appears with some letters missing, and the player fills in
//  the blanks. 100+ common, easy words.
// ============================================================================

(function () {
  var OL = "#3a2b28";
  function svg(inner) {
    return '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' + inner + "</svg>";
  }

  // A dozen hand-drawn SVG pictures for extra variety.
  var DRAWN = {
    sun: svg(
      '<circle cx="50" cy="50" r="20" fill="#ffd94d" stroke="' + OL + '" stroke-width="3"/>' +
      '<g stroke="#f0b429" stroke-width="4" stroke-linecap="round">' +
      '<path d="M50 14V4M50 96v-10M14 50H4M96 50h-10M25 25l-7-7M82 82l-7-7M75 25l7-7M18 82l7-7"/></g>' +
      '<circle cx="43" cy="47" r="2.6" fill="' + OL + '"/><circle cx="57" cy="47" r="2.6" fill="' + OL + '"/>' +
      '<path d="M43 56q7 6 14 0" fill="none" stroke="' + OL + '" stroke-width="2.6" stroke-linecap="round"/>'),
    star: svg(
      '<path d="M50 12 L61 38 L89 40 L67 58 L74 86 L50 70 L26 86 L33 58 L11 40 L39 38 Z" ' +
      'fill="#ffd94d" stroke="' + OL + '" stroke-width="3" stroke-linejoin="round"/>'),
    tree: svg(
      '<rect x="44" y="58" width="12" height="30" rx="3" fill="#8a663f" stroke="' + OL + '" stroke-width="3"/>' +
      '<circle cx="34" cy="46" r="18" fill="#5da24a" stroke="' + OL + '" stroke-width="3"/>' +
      '<circle cx="66" cy="46" r="18" fill="#5da24a" stroke="' + OL + '" stroke-width="3"/>' +
      '<circle cx="50" cy="34" r="20" fill="#6fb75c" stroke="' + OL + '" stroke-width="3"/>'),
    fish: svg(
      '<path d="M20 50 C30 32 62 32 74 50 C62 68 30 68 20 50 Z" fill="#4aa3df" stroke="' + OL + '" stroke-width="3"/>' +
      '<path d="M74 50 L90 38 L86 50 L90 62 Z" fill="#5fb2d9" stroke="' + OL + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<circle cx="34" cy="46" r="4" fill="' + OL + '"/><circle cx="35.5" cy="44.5" r="1.4" fill="#fff"/>'),
    heart: svg(
      '<path d="M50 82 C18 60 20 30 40 30 C48 30 50 38 50 40 C50 38 52 30 60 30 C80 30 82 60 50 82 Z" ' +
      'fill="#e85f6a" stroke="' + OL + '" stroke-width="3" stroke-linejoin="round"/>'),
    moon: svg(
      '<path d="M62 18 A34 34 0 1 0 62 82 A26 26 0 1 1 62 18 Z" fill="#ffe066" stroke="' + OL + '" stroke-width="3"/>' +
      '<circle cx="40" cy="40" r="3" fill="#e6c229"/><circle cx="34" cy="58" r="2.4" fill="#e6c229"/>'),
    house: svg(
      '<rect x="24" y="46" width="52" height="40" fill="#f2e3c4" stroke="' + OL + '" stroke-width="3"/>' +
      '<path d="M18 48 L50 20 L82 48 Z" fill="#c0392b" stroke="' + OL + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<rect x="44" y="62" width="14" height="24" fill="#8a663f" stroke="' + OL + '" stroke-width="2.5"/>'),
    ball: svg(
      '<circle cx="50" cy="50" r="30" fill="#e8703a" stroke="' + OL + '" stroke-width="3"/>' +
      '<path d="M22 42 h56 M22 58 h56 M40 22 v56 M60 22 v56" fill="none" stroke="' + OL + '" stroke-width="2.2" opacity=".5"/>'),
    key: svg(
      '<circle cx="34" cy="40" r="16" fill="none" stroke="#e6b52c" stroke-width="7"/>' +
      '<path d="M46 48 L78 80 M70 72 l8 -4 M62 64 l8 -4" stroke="#e6b52c" stroke-width="7" fill="none" stroke-linecap="round"/>'),
    cloud: svg(
      '<g fill="#eaf2f8" stroke="' + OL + '" stroke-width="3">' +
      '<circle cx="36" cy="54" r="16"/><circle cx="56" cy="48" r="20"/><circle cx="72" cy="56" r="14"/>' +
      '<rect x="34" y="54" width="40" height="16" rx="8" stroke="none"/></g>'),
    leaf: svg(
      '<path d="M28 74 C24 40 52 20 76 24 C80 58 52 78 28 74 Z" fill="#6fb75c" stroke="' + OL + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M30 72 C44 56 60 40 74 28" fill="none" stroke="' + OL + '" stroke-width="2.4"/>'),
    boat: svg(
      '<path d="M18 60 H82 L72 80 H28 Z" fill="#e8703a" stroke="' + OL + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M50 56 V20 L74 50 Z" fill="#fff" stroke="' + OL + '" stroke-width="3" stroke-linejoin="round"/>' +
      '<path d="M50 20 V56" stroke="' + OL + '" stroke-width="3"/>'),
  };

  // Emoji-based words. Each: [word, emoji]. Kept to easy, concrete nouns.
  var EMOJI = [
    ["cat","🐱"],["dog","🐶"],["cow","🐮"],["pig","🐷"],["fox","🦊"],["bee","🐝"],
    ["owl","🦉"],["ant","🐜"],["bat","🦇"],["bug","🐛"],["hen","🐔"],["duck","🦆"],
    ["frog","🐸"],["bird","🐦"],["lion","🦁"],["bear","🐻"],["wolf","🐺"],["deer","🦌"],
    ["goat","🐐"],["lamb","🐑"],["mouse","🐭"],["horse","🐴"],["snake","🐍"],["whale","🐳"],
    ["shark","🦈"],["snail","🐌"],["panda","🐼"],["koala","🐨"],["tiger","🐯"],["zebra","🦓"],
    ["mole","🦫"],["crab","🦀"],["seal","🦭"],["chick","🐤"],["sheep","🐑"],["camel","🐫"],
    ["apple","🍎"],["pear","🍐"],["grape","🍇"],["lemon","🍋"],["peach","🍑"],["melon","🍈"],
    ["banana","🍌"],["cherry","🍒"],["orange","🍊"],["carrot","🥕"],["corn","🌽"],["bread","🍞"],
    ["cake","🍰"],["pie","🥧"],["egg","🥚"],["milk","🥛"],["cheese","🧀"],["candy","🍬"],
    ["cookie","🍪"],["donut","🍩"],["pizza","🍕"],["taco","🌮"],["honey","🍯"],["nut","🌰"],
    ["sun","☀️"],["moon","🌙"],["star","⭐"],["cloud","☁️"],["rain","🌧️"],["snow","❄️"],
    ["tree","🌳"],["leaf","🍃"],["flower","🌸"],["rose","🌹"],["grass","🌱"],["cactus","🌵"],
    ["fire","🔥"],["drop","💧"],["wave","🌊"],["rock","🪨"],["mountain","⛰️"],["rainbow","🌈"],
    ["house","🏠"],["tent","⛺"],["door","🚪"],["key","🔑"],["clock","🕐"],["lamp","💡"],
    ["book","📖"],["pen","🖊️"],["cup","☕"],["spoon","🥄"],["fork","🍴"],["plate","🍽️"],
    ["chair","🪑"],["bed","🛏️"],["gift","🎁"],["ball","⚽"],["kite","🪁"],["drum","🥁"],
    ["bell","🔔"],["hat","🎩"],["shoe","👟"],["sock","🧦"],["shirt","👕"],["glove","🧤"],
    ["ring","💍"],["crown","👑"],["coin","🪙"],["map","🗺️"],["boat","⛵"],["car","🚗"],
    ["bus","🚌"],["bike","🚲"],["train","🚂"],["plane","✈️"],["rocket","🚀"],["truck","🚚"],
    ["anchor","⚓"],["ghost","👻"],["robot","🤖"],["heart","❤️"],["eye","👁️"],["hand","✋"],
    ["foot","🦶"],["nose","👃"],["ear","👂"],["tooth","🦷"],["fish","🐟"],["shell","🐚"],
  ];

  var bank = [];
  EMOJI.forEach(function (e) { bank.push({ word: e[0], emoji: e[1] }); });
  Object.keys(DRAWN).forEach(function (w) { bank.push({ word: w, svg: DRAWN[w] }); });

  window.PICTURE_WORDS = bank;

  // Pick a random picture word and a blank-mask. Never blanks the first letter
  // (an easy hint), blanks ~40% of the rest (at least one).
  window.pickPictureWord = function () {
    var item = bank[Math.floor(Math.random() * bank.length)];
    var w = item.word;
    var idx = [];
    for (var i = 1; i < w.length; i++) idx.push(i);
    // shuffle
    for (var j = idx.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1)); var tmp = idx[j]; idx[j] = idx[k]; idx[k] = tmp;
    }
    var blanks = Math.max(1, Math.round((w.length - 1) * 0.4));
    var mask = {};
    for (var m = 0; m < blanks && m < idx.length; m++) mask[idx[m]] = true;
    return { word: w, picture: item.emoji ? { emoji: item.emoji } : { svg: item.svg }, mask: mask };
  };
})();
