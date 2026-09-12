// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 16
//  Fifth wave: topping up the portal regions — Sunken Sanctum, Skyhaven Reach,
//  Emberdeep Caldera and the Astral Rift.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // =========================== SUNKEN SANCTUM =============================

  A.pearlnub = `
  <defs>
    <radialGradient id="pn-sh" cx="38%" cy="34%" r="72%">
      <stop offset="0%" stop-color="#fffdf8"/><stop offset="45%" stop-color="#ffe9f2"/>
      <stop offset="75%" stop-color="#d8e6f5"/><stop offset="100%" stop-color="#9fb8d0"/></radialGradient>
    <radialGradient id="pn-b" cx="45%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#bfe6e0"/><stop offset="100%" stop-color="#5f9a92"/></radialGradient>
  </defs>
  <ellipse cx="60" cy="100" rx="26" ry="4.5" fill="#000" opacity=".14"/>
  <!-- foot -->
  <path d="M22 92 C22 80 94 80 94 92 C94 98 22 98 22 92 Z" fill="url(#pn-b)" stroke="${OL}" stroke-width="2.6"/>
  <!-- spiral pearl shell -->
  <circle cx="62" cy="58" r="30" fill="url(#pn-sh)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M62 88 C44 88 44 58 62 58 C74 58 74 74 62 74 C56 74 56 66 62 66"
        fill="none" stroke="#b9c9dd" stroke-width="2.4" opacity=".9"/>
  <circle cx="52" cy="44" r="6" fill="#fff" opacity=".75"/>
  <!-- head + eye stalks -->
  <ellipse cx="26" cy="84" rx="13" ry="10" fill="url(#pn-b)" stroke="${OL}" stroke-width="2.4"/>
  <path d="M20 76 L15 62 M30 76 L32 60" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="15" cy="59" r="4.6" fill="#fff" stroke="${OL}" stroke-width="1.8"/><circle cx="15" cy="59" r="2.2" fill="${OL}"/>
  <circle cx="32" cy="57" r="4.6" fill="#fff" stroke="${OL}" stroke-width="1.8"/><circle cx="32" cy="57" r="2.2" fill="${OL}"/>
  <path d="M20 88 q6 4 12 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#fff" class="glowpulse"><circle cx="84" cy="40" r="2"/><circle cx="44" cy="34" r="1.6"/></g>`;

  A.brineling = `
  <defs><radialGradient id="bl16-b" cx="45%" cy="38%" r="70%">
    <stop offset="0%" stop-color="#6fc4bc"/><stop offset="60%" stop-color="#2f7f86"/><stop offset="100%" stop-color="#1b3f52"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="20" ry="4" fill="#000" opacity=".16"/>
  <!-- impish body -->
  <path d="M60 96 C40 96 34 74 40 60 C46 46 74 46 80 60 C86 74 80 96 60 96 Z" fill="url(#bl16-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- horns + tail -->
  <path d="M44 44 l-7 -14 15 10 Z M76 44 l7 -14 -15 10 Z" fill="#2f7f86" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M82 82 C96 82 98 68 90 64" fill="none" stroke="#2f7f86" stroke-width="5" stroke-linecap="round"/>
  <path d="M90 64 l6 -4 -1 7 Z" fill="#2f7f86" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <!-- grinning face -->
  <circle cx="52" cy="64" r="5.2" fill="#eafffb"/><circle cx="53" cy="64" r="2.5" fill="${OL}"/>
  <circle cx="69" cy="64" r="5.2" fill="#eafffb"/><circle cx="68" cy="64" r="2.5" fill="${OL}"/>
  <path d="M50 76 q10 8 20 0" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M55 78 l2 4 M65 78 l-2 4" stroke="#eafffb" stroke-width="2" stroke-linecap="round"/>
  <!-- flicked salt spray -->
  <g fill="#eafffb" class="glowpulse"><circle cx="28" cy="56" r="2.2"/><circle cx="22" cy="66" r="1.6"/><circle cx="32" cy="70" r="1.4"/></g>`;

  A.vaultfin = `
  <defs>
    <linearGradient id="vf-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8fd0e0"/><stop offset="55%" stop-color="#3f7f9a"/><stop offset="100%" stop-color="#20415c"/></linearGradient>
    <radialGradient id="vf-g" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#ffe9a3"/><stop offset="100%" stop-color="#e0b45c" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="30" ry="4.5" fill="#000" opacity=".15"/>
  <!-- broad ray wings folded like a vault -->
  <path d="M60 32 C24 38 8 62 14 82 C34 74 46 72 60 76 C74 72 86 74 106 82 C112 62 96 38 60 32 Z"
        fill="url(#vf-b)" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round"/>
  <path d="M60 36 C34 42 22 60 24 74" fill="none" stroke="#9fd6e6" stroke-width="2.4" opacity=".6"/>
  <path d="M60 36 C86 42 98 60 96 74" fill="none" stroke="#9fd6e6" stroke-width="2.4" opacity=".6"/>
  <!-- the sealed hold, glowing with what it keeps -->
  <circle cx="60" cy="66" r="15" fill="url(#vf-g)"/>
  <rect x="49" y="57" width="22" height="19" rx="4" fill="#2b4f68" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="60" cy="66" r="4.4" fill="#ffd94d" stroke="${OL}" stroke-width="2" class="glowpulse"/>
  <path d="M60 70 v5" stroke="${OL}" stroke-width="2"/>
  <!-- tail -->
  <path d="M60 76 C60 92 60 100 60 112" fill="none" stroke="url(#vf-b)" stroke-width="5" stroke-linecap="round"/>
  <circle cx="46" cy="48" r="4.6" fill="#fff"/><circle cx="47" cy="48" r="2.3" fill="${OL}"/>
  <circle cx="74" cy="48" r="4.6" fill="#fff"/><circle cx="73" cy="48" r="2.3" fill="${OL}"/>
  <g fill="#cfeef7" opacity=".7"><circle cx="26" cy="60" r="1.8"/><circle cx="94" cy="60" r="1.6"/></g>`;

  // =========================== SKYHAVEN REACH =============================

  A.driftling = `
  <defs><radialGradient id="dl16-f" cx="50%" cy="45%" r="58%">
    <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#e4eef5"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="14" ry="3.5" fill="#000" opacity=".1"/>
  <!-- puff of seed-fluff -->
  <g fill="url(#dl16-f)" stroke="#bcd2e0" stroke-width="1.8">
    <circle cx="44" cy="46" r="13"/><circle cx="60" cy="36" r="16"/><circle cx="76" cy="46" r="13"/>
    <circle cx="52" cy="58" r="12"/><circle cx="68" cy="58" r="12"/></g>
  <g stroke="#cfe0ec" stroke-width="1.6" stroke-linecap="round" class="sway">
    <path d="M60 20 v-8 M44 26 l-5 -6 M76 26 l5 -6"/></g>
  <!-- small face and a dangling seed -->
  <circle cx="53" cy="50" r="4.6" fill="#fff" stroke="${OL}" stroke-width="1.6"/><circle cx="53" cy="50" r="2.2" fill="${OL}"/>
  <circle cx="67" cy="50" r="4.6" fill="#fff" stroke="${OL}" stroke-width="1.6"/><circle cx="67" cy="50" r="2.2" fill="${OL}"/>
  <path d="M55 60 q5 4 10 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <path d="M60 70 v16" stroke="#b9a888" stroke-width="2.2"/>
  <ellipse cx="60" cy="90" rx="5" ry="8" fill="#c9a86c" stroke="${OL}" stroke-width="2"/>
  <g fill="#fff"><circle cx="30" cy="70" r="1.8"/><circle cx="92" cy="66" r="1.5"/></g>`;

  A.halolark = `
  <defs>
    <linearGradient id="hl-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff8d8"/><stop offset="55%" stop-color="#f2d16b"/><stop offset="100%" stop-color="#c9a23c"/></linearGradient>
    <radialGradient id="hl-a" cx="50%" cy="46%" r="60%">
      <stop offset="0%" stop-color="#fff2b0" stop-opacity=".5"/><stop offset="100%" stop-color="#fff2b0" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="56" r="52" fill="url(#hl-a)"/>
  <!-- the halo it leaves behind -->
  <ellipse cx="60" cy="58" rx="46" ry="20" fill="none" stroke="#fff6cf" stroke-width="4" class="glowpulse" opacity=".95"/>
  <ellipse cx="60" cy="58" rx="46" ry="20" fill="none" stroke="#e0b45c" stroke-width="1.4" opacity=".6"/>
  <ellipse cx="60" cy="104" rx="16" ry="3.5" fill="#000" opacity=".12"/>
  <g stroke="${OL}" stroke-width="2.4" stroke-linejoin="round" fill="url(#hl-b)">
    <path d="M52 58 C30 44 18 56 26 70 C38 62 46 60 52 66 Z"/>
    <path d="M68 58 C90 44 102 56 94 70 C82 62 74 60 68 66 Z"/></g>
  <ellipse cx="60" cy="66" rx="14" ry="17" fill="url(#hl-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M60 83 C56 94 58 100 60 104 C62 100 64 94 60 83 Z" fill="#e0b45c" stroke="${OL}" stroke-width="2"/>
  <circle cx="60" cy="48" r="12" fill="url(#hl-b)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M72 48 L86 52 L72 55 Z" fill="#e8913a" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M56 37 l-2 -9 7 7 Z" fill="#fff6cf" stroke="${OL}" stroke-width="1.6" stroke-linejoin="round"/>
  <circle cx="56" cy="47" r="4" fill="#fff"/><circle cx="56" cy="47" r="2" fill="${OL}"/>
  <g fill="#fff8d8" class="glowpulse"><circle cx="20" cy="46" r="2"/><circle cx="100" cy="48" r="1.8"/></g>`;

  A.thermalon = `
  <defs>
    <linearGradient id="th-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffd9a8"/><stop offset="50%" stop-color="#d98f4a"/><stop offset="100%" stop-color="#8a5220"/></linearGradient>
    <linearGradient id="th-w" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffe9c4"/><stop offset="100%" stop-color="#e0a86c"/></linearGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="24" ry="4.5" fill="#000" opacity=".14"/>
  <!-- the warm column it rides -->
  <g fill="none" stroke="#ffcf8f" stroke-width="3" stroke-linecap="round" opacity=".75" class="sway">
    <path d="M22 100 C30 82 18 68 26 50"/><path d="M98 100 C90 82 102 68 94 50"/></g>
  <g stroke="${OL}" stroke-width="2.6" stroke-linejoin="round" fill="url(#th-w)">
    <path d="M50 58 C22 36 8 52 16 74 C30 62 42 60 50 68 Z"/>
    <path d="M70 58 C98 36 112 52 104 74 C90 62 78 60 70 68 Z"/></g>
  <g stroke="#b9793f" stroke-width="1.6" fill="none" opacity=".7"><path d="M26 52 l8 10 M94 52 l-8 10"/></g>
  <path d="M78 88 C96 84 98 68 88 64 C92 76 84 84 74 82 Z" fill="url(#th-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="58" cy="76" rx="22" ry="17" fill="url(#th-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="56" cy="52" r="16" fill="url(#th-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M46 38 l-4 -12 11 8 Z M66 38 l4 -12 -11 8 Z" fill="#d98f4a" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <path d="M70 56 q9 2 7 9 q-8 3 -12 -3 Z" fill="#d98f4a" stroke="${OL}" stroke-width="2"/>
  <circle cx="51" cy="51" r="4.8" fill="#fff"/><circle cx="52" cy="51" r="2.3" fill="${OL}"/>
  <circle cx="63" cy="51" r="4.8" fill="#fff"/><circle cx="62" cy="51" r="2.3" fill="${OL}"/>
  <g fill="#ffcf8f" class="glowpulse"><circle cx="34" cy="92" r="2"/><circle cx="86" cy="96" r="1.7"/></g>`;

  // ========================= EMBERDEEP CALDERA ============================

  A.ignilit = `
  <defs><linearGradient id="ig-b" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#ffd166"/><stop offset="50%" stop-color="#e8703a"/><stop offset="100%" stop-color="#8a3418"/></linearGradient></defs>
  <ellipse cx="60" cy="100" rx="28" ry="4.5" fill="#000" opacity=".2"/>
  <!-- glowing trail it has crawled along -->
  <g stroke="#ff8f3a" stroke-width="3" stroke-linecap="round" opacity=".55" class="glowpulse">
    <path d="M8 92 h14 M26 92 h10 M40 92 h8"/></g>
  <!-- segmented grub -->
  <g fill="url(#ig-b)" stroke="${OL}" stroke-width="2.6">
    <circle cx="40" cy="76" r="13"/><circle cx="58" cy="74" r="15"/><circle cx="78" cy="72" r="17"/></g>
  <g fill="#ffd166" opacity=".7"><circle cx="40" cy="70" r="4"/><circle cx="58" cy="67" r="4.5"/></g>
  <g stroke="${OL}" stroke-width="2.4" stroke-linecap="round">
    <path d="M36 88 l-3 7 M56 88 l0 8 M76 88 l3 7"/></g>
  <path d="M86 58 l-3 -11 9 8 Z M94 62 l7 -8 1 11 Z" fill="#e8703a" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <circle cx="84" cy="68" r="5" fill="#fff6cf"/><circle cx="85" cy="68" r="2.4" fill="${OL}"/>
  <circle cx="94" cy="72" r="4.4" fill="#fff6cf"/><circle cx="94" cy="72" r="2.1" fill="${OL}"/>
  <path d="M84 82 q8 4 14 -1" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>`;

  A.flarecrest = `
  <defs>
    <linearGradient id="fc-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffb45c"/><stop offset="55%" stop-color="#d1541f"/><stop offset="100%" stop-color="#6b2410"/></linearGradient>
    <linearGradient id="fc-c" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#ff7a2a"/><stop offset="55%" stop-color="#ffd166"/><stop offset="100%" stop-color="#fff6cf"/></linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="22" ry="4.5" fill="#000" opacity=".18"/>
  <!-- the flaring comb -->
  <path d="M42 40 C44 18 52 26 54 14 C58 26 64 16 66 30 C70 20 76 26 76 40 Z"
        fill="url(#fc-c)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round" class="glowpulse"/>
  <!-- tail feathers -->
  <path d="M80 78 C102 70 104 48 92 44 C98 60 90 72 76 70 Z" fill="url(#fc-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="58" cy="74" rx="22" ry="21" fill="url(#fc-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="58" cy="48" r="16" fill="url(#fc-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M42 48 L26 52 L42 57 Z" fill="#ffd166" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <path d="M50 60 C48 68 54 70 58 66" fill="#e8703a" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="52" cy="46" r="5" fill="#fff"/><circle cx="51" cy="46" r="2.4" fill="${OL}"/>
  <g stroke="#8a3418" stroke-width="3.4" stroke-linecap="round"><path d="M50 94 l-3 9 M68 94 l3 9"/></g>
  <g fill="#ffd166" class="glowpulse"><circle cx="30" cy="34" r="2"/><circle cx="88" cy="26" r="1.7"/></g>`;

  // ============================ ASTRAL RIFT ===============================

  A.gleamdrift = `
  <defs>
    <radialGradient id="gd-a" cx="50%" cy="48%" r="60%">
      <stop offset="0%" stop-color="#cfe0ff" stop-opacity=".5"/><stop offset="100%" stop-color="#cfe0ff" stop-opacity="0"/></radialGradient>
    <linearGradient id="gd-b" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#fff6cf"/><stop offset="100%" stop-color="#8fb7ff"/></linearGradient>
  </defs>
  <circle cx="60" cy="58" r="54" fill="url(#gd-a)"/>
  <!-- the rest of the shoal, small and behind -->
  <g fill="#bcd2ff" opacity=".7">
    <path d="M18 32 l9 4 -9 4 3 -4 Z"/><path d="M34 20 l8 3 -8 3 2 -3 Z"/>
    <path d="M96 88 l9 4 -9 4 3 -4 Z"/><path d="M78 98 l8 3 -8 3 2 -3 Z"/>
    <path d="M24 88 l9 4 -9 4 3 -4 Z"/></g>
  <ellipse cx="60" cy="98" rx="16" ry="3.5" fill="#000" opacity=".08"/>
  <!-- the lead minnow -->
  <path d="M34 60 C44 40 84 40 94 60 C84 80 44 80 34 60 Z" fill="url(#gd-b)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M34 60 L14 46 L20 60 L14 74 Z" fill="#8fb7ff" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M62 44 L66 34 L72 46" fill="#cfe0ff" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="80" cy="58" r="5.4" fill="#fff"/><circle cx="81" cy="58" r="2.6" fill="${OL}"/>
  <path d="M84 68 q6 3 10 -1" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#fff" class="glowpulse"><circle cx="52" cy="54" r="1.8"/><circle cx="66" cy="66" r="1.5"/></g>`;

  A.voidpetal = `
  <defs>
    <radialGradient id="vp-a" cx="50%" cy="46%" r="62%">
      <stop offset="0%" stop-color="#9a7fd0" stop-opacity=".4"/><stop offset="100%" stop-color="#9a7fd0" stop-opacity="0"/></radialGradient>
    <linearGradient id="vp-p" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c4a8f0"/><stop offset="55%" stop-color="#6b4a9e"/><stop offset="100%" stop-color="#2a1c44"/></linearGradient>
  </defs>
  <circle cx="60" cy="52" r="52" fill="url(#vp-a)"/>
  <g fill="#fff"><circle cx="18" cy="24" r="1.6"/><circle cx="102" cy="30" r="1.4"/><circle cx="26" cy="86" r="1.4"/><circle cx="96" cy="90" r="1.2"/></g>
  <ellipse cx="60" cy="104" rx="16" ry="3.5" fill="#000" opacity=".12"/>
  <!-- stem, rooted in nothing at all -->
  <path d="M60 100 C58 84 62 74 60 64" fill="none" stroke="#4a3a70" stroke-width="4" stroke-linecap="round"/>
  <path d="M60 84 C50 82 46 74 50 70 C56 72 59 78 60 84 Z" fill="#5f4a8f" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <!-- bloom, open in total dark -->
  <g fill="url(#vp-p)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round">
    <ellipse cx="60" cy="34" rx="9" ry="17"/>
    <ellipse cx="42" cy="46" rx="17" ry="9"/>
    <ellipse cx="78" cy="46" rx="17" ry="9"/>
    <ellipse cx="47" cy="62" rx="12" ry="9" transform="rotate(-30 47 62)"/>
    <ellipse cx="73" cy="62" rx="12" ry="9" transform="rotate(30 73 62)"/></g>
  <circle cx="60" cy="50" r="11" fill="#1a1030" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="56" cy="48" r="3.6" fill="#fff"/><circle cx="56" cy="48" r="1.8" fill="${OL}"/>
  <circle cx="65" cy="48" r="3.6" fill="#fff"/><circle cx="65" cy="48" r="1.8" fill="${OL}"/>
  <path d="M56 56 q4 3 8 0" fill="none" stroke="#c4a8f0" stroke-width="1.8" stroke-linecap="round"/>
  <!-- stardust pollen -->
  <g fill="#e6d8ff" class="glowpulse"><circle cx="34" cy="30" r="2"/><circle cx="88" cy="34" r="1.8"/><circle cx="72" cy="20" r="1.5"/></g>`;

})(window.CRITTER_ART);
