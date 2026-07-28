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
];

window.QUEST_BY_ID = {};
window.QUESTS.forEach(function (q) { window.QUEST_BY_ID[q.id] = q; });
