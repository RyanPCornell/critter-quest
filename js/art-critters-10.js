// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 10
//  The 12 SPEED MYTHICALS. A cohesive "speedster" set: a sleek creature caught
//  mid-sprint with type-colored motion streaks and a ⚡ badge marking the tier.
//  Each varies by color and head feature. Inner SVG on a 0 0 120 120 canvas.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // speedster(id, lightColor, bodyColor, darkColor, accentColor, headFeatureSVG, extraSVG)
  function spd(id, light, body, dark, acc, feature, extra) {
    return `
    <defs>
      <linearGradient id="${id}-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${light}"/><stop offset="100%" stop-color="${body}"/>
      </linearGradient>
    </defs>
    <!-- motion streaks -->
    <g stroke="${acc}" stroke-width="4.5" stroke-linecap="round" opacity=".75">
      <path d="M4 50 h22"/><path d="M2 64 h30"/><path d="M6 78 h20"/><path d="M12 90 h14"/>
    </g>
    <ellipse cx="66" cy="104" rx="30" ry="5" fill="#000" opacity=".15"/>
    <!-- streaming tail -->
    <path d="M42 68 C18 60 14 78 26 90 C30 80 38 76 48 78 Z" fill="url(#${id}-g)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
    ${extra || ""}
    <!-- streamlined body, leaning into the run -->
    <path d="M40 74 C36 52 98 50 100 70 C101 86 58 92 46 84 Z" fill="url(#${id}-g)" stroke="${OL}" stroke-width="2.8"/>
    <!-- running legs, mid-stride -->
    <g stroke="${dark}" stroke-width="6" stroke-linecap="round">
      <path d="M56 82 l-8 16"/><path d="M68 86 l3 15"/><path d="M84 84 l10 12"/><path d="M92 80 l-3 17"/>
    </g>
    <g stroke="${OL}" stroke-width="1.4" stroke-linecap="round" opacity=".5">
      <path d="M48 98 l-3 3 M71 101 l3 2 M94 96 l3 3 M89 97 l-3 3"/>
    </g>
    <!-- head at the front -->
    <circle cx="92" cy="58" r="17" fill="url(#${id}-g)" stroke="${OL}" stroke-width="2.6"/>
    ${feature}
    <!-- muzzle -->
    <path d="M106 60 q9 1 7 8 q-7 3 -12 -2 Z" fill="${body}" stroke="${OL}" stroke-width="2"/>
    <circle cx="111" cy="62" r="1.8" fill="${OL}"/>
    <circle cx="97" cy="55" r="4.8" fill="#fff"/><circle cx="98" cy="55" r="2.4" fill="${OL}"/>
    <path d="M84 52 q6 -3 12 0" fill="none" stroke="${OL}" stroke-width="1.8" stroke-linecap="round" opacity=".7"/>
    <!-- speed-tier ⚡ badge -->
    <path d="M28 24 l10 0 l-6 9 l8 0 l-15 17 l5 -14 l-7 0 Z" fill="#ffd94d" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round" class="glowpulse"/>`;
  }

  var pointy = function (b) { return `<path d="M82 44 l-5 -16 13 10 Z M98 42 l6 -16 5 15 Z" fill="${b}" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>`; };
  var round = function (b) { return `<circle cx="84" cy="44" r="6.5" fill="${b}" stroke="${OL}" stroke-width="2.2"/><circle cx="100" cy="44" r="6.5" fill="${b}" stroke="${OL}" stroke-width="2.2"/>`; };
  var wing = function (a) { return `<path d="M58 60 C44 34 70 30 80 50 C72 48 66 52 62 60 Z" fill="${a}" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/><path d="M64 48 l4 8 M72 44 l3 8" stroke="${OL}" stroke-width="1.4" opacity=".6"/>`; };
  var fin = function (a) { return `<path d="M62 56 L54 30 L80 50 Z" fill="${a}" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/><path d="M64 52 L60 38 M70 52 L68 42" stroke="${OL}" stroke-width="1.2" opacity=".5"/>`; };
  var horn = function () { return `<path d="M90 42 l-3 -20 9 18 Z" fill="#fff2c8" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>`; };
  var antler = function () { return `<g stroke="#6fbf4f" stroke-width="2.8" stroke-linecap="round" fill="none"><path d="M86 44 l-4 -18 M82 34 l-9 -3 M82 28 l-7 -9 M96 44 l5 -18 M99 34 l9 -3 M99 28 l7 -9"/></g>`; };
  var crest = function (a) { return `<path d="M84 44 l-2 -16 6 12 Z M92 42 l0 -18 5 15 Z M100 44 l4 -14 3 14 Z" fill="${a}" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>`; };

  A.zephyreon  = spd("zephyreon", "#dff0f6", "#8fb7c9", "#5f8a9e", "#bfe6f7", wing("#b8dcea"));
  A.voltyx     = spd("voltyx",    "#fff0a8", "#e6c229", "#b08f14", "#fff06b", pointy("#e6c229"));
  A.cometail   = spd("cometail",  "#fff6cf", "#f2d16b", "#c9a63c", "#fff0a8", horn());
  A.duskdash   = spd("duskdash",  "#a99cc4", "#7d6b9e", "#524370", "#b8a6da", pointy("#7d6b9e"));
  A.emberush   = spd("emberush",  "#ffc59a", "#e8703a", "#b04e22", "#ffb27a", pointy("#e8703a"),
    `<g fill="#b04e22" opacity=".7"><circle cx="66" cy="66" r="2.4"/><circle cx="78" cy="62" r="2"/><circle cx="72" cy="76" r="2.2"/></g>`);
  A.rimeglide  = spd("rimeglide", "#eafaff", "#7fc4e0", "#4f95b4", "#c8f0ff", round("#a7e0f2"));
  A.torrentail = spd("torrentail","#bfe6f7", "#4aa3df", "#2f6fa8", "#8fd0f5", fin("#7fc0ea"));
  A.verdart    = spd("verdart",   "#c3efab", "#5cb85c", "#3f7d33", "#9bd97a", antler());
  A.sandstreak = spd("sandstreak","#efd9a8", "#d9a86c", "#a87d44", "#f0c98f", crest("#e8b96c"));
  A.galehound  = spd("galehound", "#e4eef2", "#a7c6d4", "#6f97a8", "#cfe6ef", round("#c3dee8"));
  A.sparkfleet = spd("sparkfleet","#fff0a8", "#e6c229", "#b08f14", "#fff06b", wing("#ffe27a"),
    `<path d="M40 60 l6 10 M52 56 l5 10" stroke="#fff06b" stroke-width="2" stroke-linecap="round" opacity=".7"/>`);
  A.nightjet   = spd("nightjet",  "#8f7fb8", "#5a4d80", "#37305a", "#a99cd4", wing("#7a6ba8"));

})(window.CRITTER_ART);
