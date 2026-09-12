// ============================================================================
//  CRITTER QUEST — CREATURE DATA
//  30 original creatures. Art lives in art-critters-1.js / art-critters-2.js
//  keyed by the same id. rarity: common | uncommon | rare | legendary
//  zone: meadow | forest | lake | ridge | desert | any
// ============================================================================

window.TYPE_COLORS = {
  Leaf:  "#5cb85c", Aqua:  "#4aa3df", Ember: "#e8703a", Stone: "#a08b6c",
  Gale:  "#8fb7c9", Spark: "#e6c229", Shade: "#7d6b9e", Lumen: "#f2d16b",
  Sand:  "#d9a86c", Song:  "#d97fb8", Frost: "#7fc4e0", Gem: "#b98ad4",
};

window.RARITY_INFO = {
  common:    { label: "Common",    stars: 1, baseCatch: 0.72, xp: 20,  color: "#8aa877" },
  uncommon:  { label: "Uncommon",  stars: 2, baseCatch: 0.52, xp: 45,  color: "#5f9ec7" },
  rare:      { label: "Rare",      stars: 3, baseCatch: 0.34, xp: 100, color: "#a678c9" },
  mythical:  { label: "Mythical",  stars: 4, baseCatch: 0.26, xp: 175, color: "#3fb8c9", glyph: "❖" },
  speedmythical: { label: "Speed Mythical", stars: 4, baseCatch: 0.30, xp: 320, color: "#ff8c1a", glyph: "⚡", speed: true, speedNeed: 5 },
  ultraspeed: { label: "Ultra Speed Mythical", stars: 5, baseCatch: 0.34, xp: 560, color: "#e11d48", glyph: "⚡⚡", speed: true, speedNeed: 8 },
  paradox:   { label: "Paradox", stars: 5, baseCatch: 0.22, xp: 400, color: "#c026d3", glyph: "⧉" },
  legendary: { label: "Legendary", stars: 4, baseCatch: 0.20, xp: 250, color: "#e0a63c" },
  ultra:     { label: "Ultra Legendary", stars: 5, baseCatch: 0.16, xp: 600, color: "#e0489c" },
};

window.CREATURES = [
  // ---------------------------- WILLOWMERE MEADOW --------------------------
  {
    id: "bloomble", name: "Bloomble", species: "Blossom Hare", types: ["Leaf"],
    zone: "meadow", rarity: "common", hp: 42, atk: 36, def: 34, spd: 58,
    evolvesTo: "floralope", evolveOrbs: 12,
    height: "0.4 m", weight: "3.1 kg",
    powers: [
      { n: "Petal Flurry", d: "Spins in place and flings a whirlwind of razor-edged petals." },
      { n: "Root Hop", d: "Burrows its feet like roots, then springs out with surprising force." },
    ],
    story: "Bloombles sprout from seeds that fall on especially sunny hilltops. The flowers on their ears bloom brighter the happier they are, and an entire meadow of them blooming at once is considered the official first day of spring in Willowmere.",
  },
  {
    id: "thistlepuff", name: "Thistlepuff", species: "Dandelion Cat", types: ["Leaf", "Gale"],
    zone: "meadow", rarity: "common", hp: 38, atk: 30, def: 28, spd: 66,
    height: "0.3 m", weight: "0.9 kg",
    powers: [
      { n: "Seed Drift", d: "Releases a cloud of fluffy seeds that make opponents sneeze uncontrollably." },
      { n: "Static Fluff", d: "Rubs its fur against grass to build a shocking layer of static." },
    ],
    story: "A Thistlepuff weighs almost nothing and can ride the breeze for miles by puffing out its seed-fur. Farmers love them because everywhere a Thistlepuff naps, wildflowers grow in the shape of a sleeping cat.",
  },
  {
    id: "chirpit", name: "Chirpit", species: "Melody Finch", types: ["Song", "Gale"],
    zone: "meadow", rarity: "common", hp: 40, atk: 34, def: 30, spd: 70,
    height: "0.25 m", weight: "0.6 kg",
    powers: [
      { n: "Triple Trill", d: "Sings three perfect notes that briefly put listeners into a happy daze." },
      { n: "Wing Snap", d: "Claps its wings to fire a crack of compressed air." },
    ],
    story: "Every Chirpit knows exactly one song, invented on the day it hatched, and it never sings another. Collectors travel the meadow at dawn hoping to hear a brand-new melody — it means a new Chirpit has just been born.",
  },
  {
    id: "zumble", name: "Zumble", species: "Bumble Knight", types: ["Spark", "Gale"],
    zone: "meadow", rarity: "uncommon", hp: 45, atk: 52, def: 40, spd: 61,
    height: "0.35 m", weight: "1.2 kg",
    powers: [
      { n: "Honey Lance", d: "Charges with its stinger glowing like a golden jousting lance." },
      { n: "Waggle Code", d: "Dances a secret pattern that calls two wild Zumble to bump the foe." },
    ],
    story: "Zumble patrol the meadow in tiny squadrons, guarding flower patches the way knights guard castles. Their hives are built like round keeps with honey moats, and a Zumble will bow politely before every duel.",
  },
  {
    id: "petalisk", name: "Petalisk", species: "Garland Serpent", types: ["Leaf", "Song"],
    zone: "meadow", rarity: "uncommon", hp: 55, atk: 48, def: 44, spd: 47,
    height: "1.1 m", weight: "4.4 kg",
    powers: [
      { n: "Blossom Coil", d: "Wraps a foe in a spiral of vines that bloom on contact." },
      { n: "Pollen Hush", d: "Shakes loose sleepy pollen while humming a low lullaby." },
    ],
    story: "A Petalisk is a living flower garland that escaped a maypole long ago and decided to keep dancing forever. It slithers in figure-eights through the tall grass, and stepping inside one of its loops is said to bring a season of good luck.",
  },
  {
    id: "verdantler", name: "Verdantler", species: "Grove Stag", types: ["Leaf", "Lumen"],
    zone: "meadow", rarity: "rare", hp: 72, atk: 58, def: 62, spd: 55,
    height: "1.6 m", weight: "88 kg",
    powers: [
      { n: "Canopy Crown", d: "Its antlers burst into full leaf, showering healing light on allies." },
      { n: "Season Charge", d: "Gallops through the foe, leaving a trail that shifts from spring to autumn." },
    ],
    story: "Wherever a Verdantler sleeps, a ring of oak saplings rises by morning. The oldest trees in Willowmere Meadow are said to mark the napping spots of a single Verdantler that has lived for nine hundred years — and is still just a teenager.",
  },

  // ---------------------------- WHISPERING WOODS ---------------------------
  {
    id: "mossling", name: "Mossling", species: "Moss Golem", types: ["Leaf", "Stone"],
    zone: "forest", rarity: "common", hp: 58, atk: 40, def: 60, spd: 22,
    height: "0.5 m", weight: "12 kg",
    powers: [
      { n: "Soft Slam", d: "Belly-flops onto foes; the moss makes it gentle but very embarrassing." },
      { n: "Regrow", d: "Sits perfectly still and regrows its mossy coat, restoring health." },
    ],
    story: "Mosslings are pebbles that lay so long on the forest floor that the moss decided to take them for a walk. They move about three steps per hour unless snacks are involved, in which case they are shockingly fast.",
  },
  {
    id: "shroomp", name: "Shroomp", species: "Toadstool Hopper", types: ["Leaf", "Shade"],
    zone: "forest", rarity: "common", hp: 44, atk: 38, def: 42, spd: 48,
    height: "0.3 m", weight: "2.2 kg",
    powers: [
      { n: "Spore Bounce", d: "Bounces on its cap, releasing rings of glittering spores." },
      { n: "Umbrella Guard", d: "Flips its cap over itself to block attacks from above." },
    ],
    story: "Shroomps grow in fairy rings and pop free during the first autumn rain. They use their caps as trampolines, umbrellas, and dinner plates, and they judge every other creature entirely by how good its hat is.",
  },
  {
    id: "glimmoth", name: "Glimmoth", species: "Lantern Moth", types: ["Lumen", "Gale"],
    zone: "forest", rarity: "common", hp: 39, atk: 42, def: 30, spd: 63,
    height: "0.3 m", weight: "0.4 kg",
    powers: [
      { n: "Dream Dust", d: "Scatters glowing scales that show foes their fondest memory." },
      { n: "Moonbeam Dart", d: "Focuses stored moonlight into a thin silver beam." },
    ],
    story: "Glimmoths drink moonlight the way other moths drink nectar, storing it in their wings for cloudy nights. Deep in the Whispering Woods they gather in the thousands, and travelers mistake their meetings for a second, lower sky of stars.",
  },
  {
    id: "barkun", name: "Barkun", species: "Timber Cub", types: ["Leaf", "Stone"],
    zone: "forest", rarity: "uncommon", hp: 62, atk: 56, def: 55, spd: 38,
    height: "0.8 m", weight: "34 kg",
    powers: [
      { n: "Log Roll", d: "Curls into a stout log and bowls straight through the underbrush." },
      { n: "Sap Swipe", d: "Slashes with paws coated in sticky amber sap that slows the foe." },
    ],
    story: "A Barkun's hide is real oak bark, complete with rings you can count to guess its age — though it is rude to count higher than ten. They hug trees not out of affection but to slowly, patiently absorb their stubbornness.",
  },
  {
    id: "owlume", name: "Owlume", species: "Hearth Owl", types: ["Lumen", "Shade"],
    zone: "forest", rarity: "uncommon", hp: 52, atk: 50, def: 46, spd: 57,
    height: "0.6 m", weight: "3.8 kg",
    powers: [
      { n: "Lantern Gaze", d: "The glass belly-lantern flares, revealing everything hidden nearby." },
      { n: "Hush Wing", d: "Flies in perfect silence and strikes from the dark side of its glow." },
    ],
    story: "An Owlume's chest holds a little glass lantern fed by a flame nobody has ever seen it light. Lost travelers who follow the bobbing glow are always led out of the woods — but always by the longest possible route, because Owlumes enjoy the company.",
  },
  {
    id: "sylvyrn", name: "Sylvyrn", species: "Thicket Wyvern", types: ["Leaf", "Gale"],
    zone: "forest", rarity: "rare", hp: 70, atk: 66, def: 54, spd: 60,
    height: "1.9 m", weight: "52 kg",
    powers: [
      { n: "Verdant Gale", d: "Beats its leaf-sailed wings to whip up a storm of twigs and leaves." },
      { n: "Briar Fang", d: "Bites with thorned jaws that root the foe to the spot." },
    ],
    story: "Sylvyrns hatch from knots in ancient trees and never fully stop being wood: their wings are sails of laced leaves that must be shed and regrown each autumn. In winter, a grounded Sylvyrn will guard its tree so fiercely that even the wind goes around.",
  },

  // ------------------------------- LAKE LUMEN ------------------------------
  {
    id: "puddlet", name: "Puddlet", species: "Droplet Axolotl", types: ["Aqua"],
    zone: "lake", rarity: "common", hp: 46, atk: 32, def: 36, spd: 50,
    evolvesTo: "cascolotl", evolveOrbs: 12,
    height: "0.25 m", weight: "1.4 kg",
    powers: [
      { n: "Splish Splash", d: "Flails adorably, somehow soaking everything within ten paces." },
      { n: "Puddle Port", d: "Melts into a puddle and reappears from any nearby patch of water." },
    ],
    story: "A Puddlet is what happens when a raindrop lands somewhere so nice it refuses to evaporate. On sunny days they line up on lily pads to slowly turn to mist, then race the clouds back down as rain before dinner.",
  },
  {
    id: "finling", name: "Finling", species: "Sailfin Minnow", types: ["Aqua", "Gale"],
    zone: "lake", rarity: "common", hp: 40, atk: 36, def: 32, spd: 68,
    height: "0.3 m", weight: "1.1 kg",
    powers: [
      { n: "Skim Dash", d: "Skips across the surface like a thrown stone, striking on each bounce." },
      { n: "Sail Catch", d: "Raises its great dorsal sail to steal the wind from flying foes." },
    ],
    story: "Finlings race the ferry across Lake Lumen every morning and have never once lost. Their oversized sail fins double as flags: each Finling dyes its own with crushed berries so its school can spot it mid-leap.",
  },
  {
    id: "croakle", name: "Croakle", species: "Chorus Frog", types: ["Aqua", "Song"],
    zone: "lake", rarity: "common", hp: 48, atk: 40, def: 38, spd: 44,
    height: "0.35 m", weight: "2.8 kg",
    powers: [
      { n: "Bass Drop", d: "Inflates its throat and releases one enormous, ground-shaking croak." },
      { n: "Ripple Round", d: "Sings in rounds with its own echo, confusing everyone but itself." },
    ],
    story: "Every evening at sunset, Croakles arrange themselves around the lake by pitch — deep voices on the west shore, sopranos on the east — and perform. The lake's rings aren't from fish jumping; they're applause.",
  },
  {
    id: "bubblorb", name: "Bubblorb", species: "Bubble Jelly", types: ["Aqua", "Lumen"],
    zone: "lake", rarity: "uncommon", hp: 50, atk: 44, def: 34, spd: 41,
    height: "0.5 m", weight: "0.2 kg",
    powers: [
      { n: "Orb Volley", d: "Launches a stream of bubbles that pop with tiny flashes of light." },
      { n: "Glassy Veil", d: "Wraps itself in one giant bubble that reflects attacks back." },
    ],
    story: "Bubblorbs are living bubbles blown by the lake itself on its birthday, which the lake celebrates whenever it feels like it. They drift above the water at dusk, glowing softly, and popping one (very rude) releases a smell of warm vanilla.",
  },
  {
    id: "shellby", name: "Shellby", species: "Pearlkeeper Turtle", types: ["Aqua", "Stone"],
    zone: "lake", rarity: "uncommon", hp: 65, atk: 42, def: 68, spd: 25,
    height: "0.6 m", weight: "28 kg",
    powers: [
      { n: "Pearl Beam", d: "Focuses lakelight through its pearl into a dazzling ray." },
      { n: "Shell Fort", d: "Tucks in and becomes, for all practical purposes, a very smug rock." },
    ],
    story: "Each Shellby spends its whole life polishing a single pearl it found as a hatchling, and its shell slowly grows to match the pearl's glow. Shellbys trade polishing tips in slow, decade-long conversations at the bottom of the lake.",
  },
  {
    id: "lochlyn", name: "Lochlyn", species: "Mist Serpent", types: ["Aqua", "Shade"],
    zone: "lake", rarity: "rare", hp: 78, atk: 62, def: 58, spd: 52,
    height: "3.2 m", weight: "140 kg",
    powers: [
      { n: "Fog Coil", d: "Exhales a rolling fog bank, then strikes from anywhere inside it." },
      { n: "Deep Song", d: "Hums a note so low it is felt, not heard, rattling the foe's resolve." },
    ],
    story: "Lochlyn surfaces only on misty mornings, and every photograph ever taken of it has somehow come out as a picture of a log. The lake ferries leave a saucer of tea on the dock each dawn; it is always empty by the second bell, and no one has ever seen it sip.",
  },

  // ------------------------------ EMBER RIDGE ------------------------------
  {
    id: "emberling", name: "Emberling", species: "Cinder Newt", types: ["Ember"],
    zone: "ridge", rarity: "common", hp: 44, atk: 48, def: 34, spd: 54,
    evolvesTo: "magmander", evolveOrbs: 12,
    height: "0.3 m", weight: "1.8 kg",
    powers: [
      { n: "Spark Spit", d: "Spits a hot little ember that pops like a firecracker." },
      { n: "Warm Hug", d: "Hugs a foe with gently smoldering arms. Confusingly pleasant." },
    ],
    story: "Emberlings hatch from coals that dream of becoming campfires. One will happily live in your stove, keeping it exactly the right temperature, in exchange for one marshmallow a week and being told it's doing a good job.",
  },
  {
    id: "rocklet", name: "Rocklet", species: "Pebble Sprite", types: ["Stone"],
    zone: "ridge", rarity: "common", hp: 52, atk: 44, def: 62, spd: 30,
    height: "0.25 m", weight: "9 kg",
    powers: [
      { n: "Tumble Tackle", d: "Somersaults downhill into the foe with gathering speed." },
      { n: "Stack Up", d: "Stacks itself into a wobbly tower to look bigger and braver." },
    ],
    story: "Rocklets are the reason mountain trails have those little stacked-stone cairns: they build them as statues of their heroes. If you knock one over, a Rocklet will rebuild it within the hour, sighing the entire time.",
  },
  {
    id: "fumaroo", name: "Fumaroo", species: "Steam Joey", types: ["Ember", "Gale"],
    zone: "ridge", rarity: "uncommon", hp: 55, atk: 50, def: 42, spd: 64,
    height: "0.9 m", weight: "22 kg",
    powers: [
      { n: "Geyser Kick", d: "Kicks off a burst of steam from its heels for a rocket-boosted strike." },
      { n: "Whistle Vent", d: "Vents pressure through its ears with a kettle-shriek that startles foes." },
    ],
    story: "A Fumaroo's pouch is a pocket of volcanic steam, and its joeys ride inside like tiny sauna guests. They bounce between fumaroles to refuel, and on cold mornings the whole ridge whistles like a hundred kettles as the troop wakes up.",
  },
  {
    id: "cindercub", name: "Cindercub", species: "Soot Bear", types: ["Ember", "Shade"],
    zone: "ridge", rarity: "uncommon", hp: 60, atk: 58, def: 50, spd: 40,
    height: "0.9 m", weight: "41 kg",
    powers: [
      { n: "Ash Cloak", d: "Shakes its fur to fill the air with blinding soft black ash." },
      { n: "Coal Claw", d: "Swipes with claws that glow orange at the tips like banked coals." },
    ],
    story: "Cindercubs sleep inside old campfire rings, absorbing the leftover warmth of stories told around them. A Cindercub that has heard enough good stories eventually glows from the inside; rangers say the best-read ones are visible from town.",
  },
  {
    id: "boulderox", name: "Boulderox", species: "Rubble Ox", types: ["Stone", "Ember"],
    zone: "ridge", rarity: "uncommon", hp: 74, atk: 62, def: 72, spd: 18,
    height: "1.5 m", weight: "480 kg",
    powers: [
      { n: "Landslide Charge", d: "Lowers its boulder brow and charges; the mountain politely gets out of the way." },
      { n: "Magma Snort", d: "Snorts twin jets of heat that shimmer the air." },
    ],
    story: "Boulderoxes are so patient that mountains use them to hold still. The ridge's oldest switchback trail was not built by people — it is simply the path one Boulderox has walked to the same watering hole for three hundred years.",
  },
  {
    id: "pyrewing", name: "Pyrewing", species: "Ash Phoenixlet", types: ["Ember", "Lumen"],
    zone: "ridge", rarity: "rare", hp: 68, atk: 70, def: 48, spd: 72,
    height: "1.2 m", weight: "6 kg",
    powers: [
      { n: "Cinder Dive", d: "Folds its wings and dives as a streak of orange light." },
      { n: "Rekindle", d: "Bursts into harmless flame and emerges refreshed and fully healed." },
    ],
    story: "A Pyrewing is not quite a phoenix — it reignites rather than being reborn, the way a campfire flares when you feed it. Each one carries a single ember from the volcano's first eruption, and it will absolutely show you if you ask nicely.",
  },

  // ----------------------------- SUNDUNE DESERT ----------------------------
  {
    id: "duneling", name: "Duneling", species: "Sand Fox", types: ["Sand", "Gale"],
    zone: "desert", rarity: "common", hp: 43, atk: 40, def: 34, spd: 69,
    height: "0.4 m", weight: "2.9 kg",
    powers: [
      { n: "Mirage Step", d: "Leaves three shimmering copies of itself while dashing sideways." },
      { n: "Ear Radar", d: "Its enormous ears pinpoint anything moving under the sand." },
    ],
    story: "A Duneling's ears are two-thirds of its body and can hear a beetle blink from across the dunes. They nap buried up to the ears in warm sand, which makes the desert look like it is growing very soft antennae.",
  },
  {
    id: "cactini", name: "Cactini", species: "Cactus Imp", types: ["Leaf", "Sand"],
    zone: "desert", rarity: "common", hp: 50, atk: 46, def: 52, spd: 33,
    height: "0.5 m", weight: "7 kg",
    powers: [
      { n: "Needle Fling", d: "Flings a fan of spines, then grows them back with a shiver." },
      { n: "Water Hoard", d: "Slurps moisture from the air to plump up and restore health." },
    ],
    story: "Cactinis wear their single flower like a crown and take enormous offense if you don't compliment it. They can go a year without water but not a day without attention, and they high-five with extreme care.",
  },
  {
    id: "scorchid", name: "Scorchid", species: "Bloom Scorpion", types: ["Sand", "Leaf"],
    zone: "desert", rarity: "uncommon", hp: 54, atk: 60, def: 48, spd: 45,
    height: "0.6 m", weight: "11 kg",
    powers: [
      { n: "Petal Sting", d: "Its flower-tipped tail strikes with pollen that numbs on contact." },
      { n: "Dune Ambush", d: "Waits beneath the sand with only its blossom showing, like bait." },
    ],
    story: "The desert is too dry for orchids, so an orchid made a deal with a scorpion; nobody knows the details, but now there is the Scorchid. Its tail-flower blooms exactly once a year, at midnight, and the whole desert smells like rain for an hour.",
  },
  {
    id: "mirageist", name: "Mirageist", species: "Heat-Haze Phantom", types: ["Shade", "Sand"],
    zone: "desert", rarity: "rare", hp: 64, atk: 64, def: 44, spd: 66,
    height: "1.4 m", weight: "0 kg (unmeasurable)",
    powers: [
      { n: "Shimmer Snare", d: "Bends the air into a maze of heat-haze walls only it can cross." },
      { n: "Oasis Dream", d: "Projects a vision of cool water so convincing foes forget to fight." },
    ],
    story: "A Mirageist is a mirage that was believed in so hard it became real. It feels responsible for every traveler who ever chased it, so it secretly nudges lost wanderers toward true oases — always from a distance, always wavering.",
  },

  // --------------------- WILLOWMERE MEADOW (expansion) ---------------------
  {
    id: "clovern", name: "Clovern", species: "Clover Pup", types: ["Leaf"],
    zone: "meadow", rarity: "common", hp: 41, atk: 37, def: 33, spd: 60,
    height: "0.35 m", weight: "2.4 kg",
    powers: [
      { n: "Lucky Nip", d: "Play-bites with a grin; a little good luck rubs off on whoever it nips." },
      { n: "Four-Leaf Flip", d: "Backflips so fast its clover briefly sprouts a dazzling fourth leaf." },
    ],
    story: "A Clovern sprouts wherever someone finds a four-leaf clover and forgets to make a wish. The wish has to go somewhere, so it grows ears and a tail and spends its life looking for the person it belongs to.",
  },
  {
    id: "puffodil", name: "Puffodil", species: "Trumpet Bloom", types: ["Leaf", "Song"],
    zone: "meadow", rarity: "uncommon", hp: 48, atk: 46, def: 40, spd: 50,
    height: "0.5 m", weight: "3.6 kg",
    powers: [
      { n: "Reveille Toot", d: "Blasts a bright dawn fanfare from its trumpet face; sleepers levitate slightly." },
      { n: "Pollen Fanfare", d: "Plays a rising scale that showers glittering, sneezy pollen on the beat." },
    ],
    story: "Every Puffodil believes it personally raises the sun by playing reveille, and no one has the heart to tell it otherwise. The meadow critters grumble about the 6 a.m. concerts but secretly set their naps by them.",
  },
  {
    id: "gustling", name: "Gustling", species: "Breeze Sprite", types: ["Gale"],
    zone: "meadow", rarity: "rare", hp: 58, atk: 55, def: 42, spd: 78,
    height: "0.7 m", weight: "0.1 kg",
    powers: [
      { n: "Kite Dance", d: "Whirls its leaf-kite in loops that drag foes into a dizzy spiral." },
      { n: "Zephyr Slip", d: "Becomes a ribbon of wind for a moment; attacks pass straight through." },
    ],
    story: "A Gustling is a breeze that grew fond of one particular hill and refused to blow onward. It returns every kite, hat, and homework page the wind steals — the meadow's children insist it keep one hat in ten as payment.",
  },

  // ---------------------- WHISPERING WOODS (expansion) ---------------------
  {
    id: "twigby", name: "Twigby", species: "Stick Sprite", types: ["Leaf"],
    zone: "forest", rarity: "common", hp: 40, atk: 35, def: 38, spd: 55,
    height: "0.4 m", weight: "0.7 kg",
    powers: [
      { n: "Snap Pose", d: "Freezes mid-motion to look exactly like a twig. Devastatingly effective." },
      { n: "Bud Flick", d: "Flicks a hard little leaf-bud with startling accuracy." },
    ],
    story: "Twigbys are the undefeated hide-and-seek champions of the Whispering Woods, mostly because nobody is sure the game ever ended. A polite Twigby will lose on purpose once a year so its friends don't give up entirely.",
  },
  {
    id: "vesperwing", name: "Vesperwing", species: "Dusk Bat", types: ["Shade", "Gale"],
    zone: "forest", rarity: "uncommon", hp: 50, atk: 52, def: 40, spd: 65,
    height: "0.45 m", weight: "1.1 kg",
    powers: [
      { n: "Evening Echo", d: "Sends out a soft sonar chirp that returns carrying the foe's next move." },
      { n: "Leafwing Loop", d: "Loops the loop on folded-leaf wings, scattering cool twilight air." },
    ],
    story: "A Vesperwing's wings are two great leaves it borrowed from the oldest tree and never quite returned. Each evening it flies tree to tree delivering the forest's good-nights, and it will not rest until every burrow has one.",
  },
  {
    id: "bramblelynx", name: "Bramblelynx", species: "Thorn Lynx", types: ["Leaf", "Shade"],
    zone: "forest", rarity: "rare", hp: 66, atk: 68, def: 52, spd: 63,
    height: "1.0 m", weight: "26 kg",
    powers: [
      { n: "Briar Pounce", d: "Leaps from inside a bramble patch, trailing vines that tangle the foe." },
      { n: "Berry Bribe", d: "Sets down a small pile of blackberries; foes who stop to snack lose their nerve." },
    ],
    story: "Bramblelynx guards the berry thickets with a scowl it practices in puddles. Yet every night the thicket's thorns quietly rearrange so lost fawns can find their way out, and Bramblelynx insists it has no idea who keeps doing that.",
  },

  // -------------------------- LAKE LUMEN (expansion) -----------------------
  {
    id: "minnowisp", name: "Minnowisp", species: "Wisp School", types: ["Aqua", "Lumen"],
    zone: "lake", rarity: "common", hp: 38, atk: 34, def: 30, spd: 72,
    height: "0.6 m (formation)", weight: "0.9 kg (total)",
    powers: [
      { n: "School Shape", d: "The whole school snaps into the silhouette of one enormous fish." },
      { n: "Glimmer Scatter", d: "Bursts apart into a confetti of glowing minnows, impossible to track." },
    ],
    story: "A Minnowisp is dozens of tiny glowing minnows that voted to be one creature. Every decision is decided by vote; ties are settled by swimming in a spiral until somebody changes their mind, which is why the lake sometimes glows in circles.",
  },
  {
    id: "paddlepus", name: "Paddlepus", species: "Oar-Tail Platypus", types: ["Aqua"],
    zone: "lake", rarity: "uncommon", hp: 56, atk: 48, def: 46, spd: 44,
    height: "0.55 m", weight: "7.5 kg",
    powers: [
      { n: "Oar Smack", d: "Delivers a flat, resounding whack with its paddle tail. The sound alone stings." },
      { n: "Duckdive", d: "Vanishes under the surface and resurfaces exactly where the foe least expects." },
    ],
    story: "Paddlepus runs the lake's unofficial ferry, rowing itself with its own tail while beetles ride its back for one shiny pebble apiece. It keeps the pebbles in its cheek pouches and is, by pebble standards, extremely wealthy.",
  },
  {
    id: "mistrelle", name: "Mistrelle", species: "Mist Heron", types: ["Aqua", "Gale"],
    zone: "lake", rarity: "rare", hp: 62, atk: 58, def: 50, spd: 70,
    height: "1.3 m", weight: "4.2 kg",
    powers: [
      { n: "Veilstep", d: "Strides through its own mist and emerges somewhere else entirely." },
      { n: "Still-Water Stare", d: "Fixes the foe with a gaze so calm they forget what they were doing." },
    ],
    story: "A Mistrelle stands so perfectly still that the morning mist gathers around it out of politeness. When it finally lifts a foot, the whole lake seems to exhale — fishermen swear the day doesn't truly start until Mistrelle moves.",
  },

  // -------------------------- EMBER RIDGE (expansion) ----------------------
  {
    id: "flintick", name: "Flintick", species: "Flint Chick", types: ["Spark", "Stone"],
    zone: "ridge", rarity: "common", hp: 42, atk: 44, def: 44, spd: 52,
    height: "0.25 m", weight: "1.9 kg",
    powers: [
      { n: "Spark Peck", d: "Pecks with a flint beak; every strike throws a fat orange spark." },
      { n: "Gravel Fluff", d: "Fluffs its pebble-feathers into a rattling, intimidating puffball." },
    ],
    story: "Flinticks hatch inside striking-stones and spend their first week pecking their way out, which is why they're born knowing how to make fire. Hikers consider one peck from a Flintick the luckiest way to light a camp stove.",
  },
  {
    id: "magmoll", name: "Magmoll", species: "Magma Mole", types: ["Ember", "Stone"],
    zone: "ridge", rarity: "uncommon", hp: 58, atk: 54, def: 58, spd: 30,
    height: "0.5 m", weight: "18 kg",
    powers: [
      { n: "Molten Burrow", d: "Dives into solid rock as if it were bathwater, leaving a glowing seam." },
      { n: "Warm Welcome", d: "Heats the ground underfoot so pleasantly that foes get sleepy." },
    ],
    story: "Every hot spring on Ember Ridge was dug by a Magmoll, and every Magmoll charges the same fee: one snack per soak. On cold nights you can trace their tunnels by the faint orange lines glowing through the mountainside.",
  },
  {
    id: "obsidrake", name: "Obsidrake", species: "Obsidian Drakeling", types: ["Stone", "Shade"],
    zone: "ridge", rarity: "rare", hp: 64, atk: 66, def: 60, spd: 55,
    height: "1.1 m", weight: "38 kg",
    powers: [
      { n: "Glass Fang", d: "Bites with teeth of volcanic glass, sharper than anything has a right to be." },
      { n: "Mirror Scale", d: "Angles its polished scales to reflect an attack — and the attacker's face." },
    ],
    story: "Obsidrakes hatch from eggs of volcanic glass so shiny they can see themselves in their own shells. Each one is permanently startled by its own reflection, which is why a startled Obsidrake is considered redundant on the ridge.",
  },

  // ------------------------- SUNDUNE DESERT (expansion) --------------------
  {
    id: "tumblim", name: "Tumblim", species: "Tumbleweed Imp", types: ["Sand", "Gale"],
    zone: "desert", rarity: "common", hp: 40, atk: 38, def: 36, spd: 68,
    height: "0.45 m", weight: "1.3 kg",
    powers: [
      { n: "Roll Out", d: "Tucks in and rolls wherever the wind points, bowling through anything." },
      { n: "Prickly Hug", d: "Offers a heartfelt, extremely scratchy embrace." },
    ],
    story: "A Tumblim goes wherever the wind suggests and has therefore seen more of the desert than any map. It is famously terrible at goodbyes — by the time it thinks of the right words, it's already three dunes away.",
  },
  {
    id: "scarabright", name: "Scarabright", species: "Gem Scarab", types: ["Sand", "Lumen"],
    zone: "desert", rarity: "uncommon", hp: 52, atk: 48, def: 60, spd: 40,
    height: "0.3 m", weight: "4.8 kg",
    powers: [
      { n: "Sunspot Shield", d: "Raises its gemstone shell to catch sunlight and flash it back, blindingly." },
      { n: "Polish Flash", d: "Buffs its shell to a mirror shine in one motion; the gleam alone staggers foes." },
    ],
    story: "Scarabrights spend their days rolling little balls of compressed sunlight and burying them for winter. They forget where most of them are, and every patch of desert gold poppies marks a Scarabright's lost pantry.",
  },
  {
    id: "glassifly", name: "Glassifly", species: "Glasswing Darter", types: ["Sand", "Spark"],
    zone: "desert", rarity: "uncommon", hp: 46, atk: 56, def: 38, spd: 76,
    height: "0.4 m", weight: "0.3 kg",
    powers: [
      { n: "Fulgurite Dash", d: "Darts in a jagged line, leaving a trail of glassy, crackling air." },
      { n: "Prism Wing", d: "Splits sunlight through its wings into stripes of dazzling color." },
    ],
    story: "A Glassifly is born wherever lightning strikes the dunes, its wings made of the glass left behind. It hums with static before storms, so desert folk keep one lazy eye on the Glassiflies instead of the sky.",
  },
  {
    id: "sphinxel", name: "Sphinxel", species: "Riddle Kitten", types: ["Sand", "Shade"],
    zone: "desert", rarity: "rare", hp: 60, atk: 58, def: 54, spd: 62,
    height: "0.5 m", weight: "3.9 kg",
    powers: [
      { n: "Little Riddle", d: "Poses a riddle mid-battle; foes lose a turn genuinely thinking about it." },
      { n: "Paw of Ages", d: "Bops the foe with one soft paw carrying the weight of forgotten centuries." },
    ],
    story: "Sphinxel guards an ancient shortcut and demands travelers answer a riddle — but it is a kitten, so the riddles are things like 'what has whiskers and deserves snacks?' Answer correctly and it purrs so hard the sand vibrates.",
  },

  // ---------------------------- FROSTPEAK TUNDRA ---------------------------
  {
    id: "snowlet", name: "Snowlet", species: "Snow Pup", types: ["Frost"],
    zone: "tundra", rarity: "common", hp: 44, atk: 38, def: 38, spd: 56,
    evolvesTo: "frostfang", evolveOrbs: 12,
    height: "0.4 m", weight: "4.2 kg",
    powers: [
      { n: "Powder Pounce", d: "Leaps into deep snow and erupts out somewhere unexpected, grinning." },
      { n: "Frost Huff", d: "Huffs a puff of cold that frosts a foe's whiskers stiff." },
    ],
    story: "Snowlets are born during the first snowfall and believe, sincerely, that they invented winter. Each one insists on personally checking that every drift is fluffy enough, which is why the tundra's snow is famously well-inspected.",
  },
  {
    id: "cryssal", name: "Cryssal", species: "Icicle Sprite", types: ["Frost", "Lumen"],
    zone: "tundra", rarity: "common", hp: 40, atk: 44, def: 32, spd: 62,
    height: "0.45 m", weight: "1.6 kg",
    powers: [
      { n: "Prism Shard", d: "Flicks an icicle that splits daylight into a spray of cold rainbows." },
      { n: "Chime Freeze", d: "Rings like struck glass; the note hangs in the air and stiffens it." },
    ],
    story: "A Cryssal grows from the longest icicle on the longest night, and it spends its life terrified of spring. Tundra folk build little shaded huts each March so their neighborhood Cryssal has somewhere to wait out the thaw.",
  },
  {
    id: "woolhorn", name: "Woolhorn", species: "Tundra Ram", types: ["Frost", "Stone"],
    zone: "tundra", rarity: "uncommon", hp: 64, atk: 58, def: 62, spd: 36,
    height: "1.2 m", weight: "96 kg",
    powers: [
      { n: "Avalanche Butt", d: "Lowers its spiral horns and charges hard enough to start a small avalanche." },
      { n: "Fleece Bank", d: "Fluffs its fleece into a windbreak that shelters everyone standing behind it." },
    ],
    story: "A Woolhorn's fleece keeps growing all winter until it looks like a walking snowdrift with opinions. Shepherds on Frostpeak don't herd them — they simply follow one uphill, because a Woolhorn always knows where the storm isn't.",
  },
  {
    id: "glacierne", name: "Glacierne", species: "Glacier Bear", types: ["Frost", "Aqua"],
    zone: "tundra", rarity: "rare", hp: 76, atk: 66, def: 68, spd: 44,
    height: "2.2 m", weight: "410 kg",
    powers: [
      { n: "Ice Age Swipe", d: "Swipes with a paw of blue glacier ice that carves the ground it misses." },
      { n: "Deep Freeze Nap", d: "Curls up and freezes solid, waking fully restored an hour (or a century) later." },
    ],
    story: "A Glacierne's fur is layered blue ice holding a thousand years of trapped snowfall, and scientists would love a sample. It permits exactly one measurement per visitor and then, very politely, sits on their equipment.",
  },

  // ----------------------------- GLOWFEN MARSH -----------------------------
  {
    id: "bogbit", name: "Bogbit", species: "Bog Tadpole", types: ["Aqua", "Shade"],
    zone: "marsh", rarity: "common", hp: 39, atk: 33, def: 34, spd: 58,
    height: "0.2 m", weight: "0.8 kg",
    powers: [
      { n: "Mud Skip", d: "Skips across the mud on its tail, flinging little peat pellets." },
      { n: "Murk Cloud", d: "Stirs up silt until nobody, including Bogbit, can see anything." },
    ],
    story: "Bogbits are convinced they will grow into something enormous and terrifying, and they practice their menacing faces in still water daily. They grow into slightly larger Bogbits, and the practice continues undiscouraged.",
  },
  {
    id: "wispwick", name: "Wispwick", species: "Marsh Wisp", types: ["Lumen", "Shade"],
    zone: "marsh", rarity: "common", hp: 36, atk: 42, def: 28, spd: 68,
    height: "0.35 m", weight: "0.1 kg",
    powers: [
      { n: "Lure Light", d: "Bobs invitingly ahead, drawing foes one careless step at a time." },
      { n: "Snuff Out", d: "Extinguishes itself completely, then relights somewhere far more annoying." },
    ],
    story: "Wispwicks are the marsh lights travelers are warned never to follow, and they find this reputation deeply unfair. They have led exactly zero people into bogs on purpose; they are simply very bad at estimating how fast a person walks.",
  },
  {
    id: "mirelurch", name: "Mirelurch", species: "Mire Newt", types: ["Aqua", "Leaf"],
    zone: "marsh", rarity: "uncommon", hp: 54, atk: 50, def: 48, spd: 42,
    height: "0.6 m", weight: "9.4 kg",
    powers: [
      { n: "Peat Grasp", d: "Reaches up from the muck and holds a foe's ankle with alarming friendliness." },
      { n: "Moss Coat", d: "Pulls a blanket of living moss over itself, healing as it grows." },
    ],
    story: "Mirelurch has lain in the same patch of mire so long that a small ecosystem lives on its back — three ferns, a colony of beetles, and one very smug snail. It considers them tenants and is, by all accounts, a fair landlord.",
  },
  {
    id: "fenfrond", name: "Fenfrond", species: "Fern Stalker", types: ["Leaf", "Shade"],
    zone: "marsh", rarity: "uncommon", hp: 52, atk: 56, def: 44, spd: 54,
    height: "1.3 m", weight: "16 kg",
    powers: [
      { n: "Frond Veil", d: "Unfurls enormous fronds that hide it completely two steps from your face." },
      { n: "Creeping Shade", d: "Its shadow stretches out on its own and gets there first." },
    ],
    story: "Fenfronds are the reason the fen paths have handrails. They never actually touch anyone — they simply enjoy standing very still and slightly too close, then rustling once. Marsh guides call this 'the Fenfrond hello.'",
  },
  {
    id: "lanternjaw", name: "Lanternjaw", species: "Angler Frog", types: ["Lumen", "Aqua"],
    zone: "marsh", rarity: "rare", hp: 66, atk: 64, def: 52, spd: 48,
    height: "0.9 m", weight: "22 kg",
    powers: [
      { n: "Bait Bulb", d: "Dangles its glowing lure until the foe simply must come see what it is." },
      { n: "Gulp Tide", d: "Inhales a wave of marsh water, then releases it all at once." },
    ],
    story: "A Lanternjaw's lure is the only reliable streetlight in Glowfen Marsh, and the fen's smaller critters have quietly built their whole commute around it. Lanternjaw has never once eaten a commuter — it says the schedule is worth more than the snack.",
  },

  // --------------------------- GLEAMCAVE HOLLOWS ---------------------------
  {
    id: "sparkmole", name: "Sparkmole", species: "Tunnel Sparker", types: ["Spark", "Stone"],
    zone: "cavern", rarity: "common", hp: 43, atk: 46, def: 42, spd: 50,
    evolvesTo: "voltcavor", evolveOrbs: 12,
    height: "0.35 m", weight: "5.5 kg",
    powers: [
      { n: "Static Dig", d: "Rubs through the rock so fast its fur crackles with blue sparks." },
      { n: "Pebble Zap", d: "Flicks a small charged stone that gives a tingling little jolt." },
    ],
    story: "Sparkmoles dig the Gleamcave tunnels and light them as they go, their fur snapping with static from all the burrowing. The cave's crystals grow brightest where a Sparkmole passes most often, so the busiest tunnels are the prettiest.",
  },
  {
    id: "glowbat", name: "Glowbat", species: "Gleam Bat", types: ["Shade", "Lumen"],
    zone: "cavern", rarity: "common", hp: 39, atk: 44, def: 30, spd: 66,
    height: "0.3 m", weight: "0.5 kg",
    powers: [
      { n: "Echo Ping", d: "Sends out a squeak that maps the whole cavern in a blink of sound." },
      { n: "Belly Beam", d: "The glowing patch on its tummy flares into a narrow guiding beam." },
    ],
    story: "Glowbats hang in tidy rows along the cave ceiling like little lanterns, brightening when they dream and dimming when they wake. Spelunkers say a cavern full of dreaming Glowbats is the safest place to nap in the whole underground.",
  },
  {
    id: "crystile", name: "Crystile", species: "Crystal Pangolin", types: ["Stone"],
    zone: "cavern", rarity: "uncommon", hp: 58, atk: 50, def: 66, spd: 34,
    height: "0.7 m", weight: "31 kg",
    powers: [
      { n: "Geode Curl", d: "Rolls into a glittering crystal ball that shrugs off almost anything." },
      { n: "Facet Flash", d: "Angles its mirror scales to scatter a dazzling burst of cave-light." },
    ],
    story: "A Crystile's scales are real quartz that regrow when they chip, so it leaves a faint trail of gem dust wherever it waddles. Cave folk gently sweep the dust into jars — a single Crystile's yearly sheddings can pay for a whole winter's lamp oil.",
  },
  {
    id: "gloomoth", name: "Gloomoth", species: "Cavern Moth", types: ["Shade", "Gale"],
    zone: "cavern", rarity: "uncommon", hp: 52, atk: 54, def: 44, spd: 58,
    height: "0.5 m", weight: "0.7 kg",
    powers: [
      { n: "Dust of Dusk", d: "Sheds velvety dark scales that swallow light and muffle sound." },
      { n: "Draft Riser", d: "Rides a cold cave draft straight upward, out of reach in an instant." },
    ],
    story: "Gloomoths never learned there was a sun, and they would find the idea alarming if you mentioned it. They navigate by the warmth of crystals and consider the deepest, darkest hollow to be the coziest room in the world.",
  },
  {
    id: "geodrake", name: "Geodrake", species: "Geode Drake", types: ["Stone", "Lumen"],
    zone: "cavern", rarity: "rare", hp: 70, atk: 66, def: 68, spd: 48,
    height: "1.7 m", weight: "150 kg",
    powers: [
      { n: "Crystal Roar", d: "Roars a note that makes every crystal in the cave ring and blaze." },
      { n: "Gemquake", d: "Stamps once; geodes crack open across the floor in a glittering wave." },
    ],
    story: "A Geodrake sleeps for a hundred years curled around a single growing geode, and when it finally hatches free, the hollow gem it leaves behind becomes a Gleamcave landmark. The oldest chambers are ringed with these empty geode-thrones, each the size of a house.",
  },

  // ------------------------------- EVOLUTIONS ------------------------------
  {
    id: "floralope", name: "Floralope", species: "Meadow Antelope", types: ["Leaf", "Song"],
    zone: "meadow", rarity: "uncommon", evolved: true, evolvesFrom: "bloomble",
    hp: 66, atk: 58, def: 52, spd: 74,
    height: "1.3 m", weight: "42 kg",
    powers: [
      { n: "Bloom Bound", d: "Leaps in a long arc, and flowers spring up from every hoofprint it leaves." },
      { n: "Meadow Anthem", d: "Sings a rolling melody that makes the whole field sway in time." },
    ],
    story: "When a Bloomble has been loved and cared for long enough, it stretches tall overnight into a Floralope, its ear-flowers unfurling into a full crown. A Floralope leads the spring migration across Willowmere, and the meadow blooms in the exact path it runs.",
  },
  {
    id: "magmander", name: "Magmander", species: "Magma Salamander", types: ["Ember"],
    zone: "ridge", rarity: "uncommon", evolved: true, evolvesFrom: "emberling",
    hp: 70, atk: 68, def: 50, spd: 60,
    height: "1.1 m", weight: "48 kg",
    powers: [
      { n: "Lava Lash", d: "Whips its molten tail, leaving a glowing line that smoulders for hours." },
      { n: "Crust Armor", d: "Cools its skin into hard black rock, then cracks it off to strike." },
    ],
    story: "A well-fed Emberling grows until its inner fire needs more room, and it hardens into a Magmander with a tail that never stops glowing. It tends the ridge's deepest vents like a gardener tends coals, and the volcano is calmer for its patient work.",
  },
  {
    id: "cascolotl", name: "Cascolotl", species: "Cascade Axolotl", types: ["Aqua"],
    zone: "lake", rarity: "uncommon", evolved: true, evolvesFrom: "puddlet",
    hp: 68, atk: 54, def: 56, spd: 58,
    height: "0.8 m", weight: "14 kg",
    powers: [
      { n: "Waterfall Frill", d: "Its gill-frills gush like little waterfalls, sweeping foes off their feet." },
      { n: "Current Curl", d: "Spins up a whirlpool and rides it, faster than anything else in the lake." },
    ],
    story: "A Puddlet that soaks up enough of Lake Lumen becomes a Cascolotl, its frills forever spilling fresh water like tiny cascades. Wherever one settles, a new spring bubbles up — half the streams feeding the lake began as a napping Cascolotl.",
  },
  {
    id: "frostfang", name: "Frostfang", species: "Snow Wolf", types: ["Frost"],
    zone: "tundra", rarity: "uncommon", evolved: true, evolvesFrom: "snowlet",
    hp: 72, atk: 68, def: 56, spd: 66,
    height: "1.4 m", weight: "58 kg",
    powers: [
      { n: "Blizzard Howl", d: "Howls up a swirling squall of snow that hides the whole pack." },
      { n: "Frost Fang", d: "Bites with teeth of blue ice that leave a lingering, shivery chill." },
    ],
    story: "A Snowlet that survives its first full winter grows into a Frostfang and takes its place leading the tundra pack. They sing to the aurora on the longest nights, and the herders say a Frostfang's howl is the sound of winter deciding to be gentle.",
  },
  {
    id: "voltcavor", name: "Voltcavor", species: "Dynamo Mole", types: ["Spark", "Stone"],
    zone: "cavern", rarity: "uncommon", evolved: true, evolvesFrom: "sparkmole",
    hp: 66, atk: 66, def: 58, spd: 56,
    height: "0.8 m", weight: "24 kg",
    powers: [
      { n: "Dynamo Dash", d: "Spins its whole body into a living dynamo, trailing arcs of blue lightning." },
      { n: "Ore Overload", d: "Charges a nearby vein of metal until it hums and sparks with power." },
    ],
    story: "A Sparkmole that digs long enough becomes a Voltcavor, a living generator that hums so brightly the Gleamcave never needs lamps where it lives. The cave folk run a copper wire to a friendly Voltcavor's burrow and, in exchange for snacks, light the whole outpost.",
  },

  // ------------------------------- LEGENDARY -------------------------------
  {
    id: "rimewyrd", name: "Rimewyrd", species: "Everwinter Stag", types: ["Frost", "Gale"],
    zone: "any", rarity: "legendary", guard: 2, hp: 94, atk: 84, def: 80, spd: 76,
    height: "3.4 m", weight: "300 kg",
    powers: [
      { n: "First Frost", d: "Steps forward and the season changes; frost flowers bloom across the ground." },
      { n: "Antler Aurora", d: "Its crystal antlers catch the light and throw curtains of pale cold fire." },
    ],
    story: "Rimewyrd walks the treeline every autumn, and the first frost of the year is simply its footprints spreading. It has never been seen to eat, sleep, or hurry, and the tundra's oldest rule is that you may follow its tracks but never walk beside it.",
  },
  {
    id: "sunwyrm", name: "Sunwyrm", species: "Daybreak Dragon", types: ["Lumen", "Ember"],
    zone: "any", rarity: "legendary", guard: 2, hp: 96, atk: 88, def: 74, spd: 80,
    height: "5.8 m", weight: "900 kg",
    powers: [
      { n: "Dawn Coil", d: "Loops across the sky, dragging sunrise colors behind it like a ribbon." },
      { n: "Solar Roar", d: "Roars with the stored warmth of a hundred noons." },
    ],
    story: "Legends say the first sunrise got tangled on a mountain peak, and the knot wriggled free as the Sunwyrm. It circles the world just below the clouds, patting the tops of thunderheads to calm them, and morning people insist they can hear it hum.",
  },
  {
    id: "lunavis", name: "Lunavis", species: "Moonlit Owl Spirit", types: ["Lumen", "Shade"],
    zone: "any", rarity: "legendary", guard: 2, hp: 90, atk: 80, def: 78, spd: 84,
    height: "2.4 m", weight: "12 kg",
    powers: [
      { n: "Crescent Veil", d: "Spreads wings that hold a slice of night sky, stars included." },
      { n: "Silver Hush", d: "One slow blink of its moon-bright eyes puts the whole field to sleep." },
    ],
    story: "Lunavis is said to be the moon's reflection that climbed out of Lake Lumen one perfectly still night. It files away every wish made on the lake's surface in the library under its wings, and it grants exactly one per century — always the smallest one.",
  },
  {
    id: "terravox", name: "Terravox", species: "The Mountain's Voice", types: ["Stone", "Song"],
    zone: "any", rarity: "legendary", guard: 2, hp: 102, atk: 84, def: 92, spd: 40,
    height: "4.6 m", weight: "12,000 kg",
    powers: [
      { n: "Canyon Chorus", d: "Lows a note so deep that cliffs on both sides sing it back in harmony." },
      { n: "Tectonic Lullaby", d: "Hums the song mountains sleep to; everything nearby settles an inch." },
    ],
    story: "Terravox walks once a century, and the path it takes becomes a canyon. It knows exactly one song, and the mountains have spent ten thousand years learning the harmony — geologists call the rehearsals 'earthquakes.'",
  },
  {
    id: "aurorix", name: "Aurorix", species: "Aurora Fox", types: ["Lumen", "Gale"],
    zone: "any", rarity: "legendary", guard: 1, hp: 88, atk: 82, def: 70, spd: 92,
    height: "1.4 m (tail: the sky)", weight: "9 kg",
    powers: [
      { n: "Ribbon Sky", d: "Whips its tail overhead, painting the night in sheets of green and violet." },
      { n: "Polar Whisper", d: "Breathes a hush of polar air that freezes footsteps mid-step." },
    ],
    story: "An Aurorix's tail is a ribbon of true aurora, and it cannot fully put it away — on clear nights you can watch it practicing. Every aurora ever sighted far from the poles was Aurorix taking a wrong turn and being too proud to ask directions.",
  },
  {
    id: "tempestrel", name: "Tempestrel", species: "Storm Petrel", types: ["Gale", "Spark"],
    zone: "any", rarity: "legendary", guard: 1, hp: 92, atk: 90, def: 68, spd: 88,
    height: "2.1 m", weight: "14 kg",
    powers: [
      { n: "Squall Spiral", d: "Corkscrews upward, wringing a sudden squall out of a clear sky." },
      { n: "First Thunder", d: "Claps its wings once; the season's first thunder arrives early." },
    ],
    story: "Tempestrel carries the year's first thunderstorm folded under its wings and delivers it personally, farm by farm. Farmers leave sunflower seeds on fence posts as thanks, and the size of the pile is said to influence the rainfall schedule.",
  },
  {
    id: "umbryss", name: "Umbryss", species: "Stillwater Shadow", types: ["Shade", "Aqua"],
    zone: "any", rarity: "legendary", guard: 2, hp: 98, atk: 86, def: 84, spd: 60,
    height: "7.5 m", weight: "unknown (refuses scales)",
    powers: [
      { n: "Undertow Veil", d: "Drapes the field in deep-water darkness that tugs gently downward." },
      { n: "Lightless Coil", d: "Wraps the foe in a loop of pure depth; escape requires floating calmly." },
    ],
    story: "The shadow at the bottom of every still pond is the same shadow: it is Umbryss, listening. It keeps every secret ever told to water, sorted by weight, and it has never once told — though on windless nights the ponds look distinctly like they know something.",
  },

  // ---------------------------- ULTRA LEGENDARY ----------------------------
  //  Only one or two roam the world at once, each waiting at a fixed hidden
  //  spot until a trainer finds it. Catch one and a new one appears elsewhere.
  {
    id: "sergio", name: "Sergio", species: "Maine Coon Sovereign", types: ["Song", "Lumen"],
    zone: "any", rarity: "ultra", guard: 3, hp: 128, atk: 90, def: 92, spd: 66,
    height: "1.2 m (mostly floof)", weight: "11 kg",
    powers: [
      { n: "Regal Purr", d: "Purrs at a frequency so soothing that whole meadows lie down for a nap." },
      { n: "Mane Flourish", d: "Flicks its enormous ruff, and a shower of soft golden light drifts down." },
      { n: "Sovereign Pounce", d: "Leaps with startling grace for something so fluffy, landing with a gentle boop." },
    ],
    story: "Sergio is the gentle king of every rooftop and windowsill he has ever surveyed. A Maine Coon the size of a small dog and twice as fluffy, he wanders the world in search of the sunniest spot, and wherever he settles the local critters bring him little gifts. Trainers whisper that finding Sergio is the luckiest day of a Quest — he chooses you as much as you find him.",
  },
  {
    id: "solvarr", name: "Solvarr", species: "Sunmane Lion", types: ["Lumen", "Ember"],
    zone: "any", rarity: "ultra", guard: 3, hp: 132, atk: 100, def: 84, spd: 78,
    height: "2.4 m", weight: "320 kg",
    powers: [
      { n: "Dawnroar", d: "Roars, and for a heartbeat the whole sky turns the gold of first light." },
      { n: "Solar Mane", d: "Its blazing mane flares into a crown of small suns." },
    ],
    story: "Solvarr is said to be the last ember of the very first sunrise, given paws and a magnificent temper. It naps through the day and prowls at dusk, chasing the sun to the horizon so the world will not be left in the dark. Where it walks, flowers open early, convinced morning has come again.",
  },
  {
    id: "glacior", name: "Glacior", species: "Frostwake Leviathan", types: ["Frost", "Aqua"],
    zone: "any", rarity: "ultra", guard: 3, hp: 140, atk: 88, def: 96, spd: 58,
    height: "9.0 m", weight: "6,400 kg",
    powers: [
      { n: "Hoarfrost Tide", d: "Breathes a wave of cold that leaves the ground laced with frost-ferns." },
      { n: "Iceberg Breach", d: "Surges up through solid ice like it were bathwater, then settles without a splash." },
    ],
    story: "Glacior drifts through the deep cold places of the world, so vast and slow that sailors have built lighthouses on its back mistaking it for an island. It is unfailingly gentle; the only creature it has ever startled is itself, once, in a very still mirror-lake. The northern lights are said to be Glacior dreaming.",
  },

  // ---------------------- ASTRAL RIFT (portal region) ----------------------
  {
    id: "voidkit", name: "Voidkit", species: "Void Kit", types: ["Shade", "Gem"],
    zone: "rift", rarity: "rare", hp: 60, atk: 62, def: 48, spd: 74,
    height: "0.4 m", weight: "0.2 kg",
    powers: [
      { n: "Blink Step", d: "Winks out of existence and back a few paces away, trailing stardust." },
      { n: "Gravity Curl", d: "Curls into a tiny singularity that tugs loose objects — and foes — off balance." },
    ],
    story: "A Voidkit is a scrap of the night sky that tumbled through the rift and grew paws. It collects little bright things — dewdrops, coins, misplaced wishes — and hides them in pockets of empty space only it can reach. On quiet nights you can hear one purring, and the stars seem to purr back.",
  },
  {
    id: "astrilla", name: "Astrilla", species: "Astral Ray", types: ["Aqua", "Lumen"],
    zone: "rift", rarity: "rare", hp: 66, atk: 58, def: 56, spd: 68,
    height: "1.8 m (wingspan)", weight: "6 kg",
    powers: [
      { n: "Cosmic Glide", d: "Soars on ribbons of starlight as though the void were a warm sea." },
      { n: "Meteor Veil", d: "Sheds a shimmer of falling-star scales that dazzle anything watching." },
    ],
    story: "Astrilla swims through the Astral Rift the way a manta glides through a reef, banking around drifting islands of crystal. Sailors of old swore that catching a glimpse of one meant calm seas ahead; nobody told the sailors the Astrilla lives nowhere near the sea.",
  },
  {
    id: "nebulyn", name: "Nebulyn", species: "Nebula Wisp", types: ["Lumen", "Gale"],
    zone: "rift", rarity: "mythical", hp: 74, atk: 78, def: 58, spd: 82,
    height: "1.0 m", weight: "0.05 kg",
    powers: [
      { n: "Starbirth", d: "Swirls its cloudy body until a brand-new pinprick star kindles at its heart." },
      { n: "Cosmic Hush", d: "Exhales a nebula-cloud so peaceful that time itself seems to slow inside it." },
    ],
    story: "A Nebulyn is a baby nebula — a whole galaxy's worth of someday-stars, drifting and dreaming. It is mythical because so few trainers ever reach the rift to find one, and those who do describe the same thing: a feeling, for just a moment, of being very small and very safe at once.",
  },

  // --------------------------- MYTHICAL (roaming) --------------------------
  {
    id: "terraken", name: "Terraken", species: "Mountain Sentinel", types: ["Stone", "Ember"],
    zone: "ridge", rarity: "mythical", hp: 88, atk: 80, def: 90, spd: 40,
    height: "3.0 m", weight: "1,400 kg",
    powers: [
      { n: "Bastion Stance", d: "Plants its feet and becomes, briefly, as immovable as the mountain itself." },
      { n: "Magma Vein", d: "Cracks in its stone hide glow molten, and the ground trembles in answer." },
    ],
    story: "Terraken has stood watch over Ember Ridge for so long that hikers mistake it for a peak and picnic in its shadow. It moves perhaps once a decade, always to shield a smaller creature from a rockslide, and then settles again, patient as stone, to keep watching.",
  },
  {
    id: "sylphine", name: "Sylphine", species: "Aurora Deer", types: ["Frost", "Lumen"],
    zone: "tundra", rarity: "mythical", hp: 78, atk: 76, def: 66, spd: 84,
    height: "1.6 m", weight: "70 kg",
    powers: [
      { n: "Aurora Leap", d: "Bounds across the sky, hoofprints glowing like the northern lights." },
      { n: "Frostlace", d: "Breathes a lacework of frost so beautiful foes forget to be fierce." },
    ],
    story: "On the longest, coldest nights of Frostpeak, a Sylphine steps down from the aurora to walk the snow, and everywhere it treads, frost-flowers bloom in colors that have no names. Tundra children leave out ribbons for it; a Sylphine always takes exactly one, and leaves a single glowing hoofprint in thanks.",
  },

  // ---------------------- QUEST CREATURES (quest-only) ---------------------
  {
    id: "cindermane", name: "Cindermane", species: "Cinder Lion", types: ["Ember"],
    zone: "ridge", rarity: "rare", quest: "q-emberheart", hp: 70, atk: 74, def: 56, spd: 62,
    height: "1.3 m", weight: "60 kg",
    powers: [
      { n: "Emberheart Roar", d: "Roars with the old warmth of the ridge, rekindling dying coals for miles." },
      { n: "Cinder Pounce", d: "Leaps in a streak of sparks, landing in a soft shower of warm ash." },
    ],
    story: "When the Emberheart Shrine's flame nearly guttered out, its last warmth curled itself into a lion and set off to find someone worthy of relighting it. A Cindermane only appears to a trainer who has proven their heart is warm — and their arithmetic sound.",
  },
  {
    id: "gladewing", name: "Gladewing", species: "Grove Sprite", types: ["Leaf", "Gale"],
    zone: "forest", rarity: "rare", quest: "q-greenheart", hp: 58, atk: 60, def: 52, spd: 78,
    height: "0.5 m", weight: "1.1 kg",
    powers: [
      { n: "Seedstorm", d: "Spins up a gentle cyclone of seeds that root wherever they land." },
      { n: "Hollow Hush", d: "Vanishes into a knothole and giggles from somewhere impossible to find." },
    ],
    story: "Gladewing is the keeper of the Whispering Woods' oldest secret: the hidden Greenheart Hollow, where the very first seed still sleeps. It reveals itself only to trainers the forest has decided to trust — usually after they've helped a few things grow.",
  },
  {
    id: "sablefin", name: "Sablefin", species: "Deepcurrent Eel", types: ["Aqua", "Shade"],
    zone: "lake", rarity: "rare", quest: "q-tidecaller", hp: 64, atk: 70, def: 54, spd: 66,
    height: "2.6 m", weight: "40 kg",
    powers: [
      { n: "Undertow Song", d: "Hums a low current that pulls the whole lake into a slow, spiralling dance." },
      { n: "Ink Veil", d: "Clouds the water with shimmering dark ink flecked with tiny lights." },
    ],
    story: "Sablefin coils at the very bottom of Lake Lumen, where the water turns to ink and the reflections of stars sink to rest. It surfaces only when a Tidecaller sings the right notes — and the right numbers — to call it up from the deep.",
  },
  {
    id: "dustmaw", name: "Dustmaw", species: "Dune Wyrm", types: ["Sand", "Stone"],
    zone: "desert", rarity: "rare", quest: "q-sandsong", hp: 76, atk: 78, def: 64, spd: 52,
    height: "4.2 m", weight: "520 kg",
    powers: [
      { n: "Sandsong Surge", d: "Surfaces in a booming wave of sand that hums like a struck drum." },
      { n: "Quartz Gnash", d: "Bites with teeth of desert glass forged in a thousand noons." },
    ],
    story: "The Dustmaw sleeps beneath the singing dunes of Sundune, and the desert's eerie hum is the sound of it snoring. To wake one on purpose you must play the ancient Sandsong — a rhythm of numbers passed down by the desert nomads — perfectly, and without fear.",
  },
  {
    id: "glimmerhart", name: "Glimmerhart", species: "Wishing Stag", types: ["Lumen", "Song"],
    zone: "any", rarity: "mythical", quest: "q-starfall", hp: 86, atk: 82, def: 72, spd: 80,
    height: "1.9 m", weight: "84 kg",
    powers: [
      { n: "Wishfall", d: "Shakes its antlers and a soft rain of granted little wishes drifts down." },
      { n: "Starlit Bound", d: "Leaps so high it briefly joins the constellations, then lands without a sound." },
    ],
    story: "Once a century a star falls that is really a Glimmerhart coming home. It carries every small wish ever made on a shooting star tangled in its glowing antlers, and it grants one to the trainer clever and kind enough to follow the Starfall all the way to where it lands.",
  },

  // =========================== SECOND WAVE ===============================
  // ------------------------------ WILD ----------------------------------
  {
    id: "emberfly", name: "Emberfly", species: "Cinder Moth", types: ["Ember"],
    zone: "ridge", rarity: "uncommon", hp: 40, atk: 46, def: 30, spd: 68,
    height: "0.3 m", weight: "0.4 kg",
    powers: [
      { n: "Ashwing Drift", d: "Scatters warm cinders from its wings that drift like slow orange snow." },
      { n: "Flicker", d: "Blinks in and out like a dying ember, hard to catch and easy to underestimate." },
    ],
    story: "Emberflies gather over Ember Ridge's warm vents at dusk, their wings glowing brighter the colder the night. Ridge folk say a cloud of them settling on your porch means a warm winter is coming.",
  },
  {
    id: "thornsprout", name: "Thornsprout", species: "Bramble Pup", types: ["Leaf"],
    zone: "forest", rarity: "common", hp: 44, atk: 42, def: 40, spd: 46,
    height: "0.4 m", weight: "3 kg",
    powers: [
      { n: "Prickle Guard", d: "Bristles its thorny coat so nothing dares to pick it up the wrong way." },
      { n: "Rootbite", d: "Sinks tiny roots into the soil for a quick sip of strength mid-scuffle." },
    ],
    story: "A Thornsprout is what happens when a seed decides it would rather walk than wait. They trundle through the Whispering Woods leaving little gardens wherever they nap, and are fiercely proud of every single thorn.",
  },
  {
    id: "rilllet", name: "Rilllet", species: "Brook Tadpole", types: ["Aqua"],
    zone: "lake", rarity: "common", hp: 42, atk: 38, def: 36, spd: 58,
    height: "0.3 m", weight: "1 kg",
    powers: [
      { n: "Ripple Dash", d: "Skips across the surface of Lake Lumen faster than the eye can follow." },
      { n: "Bubble Wall", d: "Puffs a shimmering curtain of bubbles to hide behind." },
    ],
    story: "Rilllets are the chattiest residents of Lake Lumen's shallows, forever racing each other between the reeds. Where the water is clearest and the pebbles brightest, you'll always find a school of them showing off.",
  },
  {
    id: "dunepip", name: "Dunepip", species: "Seedpod Hopper", types: ["Sand"],
    zone: "desert", rarity: "common", hp: 46, atk: 44, def: 42, spd: 50,
    height: "0.4 m", weight: "2 kg",
    powers: [
      { n: "Sand Skip", d: "Bounces over the dunes on springy legs, never sinking, never slowing." },
      { n: "Husk Curl", d: "Tucks into its seed-husk shell and rolls clear of trouble." },
    ],
    story: "Dunepips travel the Sundune Desert in bouncing lines, following the wind to wherever rain last fell. Each one carries a single precious seed inside its husk, waiting for the one green day a year the desert allows.",
  },
  {
    id: "breezel", name: "Breezel", species: "Dandelion Sprite", types: ["Gale"],
    zone: "meadow", rarity: "uncommon", hp: 38, atk: 40, def: 34, spd: 72,
    height: "0.3 m", weight: "0.3 kg",
    powers: [
      { n: "Puffstep", d: "Rides a stray gust so lightly its feet never quite touch the meadow." },
      { n: "Seedscatter", d: "Bursts into a cloud of floating seeds and reappears a few steps away." },
    ],
    story: "Every dandelion clock you ever blew sent a Breezel somewhere new. They tumble over Willowmere Meadow on the softest winds, and catching one is said to be as lucky as making a wish come true.",
  },
  {
    id: "murklet", name: "Murklet", species: "Bog Wisp", types: ["Shade"],
    zone: "marsh", rarity: "uncommon", hp: 46, atk: 50, def: 38, spd: 54,
    height: "0.5 m", weight: "2 kg",
    powers: [
      { n: "Marshlight", d: "Kindles a pale lantern-glow that lures the curious deeper into the fen." },
      { n: "Fogfold", d: "Wraps itself in a coil of bog-mist and all but vanishes." },
    ],
    story: "Murklets are the friendly cousins of the will-o'-the-wisp, drifting through Glowfen Marsh with their soft blue lanterns. Follow one with a kind heart and it leads you to solid ground; follow one greedily and, well — mind the mud.",
  },

  // ------------------ QUEST CREATURES — Frostcrown Trials ---------------
  {
    id: "glacimoth", name: "Glacimoth", species: "Blizzard Moth", types: ["Frost", "Lumen"],
    zone: "tundra", rarity: "rare", quest: "q-frostcrown", hp: 60, atk: 62, def: 54, spd: 74,
    height: "0.9 m", weight: "6 kg",
    powers: [
      { n: "Auroralight", d: "Its wings shed a soft aurora that reveals safe paths across the deepest snow." },
      { n: "Rime Powder", d: "Dusts the air with glittering frost that stills a blizzard for a moment." },
    ],
    story: "A Glacimoth appears only in the heart of a Frostpeak blizzard, its glowing wings the one warm-looking thing for miles. Elder Yuki says it is sent by the Frost Warden to test whether a trainer can keep calm — and keep counting — when the world turns white.",
  },
  {
    id: "auravern", name: "Auravern", species: "Frost Warden", types: ["Frost", "Gale"],
    zone: "tundra", rarity: "mythical", quest: "q-frostcrown", guard: 2, hp: 94, atk: 88, def: 84, spd: 78,
    height: "3.4 m", weight: "310 kg",
    powers: [
      { n: "Crown of Frost", d: "Raises a crown of aurora-ice that turns aside all but the truest challenger." },
      { n: "Winterbreath", d: "Exhales the first wind of winter, patient and absolute." },
    ],
    story: "Long ago the Frost Warden Auravern sealed itself inside the Frostcrown Spire, vowing to serve only a trainer who could pass its three Trials of mind and heart. For generations the Spire has stood silent. Pass the Trials, and the oldest guardian of Frostpeak will bow its crowned head to you.",
  },

  // ------------------ QUEST CREATURES — Heart of the Gleamcave ----------
  {
    id: "gleamkit", name: "Gleamkit", species: "Geode Fox", types: ["Gem"],
    zone: "cavern", rarity: "rare", quest: "q-crystalcrown", hp: 58, atk: 64, def: 52, spd: 70,
    height: "0.6 m", weight: "9 kg",
    powers: [
      { n: "Facet Flash", d: "Catches the faintest cave-light in its crystal fur and throws back a dazzling beam." },
      { n: "Vein Sense", d: "Twitches its ears toward hidden seams of gemstone deep in the rock." },
    ],
    story: "Gleamkits are the Gleamcave's living lanterns, their crystal coats storing light by day to glow softly through the dark. Prospector Garnet swears one led them to the sealed door of the Crystal Throne — then sat down and refused to go a step further without a clever trainer along.",
  },
  {
    id: "prismegis", name: "Prismegis", species: "Crystal Sovereign", types: ["Gem", "Lumen"],
    zone: "cavern", rarity: "mythical", quest: "q-crystalcrown", guard: 2, hp: 96, atk: 86, def: 90, spd: 62,
    height: "2.8 m", weight: "1,900 kg",
    powers: [
      { n: "Heartgem Radiance", d: "The living gem in its chest blazes, and every crystal in the cavern answers with light." },
      { n: "Refraction Ward", d: "Splits an incoming blow into a dozen harmless rainbows." },
    ],
    story: "Prismegis, the Crystal Sovereign, once lit every tunnel of the Gleamcave with the gem that beats in its chest. A great cave-in stole its light and its slumber both. Forge the Gleamkey, wake the Sovereign with the answers it asks, and the whole mountain will shine again.",
  },

  // =========================== THIRD WAVE ================================
  // ---------------------- SUNKEN SANCTUM (wild) -------------------------
  {
    id: "coralkit", name: "Coralkit", species: "Reef Pup", types: ["Aqua"],
    zone: "sanctum", rarity: "common", hp: 46, atk: 42, def: 44, spd: 52,
    height: "0.4 m", weight: "4 kg",
    powers: [
      { n: "Polyp Bloom", d: "Sprouts tiny coral buds along its back that harden into armor." },
      { n: "Current Curl", d: "Rolls into a shell-tight ball and lets the tide carry it to safety." },
    ],
    story: "Coralkits scamper along the pillared avenues of the Sunken Sanctum, nibbling algae from the old stone and leaving trails of bright new coral wherever they play. They are the reef's cheerful groundskeepers.",
  },
  {
    id: "gleamjelly", name: "Gleamjelly", species: "Lantern Jelly", types: ["Aqua", "Lumen"],
    zone: "sanctum", rarity: "common", hp: 40, atk: 44, def: 32, spd: 60,
    height: "0.6 m", weight: "2 kg",
    powers: [
      { n: "Softglow", d: "Pulses a warm lantern-light that calms whatever it touches." },
      { n: "Drift Sting", d: "Trails glowing tendrils that tingle like a mild, sleepy spark." },
    ],
    story: "Whole galaxies of Gleamjellies rise and fall with the Sanctum's slow currents, and their gentle glow is the only light in the deepest halls. Sailors above sometimes see them shining up through the water and mistake the Sanctum for a sunken city of lamps — which, in a way, it is.",
  },
  {
    id: "anglow", name: "Anglow", species: "Lure Fish", types: ["Shade", "Lumen"],
    zone: "sanctum", rarity: "uncommon", hp: 52, atk: 58, def: 40, spd: 48,
    height: "0.7 m", weight: "9 kg",
    powers: [
      { n: "Beacon Lure", d: "Dangles a hypnotic light that draws the curious right to its grin." },
      { n: "Blackout", d: "Snuffs its lure and vanishes into the dark between the pillars." },
    ],
    story: "The Anglow hangs in the Sanctum's blackest corridors, its little lantern the only warning it's there. Despite the fearsome teeth it is a shy sort, and mostly uses its light to read the ancient murals carved into the temple walls.",
  },
  {
    id: "tidesprite", name: "Tidesprite", species: "Current Spirit", types: ["Aqua", "Song"],
    zone: "sanctum", rarity: "uncommon", hp: 48, atk: 50, def: 42, spd: 66,
    height: "0.5 m", weight: "1 kg",
    powers: [
      { n: "Tidechime", d: "Hums a note that sets the whole current swaying in time." },
      { n: "Whirl Veil", d: "Spins a little whirlpool around itself to slip away." },
    ],
    story: "Tidesprites are the voices of the Sanctum — every gurgle, echo and hush in the drowned halls is one of them singing. They braid the currents into music and are said to know the words of the old Tideglass Prophecy by heart.",
  },
  {
    id: "nautilux", name: "Nautilux", species: "Spiral Diver", types: ["Gem", "Aqua"],
    zone: "sanctum", rarity: "rare", hp: 62, atk: 60, def: 70, spd: 44,
    height: "1.1 m", weight: "30 kg",
    powers: [
      { n: "Pearl Shell", d: "Withdraws into an iridescent spiral shell nothing can pry open." },
      { n: "Jet Stream", d: "Blasts a jet of water to rocket backward out of danger." },
    ],
    story: "A Nautilux carries a spiral of the Sanctum's history in its shell, one gleaming chamber grown for each century it has lived. The oldest ones remember when the temple stood dry in the sun, and dream of it still as they drift the quiet deep.",
  },
  {
    id: "maridian", name: "Maridian", species: "Tide Priestess", types: ["Aqua", "Song"],
    zone: "sanctum", rarity: "mythical", hp: 82, atk: 80, def: 74, spd: 78,
    height: "2.4 m", weight: "90 kg",
    powers: [
      { n: "Hymn of the Deep", d: "Sings the drowned temple's hymn, and the whole Sanctum glows in answer." },
      { n: "Undertide", d: "Calls a vast slow current that sweeps trouble gently but firmly away." },
    ],
    story: "Maridian is the last priestess of the Sunken Sanctum, half-mermaid and half-current, who stayed behind when the temple slipped beneath the waves. She tends the sleeping halls and sings to the Gleamjellies, waiting for a hero clever enough to help her finish the Tideglass Prophecy.",
  },

  // ---------------------- SECOND-WAVE WILD (other zones) ----------------
  {
    id: "thornbeak", name: "Thornbeak", species: "Bramble Finch", types: ["Leaf", "Gale"],
    zone: "forest", rarity: "uncommon", hp: 44, atk: 52, def: 36, spd: 70,
    height: "0.4 m", weight: "0.8 kg",
    powers: [
      { n: "Seed Volley", d: "Fires a rattling burst of hard little seeds like a slingshot." },
      { n: "Bramble Nest", d: "Weaves a thorn-tangle in a blink and darts inside it." },
    ],
    story: "Thornbeaks stitch the Whispering Woods together, planting a hedge here and a bramble there until half the forest's walls are their handiwork. They sing loudest at dawn and take great offense at anyone trampling their gardens.",
  },
  {
    id: "craghopper", name: "Craghopper", species: "Cliff Goat", types: ["Stone"],
    zone: "ridge", rarity: "common", hp: 54, atk: 48, def: 52, spd: 46,
    height: "0.9 m", weight: "40 kg",
    powers: [
      { n: "Sure Hoof", d: "Bounds up sheer rock faces as if they were flat meadow." },
      { n: "Headbutt", d: "Lowers its stony horns and charges with a crack like a landslide." },
    ],
    story: "Craghoppers pick their way along Ember Ridge's most impossible ledges, grazing on the tough little flowers that grow where nothing else dares. Ridge folk watch them to learn which paths are safe — a Craghopper never puts a hoof wrong.",
  },
  {
    id: "glimmermouse", name: "Glimmermouse", species: "Geode Mouse", types: ["Gem"],
    zone: "cavern", rarity: "common", hp: 40, atk: 44, def: 38, spd: 64,
    height: "0.2 m", weight: "0.5 kg",
    powers: [
      { n: "Spark Whisker", d: "Its crystal whiskers throw tiny sparks of light in the dark." },
      { n: "Gnaw Gem", d: "Chews loose the smallest gems and tucks them in its cheeks for later." },
    ],
    story: "Glimmermice scurry through the Gleamcave gathering fallen gem-chips into secret hoards. Miners consider spotting one great luck — where a Glimmermouse runs, a rich seam is never far, and the little creatures are far better at finding it than any pick.",
  },
  {
    id: "sporelet", name: "Sporelet", species: "Mycelium Sprite", types: ["Leaf", "Shade"],
    zone: "marsh", rarity: "common", hp: 46, atk: 46, def: 44, spd: 48,
    height: "0.4 m", weight: "2 kg",
    powers: [
      { n: "Spore Puff", d: "Releases a cloud of drowsy, glittering spores." },
      { n: "Mush Link", d: "Draws quiet strength from the whole fungal network underfoot." },
    ],
    story: "A Sporelet is the walking fruit of the vast mushroom web that threads all through Glowfen Marsh. Wherever it wanders it plants new caps, and at night the marsh glows a little brighter for every Sporelet that passed through by day.",
  },
  {
    id: "windrake", name: "Windrake", species: "Zephyr Drake", types: ["Gale"],
    zone: "meadow", rarity: "rare", hp: 58, atk: 66, def: 46, spd: 82,
    height: "1.2 m", weight: "14 kg",
    powers: [
      { n: "Gale Dive", d: "Folds its wings and drops like a thunderbolt, pulling up at the last instant." },
      { n: "Updraft", d: "Kicks up a spiral of warm air and rides it clean out of reach." },
    ],
    story: "Windrakes are the little dragons of Willowmere's skies, no bigger than a housecat but proud as any storm. They race the breezes over the meadow for the sheer joy of it, and a trainer who earns a Windrake's respect has a friend that can outfly the weather itself.",
  },

  // -------------------- QUEST CREATURES — Tideglass Prophecy ------------
  {
    id: "gillfin", name: "Gillfin", species: "Temple Guardian", types: ["Aqua", "Stone"],
    zone: "sanctum", rarity: "rare", quest: "q-tideglass", hp: 64, atk: 66, def: 68, spd: 50,
    height: "1.4 m", weight: "55 kg",
    powers: [
      { n: "Warding Tide", d: "Raises a wall of pressured water to guard the temple's inner doors." },
      { n: "Stone Scale", d: "Its carved-stone scales turn aside blows meant for the Sanctum's secrets." },
    ],
    story: "Gillfin were carved as temple guardians and, when the Sanctum sank, the sea breathed life into the statues. One still patrols each sealed door, and will only stand aside for a trainer who has learned the old tide-word and can prove a clever, honest mind.",
  },
  {
    id: "abyssalux", name: "Abyssalux", species: "Deeplight Leviathan", types: ["Aqua", "Lumen"],
    zone: "sanctum", rarity: "mythical", quest: "q-tideglass", guard: 2, hp: 96, atk: 88, def: 82, spd: 74,
    height: "6.0 m", weight: "2,600 kg",
    powers: [
      { n: "Prophecy Radiance", d: "Its whole body blazes with the light of the Tideglass Prophecy fulfilled." },
      { n: "Deeppull", d: "Summons the weight of the entire ocean to still a reckless foe." },
    ],
    story: "Abyssalux is the light at the bottom of the world — the leviathan the Tideglass Prophecy says will wake when the Sanctum's song is finished at last. It slumbers beneath the Tideglass Altar, glowing faintly, dreaming the temple's oldest dream: to be sung whole again.",
  },

  // -------------------- QUEST CREATURES — Clockwork Heart ---------------
  {
    id: "cogsprite", name: "Cogsprite", species: "Gearling", types: ["Spark", "Stone"],
    zone: "meadow", rarity: "rare", quest: "q-clockwork", hp: 54, atk: 60, def: 58, spd: 62,
    height: "0.5 m", weight: "12 kg",
    powers: [
      { n: "Overwind", d: "Spins its gears to a whirring blur for one burst of impossible speed." },
      { n: "Tick-Tock", d: "Keeps perfect time, always acting a half-beat before its foe expects." },
    ],
    story: "A Cogsprite is a spare part that woke up. Sprung loose from the old automaton long ago, it has been ticking around Willowmere ever since, tidying gears and winding stopped clocks. It longs, without quite knowing why, to be whole again — to find the great machine it fell from.",
  },
  {
    id: "aurumaton", name: "Aurumaton", species: "Clockwork Heart", types: ["Spark", "Lumen"],
    zone: "any", rarity: "mythical", quest: "q-clockwork", guard: 2, hp: 92, atk: 84, def: 88, spd: 70,
    height: "3.2 m", weight: "1,100 kg",
    powers: [
      { n: "Golden Mainspring", d: "Unwinds a century of stored energy in one radiant, unstoppable turn." },
      { n: "Perfect Order", d: "Sets every gear in the world of a battle ticking to its own flawless rhythm." },
    ],
    story: "The Aurumaton was built in an age of gears and wonder to keep the seasons turning true, then it wound down and was forgotten, its parts scattered to every corner of the world. Gather them, solve the puzzles that lock its heart, and the golden automaton will tick, and wake, and count you as the one who made it whole.",
  },

  // ========================= SPEED MYTHICALS ============================
  //  A special category (rarity "speedmythical", zone "any" — they roam every
  //  region). You can't catch one with an orb: when it appears a 30-second
  //  timer starts and you must solve 5 times-table problems to befriend it.
  {
    id: "zephyreon", name: "Zephyreon", species: "Gale Falcon", types: ["Gale"],
    zone: "any", rarity: "speedmythical", hp: 70, atk: 82, def: 58, spd: 100,
    height: "1.1 m", weight: "12 kg",
    powers: [
      { n: "Mach Stoop", d: "Folds its wings and dives so fast the air claps shut behind it." },
      { n: "Tailwind", d: "Leaves a rushing slipstream that hurries along anything it likes." },
    ],
    story: "Zephyreon outraces its own shadow across the sky, and the only proof it passed is a sudden warm gust and a feather spiralling down. Trainers say you don't chase a Zephyreon — you simply be very, very quick with your times tables when one deigns to slow down.",
  },
  {
    id: "voltyx", name: "Voltyx", species: "Static Lynx", types: ["Spark"],
    zone: "any", rarity: "speedmythical", hp: 68, atk: 84, def: 56, spd: 98,
    height: "0.8 m", weight: "16 kg",
    powers: [
      { n: "Flash Step", d: "Blinks from place to place along arcs of crackling static." },
      { n: "Live Wire", d: "Its fur stands on end and snaps with sparks when it's about to bolt." },
    ],
    story: "A Voltyx moves between two heartbeats, a streak of blue lightning with a cat's grin at the end of it. Catch it in the corner of your eye and it's already gone — the trick is to think fast and count faster, before the charge wears off.",
  },
  {
    id: "cometail", name: "Cometail", species: "Starstreak Fox", types: ["Lumen"],
    zone: "any", rarity: "speedmythical", hp: 72, atk: 80, def: 60, spd: 99,
    height: "0.9 m", weight: "11 kg",
    powers: [
      { n: "Meteor Run", d: "Sprints in a blazing arc of light like a shooting star gone to ground." },
      { n: "Afterglow", d: "Trails a ribbon of sparks that lingers a moment after it's already gone." },
    ],
    story: "Once a year the Cometail runs a full circuit of the whole world in a single night, and children stay up to wish on the streak of light it leaves. It slows for no one — except, just maybe, a trainer sharp enough to keep pace in arithmetic.",
  },
  {
    id: "duskdash", name: "Duskdash", species: "Shadow Panther", types: ["Shade"],
    zone: "any", rarity: "speedmythical", hp: 74, atk: 86, def: 62, spd: 97,
    height: "1.0 m", weight: "34 kg",
    powers: [
      { n: "Nightblur", d: "Melts into its own shadow and reappears a dozen strides away." },
      { n: "Silent Sprint", d: "Runs without a sound, so the first you know of it is the wind of its passing." },
    ],
    story: "Duskdash is the hush between dusk and dark, a panther woven from shadow that runs the twilight roads no eye can follow. It races travellers for fun and always wins — but it respects a mind that can keep its numbers straight under pressure.",
  },
  {
    id: "emberush", name: "Emberush", species: "Cinder Cheetah", types: ["Ember"],
    zone: "any", rarity: "speedmythical", hp: 70, atk: 88, def: 54, spd: 100,
    height: "1.0 m", weight: "40 kg",
    powers: [
      { n: "Blazing Dash", d: "Accelerates until its paw-prints smoulder and the grass smokes behind it." },
      { n: "Heat Shimmer", d: "Wobbles the air with speed-heat so foes can't tell where it truly is." },
    ],
    story: "The fastest thing on four legs, an Emberush crosses Ember Ridge in the time it takes to blink, leaving a trail of glowing paw-prints that fade like sparks. It runs for the sheer joy of the burn, and dares clever trainers to try and keep up.",
  },
  {
    id: "rimeglide", name: "Rimeglide", species: "Frost Hare", types: ["Frost"],
    zone: "any", rarity: "speedmythical", hp: 66, atk: 78, def: 58, spd: 98,
    height: "0.6 m", weight: "7 kg",
    powers: [
      { n: "Ice Skate", d: "Freezes a ribbon of ice beneath its feet and rockets along it." },
      { n: "Snowveil", d: "Kicks up a curtain of glittering powder and vanishes into it." },
    ],
    story: "A Rimeglide can outrun an avalanche and often does, for the fun of it. It skates across the Frostpeak drifts on ice it makes as it goes, laughing all the way, and only ever pauses for a trainer quick enough to match its frosty little quizzes.",
  },
  {
    id: "torrentail", name: "Torrentail", species: "Rapids Dolphin", types: ["Aqua"],
    zone: "any", rarity: "speedmythical", hp: 74, atk: 80, def: 62, spd: 96,
    height: "1.8 m", weight: "90 kg",
    powers: [
      { n: "Whitewater Rush", d: "Surfs its own bow-wave at the speed of a mountain river in flood." },
      { n: "Slipstream", d: "Draws a fast current behind it that pulls friends along for the ride." },
    ],
    story: "Torrentail rides the fastest water in the world — flash floods, spring rapids, the crest of a storm-swell — always at the very front, always laughing spray. It'll race any boat and win, and grants its friendship only to a trainer whose mind is as quick as the current.",
  },
  {
    id: "verdart", name: "Verdart", species: "Springbok Sprite", types: ["Leaf"],
    zone: "any", rarity: "speedmythical", hp: 68, atk: 76, def: 60, spd: 97,
    height: "0.9 m", weight: "22 kg",
    powers: [
      { n: "Meadow Bound", d: "Clears a whole field in a single soaring, impossible leap." },
      { n: "Green Streak", d: "Runs so fast that fresh clover springs up in the line of its wake." },
    ],
    story: "Verdart bounds across Willowmere in leaps you'd swear defied the ground, a blur of green that leaves a stripe of new flowers behind. It is playful and proud of its speed, and loves nothing more than daring a trainer to a footrace of the mind.",
  },
  {
    id: "sandstreak", name: "Sandstreak", species: "Dune Runner", types: ["Sand"],
    zone: "any", rarity: "speedmythical", hp: 66, atk: 80, def: 56, spd: 99,
    height: "0.7 m", weight: "5 kg",
    powers: [
      { n: "Dust Devil", d: "Spins up a whirl of sand and rides its own little tornado." },
      { n: "Mirage Sprint", d: "Runs so fast it seems to be in three places along the dune at once." },
    ],
    story: "The Sandstreak never stops running — it even sleeps mid-stride, they say, one foot always moving. It crosses the Sundune Desert dawn to dusk chasing the horizon, and befriends only the trainer swift enough to solve its riddles before the dust settles.",
  },
  {
    id: "galehound", name: "Galehound", species: "Storm Greyhound", types: ["Gale"],
    zone: "any", rarity: "speedmythical", hp: 70, atk: 82, def: 58, spd: 98,
    height: "0.9 m", weight: "26 kg",
    powers: [
      { n: "Thunder Run", d: "Its paws drum the ground like distant thunder as it hits full sprint." },
      { n: "Windchase", d: "Runs down the wind itself and nips playfully at its heels." },
    ],
    story: "A Galehound races the storms across the meadow and usually beats them home, arriving just ahead of the first raindrop with its tongue lolling in a grin. It picks its friends from among those who can keep a cool head — and quick sums — in the rush.",
  },
  {
    id: "sparkfleet", name: "Sparkfleet", species: "Thunder Colt", types: ["Spark"],
    zone: "any", rarity: "speedmythical", hp: 72, atk: 84, def: 60, spd: 99,
    height: "1.3 m", weight: "70 kg",
    powers: [
      { n: "Gallop of Bolts", d: "Each hoofbeat throws a spark, until it runs on a road of its own lightning." },
      { n: "Overcharge", d: "Builds a crackling charge and discharges it into one blazing burst of speed." },
    ],
    story: "Sparkfleet gallops the ridgelines in thunderstorms, mane streaming lightning, matching the bolts stride for stride. The old stories say it was born of a thunderclap, and it will only let a trainer near who can think as fast as it runs.",
  },
  {
    id: "nightjet", name: "Nightjet", species: "Dartwing Swift", types: ["Shade"],
    zone: "any", rarity: "speedmythical", hp: 64, atk: 78, def: 54, spd: 100,
    height: "0.4 m", weight: "0.6 kg",
    powers: [
      { n: "Dart Dive", d: "Knifes through the dark in zig-zag streaks too fast to track." },
      { n: "Echo Blur", d: "Splits into a fan of afterimages, only one of which is really there." },
    ],
    story: "The Nightjet is the fastest flyer in the world after dusk, a swift stitched from twilight that hunts the evening insects in blinks and blurs. It flies rings around anything that chases it, and gives its trust to the one trainer nimble enough — in wit — to keep up.",
  },

  // ============ FIFTH WAVE — topping up the portal regions ==============
  // -------------------------- SUNKEN SANCTUM ----------------------------
  {
    id: "pearlnub", name: "Pearlnub", species: "Pearl Snail", types: ["Aqua"],
    zone: "sanctum", rarity: "common", hp: 46, atk: 38, def: 56, spd: 34,
    height: "0.3 m", weight: "5 kg",
    powers: [
      { n: "Nacre Coat", d: "Layers its shell with mother-of-pearl until it shines like the inside of the moon." },
      { n: "Slow and Sure", d: "Gets there eventually, and arrives entirely unbothered." },
    ],
    story: "Pearlnubs inch along the Sanctum's fallen columns polishing them to a shine, and every few years each one produces a single flawless pearl and leaves it somewhere it will be found. Nobody has ever worked out how they decide who deserves one.",
  },
  {
    id: "brineling", name: "Brineling", species: "Saltwater Imp", types: ["Aqua", "Shade"],
    zone: "sanctum", rarity: "uncommon", hp: 50, atk: 58, def: 44, spd: 62,
    height: "0.5 m", weight: "6 kg",
    powers: [
      { n: "Salt Sting", d: "Flicks a stinging spray of concentrated brine with unerring aim." },
      { n: "Cellar Dark", d: "Slips into the black water under a flagstone and waits, grinning." },
    ],
    story: "Brinelings are the Sanctum's mischief-makers, hiding sandals and rearranging the offerings on the altars overnight. Maridian has given up scolding them and now simply counts everything twice.",
  },
  {
    id: "vaultfin", name: "Vaultfin", species: "Reliquary Ray", types: ["Aqua", "Gem"],
    zone: "sanctum", rarity: "rare", hp: 64, atk: 66, def: 70, spd: 58,
    height: "2.0 m", weight: "62 kg",
    powers: [
      { n: "Sealed Hold", d: "Folds its wings into a locked vault that nothing has ever been pried open." },
      { n: "Keeper's Glide", d: "Sweeps silently along the temple corridors it has guarded for centuries." },
    ],
    story: "When the Sanctum sank, the priests gave their treasures to the Vaultfins for safekeeping — and the Vaultfins are still keeping them, gliding the drowned corridors with the temple's riches folded away inside. They will hand it all back the moment someone proves they are the rightful owner. So far, nobody has.",
  },

  // --------------------------- SKYHAVEN REACH ---------------------------
  {
    id: "driftling", name: "Driftling", species: "Seedcloud Sprite", types: ["Gale"],
    zone: "sky", rarity: "common", hp: 42, atk: 42, def: 38, spd: 64,
    height: "0.3 m", weight: "0.2 kg",
    powers: [
      { n: "Idle Drift", d: "Goes wherever the wind is going and is perfectly happy about it." },
      { n: "Catch a Ride", d: "Hooks its fluff onto a passing creature and travels the Reach for free." },
    ],
    story: "Driftlings have no particular destination and never have. They blow across Skyhaven in soft white clusters, landing on whatever is warmest, and this is the entire plan. Somehow it works out for them every single time.",
  },
  {
    id: "halolark", name: "Halolark", species: "Ringlight Lark", types: ["Lumen", "Gale"],
    zone: "sky", rarity: "uncommon", hp: 48, atk: 56, def: 42, spd: 74,
    height: "0.4 m", weight: "0.5 kg",
    powers: [
      { n: "Sun Ring", d: "Circles so fast at dawn that it leaves a glowing halo hanging in the air." },
      { n: "Morning Call", d: "Sings the note that tells all of Skyhaven the sun is on its way up." },
    ],
    story: "The rings of light you sometimes see around the sun are Halolarks, flying a perfect circle so quickly that the eye joins them together. They take this duty extremely seriously and are quietly furious on cloudy days.",
  },
  {
    id: "thermalon", name: "Thermalon", species: "Updraft Drake", types: ["Gale", "Ember"],
    zone: "sky", rarity: "rare", hp: 66, atk: 70, def: 56, spd: 76,
    height: "2.2 m", weight: "34 kg",
    powers: [
      { n: "Column Climb", d: "Finds the warm column rising off the ridge and spirals it to the very top." },
      { n: "Warm Breath", d: "Breathes heat beneath a struggling flier to give it a lift." },
    ],
    story: "Thermalons are the reason the Windrise exists at all — a dozen of them breathing warmth into the same column of air, day after day, century after century. Aeronaut Wren calls them the caretakers of the road to Skyhaven, and always waves on the way up.",
  },

  // ------------------------- EMBERDEEP CALDERA --------------------------
  {
    id: "ignilit", name: "Ignilit", species: "Ember Grub", types: ["Ember"],
    zone: "caldera", rarity: "common", hp: 44, atk: 46, def: 44, spd: 42,
    height: "0.3 m", weight: "3 kg",
    powers: [
      { n: "Glow Crawl", d: "Leaves a warm luminous trail behind it along the tunnel floor." },
      { n: "Coal Nap", d: "Curls up in the embers and, rather sensibly, goes to sleep." },
    ],
    story: "Ignilits are the first thing to appear on a lava flow once it has cooled just enough to walk on. They light the way for everything that comes after, which in the Emberdeep makes them something close to pioneers.",
  },
  {
    id: "flarecrest", name: "Flarecrest", species: "Flare Rooster", types: ["Ember"],
    zone: "caldera", rarity: "uncommon", hp: 52, atk: 62, def: 46, spd: 66,
    height: "0.7 m", weight: "8 kg",
    powers: [
      { n: "Crest Flare", d: "Snaps its comb into a fan of flame twice the size of its head." },
      { n: "Dawn Holler", d: "Crows the hour even though there has never been a sunrise down here." },
    ],
    story: "There is no daylight in the Emberdeep and no reason whatsoever to announce the dawn, but every single morning a Flarecrest does it anyway, flaring its burning comb and hollering into the dark. The other creatures have come to rely on it.",
  },

  // ---------------------------- ASTRAL RIFT -----------------------------
  {
    id: "gleamdrift", name: "Gleamdrift", species: "Lightshoal Minnow", types: ["Lumen"],
    zone: "rift", rarity: "common", hp: 40, atk: 44, def: 38, spd: 68,
    height: "0.2 m", weight: "almost none",
    powers: [
      { n: "Shoal Shine", d: "Turns with a thousand others at once, and the whole Rift flashes bright." },
      { n: "Slipstream Swim", d: "Swims through empty space as though it were perfectly ordinary water." },
    ],
    story: "Gleamdrifts move through the Astral Rift in enormous glittering shoals that bank and turn as one body. Trainers who drift among them describe it as being inside a school of fish made of light, which is very close to exactly what it is.",
  },
  {
    id: "voidpetal", name: "Voidpetal", species: "Nightbloom", types: ["Shade", "Leaf"],
    zone: "rift", rarity: "uncommon", hp: 50, atk: 54, def: 50, spd: 52,
    height: "0.6 m", weight: "2 kg",
    powers: [
      { n: "Open at Dark", d: "Unfolds its petals in the total absence of light, which should be impossible." },
      { n: "Stardust Pollen", d: "Releases a slow drift of glittering pollen that seeds new little stars." },
    ],
    story: "A Voidpetal is a flower that grows where there is no soil, no water and no sun, and it blooms anyway out of what appears to be sheer stubbornness. Botanists who have studied them come back changed, and mostly just say that it is very beautiful out there.",
  },

  // ===================== THE SCALES OF AEQUOR ===========================
  //  Algebra-gated quest creatures. Each one's nature IS the idea it guards —
  //  the `algebra` field makes its encounter ask a solve-for-x of that type
  //  instead of the usual math/spelling challenge.
  {
    id: "balanx", name: "Balanx", species: "Scale Sprite", types: ["Lumen", "Stone"],
    zone: "meadow", rarity: "rare", quest: "q-scales", algebra: "two-step",
    hp: 58, atk: 60, def: 62, spd: 56,
    height: "0.6 m", weight: "exactly as much as it needs to",
    powers: [
      { n: "Even Keel", d: "Whatever is added to one of its pans it instantly adds to the other." },
      { n: "Undo", d: "Takes back the last thing that happened to it, then the thing before that." },
    ],
    story: "A Balanx carries a tiny set of scales that is never, ever uneven. Drop a pebble on one side and it will calmly drop an identical pebble on the other. It is the first thing every student of the Scales meets, because it teaches the only rule that matters: do the same to both sides.",
  },
  {
    id: "tallyx", name: "Tallyx", species: "Tally Beetle", types: ["Leaf", "Gem"],
    zone: "forest", rarity: "rare", quest: "q-scales", algebra: "like-terms",
    hp: 56, atk: 62, def: 58, spd: 60,
    height: "0.4 m", weight: "3 kg",
    powers: [
      { n: "Gather Like", d: "Sweeps everything matching into one tidy pile before it does anything else." },
      { n: "Count Up", d: "Adds its identical little tallies together into a single larger mark." },
    ],
    story: "A Tallyx cannot bear to see matching things kept apart. Leave four acorns and three acorns on opposite ends of a log and it will fret until they are one pile of seven. Foresters find this endearing; the Tallyx finds it simply obvious.",
  },
  {
    id: "mirrolyn", name: "Mirrolyn", species: "Mirror Deer", types: ["Aqua", "Lumen"],
    zone: "lake", rarity: "rare", quest: "q-scales", algebra: "both-sides",
    hp: 60, atk: 64, def: 58, spd: 68,
    height: "1.2 m", weight: "48 kg",
    powers: [
      { n: "Both Shores", d: "Stands on both banks of Lake Lumen at once, and is the same on each." },
      { n: "Bring Across", d: "Carries whatever is on one side over to join what is on the other." },
    ],
    story: "Look at a Mirrolyn's reflection in Lake Lumen and you will find it is the deer that is the reflection. It exists on both sides of everything, and the only way to hold its attention is to gather all of something onto one side — which, it turns out, is exactly how you solve for x.",
  },
  {
    id: "sharewing", name: "Sharewing", species: "Bracket Moth", types: ["Gale", "Song"],
    zone: "ridge", rarity: "rare", quest: "q-scales", algebra: "distribute",
    hp: 54, atk: 66, def: 52, spd: 72,
    height: "0.7 m", weight: "1 kg",
    powers: [
      { n: "Share Out", d: "Whatever it is handed, it gives a full share to every creature inside its wings." },
      { n: "Bracket Fold", d: "Folds its curved wings around a group so they can all be carried at once." },
    ],
    story: "Give a Sharewing one crumb and it will give one crumb to each of the little ones sheltering under its curved, bracket-shaped wings — not one crumb split between them, a whole one each. It has never understood why anyone finds this surprising.",
  },
  {
    id: "aequoron", name: "Aequoron", species: "Keeper of the Great Scale", types: ["Lumen", "Stone"],
    zone: "meadow", rarity: "mythical", quest: "q-scales", algebra: "multi", guard: 2,
    hp: 92, atk: 86, def: 84, spd: 70,
    height: "3.6 m", weight: "perfectly balanced",
    powers: [
      { n: "The Great Scale", d: "Holds up the enormous scale on which every equation in the world is weighed." },
      { n: "Solve", d: "Strips a tangled problem down, step by patient step, until only the answer is left." },
    ],
    story: "Aequoron has held the Great Scale of Aequor level since the first person asked 'how many?' It does not fight so much as set you a problem and wait, with enormous patience, to see whether you have understood. Everything it has ever guarded, it guards for the person who finally works it out.",
  },

  // ============= FILLING OUT THE OLDER REGIONS (fourth wave) ============
  // ------------------------------ TUNDRA --------------------------------
  {
    id: "frostling", name: "Frostling", species: "Snow Kit", types: ["Frost"],
    zone: "tundra", rarity: "common", hp: 44, atk: 44, def: 40, spd: 56,
    height: "0.4 m", weight: "5 kg",
    powers: [
      { n: "Powder Dash", d: "Kicks up a spray of loose snow and darts away inside it." },
      { n: "Warm Curl", d: "Curls into a ball so snug that the snow around it never melts." },
    ],
    story: "Frostlings tunnel just beneath the surface of the Frostpeak drifts, popping up in unexpected places with snow on their noses. They are famous for stealing a single mitten — never the pair — and hiding it somewhere you will find it next spring.",
  },
  {
    id: "nivyx", name: "Nivyx", species: "Icicle Sprite", types: ["Frost"],
    zone: "tundra", rarity: "uncommon", hp: 42, atk: 54, def: 44, spd: 62,
    height: "0.5 m", weight: "4 kg",
    powers: [
      { n: "Icicle Chime", d: "Rings its hanging icicles into a bright, freezing little melody." },
      { n: "Glaze", d: "Breathes a thin sheet of clear ice over anything that holds still too long." },
    ],
    story: "A Nivyx hangs from the eaves of Frostpeak outposts pretending very hard to be an ordinary icicle. It gives itself away by humming. Villagers leave them alone, because a roof with a Nivyx on it never, ever leaks.",
  },
  {
    id: "boreath", name: "Boreath", species: "Northwind Elk", types: ["Frost", "Gale"],
    zone: "tundra", rarity: "uncommon", hp: 58, atk: 58, def: 52, spd: 64,
    height: "1.5 m", weight: "180 kg",
    powers: [
      { n: "Northwind Call", d: "Bugles once and the cold north wind comes running like a dog." },
      { n: "Snowbreak", d: "Shoulders through a drift as if the snow had politely stepped aside." },
    ],
    story: "Boreath herds walk the Frostpeak ridgelines in single file, and the wind follows behind them like a loyal hound. Trackers say that if you find a Boreath trail you can walk it all the way home, because the herd always knows the safest way down.",
  },
  {
    id: "tundrox", name: "Tundrox", species: "Tundra Ox", types: ["Frost", "Stone"],
    zone: "tundra", rarity: "rare", hp: 76, atk: 68, def: 78, spd: 36,
    height: "1.8 m", weight: "620 kg",
    powers: [
      { n: "Blizzard Wall", d: "Plants itself in front of a storm and simply refuses to be moved." },
      { n: "Frostplate Hide", d: "Its shaggy coat freezes into overlapping plates of armor-hard ice." },
    ],
    story: "When a blizzard comes down off the peaks, every smaller creature in the tundra runs for the nearest Tundrox and huddles in its wind-shadow. The Tundrox stands there, entirely unbothered, chewing, until the storm gives up and goes somewhere else.",
  },

  // ------------------------ GLEAMCAVE HOLLOWS ---------------------------
  {
    id: "quartzling", name: "Quartzling", species: "Quartz Grub", types: ["Gem"],
    zone: "cavern", rarity: "common", hp: 46, atk: 40, def: 52, spd: 40,
    height: "0.3 m", weight: "4 kg",
    powers: [
      { n: "Crystal Chew", d: "Munches raw quartz and grows a new glittering segment for each meal." },
      { n: "Hard Shell", d: "Pulls into its crystal casing, which is every bit as tough as it looks." },
    ],
    story: "Quartzlings inch along the Gleamcave walls polishing them shiny as they go. A tunnel that sparkles has had Quartzlings in it recently, and miners consider that the surest sign of a safe, well-tended passage.",
  },
  {
    id: "stalagmyte", name: "Stalagmyte", species: "Dripstone Mite", types: ["Stone"],
    zone: "cavern", rarity: "common", hp: 48, atk: 44, def: 54, spd: 38,
    height: "0.4 m", weight: "9 kg",
    powers: [
      { n: "Drip Build", d: "Adds one patient mineral layer to itself with every drop of cave water." },
      { n: "Stand Still", d: "Freezes so perfectly that it becomes, for all purposes, a rock." },
    ],
    story: "A Stalagmyte grows about the width of a hair each year and considers this a brisk pace. Most of the 'stalagmites' in the Gleamcave are exactly what they look like — but a few of them, if you wait long enough, will blink.",
  },
  {
    id: "umbrite", name: "Umbrite", species: "Shadow Geode", types: ["Shade", "Gem"],
    zone: "cavern", rarity: "uncommon", hp: 52, atk: 58, def: 56, spd: 50,
    height: "0.6 m", weight: "18 kg",
    powers: [
      { n: "Open Dark", d: "Cracks itself open to reveal a hollow full of perfect, drinkable darkness." },
      { n: "Facet Shade", d: "Splits a beam of light into shadows instead of colors, which should not be possible." },
    ],
    story: "Break open an ordinary geode and you find crystals. Break open an Umbrite — please don't — and you find night. They roll quietly through the deepest Gleamcave tunnels, keeping the dark tidy and well distributed.",
  },
  {
    id: "veinwyrm", name: "Veinwyrm", species: "Ore Wyrm", types: ["Stone", "Gem"],
    zone: "cavern", rarity: "rare", hp: 70, atk: 72, def: 74, spd: 46,
    height: "3.2 m", weight: "400 kg",
    powers: [
      { n: "Seam Swim", d: "Slips through solid rock along a seam of ore as easily as an eel through water." },
      { n: "Mineral Bite", d: "Bites out a mouthful of raw ore and leaves the gemstones politely behind." },
    ],
    story: "Veinwyrms carve the Gleamcave's richest tunnels by eating their way along the ore seams. Every great mine in history was really a Veinwyrm's old burrow, discovered later by someone who took the credit.",
  },

  // --------------------------- ASTRAL RIFT ------------------------------
  {
    id: "starmote", name: "Starmote", species: "Stardust Mote", types: ["Lumen"],
    zone: "rift", rarity: "common", hp: 40, atk: 46, def: 36, spd: 66,
    height: "0.2 m", weight: "almost none",
    powers: [
      { n: "Twinkle", d: "Blinks on and off so quickly it seems to be in several places at once." },
      { n: "Dust Drift", d: "Scatters into glittering dust, drifts a little way, and reassembles." },
    ],
    story: "Starmotes are the crumbs left over from making stars. Whole shoals of them drift through the Astral Rift, and if you hold very still one will land on your outstretched hand and sit there, warm as a candle, until you move.",
  },
  {
    id: "aethermoth", name: "Aethermoth", species: "Aether Moth", types: ["Shade", "Lumen"],
    zone: "rift", rarity: "uncommon", hp: 48, atk: 56, def: 42, spd: 68,
    height: "0.7 m", weight: "1 kg",
    powers: [
      { n: "Duskwing", d: "One wing is night and one is starlight; it flies by trading between them." },
      { n: "Lantern Lure", d: "Glows softly to guide lost drifters back toward the return portal." },
    ],
    story: "Aethermoths circle the Astral Rift the way ordinary moths circle a porch light — except here, they are the light. Trainers who get turned around in the Rift look for a slow-circling Aethermoth, because it is always orbiting something worth finding.",
  },
  {
    id: "quasarix", name: "Quasarix", species: "Quasar Drake", types: ["Lumen", "Spark"],
    zone: "rift", rarity: "rare", hp: 68, atk: 78, def: 56, spd: 76,
    height: "2.4 m", weight: "48 kg",
    powers: [
      { n: "Beam Breath", d: "Exhales a narrow, blinding jet of light that carries across the whole Rift." },
      { n: "Core Flare", d: "The star burning in its chest flares, and everything nearby casts two shadows." },
    ],
    story: "A Quasarix has a small, genuine star where its heart should be, and the strain of carrying it makes the creature glow at both ends. It is the brightest thing in the Astral Rift and knows it, which is why it poses so much.",
  },

  // -------------------------- GLOWFEN MARSH -----------------------------
  {
    id: "reedling", name: "Reedling", species: "Reed Piper", types: ["Leaf", "Aqua"],
    zone: "marsh", rarity: "common", hp: 44, atk: 44, def: 40, spd: 58,
    height: "0.4 m", weight: "1.4 kg",
    powers: [
      { n: "Reed Whistle", d: "Pipes a thin, cheerful note through its hollow stem of a beak." },
      { n: "Stalk Stand", d: "Balances on one leg atop a single reed, entirely unbothered by wind." },
    ],
    story: "Reedlings nest in the thickest cattails of Glowfen and pipe to one another all day long. Marsh folk have learned the whole vocabulary: three short notes means a heron, and one long note means somebody has dropped their lunch.",
  },
  {
    id: "peatpaw", name: "Peatpaw", species: "Peat Badger", types: ["Leaf", "Shade"],
    zone: "marsh", rarity: "uncommon", hp: 56, atk: 56, def: 54, spd: 46,
    height: "0.7 m", weight: "26 kg",
    powers: [
      { n: "Bog Dig", d: "Tunnels through soggy peat as easily as most creatures walk on dry land." },
      { n: "Mud Cloak", d: "Coats itself in dark peat until it is simply another lump of the marsh." },
    ],
    story: "Peatpaws keep the Glowfen's underground in order, turning the peat and opening little channels so the water goes where it should. Everything green in the marsh owes a Peatpaw a favor, and the Peatpaws have never once mentioned it.",
  },
  {
    id: "fenwing", name: "Fenwing", species: "Fen Heron", types: ["Gale", "Shade"],
    zone: "marsh", rarity: "rare", hp: 62, atk: 70, def: 52, spd: 72,
    height: "1.4 m", weight: "6 kg",
    powers: [
      { n: "Silent Wade", d: "Steps through standing water without leaving a single ripple." },
      { n: "Mistrise", d: "Lifts off in a sudden burst of marsh fog and is simply gone." },
    ],
    story: "A Fenwing can stand so still for so long that frogs use it as a perch. Then, at some moment known only to the Fenwing, it moves — and the fog comes up, and the heron is on the far side of the marsh looking innocent.",
  },

  // -------------------------- SUNDUNE DESERT ----------------------------
  {
    id: "sunscale", name: "Sunscale", species: "Sun Lizard", types: ["Sand", "Ember"],
    zone: "desert", rarity: "uncommon", hp: 50, atk: 58, def: 48, spd: 60,
    height: "0.6 m", weight: "7 kg",
    powers: [
      { n: "Solar Bask", d: "Soaks up noon sunlight and releases it as a shimmering heat-haze after dark." },
      { n: "Scale Flash", d: "Angles its mirror-bright scales to blind whatever is chasing it." },
    ],
    story: "Sunscales spend all morning collecting sunshine and all night giving it back, which is why the rocks of Sundune stay warm long after sunset. Desert travellers sleep beside a Sunscale's boulder on purpose.",
  },
  {
    id: "oasisling", name: "Oasisling", species: "Oasis Sprite", types: ["Aqua", "Sand"],
    zone: "desert", rarity: "rare", hp: 60, atk: 62, def: 58, spd: 64,
    height: "0.7 m", weight: "9 kg",
    powers: [
      { n: "Wellspring", d: "Presses a palm to the sand and clean water rises where there was none." },
      { n: "Green Promise", d: "Where it sleeps, one stubborn palm tree is standing by morning." },
    ],
    story: "Every oasis in Sundune was started by an Oasisling deciding that this particular patch of nowhere ought to have water in it. They are shy, generous, and quietly responsible for every caravan that ever made it across.",
  },

  // ------------- QUEST CREATURES (fourth-wave quests) -------------------
  {
    id: "fablewyrm", name: "Fablewyrm", species: "Story Serpent", types: ["Frost", "Song"],
    zone: "tundra", rarity: "mythical", quest: "q-frostfable", guard: 2, hp: 86, atk: 84, def: 76, spd: 80,
    height: "5.0 m", weight: "290 kg",
    powers: [
      { n: "Told Tale", d: "Speaks a story aloud and, for as long as the telling lasts, it is true." },
      { n: "Frostbound Verse", d: "Freezes a moment into a scene as still and perfect as a page." },
    ],
    story: "Every fable the Frostpeak villages tell on winter nights came from the Fablewyrm, who has been collecting stories since before there were people to tell them to. It sleeps coiled around the oldest tale of all, and will only share that one with a trainer who brings it a story it has never heard.",
  },
  {
    id: "resonyx", name: "Resonyx", species: "Echo Sovereign", types: ["Song", "Gem"],
    zone: "cavern", rarity: "mythical", quest: "q-deepecho", guard: 2, hp: 88, atk: 86, def: 82, spd: 66,
    height: "3.0 m", weight: "1,100 kg",
    powers: [
      { n: "Deep Echo", d: "Answers a single note with the voice of the entire mountain." },
      { n: "Crystal Chorus", d: "Every crystal in the cavern rings at once, in perfect harmony." },
    ],
    story: "Shout into the Gleamcave and the answer that comes back is not your own voice — it is Resonyx, repeating you kindly and a little better than you managed. It has been holding every echo ever made down there, and it remembers all of them.",
  },
  {
    id: "aetherion", name: "Aetherion", species: "Rift Warden", types: ["Lumen", "Shade"],
    zone: "rift", rarity: "mythical", quest: "q-riftwalker", guard: 2, hp: 90, atk: 88, def: 78, spd: 84,
    height: "4.0 m", weight: "unmeasured",
    powers: [
      { n: "Seam Mend", d: "Draws a torn edge of reality closed with a stitch of pure starlight." },
      { n: "Warden's Gaze", d: "Looks straight through a creature to the place it truly belongs." },
    ],
    story: "Aetherion has walked the Astral Rift since the first star, mending the seams where the sky wears thin. It never speaks, but trainers who meet it report the distinct feeling of having been checked over, approved of, and gently sent home.",
  },
  {
    id: "mirevail", name: "Mirevail", species: "Masked Marshlord", types: ["Shade", "Leaf"],
    zone: "marsh", rarity: "mythical", quest: "q-marshlight", guard: 2, hp: 84, atk: 86, def: 74, spd: 78,
    height: "2.6 m", weight: "150 kg",
    powers: [
      { n: "Hundred Masks", d: "Wears a different face for every visitor, and none of them are the real one." },
      { n: "Lantern Waltz", d: "Leads the marsh lights in a slow dance that is very hard to look away from." },
    ],
    story: "Once a year the lights of Glowfen Marsh gather for a masquerade, and Mirevail presides over it in a mask nobody has ever seen twice. It is playful rather than wicked — but do remember to say thank you before you leave, because it does keep score.",
  },

  // ========================= SKYHAVEN REACH =============================
  {
    id: "nimbik", name: "Nimbik", species: "Cloud Lamb", types: ["Gale"],
    zone: "sky", rarity: "common", hp: 46, atk: 40, def: 44, spd: 54,
    height: "0.5 m", weight: "2 kg (mostly fluff)",
    powers: [
      { n: "Fleece Float", d: "Puffs its cloud-wool until it drifts gently off the ground." },
      { n: "Drizzle", d: "Wrings out its fleece for a tiny, very polite rain shower." },
    ],
    story: "Nimbiks graze the meadows of Skyhaven in woolly flocks, nibbling the tops off clouds. When a whole flock naps together they merge into one big cloud, and the shepherds of the Reach have to count very carefully to get everyone home again.",
  },
  {
    id: "cloudlet", name: "Cloudlet", species: "Cloudpuff Chick", types: ["Gale", "Lumen"],
    zone: "sky", rarity: "common", hp: 42, atk: 44, def: 36, spd: 62,
    height: "0.3 m", weight: "0.4 kg",
    powers: [
      { n: "Puffhop", d: "Bounces from cloud to cloud, giggling, never quite falling through." },
      { n: "Sunwarm", d: "Soaks up sunlight until it glows like a tiny lantern at dusk." },
    ],
    story: "Cloudlets hatch from the little golden clouds that catch the last of the sunset. They spend their whole first year learning to fall properly — a Cloudlet who has mastered falling is halfway to mastering flight, as every Skyhaven elder will tell you.",
  },
  {
    id: "aerowisp", name: "Aerowisp", species: "Breeze Sprite", types: ["Gale"],
    zone: "sky", rarity: "uncommon", hp: 44, atk: 52, def: 38, spd: 76,
    height: "0.4 m", weight: "0.2 kg",
    powers: [
      { n: "Slipwind", d: "Becomes the gap in the air where the wind isn't, and slides through it." },
      { n: "Whistle Up", d: "Whistles a rising note and a fresh breeze answers from nowhere." },
    ],
    story: "An Aerowisp is what a gust of wind looks like when it decides to have opinions. They race each other in loops around the floating islands and love nothing more than untying a traveller's scarf and giving it back three islands later.",
  },
  {
    id: "skimmet", name: "Skimmet", species: "Updraft Kite", types: ["Gale", "Song"],
    zone: "sky", rarity: "uncommon", hp: 48, atk: 54, def: 42, spd: 72,
    height: "0.8 m", weight: "1.6 kg",
    powers: [
      { n: "Thermal Ride", d: "Finds the one warm column of air for miles and spirals up it without a wingbeat." },
      { n: "Kitesong", d: "Hums through its tail feathers like a kite string in a stiff wind." },
    ],
    story: "Skimmets never flap. They find a thermal at dawn and ride it all day, singing a thin, happy note that the people of Skyhaven use to tell the weather. Two Skimmets singing in harmony means clear skies; three means hold onto your hat.",
  },
  {
    id: "cirrix", name: "Cirrix", species: "Cirrus Serpent", types: ["Gale", "Frost"],
    zone: "sky", rarity: "rare", hp: 60, atk: 66, def: 52, spd: 78,
    height: "3.4 m", weight: "9 kg",
    powers: [
      { n: "Wispcoil", d: "Stretches into a long feathery streak and writes lazy loops across the sky." },
      { n: "Icecrystal Veil", d: "Sheds a shimmer of high, cold ice crystals that haloes the sun." },
    ],
    story: "The long feathery streaks you see highest in the sky are Cirrix, stretched out and dozing. They live so high that they have never once been rained on, and they consider this a great personal achievement worth mentioning often.",
  },
  {
    id: "stratolon", name: "Stratolon", species: "Sky Whale", types: ["Gale", "Aqua"],
    zone: "sky", rarity: "rare", hp: 88, atk: 68, def: 78, spd: 40,
    height: "9.0 m", weight: "as much as a small cloud",
    powers: [
      { n: "Cloud Song", d: "Sings a deep note that rolls across the whole Reach like distant thunder." },
      { n: "Vapour Spout", d: "Blows a spout of warm mist that becomes a small, friendly cloud." },
    ],
    story: "Stratolons swim the high air the way whales swim the sea, drifting between the floating islands on slow, enormous fins. Skyhaven children ride on their backs, and a Stratolon will always slow down if it notices a passenger has fallen asleep.",
  },
  {
    id: "solaviel", name: "Solaviel", species: "Dawn Seraph", types: ["Lumen", "Gale"],
    zone: "sky", rarity: "mythical", hp: 84, atk: 84, def: 72, spd: 88,
    height: "2.2 m", weight: "62 kg",
    powers: [
      { n: "First Light", d: "Unfurls its wings and the sun comes up a little earlier than it meant to." },
      { n: "Skyfire Veil", d: "Wraps itself in warm dawn-colored light that foes cannot look at directly." },
    ],
    story: "Solaviel greets the sun each morning from the highest island in Skyhaven, and the sky turns gold because it is glad to see it. It is said that no one who has watched a Solaviel spread its wings at dawn has ever been able to describe it properly afterward.",
  },

  // ======================= EMBERDEEP CALDERA ============================
  {
    id: "sootpip", name: "Sootpip", species: "Cinder Chick", types: ["Ember"],
    zone: "caldera", rarity: "common", hp: 44, atk: 46, def: 38, spd: 56,
    height: "0.3 m", weight: "1 kg",
    powers: [
      { n: "Ash Ruffle", d: "Shakes a puff of warm soot over everything, including itself." },
      { n: "Coal Peck", d: "Pecks up loose embers and swallows them like seeds." },
    ],
    story: "Sootpips scurry across the Emberdeep's cooling crusts in cheeping little flocks, hunting for the tastiest coals. They are always covered head to foot in ash, and no amount of preening has ever fixed this, which they seem entirely at peace with.",
  },
  {
    id: "slagpup", name: "Slagpup", species: "Molten Pup", types: ["Ember", "Stone"],
    zone: "caldera", rarity: "common", hp: 50, atk: 48, def: 50, spd: 46,
    height: "0.5 m", weight: "22 kg",
    powers: [
      { n: "Crust Coat", d: "Cools its outer shell to hard stone armor, then cracks it off when it warms up." },
      { n: "Glow Bark", d: "Barks a bright orange bark that lights the whole tunnel." },
    ],
    story: "A Slagpup is a good dog made of cooling lava. It will fetch, it will roll over, and it will absolutely follow you home — which is a problem, because it leaves scorch marks on the carpet. Everyone loves them anyway.",
  },
  {
    id: "charcoil", name: "Charcoil", species: "Ember Adder", types: ["Ember"],
    zone: "caldera", rarity: "uncommon", hp: 52, atk: 62, def: 42, spd: 64,
    height: "1.9 m", weight: "12 kg",
    powers: [
      { n: "Heat Coil", d: "Wraps itself into a glowing spiral that radiates like a stove." },
      { n: "Flicker Strike", d: "Darts out of the dark with a flash like a struck match." },
    ],
    story: "Charcoils sleep coiled in the warm cracks of the Emberdeep, glowing faintly orange along every scale. Miners of old used to follow a Charcoil's glow to find their way out — the snakes always coil nearest the safest air.",
  },
  {
    id: "basaltusk", name: "Basaltusk", species: "Basalt Boar", types: ["Stone", "Ember"],
    zone: "caldera", rarity: "uncommon", hp: 62, atk: 60, def: 62, spd: 44,
    height: "1.1 m", weight: "180 kg",
    powers: [
      { n: "Column Charge", d: "Lowers its hexagonal tusks and charges like a falling basalt pillar." },
      { n: "Cool Hide", d: "Its stone hide hardens into six-sided plates that shrug off heat and blows alike." },
    ],
    story: "Basaltusks root through the Emberdeep's black stone forests, cracking open cooled lava columns to get at the mineral salts inside. Their tusks are perfect hexagons, and a shed Basaltusk tusk is the Caldera's most prized building stone.",
  },
  {
    id: "pyrolith", name: "Pyrolith", species: "Furnace Golem", types: ["Ember", "Stone"],
    zone: "caldera", rarity: "rare", hp: 78, atk: 74, def: 80, spd: 38,
    height: "2.6 m", weight: "900 kg",
    powers: [
      { n: "Bellows Breath", d: "Draws a huge breath and blows its own inner furnace white-hot." },
      { n: "Slagfist", d: "Swings a fist of half-molten rock that cools solid on impact." },
    ],
    story: "A Pyrolith is a walking furnace with a heart of trapped magma. They tend the Emberdeep's deepest heat, wandering slowly and stoking the vents, and it is thanks to their patient work that the mountain above has not gone cold in a thousand years.",
  },
  {
    id: "ashenmaw", name: "Ashenmaw", species: "Ashcloud Hound", types: ["Ember", "Shade"],
    zone: "caldera", rarity: "rare", hp: 68, atk: 76, def: 58, spd: 70,
    height: "1.3 m", weight: "70 kg",
    powers: [
      { n: "Ashveil Hunt", d: "Vanishes into a rolling cloud of ash and hunts by heat alone." },
      { n: "Emberbite", d: "Its jaws glow from within, leaving a warm ember where it bites." },
    ],
    story: "The Ashenmaw runs inside the rolling ash clouds of the Emberdeep, seen only as two orange eyes in the grey. It is far shyer than it looks — an Ashenmaw's ash cloud is less a hunting trick than a very large blanket to hide under.",
  },
  {
    id: "volcanyx", name: "Volcanyx", species: "Caldera Sovereign", types: ["Ember", "Stone"],
    zone: "caldera", rarity: "mythical", hp: 92, atk: 88, def: 86, spd: 56,
    height: "4.2 m", weight: "2,200 kg",
    powers: [
      { n: "Eruption Crown", d: "Its crest erupts in a crown of fire that lights the whole Caldera." },
      { n: "Deep Tremor", d: "Stamps once and the mountain's roots answer with a rolling shudder." },
    ],
    story: "Volcanyx sleeps at the very bottom of the Emberdeep with the mountain's fire beating in its chest. When it stirs, the volcano above smokes; when it dreams, the vents sing. It has never erupted in anger — only, once or twice, in a very good mood.",
  },

  // =================== QUEST CREATURES (new quests) =====================
  {
    id: "zephyrion", name: "Zephyrion", species: "Storm Sovereign", types: ["Gale", "Spark"],
    zone: "sky", rarity: "mythical", quest: "q-skysong", guard: 2, hp: 92, atk: 88, def: 78, spd: 92,
    height: "3.8 m", weight: "260 kg",
    powers: [
      { n: "Skysong Gale", d: "Sings the wind's own melody, and every gust in the Reach joins in." },
      { n: "Thunder Wing", d: "One wingbeat rolls out across the sky as a peal of thunder." },
    ],
    story: "Zephyrion is the wind that Skyhaven was built to shelter from and give thanks to in equal measure. It sleeps in the highest cloudbank, and its dreaming keeps the islands afloat. Only a trainer who can sing the whole Skysong may safely wake it.",
  },
  {
    id: "vulcanor", name: "Vulcanor", species: "Forge Titan", types: ["Ember", "Spark"],
    zone: "caldera", rarity: "mythical", quest: "q-forgeheart", guard: 2, hp: 96, atk: 92, def: 88, spd: 52,
    height: "5.0 m", weight: "3,100 kg",
    powers: [
      { n: "Hammerfall", d: "Brings down a fist like a smith's hammer and the Caldera rings like an anvil." },
      { n: "Forgeheart Blaze", d: "Opens the furnace in its chest and the whole cavern turns to daylight." },
    ],
    story: "Vulcanor was the first smith, and the Emberdeep was its forge. It hammered the mountains into shape, then set down its hammer and slept, waiting for someone who understood that making a thing well takes patience, measurement, and a very steady hand.",
  },
  {
    id: "ashvane", name: "Ashvane", species: "Forge Sprite", types: ["Ember"],
    zone: "caldera", rarity: "rare", quest: "q-forgeheart", hp: 58, atk: 64, def: 54, spd: 68,
    height: "0.5 m", weight: "6 kg",
    powers: [
      { n: "Bellows Beat", d: "Beats its wings to fan a dying forge back to roaring life." },
      { n: "Sparkspray", d: "Showers a fountain of harmless, cheerful sparks when it's pleased." },
    ],
    story: "Ashvanes are the little helpers of the old forge, and they have kept the Emberdeep's coals alive all these centuries out of sheer stubborn loyalty. Every one of them believes the great smith will wake up any day now, and every one of them is right.",
  },
  {
    id: "nimbaros", name: "Nimbaros", species: "Eternal Storm", types: ["Gale", "Frost"],
    zone: "sky", rarity: "mythical", quest: "q-stormchase", guard: 2, hp: 90, atk: 90, def: 76, spd: 90,
    height: "4.4 m", weight: "unweighable",
    powers: [
      { n: "Endless Squall", d: "Carries its own storm with it, which has been raining for three hundred years." },
      { n: "Eye of Calm", d: "Opens a perfect circle of stillness at its heart where nothing can be harmed." },
    ],
    story: "There is a storm over Skyhaven that has never once stopped, and at the center of it, quite calm and rather lonely, is Nimbaros. It cannot stop the storm any more than you can stop your own heartbeat — but a clever friend, it is said, might teach it how to rest.",
  },
  {
    id: "lumenwick", name: "Lumenwick", species: "Lost Lantern", types: ["Lumen", "Shade"],
    zone: "marsh", rarity: "rare", quest: "q-lostlantern", hp: 56, atk: 62, def: 52, spd: 60,
    height: "0.6 m", weight: "3 kg",
    powers: [
      { n: "Homeward Glow", d: "Burns brighter the closer it gets to somewhere it belongs." },
      { n: "Wick Flicker", d: "Dims to almost nothing, then flares to lead a traveller out of the fen." },
    ],
    story: "A Lumenwick is a lantern that was set down one night in Glowfen Marsh and never picked back up, and has been quietly looking for its owner ever since. It lights the way for anyone who's lost, in the hope that one day someone will lead it home too.",
  },
  {
    id: "chimerakit", name: "Chimerakit", species: "Patchwork Cub", types: ["Leaf", "Ember"],
    zone: "meadow", rarity: "rare", quest: "q-menagerie", hp: 60, atk: 64, def: 56, spd: 66,
    height: "0.6 m", weight: "11 kg",
    powers: [
      { n: "Borrowed Trick", d: "Copies a move it saw another critter do once, slightly wrong and twice as enthusiastically." },
      { n: "Patchwork Coat", d: "Its mismatched fur takes on whatever the last creature it befriended looked like." },
    ],
    story: "The Chimerakit is a bit of everything and entirely itself: leafy ears, an ember tail, and a heart three sizes too big. It escaped the Wandering Menagerie years ago and has been making friends with one creature from every single region ever since.",
  },

  // ====================== ULTRA SPEED MYTHICALS =========================
  //  The tier above Speed Mythical (rarity "ultraspeed", zone "any"). Caught
  //  the same way — a 30-second timer — but they demand EIGHT times-tables in
  //  that same half-minute instead of five. Rarer than a Speed Mythical.
  {
    id: "sonikk", name: "Sonikk", species: "Sonic Swift", types: ["Song", "Gale"],
    zone: "any", rarity: "ultraspeed", hp: 76, atk: 90, def: 60, spd: 108,
    height: "0.4 m", weight: "0.5 kg",
    powers: [
      { n: "Boom Barrier", d: "Breaks the sound barrier, arriving a full second before its own noise does." },
      { n: "Echo Split", d: "Outruns its echo so completely that the echo arrives first and alone." },
    ],
    story: "By the time you hear a Sonikk, it has already been and gone twice. It races the sound of its own wingbeats across the whole valley and wins every time, then loops back to listen to itself arrive. Only the very quickest thinker ever befriends one.",
  },
  {
    id: "blitzhorn", name: "Blitzhorn", species: "Thunder Stag", types: ["Spark"],
    zone: "any", rarity: "ultraspeed", hp: 84, atk: 94, def: 68, spd: 106,
    height: "1.7 m", weight: "120 kg",
    powers: [
      { n: "Forked Charge", d: "Splits into three branching bolts and charges down all of them at once." },
      { n: "Thunderhoof", d: "Each hoofbeat lands as a thunderclap a mile away from the last." },
    ],
    story: "Blitzhorn is the lightning itself wearing antlers. It runs the ridgelines during storms, and where its hooves touch down the sand fuses into glass. Old trainers say the flash you see in a storm is Blitzhorn passing, and the thunder is the world catching up.",
  },
  {
    id: "lumidash", name: "Lumidash", species: "Photon Lynx", types: ["Lumen"],
    zone: "any", rarity: "ultraspeed", hp: 78, atk: 92, def: 62, spd: 110,
    height: "0.9 m", weight: "20 kg",
    powers: [
      { n: "Lightstride", d: "Travels along a sunbeam, crossing a whole meadow in the blink of a photon." },
      { n: "Prism Blur", d: "Splits into a rainbow of afterimages, each one a fraction of a heartbeat behind." },
    ],
    story: "A Lumidash moves at the speed of the dawn — literally. It rides the first ray of morning over the horizon, and if you look toward the sunrise and see a streak of gold with whiskers, you have just been visited. It waits for no one, and outruns even shadows.",
  },
  {
    id: "umbraflit", name: "Umbraflit", species: "Void Runner", types: ["Shade"],
    zone: "any", rarity: "ultraspeed", hp: 74, atk: 92, def: 58, spd: 109,
    height: "1.0 m", weight: "18 kg",
    powers: [
      { n: "Shadowslip", d: "Steps out of the world entirely and back in somewhere far away." },
      { n: "Nightfold", d: "Folds the darkness between two points and simply crosses the crease." },
    ],
    story: "The Umbraflit does not run so much as decline to be in the places between. It slips through the seams of the dark and reappears wherever it likes, which is usually right behind you. Catching one means being quicker than the night itself.",
  },
  {
    id: "pyrostreak", name: "Pyrostreak", species: "Magma Sprinter", types: ["Ember"],
    zone: "any", rarity: "ultraspeed", hp: 80, atk: 96, def: 60, spd: 107,
    height: "1.2 m", weight: "58 kg",
    powers: [
      { n: "Flashfire Run", d: "Ignites the air in a line behind it and outruns the flames it lit." },
      { n: "Molten Burst", d: "Explodes forward off a spray of magma, faster than the eye can track." },
    ],
    story: "A Pyrostreak leaves a lane of glowing footprints that stays warm until nightfall — the only proof anyone has that it exists. It races lava down the mountainside for sport and always, always gets to the bottom first.",
  },
  {
    id: "cryoflash", name: "Cryoflash", species: "Glacier Bolt", types: ["Frost"],
    zone: "any", rarity: "ultraspeed", hp: 78, atk: 90, def: 66, spd: 106,
    height: "0.8 m", weight: "24 kg",
    powers: [
      { n: "Flashfreeze Slide", d: "Freezes a ribbon of ice a step ahead of itself and rockets down it." },
      { n: "Blizzard Blink", d: "Vanishes in a burst of snow and reappears across the whole tundra." },
    ],
    story: "A Cryoflash crosses the entire Frostpeak Tundra between one snowflake landing and the next. It carves ice roads as it goes and they melt behind it, so no one has ever successfully followed one home. Its friendship is the coldest, fastest prize in the world.",
  },
  {
    id: "tidalix", name: "Tidalix", species: "Tidal Racer", types: ["Aqua"],
    zone: "any", rarity: "ultraspeed", hp: 82, atk: 90, def: 66, spd: 105,
    height: "2.2 m", weight: "110 kg",
    powers: [
      { n: "Riptide Rush", d: "Rides the very front of a breaking wave, always a moment ahead of the crest." },
      { n: "Hydroplane", d: "Skims the surface so fast the water hasn't time to notice and stays flat." },
    ],
    story: "Tidalix outruns the tide. It circles the whole lake in the time it takes a ripple to reach the shore, and sailors who spot the silver line of its wake know they are watching the fastest thing in the water — and probably anywhere.",
  },
  {
    id: "verdabolt", name: "Verdabolt", species: "Jungle Blur", types: ["Leaf"],
    zone: "any", rarity: "ultraspeed", hp: 76, atk: 88, def: 64, spd: 106,
    height: "0.8 m", weight: "16 kg",
    powers: [
      { n: "Vine Sling", d: "Whips from vine to vine so fast the forest looks like one long green streak." },
      { n: "Bloomwake", d: "Flowers burst open in a line behind it, marking a path already long abandoned." },
    ],
    story: "A Verdabolt crosses the Whispering Woods in a single held breath, leaving a trail of startled, suddenly-blooming flowers. The forest adores it and can never quite keep up with it, which is exactly how the Verdabolt prefers things.",
  },
  {
    id: "simoonix", name: "Simoonix", species: "Desert Cyclone", types: ["Sand", "Gale"],
    zone: "any", rarity: "ultraspeed", hp: 78, atk: 92, def: 62, spd: 108,
    height: "1.1 m", weight: "30 kg",
    powers: [
      { n: "Simoom Sprint", d: "Becomes the sandstorm it is running inside, and the storm goes where it goes." },
      { n: "Duneskip", d: "Crosses a hundred dunes without touching more than three of them." },
    ],
    story: "Nomads call the Simoonix 'the wind with a face.' It tears across Sundune at the head of its own private sandstorm, and the only way to know one passed is a perfectly clean, swept line of sand from one horizon to the other.",
  },
  {
    id: "quartzoom", name: "Quartzoom", species: "Gem Streak", types: ["Gem", "Spark"],
    zone: "any", rarity: "ultraspeed", hp: 80, atk: 92, def: 70, spd: 105,
    height: "0.7 m", weight: "26 kg",
    powers: [
      { n: "Refract Run", d: "Bends light around itself as it runs, so it seems to be everywhere at once." },
      { n: "Facet Flash", d: "Reflects the whole cavern in one dazzling instant and is gone before the glare fades." },
    ],
    story: "A Quartzoom rockets through the Gleamcave tunnels like a struck spark, its crystal hide throwing light off every wall at once. Miners see the whole cave flash bright as noon for half a second — that's a Quartzoom, already two tunnels away.",
  },

  // ========================= PARADOX CREATURES ==========================
  //  A special category (rarity "paradox", zone "paradoxis") — impossible
  //  creatures that only exist in the realm of Paradoxis, reachable only once
  //  you've earned the Orb of Entry by defeating the Guardian of Paradoxis.
  {
    id: "paradoxpants", name: "Paradox Pants", species: "Impossible Trousers", types: ["Gale", "Shade"],
    zone: "paradoxis", rarity: "paradox", hp: 78, atk: 80, def: 66, spd: 88,
    height: "1.1 m (and also 0.0 m)", weight: "It refuses to say",
    powers: [
      { n: "Both Legs First", d: "Puts both legs in first, an impossibility that briefly ties reality in a knot." },
      { n: "Runaway Ramble", d: "Bolts in every direction at once, so nobody — including itself — knows where it is." },
    ],
    story: "Paradox Pants is exactly what it sounds like: a crazed, empty pair of trousers that sprints, kicks and cartwheels through Paradoxis with nobody inside and no idea where it's going. It cannot be standing still (it's always mid-stride) and cannot be running (there are no legs in it), and this contradiction is the only thing holding it together. Catch it, and it will loyally trip you up forever.",
  },
  {
    id: "mobiun", name: "Mobiun", species: "One-Sided Moth", types: ["Lumen", "Shade"],
    zone: "paradoxis", rarity: "paradox", hp: 70, atk: 76, def: 60, spd: 84,
    height: "0.5 m", weight: "1 side's worth",
    powers: [
      { n: "Endless Edge", d: "Flies along its own single surface forever, arriving where it began without ever turning." },
      { n: "Twist of Fate", d: "Folds space into a half-twist so foes' attacks come back around and miss." },
    ],
    story: "A Mobiun's wings have only one side — follow the top and you end up on the bottom without ever crossing an edge. It flutters the impossible corridors of Paradoxis in loops that have no inside and no outside, and it never, ever gets lost, because for a Mobiun there is only ever one place to be.",
  },
  {
    id: "zenolo", name: "Zenolo", species: "Halfway Hare", types: ["Gale"],
    zone: "paradoxis", rarity: "paradox", hp: 66, atk: 72, def: 58, spd: 92,
    height: "0.6 m", weight: "approaching 4 kg",
    powers: [
      { n: "Infinite Approach", d: "Halves the distance to its goal, then halves it again — technically never arriving, yet always closer." },
      { n: "Achilles Dash", d: "Runs so that no matter how fast you chase, you only ever close half the gap." },
    ],
    story: "To reach you, a Zenolo must first come halfway, and before that a quarter, and before that an eighth — so by all logic it should never arrive at all. And yet here it is, nibbling your shoelace. Zenolo is living proof that Paradoxis simply doesn't care what logic says should be possible.",
  },
  {
    id: "ouroboan", name: "Ouroboan", species: "Endless Serpent", types: ["Ember", "Shade"],
    zone: "paradoxis", rarity: "paradox", hp: 84, atk: 82, def: 72, spd: 70,
    height: "∞ (curled up)", weight: "its own tail",
    powers: [
      { n: "Tail Feast", d: "Eats its own tail to grow longer, becoming both fuller and emptier at once." },
      { n: "Cycle Without End", d: "Loops back on itself so an attack that lands has also not yet begun." },
    ],
    story: "The Ouroboan is forever swallowing its own tail, which means it is always eating and always being eaten, always beginning and always ending. It is its own ancestor and its own descendant, a ring of fire and shadow with no first scale and no last. It has been doing this since before it started.",
  },
  {
    id: "kleinkoi", name: "Kleinkoi", species: "Bottleless Fish", types: ["Aqua", "Gem"],
    zone: "paradoxis", rarity: "paradox", hp: 74, atk: 74, def: 76, spd: 72,
    height: "0.8 m", weight: "inside = outside",
    powers: [
      { n: "Inside Out", d: "Swims into its own mouth and out through its back, turning its insides to its outsides." },
      { n: "No Boundary", d: "Has no inside to trap and no outside to strike, so blows slide right through." },
    ],
    story: "A Kleinkoi lives in a bottle that has no inside — pour water in and it's already out; reach in and you're already holding the fish. It swims through its own surface the way you'd walk through a doorway, entirely untroubled that its stomach is also its sky. In Paradoxis, this is considered perfectly normal.",
  },
  {
    id: "chronope", name: "Chronope", species: "Grandfather Cog", types: ["Spark", "Stone"],
    zone: "paradoxis", rarity: "paradox", hp: 80, atk: 78, def: 80, spd: 64,
    height: "1.8 m", weight: "before it was built",
    powers: [
      { n: "Unwind", d: "Ticks backward to a moment before it was wound, undoing the blow it just took." },
      { n: "Grandfather Clause", d: "Prevents its own creation, then exists anyway, out of sheer stubbornness." },
    ],
    story: "The Chronope is a great pendulum-creature that once travelled back and stopped itself from ever being made — and yet here it stands, ticking, which by every rule should be impossible. It keeps a time that runs both ways at once, and if you ask it what o'clock it is, the honest answer is 'yes.'",
  },
  {
    id: "quandril", name: "Quandril", species: "Two-Minds", types: ["Song", "Shade"],
    zone: "paradoxis", rarity: "paradox", hp: 72, atk: 76, def: 64, spd: 78,
    height: "1.0 m", weight: "can't decide",
    powers: [
      { n: "Buridan's Bind", d: "Freezes a foe with a choice so perfectly balanced they can't pick either side." },
      { n: "Split Verdict", d: "Argues with itself so fast it acts on both answers, and neither, all at once." },
    ],
    story: "A Quandril has two heads that never agree and one heart caught hopelessly between them. Faced with two identical berries it will starve rather than choose, and faced with a single path it will find a way to take both. It is the friendliest, most maddening creature in Paradoxis, and it cannot decide whether it likes you — so it does, and doesn't.",
  },
  {
    id: "nullkin", name: "Nullkin", species: "Maybe-Sprite", types: ["Shade", "Lumen"],
    zone: "paradoxis", rarity: "paradox", hp: 68, atk: 80, def: 58, spd: 86,
    height: "0.4 m (unobserved)", weight: "undetermined",
    powers: [
      { n: "Superposition", d: "Is both here and not-here until you look, at which point it's cheerfully somewhere else." },
      { n: "Collapse", d: "Forces a foe to decide whether it was ever really there — usually, it wasn't." },
    ],
    story: "Until you look at it, a Nullkin is everywhere and nowhere, doing everything and nothing. The instant you're sure you've spotted one, it turns out you were only maybe-right, and it's already maybe-gone. Trainers who catch a Nullkin are never entirely certain they have — which is, of course, exactly how the Nullkin likes it.",
  },
];

window.CREATURE_BY_ID = {};
window.CREATURES.forEach(function (c) { window.CREATURE_BY_ID[c.id] = c; });
