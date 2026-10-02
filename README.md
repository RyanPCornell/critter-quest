# Critter Quest

**▶ Play it live: https://ryanpcornell.github.io/critter-quest/**

A Pokémon-Go-style catching game with an educational twist: you roam a
hand-drawn SVG world and catch **213 original critters** by solving **math
problems** or **spelling words** (including a picture-based fill-in mode).
Works great on desktop and iPad.

## How it works

- **Move** with arrow keys / WASD, or click anywhere on the map to walk there
  (click a critter bubble to chase it automatically).
- **Eight regions** on a 72×52 map, each with its own critters: Willowmere
  Meadow, Whispering Woods, Lake Lumen, Ember Ridge (volcanic), Sundune Desert,
  **Frostpeak Tundra** (snowy north-west), **Glowfen Marsh** (southern bog), and
  **Gleamcave Hollows** (crystal caverns, south-east). Wild critters and **loose
  orbs** appear as bubbles on wild patches; walking through them can also
  trigger surprise encounters. Seven **legendary** critters (Sunwyrm, Lunavis,
  Terravox, Aurorix, Tempestrel, Umbryss, Rimewyrd) roam everywhere, rarely.
  A new **mythical** tier (★★★★, just below legendary — Nebulyn, Terraken,
  Sylphine, Glimmerhart) is rarer than rare but not as scarce as a legendary.
- **⚡ Speed Mythicals:** a special category of **12** blazing-fast critters
  (Emberush the cinder cheetah, Zephyreon the gale falcon, Voltyx, Cometail,
  Duskdash, Rimeglide, Torrentail, Verdart, Sandstreak, Galehound, Sparkfleet,
  Nightjet) that **roam every region**, rarely. You can't catch one with an orb —
  when a Speed Mythical zips past, a **30-second timer** starts and you must
  solve **5 multiplication problems** (the 1–12 times tables) before it runs out
  to befriend it. Miss the clock and it blurs away — but they always circle back.
- **⚡⚡ Ultra Speed Mythicals:** the tier above that — **10** even faster
  critters (Sonikk, Blitzhorn, Lumidash, Umbraflit, Pyrostreak, Cryoflash,
  Tidalix, Verdabolt, Simoonix, Quartzoom), rarer still and marked by a crimson
  speed aura and a ⚡⚡ badge. Same **30-second clock**, but they demand
  **8 multiplication problems** in it instead of five — the toughest times-tables
  challenge in the game.
- **Orbs:** you catch a critter by throwing an orb of its home region's type
  (**9 types**, incl. Prism Orbs for legendaries — Prism also substitutes for
  any orb in a pinch). Orbs are found lying in the wild (**click a loose orb and
  your trainer walks over to pick it up**), dropped by critters you catch (some
  critters guard an extra orb), and awarded in a batch every level-up. Your bag
  is the 🔮 Orbs button.
- **Catching:** each correct answer lowers the critter's "will to resist" and
  throws an orb (consuming one). Three wrong answers and it flees. **Legendaries
  carry an Aura Guard** — the first 1–2 correct answers only crack their aura,
  so catching one takes at least 2–3 solved problems.
  - **Math** — 5 difficulty levels (Sprout → Master, plus **🦘 Kangaroo**:
    visual Grade 3–4 Math-Kangaroo-style puzzles — count the shapes, add the
    dice, count the blocks, balance the scale, finish the pattern, add coins,
    continue a dot sequence, tell the time, compare rows; all hand-drawn SVG).
    A Settings toggle can also make **every legendary require a Kangaroo puzzle**
    (no other challenge choice is offered for legendaries).
  - **Spelling** — 6 levels. The easiest is **Picture Words**: a picture (emoji
    or hand-drawn SVG, 130+ of them) is shown with some letters blanked, and you
    fill in the missing letters — no timer. The word-list levels flash the
    word for an adjustable time (0.5–6 s), then you type it: **Hatchling** (3–5
    letters), **Fledgling** (6–8), **Wordsmith** (tricky spellings & long science
    words), and **🐝 Spelling Bee Words** (a curated bee list — edit it between
    the `BEE LIST START/END` markers in `js/challenges.js`). Plus **My Word
    Bank** (paste or upload a .txt/.csv list — e.g. a weekly spelling list).
- **Ultra Legendaries:** a tier above legendary (★★★★★). Only one or two exist
  in the world at a time, each waiting at a fixed hidden spot (a glowing ✦
  marker) until a trainer finds it — catch one and a brand-new one appears
  somewhere else. One is **Sergio**, a very fluffy Maine Coon. They need Prism
  Orbs and a 3-layer aura guard to catch.
- **Townsfolk:** eight people are dotted around the map, each with a floating
  name banner so they're easy to find. Solve their math problem and they share a
  clue to an active Ultra Legendary's region — clues update automatically as
  Ultras are caught and new ones appear.
- **Portal regions:** step onto the ✦ Astral Portal near the village to teleport
  to the **Astral Rift** — a starry, portal-only region packed with rare and
  legendary critters, its own **Rift critters** (Voidkit, Astrilla, Nebulyn), and
  a region-specific **Astral Orb** (plus Prism Orbs). A Portal Home brings you back.
- **The Sunken Sanctum:** a second portal-only region — a drowned temple of teal
  depths, coral, kelp and ruined pillars. Dive in through the **🌀 Tidewhirl**
  whirlpool on the shore of Lake Lumen, catch its own creatures (Coralkit,
  Gleamjelly, Anglow, Tidesprite, Nautilux, and the mythical Maridian), scoop up
  its region-specific **Abyssal Orb**, and rise back to the surface when you're
  done.
- **⧉ Paradoxis (locked end-game region):** a surreal realm of impossible
  purple geometry — Penrose triangles, floating cubes, glitching bits — home to
  the **Paradox Creatures**, a special category of self-contradictory beings:
  **Paradox Pants** (a crazed empty pair of trousers), Mobiun (a one-sided
  moth), Zenolo (a hare that never arrives), Ouroboan, Kleinkoi, Chronope,
  Quandril and Nullkin. They exist **only** in Paradoxis, and its **Paradox
  Gate** (south of the village) stays **sealed** until you win the **Orb of
  Entry** — see the Epic Quest below.
- **🌬️ Skyhaven Reach:** ride the **Windrise**, a column of warm air on Ember
  Ridge, up to a realm of floating islands, cloudbanks and wind swirls above the
  weather. Home to Nimbik, Cloudlet, Aerowisp, Skimmet, Cirrix, the great sky
  whale Stratolon and the mythical dawn seraph Solaviel, plus its own **Zephyr
  Orb**.
- **🌋 Emberdeep Caldera:** slide down the **Magma Vent** at the bottom of the
  Gleamcave into the mountain's molten heart — ember jets, lava pools, obsidian
  spires and ash. Home to Sootpip, Slagpup, Charcoil, Basaltusk, Pyrolith,
  Ashenmaw and the mythical Volcanyx, plus its own **Magma Orb**.
  **Thirteen regions in all.**
- **Quests** (📜): visit the person living in one of **thirty houses** to start a
  multi-step story quest. Steps can ask you to solve a **math puzzle**, learn and
  practise **algebra or division** in the quest-giver's dialog, drill **Spelling
  Bee words**, answer a **word riddle**, **talk to a specific townsperson**,
  collect a glowing magical item, catch a special quest-only critter, travel to
  a secret location that only appears once the quest is active, face a boss, or
  fight the **Guardian of Paradoxis**. The 📜 Quests button opens your quest log.
  - **Twenty completed quests (retired).** Our player finished all of the
    original quests, so their stories were removed from `js/quests.js` to keep
    the game light. Their houses stay on the map and simply show **✅
    Completed** (and the quest log lists them). The full text is in git history
    (commit `5e828a6` and earlier). They were: the Emberheart Cinders,
    Greenheart Hollow, Song of the Deep, Singing Dunes, Chasing the Starfall,
    the Frostcrown Trials, Heart of the Gleamcave, the Tideglass Prophecy, the
    Clockwork Heart, **The Key to Paradoxis** (which awards the Orb of Entry
    that unseals the Paradox Gate), the Song of Skyhaven, Heart of the
    Emberdeep, the Storm That Never Ends, the Lost Lantern, the Wandering
    Menagerie, the Frostpeak Fable, the Deep Echo, the Riftwalker's Trail, the
    Marshlight Masquerade, and the algebra epic **The Scales of Aequor**.
    Retiring is global: a *new* player can't do these quests, and so can't
    earn the Orb of Entry.
  - **Five number quests** (10–12 steps each). Each idea is **taught** (the
    quest-giver works an example, and townsfolk explain it their own way),
    **practised** (fill in the missing moves of a worked solution, then a
    **drill** of 3–10 problems in a row, where a miss shows the full working),
    and **tested** by a critter whose catch asks only that kind of problem:
    - **⚖️ The Missing Weights** (Grocer Pell): one-step equations ("do the
      opposite") and turning **story problems** into equations; Baker Tilly runs
      recipes backwards, Mayor Pom decodes "some / more / each / shared" →
      **Equilibrog**.
    - **🍯 The Sharing Feast** (Cook Hazel): **division facts** (Ranger Fenn
      counts by sixes) and **sharing problems** (Baker Tilly: total ÷ guests) →
      **Divvybear**.
    - **🧮 The Deep Ledger** (Assayer Ondine): 3-digit **long division**, with
      Miner Quill's "Dad, Mom, Sister, Brother" (divide, multiply, subtract,
      bring down) and Trader Vish's "check by multiplying" → **Quotaur**.
    - **🎣 The Halvarr of Lake Lumen** (Lockkeeper Rowan): **equations with
      division** (x ÷ a ± b = c: undo the ±, then multiply) → **Halvarr**.
    - **🦉 The Owl's Examination** (Proctor Elba): five practice "papers" mixing
      everything above → **Sapientowl**, which never asks the same kind twice.
  - **Five spelling quests** that drill the **Spelling Bee list** (the words in
    `SPELL_BANKS[5]`, between the BEE LIST markers in `js/challenges.js`). The
    first four each take a quarter of the list (the list is *dealt* into four
    piles, so every quarter mixes all four rounds; 190 words → ~47 each) and make you spell **every word
    in it four or five times**: *copy* it, spell it from a **flash**, fill in
    the **gaps**, **unscramble** it, then a mixed review of 20. A miss shows the
    right spelling, makes you copy it once, and sends the word back a few words
    later. Each quest also has a spelling tip from a townsperson, a critter to
    catch with Bee words, and a boss that only answers Bee words from that
    quarter:
    - **🐝 The Humming Hive** (Beekeeper Beatrix) → **Melliqueen**;
      **📚 The Whispering Library** (Librarian Sorrel) → **Tomewyrm**;
      **🪁 Letters on the Wind** (Kitewright Juno) → **Glyphawk**;
      **🖋️ The Tide Script** (Inkmaker Mira) → **Scriptide**.
    - **🏆 The Grand Spelling Bee** (Judge Marigold): three rounds of 30 words
      from the whole list, then a **Championship Round of every word on the
      list**, then **Lexicorn**. Progress is saved word by word, so it can be
      done over several sittings.
    Because the quests slice the list by *fraction*, editing the word list
    keeps them working (and their counts update on their own).
- **Battle animations:** attacks lunge, the target shakes and flashes, and a
  floating damage number pops up on each hit.
- **Village Square:** talk to the Bulletin Keeper and answer two problems in a
  row to earn the right to **pin a message to a shared board that every player
  sees** (stored in Firebase). Anyone can read the board.
- **Shops** (🛒): walk in to trade orbs for other orb types (3:1, or 8:1 to
  Prism) or buy an **Ultra Compass** that reveals where an Ultra Legendary hides.
- **Arenas** (⚔️): battle the critter left guarding the arena. Pick your
  champion, then keep answering math/spelling problems — a correct answer
  attacks, a wrong one lets the guardian hit back; first to 0 HP loses. Win to
  earn XP + orbs and **leave one of your own critters to guard the arena** for
  the next challenger. You **can't battle your own guardian** — return to an
  arena you hold and it says your critter is defending it, with a button to
  recall it. If nobody challenges it within about two days it retires on its own
  and the critter is returned to you with an alert.
- **Touch / iPad:** fully playable by tapping (walk, pick up orbs, enter places)
  with an on-screen D-pad on touch devices; controls use `touch-action` to avoid
  zoom/scroll interference, and the viewport is locked for a clean full-screen feel.
- **Evolutions:** **15 chains.** Each evolvable critter's Critterdex page shows
  exactly what it becomes and what evolving takes, because it takes **two**
  things:
  1. **Orbs** — a progress bar of orbs collected vs. needed (12), plus a hint
     about where to farm them.
  2. **🐝 The Spelling Trial** — once the orbs are in, a trial begins: spell
     **3 Spelling Bee Words** in a row. Three misses ends the trial, but **your
     orbs are never spent on a failed attempt**, so you can practise and come
     back. Pass it and the evolution takes hold.

  The Critterdex flags which critters can evolve (a ⬆ badge, ✨ when the orbs
  are ready) and you get a toast the moment one is ready for its Trial. Chains
  include Bloomble → Floralope, Snowlet → Frostfang, Chirpit → Trillark,
  Mossling → Mosswarden, Rocklet → Granitor, Glowbat → Noctilume, Nimbik →
  Cumulon and Sootpip → Emberoost. Evolved forms are their own Critterdex
  entries and can't be caught in the wild — the Trial is the only way to get one.
- **Avatar** — customize your trainer in Settings → My Avatar: hat style,
  skin tone, hair, shirt, and pants colors, all hand-drawn SVG; updates the
  world sprite and HUD portrait instantly.
- **Friends & trading** (cloud only) — add classmates by trainer name in
  🤝 Friends, see their level and Critterdex, and trade critters. You may only
  *offer* a critter you have two or more of, so nobody can lose a Critterdex
  entry. Offers appear in the recipient's inbox with a badge; either side can
  decline or cancel. Each client applies its own half of the swap, so two
  people playing at once never overwrite each other's progress.
- **Critterdex** — every catch reveals the critter's HP/Attack/Defense/Speed,
  its powers, habitat, and backstory. Uncaught critters show as silhouettes.
- **XP & levels** — rarer critters give more XP; duplicates give half.

## Saves / Firebase

Progress saves automatically under the trainer name entered at the title
screen. Cloud sync (and Friends/Trading + the Village Square message board)
needs three collections allowed in your Firestore rules (see `firestore.rules`):
`critterquest`, `critterquest_trades`, and `critterquest_messages`. Without them
the game silently falls back to localStorage — fully playable solo either way,
and the cloud-only panels explain what to enable.

## Deploying

It's a static site, live on GitHub Pages at
**https://ryanpcornell.github.io/critter-quest/** (repo `RyanPCornell/critter-quest`).
To publish an update: `git add -A && git commit -m "..." && git push` — Pages
rebuilds automatically.

## Running

Static site — serve the folder with any web server, e.g.:

```
python3 -m http.server 7839
```

(Also registered as the `critter-quest` preview in `../.claude/launch.json`.)

## Files

- `index.html` — UI shell, all CSS, modals (encounter / dex / settings / help)
- `js/creatures.js` — the 213-creature roster: stats, types, rarity, guard, evolution links, powers, stories (`algebra` / `spellbee` fields force a challenge type)
- `js/art-critters-1..18.js` — hand-drawn SVG art per critter (`-6` = the Ultra Legendaries incl. Sergio; `-18` = the ten number/spelling quest bosses)
- `js/world.js` — tile art defs, map generation (72×52 grid, 8 zones), world renderer
- `js/avatar.js` — customizable hand-drawn trainer sprite (hat/skin/hair/shirt/pants)
- `js/orbs.js` — orb type definitions, hand-drawn orb art, helpers
- `js/pictures.js` — 130+ picture words (emoji + hand-drawn SVG) for Picture Words spelling
- `js/kangaroo.js` — visual Math-Kangaroo problem generators (hand-drawn SVG, numeric + multiple-choice)
- `js/challenges.js` — math problem generator + spelling word banks / parser (the Spelling Bee list sits between the BEE LIST markers)
- `js/algebra.js` — algebra & division problem generators with worked solutions (one-step, story problems, division facts, sharing problems, long division, equations with division, plus the older two-step → multi-step tiers)
- `js/quests.js` — quest definitions (20 retired stubs + 10 active quests); the header comment lists every step kind
- `js/storage.js` — cloud-or-local save layer
- `js/social.js` — friends + trade protocol (see the header comment for the swap design)
- `js/game.js` — game loop: movement, camera, spawns, orbs, encounters, evolution, dex, friends, POIs (shops/arenas/townsfolk), arena battles, Ultra Legendaries, touch D-pad, settings

Appending `?debug` to the URL exposes `window.__cqEncounter('<creature-id>')`
for jumping straight into an encounter (handy for checking new art).
