# Critter Quest

**▶ Play it live: https://ryanpcornell.github.io/critter-quest/**

A Pokémon-Go-style catching game with an educational twist: you roam a
hand-drawn SVG world and catch **73 original critters** by solving **math
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
  - **Spelling** — 5 levels. The easiest is **Picture Words**: a picture (emoji
    or hand-drawn SVG, 130+ of them) is shown with some letters blanked, and you
    fill in the missing letters — no timer. The 3 word-list levels flash the
    word for an adjustable time (0.5–6 s), then you type it. Plus **My Word
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
- **Portal region:** step onto the ✦ Astral Portal near the village to teleport
  to the **Astral Rift** — a starry, portal-only 9th region packed with rare and
  legendary critters (and Prism Orbs). A Portal Home brings you back.
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
  the next challenger.
- **Touch / iPad:** fully playable by tapping (walk, pick up orbs, enter places)
  with an on-screen D-pad on touch devices; controls use `touch-action` to avoid
  zoom/scroll interference, and the viewport is locked for a clean full-screen feel.
- **Evolutions:** each evolvable critter's Critterdex page shows exactly what it
  becomes, a progress bar of orbs collected vs. needed, and where to find those
  orbs. The Critterdex flags which critters can evolve (a ⬆ badge, ✨ when ready)
  and you get a toast the moment one becomes ready. Feed the orbs to evolve it —
  e.g. Bloomble → Floralope, Snowlet → Frostfang. Evolved forms are their own
  Critterdex entries and can't be caught in the wild.
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
- `js/creatures.js` — the 73-creature roster (incl. 3 Ultra Legendaries): stats, types, rarity, guard, evolution links, powers, stories
- `js/art-critters-1..6.js` — hand-drawn SVG art per critter (`-6` = the Ultra Legendaries incl. Sergio)
- `js/world.js` — tile art defs, map generation (72×52 grid, 8 zones), world renderer
- `js/avatar.js` — customizable hand-drawn trainer sprite (hat/skin/hair/shirt/pants)
- `js/orbs.js` — orb type definitions, hand-drawn orb art, helpers
- `js/pictures.js` — 130+ picture words (emoji + hand-drawn SVG) for Picture Words spelling
- `js/kangaroo.js` — visual Math-Kangaroo problem generators (hand-drawn SVG, numeric + multiple-choice)
- `js/challenges.js` — math problem generator + spelling word banks / parser
- `js/storage.js` — cloud-or-local save layer
- `js/social.js` — friends + trade protocol (see the header comment for the swap design)
- `js/game.js` — game loop: movement, camera, spawns, orbs, encounters, evolution, dex, friends, POIs (shops/arenas/townsfolk), arena battles, Ultra Legendaries, touch D-pad, settings

Appending `?debug` to the URL exposes `window.__cqEncounter('<creature-id>')`
for jumping straight into an encounter (handy for checking new art).
