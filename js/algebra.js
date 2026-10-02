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
    // ---- basic algebra & division (added for the problem-solving quests) ----
    { id: "one-step",      name: "One-Step Equations",   idea: "Do the opposite operation to get x on its own: − undoes +, ÷ undoes ×." },
    { id: "eq-story",      name: "Story Problems",       idea: "Turn the words into an equation (x is the unknown), then solve it." },
    { id: "div-facts",     name: "Division Facts",       idea: "Division undoes multiplication. Ask: what times the divisor makes the number?" },
    { id: "div-story",     name: "Sharing Problems",     idea: "Sharing equally means dividing: the total ÷ the number of groups." },
    { id: "long-division", name: "Long Division",        idea: "Divide, multiply, subtract, bring down, then repeat until no digits are left." },
    { id: "div-equation",  name: "Equations with Division", idea: "Undo the + or − first, then multiply both sides to undo the ÷." },
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

  // ---- basic algebra ------------------------------------------------------
  //  Rows may carry: check (a "put it back in" line, hidden in fill-ins once a
  //  blank comes before it), sep (separator, default " = "), noBlank (never blanked in a
  //  fill-in), valOnly (blank only as a typed number).

  // x + a = b · x − a = b · ax = b · x ÷ a = b, then a "check" line.
  function oneStep(kind) {
    var a = ri(2, 12), x = ri(2, 15), v = kind || ["add", "sub", "mul", "div"][ri(0, 3)];
    var eq, row, check;
    if (v === "add") {
      eq = "x + " + a + " = " + (x + a);
      row = { opText: "Subtract " + a + " from both sides", opShort: "−" + a, left: "x", right: String(x) };
      check = x + " + " + a + " = " + (x + a);
    } else if (v === "sub") {
      if (x <= a) x = a + ri(1, 9);
      eq = "x − " + a + " = " + (x - a);
      row = { opText: "Add " + a + " to both sides", opShort: "+" + a, left: "x", right: String(x) };
      check = x + " − " + a + " = " + (x - a);
    } else if (v === "mul") {
      eq = a + "x = " + (a * x);
      row = { opText: "Divide both sides by " + a, opShort: "÷" + a, left: "x", right: String(x) };
      check = a + " × " + x + " = " + (a * x);
    } else {
      eq = "x ÷ " + a + " = " + x;
      x = a * x;
      row = { opText: "Multiply both sides by " + a, opShort: "×" + a, left: "x", right: String(x) };
      check = x + " ÷ " + a + " = " + (x / a);
    }
    return {
      type: "one-step", equation: eq, answer: x,
      rows: [row, { opText: "Check it: put " + x + " back in", left: "", sep: "", right: check + " ✓", noBlank: true, check: true }],
    };
  }

  // Word problems that become equations. "You" keeps them about the player.
  function eqStory() {
    var a, b, x, story, base;
    switch (ri(0, 5)) {
      case 0:
        a = ri(3, 15); x = ri(4, 20);
        story = "A Balanx starts with some pebbles. It finds " + a + " more and now has " + (x + a) + ". How many pebbles did it start with?";
        base = oneStepFrom("x + " + a + " = " + (x + a), { opText: "Subtract " + a + " from both sides", opShort: "−" + a, left: "x", right: String(x) }, x);
        break;
      case 1:
        a = ri(3, 15); x = a + ri(3, 20);
        story = "You had some orbs. You threw " + a + " of them and have " + (x - a) + " left. How many orbs did you start with?";
        base = oneStepFrom("x − " + a + " = " + (x - a), { opText: "Add " + a + " to both sides", opShort: "+" + a, left: "x", right: String(x) }, x);
        break;
      case 2:
        a = ri(3, 9); x = ri(3, 12);
        story = a + " identical baskets hold " + (a * x) + " berries in all. How many berries are in each basket?";
        base = oneStepFrom(a + "x = " + (a * x), { opText: "Divide both sides by " + a, opShort: "÷" + a, left: "x", right: String(x) }, x);
        break;
      case 3:
        a = ri(2, 9); b = ri(3, 12); x = a * b;
        story = "Some acorns are shared equally among " + a + " Tallyx, and each one gets " + b + ". How many acorns were there?";
        base = oneStepFrom("x ÷ " + a + " = " + b, { opText: "Multiply both sides by " + a, opShort: "×" + a, left: "x", right: String(x) }, x);
        break;
      case 4:
        a = ri(2, 6); b = ri(3, 15); x = ri(3, 12);
        story = "You buy " + a + " bags of seeds and a map that costs " + b + " orbs. You spend " + (a * x + b) + " orbs in all. How much does one bag of seeds cost?";
        base = { equation: a + "x + " + b + " = " + (a * x + b), answer: x, rows: [
          { opText: "Subtract " + b + " from both sides", opShort: "−" + b, left: cx(a), right: String(a * x) },
          { opText: "Divide both sides by " + a, opShort: "÷" + a, left: "x", right: String(x) }] };
        break;
      default:
        a = ri(2, 6); x = ri(4, 12); b = ri(2, a * x - 2);
        story = "A Sharewing gathers " + a + " equal piles of crumbs, then drops " + b + " crumbs. It has " + (a * x - b) + " left. How many crumbs were in each pile?";
        base = { equation: a + "x − " + b + " = " + (a * x - b), answer: x, rows: [
          { opText: "Add " + b + " to both sides", opShort: "+" + b, left: cx(a), right: String(a * x) },
          { opText: "Divide both sides by " + a, opShort: "÷" + a, left: "x", right: String(x) }] };
    }
    return {
      type: "eq-story", story: story, equation: story, answer: base.answer,
      ask: "Solve the story problem", placeholder: "answer",
      result: "the answer is " + base.answer,
      rows: [{ opText: "Write it as an equation (x is the unknown)", left: "", sep: "", right: base.equation, noBlank: true }]
        .concat(base.rows),
    };
  }
  function oneStepFrom(eq, row, x) { return { equation: eq, answer: x, rows: [row] }; }

  // ---- division -----------------------------------------------------------

  // a ÷ b with a whole-number answer, taught through its multiplication fact.
  function divFacts() {
    var b = ri(2, 12), q = ri(2, 12), a = b * q;
    return {
      type: "div-facts", equation: a + " ÷ " + b + " = ?", answer: q,
      ask: "Divide", placeholder: "answer", result: a + " ÷ " + b + " = " + q,
      rows: [
        { opText: "Division asks: how many " + b + "s make " + a + "?", left: "? × " + b, right: String(a), noBlank: true },
        { opText: "Use the times table: " + q + " × " + b + " = " + a, left: a + " ÷ " + b, right: String(q), valOnly: true },
      ],
    };
  }

  var SHARE_THINGS = ["acorns", "berries", "orbs", "seeds", "pebbles", "shells", "honey drops", "star fragments"];
  var SHARE_WHO = ["Tallyx", "Mosswardens", "Cloudlets", "Sootpips", "Coralkits", "Breezels", "Reedlings", "trainers"];
  function divStory() {
    var b = ri(2, 9), q = ri(3, 12), a = b * q;
    var thing = SHARE_THINGS[ri(0, SHARE_THINGS.length - 1)], who = SHARE_WHO[ri(0, SHARE_WHO.length - 1)];
    var story = a + " " + thing + " are shared equally among " + b + " " + who + ". How many " + thing + " does each one get?";
    return {
      type: "div-story", story: story, equation: story, answer: q,
      ask: "Solve the sharing problem", placeholder: "answer", result: a + " ÷ " + b + " = " + q + " " + thing + " each",
      rows: [
        { opText: "Sharing equally means dividing", left: "", sep: "", right: a + " ÷ " + b, noBlank: true },
        { opText: "Think: what times " + b + " makes " + a + "?", left: "? × " + b, right: String(a), noBlank: true },
        { opText: "So each one gets", left: a + " ÷ " + b, right: String(q), valOnly: true },
      ],
    };
  }

  // 3-digit ÷ 1-digit, no remainder, worked digit by digit:
  // divide → multiply & subtract → bring down → repeat.
  function longDivision() {
    var d = ri(3, 9), q = ri(Math.ceil(100 / d), Math.floor(999 / d)), n = q * d;
    var digits = String(n).split("").map(Number);
    var rows = [];
    var i = 0, chunk = digits[0];
    if (chunk < d) { i = 1; chunk = chunk * 10 + digits[1]; }
    while (true) {
      var qd = Math.floor(chunk / d), prod = qd * d, rem = chunk - prod;
      // (never blanked: the multiply line just below names this digit)
      rows.push({ opText: "Divide: how many " + d + "s fit into " + chunk + "?", left: chunk + " ÷ " + d, sep: " → ", right: String(qd), valOnly: true, noBlank: true });
      rows.push({ opText: "Multiply " + qd + " × " + d + " = " + prod + ", then subtract", left: chunk + " − " + prod, right: String(rem), valOnly: true });
      i++;
      if (i >= digits.length) break;
      var next = rem * 10 + digits[i];
      rows.push({ opText: "Bring down the " + digits[i], left: "bring down " + digits[i], sep: " → ", right: String(next), valOnly: true });
      chunk = next;
    }
    rows.push({ opText: "Read the answer along the top", left: n + " ÷ " + d, right: String(q), valOnly: true });
    return {
      type: "long-division", equation: n + " ÷ " + d + " = ?", answer: q,
      ask: "Divide (long division)", placeholder: "answer", result: n + " ÷ " + d + " = " + q,
      rows: rows,
    };
  }

  // x ÷ a + b = c   (or x ÷ a − b = c)
  function divEquation() {
    var a = ri(2, 9), k = ri(3, 12), x = a * k, b, c, minus = Math.random() < 0.35;
    if (minus) { b = ri(1, k - 1); c = k - b; } else { b = ri(2, 15); c = k + b; }
    return {
      type: "div-equation", equation: "x ÷ " + a + " " + (minus ? "−" : "+") + " " + b + " = " + c, answer: x,
      rows: [
        { opText: (minus ? "Add " : "Subtract ") + b + " on both sides", opShort: (minus ? "+" : "−") + b, left: "x ÷ " + a, right: String(k) },
        { opText: "Multiply both sides by " + a, opShort: "×" + a, left: "x", right: String(x) },
      ],
    };
  }

  var GEN = { "two-step": twoStep, "like-terms": likeTerms, "both-sides": bothSides,
              "distribute": distribute, "multi": multi,
              "one-step": oneStep, "eq-story": eqStory, "div-facts": divFacts,
              "div-story": divStory, "long-division": longDivision, "div-equation": divEquation };

  // `type` may be a single id or an array (a mixed bag — one picked per problem).
  window.makeAlgebraProblem = function (type) {
    if (Array.isArray(type)) type = type[ri(0, type.length - 1)];
    var g = GEN[type] || twoStep;
    var p = g();
    // labels for the challenge UI — solve-for-x by default
    if (!p.ask) p.ask = "Solve for x";
    if (!p.placeholder) p.placeholder = "x = ?";
    if (!p.result) p.result = "x = " + p.answer;
    return p;
  };

  // ---- fill-in-the-blank ------------------------------------------------
  //  Marks some parts of the worked solution as blanks the player must supply.
  //  Each blank is either kind:"op" (choose the move from buttons) or
  //  kind:"val" (type the number on the right-hand side).
  //  Returns { prob, blanks:[{row, kind, answer, choices?}] }
  window.makeAlgebraFill = function (type, howMany) {
    var prob = window.makeAlgebraProblem(type);
    var n = prob.rows.length;
    // rows marked noBlank (a "write it as an equation" line, a check line…)
    // are context, never gaps
    var idxs = [];
    for (var i = 0; i < n; i++) if (!prob.rows[i].noBlank) idxs.push(i);
    var want = Math.max(1, Math.min(howMany || 2, idxs.length));
    for (var s = idxs.length - 1; s > 0; s--) { var j = ri(0, s); var t = idxs[s]; idxs[s] = idxs[j]; idxs[j] = t; }
    idxs = idxs.slice(0, want).sort(function (p, q) { return p - q; });

    var blanks = idxs.map(function (r) {
      var row = prob.rows[r];
      // A "val" blank is a plain number box, so it can only go on a row whose
      // right-hand side is a bare integer — e.g. the first line of a full
      // multi-step still reads "2x + 72", which must stay an "op" blank.
      var numericRight = /^\d+$/.test(row.right);
      // valOnly rows (long division, division facts) are always number gaps;
      // otherwise the last row (÷ to isolate x) is most useful as an "op"
      // blank, and the rest alternate so the player practises both kinds
      var kind = row.valOnly && numericRight ? "val"
        : (!numericRight || !row.opShort || r === n - 1 || Math.random() < 0.5) ? "op" : "val";
      if (kind === "op" && !row.opShort) kind = "val";
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
      '<div class="alg-eq start' + (prob.story ? " story" : "") + '">' + prob.equation + "</div>";
    prob.rows.forEach(function (r) {
      html += '<div class="alg-row">' +
        '<span class="alg-op">' + (opts.showOps === false ? "" : r.opText) + "</span>" +
        '<span class="alg-res">' + window.algebraRowText(r) + "</span></div>";
    });
    html += "</div>";
    return html;
  };
  // "left = right", honouring a row's own separator (long division uses →)
  window.algebraRowText = function (r, rightHTML) {
    var sep = r.sep != null ? r.sep : " = ";
    return (r.left ? r.left + sep : "") + (rightHTML != null ? rightHTML : r.right);
  };
})();
