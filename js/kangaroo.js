// ============================================================================
//  CRITTER QUEST — KANGAROO MATH
//  Visual, Math-Kangaroo-style problems (roughly grade 3–4): count the shapes,
//  add the dice, count the blocks, balance the scale, finish the pattern,
//  add the coins, continue the sequence, tell the time, compare rows.
//  Each generator returns { q, svg, a } for a typed answer, or
//  { q, svg, choices:[{svg}], a:<index> } for a multiple-choice answer.
// ============================================================================

(function () {
  var OL = "#3a2b28";
  function ri(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(a) { return a[ri(0, a.length - 1)]; }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = ri(0, i); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function wrap(inner, vb) { return '<svg viewBox="0 0 ' + (vb || "220 150") + '" xmlns="http://www.w3.org/2000/svg">' + inner + "</svg>"; }

  // ---- little drawing helpers -------------------------------------------
  var FILLS = { red: "#e85f6a", blue: "#5b7fbf", green: "#5cb85c", yellow: "#e8c22c", purple: "#9a6fc4" };

  function triangle(x, y, s, fill) {
    return '<path d="M' + x + " " + (y - s) + " L" + (x + s) + " " + (y + s) + " L" + (x - s) + " " + (y + s) +
      ' Z" fill="' + fill + '" stroke="' + OL + '" stroke-width="2.4" stroke-linejoin="round"/>';
  }
  function circleShape(x, y, s, fill) {
    return '<circle cx="' + x + '" cy="' + y + '" r="' + s + '" fill="' + fill + '" stroke="' + OL + '" stroke-width="2.4"/>';
  }
  function square(x, y, s, fill) {
    return '<rect x="' + (x - s) + '" y="' + (y - s) + '" width="' + (2 * s) + '" height="' + (2 * s) +
      '" rx="3" fill="' + fill + '" stroke="' + OL + '" stroke-width="2.4"/>';
  }
  function shapeAt(kind, x, y, fill) {
    fill = fill || pick([FILLS.red, FILLS.blue, FILLS.green, FILLS.yellow, FILLS.purple]);
    if (kind === "triangle") return triangle(x, y, 15, fill);
    if (kind === "square") return square(x, y, 13, fill);
    return circleShape(x, y, 14, fill);
  }

  // dice face at center (cx,cy), 44 wide, with n pips
  function die(cx, cy, n) {
    var s = 22, r = 4.2;
    var pips = {
      1: [[0, 0]], 2: [[-1, -1], [1, 1]], 3: [[-1, -1], [0, 0], [1, 1]],
      4: [[-1, -1], [1, -1], [-1, 1], [1, 1]], 5: [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]],
      6: [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]],
    }[n];
    var svg = '<rect x="' + (cx - s) + '" y="' + (cy - s) + '" width="' + (2 * s) + '" height="' + (2 * s) +
      '" rx="7" fill="#fff" stroke="' + OL + '" stroke-width="2.6"/>';
    pips.forEach(function (p) { svg += '<circle cx="' + (cx + p[0] * 11) + '" cy="' + (cy + p[1] * 11) + '" r="' + r + '" fill="' + OL + '"/>'; });
    return svg;
  }

  // a single block/cube ~28px with a top and side face for a 3-D look
  function cube(x, y, s) {
    var d = s * 0.32;
    return '<path d="M' + x + " " + y + " h" + s + " v" + s + " h-" + s + ' Z" fill="#f0b46a" stroke="' + OL + '" stroke-width="2"/>' +
      '<path d="M' + x + " " + y + " l" + d + " -" + d + " h" + s + " l-" + d + " " + d + ' Z" fill="#ffd08a" stroke="' + OL + '" stroke-width="2" stroke-linejoin="round"/>' +
      '<path d="M' + (x + s) + " " + y + " l" + d + " -" + d + " v" + s + " l-" + d + " " + d + ' Z" fill="#d99248" stroke="' + OL + '" stroke-width="2" stroke-linejoin="round"/>';
  }

  function coin(x, y, val) {
    var col = val >= 25 ? "#e8c22c" : val >= 10 ? "#cfcfcf" : val >= 5 ? "#d9a86c" : "#e0b060";
    return '<circle cx="' + x + '" cy="' + y + '" r="18" fill="' + col + '" stroke="' + OL + '" stroke-width="2.6"/>' +
      '<circle cx="' + x + '" cy="' + y + '" r="13" fill="none" stroke="' + OL + '" stroke-width="1.4" opacity=".5"/>' +
      '<text x="' + x + '" y="' + (y + 5) + '" font-size="14" font-weight="800" text-anchor="middle" fill="' + OL + '" font-family="Avenir Next,Segoe UI,sans-serif">' + val + "</text>";
  }

  function apple(x, y) {
    return '<circle cx="' + x + '" cy="' + y + '" r="13" fill="#e85f6a" stroke="' + OL + '" stroke-width="2.2"/>' +
      '<path d="M' + x + ' ' + (y - 12) + ' q3 -6 8 -6" fill="none" stroke="#5a3a2a" stroke-width="2.2" stroke-linecap="round"/>' +
      '<ellipse cx="' + (x - 4) + '" cy="' + (y - 4) + '" rx="3" ry="4" fill="#fff" opacity=".5"/>';
  }
  function pear(x, y) {
    return '<path d="M' + x + ' ' + (y - 14) + ' C' + (x - 9) + ' ' + (y - 6) + ' ' + (x - 9) + ' ' + (y + 12) + ' ' + x + ' ' + (y + 12) +
      ' C' + (x + 9) + ' ' + (y + 12) + ' ' + (x + 9) + ' ' + (y - 4) + ' ' + x + ' ' + (y - 14) +
      ' Z" fill="#a5c93f" stroke="' + OL + '" stroke-width="2.2"/>' +
      '<path d="M' + x + ' ' + (y - 14) + ' q2 -5 6 -5" fill="none" stroke="#5a3a2a" stroke-width="2.2" stroke-linecap="round"/>';
  }

  function clockFace(cx, cy, r, hour) {
    var ang = (hour % 12) * 30 - 90, rad = ang * Math.PI / 180;
    var hx = cx + Math.cos(rad) * r * 0.5, hy = cy + Math.sin(rad) * r * 0.5;
    var svg = '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="#fffdf5" stroke="' + OL + '" stroke-width="3"/>';
    for (var t = 0; t < 12; t++) {
      var a = t * 30 - 90, ar = a * Math.PI / 180;
      svg += '<circle cx="' + (cx + Math.cos(ar) * r * 0.82) + '" cy="' + (cy + Math.sin(ar) * r * 0.82) + '" r="1.8" fill="' + OL + '"/>';
    }
    // 12 3 6 9 numerals
    [[12, 0, -r * 0.62], [3, r * 0.66, 0], [6, 0, r * 0.68], [9, -r * 0.66, 0]].forEach(function (m) {
      svg += '<text x="' + (cx + m[1]) + '" y="' + (cy + m[2] + 5) + '" font-size="13" font-weight="800" text-anchor="middle" fill="' + OL + '" font-family="Avenir Next,sans-serif">' + m[0] + "</text>";
    });
    svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + hx + '" y2="' + hy + '" stroke="' + OL + '" stroke-width="4" stroke-linecap="round"/>';
    svg += '<line x1="' + cx + '" y1="' + cy + '" x2="' + cx + '" y2="' + (cy - r * 0.72) + '" stroke="#e85f6a" stroke-width="2.6" stroke-linecap="round"/>';
    svg += '<circle cx="' + cx + '" cy="' + cy + '" r="3.4" fill="' + OL + '"/>';
    return svg;
  }

  // ---- problem generators -----------------------------------------------
  function pCount() {
    var kinds = ["triangle", "circle", "square"];
    var target = pick(kinds);
    var counts = {}; kinds.forEach(function (k) { counts[k] = ri(2, 5); });
    var items = [];
    kinds.forEach(function (k) { for (var i = 0; i < counts[k]; i++) items.push(k); });
    shuffle(items);
    var svg = "", cols = 5;
    items.forEach(function (t, i) { svg += shapeAt(t, 26 + (i % cols) * 43, 34 + Math.floor(i / cols) * 40); });
    var names = { triangle: "triangles", circle: "circles", square: "squares" };
    return { q: "How many " + names[target] + " are there?", svg: wrap(svg), a: counts[target] };
  }

  function pDice() {
    var n = ri(2, 3), vals = [], svg = "";
    for (var i = 0; i < n; i++) { vals.push(ri(1, 6)); svg += die(40 + i * 74, 62, vals[i]); }
    for (var j = 0; j < n - 1; j++) svg += '<text x="' + (77 + j * 74) + '" y="70" font-size="30" font-weight="800" fill="' + OL + '" text-anchor="middle">+</text>';
    return { q: "How many dots in total?", svg: wrap(svg, "230 120"), a: vals.reduce(function (a, b) { return a + b; }, 0) };
  }

  function pBlocks() {
    var cols = ri(3, 4), heights = [], total = 0;
    for (var i = 0; i < cols; i++) { var h = ri(1, 4); heights.push(h); total += h; }
    var svg = "", base = 118, cw = 34;
    var startX = 110 - (cols * cw) / 2;
    heights.forEach(function (h, i) { for (var r = 0; r < h; r++) svg += cube(startX + i * cw, base - (r + 1) * 28, 28); });
    return { q: "How many blocks are stacked here?", svg: wrap(svg, "220 140"), a: total };
  }

  function pBalance() {
    var k = ri(2, 4), n = ri(2, 3);
    var svg = "";
    // beam
    svg += '<path d="M20 40 H200" stroke="' + OL + '" stroke-width="4" stroke-linecap="round"/>';
    svg += '<path d="M110 40 V96" stroke="' + OL + '" stroke-width="4"/><path d="M92 100 h36" stroke="' + OL + '" stroke-width="4" stroke-linecap="round"/>';
    // left pan: 1 square
    svg += '<path d="M40 40 L26 66 H74 L60 40" fill="none" stroke="' + OL + '" stroke-width="2.4"/>';
    svg += square(50, 58, 12, FILLS.blue);
    // right pan: k circles
    svg += '<path d="M160 40 L146 66 H194 L180 40" fill="none" stroke="' + OL + '" stroke-width="2.4"/>';
    for (var c = 0; c < k; c++) svg += circleShape(154 + (c % 3) * 16, 56 - Math.floor(c / 3) * 15, 7, FILLS.red);
    return {
      q: "The scale balances. How many ● weigh the same as " + n + " ■ ?",
      svg: wrap(svg, "220 115"), a: n * k,
    };
  }

  function pPattern() {
    var shapes = [["circle", FILLS.red], ["square", FILLS.blue], ["triangle", FILLS.green], ["circle", FILLS.yellow]];
    shuffle(shapes);
    var period = ri(2, 3);
    var base = shapes.slice(0, period);
    var shown = 5;
    var svg = "";
    for (var i = 0; i < shown; i++) { var e = base[i % period]; svg += shapeAt(e[0], 26 + i * 38, 45, e[1]); }
    // the "?" slot
    svg += '<rect x="' + (26 + shown * 38 - 16) + '" y="28" width="34" height="34" rx="6" fill="#fff" stroke="' + OL + '" stroke-width="2.4" stroke-dasharray="4 3"/>';
    svg += '<text x="' + (26 + shown * 38 + 1) + '" y="52" font-size="22" font-weight="800" text-anchor="middle" fill="' + OL + '">?</text>';
    var answer = base[shown % period];
    // choices: the distinct shapes in the pattern (+ maybe a distractor)
    var opts = base.slice();
    if (opts.length < 3) opts.push(shapes[period]); // add a distractor
    shuffle(opts);
    var aIndex = opts.findIndex(function (o) { return o[0] === answer[0] && o[1] === answer[1]; });
    return {
      q: "Which shape comes next in the pattern?",
      svg: wrap(svg, (26 + shown * 38 + 24) + " 76"),
      choices: opts.map(function (o) { return { svg: wrap(shapeAt(o[0], 24, 24, o[1]), "48 48") }; }),
      a: aIndex,
    };
  }

  function pCoins() {
    var denoms = [1, 5, 10, 25];
    var n = ri(3, 5), vals = [], total = 0, svg = "";
    for (var i = 0; i < n; i++) { var v = pick(denoms); vals.push(v); total += v; }
    vals.forEach(function (v, i) { svg += coin(30 + (i % 5) * 42, 34 + Math.floor(i / 5) * 42, v); });
    return { q: "How many cents is this in all?", svg: wrap(svg, "230 90"), a: total };
  }

  function pSequence() {
    var start = ri(1, 3), step = ri(1, 3);
    var seq = [start, start + step, start + 2 * step], next = start + 3 * step;
    var svg = "";
    seq.forEach(function (count, i) {
      var bx = 12 + i * 50;
      svg += '<rect x="' + bx + '" y="14" width="42" height="70" rx="8" fill="#fff" stroke="' + OL + '" stroke-width="2.4"/>';
      for (var d = 0; d < count; d++) svg += '<circle cx="' + (bx + 21) + '" cy="' + (26 + d * 12) + '" r="4.2" fill="' + FILLS.purple + '" stroke="' + OL + '" stroke-width="1.4"/>';
    });
    var qx = 12 + 3 * 50;
    svg += '<rect x="' + qx + '" y="14" width="42" height="70" rx="8" fill="#fff" stroke="' + OL + '" stroke-width="2.4" stroke-dasharray="4 3"/>';
    svg += '<text x="' + (qx + 21) + '" y="56" font-size="26" font-weight="800" text-anchor="middle" fill="' + OL + '">?</text>';
    return { q: "How many dots come next?", svg: wrap(svg, (qx + 54) + " 98"), a: next };
  }

  function pClock() {
    var h = ri(1, 12), add = ri(2, 5);
    var target = ((h - 1 + add) % 12) + 1;
    return {
      q: "The clock shows " + h + " o'clock. What hour will it be in " + add + " hours?",
      svg: wrap(clockFace(110, 60, 46, h), "220 120"), a: target,
    };
  }

  function pCompare() {
    var a = ri(4, 8), b = ri(1, a - 1);
    var svg = "";
    for (var i = 0; i < a; i++) svg += apple(26 + i * 24, 34);
    for (var j = 0; j < b; j++) svg += pear(26 + j * 24, 84);
    return { q: "How many more 🍎 than 🍐 are there?", svg: wrap(svg, (26 + Math.max(a, b) * 24) + " 110"), a: a - b };
  }

  var GENERATORS = [pCount, pDice, pBlocks, pBalance, pPattern, pCoins, pSequence, pClock, pCompare];

  window.makeKangarooProblem = function () { return pick(GENERATORS)(); };
})();
