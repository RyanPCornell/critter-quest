// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 13
//  The 10 ULTRA SPEED MYTHICALS. A more intense cousin of the Speed Mythical
//  set: a crimson speed aura, doubled motion streaks, trailing sparks and a
//  ⚡⚡ double-bolt badge. Inner SVG on a 0 0 120 120 canvas, keyed by id.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";
  var AURA = "#e11d48"; // the shared Ultra tier color

  // uspd(id, lightColor, bodyColor, darkColor, accentColor, headFeature, extra)
  function uspd(id, light, body, dark, acc, feature, extra) {
    return `
    <defs>
      <linearGradient id="${id}-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${light}"/><stop offset="100%" stop-color="${body}"/>
      </linearGradient>
      <radialGradient id="${id}-aura" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stop-color="${AURA}" stop-opacity=".28"/><stop offset="100%" stop-color="${AURA}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="62" cy="62" r="58" fill="url(#${id}-aura)"/>
    <!-- doubled motion streaks: the creature's own color over a crimson ghost -->
    <g stroke="${AURA}" stroke-width="5" stroke-linecap="round" opacity=".55">
      <path d="M2 44 h26"/><path d="M0 60 h34"/><path d="M4 76 h24"/><path d="M10 90 h16"/>
    </g>
    <g stroke="${acc}" stroke-width="3" stroke-linecap="round" opacity=".95">
      <path d="M8 48 h20"/><path d="M6 64 h26"/><path d="M10 80 h18"/>
    </g>
    <ellipse cx="68" cy="105" rx="30" ry="5" fill="#000" opacity=".15"/>
    <!-- streaming double tail -->
    <path d="M44 68 C18 58 12 78 24 92 C28 81 38 76 50 78 Z" fill="url(#${id}-g)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M46 76 C26 72 22 86 32 96" fill="none" stroke="${acc}" stroke-width="3.5" stroke-linecap="round" opacity=".9"/>
    ${extra || ""}
    <!-- sharper, chevron-leaning body -->
    <path d="M42 74 C36 50 100 48 102 70 C103 87 58 93 48 84 Z" fill="url(#${id}-g)" stroke="${OL}" stroke-width="2.8"/>
    <path d="M56 62 l10 8 -10 8 M70 60 l10 10 -10 8" fill="none" stroke="${acc}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity=".8"/>
    <!-- legs at a full-tilt sprint -->
    <g stroke="${dark}" stroke-width="6" stroke-linecap="round">
      <path d="M58 82 l-10 17"/><path d="M70 87 l3 16"/><path d="M86 85 l11 13"/><path d="M94 80 l-4 18"/>
    </g>
    <g stroke="${AURA}" stroke-width="1.8" stroke-linecap="round" opacity=".8">
      <path d="M48 99 l-4 4 M73 103 l4 3 M97 98 l4 4 M90 98 l-4 4"/>
    </g>
    <!-- head, thrust forward -->
    <circle cx="94" cy="58" r="17" fill="url(#${id}-g)" stroke="${OL}" stroke-width="2.6"/>
    ${feature}
    <path d="M108 60 q9 1 7 8 q-7 3 -12 -2 Z" fill="${body}" stroke="${OL}" stroke-width="2"/>
    <circle cx="113" cy="62" r="1.8" fill="${OL}"/>
    <circle cx="99" cy="55" r="5" fill="#fff"/><circle cx="100" cy="55" r="2.5" fill="${OL}"/>
    <path d="M86 51 q6 -3 12 0" fill="none" stroke="${OL}" stroke-width="1.8" stroke-linecap="round" opacity=".7"/>
    <!-- trailing sparks -->
    <g fill="${AURA}" class="glowpulse"><circle cx="30" cy="52" r="2"/><circle cx="22" cy="70" r="1.6"/><circle cx="34" cy="86" r="1.4"/></g>
    <!-- ⚡⚡ Ultra tier badge -->
    <g>
      <path d="M20 16 l9 0 l-5 8 l7 0 l-13 15 l4 -12 l-6 0 Z" fill="#ffd94d" stroke="${OL}" stroke-width="1.7" stroke-linejoin="round" class="glowpulse"/>
      <path d="M34 14 l9 0 l-5 8 l7 0 l-13 15 l4 -12 l-6 0 Z" fill="${AURA}" stroke="${OL}" stroke-width="1.7" stroke-linejoin="round" class="glowpulse"/>
    </g>`;
  }

  var pointy = function (b) { return `<path d="M84 44 l-5 -16 13 10 Z M100 42 l6 -16 5 15 Z" fill="${b}" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>`; };
  var round  = function (b) { return `<circle cx="86" cy="44" r="6.5" fill="${b}" stroke="${OL}" stroke-width="2.2"/><circle cx="102" cy="44" r="6.5" fill="${b}" stroke="${OL}" stroke-width="2.2"/>`; };
  var wing   = function (a) { return `<path d="M60 60 C46 32 72 28 82 50 C74 48 68 52 64 60 Z" fill="${a}" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/><path d="M66 48 l4 8 M74 44 l3 8" stroke="${OL}" stroke-width="1.4" opacity=".6"/>`; };
  var fin    = function (a) { return `<path d="M64 56 L56 28 L82 50 Z" fill="${a}" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/><path d="M66 52 L62 38 M72 52 L70 42" stroke="${OL}" stroke-width="1.2" opacity=".5"/>`; };
  var antler = function () { return `<g stroke="#ffd94d" stroke-width="2.8" stroke-linecap="round" fill="none"><path d="M88 44 l-5 -20 M83 32 l-10 -4 M83 26 l-8 -10 M98 44 l6 -20 M102 32 l10 -4 M102 26 l8 -10"/></g>`; };
  var crest  = function (a) { return `<path d="M86 44 l-2 -17 6 13 Z M94 42 l0 -19 5 16 Z M102 44 l4 -15 3 15 Z" fill="${a}" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>`; };
  var horn   = function () { return `<path d="M94 42 l-3 -21 9 19 Z" fill="#fff2c8" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>`; };
  var shard  = function (a) { return `<path d="M86 44 L82 22 L92 38 Z M98 42 L104 20 L106 40 Z" fill="${a}" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>`; };

  A.sonikk     = uspd("sonikk",     "#f7d6ea", "#d97fb8", "#a34d86", "#ffc0e2", wing("#eaa8cf"));
  A.blitzhorn  = uspd("blitzhorn",  "#fff0a8", "#e6c229", "#a8890f", "#fff06b", antler());
  A.lumidash   = uspd("lumidash",   "#fff8d8", "#f2d16b", "#c2a23c", "#fff0a8", horn());
  A.umbraflit  = uspd("umbraflit",  "#a99cc4", "#6b5a92", "#3f3363", "#b8a6da", pointy("#6b5a92"));
  A.pyrostreak = uspd("pyrostreak", "#ffc59a", "#e8703a", "#a8441c", "#ffb27a", pointy("#e8703a"),
    `<g fill="#ff9a5a" opacity=".8"><circle cx="66" cy="66" r="2.6"/><circle cx="80" cy="62" r="2.2"/><circle cx="74" cy="78" r="2.4"/></g>`);
  A.cryoflash  = uspd("cryoflash",  "#eafaff", "#7fc4e0", "#438bab", "#c8f0ff", round("#a7e0f2"));
  A.tidalix    = uspd("tidalix",    "#bfe6f7", "#4aa3df", "#2a6a9e", "#8fd0f5", fin("#7fc0ea"));
  A.verdabolt  = uspd("verdabolt",  "#c3efab", "#5cb85c", "#38722e", "#9bd97a", crest("#6fbf4f"));
  A.simoonix   = uspd("simoonix",   "#f2dcae", "#d9a86c", "#a37540", "#f0c98f", crest("#e8b96c"));
  A.quartzoom  = uspd("quartzoom",  "#eddcff", "#b98ad4", "#7d509e", "#dcc0f2", shard("#cfa8e6"));

})(window.CRITTER_ART);
