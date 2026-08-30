// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 15
//  The algebra-gated creatures of "The Scales of Aequor". Each design carries
//  the idea it guards: balanced pans, gathered tallies, a mirrored body,
//  bracket wings sharing out, and the Great Scale itself.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // ------------------------------------------------------------- Balanx
  //  A sprite carrying a perfectly level pair of scales (two-step: do the
  //  same to both sides).
  A.balanx = `
  <defs>
    <linearGradient id="bx-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff6cf"/><stop offset="55%" stop-color="#e0c98f"/><stop offset="100%" stop-color="#a89060"/></linearGradient>
    <radialGradient id="bx-a" cx="50%" cy="46%" r="60%">
      <stop offset="0%" stop-color="#fff2b0" stop-opacity=".45"/><stop offset="100%" stop-color="#fff2b0" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="52" fill="url(#bx-a)"/>
  <ellipse cx="60" cy="106" rx="20" ry="4.5" fill="#000" opacity=".15"/>
  <!-- the beam and two level pans -->
  <path d="M18 40 H102" stroke="${OL}" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M60 40 V26" stroke="${OL}" stroke-width="3"/>
  <g stroke="${OL}" stroke-width="1.8" fill="none">
    <path d="M22 40 L18 52 M22 40 L26 52"/><path d="M98 40 L94 52 M98 40 L102 52"/></g>
  <g fill="#cbb98f" stroke="${OL}" stroke-width="2.2">
    <path d="M8 52 h28 a14 8 0 0 1 -28 0 Z"/><path d="M84 52 h28 a14 8 0 0 1 -28 0 Z"/></g>
  <circle cx="22" cy="47" r="3" fill="#a678c9"/><circle cx="98" cy="47" r="3" fill="#a678c9"/>
  <!-- the little keeper itself, hanging from the middle -->
  <ellipse cx="60" cy="76" rx="19" ry="20" fill="url(#bx-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="22" r="6" fill="#ffd94d" stroke="${OL}" stroke-width="2.2" class="glowpulse"/>
  <circle cx="53" cy="72" r="5" fill="#fff"/><circle cx="53" cy="72" r="2.4" fill="${OL}"/>
  <circle cx="68" cy="72" r="5" fill="#fff"/><circle cx="68" cy="72" r="2.4" fill="${OL}"/>
  <path d="M54 84 q6 5 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3" stroke-linecap="round"><path d="M53 95 l-3 8 M68 95 l3 8"/></g>
  <text x="30" y="70" font-size="13" font-weight="800" fill="#a89060">=</text>`;

  // ------------------------------------------------------------- Tallyx
  //  A beetle whose shell is a gathered tally (combining like terms).
  A.tallyx = `
  <defs><linearGradient id="tl-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#a4d17a"/><stop offset="55%" stop-color="#5f9a45"/><stop offset="100%" stop-color="#3a6b2c"/></linearGradient></defs>
  <ellipse cx="60" cy="102" rx="26" ry="4.5" fill="#000" opacity=".16"/>
  <!-- legs -->
  <g stroke="#3a6b2c" stroke-width="3.6" stroke-linecap="round">
    <path d="M36 74 l-14 6 M36 84 l-13 10 M84 74 l14 6 M84 84 l13 10"/></g>
  <!-- shell -->
  <ellipse cx="60" cy="76" rx="28" ry="24" fill="url(#tl-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M60 52 V100" stroke="${OL}" stroke-width="2.2" opacity=".55"/>
  <!-- tally marks gathered into one group of five -->
  <g stroke="#f4ffe6" stroke-width="3" stroke-linecap="round">
    <path d="M44 64 v18 M50 64 v18 M56 64 v18 M62 64 v18"/><path d="M41 82 L66 62"/></g>
  <g stroke="#f4ffe6" stroke-width="3" stroke-linecap="round" opacity=".55">
    <path d="M74 68 v12 M80 68 v12"/></g>
  <!-- head -->
  <circle cx="60" cy="42" r="15" fill="url(#tl-b)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M51 30 l-6 -12 10 8 Z M69 30 l6 -12 -10 8 Z" fill="#3a6b2c" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="45" cy="17" r="2.6" fill="#d8f0b8"/><circle cx="75" cy="17" r="2.6" fill="#d8f0b8"/>
  <circle cx="55" cy="41" r="4.4" fill="#fff"/><circle cx="55" cy="41" r="2.2" fill="${OL}"/>
  <circle cx="66" cy="41" r="4.4" fill="#fff"/><circle cx="66" cy="41" r="2.2" fill="${OL}"/>
  <path d="M56 50 q5 3 9 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>`;

  // ----------------------------------------------------------- Mirrolyn
  //  A deer that is identical above and below a mirror line (both sides).
  A.mirrolyn = `
  <defs>
    <linearGradient id="ml-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eafaff"/><stop offset="55%" stop-color="#8fd0f5"/><stop offset="100%" stop-color="#4a8fc0"/></linearGradient>
    <linearGradient id="ml-r" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#eafaff"/><stop offset="55%" stop-color="#8fd0f5"/><stop offset="100%" stop-color="#4a8fc0"/></linearGradient>
  </defs>
  <!-- the mirror line -->
  <path d="M4 60 H116" stroke="#cfe6f5" stroke-width="3" stroke-dasharray="6 5"/>
  <!-- upper deer -->
  <g>
    <ellipse cx="56" cy="44" rx="22" ry="14" fill="url(#ml-b)" stroke="${OL}" stroke-width="2.6"/>
    <circle cx="80" cy="34" r="12" fill="url(#ml-b)" stroke="${OL}" stroke-width="2.6"/>
    <g stroke="#bfe6f7" stroke-width="2.6" fill="none" stroke-linecap="round">
      <path d="M74 24 l-4 -12 M74 18 l-8 -2 M86 24 l4 -12 M86 18 l8 -2"/></g>
    <circle cx="84" cy="33" r="3.6" fill="#fff"/><circle cx="85" cy="33" r="1.8" fill="${OL}"/>
    <g stroke="#4a8fc0" stroke-width="3.4" stroke-linecap="round"><path d="M44 56 l-3 6 M64 56 l3 6"/></g>
  </g>
  <!-- lower deer: the same, flipped -->
  <g>
    <ellipse cx="56" cy="76" rx="22" ry="14" fill="url(#ml-r)" stroke="${OL}" stroke-width="2.6" opacity=".92"/>
    <circle cx="80" cy="86" r="12" fill="url(#ml-r)" stroke="${OL}" stroke-width="2.6" opacity=".92"/>
    <g stroke="#bfe6f7" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".9">
      <path d="M74 96 l-4 12 M74 102 l-8 2 M86 96 l4 12 M86 102 l8 2"/></g>
    <circle cx="84" cy="87" r="3.6" fill="#fff"/><circle cx="85" cy="87" r="1.8" fill="${OL}"/>
    <g stroke="#4a8fc0" stroke-width="3.4" stroke-linecap="round" opacity=".9"><path d="M44 64 l-3 -6 M64 64 l3 -6"/></g>
  </g>
  <g fill="#eafffb" class="glowpulse"><circle cx="20" cy="52" r="2"/><circle cx="104" cy="68" r="1.8"/></g>`;

  // ---------------------------------------------------------- Sharewing
  //  A moth with bracket-shaped wings, handing a share to each little one.
  A.sharewing = `
  <defs><linearGradient id="sw15-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffe9c4"/><stop offset="55%" stop-color="#e0a86c"/><stop offset="100%" stop-color="#a8703a"/></linearGradient></defs>
  <ellipse cx="60" cy="104" rx="24" ry="4.5" fill="#000" opacity=".14"/>
  <!-- big curved bracket wings -->
  <path d="M40 32 C14 42 14 82 40 92" fill="none" stroke="url(#sw15-b)" stroke-width="11" stroke-linecap="round"/>
  <path d="M80 32 C106 42 106 82 80 92" fill="none" stroke="url(#sw15-b)" stroke-width="11" stroke-linecap="round"/>
  <path d="M40 38 C22 46 22 78 40 86" fill="none" stroke="#fff3d8" stroke-width="3" opacity=".6" stroke-linecap="round"/>
  <!-- the shares it is handing out, one each -->
  <g class="glowpulse">
    <circle cx="30" cy="62" r="5" fill="#ffd94d" stroke="${OL}" stroke-width="1.8"/>
    <circle cx="90" cy="62" r="5" fill="#ffd94d" stroke="${OL}" stroke-width="1.8"/></g>
  <g fill="#a8703a" opacity=".8"><circle cx="34" cy="46" r="2"/><circle cx="34" cy="78" r="2"/><circle cx="86" cy="46" r="2"/><circle cx="86" cy="78" r="2"/></g>
  <ellipse cx="60" cy="66" rx="11" ry="22" fill="url(#sw15-b)" stroke="${OL}" stroke-width="2.8"/>
  <g stroke="#a8703a" stroke-width="1.8" opacity=".7"><path d="M50 60 h20 M50 70 h20"/></g>
  <circle cx="60" cy="38" r="12" fill="url(#sw15-b)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M54 27 l-6 -11 M66 27 l6 -11" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="48" cy="16" r="2.6" fill="#ffd94d"/><circle cx="72" cy="16" r="2.6" fill="#ffd94d"/>
  <circle cx="55" cy="37" r="4" fill="#fff"/><circle cx="55" cy="37" r="2" fill="${OL}"/>
  <circle cx="65" cy="37" r="4" fill="#fff"/><circle cx="65" cy="37" r="2" fill="${OL}"/>
  <path d="M56 45 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>`;

  // ---------------------------------------------------------- Aequoron
  //  The boss: a great keeper holding up the Great Scale, perfectly level.
  A.aequoron = `
  <defs>
    <linearGradient id="aq-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff8d8"/><stop offset="45%" stop-color="#dcc07a"/><stop offset="100%" stop-color="#8a7038"/></linearGradient>
    <radialGradient id="aq-a" cx="50%" cy="44%" r="62%">
      <stop offset="0%" stop-color="#fff2b0" stop-opacity=".55"/><stop offset="100%" stop-color="#fff2b0" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="56" r="58" fill="url(#aq-a)"/>
  <ellipse cx="60" cy="110" rx="28" ry="5" fill="#000" opacity=".18"/>
  <!-- the Great Scale, held overhead and dead level -->
  <path d="M10 26 H110" stroke="${OL}" stroke-width="4" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="2" fill="none">
    <path d="M20 26 L14 40 M20 26 L26 40"/><path d="M100 26 L94 40 M100 26 L106 40"/></g>
  <g fill="#dcc07a" stroke="${OL}" stroke-width="2.4">
    <path d="M4 40 h32 a16 9 0 0 1 -32 0 Z"/><path d="M84 40 h32 a16 9 0 0 1 -32 0 Z"/></g>
  <circle cx="20" cy="35" r="3.4" fill="#a678c9" class="glowpulse"/>
  <circle cx="100" cy="35" r="3.4" fill="#a678c9" class="glowpulse"/>
  <path d="M60 26 V40" stroke="${OL}" stroke-width="3"/>
  <!-- arms holding the beam up -->
  <g stroke="url(#aq-b)" stroke-width="9" stroke-linecap="round" fill="none">
    <path d="M42 62 C34 48 30 38 26 30"/><path d="M78 62 C86 48 90 38 94 30"/></g>
  <!-- robed body -->
  <path d="M60 104 C38 104 32 82 38 64 C44 48 76 48 82 64 C88 82 82 104 60 104 Z" fill="url(#aq-b)" stroke="${OL}" stroke-width="3"/>
  <g stroke="#8a7038" stroke-width="2" opacity=".6"><path d="M44 78 h32 M42 90 h36"/></g>
  <!-- the equals sign at its heart -->
  <g stroke="#fffbe0" stroke-width="4.5" stroke-linecap="round" class="glowpulse"><path d="M50 68 h20 M50 78 h20"/></g>
  <circle cx="60" cy="48" r="17" fill="url(#aq-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="24" r="10" fill="none" stroke="#fffbe0" stroke-width="3" class="glowpulse"/>
  <circle cx="53" cy="47" r="4.8" fill="#fff"/><circle cx="53" cy="47" r="2.4" fill="${OL}"/>
  <circle cx="67" cy="47" r="4.8" fill="#fff"/><circle cx="67" cy="47" r="2.4" fill="${OL}"/>
  <path d="M54 57 q6 4 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>`;

})(window.CRITTER_ART);
