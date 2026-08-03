// ============================================================================
//  CRITTER QUEST — GAME ENGINE
//  Movement (arrow keys / WASD / click-to-move), camera, creature spawning,
//  encounters (math or spelling challenges), catching, Critterdex, settings,
//  XP + levels, saving.
// ============================================================================

(function () {
  var TILE = WORLD.TILE;
  var map, svg, spriteEl, spawnLayer, poiLayer, ultraLayer, questLayer;
  var VIEW = { w: 960, h: 640 };

  // ------------------------------------------------------------------ state
  var S = {
    name: "",
    xp: 0,
    dex: {},              // id -> {count, first}
    settings: { challenge: "ask", mathLevel: 1, spellLevel: 1, sound: true, flashMs: 2000, legendaryKangaroo: false, avatar: Object.assign({}, AVATAR.DEFAULT) },
    customWords: [],
    friends: [],          // slugs of friended trainers
    orbs: {},             // orb-type-key -> count
    ultras: null,         // active Ultra Legendaries: [{id, tx, ty}]
    arenas: {},           // arenaId -> {creatureId, level, owner, placedAt}
    quests: {},           // questId -> {status, step, items}
    pos: null,            // {tx, ty}
  };

  var P = {                // player runtime
    tx: 35, ty: 36, px: 0, py: 0,
    dir: "down", moving: false, path: [], targetSpawn: null,
    stepFrom: null, stepTo: null, stepT: 0,
  };

  var cam = { x: 0, y: 0 };
  var keys = {};
  var queuedDir = null, queuedAt = 0; // buffers quick key taps made mid-step
  var spawns = [];         // {id, tx, ty, creature, el, born}
  var mode = "title";      // title | world | encounter | dex | settings | help
  var lastZone = "";
  var spawnClock = 0;
  var lastTime = 0;

  // ------------------------------------------------------------------- sfx
  var audioCtx = null;
  function sfx(kind) {
    if (!S.settings.sound) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      var notes = {
        correct: [[660, 0, 0.09], [880, 0.09, 0.12]],
        wrong: [[220, 0, 0.15], [180, 0.13, 0.2]],
        catch: [[523, 0, 0.09], [659, 0.09, 0.09], [784, 0.18, 0.09], [1047, 0.27, 0.25]],
        flee: [[440, 0, 0.1], [330, 0.1, 0.1], [220, 0.2, 0.2]],
        throw: [[500, 0, 0.07], [700, 0.06, 0.08]],
        spawn: [[880, 0, 0.06], [1100, 0.06, 0.08]],
        level: [[523, 0, 0.1], [659, 0.1, 0.1], [784, 0.2, 0.1], [1047, 0.3, 0.3]],
      }[kind] || [];
      notes.forEach(function (n) {
        var o = audioCtx.createOscillator(), g = audioCtx.createGain();
        o.type = "triangle"; o.frequency.value = n[0];
        g.gain.setValueAtTime(0.12, audioCtx.currentTime + n[1]);
        g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + n[1] + n[2]);
        o.connect(g); g.connect(audioCtx.destination);
        o.start(audioCtx.currentTime + n[1]); o.stop(audioCtx.currentTime + n[1] + n[2] + 0.02);
      });
    } catch (e) {}
  }

  // ------------------------------------------------------------------ utils
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function walkable(tx, ty) {
    if (tx < 0 || ty < 0 || tx >= map.W || ty >= map.H) return false;
    return !map.at(tx, ty).block;
  }
  function critterSVG(c, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">' + (CRITTER_ART[c.id] || "") + "</svg>";
  }
  function typeChips(c) {
    return c.types.map(function (t) {
      return '<span class="type-chip" style="background:' + (TYPE_COLORS[t] || "#999") + '">' + t + "</span>";
    }).join("");
  }
  function starStr(r) { var n = RARITY_INFO[r].stars, total = n > 4 ? n : 4, s = ""; for (var i = 0; i < total; i++) s += i < n ? "★" : "☆"; return s; }
  function toast(msg, ms) {
    var t = $("toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, ms || 2600);
  }

  // ------------------------------------------------------------- level / xp
  function levelOf(xp) { return 1 + Math.floor(Math.sqrt(xp / 40)); }
  function xpForLevel(lv) { return 40 * (lv - 1) * (lv - 1); }
  function grantXP(amount) {
    var before = levelOf(S.xp);
    S.xp += amount;
    var after = levelOf(S.xp);
    if (after > before) {
      // level-up reward: a handful of assorted orbs
      for (var lv = before + 1; lv <= after; lv++) {
        var keys = ORB_ORDER.slice();
        for (var g = 0; g < 3; g++) giveOrb(keys[Math.floor(Math.random() * (keys.length - 1))], 2); // never prism here
        giveOrb("prism", 1);
      }
      toast("⭐ Level up! You reached level " + after + " — orbs added to your bag!");
      sfx("level");
    }
    updateHUD(); persist();
    checkEvolveReady();
  }
  function uniqueCaught() { return Object.keys(S.dex).length; }

  // ------------------------------------------------------------------ orbs
  function orbCount(key) { return S.orbs[key] || 0; }
  function totalOrbs() { return ORB_ORDER.reduce(function (s, k) { return s + orbCount(k); }, 0); }
  function giveOrb(key, n) { S.orbs[key] = (S.orbs[key] || 0) + (n || 1); }
  function spendOrb(key, n) { S.orbs[key] = Math.max(0, (S.orbs[key] || 0) - (n || 1)); }
  // which orb this creature can be caught with (prism is a universal fallback)
  function throwableOrb(creature) {
    var need = orbForZone(creature.zone);
    if (orbCount(need) > 0) return need;
    if (need !== "prism" && orbCount("prism") > 0) return "prism";
    return null;
  }

  function updateHUD() {
    $("hud-avatar").innerHTML = AVATAR.svg("down", S.settings.avatar);
    $("hud-name").textContent = S.name;
    var lv = levelOf(S.xp);
    $("hud-level").textContent = "Lv " + lv;
    var lo = xpForLevel(lv), hi = xpForLevel(lv + 1);
    $("hud-xpbar-fill").style.width = Math.min(100, ((S.xp - lo) / (hi - lo)) * 100) + "%";
    $("hud-caught").textContent = uniqueCaught() + " / " + CREATURES.length;
    var bc = $("bag-count");
    if (bc) bc.textContent = totalOrbs();
  }

  function persist() {
    S.pos = { tx: P.tx, ty: P.ty };
    SaveStore.save(S.name, {
      name: S.name, xp: S.xp, dex: S.dex, settings: S.settings,
      customWords: S.customWords, friends: S.friends, orbs: S.orbs,
      ultras: S.ultras, arenas: S.arenas, quests: S.quests, pos: S.pos, updated: Date.now(),
    });
  }

  // ------------------------------------------------------------ pathfinding
  function findPath(sx, sy, gx, gy) {
    if (!walkable(gx, gy)) return null;
    var q = [[sx, sy]], seen = {}, prev = {};
    seen[sx + "," + sy] = true;
    while (q.length) {
      var cur = q.shift(), cx = cur[0], cy = cur[1];
      if (cx === gx && cy === gy) {
        var path = [], k = gx + "," + gy;
        while (k !== sx + "," + sy) { var p = k.split(",").map(Number); path.unshift(p); k = prev[k]; }
        return path;
      }
      [[1,0],[-1,0],[0,1],[0,-1]].forEach(function (d) {
        var nx = cx + d[0], ny = cy + d[1], key = nx + "," + ny;
        if (!seen[key] && walkable(nx, ny)) { seen[key] = true; prev[key] = cx + "," + cy; q.push([nx, ny]); }
      });
    }
    return null;
  }

  // --------------------------------------------------------------- movement
  function renderSprite() {
    var pose = P.dir === "up" ? "up" : P.dir === "down" ? "down" : "side";
    var art = AVATAR.art(pose, S.settings.avatar);
    spriteEl.innerHTML = P.dir === "left" ? '<g transform="translate(48,0) scale(-1,1)">' + art + "</g>" : art;
  }

  function setFacing(dx, dy) {
    var dir = dy > 0 ? "down" : dy < 0 ? "up" : dx < 0 ? "left" : "right";
    if (dir === P.dir) return;
    P.dir = dir;
    renderSprite();
  }

  function beginStep(nx, ny) {
    setFacing(nx - P.tx, ny - P.ty);
    if (!walkable(nx, ny)) return false;
    P.stepFrom = [P.tx, P.ty]; P.stepTo = [nx, ny]; P.stepT = 0; P.moving = true;
    spriteEl.classList.add("walking");
    return true;
  }

  function finishStep() {
    P.tx = P.stepTo[0]; P.ty = P.stepTo[1];
    P.stepFrom = P.stepTo = null; P.moving = false;
    var t = map.at(P.tx, P.ty);
    if (t.zone !== lastZone) {
      lastZone = t.zone;
      toast("📍 " + map.zoneNames[t.zone]);
    }
    // reached a targeted spawn: pick up an orb / item, or engage a critter
    if (P.targetSpawn) {
      var sp = P.targetSpawn;
      if (Math.abs(sp.tx - P.tx) + Math.abs(sp.ty - P.ty) <= 1) {
        P.path = []; P.targetSpawn = null;
        if (sp.kind === "orb") { pickUpOrb(sp); return; }
        if (sp.kind === "questitem") { pickUpQuestItem(sp); return; }
        startEncounter(sp.creature, sp);
        return;
      }
    }
    // reached a targeted quest location
    if (P.targetQuest) {
      var tq = P.targetQuest;
      if (Math.abs(tq.step.tx - P.tx) + Math.abs(tq.step.ty - P.ty) <= 1) {
        P.path = []; P.targetQuest = null;
        reachQuestLoc(tq.qid, tq.step);
        return;
      }
    }
    // reached a targeted Ultra Legendary
    if (P.targetUltra) {
      var ur = P.targetUltra;
      if (Math.abs(ur.tx - P.tx) + Math.abs(ur.ty - P.ty) <= 1) {
        P.path = []; P.targetUltra = null;
        startUltraEncounter(ur);
        return;
      }
    }
    // reached a targeted POI (shop / arena / person)
    if (P.targetPoi) {
      if (poiDist(P.targetPoi) <= 1) {
        var poi = P.targetPoi;
        P.path = []; P.targetPoi = null;
        openPoi(poi);
        return;
      }
    }
    // surprise encounter in wild patches
    if (t.wild && Math.random() < 0.11 && mode === "world") {
      P.path = []; P.targetSpawn = null;
      startEncounter(pickCreature(t.zone), null);
    }
    persist();
  }

  function movementTick(dt) {
    if (mode !== "world") { spriteEl.classList.remove("walking"); return; }
    if (P.moving) {
      P.stepT += dt * 5.2; // tiles per second
      if (P.stepT >= 1) { P.stepT = 1; }
      P.px = (P.stepFrom[0] + (P.stepTo[0] - P.stepFrom[0]) * P.stepT) * TILE;
      P.py = (P.stepFrom[1] + (P.stepTo[1] - P.stepFrom[1]) * P.stepT) * TILE;
      if (P.stepT >= 1) finishStep();
      return;
    }
    P.px = P.tx * TILE; P.py = P.ty * TILE;
    // keyboard has priority
    var dx = 0, dy = 0;
    if (keys.ArrowUp || keys.KeyW) dy = -1;
    else if (keys.ArrowDown || keys.KeyS) dy = 1;
    else if (keys.ArrowLeft || keys.KeyA) dx = -1;
    else if (keys.ArrowRight || keys.KeyD) dx = 1;
    if (!dx && !dy && queuedDir && performance.now() - queuedAt < 450) {
      dx = queuedDir[0]; dy = queuedDir[1];
    }
    if (dx || dy) {
      queuedDir = null;
      P.path = []; P.targetSpawn = null; P.targetPoi = null; P.targetUltra = null; P.targetQuest = null;
      beginStep(P.tx + dx, P.ty + dy);
      return;
    }
    // then click-path
    if (P.path.length) {
      var next = P.path.shift();
      if (!beginStep(next[0], next[1])) P.path = [];
      return;
    }
    spriteEl.classList.remove("walking");
  }

  // ----------------------------------------------------------------- spawns
  // quest-only creatures are handled by the quest system, never the wild pool
  function wildCandidate(c, zone) { return c.zone === zone && !c.evolved && !c.quest; }
  function pickCreature(zone) {
    // Speed Mythicals roam every region — a rare, special timed-catch sighting.
    if (Math.random() < 0.015) {
      var speedsters = CREATURES.filter(function (c) { return c.rarity === "speedmythical"; });
      if (speedsters.length) return speedsters[Math.floor(Math.random() * speedsters.length)];
    }
    if (zone === "rift") {
      // the Astral Rift teems with rare, mythical and legendary power
      var rr = Math.random();
      if (rr < 0.15) {
        var legs = CREATURES.filter(function (c) { return c.rarity === "legendary"; });
        return legs[Math.floor(Math.random() * legs.length)];
      }
      var riftPool = CREATURES.filter(function (c) { return (c.zone === "rift" || c.rarity === "mythical") && !c.evolved && !c.quest; });
      return riftPool[Math.floor(Math.random() * riftPool.length)];
    }
    if (zone === "sanctum") {
      // the Sunken Sanctum: mostly its own creatures, with mythical & the odd legendary
      var sr = Math.random();
      if (sr < 0.10) {
        var slegs = CREATURES.filter(function (c) { return c.rarity === "legendary"; });
        return slegs[Math.floor(Math.random() * slegs.length)];
      }
      var sPool = CREATURES.filter(function (c) { return wildCandidate(c, "sanctum"); });
      // fold in mythicals occasionally
      if (sr > 0.85) { var myth = CREATURES.filter(function (c) { return c.rarity === "mythical" && c.zone === "sanctum" && !c.quest; }); if (myth.length) return myth[Math.floor(Math.random() * myth.length)]; }
      if (sPool.length) {
        var sw = { common: 6, uncommon: 3, rare: 1.4, mythical: 0.4 };
        var stot = sPool.reduce(function (s, c) { return s + (sw[c.rarity] || 1); }, 0);
        var srr = Math.random() * stot;
        for (var si = 0; si < sPool.length; si++) { srr -= (sw[sPool[si].rarity] || 1); if (srr <= 0) return sPool[si]; }
        return sPool[0];
      }
    }
    if (Math.random() < 0.012) { // legendary sighting!
      var legend = CREATURES.filter(function (c) { return c.rarity === "legendary"; });
      return legend[Math.floor(Math.random() * legend.length)];
    }
    var pool = CREATURES.filter(function (c) { return wildCandidate(c, zone); });
    if (!pool.length) pool = CREATURES.filter(function (c) { return wildCandidate(c, "meadow"); });
    var weights = { common: 6, uncommon: 3, rare: 1, mythical: 0.3 };
    var total = pool.reduce(function (s, c) { return s + (weights[c.rarity] || 1); }, 0);
    var r = Math.random() * total;
    for (var i = 0; i < pool.length; i++) {
      r -= (weights[pool[i].rarity] || 1);
      if (r <= 0) return pool[i];
    }
    return pool[0];
  }

  function orbForBiome(zone) {
    if (zone === "rift") return Math.random() < 0.35 ? "prism" : "rift";
    if (zone === "sanctum") return Math.random() < 0.30 ? "prism" : "sanctum";
    // lone orbs found in a biome are that biome's orb, with a rare prism find
    if (Math.random() < 0.06) return "prism";
    return orbForZone(zone === "any" ? "meadow" : zone);
  }

  function trySpawn() {
    if (spawns.length >= 7) return;
    // find a wild tile near the player
    for (var attempt = 0; attempt < 24; attempt++) {
      var tx = P.tx + Math.floor(Math.random() * 22) - 11;
      var ty = P.ty + Math.floor(Math.random() * 22) - 11;
      if (tx < 1 || ty < 1 || tx >= map.W - 1 || ty >= map.H - 1) continue;
      var t = map.at(tx, ty);
      if (!t.wild || t.block) continue;
      if (Math.abs(tx - P.tx) + Math.abs(ty - P.ty) < 3) continue; // not on top of player
      if (spawns.some(function (s) { return s.tx === tx && s.ty === ty; })) continue;
      // active quests seed their creatures / items with priority
      if (Math.random() < 0.4 && trySpawnQuest(tx, ty, t)) return;
      if (Math.random() < 0.35) {
        // a lone orb resting in the wild — click to grab it
        addSpawn({ kind: "orb", orb: orbForBiome(t.zone) }, tx, ty);
      } else {
        var c = pickCreature(t.zone);
        // some critters guard an orb you also get if you catch them
        var carried = Math.random() < 0.35 ? orbForBiome(t.zone) : null;
        addSpawn({ kind: "creature", creature: c, orb: carried }, tx, ty);
      }
      return;
    }
  }

  function addSpawn(spec, tx, ty) {
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "spawn-marker");
    g.setAttribute("transform", "translate(" + (tx * TILE) + "," + (ty * TILE) + ")");
    var sp = { kind: spec.kind, tx: tx, ty: ty, creature: spec.creature, orb: spec.orb, el: g, born: performance.now(),
               quest: spec.quest, questId: spec.questId, item: spec.item };
    if (spec.kind === "questitem") {
      g.innerHTML =
        '<ellipse cx="24" cy="42" rx="11" ry="3.5" fill="#000" opacity=".16"/>' +
        '<circle cx="24" cy="24" r="18" fill="#ffe066" opacity=".3" class="glowpulse"/>' +
        '<g class="spawn-bob"><text x="24" y="32" font-size="26" text-anchor="middle">' + (spec.emoji || "✨") + "</text></g>";
    } else if (spec.kind === "orb") {
      var oc = (ORB_TYPES[spec.orb] || {}).color || "#888";
      g.innerHTML =
        '<ellipse cx="24" cy="42" rx="11" ry="3.5" fill="#000" opacity=".16"/>' +
        '<circle cx="24" cy="24" r="18" fill="' + oc + '" opacity=".18" class="glowpulse"/>' +
        '<g class="spawn-bob"><svg x="6" y="4" width="36" height="36" viewBox="0 0 48 48">' + orbArt(spec.orb) + "</svg></g>";
    } else {
      var creature = spec.creature;
      var ringColor = RARITY_INFO[creature.rarity].color;
      g.innerHTML =
        '<ellipse cx="24" cy="42" rx="13" ry="4" fill="#000" opacity=".18"/>' +
        '<circle cx="24" cy="22" r="19" fill="#fff" opacity=".82" stroke="' + ringColor + '" stroke-width="3"/>' +
        '<g class="spawn-bob"><svg x="4" y="2" width="40" height="40" viewBox="0 0 120 120">' + (CRITTER_ART[creature.id] || "") + "</svg></g>" +
        (creature.rarity === "legendary" ? '<circle cx="24" cy="22" r="22" fill="none" stroke="#ffd94d" stroke-width="2" class="glowpulse"/>' : "") +
        (spec.orb ? '<svg x="30" y="26" width="20" height="20" viewBox="0 0 48 48">' + orbArt(spec.orb) + "</svg>" : "");
    }
    g.addEventListener("click", function (ev) { ev.stopPropagation(); clickSpawn(sp); });
    spawnLayer.appendChild(g);
    spawns.push(sp);
    if (spec.kind === "creature" && creature.rarity === "legendary") { toast("✨ A legendary presence stirs nearby..."); sfx("spawn"); }
  }

  function removeSpawn(sp) {
    var i = spawns.indexOf(sp);
    if (i >= 0) spawns.splice(i, 1);
    if (sp.el && sp.el.parentNode) sp.el.parentNode.removeChild(sp.el);
  }

  function pickUpOrb(sp) {
    giveOrb(sp.orb, 1);
    sfx("spawn");
    toast("✨ Picked up a " + ORB_TYPES[sp.orb].name + "!  (+1)");
    removeSpawn(sp);
    updateHUD(); persist();
    checkEvolveReady();
  }

  function pickUpQuestItem(sp) {
    sfx("spawn");
    var qid = sp.questId;
    removeSpawn(sp);
    questOnItem(qid);
  }

  function clickSpawn(sp) {
    if (mode !== "world") return;
    var dist = Math.abs(sp.tx - P.tx) + Math.abs(sp.ty - P.ty);
    // walk to the orb / item / critter, then pick up or engage on arrival
    if (dist <= 1) {
      if (sp.kind === "orb") { pickUpOrb(sp); return; }
      if (sp.kind === "questitem") { pickUpQuestItem(sp); return; }
      startEncounter(sp.creature, sp); return;
    }
    // path to the spawn's tile (orbs/items sit on walkable wild tiles) or adjacent
    var best = null;
    [[0,0],[1,0],[-1,0],[0,1],[0,-1]].forEach(function (d) {
      var ax = sp.tx + d[0], ay = sp.ty + d[1];
      if (!walkable(ax, ay)) return;
      var path = findPath(P.tx, P.ty, ax, ay);
      if (path && (!best || path.length < best.length)) best = path;
    });
    if (best) {
      P.path = best; P.targetSpawn = sp;
      toast(sp.kind === "orb" ? "Walking over to the " + ORB_TYPES[sp.orb].name + "..."
        : sp.kind === "questitem" ? "Going to collect the " + sp.item + "..."
        : "Heading toward the " + sp.creature.name + "...");
    }
  }

  function spawnTick(dt) {
    spawnClock += dt;
    if (spawnClock > 2.5) { spawnClock = 0; if (mode === "world") trySpawn(); }
    var now = performance.now();
    for (var i = spawns.length - 1; i >= 0; i--) {
      if (now - spawns[i].born > 55000) {
        if (P.targetSpawn === spawns[i]) { P.targetSpawn = null; P.path = []; }
        removeSpawn(spawns[i]);
      }
    }
  }

  // ----------------------------------------------------------------- camera
  function cameraTick(dt) {
    var targetX = P.px + TILE / 2 - VIEW.w / 2;
    var targetY = P.py + TILE / 2 - VIEW.h / 2;
    targetX = Math.max(0, Math.min(map.W * TILE - VIEW.w, targetX));
    targetY = Math.max(0, Math.min(map.H * TILE - VIEW.h, targetY));
    var k = Math.min(1, dt * 6);
    cam.x += (targetX - cam.x) * k;
    cam.y += (targetY - cam.y) * k;
    svg.setAttribute("viewBox", cam.x.toFixed(1) + " " + cam.y.toFixed(1) + " " + VIEW.w + " " + VIEW.h);
  }

  function resize() {
    var wrap = $("world-wrap");
    VIEW.w = Math.min(wrap.clientWidth || 960, map.W * TILE);
    VIEW.h = Math.min(wrap.clientHeight || 640, map.H * TILE);
  }

  // -------------------------------------------------------------- main loop
  // Hybrid frame driver: requestAnimationFrame when the tab is visible, with a
  // setTimeout fallback so the game keeps simulating when rAF is throttled
  // (hidden/backgrounded tab). Long gaps are replayed in small sub-steps.
  var rafId = null, timerId = null;
  function frame() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    if (timerId) { clearTimeout(timerId); timerId = null; }
    var now = performance.now();
    var elapsed = Math.min(0.6, (now - lastTime) / 1000 || 0);
    lastTime = now;
    try {
      if (mode !== "title") {
        while (elapsed > 0) {
          var dt = Math.min(0.05, elapsed);
          elapsed -= dt;
          movementTick(dt);
          cameraTick(dt);
          spawnTick(dt);
        }
        spriteEl.parentNode.setAttribute("transform", "translate(" + P.px + "," + P.py + ")");
      }
    } catch (err) {
      console.error("Game loop error:", err);
    }
    rafId = requestAnimationFrame(frame);
    timerId = setTimeout(frame, 66);
  }

  // ================================================================ ENCOUNTER
  var ENC = null; // {creature, will, misses, spawn, method}

  function startEncounter(creature, spawn, ultraRec, questId) {
    mode = "encounter";
    var isLeg = creature.rarity === "legendary" || creature.rarity === "ultra";
    ENC = { creature: creature, will: 1, misses: 0, spawn: spawn, method: null, busy: false,
            guard: creature.guard || 0, attachedOrb: spawn && spawn.orb || null,
            ultra: ultraRec || null, questId: questId || (spawn && spawn.quest) || null,
            forceKangaroo: isLeg && !!S.settings.legendaryKangaroo };
    if (spawn) removeSpawn(spawn);
    sfx("spawn");
    var c = creature;
    $("enc-art").innerHTML = critterSVG(c, "enc-critter");
    $("enc-name").textContent = c.rarity === "ultra"
      ? "✦ You found " + c.name + ", an Ultra Legendary!"
      : "A wild " + c.name + " appeared!";
    $("enc-species").textContent = c.species;
    $("enc-types").innerHTML = typeChips(c);
    $("enc-rarity").innerHTML = '<span style="color:' + RARITY_INFO[c.rarity].color + '">' + starStr(c.rarity) + " " + RARITY_INFO[c.rarity].label + "</span>";
    $("enc-hp").textContent = "HP " + c.hp;
    setWill(1);
    setMisses(0);
    setGuard(ENC.guard);
    updateEncOrb();
    $("enc-result").style.display = "none";
    $("enc-main").style.display = "";
    $("encounter").classList.add("open");
    // Speed Mythical: a special orb-free timed catch (beat the clock on 5 times-tables)
    var isSpeed = c.rarity === "speedmythical";
    $("encounter").classList.toggle("speed-mode", isSpeed);
    if (isSpeed) {
      $("enc-name").textContent = "⚡ A blazing-fast " + c.name + " zips past!";
      startSpeedCatch();
      return;
    }
    msg(ENC.guard > 0
      ? (c.rarity === "ultra" ? "✦ An Ultra Legendary aura blazes around it! " : "⚡ A legendary aura shields it! ") +
        "Your orbs can't fly until " + ENC.guard + " correct answer" + (ENC.guard > 1 ? "s crack" : " cracks") + " its guard."
      : "It watches you curiously. Answer challenges to weaken its will, then it throws itself into your orb!");
    startChallenges({
      pref: S.settings.challenge, method: null, forceKangaroo: ENC.forceKangaroo,
      mathLevel: S.settings.mathLevel, spellLevel: S.settings.spellLevel,
      actionWord: "throw your orb", doWord: "Throw!",
    }, $("enc-challenge"), resolveAnswer, function () { return ENC.busy; });
  }

  // ---- Speed Mythical catch: 30-second timer, solve 5 times-tables ----
  var speedTimer = null, speedState = null;
  function startSpeedCatch() {
    var TOTAL = 30000, NEED = 5;
    speedState = { solved: 0, need: NEED, total: TOTAL, deadline: Date.now() + TOTAL, a: 0, b: 0 };
    $("enc-msg").innerHTML =
      '<div class="speed-intro">⚡ Too fast for an orb! Solve <b>5 times-tables</b> before the timer runs out to befriend it!</div>' +
      '<div class="speed-progress">Solved <b id="speed-solved">0</b> / ' + NEED + ' &nbsp;·&nbsp; <b id="speed-clock">30.0</b>s left</div>' +
      '<div class="speed-timer"><div id="speed-timer-fill"></div></div>';
    speedProblem();
    clearInterval(speedTimer);
    speedTimer = setInterval(speedTimerUpdate, 100);
    speedTimerUpdate();
  }
  function speedTimerUpdate() {
    if (!speedState) { clearInterval(speedTimer); return; }
    var left = speedState.deadline - Date.now();
    if (left < 0) left = 0;
    var pct = (left / speedState.total) * 100;
    var fill = $("speed-timer-fill");
    if (fill) { fill.style.width = pct + "%"; fill.style.background = pct > 50 ? "#5cb85c" : pct > 20 ? "#e6c229" : "#e8703a"; }
    var clock = $("speed-clock"); if (clock) clock.textContent = (left / 1000).toFixed(1);
    if (left <= 0) speedFail();
  }
  function speedProblem() {
    if (!speedState) return;
    speedState.a = 1 + Math.floor(Math.random() * 12);
    speedState.b = 1 + Math.floor(Math.random() * 12);
    $("enc-challenge").innerHTML =
      '<div class="speed-count">Problem ' + (speedState.solved + 1) + ' of ' + speedState.need + '</div>' +
      '<div class="math-q">' + speedState.a + " × " + speedState.b + ' = ?</div>' +
      '<div class="answer-row center"><input class="answer-input" id="speed-input" type="number" inputmode="numeric" placeholder="?" autocomplete="off"><button class="big-btn go" id="speed-go">Go!</button></div>' +
      '<div class="npc-feedback" id="speed-feedback"></div>';
    var input = $("speed-input");
    function submit() {
      if (!speedState || input.value.trim() === "") return;
      if (parseInt(input.value, 10) === speedState.a * speedState.b) {
        sfx("correct");
        speedState.solved++;
        var s = $("speed-solved"); if (s) s.textContent = speedState.solved;
        if (speedState.solved >= speedState.need) { speedWin(); return; }
        speedProblem();
      } else {
        sfx("wrong");
        var fb = $("speed-feedback"); if (fb) fb.textContent = "❌ " + speedState.a + " × " + speedState.b + " = " + (speedState.a * speedState.b) + " — quick, next one!";
        speedProblem();
      }
    }
    $("speed-go").onclick = submit;
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    setTimeout(function () { var i = $("speed-input"); if (i) i.focus(); }, 40);
  }
  function speedWin() {
    clearInterval(speedTimer); speedTimer = null; speedState = null;
    sfx("level");
    catchSuccess();
  }
  function speedFail() {
    clearInterval(speedTimer); speedTimer = null; speedState = null;
    sfx("flee");
    var c = ENC.creature;
    $("enc-main").style.display = "none";
    var r = $("enc-result"); r.style.display = "";
    r.innerHTML =
      '<div class="catch-banner" style="background:#7d6b9e">💨 So close! ' + esc(c.name) + " blurred away!</div>" +
      '<div class="catch-body" style="justify-content:center"><div class="catch-art" style="opacity:.55">' + critterSVG(c, "enc-critter") + "</div></div>" +
      '<div class="npc-line" style="text-align:center;padding:0 14px">The timer ran out — but a Speed Mythical always circles back. Sharpen your times-tables and try again when you spot one!</div>' +
      '<div class="catch-actions"><button class="big-btn go" id="enc-continue">Keep exploring</button></div>';
    $("enc-continue").onclick = closeEncounter;
  }

  function setGuard(n) {
    var row = $("enc-guard");
    var total = ENC.creature.guard || 0;
    if (!total) { row.style.display = "none"; return; }
    row.style.display = "";
    var html = '<span class="guard-label">AURA GUARD</span>';
    for (var i = 0; i < total; i++) html += '<span class="guard-pip' + (i < n ? " intact" : "") + '">🛡</span>';
    row.innerHTML = html;
  }

  // Shows which orb this critter needs and how many you're carrying.
  function updateEncOrb() {
    var row = $("enc-orb");
    if (!row) return;
    var need = orbForZone(ENC.creature.zone);
    var have = orbCount(need);
    var usingPrism = have === 0 && need !== "prism" && orbCount("prism") > 0;
    var showKey = usingPrism ? "prism" : need;
    var showHave = orbCount(showKey);
    row.innerHTML =
      orbSVG(showKey, "enc-orb-icon") +
      '<span class="enc-orb-txt">' + ORB_TYPES[showKey].name + ' ×<b class="' + (showHave ? "" : "out") + '">' + showHave + "</b>" +
      (usingPrism ? " <em>(using Prism as backup)</em>" : "") + "</span>";
    row.classList.toggle("empty", showHave === 0);
  }

  function msg(html) { $("enc-msg").innerHTML = html; }

  function setWill(v) {
    ENC.will = Math.max(0, Math.min(1, v));
    var f = $("enc-will-fill");
    f.style.width = (ENC.will * 100) + "%";
    f.style.background = ENC.will > 0.55 ? "#5cb85c" : ENC.will > 0.25 ? "#e6c229" : "#e8703a";
  }
  function setMisses(n) {
    ENC.misses = n;
    var pips = $("enc-escape").children;
    for (var i = 0; i < pips.length; i++) pips[i].classList.toggle("lit", i < n);
  }

  // ---- challenge presentation (shared by encounters AND arena battles) ----
  //  A "challenge context" says where to render, who resolves the answer, and
  //  which difficulty/labels to use, so the same math/spelling widgets drive
  //  both catching and battling.
  var chalCtx = null;   // { pref, method, forceKangaroo, mathLevel, spellLevel, actionWord, doWord }
  var chalBox = null;   // container element
  var chalResolve = null; // fn(correct, revealHtml)
  var chalBusy = function () { return false; };

  function startChallenges(ctx, boxEl, resolveFn, busyFn) {
    chalCtx = ctx; chalBox = boxEl; chalResolve = resolveFn; chalBusy = busyFn || function () { return false; };
    nextChallenge();
  }

  function nextChallenge() {
    var box = chalBox;
    box.innerHTML = "";
    if (chalCtx.forceKangaroo) { showKangaroo(box); return; }
    var pref = chalCtx.pref;
    if (pref === "ask" && chalCtx.method == null) {
      box.appendChild(el("div", "chal-title", "How will you " + chalCtx.actionWord + "?"));
      var row = el("div", "chal-choice-row");
      var bMath = el("button", "big-btn", "🔢 Math Problem");
      var bSpell = el("button", "big-btn", "🔤 Spell a Word");
      bMath.onclick = function () { chalCtx.method = "math"; nextChallenge(); };
      bSpell.onclick = function () { chalCtx.method = "spell"; nextChallenge(); };
      row.appendChild(bMath); row.appendChild(bSpell);
      box.appendChild(row);
      return;
    }
    var method = pref === "ask" ? chalCtx.method : pref;
    if (method === "math") {
      if (+chalCtx.mathLevel === 4) showKangaroo(box); else showMath(box);
    } else showSpelling(box);
  }

  function switchLink(box, current) {
    if (chalCtx.pref !== "ask" || chalCtx.forceKangaroo) return;
    var link = el("button", "switch-link", current === "math" ? "switch to spelling →" : "← switch to math");
    link.onclick = function () { chalCtx.method = current === "math" ? "spell" : "math"; nextChallenge(); };
    box.appendChild(link);
  }

  // Visual Math-Kangaroo problem (typed answer OR multiple-choice).
  function showKangaroo(box) {
    var prob = makeKangarooProblem();
    box.appendChild(el("div", "chal-title",
      (chalCtx.forceKangaroo ? "🦘 Legendary challenge — solve the puzzle!  " : "Solve the puzzle to " + chalCtx.actionWord + "  ") +
      "<span class='lvl-tag kang'>Kangaroo</span>"));
    box.appendChild(el("div", "kang-q", prob.q));
    box.appendChild(el("div", "kang-art", prob.svg));

    if (prob.choices) {
      var opts = el("div", "kang-choices");
      prob.choices.forEach(function (ch, i) {
        var b = el("button", "kang-opt", ch.svg || ch.label || String(i));
        b.onclick = function () { if (chalBusy()) return; chalResolve(i === prob.a, ""); };
        opts.appendChild(b);
      });
      box.appendChild(opts);
      switchLink(box, "math");
      return;
    }
    var row = el("div", "answer-row center");
    var input = document.createElement("input");
    input.type = "number"; input.step = "1"; input.className = "answer-input"; input.placeholder = "answer";
    input.autocomplete = "off";
    var btn = el("button", "big-btn go", chalCtx.doWord);
    row.appendChild(input); row.appendChild(btn);
    box.appendChild(row);
    switchLink(box, "math");
    function submit() {
      if (chalBusy() || input.value.trim() === "") return;
      chalResolve(Math.abs(parseFloat(input.value) - prob.a) < 1e-9, "The answer was <b>" + prob.a + "</b>.");
    }
    btn.onclick = submit;
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    setTimeout(function () { input.focus(); }, 60);
  }

  function showMath(box) {
    var prob = makeMathProblem(chalCtx.mathLevel);
    box.appendChild(el("div", "chal-title", "Solve to " + chalCtx.actionWord + "  <span class='lvl-tag'>" + MATH_LEVELS[chalCtx.mathLevel].name + "</span>"));
    box.appendChild(el("div", "math-q", prob.q));
    var row = el("div", "answer-row");
    var input = document.createElement("input");
    input.type = "number"; input.step = "any"; input.className = "answer-input"; input.placeholder = "answer";
    input.autocomplete = "off";
    var btn = el("button", "big-btn go", chalCtx.doWord);
    row.appendChild(input); row.appendChild(btn);
    box.appendChild(row);
    switchLink(box, "math");
    function submit() {
      if (chalBusy() || input.value.trim() === "") return;
      chalResolve(Math.abs(parseFloat(input.value) - prob.a) < 1e-9, "The answer was <b>" + prob.a + "</b>.");
    }
    btn.onclick = submit;
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
    setTimeout(function () { input.focus(); }, 60);
  }

  function showSpelling(box) {
    if (+chalCtx.spellLevel === 4) { showPictureSpelling(box); return; }
    var word = pickSpellWord(chalCtx.spellLevel, S.customWords);
    if (!word) { box.appendChild(el("div", "chal-title", "Your custom word bank is empty — add words in Settings, or switch method.")); switchLink(box, "spell"); return; }
    var flashMs = S.settings.flashMs || 2000;
    box.appendChild(el("div", "chal-title", "Memorize the word!  <span class='lvl-tag'>" + SPELL_LEVELS[chalCtx.spellLevel].name + "</span>"));
    var flash = el("div", "spell-flash", word);
    var timerBar = el("div", "flash-timer", "<div class='flash-timer-fill'></div>");
    box.appendChild(flash);
    box.appendChild(timerBar);
    timerBar.firstChild.style.transitionDuration = flashMs + "ms";
    requestAnimationFrame(function () { timerBar.firstChild.classList.add("run"); });
    setTimeout(function () {
      if (mode !== "encounter" && mode !== "battle") return;
      flash.textContent = "• • •";
      flash.classList.add("hidden-word");
      timerBar.style.visibility = "hidden";
      var row = el("div", "answer-row");
      var input = document.createElement("input");
      input.type = "text"; input.className = "answer-input spell"; input.placeholder = "type the word";
      input.autocomplete = "off"; input.autocapitalize = "off"; input.spellcheck = false;
      var btn = el("button", "big-btn go", chalCtx.doWord);
      row.appendChild(input); row.appendChild(btn);
      box.appendChild(row);
      switchLink(box, "spell");
      function submit() {
        if (chalBusy() || input.value.trim() === "") return;
        chalResolve(input.value.trim().toLowerCase() === word.toLowerCase(), "It was spelled <b>" + word + "</b>.");
      }
      btn.onclick = submit;
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
      setTimeout(function () { input.focus(); }, 60);
    }, flashMs);
  }

  // Easiest spelling mode: a picture is shown and the player types the
  // missing letters of the word. No timed flash — the picture stays up.
  function showPictureSpelling(box) {
    var item = pickPictureWord();
    var word = item.word;
    box.appendChild(el("div", "chal-title", "Fill in the missing letters!  <span class='lvl-tag'>Picture Words</span>"));
    var pic = el("div", "pic-frame");
    pic.innerHTML = item.picture.emoji
      ? '<div class="pic-emoji">' + item.picture.emoji + "</div>"
      : '<div class="pic-svg">' + item.picture.svg + "</div>";
    box.appendChild(pic);

    var boxesWrap = el("div", "letter-boxes");
    var inputs = [];
    for (var i = 0; i < word.length; i++) {
      if (item.mask[i]) {
        var inp = document.createElement("input");
        inp.type = "text"; inp.maxLength = 1; inp.className = "letter-box blank";
        inp.autocomplete = "off"; inp.autocapitalize = "off"; inp.spellcheck = false;
        inp.dataset.pos = i;
        boxesWrap.appendChild(inp);
        inputs.push(inp);
      } else {
        boxesWrap.appendChild(el("div", "letter-box fixed", word[i].toUpperCase()));
      }
    }
    box.appendChild(boxesWrap);

    var row = el("div", "answer-row center");
    var btn = el("button", "big-btn go", chalCtx.doWord);
    row.appendChild(btn);
    box.appendChild(row);
    switchLink(box, "spell");

    inputs.forEach(function (inp, k) {
      inp.addEventListener("input", function () {
        inp.value = inp.value.replace(/[^a-zA-Z]/g, "").toLowerCase();
        if (inp.value && k < inputs.length - 1) inputs[k + 1].focus();
      });
      inp.addEventListener("keydown", function (e) {
        if (e.key === "Backspace" && !inp.value && k > 0) inputs[k - 1].focus();
        else if (e.key === "Enter") submit();
      });
    });

    function submit() {
      if (chalBusy()) return;
      if (inputs.some(function (x) { return !x.value; })) { inputs.filter(function (x) { return !x.value; })[0].focus(); return; }
      var guess = "";
      for (var i = 0; i < word.length; i++) guess += item.mask[i] ? (inputs.filter(function (x) { return +x.dataset.pos === i; })[0].value) : word[i];
      chalResolve(guess.toLowerCase() === word.toLowerCase(), "The word was <b>" + word + "</b>.");
    }
    btn.onclick = submit;
    setTimeout(function () { if (inputs[0]) inputs[0].focus(); }, 60);
  }

  // ---- answer resolution & catch mechanics ----
  function resolveAnswer(correct, revealHtml) {
    ENC.busy = true;
    if (correct) {
      sfx("correct");
      setWill(ENC.will - 0.34);
      if (ENC.guard > 0) {
        ENC.guard--;
        setGuard(ENC.guard);
        msg(ENC.guard > 0
          ? "✨ Correct! A layer of its aura shatters — " + ENC.guard + " more to break through!"
          : "✨ Correct! Its aura is broken — your next correct answer sends the orb flying!");
        setTimeout(function () { ENC.busy = false; nextChallenge(); }, 1500);
        return;
      }
      // need an orb of the right type to actually throw
      var useKey = throwableOrb(ENC.creature);
      if (!useKey) {
        var need = orbForZone(ENC.creature.zone);
        msg("✅ Correct — but you're out of <b>" + ORB_TYPES[need].name + "s</b>! " +
            "Walk over to a loose orb in the wild to grab one, then come back. Its will is weakened for now.");
        updateEncOrb();
        setTimeout(function () { ENC.busy = false; nextChallenge(); }, 1900);
        return;
      }
      spendOrb(useKey, 1);
      updateEncOrb(); updateHUD();
      throwOrb(useKey);
    } else {
      sfx("wrong");
      var c = ENC.creature;
      var power = c.powers[Math.floor(Math.random() * c.powers.length)];
      setMisses(ENC.misses + 1);
      if (ENC.misses >= 3) {
        msg("❌ Not quite — " + revealHtml + "<br>" + c.name + " used <b>" + power.n + "</b> and fled!");
        setTimeout(fleeEncounter, 1600);
      } else {
        msg("❌ Not quite — " + revealHtml + "<br>" + c.name + " used <b>" + power.n + "</b>! " + power.d);
        setTimeout(function () { ENC.busy = false; nextChallenge(); }, 1700);
      }
    }
  }

  function throwOrb(orbKey) {
    var stage = $("enc-art");
    var orb = el("div", "orb");
    var oc = (ORB_TYPES[orbKey] || {}).color;
    if (oc) orb.style.setProperty("--orb-color", oc);
    stage.appendChild(orb);
    msg("🎯 Great throw — a " + (ORB_TYPES[orbKey] || {}).name + "!");
    sfx("throw");
    setTimeout(function () { orb.classList.add("fly"); }, 30);
    setTimeout(function () {
      stage.querySelector(".enc-critter").style.opacity = "0";
      orb.classList.add("shake");
    }, 640);
    setTimeout(function () {
      var c = ENC.creature;
      var chance = RARITY_INFO[c.rarity].baseCatch + (1 - ENC.will) * 0.55;
      if (Math.random() < chance) {
        orb.classList.add("caught");
        sfx("catch");
        setTimeout(function () { catchSuccess(); }, 700);
      } else {
        orb.remove();
        stage.querySelector(".enc-critter").style.opacity = "1";
        msg("💨 " + c.name + " broke free! Its will is weakening though — try another challenge.");
        setTimeout(function () { ENC.busy = false; nextChallenge(); }, 1200);
      }
    }, 2100);
  }

  function catchSuccess() {
    var c = ENC.creature;
    var isNew = !S.dex[c.id];
    if (isNew) S.dex[c.id] = { count: 1, first: Date.now() };
    else S.dex[c.id].count++;
    var xp = RARITY_INFO[c.rarity].xp;
    if (!isNew) xp = Math.ceil(xp / 2);

    // orb rewards: a base drop of this biome's orb, extra if it guarded one
    var dropKey = orbForZone(c.zone);
    var dropN = 1 + (Math.random() < 0.4 ? 1 : 0);
    giveOrb(dropKey, dropN);
    var extra = "";
    if (ENC.attachedOrb) { giveOrb(ENC.attachedOrb, 2); }
    var orbLine = orbSVG(dropKey, "reward-orb") + " +" + dropN + " " + ORB_TYPES[dropKey].name +
      (ENC.attachedOrb ? "   " + orbSVG(ENC.attachedOrb, "reward-orb") + " +2 " + ORB_TYPES[ENC.attachedOrb].name + " (it was guarding these!)" : "");

    $("enc-main").style.display = "none";
    var r = $("enc-result");
    r.style.display = "";
    var isUltra = c.rarity === "ultra";
    r.innerHTML =
      '<div class="catch-banner' + (isUltra ? " ultra" : "") + '">' + (isUltra ? "✦ INCREDIBLE! " : "Gotcha! ") + "<b>" + c.name + "</b> was caught!</div>" +
      '<div class="catch-body">' +
      '<div class="catch-art">' + critterSVG(c, "enc-critter") + "</div>" +
      '<div class="catch-info">' +
      '<div class="catch-name">' + c.name + ' <span class="catch-species">· ' + c.species + "</span></div>" +
      '<div class="catch-chips">' + typeChips(c) + ' <span style="color:' + RARITY_INFO[c.rarity].color + '">' + starStr(c.rarity) + "</span></div>" +
      '<div class="stat-grid">' + statBars(c) + "</div>" +
      '<div class="catch-story">' + c.story + "</div>" +
      '<div class="catch-xp">+' + xp + " XP" + (isNew ? ' · <b>New Critterdex entry!</b>' : " · duplicate") + "</div>" +
      '<div class="reward-orbs">' + orbLine + "</div>" +
      (isUltra ? '<div class="evolve-hint">✦ An Ultra Legendary! Somewhere far away, a new one has just appeared. Ask the townsfolk for a clue...</div>' : "") +
      (c.evolvesTo ? '<div class="evolve-hint">✨ This critter can evolve! Feed it <b>' + c.evolveOrbs + " " + ORB_TYPES[orbForZone(c.zone)].name +
        "s</b> in your Critterdex to grow it into <b>" + CREATURE_BY_ID[c.evolvesTo].name + "</b>.</div>" : "") +
      "</div></div>" +
      '<div class="catch-actions"><button class="big-btn go" id="enc-continue">Continue exploring</button></div>';
    $("enc-continue").onclick = closeEncounter;
    if (ENC.ultra) onUltraCaught(ENC.ultra);
    questOnCatch(c.id);
    grantXP(xp);
    updateHUD();
    persist();
  }

  function statBars(c) {
    function bar(label, v, max) {
      return '<div class="stat-row"><span class="stat-label">' + label + '</span>' +
        '<div class="stat-bar"><div class="stat-bar-fill" style="width:' + Math.round((v / max) * 100) + '%"></div></div>' +
        '<span class="stat-val">' + v + "</span></div>";
    }
    return bar("HP", c.hp, 100) + bar("Attack", c.atk, 100) + bar("Defense", c.def, 100) + bar("Speed", c.spd, 100);
  }

  function fleeEncounter() {
    sfx("flee");
    closeEncounter();
    toast("It got away...");
  }

  function closeEncounter() {
    clearInterval(speedTimer); speedTimer = null; speedState = null;
    $("encounter").classList.remove("open");
    $("encounter").classList.remove("speed-mode");
    ENC = null;
    mode = "world";
  }

  // ------------------------------------------------------------ evolution
  // an owned base critter whose evolved form isn't in the dex yet
  function canEvolve(c) { return c.evolvesTo && S.dex[c.id] && !S.dex[c.evolvesTo]; }
  function evolveReady(c) { return canEvolve(c) && orbCount(orbForZone(c.zone)) >= c.evolveOrbs; }
  function evolveList() { return CREATURES.filter(canEvolve); }

  function orbSourceHint(key) {
    if (key === "prism") return "Prism Orbs come from level-ups and rare wild finds.";
    var zoneName = map.zoneNames[key] || key;
    return ORB_TYPES[key].name + "s come from <b>" + zoneName + "</b> — catch critters there, grab loose orbs in the wild, or level up.";
  }

  // Toast once when a critter first becomes ready to evolve (re-arms if you
  // spend the orbs back below the threshold).
  function checkEvolveReady() {
    if (!S._evoNotified) S._evoNotified = {};
    evolveList().forEach(function (c) {
      if (evolveReady(c)) {
        if (!S._evoNotified[c.id]) {
          S._evoNotified[c.id] = true;
          toast("✨ " + c.name + " is ready to evolve! Open your 📖 Critterdex.", 3800);
        }
      } else {
        S._evoNotified[c.id] = false;
      }
    });
  }

  // ================================================================== DEX
  function openDex() {
    mode = "dex";
    var grid = $("dex-grid");
    grid.innerHTML = "";
    var ready = evolveList().filter(evolveReady).length;
    $("dex-count").innerHTML = uniqueCaught() + " / " + CREATURES.length + " discovered" +
      (ready ? '  <span class="dex-evo-flag">✨ ' + ready + " ready to evolve!</span>" : "");
    CREATURES.forEach(function (c, i) {
      var caught = !!S.dex[c.id];
      var cell = el("div", "dex-cell" + (caught ? "" : " unknown"));
      var badge = "";
      if (caught && canEvolve(c)) badge = evolveReady(c)
        ? '<div class="dex-evo-badge ready" title="Ready to evolve!">✨</div>'
        : '<div class="dex-evo-badge" title="Can evolve — collect more orbs">⬆</div>';
      cell.innerHTML =
        '<div class="dex-num">#' + String(i + 1).padStart(2, "0") + "</div>" + badge +
        critterSVG(c, "dex-art") +
        '<div class="dex-cell-name">' + (caught ? c.name : "???") + "</div>";
      cell.onclick = function () { if (caught) showDexDetail(c); else toast("Catch it to learn its secrets!"); };
      grid.appendChild(cell);
    });
    $("dex-detail").style.display = "none";
    $("dex-grid").style.display = "";
    $("dex").classList.add("open");
  }

  function evolveSection(c) {
    if (!c.evolvesTo) return "";
    var evo = CREATURE_BY_ID[c.evolvesTo];
    if (!evo) return "";
    var key = orbForZone(c.zone);
    var have = orbCount(key), need = c.evolveOrbs;
    var ready = have >= need;
    var pct = Math.min(100, Math.round(have / need * 100));
    // the evolved form is always revealed so players know the goal
    return '<div class="evolve-box' + (ready ? " ready" : "") + '">' +
      '<div class="evolve-title">✨ Evolution' + (ready ? " — ready!" : "") + "</div>" +
      '<div class="evolve-row">' +
        '<div class="evolve-mon"><svg viewBox="0 0 120 120">' + (CRITTER_ART[c.id] || "") + "</svg><span>" + c.name + "</span></div>" +
        '<div class="evolve-arrow">→</div>' +
        '<div class="evolve-mon"><svg viewBox="0 0 120 120">' + (CRITTER_ART[evo.id] || "") + "</svg><span>" + evo.name +
          '</span><span class="evolve-rarity" style="color:' + RARITY_INFO[evo.rarity].color + '">' + RARITY_INFO[evo.rarity].label + "</span></div>" +
      "</div>" +
      '<div class="evolve-cost">' + orbSVG(key, "evolve-orb") + " <b>" + have + " / " + need + "</b> " + ORB_TYPES[key].name + "s" +
        '<div class="evolve-bar"><div class="evolve-bar-fill" style="width:' + pct + '%"></div></div></div>' +
      (ready
        ? '<button class="big-btn go" id="evolve-btn" data-base="' + c.id + '">✨ Evolve into ' + evo.name + " now! (spend " + need + " " + ORB_TYPES[key].name + "s)</button>"
        : '<div class="evolve-need">Feed it <b>' + (need - have) + " more " + ORB_TYPES[key].name + "s</b> to evolve.<br>" +
          '<span class="evolve-source">🔮 ' + orbSourceHint(key) + "</span></div>") +
      "</div>";
  }

  function doEvolve(baseId) {
    var c = CREATURE_BY_ID[baseId];
    var evo = CREATURE_BY_ID[c.evolvesTo];
    var key = orbForZone(c.zone);
    if (orbCount(key) < c.evolveOrbs) { toast("Not enough orbs yet."); return; }
    spendOrb(key, c.evolveOrbs);
    var isNew = !S.dex[evo.id];
    if (isNew) S.dex[evo.id] = { count: 1, first: Date.now() };
    else S.dex[evo.id].count++;
    sfx("level");
    grantXP(RARITY_INFO[evo.rarity].xp);
    updateHUD(); persist();
    toast("🎉 " + c.name + " evolved into " + evo.name + "!");
    showDexDetail(evo);
  }

  function showDexDetail(c) {
    var d = $("dex-detail");
    var entry = S.dex[c.id];
    d.innerHTML =
      '<button class="switch-link" id="dex-back">← back to all critters</button>' +
      '<div class="catch-body">' +
      '<div class="catch-art">' + critterSVG(c, "enc-critter") + "</div>" +
      '<div class="catch-info">' +
      '<div class="catch-name">' + c.name + ' <span class="catch-species">· ' + c.species + "</span></div>" +
      '<div class="catch-chips">' + typeChips(c) + ' <span style="color:' + RARITY_INFO[c.rarity].color + '">' + starStr(c.rarity) + " " + RARITY_INFO[c.rarity].label + "</span></div>" +
      '<div class="dex-meta">Habitat: <b>' + (c.zone === "any" ? "Anywhere (roaming)" : map.zoneNames[c.zone]) + "</b> · Height " + c.height + " · Weight " + c.weight +
      " · Caught ×" + entry.count + (c.guard ? ' · <b style="color:#b8912a">🛡 Aura Guard ' + c.guard + "</b>" : "") +
      (c.evolvesFrom && CREATURE_BY_ID[c.evolvesFrom] ? " · Evolves from <b>" + CREATURE_BY_ID[c.evolvesFrom].name + "</b>" : "") + "</div>" +
      '<div class="stat-grid">' + statBars(c) + "</div>" +
      '<div class="powers-title">Powers</div>' +
      c.powers.map(function (p) { return '<div class="power-row"><b>' + p.n + "</b> — " + p.d + "</div>"; }).join("") +
      '<div class="catch-story">' + c.story + "</div>" +
      evolveSection(c) +
      "</div></div>";
    $("dex-grid").style.display = "none";
    d.style.display = "";
    $("dex-back").onclick = function () { d.style.display = "none"; $("dex-grid").style.display = ""; };
    var evb = $("evolve-btn");
    if (evb) evb.onclick = function () { doEvolve(evb.getAttribute("data-base")); };
  }

  // =================================================================== BAG
  function openBag() {
    mode = "bag";
    var grid = $("bag-grid");
    grid.innerHTML = ORB_ORDER.map(function (key) {
      var o = ORB_TYPES[key];
      var uses = key === "prism" ? "Legendary critters (works on any critter!)"
               : "Critters from " + (map.zoneNames[key] || key);
      return '<div class="bag-cell"><div class="bag-orb">' + orbSVG(key, "bag-orb-svg") + "</div>" +
        '<div class="bag-info"><div class="bag-name">' + o.name + ' <b>×' + orbCount(key) + "</b></div>" +
        '<div class="bag-use">' + uses + "</div></div></div>";
    }).join("");
    $("bag-total").textContent = totalOrbs() + " orbs";
    $("bag").classList.add("open");
  }

  // ================================================================ SOCIAL
  var socialCache = { friends: [], incoming: [], outgoing: [] };
  var tradeDraft = null; // {friend, give, want}

  function dupCounts() { // creature ids I can safely trade away (count >= 2)
    return Object.keys(S.dex).filter(function (id) { return S.dex[id].count >= 2; });
  }

  function applyTradeDelta(giveId, getId) {
    if (S.dex[giveId]) {
      S.dex[giveId].count--;
      if (S.dex[giveId].count <= 0) delete S.dex[giveId];
    }
    if (S.dex[getId]) S.dex[getId].count++;
    else S.dex[getId] = { count: 1, first: Date.now() };
    updateHUD(); persist();
  }

  function refreshSocial(thenRender) {
    if (!SOCIAL.available()) { if (thenRender) renderSocial(); return; }
    SOCIAL.loadFriends(S.friends, function (list) {
      socialCache.friends = list;
      SOCIAL.loadTrades(function (t) {
        socialCache.incoming = t.incoming;
        // settle any of my sent offers the other side already accepted
        t.outgoing.forEach(function (tr) {
          if (tr.status === "accepted" && !tr.fromApplied) {
            applyTradeDelta(tr.give, tr.want);
            SOCIAL.markApplied(tr._id);
            tr.fromApplied = true;
            toast("🔄 Trade complete! You received " + (CREATURE_BY_ID[tr.want] || {}).name + ".");
            sfx("catch");
          }
        });
        socialCache.outgoing = t.outgoing.filter(function (tr) { return tr.status === "pending"; });
        updateSocialBadge();
        if (thenRender || mode === "friends") renderSocial();
      });
    });
  }

  function updateSocialBadge() {
    var n = socialCache.incoming.length;
    var b = $("friends-badge");
    b.textContent = n;
    b.style.display = n ? "" : "none";
  }

  function openFriends() {
    mode = "friends";
    $("friends").classList.add("open");
    tradeDraft = null;
    renderSocial();
    refreshSocial(true);
  }

  function critterMini(id) {
    var c = CREATURE_BY_ID[id];
    if (!c) return "";
    return '<span class="mini-critter"><svg viewBox="0 0 120 120">' + (CRITTER_ART[id] || "") + "</svg>" + c.name + "</span>";
  }

  function renderSocial() {
    var box = $("friends-body");
    if (!SOCIAL.available()) {
      box.innerHTML =
        '<div class="cloud-note"><b>Friends &amp; trading need cloud saves.</b><br>' +
        'Right now this game is saving to this browser only, so it can\'t see other trainers. ' +
        'To switch it on, add the <code>critterquest</code> and <code>critterquest_trades</code> rules from ' +
        '<code>firestore.rules</code> in your Firebase console, then reload.</div>';
      return;
    }
    if (tradeDraft) { renderTradeBuilder(box); return; }

    var html = "";

    // --- incoming offers
    html += '<div class="soc-section"><h3>📥 Trade offers' + (socialCache.incoming.length ? " (" + socialCache.incoming.length + ")" : "") + "</h3>";
    if (!socialCache.incoming.length) html += '<div class="soc-empty">No offers waiting. Trades your friends send will land here.</div>';
    socialCache.incoming.forEach(function (t) {
      var canPay = S.dex[t.want] && S.dex[t.want].count >= 2;
      html += '<div class="trade-card">' +
        '<div class="trade-who"><b>' + esc(t.fromName) + "</b> wants to trade</div>" +
        '<div class="trade-swap">' +
          '<div class="trade-side"><div class="trade-label">you get</div>' + critterMini(t.give) + "</div>" +
          '<div class="trade-arrow">⇄</div>' +
          '<div class="trade-side"><div class="trade-label">you give</div>' + critterMini(t.want) + "</div>" +
        "</div>" +
        (canPay
          ? '<div class="trade-actions"><button class="big-btn go small" data-accept="' + t._id + '">Accept</button>' +
            '<button class="big-btn small pink" data-decline="' + t._id + '">Decline</button></div>'
          : '<div class="trade-warn">You need a spare ' + ((CREATURE_BY_ID[t.want] || {}).name || "critter") +
            ' (catch a second one) before you can accept.<button class="big-btn small pink" data-decline="' + t._id + '">Decline</button></div>') +
        "</div>";
    });
    html += "</div>";

    // --- outgoing
    if (socialCache.outgoing.length) {
      html += '<div class="soc-section"><h3>📤 Waiting on a reply</h3>';
      socialCache.outgoing.forEach(function (t) {
        html += '<div class="trade-card pending">' +
          '<div class="trade-who">To <b>' + esc(t.toName) + "</b></div>" +
          '<div class="trade-swap">' +
            '<div class="trade-side"><div class="trade-label">you give</div>' + critterMini(t.give) + "</div>" +
            '<div class="trade-arrow">⇄</div>' +
            '<div class="trade-side"><div class="trade-label">you get</div>' + critterMini(t.want) + "</div>" +
          "</div>" +
          '<div class="trade-actions"><button class="big-btn small pink" data-cancel="' + t._id + '">Cancel offer</button></div>' +
          "</div>";
      });
      html += "</div>";
    }

    // --- friends list
    html += '<div class="soc-section"><h3>🤝 My friends</h3>' +
      '<div class="add-friend-row">' +
      '<input id="friend-name" class="answer-input small" placeholder="trainer name..." autocomplete="off">' +
      '<button class="big-btn go small" id="add-friend-btn">Add friend</button>' +
      "</div>" +
      '<div class="soc-hint">Your trainer name is <b>' + esc(S.name) + "</b> — friends add you with that.</div>";
    if (!socialCache.friends.length) {
      html += '<div class="soc-empty">No friends yet. Add a classmate by their trainer name to start trading!</div>';
    }
    socialCache.friends.forEach(function (f) {
      var caught = Object.keys(f.dex || {}).length;
      html += '<div class="friend-card">' +
        '<div class="friend-av">' + AVATAR.svg("down", (f.settings || {}).avatar) + "</div>" +
        '<div class="friend-info"><div class="friend-name">' + esc(f.name || f.id) + "</div>" +
        '<div class="friend-meta">Lv ' + levelOf(f.xp || 0) + " · " + caught + " / " + CREATURES.length + " caught</div></div>" +
        '<button class="big-btn small" data-trade="' + f.id + '">Trade</button>' +
        '<button class="linkish" data-unfriend="' + f.id + '" title="Remove friend">✕</button>' +
        "</div>";
    });
    html += "</div>";

    box.innerHTML = html;
    wireSocialButtons();
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function wireSocialButtons() {
    var box = $("friends-body");
    var addBtn = $("add-friend-btn");
    if (addBtn) {
      addBtn.onclick = function () {
        var nameEl = $("friend-name");
        var name = nameEl.value.trim();
        addBtn.disabled = true;
        SOCIAL.addFriend(name, S.friends, function (res) {
          addBtn.disabled = false;
          if (res.error) { toast("⚠️ " + res.error, 3600); return; }
          S.friends.push(res.id);
          persist();
          toast("🤝 You're now friends with " + (res.profile.name || name) + "!");
          refreshSocial(true);
        });
      };
      $("friend-name").addEventListener("keydown", function (e) { if (e.key === "Enter") addBtn.click(); });
    }
    box.querySelectorAll("[data-trade]").forEach(function (b) {
      b.onclick = function () {
        var f = socialCache.friends.filter(function (x) { return x.id === b.getAttribute("data-trade"); })[0];
        if (!f) return;
        tradeDraft = { friend: f, give: null, want: null };
        renderSocial();
      };
    });
    box.querySelectorAll("[data-unfriend]").forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute("data-unfriend");
        S.friends = S.friends.filter(function (f) { return f !== id; });
        persist(); refreshSocial(true);
      };
    });
    box.querySelectorAll("[data-accept]").forEach(function (b) {
      b.onclick = function () {
        var id = b.getAttribute("data-accept");
        var t = socialCache.incoming.filter(function (x) { return x._id === id; })[0];
        if (!t) return;
        if (!(S.dex[t.want] && S.dex[t.want].count >= 2)) { toast("You need a spare one to trade."); return; }
        b.disabled = true;
        SOCIAL.accept(id, function (res) {
          if (res.error) { b.disabled = false; toast("⚠️ " + res.error); return; }
          applyTradeDelta(t.want, t.give);   // I give `want`, receive `give`
          sfx("catch");
          toast("🔄 Trade complete! You received " + (CREATURE_BY_ID[t.give] || {}).name + ".");
          refreshSocial(true);
        });
      };
    });
    box.querySelectorAll("[data-decline]").forEach(function (b) {
      b.onclick = function () { SOCIAL.decline(b.getAttribute("data-decline"), function () { refreshSocial(true); }); };
    });
    box.querySelectorAll("[data-cancel]").forEach(function (b) {
      b.onclick = function () { SOCIAL.cancel(b.getAttribute("data-cancel"), function () { refreshSocial(true); }); };
    });
  }

  function renderTradeBuilder(box) {
    var f = tradeDraft.friend;
    var mine = dupCounts();
    var theirs = Object.keys(f.dex || {});
    var html = '<button class="switch-link" id="trade-back">← back to friends</button>' +
      '<h3 class="trade-title">Trade with ' + esc(f.name || f.id) + "</h3>" +
      '<div class="soc-hint">You can only offer critters you have <b>two or more</b> of, so you never lose a Critterdex entry.</div>';

    html += '<div class="trade-pick"><div class="trade-pick-head">1 · You give' +
      (tradeDraft.give ? " — <b>" + esc(CREATURE_BY_ID[tradeDraft.give].name) + "</b>" : "") + "</div>";
    if (!mine.length) html += '<div class="soc-empty">You have no spare critters yet — catch a duplicate to trade it!</div>';
    html += '<div class="pick-grid">';
    mine.forEach(function (id) {
      var c = CREATURE_BY_ID[id];
      html += '<button class="pick-cell' + (tradeDraft.give === id ? " sel" : "") + '" data-give="' + id + '">' +
        '<svg viewBox="0 0 120 120">' + (CRITTER_ART[id] || "") + "</svg>" +
        '<span>' + c.name + "</span><em>×" + S.dex[id].count + "</em></button>";
    });
    html += "</div></div>";

    html += '<div class="trade-pick"><div class="trade-pick-head">2 · You want' +
      (tradeDraft.want ? " — <b>" + esc(CREATURE_BY_ID[tradeDraft.want].name) + "</b>" : "") + "</div>";
    if (!theirs.length) html += '<div class="soc-empty">' + esc(f.name || f.id) + " hasn't caught anything yet.</div>";
    html += '<div class="pick-grid">';
    theirs.forEach(function (id) {
      var c = CREATURE_BY_ID[id];
      if (!c) return;
      var spare = (f.dex[id].count || 1) >= 2;
      html += '<button class="pick-cell' + (tradeDraft.want === id ? " sel" : "") + (spare ? "" : " thin") +
        '" data-want="' + id + '" title="' + (spare ? "" : "They only have one — they won't be able to accept") + '">' +
        '<svg viewBox="0 0 120 120">' + (CRITTER_ART[id] || "") + "</svg>" +
        '<span>' + c.name + "</span><em>×" + (f.dex[id].count || 1) + "</em></button>";
    });
    html += "</div></div>";

    html += '<div class="trade-send"><button class="big-btn go" id="send-trade"' +
      (tradeDraft.give && tradeDraft.want ? "" : " disabled") + ">Send offer →</button></div>";

    box.innerHTML = html;

    $("trade-back").onclick = function () { tradeDraft = null; renderSocial(); };
    box.querySelectorAll("[data-give]").forEach(function (b) {
      b.onclick = function () { tradeDraft.give = b.getAttribute("data-give"); renderSocial(); };
    });
    box.querySelectorAll("[data-want]").forEach(function (b) {
      b.onclick = function () { tradeDraft.want = b.getAttribute("data-want"); renderSocial(); };
    });
    var send = $("send-trade");
    if (send) send.onclick = function () {
      send.disabled = true;
      SOCIAL.propose(f.id, f.name || f.id, tradeDraft.give, tradeDraft.want, S.name, function (res) {
        if (res.error) { send.disabled = false; toast("⚠️ " + res.error, 3600); return; }
        toast("📤 Offer sent to " + (f.name || f.id) + "!");
        tradeDraft = null;
        refreshSocial(true);
      });
    };
  }

  // =============================================================== SETTINGS
  function openSettings() {
    mode = "settings";
    // challenge type
    document.querySelectorAll("input[name=chal]").forEach(function (r) { r.checked = r.value === S.settings.challenge; });
    document.querySelectorAll("input[name=mathlvl]").forEach(function (r) { r.checked = +r.value === S.settings.mathLevel; });
    document.querySelectorAll("input[name=spelllvl]").forEach(function (r) { r.checked = +r.value === S.settings.spellLevel; });
    $("sound-toggle").checked = S.settings.sound;
    $("legendary-kangaroo").checked = !!S.settings.legendaryKangaroo;
    $("custom-words").value = S.customWords.join("\n");
    $("flash-range").value = S.settings.flashMs || 2000;
    updateFlashLabel();
    buildAvatarEditor();
    updateWordCount();
    $("settings").classList.add("open");
  }

  function updateFlashLabel() {
    $("flash-label").textContent = ((S.settings.flashMs || 2000) / 1000).toFixed(2).replace(/0+$/, "").replace(/\.$/, "") + " s";
  }

  // ------------------------------------------------------------- avatar UI
  function buildAvatarEditor() {
    var cfg = S.settings.avatar || (S.settings.avatar = Object.assign({}, AVATAR.DEFAULT));
    $("avatar-preview").innerHTML = AVATAR.svg("down", cfg) + AVATAR.svg("side", cfg) + AVATAR.svg("up", cfg);

    function swatchRow(elId, colors, key) {
      var row = $(elId);
      row.innerHTML = "";
      colors.forEach(function (col, i) {
        var b = el("button", "swatch" + (cfg[key] === i ? " sel" : ""));
        b.style.background = col;
        b.title = col;
        b.onclick = function () { cfg[key] = i; avatarChanged(); };
        row.appendChild(b);
      });
    }
    swatchRow("av-skins", AVATAR.SKINS, "skin");
    swatchRow("av-hairs", AVATAR.HAIRS, "hair");
    swatchRow("av-shirts", AVATAR.SHIRTS, "shirt");
    swatchRow("av-pants", AVATAR.PANTS, "pants");

    function chipRow(elId, list, key) {
      var row = $(elId);
      row.innerHTML = "";
      list.forEach(function (h) {
        var b = el("button", "hat-chip" + (cfg[key] === h.id ? " sel" : ""), h.name);
        b.onclick = function () { cfg[key] = h.id; avatarChanged(); };
        row.appendChild(b);
      });
    }
    chipRow("av-hats", AVATAR.HATS, "hat");
    chipRow("av-glasses", AVATAR.GLASSES, "glasses");
  }

  function avatarChanged() {
    buildAvatarEditor();
    renderSprite();
    updateHUD();
    persist();
  }

  function updateWordCount() {
    $("word-count").textContent = S.customWords.length + " words in your bank";
  }

  function wireSettings() {
    document.querySelectorAll("input[name=chal]").forEach(function (r) {
      r.addEventListener("change", function () { S.settings.challenge = r.value; persist(); });
    });
    document.querySelectorAll("input[name=mathlvl]").forEach(function (r) {
      r.addEventListener("change", function () { S.settings.mathLevel = +r.value; persist(); });
    });
    document.querySelectorAll("input[name=spelllvl]").forEach(function (r) {
      r.addEventListener("change", function () { S.settings.spellLevel = +r.value; persist(); });
    });
    $("sound-toggle").addEventListener("change", function () { S.settings.sound = this.checked; persist(); });
    $("legendary-kangaroo").addEventListener("change", function () { S.settings.legendaryKangaroo = this.checked; persist(); });
    $("flash-range").addEventListener("input", function () {
      S.settings.flashMs = +this.value;
      updateFlashLabel(); persist();
    });
    $("custom-words").addEventListener("input", function () {
      S.customWords = parseWordBank(this.value);
      updateWordCount(); persist();
    });
    $("word-file").addEventListener("change", function () {
      var f = this.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        S.customWords = parseWordBank(reader.result);
        $("custom-words").value = S.customWords.join("\n");
        var radio = document.querySelector("input[name=spelllvl][value='3']");
        if (radio) radio.checked = true;
        S.settings.spellLevel = 3;
        updateWordCount(); persist();
        toast("Loaded " + S.customWords.length + " words — spelling set to My Word Bank");
      };
      reader.readAsText(f);
    });
    $("reset-save").addEventListener("click", function () {
      if (!confirm("Really erase all progress for " + S.name + "? This releases every critter you've caught.")) return;
      SaveStore.reset(S.name);
      location.reload();
    });
  }

  // ================================================================== INPUT
  function wireInput() {
    window.addEventListener("keydown", function (e) {
      if (mode === "world" && ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].indexOf(e.code) >= 0) e.preventDefault();
      keys[e.code] = true;
      var DIRS = { ArrowUp: [0,-1], KeyW: [0,-1], ArrowDown: [0,1], KeyS: [0,1], ArrowLeft: [-1,0], KeyA: [-1,0], ArrowRight: [1,0], KeyD: [1,0] };
      if (mode === "world" && DIRS[e.code]) { queuedDir = DIRS[e.code]; queuedAt = performance.now(); }
      if (e.code === "Escape") {
        ["dex","settings","help","friends","bag","npc","shop","arena","square","quest","questlog"].forEach(function (m) {
          if (mode === m) closeModal(m);
        });
      }
    });
    window.addEventListener("keyup", function (e) { keys[e.code] = false; });
    window.addEventListener("blur", function () { keys = {}; });

    svg.addEventListener("click", function (e) {
      if (mode !== "world") return;
      var rect = svg.getBoundingClientRect();
      var wx = cam.x + (e.clientX - rect.left) * (VIEW.w / rect.width);
      var wy = cam.y + (e.clientY - rect.top) * (VIEW.h / rect.height);
      var tx = Math.floor(wx / TILE), ty = Math.floor(wy / TILE);
      var poi = poiAtTile(tx, ty);
      if (poi) { approachPoi(poi); return; }
      if (!walkable(tx, ty)) return;
      var path = findPath(P.tx, P.ty, tx, ty);
      if (path) { P.path = path; P.targetSpawn = null; P.targetPoi = null; P.targetUltra = null; }
    });

    $("btn-dex").onclick = openDex;
    $("btn-bag").onclick = openBag;
    $("btn-quests").onclick = openQuestLog;
    $("btn-friends").onclick = openFriends;
    $("btn-settings").onclick = openSettings;
    $("btn-help").onclick = function () { mode = "help"; $("help").classList.add("open"); };
    $("enc-run").onclick = function () { toast("You backed away slowly..."); closeEncounter(); };
    $("battle-flee").onclick = function () { if (BATTLE) endBattle(false); };
    document.querySelectorAll("[data-close]").forEach(function (b) {
      b.addEventListener("click", function () { closeModal(b.getAttribute("data-close")); });
    });
  }

  function closeModal(id) {
    $(id).classList.remove("open");
    mode = "world";
  }

  // ============================================================ PLACES (POIs)
  var OL = "#3a2b28";
  var PORTAL_ART =
    '<defs><radialGradient id="pt-swirl" cx="50%" cy="50%" r="50%">' +
    '<stop offset="0%" stop-color="#f2e0ff"/><stop offset="45%" stop-color="#b06fd0"/><stop offset="80%" stop-color="#6a3f9a"/><stop offset="100%" stop-color="#3a2358"/>' +
    '</radialGradient></defs>' +
    '<ellipse cx="24" cy="44" rx="14" ry="4" fill="#000" opacity=".2"/>' +
    '<path d="M8 26 C8 8 40 8 40 26 C40 46 8 46 8 26 Z" fill="#2a1c44" stroke="' + OL + '" stroke-width="2.6"/>' +
    '<ellipse cx="24" cy="26" rx="14" ry="17" fill="url(#pt-swirl)" stroke="#7a4fa0" stroke-width="2"/>' +
    '<g fill="none" stroke="#e6c9ff" stroke-width="1.6" opacity=".85"><path d="M24 14 C32 18 32 34 24 38 C16 34 16 18 24 14"><animateTransform attributeName="transform" type="rotate" values="0 24 26;360 24 26" dur="6s" repeatCount="indefinite"/></path></g>' +
    '<g fill="#fff"><circle cx="24" cy="26" r="2.4" class="glowpulse"/><circle cx="18" cy="20" r="1.2"/><circle cx="30" cy="30" r="1.2"/><circle cx="29" cy="19" r="1"/></g>';
  var TIDE_PORTAL_ART =
    '<defs><radialGradient id="tp-swirl" cx="50%" cy="50%" r="50%">' +
    '<stop offset="0%" stop-color="#eafffb"/><stop offset="45%" stop-color="#3fc9bd"/><stop offset="80%" stop-color="#1f7f86"/><stop offset="100%" stop-color="#0d4650"/>' +
    '</radialGradient></defs>' +
    '<ellipse cx="24" cy="44" rx="14" ry="4" fill="#000" opacity=".2"/>' +
    '<ellipse cx="24" cy="26" rx="18" ry="16" fill="#0d4650" stroke="' + OL + '" stroke-width="2.6"/>' +
    '<ellipse cx="24" cy="26" rx="14" ry="12" fill="url(#tp-swirl)" stroke="#2fa89e" stroke-width="2"/>' +
    '<g fill="none" stroke="#d6fff8" stroke-width="1.8" opacity=".9"><path d="M24 16 C33 19 33 33 24 36 C15 33 15 19 24 16"><animateTransform attributeName="transform" type="rotate" values="0 24 26;360 24 26" dur="4.5s" repeatCount="indefinite"/></path></g>' +
    '<g fill="#eafffb"><circle cx="24" cy="26" r="2.2" class="glowpulse"/><circle cx="19" cy="22" r="1.1"/><circle cx="30" cy="29" r="1.1"/><circle cx="28" cy="20" r="0.9"/></g>';
  function hashStr(s) { var h = 0; for (var i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h; }
  function compassDir(tx, ty) {
    var ns = ty < map.H * 0.34 ? "north" : ty > map.H * 0.66 ? "south" : "";
    var ew = tx < map.W * 0.34 ? "west" : tx > map.W * 0.66 ? "east" : "";
    return (ns + (ns && ew ? "-" : "") + ew) || "very center";
  }
  function poiTiles(poi) {
    if (poi.kind === "npc") return [[poi.tx, poi.ty]];
    var ts = [];
    for (var yy = poi.ty; yy < poi.ty + (poi.h || 1); yy++)
      for (var xx = poi.tx; xx < poi.tx + (poi.w || 1); xx++) ts.push([xx, yy]);
    return ts;
  }
  function poiDist(poi) {
    return Math.min.apply(null, poiTiles(poi).map(function (t) { return Math.abs(t[0] - P.tx) + Math.abs(t[1] - P.ty); }));
  }
  function poiAtTile(tx, ty) {
    return (map.pois || []).filter(function (poi) {
      return poiTiles(poi).some(function (t) { return t[0] === tx && t[1] === ty; });
    })[0] || null;
  }
  function approachPoi(poi) {
    if (mode !== "world") return;
    if (poiDist(poi) <= 1) { openPoi(poi); return; }
    var best = null, aps = (poi.approach || []).concat(poi.kind === "npc" ? [] : []);
    aps.forEach(function (a) {
      if (!walkable(a[0], a[1])) return;
      var p = findPath(P.tx, P.ty, a[0], a[1]);
      if (p && (!best || p.length < best.length)) best = p;
    });
    if (best) { P.path = best; P.targetPoi = poi; P.targetSpawn = null; P.targetUltra = null; toast("Heading to " + poi.name + "..."); }
    else toast("Hmm, can't reach " + poi.name + " from here.");
  }
  function openPoi(poi) {
    if (poi.kind === "shop") openShop(poi);
    else if (poi.kind === "arena") openArena(poi);
    else if (poi.kind === "square") openSquare(poi);
    else if (poi.kind === "portal") usePortal(poi);
    else if (poi.kind === "house") openQuestGiver(poi);
    else openNpc(poi);
  }
  function usePortal(poi) {
    if (!poi.dest) return;
    sfx("level");
    // fade the world, teleport, snap the camera
    svg.classList.add("portal-flash");
    setTimeout(function () { svg.classList.remove("portal-flash"); }, 700);
    P.tx = poi.dest.tx; P.ty = poi.dest.ty;
    P.px = P.tx * TILE; P.py = P.ty * TILE;
    P.path = []; P.targetPoi = null; P.targetSpawn = null; P.targetUltra = null; P.moving = false;
    cam.x = Math.max(0, Math.min(map.W * TILE - VIEW.w, P.px + TILE / 2 - VIEW.w / 2));
    cam.y = Math.max(0, Math.min(map.H * TILE - VIEW.h, P.py + TILE / 2 - VIEW.h / 2));
    // clear spawns from the old area; repopulate around the new one
    spawns.slice().forEach(removeSpawn);
    for (var i = 0; i < 4; i++) trySpawn();
    var z = map.at(P.tx, P.ty).zone;
    lastZone = z;
    toast("✨ " + (poi.enterMsg || ("You step through to " + map.zoneNames[z] + "!")));
    // advance any quest whose current step is "go through this portal"
    activeQuestList().forEach(function (q) {
      var step = curStep(q.id);
      if (step && step.kind === "goto" && step.loc === poi.id) advanceQuest(q.id);
    });
    persist();
  }
  function wireCloses(container) {
    container.querySelectorAll("[data-close]").forEach(function (b) {
      b.onclick = function () { closeModal(b.getAttribute("data-close")); };
    });
  }

  // a floating name banner so places/people are easy to spot on the map
  function poiBanner(label, cx, w) {
    var bw = Math.max(46, label.length * 6.6 + 14);
    return '<g class="poi-banner"><rect x="' + (cx - bw / 2) + '" y="-16" width="' + bw + '" height="17" rx="8.5" fill="#fffdf5" stroke="' + OL + '" stroke-width="2"/>' +
      '<text x="' + cx + '" y="-3.5" font-size="10.5" font-weight="800" text-anchor="middle" fill="' + OL + '">' + esc(label) + "</text></g>";
  }
  function renderPois() {
    var html = "";
    (map.pois || []).forEach(function (poi) {
      var tf = 'transform="translate(' + (poi.tx * TILE) + ',' + (poi.ty * TILE) + ')"';
      if (poi.kind === "npc") {
        html += '<g class="poi-marker npc-poi" data-poi="' + poi.id + '" ' + tf + '>' +
          '<ellipse cx="24" cy="48" rx="13" ry="4" fill="#000" opacity=".18"/>' +
          '<circle cx="24" cy="26" r="21" fill="#fff6d8" opacity=".55" class="glowpulse"/>' +
          '<g class="poi-bob"><svg x="5" y="6" width="38" height="44" viewBox="0 0 48 48">' + AVATAR.art("down", poi.av) + "</svg>" +
          '<g class="poi-chat"><circle cx="40" cy="8" r="8.5" fill="#ffd94d" stroke="' + OL + '" stroke-width="2"/><text x="40" y="12" font-size="10" text-anchor="middle" font-weight="800">!</text></g></g>' +
          poiBanner("💬 " + poi.name, 24) +
          '<rect x="0" y="6" width="48" height="46" fill="none" pointer-events="all"/></g>';
      } else if (poi.kind === "portal") {
        var portArt = poi.variant === "tide" ? TIDE_PORTAL_ART : PORTAL_ART;
        html += '<g class="poi-marker" data-poi="' + poi.id + '" ' + tf + '>' +
          '<ellipse cx="24" cy="46" rx="15" ry="4" fill="#000" opacity=".16"/>' +
          '<g class="poi-bob"><svg x="0" y="0" width="48" height="48" viewBox="0 0 48 48">' + portArt + "</svg></g>" +
          poiBanner(poi.name, 24) +
          '<rect x="0" y="0" width="48" height="48" fill="none" pointer-events="all"/></g>';
      } else if (poi.kind === "house") {
        var qs = poi.questId ? questStatus(poi.questId) : "done";
        var badge = qs === "done" ? "" :
          '<g class="poi-bob"><rect x="' + (TILE - 17) + '" y="-24" width="34" height="26" rx="9" fill="' + (qs === "active" ? "#ffd94d" : "#e85f6a") + '" stroke="' + OL + '" stroke-width="2.4"/>' +
          '<text x="' + TILE + '" y="-5" font-size="15" text-anchor="middle">' + (qs === "active" ? "📜" : "❗") + "</text></g>";
        html += '<g class="poi-marker" data-poi="' + poi.id + '" ' + tf + '>' + badge +
          poiBanner(poi.name, TILE) +
          '<rect x="0" y="0" width="' + (TILE * 2) + '" height="' + (TILE * 2) + '" fill="none" pointer-events="all"/></g>';
      } else {
        var icon = poi.kind === "shop" ? "🛒" : poi.kind === "arena" ? "⚔️" : "🏛️";
        html += '<g class="poi-marker" data-poi="' + poi.id + '" ' + tf + '>' +
          '<g class="poi-bob"><rect x="' + (TILE - 17) + '" y="-24" width="34" height="26" rx="9" fill="#ffd94d" stroke="' + OL + '" stroke-width="2.4"/>' +
          '<text x="' + TILE + '" y="-5" font-size="16" text-anchor="middle">' + icon + "</text></g>" +
          poiBanner(poi.name, TILE) +
          '<rect x="0" y="0" width="' + (TILE * 2) + '" height="' + (TILE * 2) + '" fill="none" pointer-events="all"/></g>';
      }
    });
    poiLayer.innerHTML = html;
    poiLayer.onclick = function (e) {
      e.stopPropagation();
      var g = e.target.closest ? e.target.closest("[data-poi]") : null;
      if (!g) return;
      var poi = (map.pois || []).filter(function (p) { return p.id === g.getAttribute("data-poi"); })[0];
      if (poi) approachPoi(poi);
    };
  }

  // -------------------------------------------------------------- NPC dialog
  var npcState = null;
  function activeUltraForNpc(poi) {
    if (!S.ultras || !S.ultras.length) return null;
    return S.ultras[Math.abs(hashStr(poi.id)) % S.ultras.length];
  }
  function ultraClueText(rec) {
    var zone = map.at(rec.tx, rec.ty).zone;
    var zoneName = map.zoneNames[zone] || "the deep wilds";
    var c = CREATURE_BY_ID[rec.id];
    var typeHint = c.types.join("/").toLowerCase();
    return "A creature of impossible majesty has been glimpsed in <b>" + zoneName + "</b>, toward the <b>" +
      compassDir(rec.tx, rec.ty) + "</b> of the world. They say it carries the power of " + typeHint +
      ". Seek out its glowing ✦ marker there!";
  }
  function openNpc(poi) {
    mode = "npc";
    npcState = { poi: poi, solved: false };
    renderNpc();
    $("npc").classList.add("open");
  }
  // is any active quest waiting for the player to talk to this NPC?
  function questTalkFor(poiId) {
    var acts = activeQuestList();
    for (var i = 0; i < acts.length; i++) {
      var step = curStep(acts[i].id);
      if (step && step.kind === "talk" && step.npc === poiId) return { quest: acts[i], step: step };
    }
    return null;
  }
  function renderNpc() {
    var poi = npcState.poi, body = $("npc-body");
    var av = '<div class="npc-portrait">' + AVATAR.svg("down", poi.av) + "</div>";
    // quest "talk to this person" step takes priority over the usual clue
    var talk = questTalkFor(poi.id);
    if (talk) {
      body.innerHTML = av +
        '<div class="npc-name">' + esc(poi.name) + "</div>" +
        '<div class="quest-title" style="color:' + talk.quest.color + '">' + talk.quest.icon + " " + esc(talk.quest.name) + "</div>" +
        '<div class="npc-line">"' + esc(talk.step.line || "Ah, you're the one on the quest! Here's what you need.") + '"</div>' +
        '<button class="big-btn go" id="npc-talk-go">Continue</button>';
      $("npc-talk-go").onclick = function () { closeModal("npc"); advanceQuest(talk.quest.id); };
      return;
    }
    if (!npcState.solved) {
      var prob = makeMathProblem(Math.min(3, S.settings.mathLevel));
      npcState.prob = prob;
      body.innerHTML = av +
        '<div class="npc-name">' + esc(poi.name) + "</div>" +
        '<div class="npc-line">"Solve this and I\'ll tell you what I\'ve heard about the <b>Ultra Legendaries</b>!"</div>' +
        '<div class="math-q">' + prob.q + "</div>" +
        '<div class="answer-row center"><input class="answer-input" id="npc-input" type="number" placeholder="answer" autocomplete="off"><button class="big-btn go" id="npc-go">Answer</button></div>' +
        '<div class="npc-feedback" id="npc-feedback"></div>' +
        '<button class="switch-link" data-close="npc">Maybe later</button>';
      var input = $("npc-input");
      function submit() {
        if (input.value.trim() === "") return;
        if (Math.abs(parseFloat(input.value) - prob.a) < 1e-9) { sfx("correct"); npcState.solved = true; renderNpc(); }
        else { sfx("wrong"); $("npc-feedback").textContent = "❌ Not quite — the answer was " + prob.a + ". Here's another!"; setTimeout(renderNpc, 1400); }
      }
      $("npc-go").onclick = submit;
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
      setTimeout(function () { input.focus(); }, 60);
    } else {
      var rec = activeUltraForNpc(poi);
      var clue = rec ? ultraClueText(rec) : "Hmm — no Ultra Legendaries are stirring right now. Come back soon and I'll have fresh news!";
      body.innerHTML = av +
        '<div class="npc-name">' + esc(poi.name) + "</div>" +
        '<div class="npc-clue">🗺️ ' + clue + "</div>" +
        '<button class="big-btn go" data-close="npc">Thank you!</button>';
    }
    wireCloses(body);
  }

  // ------------------------------------------------------ Village Square board
  var squareState = null;
  function openSquare(poi) {
    mode = "square";
    squareState = { poi: poi, correct: 0, prob: null };
    renderSquare();
    $("square").classList.add("open");
  }
  function renderSquare() {
    var body = $("square-body");
    var keeper = '<div class="npc-portrait">' + AVATAR.svg("down", { skin: 4, hair: 4, shirt: 3, pants: 0, hat: "flower", glasses: "round" }) + "</div>";
    if (!SOCIAL.available()) {
      body.innerHTML = keeper + '<div class="npc-name">Bulletin Keeper Sol</div>' +
        '<div class="cloud-note"><b>The message board needs cloud saves.</b><br>Once this game is connected to Firebase (and the <code>critterquest_messages</code> rule is added), you can leave notes for other players here.</div>' +
        '<button class="big-btn" data-close="square">Leave</button>';
      wireCloses(body); return;
    }
    if (squareState.correct < 2) {
      var prob = makeMathProblem(Math.min(3, S.settings.mathLevel));
      squareState.prob = prob;
      body.innerHTML = keeper +
        '<div class="npc-name">Bulletin Keeper Sol</div>' +
        '<div class="npc-line">"Answer <b>two</b> problems in a row and you may pin a note to the village board for every trainer to see! (' + squareState.correct + "/2 so far)</div>" +
        '<div class="math-q">' + prob.q + "</div>" +
        '<div class="answer-row center"><input class="answer-input" id="sq-input" type="number" placeholder="answer" autocomplete="off"><button class="big-btn go" id="sq-go">Answer</button></div>' +
        '<div class="npc-feedback" id="sq-feedback"></div>' +
        '<button class="switch-link" id="sq-view">Just read the board →</button>' +
        '<button class="switch-link" data-close="square">Leave</button>';
      var input = $("sq-input");
      function submit() {
        if (input.value.trim() === "") return;
        if (Math.abs(parseFloat(input.value) - prob.a) < 1e-9) {
          sfx("correct"); squareState.correct++;
          if (squareState.correct >= 2) renderSquareBoard(true);
          else renderSquare();
        } else { sfx("wrong"); squareState.correct = 0; $("sq-feedback").textContent = "❌ The answer was " + prob.a + " — streak reset, try again!"; setTimeout(renderSquare, 1500); }
      }
      $("sq-go").onclick = submit;
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
      $("sq-view").onclick = function () { renderSquareBoard(false); };
      setTimeout(function () { input.focus(); }, 60);
      wireCloses(body);
    } else {
      renderSquareBoard(true);
    }
  }
  function renderSquareBoard(canPost) {
    var body = $("square-body");
    body.innerHTML = '<div class="npc-name">📌 Village Message Board</div>' +
      (canPost
        ? '<div class="sq-compose"><input id="sq-msg" class="answer-input" maxlength="140" placeholder="Leave a friendly note for other trainers..." autocomplete="off"><button class="big-btn go" id="sq-post">📌 Pin it</button></div>'
        : '<div class="soc-hint">Answer two problems to pin your own note!</div>') +
      '<div id="sq-list"><div class="soc-empty">Loading notes...</div></div>' +
      '<button class="big-btn" data-close="square" style="margin-top:12px">Leave the square</button>';
    wireCloses(body);
    if (canPost) {
      var msg = $("sq-msg"), post = $("sq-post");
      function doPost() {
        var text = msg.value.trim();
        if (!text) return;
        post.disabled = true;
        SOCIAL.postMessage(S.name, text, function (res) {
          post.disabled = false;
          if (res.error) { toast("⚠️ " + res.error, 3600); return; }
          msg.value = ""; toast("📌 Pinned to the village board!");
          loadBoard();
        });
      }
      post.onclick = doPost;
      msg.addEventListener("keydown", function (e) { if (e.key === "Enter") doPost(); });
    }
    loadBoard();
  }
  function loadBoard() {
    SOCIAL.loadMessages(function (list) {
      var el2 = $("sq-list"); if (!el2) return;
      if (!list) { el2.innerHTML = '<div class="soc-empty">Couldn\'t reach the board right now.</div>'; return; }
      if (!list.length) { el2.innerHTML = '<div class="soc-empty">No notes yet — be the first to pin one!</div>'; return; }
      el2.innerHTML = list.map(function (m) {
        var when = m.created ? new Date(m.created).toLocaleDateString() : "";
        return '<div class="sq-note"><div class="sq-note-head"><b>' + esc(m.name || "Someone") + "</b><span>" + when + "</span></div><div class=\"sq-note-body\">" + esc(m.text || "") + "</div></div>";
      }).join("");
    });
  }

  // -------------------------------------------------------------------- Shop
  var shopState = null;
  function orbRate(getKey) { return getKey === "prism" ? 8 : 3; }
  function openShop(poi) {
    mode = "shop";
    shopState = { poi: poi, give: "meadow", get: "prism" };
    renderShop();
    $("shop").classList.add("open");
  }
  function renderShop() {
    var body = $("shop-body");
    var give = shopState.give, get = shopState.get, rate = orbRate(get);
    var can = orbCount(give) >= rate && give !== get;
    function picks(sel, cur) {
      return ORB_ORDER.map(function (k) {
        return '<button class="orb-pick' + (cur === k ? " sel" : "") + '" data-' + sel + '="' + k + '" title="' + ORB_TYPES[k].name + '">' +
          orbSVG(k, "orb-pick-svg") + "<em>" + orbCount(k) + "</em></button>";
      }).join("");
    }
    var haveUltra = S.ultras && S.ultras.length;
    body.innerHTML =
      '<div class="shop-keeper">' + AVATAR.svg("down", { skin: 2, hair: 3, shirt: 5, pants: 2, hat: "cap", glasses: "round" }) + "</div>" +
      '<div class="npc-line">"Welcome to ' + esc(shopState.poi.name) + '! Trade orbs, or grab something handy."</div>' +
      '<div class="shop-section"><h4>🔄 Exchange orbs</h4>' +
      '<div class="shop-row"><span class="shop-lbl">You give (' + rate + ")</span><div class=\"orb-picks\">" + picks("give", give) + "</div></div>" +
      '<div class="shop-row"><span class="shop-lbl">You get (1)</span><div class="orb-picks">' + picks("get", get) + "</div></div>" +
      '<button class="big-btn go" id="shop-trade"' + (can ? "" : " disabled") + ">Trade " + rate + " " + ORB_TYPES[give].name + " → 1 " + ORB_TYPES[get].name + "</button>" +
      (give === get ? '<div class="shop-note">Pick two different orb types.</div>' : (!can ? '<div class="shop-note">You need ' + rate + " " + ORB_TYPES[give].name + "s for that trade.</div>" : "")) +
      "</div>" +
      '<div class="shop-section"><h4>🧭 Ultra Compass</h4>' +
      '<div class="shop-note">Reveals where an Ultra Legendary is hiding right now — its ✦ marker will glow. Cost: <b>10 Gem Orbs</b>.</div>' +
      '<button class="big-btn" id="shop-compass"' + (orbCount("cavern") >= 10 && haveUltra ? "" : " disabled") + ">Buy Ultra Compass (10 " + orbSVGInline("cavern") + " Gem Orbs)</button>" +
      (!haveUltra ? '<div class="shop-note">No Ultra Legendaries are about right now.</div>' : "") +
      "</div>" +
      '<button class="big-btn" data-close="shop">Leave shop</button>';
    body.querySelectorAll("[data-give]").forEach(function (b) { b.onclick = function () { shopState.give = b.getAttribute("data-give"); renderShop(); }; });
    body.querySelectorAll("[data-get]").forEach(function (b) { b.onclick = function () { shopState.get = b.getAttribute("data-get"); renderShop(); }; });
    var trade = $("shop-trade");
    if (trade) trade.onclick = function () {
      if (orbCount(give) < rate || give === get) return;
      spendOrb(give, rate); giveOrb(get, 1); sfx("spawn");
      toast("Traded " + rate + " " + ORB_TYPES[give].name + " for a " + ORB_TYPES[get].name + "!");
      updateHUD(); persist(); checkEvolveReady(); renderShop();
    };
    var comp = $("shop-compass");
    if (comp) comp.onclick = function () {
      if (orbCount("cavern") < 10 || !haveUltra) return;
      spendOrb("cavern", 10); updateHUD(); persist();
      revealUltra(S.ultras[Math.floor(Math.random() * S.ultras.length)]);
      closeModal("shop");
    };
    wireCloses(body);
  }
  function orbSVGInline(k) { return orbSVG(k, "orb-inline"); }

  // ------------------------------------------------------------ Arena battle
  var ARENA_DEFAULTS = {
    "arena-village": { creatureId: "verdantler", level: 6 },
    "arena-tundra":  { creatureId: "glacierne",  level: 10 },
  };
  var ARENA_HOLD_MS = 2 * 24 * 3600 * 1000; // your critter guards for ~2 days
  var BATTLE = null;

  // Return any of the player's own arena creatures whose 2-day hold has run out.
  function checkArenaExpiry() {
    if (!S.arenas) return;
    var now = Date.now();
    Object.keys(S.arenas).forEach(function (id) {
      var a = S.arenas[id];
      if (a && a.owner === S.name && a.placedAt && now - a.placedAt > ARENA_HOLD_MS) {
        var poiName = arenaName(id), critName = (CREATURE_BY_ID[a.creatureId] || {}).name || "critter";
        delete S.arenas[id];
        toast("🏟️ You held " + poiName + " for two days — your " + critName + " has returned home!", 4200);
      }
    });
    persist();
  }
  function arenaName(id) {
    var poi = (map.pois || []).filter(function (p) { return p.id === id; })[0];
    return poi ? poi.name : "the arena";
  }
  function arenaDefender(poi) {
    var saved = S.arenas[poi.id];
    if (saved && CREATURE_BY_ID[saved.creatureId]) return { creatureId: saved.creatureId, level: saved.level, owner: saved.owner || "a challenger", placedAt: saved.placedAt, mine: saved.owner === S.name };
    var d = ARENA_DEFAULTS[poi.id] || { creatureId: "sylvyrn", level: 6 };
    return { creatureId: d.creatureId, level: d.level, owner: "the arena keeper" };
  }
  function combatStats(creatureId, level) {
    var c = CREATURE_BY_ID[creatureId];
    return { creature: c, level: level, maxHp: Math.round(c.hp * (1 + level * 0.14)), atk: c.atk, def: c.def };
  }
  function openArena(poi) {
    mode = "arena";
    checkArenaExpiry();
    var def = arenaDefender(poi);
    var dc = CREATURE_BY_ID[def.creatureId];
    var defHp = combatStats(def.creatureId, def.level).maxHp;
    var pLevel = Math.max(3, levelOf(S.xp));
    var owned = Object.keys(S.dex);
    // if YOUR creature is guarding this arena, you can't battle it — show a
    // holding screen instead, with the time remaining and a recall option.
    if (def.mine) {
      var left = ARENA_HOLD_MS - (Date.now() - (def.placedAt || Date.now()));
      var hrs = Math.max(0, Math.round(left / 3600000));
      var timeStr = hrs >= 24 ? Math.floor(hrs / 24) + "d " + (hrs % 24) + "h" : hrs + "h";
      var body0 = $("arena-body");
      body0.innerHTML =
        '<div class="arena-defender"><div class="arena-def-art"><svg viewBox="0 0 120 120">' + (CRITTER_ART[def.creatureId] || "") + "</svg></div>" +
        '<div class="arena-def-info"><div class="catch-name">' + dc.name + " <span class=\"catch-species\">Lv " + def.level + "</span></div>" +
        '<div class="arena-hold-badge">🛡️ Your ' + dc.name + " is currently holding this arena!</div>" +
        '<div class="arena-def-stats">❤ <b>' + defHp + "</b> HP · ⚔ <b>" + dc.atk + "</b> · 🛡 <b>" + dc.def + "</b></div>" +
        '<div class="npc-line">It stands guard until another trainer defeats it — or about <b>' + timeStr + "</b> from now, when it returns home to you. You can't battle your own champion!</div></div></div>" +
        '<div class="catch-actions"><button class="big-btn go" id="arena-recall">Recall my ' + dc.name + " now</button>" +
        '<button class="big-btn" data-close="arena">Leave arena</button></div>';
      $("arena-recall").onclick = function () {
        delete S.arenas[poi.id]; persist();
        toast("🏠 " + dc.name + " has returned home. The arena is open again!");
        openArena(poi);
      };
      wireCloses(body0);
      $("arena").classList.add("open");
      return;
    }
    var grid = owned.length
      ? '<div class="pick-grid">' + owned.map(function (id) {
          var c = CREATURE_BY_ID[id];
          var hp = combatStats(id, pLevel).maxHp;
          return '<button class="pick-cell" data-battler="' + id + '"><svg viewBox="0 0 120 120">' + (CRITTER_ART[id] || "") + "</svg><span>" + c.name + '</span><em class="pick-hp">❤ ' + hp + " HP · ⚔ " + c.atk + "</em></button>";
        }).join("") + "</div>"
      : '<div class="soc-empty">Catch a critter first, then come back to battle!</div>';
    var body = $("arena-body");
    body.innerHTML =
      '<div class="arena-defender"><div class="arena-def-art"><svg viewBox="0 0 120 120">' + (CRITTER_ART[def.creatureId] || "") + "</svg></div>" +
      '<div class="arena-def-info"><div class="catch-name">' + dc.name + " <span class=\"catch-species\">Lv " + def.level + "</span></div>" +
      '<div class="dex-meta">Left here by <b>' + esc(def.owner) + "</b> · " + dc.species + "</div>" +
      '<div class="arena-def-stats">❤ <b>' + defHp + "</b> HP · ⚔ Attack <b>" + dc.atk + "</b> · 🛡 Defense <b>" + dc.def + "</b></div>" +
      '<div class="npc-line">Beat it to win XP + orbs — then you can leave one of your own critters to guard the arena!</div></div></div>' +
      '<h3 class="trade-title">Choose your challenger <span class="arena-hint">(your critters at Lv ' + pLevel + ")</span></h3>" + grid +
      '<button class="big-btn" data-close="arena" style="margin-top:12px">Leave arena</button>';
    body.querySelectorAll("[data-battler]").forEach(function (b) {
      b.onclick = function () { startBattle(shopArenaPoi(poi), def, b.getAttribute("data-battler")); };
    });
    wireCloses(body);
    $("arena").classList.add("open");
  }
  function shopArenaPoi(poi) { return poi; }

  function startBattle(poi, defInfo, playerId) {
    mode = "battle";
    var d = combatStats(defInfo.creatureId, defInfo.level);
    var p = combatStats(playerId, Math.max(3, levelOf(S.xp)));
    BATTLE = { poi: poi, busy: false,
      def: { creature: d.creature, level: d.level, atk: d.atk, def: d.def, maxHp: d.maxHp, hp: d.maxHp, owner: defInfo.owner },
      ply: { creature: p.creature, level: p.level, atk: p.atk, def: p.def, maxHp: p.maxHp, hp: p.maxHp } };
    $("arena").classList.remove("open");
    $("battle-result").style.display = "none";
    $("battle-main").style.display = "";
    $("battle").classList.add("open");
    renderBattle();
    battleMsg("Battle start! Answer to attack — a wrong answer lets " + BATTLE.def.creature.name + " strike back.");
    startChallenges({
      pref: S.settings.challenge, method: null, forceKangaroo: false,
      mathLevel: S.settings.mathLevel, spellLevel: S.settings.spellLevel,
      actionWord: "attack", doWord: "Attack!",
    }, $("battle-challenge"), battleResolve, function () { return BATTLE.busy; });
  }
  function combatantCard(side, who) {
    var pct = Math.max(0, Math.round(who.hp / who.maxHp * 100));
    var col = pct > 50 ? "#5cb85c" : pct > 22 ? "#e6c229" : "#e8703a";
    return '<div class="bt-card ' + side + '"><div class="bt-art"><svg viewBox="0 0 120 120">' + (CRITTER_ART[who.creature.id] || "") + "</svg></div>" +
      '<div class="bt-name">' + who.creature.name + ' <span>Lv ' + who.level + "</span></div>" +
      '<div class="bt-hpbar"><div class="bt-hpfill" style="width:' + pct + "%;background:" + col + '"></div></div>' +
      '<div class="bt-hp">' + who.hp + " / " + who.maxHp + " HP</div></div>";
  }
  function renderBattle() {
    $("battle-arena").innerHTML = combatantCard("ply", BATTLE.ply) + '<div class="bt-vs">VS</div>' + combatantCard("def", BATTLE.def);
  }
  function battleMsg(h) { $("battle-msg").innerHTML = h; }
  function attackDamage(a, d) {
    var base = Math.max(4, Math.round(a.atk * 0.42 - d.def * 0.18));
    return Math.round(base * (0.85 + Math.random() * 0.4)) + Math.round(a.level * 0.5);
  }
  // play a lunge on the attacker and a hit-shake + damage popup on the target
  function battleAnimate(attackerSide, targetSide, dmg) {
    var atkCard = $("battle-arena").querySelector(".bt-card." + attackerSide);
    var tgtCard = $("battle-arena").querySelector(".bt-card." + targetSide);
    if (atkCard) { atkCard.classList.add(attackerSide === "ply" ? "lunge-right" : "lunge-left"); setTimeout(function () { atkCard.classList.remove("lunge-right", "lunge-left"); }, 460); }
    if (tgtCard) {
      setTimeout(function () {
        tgtCard.classList.add("hit-shake");
        var pop = document.createElement("div"); pop.className = "dmg-pop"; pop.textContent = "-" + dmg;
        tgtCard.appendChild(pop);
        setTimeout(function () { tgtCard.classList.remove("hit-shake"); if (pop.parentNode) pop.remove(); }, 800);
      }, 200);
    }
  }
  function battleResolve(correct, reveal) {
    var B = BATTLE; B.busy = true;
    if (correct) {
      var dmg = attackDamage(B.ply, B.def);
      battleAnimate("ply", "def", dmg);
      battleMsg("💥 Your <b>" + B.ply.creature.name + "</b> attacks for <b>" + dmg + "</b>!");
      sfx("throw");
      setTimeout(function () {
        B.def.hp = Math.max(0, B.def.hp - dmg); sfx("correct"); renderBattle();
        if (B.def.hp <= 0) { setTimeout(function () { endBattle(true); }, 800); return; }
        setTimeout(function () { B.busy = false; nextChallenge(); }, 800);
      }, 380);
    } else {
      var dmg2 = attackDamage(B.def, B.ply);
      battleAnimate("def", "ply", dmg2);
      battleMsg("❌ " + reveal + " <b>" + B.def.creature.name + "</b> strikes back for <b>" + dmg2 + "</b>!");
      setTimeout(function () {
        B.ply.hp = Math.max(0, B.ply.hp - dmg2); sfx("wrong"); renderBattle();
        if (B.ply.hp <= 0) { setTimeout(function () { endBattle(false); }, 800); return; }
        setTimeout(function () { B.busy = false; nextChallenge(); }, 800);
      }, 380);
    }
  }
  function endBattle(win) {
    var B = BATTLE;
    $("battle-challenge").innerHTML = "";
    $("battle-main").style.display = "none";
    var r = $("battle-result"); r.style.display = "";
    if (win) {
      sfx("level");
      var xp = 40 + B.def.level * 10;
      var orbGain = 2 + Math.floor(B.def.level / 3);
      var dropKey = orbForZone(B.def.creature.zone);
      giveOrb(dropKey, orbGain); giveOrb("prism", 1);
      grantXP(xp); updateHUD(); persist();
      var owned = Object.keys(S.dex);
      r.innerHTML =
        '<div class="catch-banner">🏆 Victory! Your ' + B.ply.creature.name + " won!</div>" +
        '<div class="reward-orbs" style="justify-content:center">+' + xp + " XP · " + orbSVG(dropKey, "reward-orb") + " +" + orbGain + " " + ORB_TYPES[dropKey].name + " · " + orbSVG("prism", "reward-orb") + " +1 Prism</div>" +
        '<div class="npc-line" style="text-align:center;margin-top:10px">Leave one of your critters to guard <b>' + esc(B.poi.name) + "</b>? Others will battle it here.</div>" +
        '<div class="pick-grid" id="leave-grid">' + owned.map(function (id) {
          var c = CREATURE_BY_ID[id];
          return '<button class="pick-cell" data-leave="' + id + '"><svg viewBox="0 0 120 120">' + (CRITTER_ART[id] || "") + "</svg><span>" + c.name + "</span></button>";
        }).join("") + "</div>" +
        '<div class="catch-actions"><button class="big-btn go" data-close="battle">Back to the map</button></div>';
      r.querySelectorAll("[data-leave]").forEach(function (b) {
        b.onclick = function () {
          var id = b.getAttribute("data-leave");
          S.arenas[B.poi.id] = { creatureId: id, level: Math.max(4, levelOf(S.xp)), owner: S.name, placedAt: Date.now() };
          persist();
          toast("🛡️ Your " + CREATURE_BY_ID[id].name + " now guards " + B.poi.name + " for the next two days!", 4000);
          closeModal("battle");
        };
      });
    } else {
      r.innerHTML =
        '<div class="catch-banner">Your ' + B.ply.creature.name + " fainted...</div>" +
        '<div class="npc-line" style="text-align:center">No harm done — it will be right as rain. Train up and try again!</div>' +
        '<div class="catch-actions"><button class="big-btn go" data-close="battle">Back to the map</button></div>';
    }
    wireCloses(r);
    BATTLE = null;
  }

  // -------------------------------------------------------- Ultra Legendaries
  function ultraPool() { return CREATURES.filter(function (c) { return c.rarity === "ultra"; }); }
  function initUltras() {
    if (S.ultras && S.ultras.length) return;
    S.ultras = [];
    var n = Math.min(2, ultraPool().length, (map.ultraSpots || []).length);
    for (var i = 0; i < n; i++) spawnNewUltra();
  }
  function spawnNewUltra(excludeId) {
    var pool = ultraPool();
    var activeIds = (S.ultras || []).map(function (u) { return u.id; });
    var usedSpots = (S.ultras || []).map(function (u) { return u.tx + "," + u.ty; });
    var choices = pool.filter(function (c) { return activeIds.indexOf(c.id) < 0 && c.id !== excludeId; });
    if (!choices.length) choices = pool.filter(function (c) { return activeIds.indexOf(c.id) < 0; });
    if (!choices.length) choices = pool;
    var spots = (map.ultraSpots || []).filter(function (s) { return usedSpots.indexOf(s.tx + "," + s.ty) < 0; });
    if (!spots.length) spots = map.ultraSpots || [];
    if (!spots.length || !choices.length) return;
    var c = choices[Math.floor(Math.random() * choices.length)];
    var s = spots[Math.floor(Math.random() * spots.length)];
    S.ultras.push({ id: c.id, tx: s.tx, ty: s.ty });
  }
  function renderUltras() {
    var html = "";
    (S.ultras || []).forEach(function (rec, i) {
      var c = CREATURE_BY_ID[rec.id]; if (!c) return;
      var cx = rec.tx * TILE, cy = rec.ty * TILE;
      html += '<g class="ultra-marker' + (rec._reveal ? " revealed" : "") + '" data-ultra="' + i + '" transform="translate(' + cx + "," + cy + ')">' +
        '<ellipse cx="24" cy="46" rx="16" ry="4" fill="#000" opacity=".18"/>' +
        '<circle cx="24" cy="22" r="24" fill="none" stroke="#e0489c" stroke-width="3" class="glowpulse"/>' +
        '<circle cx="24" cy="22" r="20" fill="#fff" opacity=".88" stroke="#ffd94d" stroke-width="2.6"/>' +
        '<g class="spawn-bob"><svg x="2" y="0" width="44" height="44" viewBox="0 0 120 120">' + (CRITTER_ART[c.id] || "") + "</svg></g>" +
        '<text x="24" y="-2" font-size="10" text-anchor="middle" fill="#e0489c" font-weight="800">✦ ULTRA</text>' +
        '<rect x="2" y="0" width="44" height="44" fill="none" pointer-events="all"/></g>';
    });
    ultraLayer.innerHTML = html;
    ultraLayer.onclick = function (e) {
      e.stopPropagation();
      var g = e.target.closest ? e.target.closest("[data-ultra]") : null;
      if (!g) return;
      var rec = (S.ultras || [])[+g.getAttribute("data-ultra")];
      if (rec) clickUltra(rec);
    };
  }
  function clickUltra(rec) {
    if (mode !== "world") return;
    if (Math.abs(rec.tx - P.tx) + Math.abs(rec.ty - P.ty) <= 1) { startUltraEncounter(rec); return; }
    var best = null;
    [[0,0],[1,0],[-1,0],[0,1],[0,-1]].forEach(function (d) {
      var ax = rec.tx + d[0], ay = rec.ty + d[1];
      if (!walkable(ax, ay)) return;
      var p = findPath(P.tx, P.ty, ax, ay);
      if (p && (!best || p.length < best.length)) best = p;
    });
    if (best) { P.path = best; P.targetUltra = rec; P.targetSpawn = null; P.targetPoi = null; toast("✦ You sense an Ultra Legendary nearby..."); }
  }
  function startUltraEncounter(rec) { startEncounter(CREATURE_BY_ID[rec.id], null, rec); }
  function onUltraCaught(rec) {
    S.ultras = (S.ultras || []).filter(function (u) { return !(u.id === rec.id && u.tx === rec.tx && u.ty === rec.ty); });
    spawnNewUltra(rec.id);
    renderUltras();
    persist();
  }
  function revealUltra(rec) {
    if (!rec) return;
    rec._reveal = true; renderUltras();
    var zone = map.at(rec.tx, rec.ty).zone;
    toast("🧭 The compass glows! An Ultra Legendary hides in " + (map.zoneNames[zone] || "the wilds") + ", to the " + compassDir(rec.tx, rec.ty) + " — its ✦ marker is now pulsing.", 4200);
    setTimeout(function () { rec._reveal = false; renderUltras(); }, 15000);
  }

  // ------------------------------------------------------------ touch: D-pad
  function wireDpad() {
    var DIRS = { up: ["ArrowUp", [0,-1]], down: ["ArrowDown", [0,1]], left: ["ArrowLeft", [-1,0]], right: ["ArrowRight", [1,0]] };
    Object.keys(DIRS).forEach(function (k) {
      var b = $("dpad-" + k); if (!b) return;
      var code = DIRS[k][0], dir = DIRS[k][1];
      var press = function (e) { e.preventDefault(); keys[code] = true; queuedDir = dir; queuedAt = performance.now(); };
      var release = function () { keys[code] = false; };
      b.addEventListener("pointerdown", press);
      b.addEventListener("pointerup", release);
      b.addEventListener("pointerleave", release);
      b.addEventListener("pointercancel", release);
    });
  }

  // ================================================================= QUESTS
  //  State: S.quests[id] = { status:'active'|'done', step:N, items:N }.
  var questState = null; // dialog state for the open quest-giver

  function initQuests() { if (!S.quests) S.quests = {}; }
  function questStatus(id) { var q = S.quests && S.quests[id]; return q ? q.status : "available"; }
  function questDef(id) { return QUEST_BY_ID[id]; }
  function curStep(id) {
    var st = S.quests && S.quests[id]; var def = questDef(id);
    if (!st || st.status !== "active" || !def) return null;
    return def.steps[st.step] || null;
  }
  function activeQuestList() {
    return (window.QUESTS || []).filter(function (q) { return questStatus(q.id) === "active"; });
  }

  // ---- quest-giver dialog (entering a house) ----
  function openQuestGiver(poi) {
    mode = "quest";
    var qid = poi.questId;
    questState = { poi: poi, qid: qid, prob: null };
    renderQuestGiver();
    $("quest").classList.add("open");
  }
  function renderQuestGiver() {
    var poi = questState.poi, def = questDef(questState.qid), body = $("quest-body");
    if (!def) { body.innerHTML = '<div class="npc-line">Nobody seems to be home.</div><button class="big-btn" data-close="quest">Leave</button>'; wireCloses(body); return; }
    var av = '<div class="npc-portrait">' + AVATAR.svg("down", def.giverAv) + "</div>";
    var head = av + '<div class="npc-name">' + esc(def.giverName) + "</div>";
    var status = questStatus(def.id);

    if (status === "available") {
      body.innerHTML = head +
        '<div class="quest-title" style="color:' + def.color + '">' + def.icon + " " + esc(def.name) + "</div>" +
        '<div class="npc-line">' + esc(def.intro) + "</div>" +
        '<div class="catch-actions"><button class="big-btn go" id="quest-accept">Accept the quest!</button>' +
        '<button class="big-btn" data-close="quest">Not now</button></div>';
      $("quest-accept").onclick = function () {
        S.quests[def.id] = { status: "active", step: 0, items: 0 };
        persist(); renderPois(); renderQuestMarkers();
        toast("📜 Quest started: " + def.name + "!");
        renderQuestGiver();
      };
      wireCloses(body); return;
    }
    if (status === "done") {
      body.innerHTML = head +
        '<div class="quest-title" style="color:' + def.color + '">' + def.icon + " " + esc(def.name) + " ✓</div>" +
        '<div class="npc-line">' + esc(def.outro) + '</div><div class="npc-line">Thank you again, hero.</div>' +
        '<button class="big-btn go" data-close="quest">You\'re welcome!</button>';
      wireCloses(body); return;
    }
    // active — show the current step
    var st = S.quests[def.id], step = def.steps[st.step];
    var listHtml = def.steps.map(function (s, i) {
      var done = i < st.step, now = i === st.step;
      var prog = (now && s.kind === "item") ? " (" + (st.items || 0) + "/" + s.count + ")" : "";
      return '<div class="quest-step ' + (done ? "done" : now ? "now" : "") + '">' +
        (done ? "✅ " : now ? "▶️ " : "○ ") + esc(s.text) + prog + "</div>";
    }).join("");
    body.innerHTML = head +
      '<div class="quest-title" style="color:' + def.color + '">' + def.icon + " " + esc(def.name) + "</div>" +
      '<div class="quest-steps">' + listHtml + "</div>" +
      '<div id="quest-action"></div>' +
      '<button class="switch-link" data-close="quest">Close</button>';
    var act = $("quest-action");
    if (step.kind === "math") {
      var prob = makeMathProblem(step.level || 1); questState.prob = prob;
      act.innerHTML = '<div class="npc-line">"' + esc(step.giverLine || "Solve this to continue!") + '"</div>' +
        '<div class="math-q">' + prob.q + "</div>" +
        '<div class="answer-row center"><input class="answer-input" id="quest-input" type="number" placeholder="answer" autocomplete="off"><button class="big-btn go" id="quest-go">Answer</button></div>' +
        '<div class="npc-feedback" id="quest-feedback"></div>';
      var input = $("quest-input");
      function submit() {
        if (input.value.trim() === "") return;
        if (Math.abs(parseFloat(input.value) - prob.a) < 1e-9) { sfx("correct"); advanceQuest(def.id); renderQuestGiver(); }
        else { sfx("wrong"); $("quest-feedback").textContent = "❌ The answer was " + prob.a + " — here's another!"; setTimeout(renderQuestGiver, 1400); }
      }
      $("quest-go").onclick = submit;
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") submit(); });
      setTimeout(function () { input.focus(); }, 60);
    } else if (step.kind === "riddle") {
      act.innerHTML = '<div class="npc-line">"' + esc(step.giverLine || "Answer my riddle…") + '"</div>' +
        '<div class="quest-riddle">' + esc(step.prompt) + "</div>" +
        '<div class="answer-row center"><input class="answer-input" id="quest-input" type="text" placeholder="your answer" autocomplete="off" autocapitalize="off" spellcheck="false"><button class="big-btn go" id="quest-go">Answer</button></div>' +
        (step.hint ? '<div class="quest-riddle-hint">💡 ' + esc(step.hint) + "</div>" : "") +
        '<div class="npc-feedback" id="quest-feedback"></div>';
      var rinput = $("quest-input");
      var answers = (step.answers || []).map(function (a) { return a.toLowerCase().replace(/[^a-z0-9]/g, ""); });
      function rsubmit() {
        var guess = rinput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
        if (guess === "") return;
        if (answers.indexOf(guess) !== -1) { sfx("correct"); advanceQuest(def.id); renderQuestGiver(); }
        else { sfx("wrong"); $("quest-feedback").textContent = "❌ That's not it — think again!"; rinput.value = ""; rinput.focus(); }
      }
      $("quest-go").onclick = rsubmit;
      rinput.addEventListener("keydown", function (e) { if (e.key === "Enter") rsubmit(); });
      setTimeout(function () { rinput.focus(); }, 60);
    } else {
      var hint = step.kind === "catch" ? "Go catch the " + (CREATURE_BY_ID[step.creature] || {}).name + "! It's appearing in the wild now."
        : step.kind === "item" ? "Look for the glowing " + step.itemName + "s out in the world."
        : step.kind === "goto" ? "Head to " + step.locName + " — it's marked on your map."
        : step.kind === "talk" ? "Go find " + step.npcName + " and talk to them — they're marked on your map."
        : "Head to the marked spot and catch what appears!";
      act.innerHTML = '<div class="npc-line">' + esc(hint) + "</div>";
    }
    wireCloses(body);
  }

  function advanceQuest(id) {
    var st = S.quests[id], def = questDef(id);
    if (!st || st.status !== "active") return;
    st.step++; st.items = 0;
    if (st.step >= def.steps.length) { completeQuest(id); return; }
    persist(); renderPois(); renderQuestMarkers();
    var s = def.steps[st.step];
    toast("📜 " + def.name + ": " + s.text, 3600);
  }
  function completeQuest(id) {
    var def = questDef(id);
    S.quests[id] = { status: "done", step: def.steps.length };
    var rw = def.reward || {};
    if (rw.xp) grantXP(rw.xp);
    if (rw.orbs) Object.keys(rw.orbs).forEach(function (k) { giveOrb(k, rw.orbs[k]); });
    persist(); renderPois(); renderQuestMarkers(); updateHUD();
    sfx("level");
    toast("🎉 Quest complete: " + def.name + "!  +" + (rw.xp || 0) + " XP", 4200);
  }

  // ---- quest world content: location markers, creature & item spawns ----
  function renderQuestMarkers() {
    var html = "";
    activeQuestList().forEach(function (q) {
      var step = curStep(q.id);
      if (!step) return;
      var mx = null, my = null, glyph = q.icon;
      if ((step.kind === "goto" || step.kind === "boss") && step.tx != null && !/^portal-/.test(step.loc || "")) {
        // portal gotos are reached through the portal's own marker, so skip those
        mx = step.tx; my = step.ty; glyph = step.kind === "boss" ? "❗" : q.icon;
      } else if (step.kind === "talk") {
        var np = (map.pois || []).filter(function (p) { return p.id === step.npc; })[0];
        if (np) { mx = np.tx; my = np.ty; glyph = "💬"; }
      }
      if (mx == null) return;
      html += '<g class="quest-marker" data-questloc="' + q.id + '" transform="translate(' + (mx * TILE) + "," + (my * TILE) + ')">' +
        '<ellipse cx="24" cy="44" rx="14" ry="4" fill="#000" opacity=".18"/>' +
        '<circle cx="24" cy="24" r="20" fill="none" stroke="' + q.color + '" stroke-width="3" class="glowpulse"/>' +
        '<circle cx="24" cy="24" r="15" fill="#fffdf5" opacity=".85" stroke="' + q.color + '" stroke-width="2.4"/>' +
        '<text x="24" y="30" font-size="18" text-anchor="middle">' + glyph + "</text>" +
        '<rect x="2" y="2" width="44" height="44" fill="none" pointer-events="all"/></g>';
    });
    if (questLayer) {
      questLayer.innerHTML = html;
      questLayer.onclick = function (e) {
        e.stopPropagation();
        var g = e.target.closest ? e.target.closest("[data-questloc]") : null;
        if (!g) return;
        var q = questDef(g.getAttribute("data-questloc"));
        var step = curStep(q.id);
        if (step) approachQuestLoc(q.id, step);
      };
    }
  }
  function approachQuestLoc(qid, step) {
    if (mode !== "world") return;
    if (step.kind === "talk") {
      var np = (map.pois || []).filter(function (p) { return p.id === step.npc; })[0];
      if (np) approachPoi(np);
      return;
    }
    var here = Math.abs(step.tx - P.tx) + Math.abs(step.ty - P.ty) <= 1;
    if (here) { reachQuestLoc(qid, step); return; }
    var best = null;
    [[0,0],[1,0],[-1,0],[0,1],[0,-1]].forEach(function (d) {
      var ax = step.tx + d[0], ay = step.ty + d[1];
      if (!walkable(ax, ay)) return;
      var p = findPath(P.tx, P.ty, ax, ay);
      if (p && (!best || p.length < best.length)) best = p;
    });
    if (best) { P.path = best; P.targetQuest = { qid: qid, step: step }; P.targetSpawn = null; P.targetPoi = null; P.targetUltra = null;
      toast("Heading to " + (step.locName || "the marked spot") + "..."); }
  }
  function reachQuestLoc(qid, step) {
    if (step.kind === "goto") { advanceQuest(qid); }
    else if (step.kind === "boss") {
      // the quest creature appears — encounter it
      startEncounter(CREATURE_BY_ID[step.creature], null, null, qid);
    }
  }

  // spawn quest creatures / items while their step is active (called from trySpawn)
  function trySpawnQuest(tx, ty, t) {
    var acts = activeQuestList();
    for (var i = 0; i < acts.length; i++) {
      var q = acts[i], step = curStep(q.id);
      if (!step) continue;
      if (step.kind === "catch" && step.zone === t.zone && CREATURE_BY_ID[step.creature]) {
        addSpawn({ kind: "creature", creature: CREATURE_BY_ID[step.creature], orb: null, quest: q.id }, tx, ty);
        return true;
      }
      if (step.kind === "item" && step.zone === t.zone) {
        addSpawn({ kind: "questitem", questId: q.id, item: step.item, emoji: step.emoji }, tx, ty);
        return true;
      }
    }
    return false;
  }

  // called on any successful catch to advance catch/boss steps
  function questOnCatch(creatureId) {
    activeQuestList().forEach(function (q) {
      var step = curStep(q.id);
      if (step && (step.kind === "catch" || step.kind === "boss") && step.creature === creatureId) advanceQuest(q.id);
    });
  }
  function questOnItem(questId) {
    var st = S.quests[questId], def = questDef(questId); if (!st) return;
    var step = def.steps[st.step];
    if (!step || step.kind !== "item") return;
    st.items = (st.items || 0) + 1;
    persist();
    if (st.items >= step.count) { toast("✨ Collected all the " + step.itemName + "s!"); advanceQuest(questId); }
    else toast("✨ " + step.itemName + " " + st.items + "/" + step.count);
  }

  // ---- Quest Log ----
  function openQuestLog() {
    mode = "questlog";
    var body = $("questlog-body");
    var active = activeQuestList();
    var avail = (window.QUESTS || []).filter(function (q) { return questStatus(q.id) === "available"; });
    var done = (window.QUESTS || []).filter(function (q) { return questStatus(q.id) === "done"; });
    var html = "";
    html += '<div class="ql-section"><h3>▶️ Active</h3>';
    if (!active.length) html += '<div class="soc-empty">No active quests. Enter a house with a 📜 or ❗ to find one!</div>';
    active.forEach(function (q) {
      var st = S.quests[q.id], step = q.steps[st.step];
      html += '<div class="ql-card" style="border-color:' + q.color + '"><div class="ql-name">' + q.icon + " " + esc(q.name) + "</div>" +
        '<div class="ql-step">▶️ ' + esc(step.text) + (step.kind === "item" ? " (" + (st.items || 0) + "/" + step.count + ")" : "") + "</div>" +
        '<div class="ql-giver">from ' + esc(q.giverName) + " · " + esc(q.house.name) + "</div></div>";
    });
    html += "</div>";
    if (avail.length) {
      html += '<div class="ql-section"><h3>❗ Available</h3>';
      avail.forEach(function (q) {
        html += '<div class="ql-card"><div class="ql-name">' + q.icon + " " + esc(q.name) + "</div>" +
          '<div class="ql-giver">Visit ' + esc(q.house.name) + " to begin.</div></div>";
      });
      html += "</div>";
    }
    if (done.length) {
      html += '<div class="ql-section"><h3>✅ Completed (' + done.length + ")</h3>";
      done.forEach(function (q) { html += '<div class="ql-card done"><div class="ql-name">' + q.icon + " " + esc(q.name) + " ✓</div></div>"; });
      html += "</div>";
    }
    body.innerHTML = html;
    $("questlog").classList.add("open");
  }

  // ================================================================== TITLE
  function decorateTitle() {
    var ids = ["bloomble", "emberling", "puddlet", "owlume", "duneling", "pyrewing"];
    $("title-critters").innerHTML = ids.map(function (id) {
      return '<div class="title-critter">' + '<svg viewBox="0 0 120 120">' + CRITTER_ART[id] + "</svg></div>";
    }).join("");
  }

  function startGame(name, save) {
    S.name = name;
    if (save) {
      S.xp = save.xp || 0;
      S.dex = save.dex || {};
      S.settings = Object.assign(S.settings, save.settings || {});
      S.customWords = save.customWords || [];
      S.friends = save.friends || [];
      S.orbs = save.orbs || null;
      S.ultras = save.ultras || null;
      S.arenas = save.arenas || {};
      S.quests = save.quests || {};
      if (save.pos && walkable(save.pos.tx, save.pos.ty)) { P.tx = save.pos.tx; P.ty = save.pos.ty; }
    }
    if (!S.orbs || !Object.keys(S.orbs).length) S.orbs = startingOrbs();
    if (!S.settings.avatar) S.settings.avatar = Object.assign({}, AVATAR.DEFAULT);
    P.px = P.tx * TILE; P.py = P.ty * TILE;
    renderSprite();
    $("title-screen").style.display = "none";
    $("game-screen").style.display = "";
    resize();
    cam.x = Math.max(0, Math.min(map.W * TILE - VIEW.w, P.px + TILE / 2 - VIEW.w / 2));
    cam.y = Math.max(0, Math.min(map.H * TILE - VIEW.h, P.py + TILE / 2 - VIEW.h / 2));
    updateHUD();
    mode = "world";
    lastZone = map.at(P.tx, P.ty).zone;
    toast("📍 " + map.zoneNames[lastZone] + " — welcome, " + S.name + "!");
    // a few creatures right away so the world feels alive
    for (var i = 0; i < 4; i++) trySpawn();
    checkArenaExpiry();
    initQuests();
    renderPois();
    renderQuestMarkers();
    initUltras();
    renderUltras();
    persist();
    SOCIAL.init(S.name, function () { refreshSocial(false); });
    if (SOCIAL.available()) { refreshSocial(false); SOCIAL.startPolling(20000); }
  }

  // =================================================================== BOOT
  function boot() {
    map = WORLD.build();
    svg = $("world-svg");
    WORLD.render(map, svg);
    spriteEl = $("player-sprite");
    spawnLayer = $("spawn-layer");
    poiLayer = $("poi-layer");
    ultraLayer = $("ultra-layer");
    questLayer = $("quest-layer");
    var saveMode = SaveStore.init();
    var badge = $("storage-mode");
    badge.textContent = saveMode === "cloud" ? "☁️ Cloud save" : "💾 Local save";
    badge.classList.toggle("local", saveMode !== "cloud");

    decorateTitle();
    wireSettings();
    wireInput();
    wireDpad();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", resize);
    resize();

    var lastName = "";
    try { lastName = localStorage.getItem("critterquest-lastname") || ""; } catch (e) {}
    $("trainer-name-input").value = lastName;

    $("start-btn").onclick = beginFromTitle;
    $("trainer-name-input").addEventListener("keydown", function (e) { if (e.key === "Enter") beginFromTitle(); });

    function beginFromTitle() {
      var name = $("trainer-name-input").value.trim();
      if (!name) { $("trainer-name-input").focus(); toast("Pick a trainer name first!"); return; }
      try { localStorage.setItem("critterquest-lastname", name); } catch (e) {}
      $("start-btn").disabled = true;
      $("start-btn").textContent = "Loading...";
      SaveStore.load(name, function (save) { startGame(name, save); });
    }

    window.__cqTick = frame; // manual tick hook (debug/automation)
    if (/debug/.test(location.search)) {
      window.__cqEncounter = function (id) {
        var c = CREATURE_BY_ID[id];
        if (c && mode === "world") startEncounter(c, null);
      };
      window.__cqDebug = {
        questGiver: function (id) { openQuestGiver(map.pois.find(function (p) { return p.id === id; })); },
        openPoi: function (id) { var p = map.pois.find(function (x) { return x.id === id; }); if (p) openPoi(p); },
        questLog: openQuestLog,
        quests: function () { return S.quests; },
        advance: function (id) { advanceQuest(id); },
        teleport: function (x, y) { P.tx = x; P.ty = y; P.px = x * TILE; P.py = y * TILE; P.path = []; lastZone = map.at(x, y).zone; },
        speedExpire: function () { if (speedState) speedState.deadline = Date.now(); },
        state: S,
      };
    }
    frame();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
