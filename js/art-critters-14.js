// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 14
//  Fourth wave: creatures filling out the Tundra, Gleamcave, Astral Rift,
//  Glowfen Marsh and Sundune Desert, plus four quest bosses.
//  Inner SVG on a 0 0 120 120 canvas, keyed by id.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // ================================ TUNDRA ================================

  A.frostling = `
  <defs><radialGradient id="fl14-b" cx="45%" cy="38%" r="70%">
    <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#cfe6f5"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="22" ry="4.5" fill="#000" opacity=".13"/>
  <path d="M84 84 C102 78 102 62 92 58 C96 70 88 78 78 76 Z" fill="url(#fl14-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="58" cy="76" rx="26" ry="21" fill="url(#fl14-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="56" cy="54" r="19" fill="url(#fl14-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 42 l-4 -14 13 10 Z M72 42 l4 -14 -13 10 Z" fill="#e6f4fd" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M43 40 l-2 -8 6 6 Z M69 40 l2 -8 -6 6 Z" fill="#a7d4ee"/>
  <circle cx="49" cy="53" r="5" fill="#fff" stroke="${OL}" stroke-width="1.4"/><circle cx="50" cy="53" r="2.4" fill="${OL}"/>
  <circle cx="64" cy="53" r="5" fill="#fff" stroke="${OL}" stroke-width="1.4"/><circle cx="63" cy="53" r="2.4" fill="${OL}"/>
  <ellipse cx="56" cy="62" rx="3.4" ry="2.6" fill="#7fc4e0" stroke="${OL}" stroke-width="1.4"/>
  <path d="M50 68 q6 4 12 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3.4" stroke-linecap="round"><path d="M46 94 l-3 8 M68 94 l3 8"/></g>
  <g fill="#dff2fb" class="glowpulse"><circle cx="32" cy="62" r="1.8"/><circle cx="86" cy="66" r="1.5"/></g>`;

  A.nivyx = `
  <defs><linearGradient id="nv-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#eafaff"/><stop offset="55%" stop-color="#a7d9ee"/><stop offset="100%" stop-color="#5f9ec7"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="14" ry="3.5" fill="#000" opacity=".1"/>
  <!-- hanging icicle body -->
  <path d="M44 18 h32 l-6 26 L60 100 L50 44 Z" fill="url(#nv-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M60 24 L64 44 L60 92 Z" fill="#f4fdff" opacity=".8"/>
  <rect x="40" y="12" width="40" height="9" rx="4" fill="#cfe6f5" stroke="${OL}" stroke-width="2.2"/>
  <g stroke="#7fc4e0" stroke-width="1.6" opacity=".8"><path d="M52 34 l6 4 M64 46 l-5 3"/></g>
  <circle cx="53" cy="40" r="4.4" fill="#fff" stroke="${OL}" stroke-width="1.4"/><circle cx="53" cy="40" r="2.2" fill="${OL}"/>
  <circle cx="67" cy="40" r="4.4" fill="#fff" stroke="${OL}" stroke-width="1.4"/><circle cx="67" cy="40" r="2.2" fill="${OL}"/>
  <path d="M55 50 q5 4 10 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#eafaff" class="glowpulse"><circle cx="34" cy="30" r="2"/><circle cx="88" cy="34" r="1.7"/><circle cx="60" cy="106" r="1.5"/></g>`;

  A.boreath = `
  <defs><linearGradient id="br14-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#dfe9f0"/><stop offset="55%" stop-color="#9fb4c4"/><stop offset="100%" stop-color="#67798c"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="28" ry="5" fill="#000" opacity=".14"/>
  <g stroke="#eaf4fb" stroke-width="2.6" stroke-linecap="round" opacity=".85" class="sway">
    <path d="M6 44 h16 M2 58 h20 M8 72 h14"/></g>
  <path d="M32 76 C28 58 90 58 86 76 C86 92 32 92 32 76 Z" fill="url(#br14-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="80" cy="54" r="18" fill="url(#br14-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- broad elk antlers -->
  <g stroke="#cfdde8" stroke-width="4" fill="none" stroke-linecap="round">
    <path d="M70 40 C64 24 54 22 50 12 M70 40 l-12 2 M64 30 l-13 -3 M62 22 l-10 -7"/>
    <path d="M92 40 C98 24 108 22 112 12 M92 40 l12 2 M98 30 l13 -3 M100 22 l10 -7"/></g>
  <path d="M92 62 q10 2 8 10 q-8 3 -13 -3 Z" fill="#9fb4c4" stroke="${OL}" stroke-width="2"/>
  <circle cx="97" cy="65" r="1.8" fill="${OL}"/>
  <circle cx="84" cy="52" r="5" fill="#fff"/><circle cx="85" cy="52" r="2.4" fill="${OL}"/>
  <g stroke="#4f6070" stroke-width="5" stroke-linecap="round"><path d="M42 90 l-3 12 M56 92 l0 10 M70 92 l1 10 M82 88 l4 12"/></g>`;

  A.tundrox = `
  <defs><linearGradient id="tx-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d8e6ee"/><stop offset="50%" stop-color="#8f9fae"/><stop offset="100%" stop-color="#586878"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="32" ry="5" fill="#000" opacity=".18"/>
  <path d="M24 78 C18 52 100 52 94 78 C94 96 24 96 24 78 Z" fill="url(#tx-b)" stroke="${OL}" stroke-width="3"/>
  <g stroke="#eaf4fb" stroke-width="2.4" opacity=".7"><path d="M34 64 v26 M48 60 v32 M62 60 v32 M76 62 v30 M88 66 v22"/></g>
  <circle cx="38" cy="60" r="21" fill="url(#tx-b)" stroke="${OL}" stroke-width="3"/>
  <!-- curved ice-plate horns -->
  <path d="M22 50 C8 46 6 62 18 66 C18 58 20 54 26 52 Z" fill="#eafaff" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M54 50 C68 46 70 62 58 66 C58 58 56 54 50 52 Z" fill="#eafaff" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="30" cy="70" rx="7" ry="5" fill="#46545f" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="31" cy="58" r="5" fill="#fff"/><circle cx="32" cy="58" r="2.4" fill="${OL}"/>
  <circle cx="45" cy="58" r="5" fill="#fff"/><circle cx="44" cy="58" r="2.4" fill="${OL}"/>
  <g stroke="#3f4c58" stroke-width="6" stroke-linecap="round"><path d="M38 94 l-3 10 M56 96 l0 8 M76 96 l1 8 M90 92 l4 12"/></g>
  <g fill="#eafaff" class="glowpulse"><circle cx="70" cy="48" r="1.8"/><circle cx="16" cy="80" r="1.5"/></g>`;

  // =========================== GLEAMCAVE HOLLOWS ==========================

  A.quartzling = `
  <defs><linearGradient id="qz-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#f0e0ff"/><stop offset="100%" stop-color="#b98ad4"/></linearGradient></defs>
  <ellipse cx="60" cy="102" rx="24" ry="4.5" fill="#000" opacity=".16"/>
  <!-- segmented grub with crystal spines -->
  <g fill="url(#qz-b)" stroke="${OL}" stroke-width="2.6">
    <circle cx="34" cy="80" r="13"/><circle cx="52" cy="78" r="15"/><circle cx="72" cy="76" r="16"/></g>
  <g fill="#e6d0f8" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round">
    <path d="M34 66 l-3 -12 8 10 Z"/><path d="M52 62 l0 -14 7 12 Z"/><path d="M74 59 l5 -13 3 13 Z"/></g>
  <circle cx="86" cy="70" r="4.6" fill="#fff"/><circle cx="87" cy="70" r="2.3" fill="${OL}"/>
  <circle cx="76" cy="72" r="4.6" fill="#fff"/><circle cx="76" cy="72" r="2.3" fill="${OL}"/>
  <path d="M78 84 q7 4 13 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="2.4" stroke-linecap="round"><path d="M30 92 l-2 7 M50 91 l0 8 M70 90 l2 8"/></g>
  <g fill="#fbeaff" class="glowpulse"><circle cx="44" cy="70" r="1.6"/><circle cx="64" cy="66" r="1.4"/></g>`;

  A.stalagmyte = `
  <defs><linearGradient id="sg-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#b9ac96"/><stop offset="100%" stop-color="#6e604a"/></linearGradient></defs>
  <ellipse cx="60" cy="104" rx="24" ry="4.5" fill="#000" opacity=".18"/>
  <path d="M60 20 L82 100 L38 100 Z" fill="url(#sg-b)" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round"/>
  <path d="M60 26 L70 100 L60 100 Z" fill="#cbbfa8" opacity=".7"/>
  <g stroke="#8b7d63" stroke-width="1.8" opacity=".8"><path d="M50 70 h20 M46 84 h28"/></g>
  <!-- a dripping bead at the tip -->
  <circle cx="60" cy="15" r="4" fill="#bfe6f7" stroke="${OL}" stroke-width="1.8" class="glowpulse"/>
  <circle cx="52" cy="66" r="5" fill="#fff" stroke="${OL}" stroke-width="1.4"/><circle cx="52" cy="66" r="2.4" fill="${OL}"/>
  <circle cx="68" cy="66" r="5" fill="#fff" stroke="${OL}" stroke-width="1.4"/><circle cx="68" cy="66" r="2.4" fill="${OL}"/>
  <path d="M54 78 q6 4 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3" stroke-linecap="round"><path d="M46 100 l-4 5 M74 100 l4 5"/></g>`;

  A.umbrite = `
  <defs>
    <radialGradient id="um-in" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#1a1226"/><stop offset="70%" stop-color="#2f2440"/><stop offset="100%" stop-color="#4a3a63"/></radialGradient>
    <linearGradient id="um-sh" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#9a8ab0"/><stop offset="100%" stop-color="#5f5178"/></linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="26" ry="4.5" fill="#000" opacity=".2"/>
  <!-- cracked-open geode -->
  <path d="M22 62 C22 34 98 34 98 62 C98 88 22 88 22 62 Z" fill="url(#um-sh)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="62" rx="30" ry="20" fill="url(#um-in)" stroke="${OL}" stroke-width="2.4"/>
  <g fill="#2f2440"><path d="M38 56 l4 -8 4 8 Z"/><path d="M74 56 l4 -8 4 8 Z"/></g>
  <g fill="#c8b6e6" opacity=".85" class="glowpulse"><circle cx="40" cy="68" r="1.8"/><circle cx="78" cy="66" r="1.6"/><circle cx="60" cy="74" r="1.4"/></g>
  <circle cx="50" cy="60" r="5.4" fill="#e6d8ff"/><circle cx="50" cy="60" r="2.6" fill="${OL}"/>
  <circle cx="70" cy="60" r="5.4" fill="#e6d8ff"/><circle cx="70" cy="60" r="2.6" fill="${OL}"/>
  <path d="M52 72 q8 5 16 0" fill="none" stroke="#c8b6e6" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="#5f5178" stroke-width="4" stroke-linecap="round"><path d="M40 84 l-3 8 M80 84 l3 8"/></g>`;

  A.veinwyrm = `
  <defs><linearGradient id="vw-b" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#c0b299"/><stop offset="50%" stop-color="#8a7b60"/><stop offset="100%" stop-color="#4f4433"/></linearGradient></defs>
  <ellipse cx="62" cy="106" rx="26" ry="4.5" fill="#000" opacity=".18"/>
  <!-- wyrm weaving in and out of the rock -->
  <path d="M8 92 C30 92 26 66 48 64 C70 62 68 40 90 38"
        fill="none" stroke="url(#vw-b)" stroke-width="16" stroke-linecap="round"/>
  <path d="M8 92 C30 92 26 66 48 64" fill="none" stroke="#d8caa8" stroke-width="4" opacity=".55" stroke-linecap="round"/>
  <g fill="#b98ad4" class="glowpulse"><circle cx="34" cy="80" r="2.4"/><circle cx="56" cy="58" r="2"/><circle cx="20" cy="90" r="1.8"/></g>
  <circle cx="96" cy="36" r="16" fill="url(#vw-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M86 24 l-4 -12 12 8 Z M106 24 l4 -12 -12 8 Z" fill="#a3947a" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="91" cy="34" r="4.6" fill="#e6d0f8"/><circle cx="92" cy="34" r="2.2" fill="${OL}"/>
  <circle cx="103" cy="34" r="4.6" fill="#e6d0f8"/><circle cx="102" cy="34" r="2.2" fill="${OL}"/>
  <path d="M90 45 L96 50 L102 45" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>`;

  // ============================== ASTRAL RIFT =============================

  A.starmote = `
  <defs><radialGradient id="sm14-g" cx="50%" cy="45%" r="55%">
    <stop offset="0%" stop-color="#ffffff"/><stop offset="45%" stop-color="#fff2b0"/><stop offset="100%" stop-color="#f2d16b" stop-opacity="0"/></radialGradient></defs>
  <circle cx="60" cy="58" r="46" fill="url(#sm14-g)"/>
  <ellipse cx="60" cy="104" rx="14" ry="3.5" fill="#000" opacity=".08"/>
  <path d="M60 26 L67 50 L92 57 L67 64 L60 90 L53 64 L28 57 L53 50 Z"
        fill="#fff6cf" stroke="#d8b45c" stroke-width="2.4" stroke-linejoin="round" class="glowpulse"/>
  <circle cx="54" cy="55" r="4.4" fill="#fff" stroke="${OL}" stroke-width="1.5"/><circle cx="54" cy="55" r="2.2" fill="${OL}"/>
  <circle cx="67" cy="55" r="4.4" fill="#fff" stroke="${OL}" stroke-width="1.5"/><circle cx="67" cy="55" r="2.2" fill="${OL}"/>
  <path d="M55 65 q6 4 11 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#cfe0ff"><circle cx="26" cy="34" r="1.8"/><circle cx="94" cy="40" r="1.5"/><circle cx="34" cy="86" r="1.5"/><circle cx="88" cy="82" r="1.3"/></g>`;

  A.aethermoth = `
  <defs>
    <linearGradient id="ae-wl" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2a2340"/><stop offset="100%" stop-color="#5b5384"/></linearGradient>
    <linearGradient id="ae-wr" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#fff2b0"/><stop offset="100%" stop-color="#e6c229"/></linearGradient>
    <radialGradient id="ae-a" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#c8b6e6" stop-opacity=".45"/><stop offset="100%" stop-color="#c8b6e6" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="52" fill="url(#ae-a)"/>
  <ellipse cx="60" cy="104" rx="18" ry="4" fill="#000" opacity=".12"/>
  <g stroke="${OL}" stroke-width="2.4" stroke-linejoin="round">
    <path d="M56 64 C26 40 12 56 20 74 C30 88 46 80 56 72 Z" fill="url(#ae-wl)"/>
    <path d="M64 64 C94 40 108 56 100 74 C90 88 74 80 64 72 Z" fill="url(#ae-wr)"/></g>
  <g fill="#c8b6e6"><circle cx="34" cy="62" r="2.6"/></g>
  <g fill="#8a6f14"><circle cx="86" cy="62" r="2.6"/></g>
  <ellipse cx="60" cy="70" rx="8" ry="17" fill="#4a3f66" stroke="${OL}" stroke-width="2.4"/>
  <path d="M60 53 l-7 -12 M60 53 l7 -12" stroke="${OL}" stroke-width="2" stroke-linecap="round" fill="none"/>
  <circle cx="53" cy="41" r="2.4" fill="#c8b6e6"/><circle cx="67" cy="41" r="2.4" fill="#fff2b0"/>
  <circle cx="56" cy="64" r="3" fill="#fff"/><circle cx="56" cy="64" r="1.5" fill="${OL}"/>
  <circle cx="64" cy="64" r="3" fill="#fff"/><circle cx="64" cy="64" r="1.5" fill="${OL}"/>`;

  A.quasarix = `
  <defs>
    <linearGradient id="qx-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff6cf"/><stop offset="50%" stop-color="#ffd166"/><stop offset="100%" stop-color="#e0913a"/></linearGradient>
    <radialGradient id="qx-core" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#ffffff"/><stop offset="55%" stop-color="#fff2b0"/><stop offset="100%" stop-color="#ff9a3a"/></radialGradient>
    <radialGradient id="qx-a" cx="50%" cy="46%" r="60%">
      <stop offset="0%" stop-color="#fff2b0" stop-opacity=".5"/><stop offset="100%" stop-color="#fff2b0" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="56" fill="url(#qx-a)"/>
  <ellipse cx="60" cy="106" rx="24" ry="4.5" fill="#000" opacity=".14"/>
  <g fill="url(#qx-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round">
    <path d="M48 62 C22 38 8 54 16 74 C30 64 40 62 48 70 Z"/>
    <path d="M72 62 C98 38 112 54 104 74 C90 64 80 62 72 70 Z"/></g>
  <path d="M78 84 C96 78 98 62 88 58 C92 70 84 78 74 76 Z" fill="url(#qx-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="58" cy="76" rx="22" ry="18" fill="url(#qx-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="58" cy="76" r="8" fill="url(#qx-core)" stroke="${OL}" stroke-width="2" class="glowpulse"/>
  <circle cx="56" cy="52" r="16" fill="url(#qx-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M46 38 l-3 -12 10 8 Z M66 38 l3 -12 -10 8 Z" fill="#ffe9a3" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="51" cy="51" r="4.6" fill="#fff"/><circle cx="52" cy="51" r="2.3" fill="${OL}"/>
  <circle cx="63" cy="51" r="4.6" fill="#fff"/><circle cx="62" cy="51" r="2.3" fill="${OL}"/>
  <path d="M50 61 L56 66 L62 61" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>`;

  // ============================ GLOWFEN MARSH =============================

  A.reedling = `
  <defs><linearGradient id="rd-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe08f"/><stop offset="100%" stop-color="#6f9a4a"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="14" ry="3.5" fill="#000" opacity=".12"/>
  <g stroke="#4c8a3c" stroke-width="3" fill="none" stroke-linecap="round" class="sway" opacity=".85">
    <path d="M22 106 C20 84 24 70 22 52"/><path d="M98 106 C100 84 96 70 98 54"/></g>
  <g fill="#8a6f3a"><ellipse cx="22" cy="48" rx="4" ry="9"/><ellipse cx="98" cy="50" rx="4" ry="9"/></g>
  <ellipse cx="60" cy="66" rx="22" ry="26" fill="url(#rd-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 60 C30 54 28 66 38 68 Z" fill="#9bd97a" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M60 40 l-4 -12 9 9 Z" fill="#9bd97a" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <!-- long hollow reed beak -->
  <path d="M78 62 L100 66 L78 70 Z" fill="#e0b45c" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="66" cy="58" r="5" fill="#fff"/><circle cx="67" cy="58" r="2.4" fill="${OL}"/>
  <circle cx="54" cy="58" r="5" fill="#fff"/><circle cx="54" cy="58" r="2.4" fill="${OL}"/>
  <g stroke="#e0b45c" stroke-width="3" stroke-linecap="round"><path d="M56 92 l-2 12 M66 92 l2 12"/></g>
  <path d="M50 104 h-6 M62 104 h6" stroke="#e0b45c" stroke-width="2.4" stroke-linecap="round"/>`;

  A.peatpaw = `
  <defs><linearGradient id="pp14-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7a6a52"/><stop offset="100%" stop-color="#3f3628"/></linearGradient></defs>
  <ellipse cx="60" cy="104" rx="27" ry="4.5" fill="#000" opacity=".17"/>
  <ellipse cx="60" cy="76" rx="30" ry="22" fill="url(#pp14-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="42" cy="56" r="19" fill="url(#pp14-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- badger stripe -->
  <path d="M42 38 C36 46 34 58 36 68 L48 68 C50 58 48 46 42 38 Z" fill="#e6ded0" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="30" cy="44" r="6" fill="#5c5040" stroke="${OL}" stroke-width="2"/>
  <circle cx="54" cy="44" r="6" fill="#5c5040" stroke="${OL}" stroke-width="2"/>
  <circle cx="35" cy="56" r="4.4" fill="#fff"/><circle cx="35" cy="56" r="2.2" fill="${OL}"/>
  <circle cx="49" cy="56" r="4.4" fill="#fff"/><circle cx="49" cy="56" r="2.2" fill="${OL}"/>
  <ellipse cx="42" cy="66" rx="4" ry="3" fill="#2b241a" stroke="${OL}" stroke-width="1.4"/>
  <g fill="#6f9a4a"><ellipse cx="72" cy="60" rx="7" ry="3.4" transform="rotate(-18 72 60)"/><ellipse cx="82" cy="66" rx="5" ry="2.6" transform="rotate(-10 82 66)"/></g>
  <g stroke="#2f281e" stroke-width="4.5" stroke-linecap="round"><path d="M46 94 l-3 9 M72 94 l3 9"/></g>
  <g fill="#a4d17a" opacity=".8"><circle cx="90" cy="80" r="2"/><circle cx="30" cy="84" r="1.6"/></g>`;

  A.fenwing = `
  <defs><linearGradient id="fw-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#c4cfd8"/><stop offset="55%" stop-color="#7d8b9e"/><stop offset="100%" stop-color="#4d5a6b"/></linearGradient></defs>
  <ellipse cx="60" cy="108" rx="16" ry="3.5" fill="#000" opacity=".12"/>
  <g fill="#c8d4dd" opacity=".55"><ellipse cx="30" cy="94" rx="20" ry="7"/><ellipse cx="90" cy="98" rx="18" ry="6"/></g>
  <!-- long legs standing in water -->
  <g stroke="#8a7a5e" stroke-width="3.4" stroke-linecap="round"><path d="M56 78 L52 102 M66 78 L70 102"/></g>
  <path d="M46 100 h-6 M64 102 h7" stroke="#8a7a5e" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M74 62 C98 56 106 74 92 84 C86 74 78 70 70 72 Z" fill="url(#fw-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="60" cy="66" rx="20" ry="17" fill="url(#fw-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- long S-curved neck -->
  <path d="M56 54 C46 44 52 28 64 26" fill="none" stroke="url(#fw-b)" stroke-width="9" stroke-linecap="round"/>
  <circle cx="68" cy="24" r="11" fill="url(#fw-b)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M78 24 L98 27 L78 30 Z" fill="#e0b45c" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M62 16 l-6 -8 10 3 Z" fill="#5d6a7c" stroke="${OL}" stroke-width="1.6" stroke-linejoin="round"/>
  <circle cx="70" cy="22" r="3.6" fill="#fff"/><circle cx="71" cy="22" r="1.8" fill="${OL}"/>
  <g fill="#dfe8ef" opacity=".7"><circle cx="40" cy="60" r="1.8"/><circle cx="86" cy="88" r="1.5"/></g>`;

  // =========================== SUNDUNE DESERT =============================

  A.sunscale = `
  <defs><linearGradient id="ss14-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffd98f"/><stop offset="50%" stop-color="#e0913a"/><stop offset="100%" stop-color="#a85f1c"/></linearGradient></defs>
  <ellipse cx="60" cy="102" rx="26" ry="4.5" fill="#000" opacity=".16"/>
  <g stroke="#ffd166" stroke-width="2.4" stroke-linecap="round" opacity=".8" class="glowpulse">
    <path d="M60 10 v8 M34 18 l5 7 M86 18 l-5 7 M14 44 h8 M98 44 h8"/></g>
  <path d="M86 82 C106 78 108 62 98 58 C102 70 94 78 82 76 Z" fill="url(#ss14-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="58" cy="76" rx="28" ry="17" fill="url(#ss14-b)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="#ffe9a3" opacity=".85"><path d="M42 66 l4 -7 4 7 Z M56 64 l4 -7 4 7 Z M70 66 l4 -7 4 7 Z"/></g>
  <ellipse cx="34" cy="66" rx="15" ry="12" fill="url(#ss14-b)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M20 62 q-8 2 -7 7 q7 3 12 -2 Z" fill="#e0913a" stroke="${OL}" stroke-width="2"/>
  <circle cx="30" cy="62" r="4.6" fill="#fff"/><circle cx="29" cy="62" r="2.2" fill="${OL}"/>
  <circle cx="41" cy="63" r="4" fill="#fff"/><circle cx="41" cy="63" r="1.9" fill="${OL}"/>
  <g stroke="#a85f1c" stroke-width="4" stroke-linecap="round"><path d="M44 90 l-6 8 M72 90 l6 8"/></g>`;

  A.oasisling = `
  <defs>
    <linearGradient id="os-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#bfe6f7"/><stop offset="55%" stop-color="#5fb8d8"/><stop offset="100%" stop-color="#e0b45c"/></linearGradient>
    <radialGradient id="os-a" cx="50%" cy="50%" r="58%">
      <stop offset="0%" stop-color="#bfe6f7" stop-opacity=".45"/><stop offset="100%" stop-color="#bfe6f7" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="62" r="50" fill="url(#os-a)"/>
  <ellipse cx="60" cy="104" rx="22" ry="4.5" fill="#000" opacity=".14"/>
  <!-- a little palm sprouting from its head -->
  <g stroke="#8a6f3a" stroke-width="3.4" fill="none" stroke-linecap="round"><path d="M60 40 C58 30 60 26 60 22"/></g>
  <g fill="#5cb85c" stroke="${OL}" stroke-width="1.6" stroke-linejoin="round">
    <path d="M60 22 C48 16 42 20 44 26 C50 22 56 22 60 24 Z"/>
    <path d="M60 22 C72 16 78 20 76 26 C70 22 64 22 60 24 Z"/>
    <path d="M60 20 C56 10 62 6 66 12 C62 14 60 16 60 20 Z"/></g>
  <path d="M60 96 C42 96 38 76 44 62 C50 50 70 50 76 62 C82 76 78 96 60 96 Z" fill="url(#os-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M44 62 C32 56 28 66 34 74 C38 68 42 68 46 70" fill="url(#os-b)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M76 62 C88 56 92 66 86 74 C82 68 78 68 74 70" fill="url(#os-b)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="53" cy="66" r="5" fill="#fff"/><circle cx="53" cy="66" r="2.4" fill="${OL}"/>
  <circle cx="68" cy="66" r="5" fill="#fff"/><circle cx="68" cy="66" r="2.4" fill="${OL}"/>
  <path d="M54 78 q6 5 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#eafffb" class="glowpulse"><circle cx="36" cy="52" r="2"/><circle cx="86" cy="56" r="1.7"/><circle cx="60" cy="100" r="1.5"/></g>`;

  // ============================ QUEST CREATURES ===========================

  A.fablewyrm = `
  <defs>
    <linearGradient id="fb-b" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eafaff"/><stop offset="50%" stop-color="#a7d4ee"/><stop offset="100%" stop-color="#6f8fc0"/></linearGradient>
    <radialGradient id="fb-a" cx="50%" cy="46%" r="60%">
      <stop offset="0%" stop-color="#dff0ff" stop-opacity=".55"/><stop offset="100%" stop-color="#dff0ff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="56" fill="url(#fb-a)"/>
  <ellipse cx="62" cy="108" rx="26" ry="4.5" fill="#000" opacity=".14"/>
  <!-- long story-serpent coil -->
  <path d="M10 98 C34 98 28 72 52 70 C74 68 70 44 92 40"
        fill="none" stroke="url(#fb-b)" stroke-width="16" stroke-linecap="round"/>
  <path d="M10 98 C34 98 28 72 52 70" fill="none" stroke="#f4fdff" stroke-width="4.5" opacity=".65" stroke-linecap="round"/>
  <!-- floating story-runes -->
  <g fill="#fff6cf" class="glowpulse"><circle cx="26" cy="76" r="2.2"/><circle cx="46" cy="56" r="1.8"/><circle cx="70" cy="56" r="1.6"/></g>
  <g stroke="#c8e6f7" stroke-width="2" stroke-linecap="round" opacity=".9"><path d="M22 84 l-8 6 M44 62 l-7 7"/></g>
  <circle cx="96" cy="36" r="17" fill="url(#fb-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M86 22 l-5 -14 13 10 Z M106 22 l5 -14 -13 10 Z" fill="#dff0ff" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <!-- a little open book held in its coil -->
  <g transform="translate(38 84)">
    <path d="M0 0 L14 -4 L14 8 L0 12 Z" fill="#fffdf5" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
    <path d="M28 0 L14 -4 L14 8 L28 12 Z" fill="#f3e8cf" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
    <path d="M4 2 h7 M4 6 h7 M18 2 h7 M18 6 h7" stroke="#c9b98f" stroke-width="1.2"/></g>
  <circle cx="91" cy="34" r="4.8" fill="#fff"/><circle cx="92" cy="34" r="2.3" fill="${OL}"/>
  <circle cx="103" cy="34" r="4.8" fill="#fff"/><circle cx="102" cy="34" r="2.3" fill="${OL}"/>
  <path d="M92 45 q6 4 11 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>`;

  A.resonyx = `
  <defs>
    <linearGradient id="rx-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e0c8f5"/><stop offset="55%" stop-color="#a678c9"/><stop offset="100%" stop-color="#6b4a8f"/></linearGradient>
    <radialGradient id="rx-a" cx="50%" cy="46%" r="62%">
      <stop offset="0%" stop-color="#d8b6ff" stop-opacity=".5"/><stop offset="100%" stop-color="#d8b6ff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="56" fill="url(#rx-a)"/>
  <ellipse cx="60" cy="108" rx="28" ry="5" fill="#000" opacity=".18"/>
  <!-- concentric echo rings -->
  <g fill="none" stroke="#c8a6e6" stroke-width="2.4" opacity=".75" class="glowpulse">
    <circle cx="60" cy="62" r="46"/><circle cx="60" cy="62" r="54"/></g>
  <!-- crystal-cluster body -->
  <g fill="url(#rx-b)" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round">
    <path d="M60 96 L34 84 L38 56 L60 44 L82 56 L86 84 Z"/>
    <path d="M34 76 L18 86 L30 96 Z M86 76 L102 86 L90 96 Z"/></g>
  <path d="M60 44 L46 34 L54 12 L60 4 L66 12 L74 34 Z" fill="url(#rx-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <g stroke="#e6d0f8" stroke-width="1.6" opacity=".6" fill="none"><path d="M60 4 L60 44 M46 34 L60 24 L74 34"/></g>
  <!-- resonating mouth-bell -->
  <ellipse cx="60" cy="78" rx="13" ry="9" fill="#3f2a56" stroke="${OL}" stroke-width="2.2"/>
  <ellipse cx="60" cy="78" rx="7" ry="4.6" fill="#c8a6e6" class="glowpulse"/>
  <circle cx="50" cy="60" r="5.2" fill="#fff"/><circle cx="50" cy="60" r="2.5" fill="${OL}"/>
  <circle cx="70" cy="60" r="5.2" fill="#fff"/><circle cx="70" cy="60" r="2.5" fill="${OL}"/>
  <g fill="#f0e0ff" class="glowpulse"><circle cx="26" cy="58" r="2"/><circle cx="94" cy="60" r="2"/></g>`;

  A.aetherion = `
  <defs>
    <linearGradient id="at-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff6cf"/><stop offset="45%" stop-color="#8f7fc0"/><stop offset="100%" stop-color="#2a2340"/></linearGradient>
    <radialGradient id="at-a" cx="50%" cy="46%" r="62%">
      <stop offset="0%" stop-color="#cfe0ff" stop-opacity=".55"/><stop offset="100%" stop-color="#cfe0ff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="58" fill="url(#at-a)"/>
  <g fill="#fff"><circle cx="16" cy="26" r="1.6"/><circle cx="104" cy="30" r="1.4"/><circle cx="22" cy="92" r="1.5"/><circle cx="100" cy="88" r="1.3"/><circle cx="60" cy="8" r="1.6"/></g>
  <ellipse cx="60" cy="108" rx="26" ry="5" fill="#000" opacity=".16"/>
  <!-- great mended-seam wings -->
  <g fill="url(#at-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round">
    <path d="M48 60 C18 30 4 50 12 74 C28 62 38 60 48 70 Z"/>
    <path d="M72 60 C102 30 116 50 108 74 C92 62 82 60 72 70 Z"/></g>
  <g stroke="#fff6cf" stroke-width="1.8" stroke-dasharray="4 4" fill="none" opacity=".9">
    <path d="M20 56 C30 62 40 64 46 68"/><path d="M100 56 C90 62 80 64 74 68"/></g>
  <path d="M60 96 C44 96 40 76 46 62 C52 48 68 48 74 62 C80 76 76 96 60 96 Z" fill="url(#at-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="46" r="17" fill="url(#at-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- warden's halo -->
  <circle cx="60" cy="22" r="11" fill="none" stroke="#fff6cf" stroke-width="3" class="glowpulse"/>
  <circle cx="53" cy="45" r="4.8" fill="#fff"/><circle cx="53" cy="45" r="2.4" fill="${OL}"/>
  <circle cx="67" cy="45" r="4.8" fill="#fff"/><circle cx="67" cy="45" r="2.4" fill="${OL}"/>
  <path d="M54 56 q6 4 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M60 68 L52 80 L60 92 L68 80 Z" fill="#fff6cf" stroke="${OL}" stroke-width="2" class="glowpulse"/>`;

  A.mirevail = `
  <defs>
    <linearGradient id="mv-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7f9a68"/><stop offset="55%" stop-color="#4a5f3c"/><stop offset="100%" stop-color="#25301e"/></linearGradient>
    <radialGradient id="mv-a" cx="50%" cy="46%" r="62%">
      <stop offset="0%" stop-color="#a4d17a" stop-opacity=".45"/><stop offset="100%" stop-color="#a4d17a" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="56" fill="url(#mv-a)"/>
  <ellipse cx="60" cy="108" rx="26" ry="5" fill="#000" opacity=".18"/>
  <!-- floating marsh lanterns it leads in a dance -->
  <g class="glowpulse">
    <circle cx="18" cy="40" r="5" fill="#fff6cf" stroke="${OL}" stroke-width="1.6"/>
    <circle cx="102" cy="46" r="4.4" fill="#fff6cf" stroke="${OL}" stroke-width="1.6"/>
    <circle cx="26" cy="86" r="3.8" fill="#fff6cf" stroke="${OL}" stroke-width="1.5"/></g>
  <!-- tattered cloak -->
  <path d="M60 100 C36 100 30 74 38 58 C46 42 74 42 82 58 C90 74 84 100 60 100 Z" fill="url(#mv-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M38 92 L44 102 L50 92 L56 102 L62 92 L68 102 L74 92 L80 100" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <g stroke="#6f9a4a" stroke-width="2" opacity=".7"><path d="M46 70 h28 M44 80 h32"/></g>
  <!-- the mask -->
  <path d="M60 26 C42 26 36 40 40 52 C44 62 76 62 80 52 C84 40 78 26 60 26 Z" fill="#f3e8cf" stroke="${OL}" stroke-width="2.8"/>
  <path d="M60 26 L60 60" stroke="${OL}" stroke-width="1.6" opacity=".45"/>
  <path d="M44 20 l-6 -12 12 8 Z M76 20 l6 -12 -12 8 Z" fill="#c9b98f" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <ellipse cx="51" cy="43" rx="6.5" ry="5" fill="#25301e" stroke="${OL}" stroke-width="1.8"/>
  <ellipse cx="69" cy="43" rx="6.5" ry="5" fill="#25301e" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="51" cy="43" r="2" fill="#a4d17a" class="glowpulse"/><circle cx="69" cy="43" r="2" fill="#a4d17a" class="glowpulse"/>
  <path d="M52 54 q8 5 16 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>`;

})(window.CRITTER_ART);
