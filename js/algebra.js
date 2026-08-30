// ============================================================================
//  CRITTER QUEST — ALGEBRA
//  Multi-step linear equations, generated together with their WORKED SOLUTION
//  so the game can (a) show a lesson, (b) blank out steps for the player to
//  fill in, and (c) use the equation as a catch/battle challenge.
//
//  Every problem is built backwards from a whole-number answer, so each step
//  stays on clean integers — no fractions, no negatives in the middle.
//
//  A problem looks like:
//    { type, equation:"3x + 5 = 20", answer:5,
//      rows:[ { opText:"Subtract 5 from both sides", opShort:"−5",
//               left:"3x", right:"15" }, ... ] }
//  `rows` are the lines you'd write UNDER the starting equation, in order.
// ============================================================================

(function () {
  function ri(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  // Write a coefficient the way a person would: 1x is just x.
  function cx(n) { return n === 1 ? "x" : n + "x"; }

  // The teaching order of the quest — each tier adds one new idea.
  window.ALGEBRA_TYPES = [
    { id: "two-step",   name: "Two-Step Equations",     idea: "Undo the operations in reverse order." },
    { id: "like-terms", name: "Combining Like Terms",   idea: "Add up the matching x-terms first." },
    { id: "both-sides", name: "Variables on Both Sides", idea: "Move all the x's to one side first." },
    { id: "distribute", name: "The Distributive Property", idea: "Share the outside number with everything in the brackets." },
    { id: "multi",      name: "Full Multi-Step",        idea: "Distribute, gather the x's, then undo." },
  ];
  window.ALGEBRA_BY_ID = {};
  window.ALGEBRA_TYPES.forEach(function (t) { window.ALGEBRA_BY_ID[t.id] = t; });

  // ---- generators -------------------------------------------------------

  // ax + b = c      (or ax − b = c)
  function twoStep() {
    var x = ri(2, 12), a = ri(2, 9), b = ri(2, 20);
    var minus = Math.random() < 0.35;
    var c = minus ? a * x - b : a * x + b;
    return {
      type: "two-step",
      equation: a + "x " + (minus ? "− " : "+ ") + b + " = " + c,
      answer: x,
      rows: [
        { opText: (minus ? "Add " : "Subtract ") + b + " on both sides",
          opShort: (minus ? "+" : "−") + b, left: a + "x", right: String(a * x) },
        { opText: "Divide both sides by " + a, opShort: "÷" + a, left: "x", right: String(x) },
      ],
    };
  }

  // ax + bx + c = d
  function likeTerms() {
    var x = ri(2, 12), a = ri(2, 6), b = ri(2, 6), c = ri(2, 20);
    var s = a + b, d = s * x + c;
    return {
      type: "like-terms",
      equation: a + "x + " + b + "x + " + c + " = " + d,
      answer: x,
      rows: [
        { opText: "Combine " + a + "x and " + b + "x", opShort: a + "x+" + b + "x",
          left: s + "x + " + c, right: String(d) },
        { opText: "Subtract " + c + " on both sides", opShort: "−" + c,
          left: s + "x", right: String(s * x) },
        { opText: "Divide both sides by " + s, opShort: "÷" + s, left: "x", right: String(x) },
      ],
    };
  }

  // ax + b = cx + d      (a > c, so the x-term stays positive)
  function bothSides() {
    var x = ri(2, 12), a = ri(4, 9), c = ri(1, a - 2), b = ri(2, 15);
    var k = a - c, d = k * x + b;
    return {
      type: "both-sides",
      equation: cx(a) + " + " + b + " = " + cx(c) + " + " + d,
      answer: x,
      rows: [
        { opText: "Subtract " + cx(c) + " on both sides", opShort: "−" + cx(c),
          left: cx(k) + " + " + b, right: String(d) },
        { opText: "Subtract " + b + " on both sides", opShort: "−" + b,
          left: cx(k), right: String(k * x) },
        { opText: "Divide both sides by " + k, opShort: "÷" + k, left: "x", right: String(x) },
      ],
    };
  }

  // a(x + b) = c
  function distribute() {
    var x = ri(2, 12), a = ri(2, 7), b = ri(2, 12);
    var c = a * (x + b);
    return {
      type: "distribute",
      equation: a + "(x + " + b + ") = " + c,
      answer: x,
      rows: [
        { opText: "Multiply " + a + " by both terms in the brackets", opShort: "×" + a + " out",
          left: a + "x + " + (a * b), right: String(c) },
        { opText: "Subtract " + (a * b) + " on both sides", opShort: "−" + (a * b),
          left: a + "x", right: String(a * x) },
        { opText: "Divide both sides by " + a, opShort: "÷" + a, left: "x", right: String(x) },
      ],
    };
  }

  // a(x + b) = cx + d    (the full works)
  function multi() {
    var x = ri(2, 10), a = ri(3, 6), b = ri(2, 9), c = ri(1, a - 2);
    var k = a - c, ab = a * b;
    var d = a * (x + b) - c * x;
    return {
      type: "multi",
      equation: a + "(x + " + b + ") = " + cx(c) + " + " + d,
      answer: x,
      rows: [
        { opText: "Multiply " + a + " by both terms in the brackets", opShort: "×" + a + " out",
          left: cx(a) + " + " + ab, right: cx(c) + " + " + d },
        { opText: "Subtract " + cx(c) + " on both sides", opShort: "−" + cx(c),
          left: cx(k) + " + " + ab, right: String(d) },
        { opText: "Subtract " + ab + " on both sides", opShort: "−" + ab,
          left: cx(k), right: String(k * x) },
        { opText: "Divide both sides by " + k, opShort: "÷" + k, left: "x", right: String(x) },
      ],
    };
  }

  var GEN = { "two-step": twoStep, "like-terms": likeTerms, "both-sides": bothSides,
              "distribute": distribute, "multi": multi };

  window.makeAlgebraProblem = function (type) {
    var g = GEN[type] || twoStep;
    return g();
  };

  // ---- fill-in-the-blank ------------------------------------------------
  //  Marks some parts of the worked solution as blanks the player must supply.
  //  Each blank is either kind:"op" (choose the move from buttons) or
  //  kind:"val" (type the number on the right-hand side).
  //  Returns { prob, blanks:[{row, kind, answer, choices?}] }
  window.makeAlgebraFill = function (type, howMany) {
    var prob = window.makeAlgebraProblem(type);
    var n = prob.rows.length;
    var want = Math.max(1, Math.min(howMany || 2, n));
    // choose distinct rows, biased toward the earlier (more instructive) steps
    var idxs = [];
    for (var i = 0; i < n; i++) idxs.push(i);
    for (var s = idxs.length - 1; s > 0; s--) { var j = ri(0, s); var t = idxs[s]; idxs[s] = idxs[j]; idxs[j] = t; }
    idxs = idxs.slice(0, want).sort(function (p, q) { return p - q; });

    var blanks = idxs.map(function (r) {
      var row = prob.rows[r];
      // A "val" blank is a plain number box, so it can only go on a row whose
      // right-hand side is a bare integer — e.g. the first line of a full
      // multi-step still reads "2x + 72", which must stay an "op" blank.
      var numericRight = /^\d+$/.test(row.right);
      // the last row (÷ to isolate x) is most useful as an "op" blank;
      // otherwise alternate so the player practises both kinds
      var kind = (!numericRight || r === n - 1 || Math.random() < 0.5) ? "op" : "val";
      if (kind === "op") {
        return { row: r, kind: "op", answer: row.opShort, choices: opChoices(row.opShort) };
      }
      return { row: r, kind: "val", answer: row.right };
    });
    return { prob: prob, blanks: blanks };
  };

  // Build 4 plausible move-buttons around the correct one.
  function opChoices(correct) {
    var set = {}; set[correct] = true;
    var m = /^([−+×÷])(\d+)/.exec(correct);
    if (m) {
      var sign = m[1], num = parseInt(m[2], 10);
      var flip = { "−": "+", "+": "−", "×": "÷", "÷": "×" }[sign];
      set[flip + num] = true;                                  // right number, wrong move
      if (num > 1) set[sign + (num + ri(1, 3))] = true;        // right move, wrong number
      set[sign + Math.max(1, num - ri(1, 3))] = true;
    }
    var keys = Object.keys(set);
    var extra = ["+1", "−1", "×2", "÷2"];
    while (keys.length < 4) { var e = extra[ri(0, extra.length - 1)]; if (!set[e]) { set[e] = true; keys.push(e); } }
    keys = Object.keys(set);
    for (var s = keys.length - 1; s > 0; s--) { var j = ri(0, s); var t = keys[s]; keys[s] = keys[j]; keys[j] = t; }
    return keys.slice(0, 4).indexOf(correct) === -1
      ? [correct].concat(keys.filter(function (k) { return k !== correct; }).slice(0, 3))
      : keys.slice(0, 4);
  }

  // A tidy fully-worked solution, for lessons and for revealing an answer.
  window.algebraWorkHTML = function (prob, opts) {
    opts = opts || {};
    var html = '<div class="alg-work">' +
      '<div class="alg-eq start">' + prob.equation + "</div>";
    prob.rows.forEach(function (r) {
      html += '<div class="alg-row">' +
        '<span class="alg-op">' + (opts.showOps === false ? "" : r.opText) + "</span>" +
        '<span class="alg-res">' + r.left + " = " + r.right + "</span></div>";
    });
    html += "</div>";
    return html;
  };
})();
