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
];

window.CREATURE_BY_ID = {};
window.CREATURES.forEach(function (c) { window.CREATURE_BY_ID[c.id] = c; });
