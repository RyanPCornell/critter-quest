// ============================================================================
//  CRITTER QUEST — QUESTS
//  Multi-step story quests. Each is given by a person you meet by entering a
//  house. Step kinds:
//    math   — solve a math problem in the quest-giver's dialog
//    catch  — catch a named (wild) creature that appears while the step is active
//    item   — collect N glowing quest items that appear in a zone
//    goto   — travel to a special location that appears only during this step
//    boss   — reach the revealed location; a quest-only creature appears — catch it
//  quest-only creatures (creatures.js `quest` field) and quest items only show
//  up while their quest step is active. Most steps also lean on math.
// ============================================================================

window.QUESTS = [
  {
    id: "q-emberheart", name: "The Emberheart Cinders", color: "#e8703a", icon: "🔥",
    house: { id: "house-ember", name: "Fira's Forge", tx: 50, ty: 4, deco: "house1" },
    giverName: "Old Fira", giverAv: { skin: 3, hair: 2, shirt: 3, pants: 1, hat: "none", glasses: "square" },
    intro: "Long ago the Emberheart Shrine kept all of Ember Ridge warm. Its flame has nearly gone out, and the ridge grows cold. Help me relight it, and its guardian will be yours!",
    steps: [
      { kind: "math", level: 1, text: "Warm up your wits — solve Fira's puzzle.", giverLine: "First, prove your mind is sharp. Solve this!" },
      { kind: "item", item: "ember-cinder", itemName: "Ember Cinder", emoji: "🔥", count: 3, zone: "ridge",
        text: "Gather 3 Ember Cinders glowing on Ember Ridge." },
      { kind: "goto", loc: "loc-emberheart", locName: "Emberheart Shrine", tx: 44, ty: 4, zone: "ridge",
        text: "Carry the Cinders to the Emberheart Shrine (now on your map)." },
      { kind: "boss", creature: "cindermane", loc: "loc-emberheart", tx: 44, ty: 4,
        text: "The shrine flares to life — the Cindermane appears! Catch it." },
    ],
    reward: { xp: 320, orbs: { ridge: 5, prism: 1 } },
    outro: "The ridge glows warm once more, and the Cindermane has chosen you. Ember Ridge thanks you!",
  },
  {
    id: "q-greenheart", name: "The Greenheart Hollow", color: "#5cb85c", icon: "🌿",
    house: { id: "house-grove", name: "Elowen's Cabin", tx: 6, ty: 22, deco: "house2" },
    giverName: "Warden Elowen", giverAv: { skin: 1, hair: 3, shirt: 2, pants: 2, hat: "ranger", glasses: "green" },
    intro: "The Whispering Woods hide a secret grove where the very first seed still sleeps. Prove yourself a friend to the forest and its sprite will reveal the way.",
    steps: [
      { kind: "math", level: 1, text: "Answer Elowen's riddle of numbers.", giverLine: "The forest tests all who enter. Solve this riddle." },
      { kind: "catch", creature: "mossling", zone: "forest", text: "Befriend a Mossling in the Whispering Woods." },
      { kind: "goto", loc: "loc-greenheart", locName: "Greenheart Hollow", tx: 6, ty: 30, zone: "forest",
        text: "Follow the mossy trail to the Greenheart Hollow (now on your map)." },
      { kind: "boss", creature: "gladewing", loc: "loc-greenheart", tx: 6, ty: 30,
        text: "The Gladewing flits from the hollow — catch it!" },
    ],
    reward: { xp: 340, orbs: { forest: 5, prism: 1 } },
    outro: "The Gladewing trusts you, and the first seed sleeps easy. The woods will remember your kindness.",
  },
  {
    id: "q-tidecaller", name: "Song of the Deep", color: "#4aa3df", icon: "🌊",
    house: { id: "house-lake", name: "Nerys's Boathouse", tx: 16, ty: 30, deco: "house1" },
    giverName: "Tidecaller Nerys", giverAv: { skin: 2, hair: 6, shirt: 5, pants: 0, hat: "none", glasses: "round" },
    intro: "At the bottom of Lake Lumen sleeps the Sablefin, keeper of the drowned stars. Only the old Tidecaller's Song can wake it — and only a clever mind can learn the Song.",
    steps: [
      { kind: "math", level: 2, text: "Learn the first notes of the Tidecaller's Song.", giverLine: "The Song is made of numbers. Learn its first measure." },
      { kind: "item", item: "moon-pearl", itemName: "Moon Pearl", emoji: "🌙", count: 3, zone: "lake",
        text: "Gather 3 Moon Pearls shining on the shores of Lake Lumen." },
      { kind: "goto", loc: "loc-tidecaller", locName: "Moonlit Cove", tx: 28, ty: 22, zone: "lake",
        text: "Bring the Pearls to the Moonlit Cove (now on your map)." },
      { kind: "boss", creature: "sablefin", loc: "loc-tidecaller", tx: 28, ty: 22,
        text: "The water spirals — the Sablefin rises from the deep. Catch it!" },
    ],
    reward: { xp: 360, orbs: { lake: 5, prism: 1 } },
    outro: "The Sablefin coils gently at your side. The drowned stars twinkle a little brighter tonight.",
  },
  {
    id: "q-sandsong", name: "The Singing Dunes", color: "#e6b52c", icon: "🏜️",
    house: { id: "house-desert", name: "Rashid's Tent", tx: 58, ty: 22, deco: "house2" },
    giverName: "Nomad Rashid", giverAv: { skin: 4, hair: 1, shirt: 3, pants: 3, hat: "none", glasses: "shades" },
    intro: "The dunes of Sundune hum with an ancient rhythm — the Sandsong. Beneath them sleeps the Dustmaw. Master the Sandsong's numbers and you may wake it without fear.",
    steps: [
      { kind: "math", level: 2, text: "Practice the Sandsong's rhythm (a puzzle).", giverLine: "The Sandsong is a rhythm of numbers. Keep the beat!" },
      { kind: "catch", creature: "duneling", zone: "desert", text: "Catch a Duneling to guide you across the sand." },
      { kind: "item", item: "sun-shard", itemName: "Sun Shard", emoji: "☀️", count: 3, zone: "desert",
        text: "Collect 3 Sun Shards buried in the Sundune Desert." },
      { kind: "boss", creature: "dustmaw", loc: "loc-sandsong", locName: "The Hollow Dune", tx: 64, ty: 20, zone: "desert",
        text: "Play the Sandsong at the Hollow Dune — the Dustmaw erupts! Catch it." },
    ],
    reward: { xp: 380, orbs: { desert: 5, prism: 1 } },
    outro: "The Dustmaw rumbles a contented note. The desert's song is yours to keep.",
  },
  {
    id: "q-starfall", name: "Chasing the Starfall", color: "#8f6ec9", icon: "✦",
    house: { id: "house-observatory", name: "Vega's Observatory", tx: 34, ty: 24, deco: "house1" },
    giverName: "Astronomer Vega", giverAv: { skin: 0, hair: 7, shirt: 4, pants: 0, hat: "none", glasses: "round" },
    intro: "Once a century, a star falls that is really the Glimmerhart coming home. Tonight is the night! Chart its path through the Astral Rift and follow it to where it lands.",
    steps: [
      { kind: "math", level: 2, text: "Chart the Glimmerhart's path (solve the star-map).", giverLine: "The stars move by numbers. Chart the Glimmerhart's path!" },
      { kind: "goto", loc: "portal-village", locName: "the Astral Portal", tx: 35, ty: 33, zone: "meadow",
        text: "Step through the ✦ Astral Portal near the village into the Rift." },
      { kind: "catch", creature: "nebulyn", zone: "rift", text: "Catch a Nebulyn drifting in the Astral Rift." },
      { kind: "item", item: "star-fragment", itemName: "Star Fragment", emoji: "⭐", count: 3, zone: "rift",
        text: "Gather 3 Star Fragments falling through the Rift." },
      { kind: "boss", creature: "glimmerhart", loc: "loc-starfall", locName: "the Starfall", tx: 80, ty: 30, zone: "rift",
        text: "Follow the Fragments to where the Starfall lands — the Glimmerhart! Catch it." },
    ],
    reward: { xp: 550, orbs: { rift: 4, prism: 2 } },
    outro: "The Glimmerhart lowers its glowing antlers and grants your smallest wish. You have caught a falling star.",
  },

  // ---- HARD / LONG QUESTS ----------------------------------------------
  {
    id: "q-frostcrown", name: "The Frostcrown Trials", color: "#5fa8de", icon: "❄️",
    house: { id: "house-frost", name: "Yuki's Lodge", tx: 8, ty: 4, deco: "house2" },
    giverName: "Elder Yuki", giverAv: { skin: 1, hair: 0, shirt: 5, pants: 1, hat: "beanie", glasses: "round" },
    intro: "Atop Frostpeak, the ancient Frost Warden Auravern sealed itself in the Frostcrown Spire, vowing to serve only a trainer who could pass its three Trials of mind and heart. Many have frozen trying. I have watched you, and I believe you are ready. But be warned — the Trials do not forgive a careless mind.",
    steps: [
      { kind: "math", level: 3, text: "First Trial: solve the Riddle of Ice.", giverLine: "The First Trial is of the mind. Solve the Riddle of Ice — and no guessing." },
      { kind: "item", item: "frost-sigil", itemName: "Frost Sigil", emoji: "❄️", count: 4, zone: "tundra",
        text: "Gather 4 Frost Sigils frozen into the Frostpeak drifts." },
      { kind: "catch", creature: "woolhorn", zone: "tundra", text: "Earn the trust of a Woolhorn to carry you through the blizzard." },
      { kind: "math", level: 3, text: "Second Trial: the Warden's Reckoning.", giverLine: "The Second Trial is harder still. Reckon this exactly." },
      { kind: "catch", creature: "glacimoth", zone: "tundra", text: "A Glacimoth lights the storm — catch it to find your way." },
      { kind: "item", item: "aurora-shard", itemName: "Aurora Shard", emoji: "🌌", count: 4, zone: "tundra",
        text: "Collect 4 Aurora Shards fallen from the northern lights." },
      { kind: "goto", loc: "loc-frostcrown", locName: "the Frostcrown Spire", tx: 4, ty: 3, zone: "tundra",
        text: "Climb to the Frostcrown Spire, now revealed on your map." },
      { kind: "boss", creature: "auravern", loc: "loc-frostcrown", tx: 4, ty: 3, zone: "tundra",
        text: "Third Trial: the Frost Warden Auravern awakens. Catch it — its crown of frost will resist you." },
    ],
    reward: { xp: 700, orbs: { tundra: 6, prism: 3 } },
    outro: "The Frostcrown Spire falls silent, and Auravern lowers its crowned head to you at last. Frostpeak has a new Warden's friend — and it is you.",
  },
  {
    id: "q-crystalcrown", name: "Heart of the Gleamcave", color: "#b06fe0", icon: "💎",
    house: { id: "house-cavern", name: "Garnet's Dig", tx: 66, ty: 44, deco: "house1" },
    giverName: "Prospector Garnet", giverAv: { skin: 3, hair: 2, shirt: 3, pants: 3, hat: "cap", glasses: "shades" },
    intro: "Deep under the Gleamcave sleeps Prismegis, the Crystal Sovereign, whose heartgem once lit every tunnel in the mountain. A cave-in stole its light and its slumber both, and the deep dark has crept back in. Help me forge the Gleamkey and wake the Sovereign — but the old locks answer only to sharp arithmetic.",
    steps: [
      { kind: "math", level: 3, text: "Garnet's assay: prove you can reckon carats.", giverLine: "No fool wakes a Sovereign. Assay this figure exactly." },
      { kind: "item", item: "raw-geode", itemName: "Raw Geode", emoji: "🪨", count: 4, zone: "cavern",
        text: "Pry 4 Raw Geodes from the walls of the Gleamcave." },
      { kind: "catch", creature: "glowbat", zone: "cavern", text: "Follow a Glowbat's light deeper into the dark." },
      { kind: "math", level: 3, text: "Cut the Gleamkey — a puzzle of exact angles.", giverLine: "One wrong cut ruins the key. Solve it precisely." },
      { kind: "catch", creature: "gleamkit", zone: "cavern", text: "A Gleamkit lights the sealed door — catch it to pass." },
      { kind: "item", item: "prism-facet", itemName: "Prism Facet", emoji: "💠", count: 4, zone: "cavern",
        text: "Gather 4 Prism Facets to complete the Gleamkey." },
      { kind: "goto", loc: "loc-crystalthrone", locName: "the Crystal Throne", tx: 70, ty: 49, zone: "cavern",
        text: "Carry the Gleamkey to the Crystal Throne, now on your map." },
      { kind: "boss", creature: "prismegis", loc: "loc-crystalthrone", tx: 70, ty: 49, zone: "cavern",
        text: "The Gleamkey turns — Prismegis wakes! Catch the Sovereign; its refractions will guard it." },
    ],
    reward: { xp: 720, orbs: { cavern: 6, prism: 3 } },
    outro: "Prismegis' heartgem blazes, and light floods every tunnel of the Gleamcave at once. The Crystal Sovereign walks at your side, and the mountain shines for you.",
  },
];

window.QUEST_BY_ID = {};
window.QUESTS.forEach(function (q) { window.QUEST_BY_ID[q.id] = q; });
