// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 11
//  The PARADOX CREATURES of Paradoxis. Impossible things drawn as impossibly
//  as SVG allows, with a magenta paradox aura + glitch marks tying them into a
//  set. Inner SVG on a 0 0 120 120 canvas, keyed by id.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";
  // a shared magenta paradox aura + glitch flecks
  function aura(id) {
    return `<defs><radialGradient id="${id}-aura" cx="50%" cy="46%" r="60%">
      <stop offset="0%" stop-color="#e79bff" stop-opacity=".5"/><stop offset="100%" stop-color="#e79bff" stop-opacity="0"/></radialGradient></defs>
      <circle cx="60" cy="58" r="56" fill="url(#${id}-aura)"/>
      <g fill="#c026d3" opacity=".8"><rect x="14" y="30" width="4" height="4"/><rect x="102" y="40" width="4" height="4"/><rect x="20" y="86" width="3" height="3"/><rect x="98" y="82" width="3" height="3"/></g>`;
  }

  // -------------------------------------------------------- ★ PARADOX PANTS ★
  A.paradoxpants = `
  ${aura("pp")}
  <ellipse cx="60" cy="108" rx="26" ry="5" fill="#000" opacity=".16"/>
  <!-- motion swooshes: it's flailing everywhere at once -->
  <g stroke="#c026d3" stroke-width="3" fill="none" stroke-linecap="round" opacity=".65">
    <path d="M24 40 q-8 6 -6 16"/><path d="M98 44 q8 6 6 16"/><path d="M30 92 q-6 8 2 14"/><path d="M92 94 q6 6 -2 14"/>
  </g>
  <!-- waistband -->
  <rect x="40" y="30" width="40" height="18" rx="5" fill="#5b7fd4" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="31" rx="18" ry="5" fill="#20305a"/>
  <rect x="40" y="40" width="40" height="5" fill="#3a2b28" opacity=".25"/>
  <path d="M44 44 h32" stroke="#c9a24a" stroke-width="2.4"/>
  <rect x="56" y="41" width="8" height="7" rx="1.5" fill="#c9a24a" stroke="${OL}" stroke-width="1.6"/>
  <!-- LEFT leg: kicking wildly up and out -->
  <path d="M44 46 C30 52 18 44 12 30 C10 36 12 46 22 54 C34 62 42 60 48 58 Z" fill="#5b7fd4" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round"/>
  <path d="M12 30 l-8 -4 10 -2 Z" fill="#3a2b28"/>
  <path d="M22 40 l16 8" stroke="#20305a" stroke-width="1.6" opacity=".5"/>
  <!-- RIGHT leg: mismatched purple, cartwheeling down and out -->
  <path d="M76 46 C90 56 96 78 88 98 C94 92 100 78 98 62 C96 50 86 46 72 50 Z" fill="#9a52d6" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round"/>
  <path d="M88 98 l2 10 6 -8 Z" fill="#3a2b28"/>
  <path d="M84 60 l-8 -8" stroke="#5f2f96" stroke-width="1.6" opacity=".5"/>
  <!-- patch + stitching for maximum chaos -->
  <rect x="60" y="70" width="12" height="12" rx="2" fill="#e6c229" stroke="${OL}" stroke-width="1.8" transform="rotate(18 66 76)"/>
  <g stroke="#fff" stroke-width="1.2" opacity=".6"><path d="M14 44 l4 4 M30 50 l4 3"/></g>
  <!-- googly eyes bouncing above the waistband: the only 'face' it has -->
  <g><circle cx="52" cy="20" r="8" fill="#fff" stroke="${OL}" stroke-width="2.4"/><circle cx="49" cy="22" r="3.4" fill="${OL}"/></g>
  <g><circle cx="70" cy="16" r="8" fill="#fff" stroke="${OL}" stroke-width="2.4"/><circle cx="73" cy="14" r="3.4" fill="${OL}"/></g>
  <path d="M52 12 l-3 -6 M70 8 l3 -5" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <text x="34" y="26" font-size="13" fill="#c026d3" class="glowpulse">⧉</text>`;

  // ------------------------------------------------------------------ Mobiun
  A.mobiun = `
  ${aura("mb")}
  <defs><linearGradient id="mb-w" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#f2d16b"/><stop offset="50%" stop-color="#c58fe0"/><stop offset="100%" stop-color="#7d6b9e"/></linearGradient></defs>
  <ellipse cx="60" cy="104" rx="18" ry="4" fill="#000" opacity=".14"/>
  <!-- a mobius half-twist band as the wings -->
  <path d="M40 66 C14 66 14 40 40 42 C58 43 60 60 60 60 C60 60 62 77 82 78 C108 79 108 53 82 54 C64 55 60 60 60 60 C60 60 58 66 40 66 Z"
        fill="none" stroke="url(#mb-w)" stroke-width="11" stroke-linejoin="round"/>
  <path d="M40 66 C14 66 14 40 40 42 C58 43 60 60 60 60" fill="none" stroke="${OL}" stroke-width="1.6" opacity=".4"/>
  <ellipse cx="60" cy="64" rx="8" ry="16" fill="#6f5f92" stroke="${OL}" stroke-width="2.4"/>
  <path d="M60 48 l-6 -12 M60 48 l6 -12" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <circle cx="54" cy="36" r="2.4" fill="#f2d16b"/><circle cx="66" cy="36" r="2.4" fill="#c58fe0"/>
  <circle cx="56" cy="60" r="3" fill="#fff"/><circle cx="56" cy="60" r="1.5" fill="${OL}"/>
  <circle cx="64" cy="60" r="3" fill="#fff"/><circle cx="64" cy="60" r="1.5" fill="${OL}"/>
  <text x="20" y="30" font-size="12" fill="#c026d3" class="glowpulse">∞</text>`;

  // ------------------------------------------------------------------ Zenolo
  A.zenolo = `
  ${aura("zn")}
  <defs><radialGradient id="zn-b" cx="45%" cy="38%" r="70%"><stop offset="0%" stop-color="#dfe6ee"/><stop offset="100%" stop-color="#9fb0c4"/></radialGradient></defs>
  <ellipse cx="62" cy="104" rx="22" ry="4" fill="#000" opacity=".14"/>
  <!-- halving arrows -->
  <g stroke="#c026d3" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".7"><path d="M6 60 h14 M24 60 h9 M37 60 h5"/><path d="M40 58 l4 2 -4 2"/></g>
  <ellipse cx="64" cy="74" rx="26" ry="22" fill="url(#zn-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="66" cy="54" r="17" fill="url(#zn-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M56 40 C52 22 60 20 62 38 Z M74 40 C78 22 70 20 68 38 Z" fill="#c8d4e0" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M58 38 C56 26 60 26 61 37 M72 38 C74 26 70 26 69 37" fill="#e79bff" opacity=".6"/>
  <circle cx="61" cy="54" r="4.4" fill="#fff"/><circle cx="61" cy="54" r="2.2" fill="${OL}"/>
  <circle cx="71" cy="54" r="4.4" fill="#fff"/><circle cx="71" cy="54" r="2.2" fill="${OL}"/>
  <circle cx="66" cy="61" r="2.4" fill="#e79bff"/>
  <g stroke="${OL}" stroke-width="1.4"><path d="M60 62 l-10 -1 M60 64 l-10 3 M72 62 l10 -1"/></g>
  <text x="12" y="80" font-size="11" fill="#c026d3">½</text>`;

  // ----------------------------------------------------------------- Ouroboan
  A.ouroboan = `
  ${aura("ob")}
  <defs><linearGradient id="ob-b" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#f2a03a"/><stop offset="55%" stop-color="#b0472a"/><stop offset="100%" stop-color="#4a2340"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="24" ry="4.5" fill="#000" opacity=".16"/>
  <!-- a ring: the serpent biting its own tail -->
  <circle cx="60" cy="60" r="34" fill="none" stroke="url(#ob-b)" stroke-width="15"/>
  <circle cx="60" cy="60" r="34" fill="none" stroke="${OL}" stroke-width="1.6" opacity=".35" stroke-dasharray="4 6"/>
  <g fill="#ffb45c" opacity=".55"><circle cx="60" cy="26" r="2"/><circle cx="90" cy="52" r="2"/><circle cx="82" cy="86" r="2"/><circle cx="34" cy="80" r="2"/><circle cx="28" cy="46" r="2"/></g>
  <!-- head at top-left biting the tail that meets it -->
  <path d="M40 40 C28 34 22 44 30 52 C36 46 44 46 48 50 Z" fill="url(#ob-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M30 52 l-6 2 4 4 Z" fill="#ffd94d"/>
  <path d="M40 44 l-6 -2 M44 42 l-3 -6" stroke="${OL}" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="40" cy="43" r="3.6" fill="#fff"/><circle cx="40" cy="43" r="1.8" fill="${OL}"/>
  <text x="54" y="66" font-size="16" fill="#c026d3" class="glowpulse" text-anchor="middle">⧉</text>`;

  // ----------------------------------------------------------------- Kleinkoi
  A.kleinkoi = `
  ${aura("kk")}
  <defs><linearGradient id="kk-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#bfe6f7"/><stop offset="60%" stop-color="#4aa3df"/><stop offset="100%" stop-color="#8f52d6"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="22" ry="4.5" fill="#000" opacity=".15"/>
  <!-- a klein-bottle silhouette: neck loops back into the body -->
  <path d="M46 96 C30 96 30 60 46 56 C58 53 60 46 54 40 C46 32 60 22 70 30 C82 40 74 52 66 56 C58 60 66 66 74 66 C90 66 90 96 60 96 Z"
        fill="url(#kk-b)" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round"/>
  <path d="M54 40 C46 32 60 22 70 30" fill="none" stroke="#eafffb" stroke-width="2" opacity=".5"/>
  <!-- tail fins -->
  <path d="M46 76 L30 68 L34 82 L28 92 L44 88 Z" fill="#6fb0e0" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="66" cy="74" r="5" fill="#fff"/><circle cx="67" cy="75" r="2.5" fill="${OL}"/>
  <path d="M56 84 q8 4 16 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#eafffb" opacity=".7"><circle cx="52" cy="66" r="1.6"/><circle cx="76" cy="80" r="1.4"/></g>
  <text x="60" y="20" font-size="11" fill="#c026d3" text-anchor="middle">∅</text>`;

  // ----------------------------------------------------------------- Chronope
  A.chronope = `
  ${aura("cn")}
  <defs><linearGradient id="cn-b" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#e7cf8f"/><stop offset="100%" stop-color="#a8823c"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="24" ry="5" fill="#000" opacity=".16"/>
  <!-- clock-body -->
  <rect x="40" y="40" width="40" height="56" rx="8" fill="url(#cn-b)" stroke="${OL}" stroke-width="2.8"/>
  <rect x="44" y="30" width="32" height="12" rx="4" fill="#8f6f2c" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="60" cy="58" r="15" fill="#fdf6e0" stroke="${OL}" stroke-width="2.6"/>
  <!-- hands pointing both ways (time runs both directions) -->
  <path d="M60 58 L60 47 M60 58 L69 58" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M60 58 L52 64" stroke="#c026d3" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="${OL}"><circle cx="60" cy="45" r="1.2"/><circle cx="73" cy="58" r="1.2"/><circle cx="60" cy="71" r="1.2"/><circle cx="47" cy="58" r="1.2"/></g>
  <circle cx="60" cy="58" r="2" fill="${OL}"/>
  <!-- pendulum + little feet -->
  <path d="M60 73 L60 88" stroke="${OL}" stroke-width="2"/><circle cx="60" cy="90" r="5" fill="#c9a24a" stroke="${OL}" stroke-width="2"><animateTransform attributeName="transform" type="rotate" values="-8 60 73;8 60 73;-8 60 73" dur="2s" repeatCount="indefinite"/></circle>
  <circle cx="52" cy="36" r="3.4" fill="#fff"/><circle cx="52" cy="36" r="1.7" fill="${OL}"/>
  <circle cx="68" cy="36" r="3.4" fill="#fff"/><circle cx="68" cy="36" r="1.7" fill="${OL}"/>
  <g stroke="${OL}" stroke-width="3" stroke-linecap="round"><path d="M48 96 l-3 6 M72 96 l3 6"/></g>`;

  // ----------------------------------------------------------------- Quandril
  A.quandril = `
  ${aura("qd")}
  <defs><radialGradient id="qd-b" cx="50%" cy="40%" r="70%"><stop offset="0%" stop-color="#e6a8d8"/><stop offset="100%" stop-color="#a05a92"/></radialGradient></defs>
  <ellipse cx="60" cy="105" rx="24" ry="5" fill="#000" opacity=".16"/>
  <ellipse cx="60" cy="76" rx="28" ry="24" fill="url(#qd-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- two heads that disagree -->
  <circle cx="44" cy="50" r="15" fill="url(#qd-b)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="76" cy="50" r="15" fill="url(#qd-b)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M36 38 l-3 -10 8 8 Z M52 38 l3 -10 -8 8 Z" fill="#a05a92" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M68 38 l-3 -10 8 8 Z M84 38 l3 -10 -8 8 Z" fill="#a05a92" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <circle cx="40" cy="50" r="4" fill="#fff"/><circle cx="41" cy="50" r="2" fill="${OL}"/>
  <circle cx="48" cy="50" r="4" fill="#fff"/><circle cx="47" cy="50" r="2" fill="${OL}"/>
  <circle cx="72" cy="50" r="4" fill="#fff"/><circle cx="73" cy="50" r="2" fill="${OL}"/>
  <circle cx="80" cy="50" r="4" fill="#fff"/><circle cx="79" cy="50" r="2" fill="${OL}"/>
  <path d="M40 58 q4 3 8 1" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <path d="M72 60 q4 -3 8 -1" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <text x="60" y="80" font-size="18" fill="#fff" text-anchor="middle" font-weight="800">?</text>
  <g stroke="${OL}" stroke-width="3" stroke-linecap="round"><path d="M50 98 l-2 6 M70 98 l2 6"/></g>`;

  // ------------------------------------------------------------------ Nullkin
  A.nullkin = `
  ${aura("nk")}
  <defs><radialGradient id="nk-b" cx="50%" cy="42%" r="65%"><stop offset="0%" stop-color="#cfc4e6" stop-opacity=".9"/><stop offset="100%" stop-color="#6b5f8f" stop-opacity=".55"/></radialGradient></defs>
  <ellipse cx="60" cy="102" rx="18" ry="4" fill="#000" opacity=".1"/>
  <!-- half-there ghost body: dashed where it isn't -->
  <path d="M38 74 C36 46 84 46 82 74 C82 92 74 96 68 88 C64 96 56 96 52 88 C46 96 38 92 38 74 Z"
        fill="url(#nk-b)" stroke="${OL}" stroke-width="2.6" stroke-dasharray="7 5"/>
  <path d="M60 48 C74 48 82 60 82 74" fill="none" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="52" cy="66" r="4.6" fill="#fff"/><circle cx="52" cy="66" r="2.3" fill="${OL}"/>
  <circle cx="68" cy="66" r="4.6" fill="#fff" opacity=".5"/><circle cx="68" cy="66" r="2.3" fill="${OL}" opacity=".5"/>
  <path d="M54 78 q6 3 12 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round" opacity=".7"/>
  <g fill="#e79bff" class="glowpulse"><circle cx="44" cy="52" r="2"/><circle cx="78" cy="54" r="1.6"/></g>
  <text x="60" y="42" font-size="12" fill="#c026d3" text-anchor="middle">?</text>`;

  // ------------------------- THE GUARDIAN OF PARADOXIS ------------------
  //  Not a catchable creature — the boss that guards the way in. Keyed here so
  //  the battle screen can render it; never added to CREATURES/the Critterdex.
  A.guardian = `
  <defs>
    <radialGradient id="gd-aura" cx="50%" cy="46%" r="62%">
      <stop offset="0%" stop-color="#e79bff" stop-opacity=".55"/><stop offset="100%" stop-color="#e79bff" stop-opacity="0"/></radialGradient>
    <linearGradient id="gd-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#5b2f8a"/><stop offset="55%" stop-color="#3a1d5c"/><stop offset="100%" stop-color="#1f0f33"/></linearGradient>
    <radialGradient id="gd-eye" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#fff"/><stop offset="45%" stop-color="#f2c4ff"/><stop offset="100%" stop-color="#c026d3"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="58" fill="url(#gd-aura)"/>
  <g fill="#c026d3" opacity=".8"><rect x="8" y="26" width="5" height="5"/><rect x="106" y="34" width="5" height="5"/><rect x="14" y="90" width="4" height="4"/><rect x="102" y="86" width="4" height="4"/><rect x="60" y="6" width="4" height="4"/></g>
  <ellipse cx="60" cy="110" rx="30" ry="5" fill="#000" opacity=".2"/>
  <!-- impossible-triangle crown -->
  <path d="M60 8 L88 54 L32 54 Z" fill="none" stroke="#c58fe0" stroke-width="6" stroke-linejoin="round"/>
  <path d="M60 8 L74 31 M88 54 L54 46 M32 54 L66 46" stroke="#7d4fb0" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- floating colossus body: a rotated impossible cube-cluster -->
  <path d="M60 40 L96 60 L96 92 L60 112 L24 92 L24 60 Z" fill="url(#gd-body)" stroke="${OL}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M60 40 L60 76 L96 92 M60 76 L24 92" fill="none" stroke="#7d4fb0" stroke-width="2" opacity=".7"/>
  <path d="M60 76 L96 60 M60 76 L24 60" fill="none" stroke="#5b3a86" stroke-width="1.8" opacity=".6"/>
  <!-- the great central eye -->
  <ellipse cx="60" cy="74" rx="16" ry="13" fill="#1a0d2e" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="60" cy="74" r="9" fill="url(#gd-eye)" class="glowpulse"/>
  <circle cx="60" cy="74" r="4" fill="#1a0d2e"/>
  <circle cx="57" cy="71" r="1.6" fill="#fff"/>
  <!-- lesser eyes blinking around it -->
  <g><circle cx="38" cy="68" r="4.5" fill="#f2c4ff" stroke="${OL}" stroke-width="1.6"/><circle cx="38" cy="68" r="2" fill="${OL}"/></g>
  <g><circle cx="82" cy="68" r="4.5" fill="#f2c4ff" stroke="${OL}" stroke-width="1.6"/><circle cx="82" cy="68" r="2" fill="${OL}"/></g>
  <g><circle cx="46" cy="94" r="4" fill="#f2c4ff" stroke="${OL}" stroke-width="1.6"/><circle cx="46" cy="94" r="1.8" fill="${OL}"/></g>
  <g><circle cx="74" cy="94" r="4" fill="#f2c4ff" stroke="${OL}" stroke-width="1.6"/><circle cx="74" cy="94" r="1.8" fill="${OL}"/></g>
  <text x="18" y="60" font-size="13" fill="#f2c4ff" class="glowpulse">⧉</text>
  <text x="98" y="100" font-size="12" fill="#f2c4ff">∞</text>`;

})(window.CRITTER_ART);
