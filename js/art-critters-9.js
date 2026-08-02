// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 9
//  Sunken Sanctum natives, second-wave wild critters, and the Tideglass &
//  Clockwork quest creatures. Inner SVG on a 0 0 120 120 canvas, keyed by id.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // ---------------------------------------------------------------- Coralkit
  A.coralkit = `
  <defs><radialGradient id="ck-body" cx="45%" cy="38%" r="70%">
    <stop offset="0%" stop-color="#8fe0d6"/><stop offset="100%" stop-color="#3fa89e"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="24" ry="5" fill="#000" opacity=".15"/>
  <g fill="#ff8f6b" stroke="${OL}" stroke-width="2"><path d="M40 46 C34 32 44 28 46 40 Z"/><path d="M80 46 C86 32 76 28 74 40 Z"/><path d="M60 40 C58 26 66 26 66 38 Z"/></g>
  <ellipse cx="60" cy="72" rx="30" ry="26" fill="url(#ck-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M34 70 q-10 4 -12 12 M86 70 q10 4 12 12" fill="none" stroke="url(#ck-body)" stroke-width="7" stroke-linecap="round"/>
  <circle cx="50" cy="70" r="6" fill="#fff"/><circle cx="51" cy="71" r="3" fill="${OL}"/>
  <circle cx="70" cy="70" r="6" fill="#fff"/><circle cx="69" cy="71" r="3" fill="${OL}"/>
  <path d="M53 84 q7 5 14 0" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <g fill="#fff2c8"><circle cx="46" cy="60" r="1.6"/><circle cx="74" cy="60" r="1.6"/></g>`;

  // -------------------------------------------------------------- Gleamjelly
  A.gleamjelly = `
  <defs>
    <radialGradient id="gj-bell" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#fdfbc0"/><stop offset="55%" stop-color="#8fe6ff"/><stop offset="100%" stop-color="#4aa8d8"/></radialGradient>
    <radialGradient id="gj-glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#f4ffd0" stop-opacity=".6"/><stop offset="100%" stop-color="#f4ffd0" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="56" r="46" fill="url(#gj-glow)"/>
  <path d="M28 58 C28 30 92 30 92 58 C92 66 84 68 80 62 C76 70 68 70 64 62 C60 70 52 70 48 62 C44 70 36 70 32 62 C28 66 28 62 28 58 Z"
        fill="url(#gj-bell)" stroke="${OL}" stroke-width="2.8"/>
  <g stroke="#8fd6f0" stroke-width="2" fill="none" stroke-linecap="round" class="sway" opacity=".9">
    <path d="M40 64 C38 82 42 96 40 108"/><path d="M52 66 C50 86 54 100 52 112"/><path d="M60 66 C60 88 60 100 60 112"/><path d="M68 66 C70 86 66 100 68 112"/><path d="M80 64 C82 82 78 96 80 108"/>
  </g>
  <circle cx="52" cy="52" r="4.6" fill="#fff"/><circle cx="52" cy="52" r="2.3" fill="${OL}"/>
  <circle cx="68" cy="52" r="4.6" fill="#fff"/><circle cx="68" cy="52" r="2.3" fill="${OL}"/>
  <path d="M54 60 q6 4 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#fffde0" class="glowpulse"><circle cx="44" cy="46" r="2"/><circle cx="76" cy="46" r="2"/></g>`;

  // ------------------------------------------------------------------ Anglow
  A.anglow = `
  <defs>
    <radialGradient id="an-body" cx="45%" cy="42%" r="70%">
      <stop offset="0%" stop-color="#4a4468"/><stop offset="100%" stop-color="#221d3a"/></radialGradient>
    <radialGradient id="an-lure" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#fff7c0"/><stop offset="100%" stop-color="#ffd94d" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="46" cy="40" r="26" fill="url(#an-lure)"/>
  <ellipse cx="62" cy="104" rx="24" ry="5" fill="#000" opacity=".18"/>
  <path d="M92 92 C104 86 104 70 94 66 C98 78 90 86 82 84 Z" fill="url(#an-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="62" cy="74" rx="34" ry="26" fill="url(#an-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M44 66 C38 46 44 40 48 44" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="47" cy="40" r="6" fill="#fff7c0" stroke="${OL}" stroke-width="2" class="glowpulse"/>
  <path d="M40 82 L48 78 L46 86 L54 82 L52 90 L60 86" fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="58" cy="66" r="6.5" fill="#fff"/><circle cx="59" cy="67" r="3.2" fill="${OL}"/>
  <g fill="#9fe0ff" opacity=".7"><circle cx="76" cy="64" r="1.6"/><circle cx="82" cy="74" r="1.4"/></g>`;

  // --------------------------------------------------------------- Tidesprite
  A.tidesprite = `
  <defs><radialGradient id="ts9-body" cx="45%" cy="38%" r="72%">
    <stop offset="0%" stop-color="#bff0ff"/><stop offset="60%" stop-color="#5fc4e6"/><stop offset="100%" stop-color="#3f8fc0"/></radialGradient></defs>
  <ellipse cx="60" cy="106" rx="18" ry="4" fill="#000" opacity=".14"/>
  <path d="M60 96 C40 96 34 74 40 56 C46 40 74 40 80 56 C86 74 80 96 60 96 Z" fill="url(#ts9-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 58 C28 52 24 60 30 68 C34 62 40 62 44 66" fill="url(#ts9-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M80 58 C92 52 96 60 90 68 C86 62 80 62 76 66" fill="url(#ts9-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M52 34 C54 24 66 24 68 34 C64 30 56 30 52 34 Z" fill="#8fe0ff" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="52" cy="64" r="5" fill="#fff"/><circle cx="52" cy="64" r="2.5" fill="${OL}"/>
  <circle cx="68" cy="64" r="5" fill="#fff"/><circle cx="68" cy="64" r="2.5" fill="${OL}"/>
  <path d="M54 76 q6 5 12 0" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <g fill="#eafffb" class="glowpulse"><circle cx="46" cy="50" r="1.8"/><circle cx="74" cy="50" r="1.8"/><circle cx="60" cy="88" r="1.6"/></g>`;

  // ------------------------------------------------------------------ Nautilux
  A.nautilux = `
  <defs>
    <radialGradient id="nx-shell" cx="42%" cy="40%" r="72%">
      <stop offset="0%" stop-color="#e7d6ff"/><stop offset="55%" stop-color="#a7c6e8"/><stop offset="100%" stop-color="#6f8fc0"/></radialGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="26" ry="5" fill="#000" opacity=".16"/>
  <g stroke="${OL}" stroke-width="2.4" stroke-linecap="round" fill="none">
    <path d="M40 84 q-10 6 -8 16 M48 90 q-6 8 -2 16 M56 92 q-2 10 4 16"/></g>
  <path d="M60 96 C24 96 24 44 60 40 C92 40 96 74 74 84 C60 90 44 80 48 66 C50 56 64 54 68 64"
        fill="url(#nx-shell)" stroke="${OL}" stroke-width="3"/>
  <path d="M60 92 C30 90 30 48 60 44" fill="none" stroke="#7f9ac4" stroke-width="2" opacity=".7"/>
  <path d="M70 58 C58 56 52 64 56 72 M64 48 C46 48 42 66 52 78" fill="none" stroke="#8f7fc0" stroke-width="1.8" opacity=".6"/>
  <circle cx="46" cy="74" r="6" fill="#fff" stroke="${OL}" stroke-width="1.5"/><circle cx="47" cy="75" r="3" fill="${OL}"/>
  <g fill="#fff" opacity=".85"><circle cx="52" cy="52" r="2.4"/><circle cx="72" cy="66" r="1.6"/></g>`;

  // ----------------------------------------------------------------- Maridian
  A.maridian = `
  <defs>
    <linearGradient id="md-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bff0ff"/><stop offset="55%" stop-color="#5fc0d8"/><stop offset="100%" stop-color="#2f7f9a"/></linearGradient>
    <linearGradient id="md-tail" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7fe0d0"/><stop offset="100%" stop-color="#2f9e9a"/></linearGradient>
    <radialGradient id="md-aura" cx="50%" cy="44%" r="60%">
      <stop offset="0%" stop-color="#c0fff2" stop-opacity=".5"/><stop offset="100%" stop-color="#c0fff2" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="56" r="54" fill="url(#md-aura)"/>
  <ellipse cx="60" cy="108" rx="26" ry="5" fill="#000" opacity=".16"/>
  <path d="M52 70 C46 88 40 96 52 108 C56 100 60 98 60 92 C60 98 64 100 68 108 C80 96 74 88 68 70 Z"
        fill="url(#md-tail)" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round"/>
  <path d="M44 104 C34 106 30 100 34 94 M76 104 C86 106 90 100 86 94" fill="url(#md-tail)" stroke="${OL}" stroke-width="2.2"/>
  <path d="M60 92 C44 92 42 74 46 62 C50 50 70 50 74 62 C78 74 76 92 60 92 Z" fill="url(#md-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="46" r="18" fill="url(#md-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M42 44 C34 38 34 26 40 22 C40 34 48 40 48 46 Z" fill="#7fd6cf" stroke="${OL}" stroke-width="2.2"/>
  <path d="M78 44 C86 38 86 26 80 22 C80 34 72 40 72 46 Z" fill="#7fd6cf" stroke="${OL}" stroke-width="2.2"/>
  <path d="M50 30 C54 22 66 22 70 30" fill="none" stroke="#eafffb" stroke-width="3" stroke-linecap="round"/>
  <circle cx="60" cy="24" r="3.4" fill="#fff7c0" class="glowpulse" stroke="${OL}" stroke-width="1.5"/>
  <circle cx="53" cy="46" r="4.6" fill="#fff"/><circle cx="53" cy="46" r="2.3" fill="${OL}"/>
  <circle cx="67" cy="46" r="4.6" fill="#fff"/><circle cx="67" cy="46" r="2.3" fill="${OL}"/>
  <path d="M54 56 q6 4 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>`;

  // ----------------------------------------------------------------- Thornbeak
  A.thornbeak = `
  <defs><radialGradient id="tb-body" cx="45%" cy="38%" r="70%">
    <stop offset="0%" stop-color="#9bd97a"/><stop offset="100%" stop-color="#4e9a3e"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="20" ry="4" fill="#000" opacity=".15"/>
  <path d="M74 70 C96 60 104 74 92 88 C86 78 80 78 76 82 Z" fill="#3f7d33" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="58" cy="72" rx="26" ry="24" fill="url(#tb-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 58 C42 46 52 44 54 54" fill="url(#tb-body)" stroke="${OL}" stroke-width="2.2"/>
  <path d="M50 42 l-3 -10 5 8 Z M58 40 l0 -12 5 10 Z" fill="#6fbf4f" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M38 70 L24 66 L38 76 Z" fill="#ffcf6b" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="50" cy="66" r="5.5" fill="#fff"/><circle cx="49" cy="66" r="2.7" fill="${OL}"/>
  <g stroke="${OL}" stroke-width="2.4" stroke-linecap="round"><path d="M52 94 l-2 8 M66 94 l2 8"/></g>
  <g fill="#fff2c8"><circle cx="60" cy="60" r="1.4"/></g>`;

  // ---------------------------------------------------------------- Craghopper
  A.craghopper = `
  <defs><radialGradient id="cg-body" cx="45%" cy="38%" r="70%">
    <stop offset="0%" stop-color="#c3b394"/><stop offset="100%" stop-color="#8f7d5e"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="26" ry="5" fill="#000" opacity=".16"/>
  <path d="M36 76 C32 56 88 56 84 76 C84 92 36 92 36 76 Z" fill="url(#cg-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="58" cy="58" r="22" fill="url(#cg-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M42 44 C34 34 40 28 46 36 C44 42 46 46 48 48 Z" fill="#a89a80" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M74 44 C82 34 76 28 70 36 C72 42 70 46 68 48 Z" fill="#a89a80" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M50 66 C54 72 62 72 66 66" fill="#d8c9ac" stroke="${OL}" stroke-width="2"/>
  <circle cx="51" cy="56" r="5" fill="#fff"/><circle cx="52" cy="57" r="2.5" fill="${OL}"/>
  <circle cx="67" cy="56" r="5" fill="#fff"/><circle cx="66" cy="57" r="2.5" fill="${OL}"/>
  <path d="M40 72 L34 66 M80 72 L86 66" stroke="#6e604a" stroke-width="2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3.2" stroke-linecap="round"><path d="M46 90 l-2 10 M58 92 l0 10 M70 90 l2 10"/></g>`;

  // -------------------------------------------------------------- Glimmermouse
  A.glimmermouse = `
  <defs><radialGradient id="gm9-body" cx="45%" cy="40%" r="70%">
    <stop offset="0%" stop-color="#e7c6ff"/><stop offset="100%" stop-color="#a86fd6"/></radialGradient>
    <radialGradient id="gm9-glow" cx="50%" cy="55%" r="55%"><stop offset="0%" stop-color="#f2d9ff" stop-opacity=".5"/><stop offset="100%" stop-color="#f2d9ff" stop-opacity="0"/></radialGradient></defs>
  <circle cx="58" cy="70" r="40" fill="url(#gm9-glow)"/>
  <ellipse cx="60" cy="104" rx="20" ry="4" fill="#000" opacity=".15"/>
  <path d="M78 88 q18 0 22 -12 q-14 4 -20 6 Z" fill="none" stroke="#a86fd6" stroke-width="3" stroke-linecap="round"/>
  <ellipse cx="56" cy="78" rx="24" ry="18" fill="url(#gm9-body)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="52" cy="58" r="16" fill="url(#gm9-body)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="42" cy="46" r="8" fill="#e7c6ff" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="62" cy="46" r="8" fill="#e7c6ff" stroke="${OL}" stroke-width="2.2"/>
  <path d="M52 42 L50 30 L56 40 Z" fill="#f6e6ff" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <circle cx="47" cy="58" r="4" fill="#fff"/><circle cx="47" cy="58" r="2" fill="${OL}"/>
  <circle cx="59" cy="58" r="4" fill="#fff"/><circle cx="59" cy="58" r="2" fill="${OL}"/>
  <circle cx="53" cy="66" r="2.4" fill="#c76fa8"/>
  <g stroke="${OL}" stroke-width="1.4"><path d="M46 66 L34 64 M46 68 L34 70 M60 66 L72 64"/></g>
  <g fill="#fbeaff" class="glowpulse"><circle cx="42" cy="46" r="1.4"/><circle cx="62" cy="46" r="1.4"/></g>`;

  // ------------------------------------------------------------------ Sporelet
  A.sporelet = `
  <defs>
    <radialGradient id="sp-cap" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#a77fc0"/><stop offset="100%" stop-color="#6e4f8f"/></radialGradient>
    <linearGradient id="sp-stem" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eae0d0"/><stop offset="100%" stop-color="#c9bca0"/></linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="22" ry="5" fill="#000" opacity=".15"/>
  <path d="M40 78 C38 60 82 60 80 78 C80 92 40 92 40 78 Z" fill="url(#sp-stem)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M26 52 C26 30 94 30 94 52 C94 62 82 60 74 56 C68 62 52 62 46 56 C38 60 26 62 26 52 Z" fill="url(#sp-cap)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="#d8c0ee"><circle cx="42" cy="44" r="4"/><circle cx="60" cy="40" r="5"/><circle cx="78" cy="44" r="4"/><circle cx="52" cy="50" r="2.6"/><circle cx="70" cy="50" r="2.6"/></g>
  <circle cx="52" cy="74" r="4.4" fill="#fff"/><circle cx="52" cy="74" r="2.1" fill="${OL}"/>
  <circle cx="68" cy="74" r="4.4" fill="#fff"/><circle cx="68" cy="74" r="2.1" fill="${OL}"/>
  <path d="M55 82 q5 4 10 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#c8ffc0" class="glowpulse" opacity=".9"><circle cx="34" cy="66" r="1.8"/><circle cx="86" cy="66" r="1.8"/></g>`;

  // ------------------------------------------------------------------ Windrake
  A.windrake = `
  <defs><linearGradient id="wd-body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#dff0f6"/><stop offset="60%" stop-color="#9fc4d6"/><stop offset="100%" stop-color="#6f97b0"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="20" ry="4" fill="#000" opacity=".14"/>
  <g stroke="${OL}" stroke-width="2.6" stroke-linejoin="round" fill="url(#wd-body)">
    <path d="M52 60 C24 40 12 54 20 72 C30 66 42 64 52 68 Z"/>
    <path d="M68 60 C96 40 108 54 100 72 C90 66 78 64 68 68 Z"/></g>
  <g stroke="#7f9ac4" stroke-width="1.6" fill="none"><path d="M28 56 l6 8 M86 56 l-6 8"/></g>
  <path d="M78 84 C94 82 98 70 92 64 C90 74 82 78 74 78 Z" fill="url(#wd-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="58" cy="76" rx="20" ry="16" fill="url(#wd-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="52" cy="56" r="16" fill="url(#wd-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M44 42 l-2 -12 6 10 Z M60 42 l2 -12 4 10 Z" fill="#9fc4d6" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <circle cx="47" cy="56" r="4.6" fill="#fff"/><circle cx="48" cy="57" r="2.3" fill="${OL}"/>
  <circle cx="59" cy="56" r="4.6" fill="#fff"/><circle cx="58" cy="57" r="2.3" fill="${OL}"/>
  <path d="M46 64 q6 4 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="2.6" stroke-linecap="round"><path d="M52 90 l-2 8 M64 90 l2 8"/></g>`;

  // ------------------------------------------------------------------- Gillfin
  A.gillfin = `
  <defs><linearGradient id="gf-body" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7fb0ad"/><stop offset="60%" stop-color="#4a8f8a"/><stop offset="100%" stop-color="#2f6f6d"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="26" ry="5" fill="#000" opacity=".18"/>
  <path d="M60 96 C36 96 30 72 36 54 C42 38 78 38 84 54 C90 72 84 96 60 96 Z" fill="url(#gf-body)" stroke="${OL}" stroke-width="3"/>
  <path d="M36 58 L20 48 L26 62 L18 74 L34 70 Z" fill="#5f918e" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M84 58 L100 48 L94 62 L102 74 L86 70 Z" fill="#5f918e" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M46 40 L44 26 L52 38 M74 40 L76 26 L68 38" fill="#98c6c2" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <rect x="46" y="70" width="28" height="6" rx="3" fill="#2f6f6d" opacity=".5"/>
  <path d="M48 64 L52 68 L48 72 M72 64 L68 68 L72 72" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <circle cx="50" cy="60" r="6" fill="#fff"/><circle cx="51" cy="61" r="3" fill="${OL}"/>
  <circle cx="70" cy="60" r="6" fill="#fff"/><circle cx="69" cy="61" r="3" fill="${OL}"/>
  <path d="M50 82 q10 5 20 0" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <g fill="#bfe6df" opacity=".7"><circle cx="60" cy="50" r="2"/></g>`;

  // ----------------------------------------------------------------- Abyssalux
  A.abyssalux = `
  <defs>
    <radialGradient id="ab-body" cx="45%" cy="40%" r="72%">
      <stop offset="0%" stop-color="#3f5f8a"/><stop offset="70%" stop-color="#1f3a68"/><stop offset="100%" stop-color="#111f3e"/></radialGradient>
    <radialGradient id="ab-glow" cx="50%" cy="46%" r="62%">
      <stop offset="0%" stop-color="#9ff0ff" stop-opacity=".55"/><stop offset="100%" stop-color="#9ff0ff" stop-opacity="0"/></radialGradient>
    <radialGradient id="ab-lure" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#eafffb"/><stop offset="100%" stop-color="#5fe0ff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="58" fill="url(#ab-glow)"/>
  <ellipse cx="60" cy="108" rx="30" ry="5" fill="#000" opacity=".2"/>
  <path d="M86 92 C110 84 110 62 96 56 C102 74 92 86 80 84 Z" fill="url(#ab-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M60 98 C30 98 22 68 30 46 C38 26 82 26 90 46 C98 68 90 98 60 98 Z" fill="url(#ab-body)" stroke="${OL}" stroke-width="3"/>
  <g fill="none" stroke="#5fe0ff" stroke-width="2" opacity=".8" class="glowpulse"><path d="M40 64 h40 M38 74 h44 M44 84 h32"/></g>
  <path d="M46 42 C40 20 46 12 52 20 C50 30 52 38 54 42" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <circle cx="52" cy="18" r="7" fill="url(#ab-lure)"/><circle cx="52" cy="18" r="4" fill="#eafffb" class="glowpulse" stroke="${OL}" stroke-width="1.6"/>
  <path d="M42 78 L50 72 L48 82 L58 76 L56 86 L66 80 L64 90 L74 84" fill="none" stroke="#eafffb" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/>
  <circle cx="54" cy="52" r="7" fill="#fff"/><circle cx="55" cy="53" r="3.4" fill="${OL}"/>
  <circle cx="74" cy="54" r="5.5" fill="#fff"/><circle cx="74" cy="55" r="2.7" fill="${OL}"/>
  <g fill="#9ff0ff"><circle cx="34" cy="52" r="1.8"/><circle cx="88" cy="56" r="1.8"/></g>`;

  // ----------------------------------------------------------------- Cogsprite
  A.cogsprite = `
  <defs>
    <linearGradient id="cs-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#f0d78f"/><stop offset="100%" stop-color="#c69a3c"/></linearGradient>
    <radialGradient id="cs-glow" cx="50%" cy="50%" r="55%"><stop offset="0%" stop-color="#fff2b0" stop-opacity=".55"/><stop offset="100%" stop-color="#fff2b0" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="60" r="42" fill="url(#cs-glow)"/>
  <ellipse cx="60" cy="104" rx="20" ry="4" fill="#000" opacity=".16"/>
  <g fill="#b98a2c" stroke="${OL}" stroke-width="2" transform="translate(60 40)">
    <g><path d="M0 -22 L4 -16 L-4 -16 Z"/><path d="M0 22 L4 16 L-4 16 Z"/><path d="M22 0 L16 4 L16 -4 Z"/><path d="M-22 0 L-16 4 L-16 -4 Z"/>
    <path d="M15 -15 L16 -8 L8 -16 Z"/><path d="M-15 15 L-16 8 L-8 16 Z"/><path d="M15 15 L8 16 L16 8 Z"/><path d="M-15 -15 L-8 -16 L-16 -8 Z"/></g>
    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="9s" repeatCount="indefinite" additive="sum"/>
  </g>
  <circle cx="60" cy="40" r="15" fill="url(#cs-body)" stroke="${OL}" stroke-width="2.6"/>
  <ellipse cx="60" cy="74" rx="22" ry="18" fill="url(#cs-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="74" r="7" fill="#fff2b0" stroke="${OL}" stroke-width="2" class="glowpulse"/>
  <path d="M60 74 L60 68 M60 74 L65 76" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <circle cx="54" cy="38" r="4" fill="#fff"/><circle cx="54" cy="38" r="2" fill="${OL}"/>
  <circle cx="66" cy="38" r="4" fill="#fff"/><circle cx="66" cy="38" r="2" fill="${OL}"/>
  <path d="M56 46 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3" stroke-linecap="round"><path d="M50 90 l-2 8 M70 90 l2 8"/></g>`;

  // ----------------------------------------------------------------- Aurumaton
  A.aurumaton = `
  <defs>
    <linearGradient id="au-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ffe9a8"/><stop offset="55%" stop-color="#e6b52c"/><stop offset="100%" stop-color="#b98a1c"/></linearGradient>
    <radialGradient id="au-heart" cx="50%" cy="50%" r="55%"><stop offset="0%" stop-color="#fffbe0"/><stop offset="55%" stop-color="#ffd94d"/><stop offset="100%" stop-color="#ff9a3a"/></radialGradient>
    <radialGradient id="au-aura" cx="50%" cy="46%" r="62%"><stop offset="0%" stop-color="#fff2b0" stop-opacity=".55"/><stop offset="100%" stop-color="#fff2b0" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="56" r="56" fill="url(#au-aura)"/>
  <ellipse cx="60" cy="108" rx="28" ry="5" fill="#000" opacity=".18"/>
  <g fill="#c69a2c" stroke="${OL}" stroke-width="2" transform="translate(60 20)">
    <g><path d="M0 -14 L3 -9 L-3 -9 Z"/><path d="M14 0 L9 3 L9 -3 Z"/><path d="M-14 0 L-9 3 L-9 -3 Z"/><path d="M10 -10 L10 -4 L4 -10 Z"/><path d="M-10 -10 L-4 -10 L-10 -4 Z"/></g>
    <animateTransform attributeName="transform" type="rotate" values="0;360" dur="8s" repeatCount="indefinite" additive="sum"/>
  </g>
  <circle cx="60" cy="20" r="9" fill="url(#au-body)" stroke="${OL}" stroke-width="2.4"/>
  <g stroke="${OL}" stroke-width="2.6" stroke-linecap="round" fill="url(#au-body)">
    <path d="M34 96 L28 108 L40 104 M86 96 L92 108 L80 104"/></g>
  <path d="M40 92 L34 60 L44 48 L76 48 L86 60 L80 92 Z" fill="url(#au-body)" stroke="${OL}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M60 62 L50 74 L60 88 L70 74 Z" fill="url(#au-heart)" stroke="${OL}" stroke-width="2.4" class="glowpulse"/>
  <circle cx="60" cy="42" r="15" fill="url(#au-body)" stroke="${OL}" stroke-width="2.8"/>
  <rect x="48" y="40" width="24" height="7" rx="3.5" fill="#fffbe0" stroke="${OL}" stroke-width="2"/>
  <circle cx="54" cy="43" r="2.4" fill="#ff9a3a"/><circle cx="66" cy="43" r="2.4" fill="#ff9a3a"/>
  <path d="M54 52 q6 3 12 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#fffbe0" class="glowpulse"><circle cx="34" cy="56" r="2"/><circle cx="86" cy="56" r="2"/></g>`;

})(window.CRITTER_ART);
