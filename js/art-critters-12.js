// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 12
//  Skyhaven Reach natives, Emberdeep Caldera natives, and the quest creatures
//  for the five new quests. Inner SVG on a 0 0 120 120 canvas, keyed by id.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // ============================ SKYHAVEN REACH ============================

  A.nimbik = `
  <defs><radialGradient id="nb-w" cx="45%" cy="38%" r="70%">
    <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#dbe9f4"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="24" ry="4.5" fill="#000" opacity=".12"/>
  <g fill="url(#nb-w)" stroke="#a9c8dd" stroke-width="2.4">
    <circle cx="40" cy="74" r="15"/><circle cx="60" cy="68" r="19"/><circle cx="80" cy="74" r="15"/>
    <rect x="36" y="72" width="48" height="20" rx="10"/>
  </g>
  <g stroke="#8fb7c9" stroke-width="4" stroke-linecap="round"><path d="M48 92 l-3 10 M72 92 l3 10"/></g>
  <circle cx="60" cy="54" r="17" fill="#f4f9fd" stroke="#a9c8dd" stroke-width="2.4"/>
  <ellipse cx="46" cy="50" rx="7" ry="5" fill="#dbe9f4" stroke="#a9c8dd" stroke-width="2"/>
  <ellipse cx="74" cy="50" rx="7" ry="5" fill="#dbe9f4" stroke="#a9c8dd" stroke-width="2"/>
  <circle cx="54" cy="55" r="4.4" fill="#fff" stroke="${OL}" stroke-width="1.4"/><circle cx="54" cy="55" r="2.2" fill="${OL}"/>
  <circle cx="67" cy="55" r="4.4" fill="#fff" stroke="${OL}" stroke-width="1.4"/><circle cx="67" cy="55" r="2.2" fill="${OL}"/>
  <path d="M56 64 q5 4 10 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#cfe6f5" opacity=".8"><circle cx="30" cy="58" r="2"/><circle cx="92" cy="60" r="1.6"/></g>`;

  A.cloudlet = `
  <defs><radialGradient id="cl-b" cx="48%" cy="38%" r="68%">
    <stop offset="0%" stop-color="#fffdf0"/><stop offset="100%" stop-color="#ffe9a3"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="18" ry="4" fill="#000" opacity=".12"/>
  <g fill="#ffffff" stroke="#e0c98f" stroke-width="2" opacity=".95">
    <circle cx="40" cy="84" r="11"/><circle cx="60" cy="88" r="13"/><circle cx="80" cy="84" r="11"/></g>
  <circle cx="60" cy="60" r="28" fill="url(#cl-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M34 56 C22 46 22 60 32 64 Z M86 56 C98 46 98 60 88 64 Z" fill="#ffe9a3" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M60 32 l-4 -10 8 6 Z" fill="#ffd166" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <circle cx="52" cy="58" r="5" fill="#fff"/><circle cx="53" cy="58" r="2.5" fill="${OL}"/>
  <circle cx="68" cy="58" r="5" fill="#fff"/><circle cx="67" cy="58" r="2.5" fill="${OL}"/>
  <path d="M56 70 L60 75 L64 70 Z" fill="#f0a83a" stroke="${OL}" stroke-width="1.6" stroke-linejoin="round"/>
  <g fill="#fff6cf" class="glowpulse"><circle cx="34" cy="40" r="2"/><circle cx="88" cy="44" r="1.8"/></g>`;

  A.aerowisp = `
  <defs><radialGradient id="aw-b" cx="50%" cy="42%" r="66%">
    <stop offset="0%" stop-color="#f2fbff"/><stop offset="100%" stop-color="#a7cfe6"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="16" ry="3.5" fill="#000" opacity=".1"/>
  <g fill="none" stroke="#cfe6f5" stroke-width="3.4" stroke-linecap="round" class="sway" opacity=".9">
    <path d="M18 44 h20 a6 6 0 1 0 -6 -6"/><path d="M20 76 h22 a6 6 0 1 1 -6 6"/></g>
  <path d="M60 92 C42 92 38 72 44 58 C50 44 70 44 76 58 C82 72 78 92 60 92 Z" fill="url(#aw-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M44 58 C32 50 28 60 34 68 C38 62 42 62 46 64" fill="url(#aw-b)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M76 58 C88 50 92 60 86 68 C82 62 78 62 74 64" fill="url(#aw-b)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M50 38 C54 28 66 28 70 38 C66 34 54 34 50 38 Z" fill="#dff0ff" stroke="${OL}" stroke-width="2"/>
  <circle cx="52" cy="64" r="5" fill="#fff"/><circle cx="52" cy="64" r="2.5" fill="${OL}"/>
  <circle cx="68" cy="64" r="5" fill="#fff"/><circle cx="68" cy="64" r="2.5" fill="${OL}"/>
  <path d="M54 76 q6 5 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#fff" class="glowpulse"><circle cx="40" cy="48" r="1.8"/><circle cx="82" cy="80" r="1.6"/></g>`;

  A.skimmet = `
  <defs><linearGradient id="sm-w" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffe9c4"/><stop offset="55%" stop-color="#e6a86c"/><stop offset="100%" stop-color="#b9793f"/></linearGradient></defs>
  <ellipse cx="60" cy="104" rx="20" ry="4" fill="#000" opacity=".13"/>
  <g stroke="${OL}" stroke-width="2.4" stroke-linejoin="round" fill="url(#sm-w)">
    <path d="M52 58 C22 40 8 56 18 72 C30 66 42 64 52 66 Z"/>
    <path d="M68 58 C98 40 112 56 102 72 C90 66 78 64 68 66 Z"/></g>
  <g stroke="#b9793f" stroke-width="1.6" fill="none" opacity=".8"><path d="M26 54 l6 8 M94 54 l-6 8"/></g>
  <ellipse cx="60" cy="70" rx="14" ry="20" fill="url(#sm-w)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M60 90 C56 102 54 108 60 112 C66 108 64 102 60 90 Z" fill="#e6a86c" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="60" cy="50" r="14" fill="url(#sm-w)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M60 44 L74 50 L60 55 Z" fill="#ffd166" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <circle cx="54" cy="47" r="4.2" fill="#fff"/><circle cx="54" cy="47" r="2.1" fill="${OL}"/>
  <g fill="#fff6cf"><circle cx="38" cy="60" r="1.6"/><circle cx="84" cy="60" r="1.6"/></g>`;

  A.cirrix = `
  <defs><linearGradient id="cx-b" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#ffffff"/><stop offset="50%" stop-color="#dff0ff"/><stop offset="100%" stop-color="#a7d4ee"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="20" ry="4" fill="#000" opacity=".1"/>
  <path d="M8 84 C28 80 24 60 44 58 C64 56 62 38 84 36 C102 34 108 44 112 40"
        fill="none" stroke="url(#cx-b)" stroke-width="14" stroke-linecap="round"/>
  <path d="M8 84 C28 80 24 60 44 58 C64 56 62 38 84 36" fill="none" stroke="#fff" stroke-width="4" opacity=".7" stroke-linecap="round"/>
  <g stroke="#c8e6f7" stroke-width="2.4" stroke-linecap="round" class="sway" opacity=".9">
    <path d="M26 74 l-8 8 M46 58 l-6 10 M68 46 l-8 8"/></g>
  <circle cx="96" cy="34" r="15" fill="url(#cx-b)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M88 22 l-4 -12 10 8 Z M104 22 l6 -11 2 11 Z" fill="#dff0ff" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="92" cy="33" r="4.2" fill="#fff"/><circle cx="93" cy="33" r="2.1" fill="${OL}"/>
  <circle cx="103" cy="33" r="4.2" fill="#fff"/><circle cx="102" cy="33" r="2.1" fill="${OL}"/>
  <path d="M94 43 q5 3 9 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#eaf6ff" class="glowpulse"><circle cx="20" cy="70" r="2"/><circle cx="56" cy="48" r="1.6"/></g>`;

  A.stratolon = `
  <defs><linearGradient id="st-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#bfe0f5"/><stop offset="55%" stop-color="#6fa8d0"/><stop offset="100%" stop-color="#43708f"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="30" ry="5" fill="#000" opacity=".14"/>
  <g fill="#fff" opacity=".7"><circle cx="26" cy="34" r="8"/><circle cx="38" cy="30" r="10"/><circle cx="94" cy="86" r="9"/><circle cx="82" cy="90" r="7"/></g>
  <path d="M18 66 C18 44 78 40 96 58 C108 70 100 86 76 86 C46 86 18 84 18 66 Z" fill="url(#st-b)" stroke="${OL}" stroke-width="3"/>
  <path d="M22 72 C40 82 76 82 94 68" fill="none" stroke="#9fc9e0" stroke-width="3" opacity=".7"/>
  <path d="M14 62 L2 50 L6 68 L0 80 L16 74 Z" fill="#6fa8d0" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M52 44 C46 26 62 22 68 38 C62 36 56 38 52 44 Z" fill="#8fc0dc" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M58 84 C52 96 62 100 68 90" fill="#8fc0dc" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="84" cy="60" r="5.5" fill="#fff"/><circle cx="85" cy="61" r="2.7" fill="${OL}"/>
  <path d="M78 72 q10 5 18 0" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <g fill="#eaf6ff"><circle cx="60" cy="30" r="2"/><circle cx="70" cy="24" r="1.4"/></g>`;

  A.solaviel = `
  <defs>
    <linearGradient id="sv-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff8d8"/><stop offset="55%" stop-color="#f2d16b"/><stop offset="100%" stop-color="#d9a03a"/></linearGradient>
    <radialGradient id="sv-a" cx="50%" cy="44%" r="60%">
      <stop offset="0%" stop-color="#fff2b0" stop-opacity=".6"/><stop offset="100%" stop-color="#fff2b0" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="56" r="58" fill="url(#sv-a)"/>
  <ellipse cx="60" cy="108" rx="24" ry="5" fill="#000" opacity=".14"/>
  <g fill="url(#sv-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round">
    <path d="M50 60 C24 34 6 50 12 72 C26 62 40 60 50 70 Z"/>
    <path d="M70 60 C96 34 114 50 108 72 C94 62 80 60 70 70 Z"/></g>
  <g stroke="#d9a03a" stroke-width="1.8" fill="none" opacity=".7"><path d="M24 56 l10 10 M96 56 l-10 10"/></g>
  <path d="M60 92 C46 92 42 74 46 62 C50 50 70 50 74 62 C78 74 74 92 60 92 Z" fill="url(#sv-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="46" r="16" fill="url(#sv-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="24" r="10" fill="none" stroke="#fff6cf" stroke-width="3" class="glowpulse"/>
  <circle cx="54" cy="45" r="4.6" fill="#fff"/><circle cx="54" cy="45" r="2.3" fill="${OL}"/>
  <circle cx="67" cy="45" r="4.6" fill="#fff"/><circle cx="67" cy="45" r="2.3" fill="${OL}"/>
  <path d="M55 55 q6 4 11 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3" stroke-linecap="round"><path d="M52 92 l-2 8 M69 92 l2 8"/></g>
  <g fill="#fff8d8" class="glowpulse"><circle cx="30" cy="80" r="2"/><circle cx="92" cy="82" r="2"/></g>`;

  // =========================== EMBERDEEP CALDERA ==========================

  A.sootpip = `
  <defs><radialGradient id="sp12-b" cx="45%" cy="38%" r="70%">
    <stop offset="0%" stop-color="#6b5a58"/><stop offset="100%" stop-color="#3a2b2a"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="20" ry="4" fill="#000" opacity=".2"/>
  <ellipse cx="60" cy="72" rx="26" ry="24" fill="url(#sp12-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M36 66 C24 60 22 72 32 76 Z M84 66 C96 60 98 72 88 76 Z" fill="#544442" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M60 46 l-4 -12 9 8 Z" fill="#ff8f3a" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <circle cx="52" cy="68" r="5.4" fill="#ffd166"/><circle cx="52" cy="68" r="2.6" fill="${OL}"/>
  <circle cx="69" cy="68" r="5.4" fill="#ffd166"/><circle cx="69" cy="68" r="2.6" fill="${OL}"/>
  <path d="M55 80 L60 86 L65 80 Z" fill="#e0913a" stroke="${OL}" stroke-width="1.6" stroke-linejoin="round"/>
  <g stroke="#e0913a" stroke-width="3" stroke-linecap="round"><path d="M52 94 l-3 8 M70 94 l3 8"/></g>
  <g fill="#ff9a5a" class="glowpulse"><circle cx="34" cy="52" r="1.8"/><circle cx="88" cy="56" r="1.5"/></g>`;

  A.slagpup = `
  <defs><linearGradient id="sl-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ff9a4a"/><stop offset="45%" stop-color="#b8451c"/><stop offset="100%" stop-color="#3a201a"/></linearGradient></defs>
  <ellipse cx="60" cy="104" rx="24" ry="4.5" fill="#000" opacity=".2"/>
  <path d="M84 82 C102 76 104 60 94 56 C98 68 90 76 80 74 Z" fill="url(#sl-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="58" cy="76" rx="27" ry="21" fill="url(#sl-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="56" cy="54" r="19" fill="url(#sl-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 42 C32 30 44 28 48 40 Z M72 42 C80 30 68 28 64 40 Z" fill="#8a3418" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M42 62 q14 8 28 0" fill="none" stroke="#ffb45c" stroke-width="2.4" opacity=".8"/>
  <circle cx="49" cy="53" r="5" fill="#ffd166"/><circle cx="50" cy="53" r="2.4" fill="${OL}"/>
  <circle cx="64" cy="53" r="5" fill="#ffd166"/><circle cx="63" cy="53" r="2.4" fill="${OL}"/>
  <ellipse cx="56" cy="64" rx="4" ry="3" fill="#3a201a" stroke="${OL}" stroke-width="1.4"/>
  <g stroke="#3a201a" stroke-width="4" stroke-linecap="round"><path d="M46 94 l-3 8 M70 94 l3 8"/></g>
  <g fill="#ff8f3a" class="glowpulse"><circle cx="34" cy="70" r="2"/><circle cx="82" cy="88" r="1.6"/></g>`;

  A.charcoil = `
  <defs><linearGradient id="cc-b" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#ffb45c"/><stop offset="55%" stop-color="#d1541f"/><stop offset="100%" stop-color="#4a1f14"/></linearGradient></defs>
  <ellipse cx="60" cy="106" rx="26" ry="4.5" fill="#000" opacity=".2"/>
  <path d="M60 98 C24 98 22 68 48 66 C70 64 78 78 66 82 C56 85 52 76 60 72"
        fill="none" stroke="url(#cc-b)" stroke-width="13" stroke-linecap="round"/>
  <path d="M60 98 C24 98 22 68 48 66" fill="none" stroke="#ffd166" stroke-width="3" opacity=".55" stroke-linecap="round"/>
  <circle cx="76" cy="46" r="16" fill="url(#cc-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M78 60 C78 68 68 72 62 70" fill="none" stroke="url(#cc-b)" stroke-width="11" stroke-linecap="round"/>
  <path d="M88 50 l10 3 -9 4 Z" fill="#ff8f3a" stroke="${OL}" stroke-width="1.6" stroke-linejoin="round"/>
  <circle cx="72" cy="44" r="4.6" fill="#ffe9a3"/><ellipse cx="72" cy="44" rx="1.6" ry="3.4" fill="${OL}"/>
  <circle cx="83" cy="44" r="4.6" fill="#ffe9a3"/><ellipse cx="83" cy="44" rx="1.6" ry="3.4" fill="${OL}"/>
  <g fill="#ff9a5a" class="glowpulse"><circle cx="34" cy="84" r="2"/><circle cx="52" cy="76" r="1.5"/><circle cx="96" cy="34" r="1.6"/></g>`;

  A.basaltusk = `
  <defs><linearGradient id="bt12-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#6b6470"/><stop offset="100%" stop-color="#332d3a"/></linearGradient></defs>
  <ellipse cx="60" cy="104" rx="30" ry="5" fill="#000" opacity=".2"/>
  <path d="M30 76 C26 54 94 54 90 76 C90 94 30 94 30 76 Z" fill="url(#bt12-b)" stroke="${OL}" stroke-width="2.8"/>
  <g stroke="#4d4557" stroke-width="1.6" opacity=".8"><path d="M42 60 v32 M56 58 v34 M70 58 v34 M84 62 v28"/></g>
  <circle cx="42" cy="58" r="20" fill="url(#bt12-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M28 64 L14 60 L18 54 L28 56 Z M30 72 L16 74 L20 80 L31 76 Z" fill="#9a92a8" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="38" cy="55" r="4.6" fill="#ff9a5a"/><circle cx="38" cy="55" r="2.2" fill="${OL}"/>
  <circle cx="50" cy="55" r="4.6" fill="#ff9a5a"/><circle cx="50" cy="55" r="2.2" fill="${OL}"/>
  <ellipse cx="32" cy="66" rx="5" ry="3.4" fill="#241f2b" stroke="${OL}" stroke-width="1.4"/>
  <g stroke="#241f2b" stroke-width="5" stroke-linecap="round"><path d="M42 92 l-2 10 M58 94 l0 8 M74 94 l1 8 M86 90 l3 10"/></g>
  <g fill="#ff8f3a" opacity=".8"><circle cx="64" cy="70" r="1.6" class="glowpulse"/><circle cx="78" cy="76" r="1.3"/></g>`;

  A.pyrolith = `
  <defs>
    <linearGradient id="pl-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7a6a66"/><stop offset="100%" stop-color="#3a2a26"/></linearGradient>
    <radialGradient id="pl-f" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#fff3c4"/><stop offset="55%" stop-color="#ff8f3a"/><stop offset="100%" stop-color="#c23a10"/></radialGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="28" ry="5" fill="#000" opacity=".2"/>
  <g fill="url(#pl-b)" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round">
    <path d="M36 96 L30 62 L44 48 L76 48 L90 62 L84 96 Z"/>
    <path d="M30 66 L14 74 L20 90 L34 84 Z M90 66 L106 74 L100 90 L86 84 Z"/></g>
  <path d="M60 62 L48 76 L60 92 L72 76 Z" fill="url(#pl-f)" stroke="${OL}" stroke-width="2.4" class="glowpulse"/>
  <g stroke="#ff8f3a" stroke-width="2" opacity=".75"><path d="M42 58 h12 M66 58 h12 M46 88 h10 M64 88 h10"/></g>
  <path d="M44 48 L52 26 L68 26 L76 48 Z" fill="url(#pl-b)" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round"/>
  <rect x="50" y="32" width="20" height="7" rx="3.5" fill="#ffd166" stroke="${OL}" stroke-width="2"/>
  <circle cx="56" cy="35.5" r="2.2" fill="#c23a10"/><circle cx="65" cy="35.5" r="2.2" fill="#c23a10"/>
  <g stroke="#2b1e1a" stroke-width="5" stroke-linecap="round"><path d="M46 96 l-3 10 M74 96 l3 10"/></g>
  <g fill="#ffb45c" class="glowpulse"><circle cx="24" cy="52" r="2"/><circle cx="98" cy="54" r="1.7"/></g>`;

  A.ashenmaw = `
  <defs>
    <radialGradient id="am-b" cx="45%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#8a7c7a"/><stop offset="100%" stop-color="#3f3432"/></radialGradient>
    <radialGradient id="am-c" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#b8aca8" stop-opacity=".75"/><stop offset="100%" stop-color="#b8aca8" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="58" cy="66" r="52" fill="url(#am-c)"/>
  <ellipse cx="60" cy="104" rx="24" ry="4.5" fill="#000" opacity=".18"/>
  <path d="M86 84 C104 78 106 62 96 58 C100 70 92 78 82 76 Z" fill="url(#am-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="58" cy="76" rx="28" ry="21" fill="url(#am-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="54" cy="54" r="19" fill="url(#am-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M38 40 l-4 -14 14 10 Z M70 40 l4 -14 -14 10 Z" fill="#5a4c4a" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M38 62 L48 66 L38 70" fill="none" stroke="#ffd166" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="47" cy="52" r="5" fill="#ff8f3a" class="glowpulse"/><circle cx="47" cy="52" r="2.4" fill="${OL}"/>
  <circle cx="62" cy="52" r="5" fill="#ff8f3a" class="glowpulse"/><circle cx="62" cy="52" r="2.4" fill="${OL}"/>
  <path d="M44 68 q10 6 20 0" fill="none" stroke="#ffb45c" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="#2f2624" stroke-width="4.5" stroke-linecap="round"><path d="M46 94 l-3 9 M70 94 l3 9"/></g>`;

  A.volcanyx = `
  <defs>
    <linearGradient id="vx-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8a3a22"/><stop offset="55%" stop-color="#5a2214"/><stop offset="100%" stop-color="#2b120c"/></linearGradient>
    <radialGradient id="vx-a" cx="50%" cy="44%" r="62%">
      <stop offset="0%" stop-color="#ff9a3a" stop-opacity=".5"/><stop offset="100%" stop-color="#ff9a3a" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="58" fill="url(#vx-a)"/>
  <ellipse cx="60" cy="108" rx="30" ry="5" fill="#000" opacity=".22"/>
  <path d="M28 100 C16 84 22 66 34 60 C30 78 40 84 48 82" fill="url(#vx-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M92 100 C104 84 98 66 86 60 C90 78 80 84 72 82" fill="url(#vx-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M60 98 C38 98 32 76 38 60 C46 42 74 42 82 60 C88 76 82 98 60 98 Z" fill="url(#vx-b)" stroke="${OL}" stroke-width="3"/>
  <g stroke="#ff7a2a" stroke-width="2.4" opacity=".85" class="glowpulse"><path d="M44 70 h32 M42 80 h36 M48 90 h24"/></g>
  <circle cx="60" cy="48" r="20" fill="url(#vx-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 32 L34 8 L48 24 L60 4 L72 24 L86 8 L80 32 Z" fill="#c23a10" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <g fill="#ffd166" class="glowpulse"><circle cx="34" cy="12" r="2.2"/><circle cx="60" cy="8" r="2.4"/><circle cx="86" cy="12" r="2.2"/></g>
  <circle cx="52" cy="48" r="5.4" fill="#ffe9a3"/><circle cx="52" cy="48" r="2.6" fill="${OL}"/>
  <circle cx="68" cy="48" r="5.4" fill="#ffe9a3"/><circle cx="68" cy="48" r="2.6" fill="${OL}"/>
  <path d="M50 60 L60 66 L70 60" fill="none" stroke="#ffd166" stroke-width="2.6" stroke-linejoin="round"/>`;

  // ============================ QUEST CREATURES ===========================

  A.zephyrion = `
  <defs>
    <linearGradient id="zp-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eaf6ff"/><stop offset="55%" stop-color="#9fc4e0"/><stop offset="100%" stop-color="#5b7fa8"/></linearGradient>
    <radialGradient id="zp-a" cx="50%" cy="44%" r="62%">
      <stop offset="0%" stop-color="#cfe6ff" stop-opacity=".55"/><stop offset="100%" stop-color="#cfe6ff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="56" r="58" fill="url(#zp-a)"/>
  <ellipse cx="60" cy="108" rx="26" ry="5" fill="#000" opacity=".16"/>
  <g fill="url(#zp-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round">
    <path d="M48 58 C18 28 2 48 10 72 C26 60 38 58 48 68 Z"/>
    <path d="M72 58 C102 28 118 48 110 72 C94 60 82 58 72 68 Z"/></g>
  <g stroke="#ffd94d" stroke-width="2.4" fill="none" stroke-linecap="round" class="glowpulse">
    <path d="M22 52 l8 10 -5 1 6 9"/><path d="M98 52 l-8 10 5 1 -6 9"/></g>
  <path d="M60 94 C44 94 40 74 46 60 C52 46 68 46 74 60 C80 74 76 94 60 94 Z" fill="url(#zp-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="46" r="17" fill="url(#zp-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M46 32 l-5 -16 13 11 Z M74 32 l5 -16 -13 11 Z" fill="#c3dcee" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M52 20 l8 -12 8 12 Z" fill="#ffd94d" stroke="${OL}" stroke-width="2" stroke-linejoin="round" class="glowpulse"/>
  <circle cx="53" cy="45" r="4.8" fill="#fff"/><circle cx="53" cy="45" r="2.4" fill="${OL}"/>
  <circle cx="67" cy="45" r="4.8" fill="#fff"/><circle cx="67" cy="45" r="2.4" fill="${OL}"/>
  <path d="M54 56 q6 4 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3" stroke-linecap="round"><path d="M52 94 l-2 9 M69 94 l2 9"/></g>`;

  A.vulcanor = `
  <defs>
    <linearGradient id="vn-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#9a6a3a"/><stop offset="45%" stop-color="#5c3a20"/><stop offset="100%" stop-color="#2b1a10"/></linearGradient>
    <radialGradient id="vn-f" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#fffbe0"/><stop offset="45%" stop-color="#ffb45c"/><stop offset="100%" stop-color="#e04a1e"/></radialGradient>
    <radialGradient id="vn-a" cx="50%" cy="46%" r="62%">
      <stop offset="0%" stop-color="#ffb45c" stop-opacity=".5"/><stop offset="100%" stop-color="#ffb45c" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="58" fill="url(#vn-a)"/>
  <ellipse cx="60" cy="110" rx="30" ry="5" fill="#000" opacity=".22"/>
  <!-- great hammer over the shoulder -->
  <g><path d="M92 88 L74 40" stroke="#6b4a2a" stroke-width="6" stroke-linecap="round"/>
     <rect x="62" y="20" width="30" height="20" rx="4" fill="#7a7280" stroke="${OL}" stroke-width="2.6" transform="rotate(-18 77 30)"/>
     <path d="M66 26 l24 -8" stroke="#a29aa8" stroke-width="2" opacity=".7"/></g>
  <g fill="url(#vn-b)" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round">
    <path d="M34 100 L28 64 L44 48 L76 48 L92 64 L86 100 Z"/>
    <path d="M28 68 L10 76 L18 94 L34 86 Z"/></g>
  <path d="M60 62 L46 78 L60 96 L74 78 Z" fill="url(#vn-f)" stroke="${OL}" stroke-width="2.6" class="glowpulse"/>
  <g stroke="#ff8f3a" stroke-width="2.2" opacity=".8"><path d="M40 58 h14 M68 58 h14"/></g>
  <path d="M44 48 L50 22 L70 22 L76 48 Z" fill="url(#vn-b)" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round"/>
  <path d="M50 22 l-4 -12 12 8 Z M70 22 l4 -12 -12 8 Z" fill="#c23a10" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <rect x="48" y="30" width="24" height="8" rx="4" fill="#ffd166" stroke="${OL}" stroke-width="2"/>
  <circle cx="55" cy="34" r="2.4" fill="#c23a10"/><circle cx="66" cy="34" r="2.4" fill="#c23a10"/>
  <g stroke="#241610" stroke-width="5.5" stroke-linecap="round"><path d="M46 100 l-4 10 M76 100 l4 10"/></g>`;

  A.ashvane = `
  <defs><linearGradient id="av12-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffd166"/><stop offset="100%" stop-color="#d1541f"/></linearGradient></defs>
  <ellipse cx="60" cy="104" rx="18" ry="4" fill="#000" opacity=".16"/>
  <g stroke="${OL}" stroke-width="2.2" stroke-linejoin="round" fill="#ffb45c" opacity=".95">
    <path d="M50 58 C28 42 18 56 26 70 C36 62 44 62 50 66 Z"/>
    <path d="M70 58 C92 42 102 56 94 70 C84 62 76 62 70 66 Z"/></g>
  <ellipse cx="60" cy="72" rx="20" ry="22" fill="url(#av12-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M60 50 l-5 -14 11 10 Z" fill="#ff8f3a" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <circle cx="53" cy="68" r="5" fill="#fff"/><circle cx="53" cy="68" r="2.4" fill="${OL}"/>
  <circle cx="68" cy="68" r="5" fill="#fff"/><circle cx="68" cy="68" r="2.4" fill="${OL}"/>
  <path d="M55 80 q6 4 11 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#fff3c4" class="glowpulse"><circle cx="34" cy="52" r="2"/><circle cx="88" cy="54" r="1.8"/><circle cx="60" cy="98" r="1.6"/></g>`;

  A.nimbaros = `
  <defs>
    <linearGradient id="nm-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c8d4e0"/><stop offset="55%" stop-color="#7b8ba0"/><stop offset="100%" stop-color="#464f63"/></linearGradient>
    <radialGradient id="nm-a" cx="50%" cy="46%" r="62%">
      <stop offset="0%" stop-color="#9fb8d4" stop-opacity=".55"/><stop offset="100%" stop-color="#9fb8d4" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="58" fill="url(#nm-a)"/>
  <!-- its own permanent storm cloud -->
  <g fill="#5f6b7f" stroke="${OL}" stroke-width="2.4">
    <circle cx="36" cy="24" r="12"/><circle cx="58" cy="18" r="15"/><circle cx="80" cy="24" r="12"/>
    <rect x="30" y="22" width="60" height="14" rx="7"/></g>
  <g stroke="#a7c4e0" stroke-width="2.6" stroke-linecap="round" opacity=".9" class="sway">
    <path d="M38 40 l-3 10 M52 42 l-3 10 M68 42 l3 10 M82 40 l3 10"/></g>
  <path d="M46 34 l8 12 -5 1 7 11" fill="none" stroke="#ffd94d" stroke-width="2.6" stroke-linecap="round" class="glowpulse"/>
  <ellipse cx="60" cy="104" rx="24" ry="5" fill="#000" opacity=".15"/>
  <path d="M60 96 C44 96 40 78 46 64 C52 52 68 52 74 64 C80 78 76 96 60 96 Z" fill="url(#nm-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="60" r="16" fill="url(#nm-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="60" r="7" fill="#eaf4ff" opacity=".9" class="glowpulse"/>
  <circle cx="54" cy="58" r="4.4" fill="#fff"/><circle cx="54" cy="58" r="2.2" fill="${OL}"/>
  <circle cx="67" cy="58" r="4.4" fill="#fff"/><circle cx="67" cy="58" r="2.2" fill="${OL}"/>
  <path d="M55 70 q6 3 11 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3" stroke-linecap="round"><path d="M52 96 l-2 8 M69 96 l2 8"/></g>`;

  A.lumenwick = `
  <defs>
    <radialGradient id="lw-g" cx="50%" cy="42%" r="58%">
      <stop offset="0%" stop-color="#fff6cf" stop-opacity=".85"/><stop offset="100%" stop-color="#ffd94d" stop-opacity="0"/></radialGradient>
    <linearGradient id="lw-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8a7f9e"/><stop offset="100%" stop-color="#4a4260"/></linearGradient>
  </defs>
  <circle cx="60" cy="52" r="48" fill="url(#lw-g)"/>
  <ellipse cx="60" cy="104" rx="18" ry="4" fill="#000" opacity=".15"/>
  <!-- lantern body -->
  <path d="M44 44 h32 v40 a6 6 0 0 1 -6 6 h-20 a6 6 0 0 1 -6 -6 Z" fill="url(#lw-b)" stroke="${OL}" stroke-width="2.8"/>
  <rect x="40" y="36" width="40" height="10" rx="4" fill="#6b6182" stroke="${OL}" stroke-width="2.4"/>
  <path d="M50 36 v-6 a10 10 0 0 1 20 0 v6" fill="none" stroke="#8a7f9e" stroke-width="3"/>
  <rect x="50" y="52" width="20" height="26" rx="4" fill="#fff6cf" stroke="${OL}" stroke-width="2.2" class="glowpulse"/>
  <path d="M60 58 C56 64 56 70 60 74 C64 70 64 64 60 58 Z" fill="#ffb45c" stroke="#e0913a" stroke-width="1.4"/>
  <circle cx="54" cy="62" r="3.4" fill="#fff" stroke="${OL}" stroke-width="1.3"/><circle cx="54" cy="62" r="1.6" fill="${OL}"/>
  <circle cx="66" cy="62" r="3.4" fill="#fff" stroke="${OL}" stroke-width="1.3"/><circle cx="66" cy="62" r="1.6" fill="${OL}"/>
  <path d="M56 70 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="1.8" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3" stroke-linecap="round"><path d="M52 90 l-3 8 M69 90 l3 8"/></g>
  <g fill="#fff6cf" class="glowpulse"><circle cx="30" cy="52" r="2"/><circle cx="92" cy="58" r="1.7"/></g>`;

  A.chimerakit = `
  <defs>
    <linearGradient id="ck12-b" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8fd36a"/><stop offset="50%" stop-color="#e0b45c"/><stop offset="100%" stop-color="#e8703a"/></linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="24" ry="4.5" fill="#000" opacity=".15"/>
  <!-- ember tail -->
  <path d="M84 84 C104 78 106 60 96 54 C100 68 90 76 80 74 Z" fill="#e8703a" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M96 54 l4 -10 4 10 Z" fill="#ffd166" stroke="${OL}" stroke-width="1.6" stroke-linejoin="round" class="glowpulse"/>
  <ellipse cx="58" cy="76" rx="27" ry="21" fill="url(#ck12-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- patchwork stitching -->
  <path d="M58 56 L58 96" stroke="${OL}" stroke-width="1.6" stroke-dasharray="4 4" opacity=".6"/>
  <circle cx="56" cy="54" r="19" fill="url(#ck12-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- one leaf ear, one flame ear -->
  <path d="M40 40 C34 24 46 22 48 38 Z" fill="#5cb85c" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M44 32 l2 6" stroke="#3f7d33" stroke-width="1.4"/>
  <path d="M70 40 C74 22 84 30 76 42 Z" fill="#e8703a" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="49" cy="53" r="5" fill="#fff"/><circle cx="50" cy="53" r="2.4" fill="${OL}"/>
  <circle cx="64" cy="53" r="5" fill="#fff"/><circle cx="63" cy="53" r="2.4" fill="${OL}"/>
  <ellipse cx="56" cy="63" rx="3.6" ry="2.8" fill="#c9705a" stroke="${OL}" stroke-width="1.4"/>
  <path d="M50 70 q6 4 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3.4" stroke-linecap="round"><path d="M46 94 l-3 9 M68 94 l3 9"/></g>
  <g fill="#fff2c8"><circle cx="34" cy="66" r="1.6"/><circle cx="76" cy="86" r="1.4"/></g>`;

})(window.CRITTER_ART);
