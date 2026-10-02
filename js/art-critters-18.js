// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 18
//  Bosses of the second quest wave: five for numbers, five for words.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // ------------------------------- Equilibrog (balance toad) ------------
  A.equilibrog = `
  <defs><linearGradient id="eq-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#9fdc9a"/><stop offset="100%" stop-color="#3f8f5a"/></linearGradient></defs>
  <ellipse cx="60" cy="108" rx="40" ry="5" fill="#000" opacity=".15"/>
  <!-- lily-pad scale beam held overhead -->
  <g class="sway">
    <path d="M18 30 H102" stroke="${OL}" stroke-width="3" stroke-linecap="round"/>
    <path d="M60 30 V44" stroke="${OL}" stroke-width="3"/>
    <path d="M18 30 l-8 14 h16 Z M102 30 l-8 14 h16 Z" fill="none" stroke="#c9a227" stroke-width="2"/>
    <ellipse cx="18" cy="45" rx="11" ry="3.5" fill="#6fbf6a" stroke="${OL}" stroke-width="2"/>
    <ellipse cx="102" cy="45" rx="11" ry="3.5" fill="#6fbf6a" stroke="${OL}" stroke-width="2"/>
    <text x="18" y="42" font-size="9" text-anchor="middle" font-weight="700" fill="${OL}">x</text>
    <text x="102" y="42" font-size="9" text-anchor="middle" font-weight="700" fill="${OL}">7</text>
    <circle cx="60" cy="28" r="4" fill="#c9a227" stroke="${OL}" stroke-width="2"/></g>
  <path d="M22 98 C16 70 34 52 60 52 C86 52 104 70 98 98 C84 106 36 106 22 98 Z" fill="url(#eq-b)" stroke="${OL}" stroke-width="3"/>
  <path d="M36 96 C40 80 80 80 84 96" fill="#e9f7c8" stroke="${OL}" stroke-width="2"/>
  <text x="60" y="95" font-size="14" text-anchor="middle" font-weight="800" fill="#3f8f5a">=</text>
  <circle cx="44" cy="56" r="10" fill="url(#eq-b)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="76" cy="56" r="10" fill="url(#eq-b)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="44" cy="56" r="5" fill="#fff"/><circle cx="45" cy="56" r="2.6" fill="${OL}"/>
  <circle cx="76" cy="56" r="5" fill="#fff"/><circle cx="77" cy="56" r="2.6" fill="${OL}"/>
  <path d="M48 72 C56 77 64 77 72 72" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <g fill="#3f8f5a" stroke="${OL}" stroke-width="2"><path d="M20 100 l-8 6 h14 Z"/><path d="M100 100 l8 6 h-14 Z"/></g>`;

  // ------------------------------- Divvybear (sharing bear) -------------
  A.divvybear = `
  <defs><linearGradient id="dvb-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#c9925e"/><stop offset="100%" stop-color="#7a4e2a"/></linearGradient></defs>
  <ellipse cx="60" cy="109" rx="38" ry="5" fill="#000" opacity=".16"/>
  <path d="M22 104 C14 74 30 50 60 50 C90 50 106 74 98 104 Z" fill="url(#dvb-b)" stroke="${OL}" stroke-width="3"/>
  <ellipse cx="60" cy="86" rx="20" ry="16" fill="#f0d3a8" stroke="${OL}" stroke-width="2"/>
  <!-- three equal honey plates -->
  <g stroke="${OL}" stroke-width="2">
    <ellipse cx="30" cy="104" rx="11" ry="4" fill="#fffdf5"/><ellipse cx="60" cy="106" rx="11" ry="4" fill="#fffdf5"/><ellipse cx="90" cy="104" rx="11" ry="4" fill="#fffdf5"/></g>
  <g fill="#f2b631" stroke="${OL}" stroke-width="1.6">
    <circle cx="27" cy="101" r="3"/><circle cx="33" cy="101" r="3"/>
    <circle cx="57" cy="103" r="3"/><circle cx="63" cy="103" r="3"/>
    <circle cx="87" cy="101" r="3"/><circle cx="93" cy="101" r="3"/></g>
  <circle cx="60" cy="40" r="24" fill="url(#dvb-b)" stroke="${OL}" stroke-width="3"/>
  <circle cx="40" cy="22" r="8" fill="url(#dvb-b)" stroke="${OL}" stroke-width="2.6"/><circle cx="80" cy="22" r="8" fill="url(#dvb-b)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="40" cy="22" r="3.6" fill="#f0d3a8"/><circle cx="80" cy="22" r="3.6" fill="#f0d3a8"/>
  <ellipse cx="60" cy="50" rx="11" ry="8" fill="#f0d3a8" stroke="${OL}" stroke-width="2"/>
  <ellipse cx="60" cy="46" rx="4" ry="3" fill="${OL}"/>
  <path d="M55 53 C58 56 62 56 65 53" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <path d="M46 36 c3 -3 6 -3 8 0 M66 36 c3 -3 6 -3 8 0" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <!-- leafy ÷ badge -->
  <circle cx="60" cy="74" r="7" fill="#7fc24a" stroke="${OL}" stroke-width="2"/>
  <g fill="${OL}"><circle cx="60" cy="70.5" r="1.4"/><circle cx="60" cy="77.5" r="1.4"/></g>
  <path d="M55.5 74 h9" stroke="${OL}" stroke-width="1.8"/>`;

  // ------------------------------- Quotaur (ledger bull) -----------------
  A.quotaur = `
  <defs><linearGradient id="qt-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#a7a3c9"/><stop offset="100%" stop-color="#4c4878"/></linearGradient></defs>
  <ellipse cx="60" cy="109" rx="42" ry="5" fill="#000" opacity=".18"/>
  <path d="M16 102 C12 72 28 56 60 56 C92 56 108 72 104 102 Z" fill="url(#qt-b)" stroke="${OL}" stroke-width="3"/>
  <!-- long-division bracket carved on its chest -->
  <path d="M42 80 C46 86 46 94 42 100 M42 80 H84" fill="none" stroke="#ffe08a" stroke-width="3" stroke-linecap="round"/>
  <text x="36" y="95" font-size="11" text-anchor="end" font-weight="800" fill="#ffe08a">6</text>
  <text x="64" y="95" font-size="11" text-anchor="middle" font-weight="800" fill="#ffe08a">462</text>
  <text x="68" y="77" font-size="10" text-anchor="middle" font-weight="800" fill="#fff7d6">77</text>
  <!-- horns -->
  <path d="M36 30 C18 26 12 12 18 6 C24 16 32 18 42 22 Z M84 30 C102 26 108 12 102 6 C96 16 88 18 78 22 Z" fill="#f2e6c9" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <g stroke="#b9a77a" stroke-width="1.4"><path d="M22 12 l4 3 M26 18 l3 3 M98 12 l-4 3 M94 18 l-3 3"/></g>
  <path d="M38 22 C38 12 82 12 82 22 L86 46 C80 60 40 60 34 46 Z" fill="url(#qt-b)" stroke="${OL}" stroke-width="3"/>
  <ellipse cx="60" cy="48" rx="15" ry="9" fill="#cfc9e6" stroke="${OL}" stroke-width="2"/>
  <circle cx="54" cy="48" r="2.4" fill="${OL}"/><circle cx="66" cy="48" r="2.4" fill="${OL}"/>
  <path d="M56 56 h8" stroke="#ffe08a" stroke-width="2.2"/><circle cx="60" cy="57" r="3" fill="none" stroke="#ffe08a" stroke-width="2"/>
  <circle cx="49" cy="32" r="4.4" fill="#fff"/><circle cx="50" cy="32" r="2.4" fill="${OL}"/>
  <circle cx="71" cy="32" r="4.4" fill="#fff"/><circle cx="72" cy="32" r="2.4" fill="${OL}"/>
  <path d="M43 26 l9 2 M77 26 l-9 2" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>`;

  // ------------------------------- Halvarr (splitfin pike) ---------------
  A.halvarr = `
  <defs><linearGradient id="hv-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#dff4ff"/><stop offset="55%" stop-color="#7fb8d8"/><stop offset="100%" stop-color="#3d6f9a"/></linearGradient></defs>
  <g fill="none" stroke="#7fc4e0" stroke-width="2" opacity=".6" class="sway">
    <path d="M8 96 C24 90 36 102 52 96 C68 90 80 102 96 96 C104 93 110 94 114 96"/>
    <path d="M14 106 C28 101 40 110 56 106 C72 101 84 110 100 106"/></g>
  <!-- tail -->
  <path d="M90 58 L114 38 L108 60 L114 82 Z" fill="#7fb8d8" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <!-- long body -->
  <path d="M10 60 C24 40 70 38 92 58 C70 80 24 80 10 60 Z" fill="url(#hv-b)" stroke="${OL}" stroke-width="3"/>
  <!-- the seam: a fraction bar with dots -->
  <path d="M30 60 H84" stroke="#fffdf5" stroke-width="2.4" stroke-dasharray="5 3"/>
  <circle cx="58" cy="52" r="2.2" fill="#fffdf5"/><circle cx="58" cy="68" r="2.2" fill="#fffdf5"/>
  <path d="M50 40 L60 26 L70 42 Z M50 80 L60 92 L70 78 Z" fill="#7fb8d8" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="24" cy="56" r="5.4" fill="#fff" stroke="${OL}" stroke-width="2"/><circle cx="23" cy="56" r="2.8" fill="${OL}"/>
  <path d="M10 62 L20 64" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#fff" opacity=".8"><circle cx="40" cy="48" r="1.6"/><circle cx="76" cy="50" r="1.4"/></g>`;

  // ------------------------------- Sapientowl (examiner owl) -------------
  A.sapientowl = `
  <defs><linearGradient id="so-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#d8c7f0"/><stop offset="100%" stop-color="#6c56a8"/></linearGradient></defs>
  <ellipse cx="60" cy="110" rx="26" ry="4" fill="#000" opacity=".16"/>
  <!-- perch: a stack of exam papers -->
  <g stroke="${OL}" stroke-width="2"><rect x="34" y="98" width="52" height="7" rx="1.5" fill="#fffdf5"/>
    <rect x="38" y="92" width="44" height="7" rx="1.5" fill="#f4ecd8"/></g>
  <g stroke="#c9b98f" stroke-width="1"><path d="M40 102 h40 M42 95 h36"/></g>
  <path d="M30 60 C26 34 40 22 60 22 C80 22 94 34 90 60 C88 82 76 94 60 94 C44 94 32 82 30 60 Z" fill="url(#so-b)" stroke="${OL}" stroke-width="3"/>
  <path d="M30 60 C18 64 16 80 24 88 C30 78 34 70 36 66 Z M90 60 C102 64 104 80 96 88 C90 78 86 70 84 66 Z" fill="#6c56a8" stroke="${OL}" stroke-width="2.4"/>
  <path d="M40 24 L34 10 L48 20 Z M80 24 L86 10 L72 20 Z" fill="#6c56a8" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="60" cy="74" rx="16" ry="16" fill="#efe6fb" stroke="${OL}" stroke-width="2"/>
  <g fill="none" stroke="#a48fd0" stroke-width="1.6"><path d="M50 70 q3 3 6 0 M58 76 q3 3 6 0 M52 82 q3 3 6 0 M64 70 q3 3 6 0"/></g>
  <!-- spectacles -->
  <circle cx="48" cy="44" r="10" fill="#fff" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="72" cy="44" r="10" fill="#fff" stroke="${OL}" stroke-width="2.6"/>
  <path d="M58 44 h4" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="49" cy="45" r="4" fill="${OL}"/><circle cx="73" cy="45" r="4" fill="${OL}"/>
  <path d="M56 54 L60 62 L64 54 Z" fill="#f2b631" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <!-- tiny mortarboard -->
  <path d="M42 18 L60 10 L78 18 L60 26 Z" fill="${OL}"/><path d="M76 18 v10" stroke="#f2b631" stroke-width="2"/><circle cx="76" cy="29" r="2" fill="#f2b631"/>`;

  // ------------------------------- Melliqueen (hive monarch) -------------
  A.melliqueen = `
  <defs><linearGradient id="mq-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ffe27a"/><stop offset="100%" stop-color="#e09a1a"/></linearGradient>
    <radialGradient id="mq-a" cx="50%" cy="50%" r="55%"><stop offset="0%" stop-color="#fff3b0" stop-opacity=".55"/><stop offset="100%" stop-color="#fff3b0" stop-opacity="0"/></radialGradient></defs>
  <circle cx="60" cy="58" r="54" fill="url(#mq-a)"/>
  <!-- honeycomb letters -->
  <g stroke="#c98a12" stroke-width="1.6" fill="#ffe9a8" opacity=".9">
    <path d="M12 86 l6 -4 6 4 v7 l-6 4 -6 -4 Z"/><path d="M96 86 l6 -4 6 4 v7 l-6 4 -6 -4 Z"/><path d="M102 22 l6 -4 6 4 v7 l-6 4 -6 -4 Z"/></g>
  <g font-size="7.5" font-weight="800" text-anchor="middle" fill="#8a5a08">
    <text x="18" y="92">b</text><text x="102" y="92">e</text><text x="108" y="28">e</text></g>
  <!-- wings -->
  <g fill="#eaf7ff" stroke="${OL}" stroke-width="2" opacity=".92" class="sway">
    <ellipse cx="34" cy="44" rx="20" ry="11" transform="rotate(-25 34 44)"/>
    <ellipse cx="86" cy="44" rx="20" ry="11" transform="rotate(25 86 44)"/></g>
  <ellipse cx="60" cy="80" rx="20" ry="24" fill="url(#mq-b)" stroke="${OL}" stroke-width="3"/>
  <g stroke="${OL}" stroke-width="5" fill="none" stroke-linecap="round"><path d="M43 74 Q60 80 77 74"/><path d="M42 88 Q60 94 78 88"/></g>
  <circle cx="60" cy="46" r="16" fill="url(#mq-b)" stroke="${OL}" stroke-width="3"/>
  <circle cx="53" cy="46" r="4.6" fill="#fff"/><circle cx="54" cy="46" r="2.6" fill="${OL}"/>
  <circle cx="67" cy="46" r="4.6" fill="#fff"/><circle cx="68" cy="46" r="2.6" fill="${OL}"/>
  <path d="M55 54 C58 57 62 57 65 54" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <path d="M54 32 C50 22 44 20 42 22 M66 32 C70 22 76 20 78 22" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <!-- crown -->
  <path d="M48 32 L50 22 L55 28 L60 18 L65 28 L70 22 L72 32 Z" fill="#ffd34d" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="60" cy="25" r="2" fill="#e04a6a"/>`;

  // ------------------------------- Tomewyrm (bookworm drake) -------------
  A.tomewyrm = `
  <defs><linearGradient id="tw-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8fbf8a"/><stop offset="100%" stop-color="#3f6a4a"/></linearGradient></defs>
  <ellipse cx="60" cy="108" rx="44" ry="5" fill="#000" opacity=".16"/>
  <!-- coiled body round a big open book -->
  <path d="M14 96 C8 70 26 58 46 64 C30 74 28 90 44 96 C64 104 92 100 100 84 C108 66 92 54 78 58" fill="none" stroke="${OL}" stroke-width="17" stroke-linecap="round"/>
  <path d="M14 96 C8 70 26 58 46 64 C30 74 28 90 44 96 C64 104 92 100 100 84 C108 66 92 54 78 58" fill="none" stroke="url(#tw-b)" stroke-width="12" stroke-linecap="round"/>
  <g stroke="#d6e9c4" stroke-width="1.6" opacity=".8"><path d="M20 80 l5 3 M40 98 l3 -5 M70 101 l0 -6 M96 88 l-5 -2"/></g>
  <path d="M40 92 L60 84 L80 92 L80 72 L60 64 L40 72 Z" fill="#fffdf5" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M60 64 V84" stroke="${OL}" stroke-width="2"/>
  <g stroke="#9a8a6a" stroke-width="1.2"><path d="M45 76 l11 -4 M45 81 l11 -4 M64 72 l11 4 M64 77 l11 4"/></g>
  <!-- head with reading glasses -->
  <path d="M62 50 C60 30 76 20 90 26 C102 30 104 44 96 52 C88 58 70 60 62 50 Z" fill="url(#tw-b)" stroke="${OL}" stroke-width="3"/>
  <path d="M82 24 L86 10 L92 24 Z M94 30 L104 20 L102 34 Z" fill="#a8d08a" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="78" cy="38" r="7" fill="#fff" stroke="${OL}" stroke-width="2.2"/><circle cx="94" cy="40" r="6" fill="#fff" stroke="${OL}" stroke-width="2.2"/>
  <path d="M85 38 h3" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="78" cy="40" r="2.8" fill="${OL}"/><circle cx="94" cy="42" r="2.6" fill="${OL}"/>
  <path d="M68 50 C74 54 80 54 86 52" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>`;

  // ------------------------------- Glyphawk (lettered falcon) ------------
  A.glyphawk = `
  <defs><linearGradient id="gh-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#eef8ff"/><stop offset="100%" stop-color="#7aa6d0"/></linearGradient></defs>
  <!-- frost letters scattered by the wind -->
  <g font-size="12" font-weight="800" fill="#9fd0f0" opacity=".85" class="sway">
    <text x="10" y="22" transform="rotate(-14 10 22)">s</text><text x="102" y="18" transform="rotate(12 102 18)">p</text>
    <text x="8" y="104">l</text><text x="104" y="100" transform="rotate(-10 104 100)">e</text></g>
  <path d="M60 52 C34 34 14 38 6 50 C22 50 34 56 44 66 Z" fill="url(#gh-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M60 52 C86 34 106 38 114 50 C98 50 86 56 76 66 Z" fill="url(#gh-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <g stroke="#7aa6d0" stroke-width="1.6"><path d="M16 48 l10 6 M26 44 l10 8 M104 48 l-10 6 M94 44 l-10 8"/></g>
  <path d="M60 46 C74 46 80 60 78 76 C76 90 68 98 60 98 C52 98 44 90 42 76 C40 60 46 46 60 46 Z" fill="url(#gh-b)" stroke="${OL}" stroke-width="3"/>
  <path d="M52 98 L48 110 L56 104 L60 112 L64 104 L72 110 L68 98 Z" fill="#7aa6d0" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <g fill="none" stroke="#7aa6d0" stroke-width="1.6"><path d="M52 72 q3 3 6 0 M62 72 q3 3 6 0 M56 82 q3 3 6 0"/></g>
  <circle cx="60" cy="36" r="14" fill="url(#gh-b)" stroke="${OL}" stroke-width="3"/>
  <path d="M46 34 C50 30 56 30 58 34 M62 34 C64 30 70 30 74 34" fill="#3a4a6a" stroke="none"/>
  <circle cx="53" cy="36" r="3.6" fill="#ffd34d" stroke="${OL}" stroke-width="1.6"/><circle cx="53" cy="36" r="1.6" fill="${OL}"/>
  <circle cx="67" cy="36" r="3.6" fill="#ffd34d" stroke="${OL}" stroke-width="1.6"/><circle cx="67" cy="36" r="1.6" fill="${OL}"/>
  <path d="M56 42 L60 50 L64 42 Z" fill="#f2b631" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>`;

  // ------------------------------- Scriptide (ink ray) -------------------
  A.scriptide = `
  <defs><linearGradient id="sct-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5a6fa8"/><stop offset="100%" stop-color="#232a52"/></linearGradient></defs>
  <g fill="none" stroke="#7fc4e0" stroke-width="2" opacity=".55"><path d="M4 100 C20 94 32 106 48 100 C64 94 76 106 92 100 C102 96 110 98 116 100"/></g>
  <!-- half-washed word on the water -->
  <text x="60" y="114" font-size="11" text-anchor="middle" font-weight="800" fill="#5a6fa8" opacity=".75" letter-spacing="2">w_r_s</text>
  <path d="M60 30 C80 30 106 46 114 62 C96 64 80 70 66 82 L60 86 L54 82 C40 70 24 64 6 62 C14 46 40 30 60 30 Z" fill="url(#sct-b)" stroke="${OL}" stroke-width="3" stroke-linejoin="round"/>
  <g fill="#9fb4e8" opacity=".7"><circle cx="34" cy="52" r="2"/><circle cx="86" cy="52" r="2"/><circle cx="44" cy="62" r="1.6"/><circle cx="76" cy="62" r="1.6"/></g>
  <!-- quill tail -->
  <path d="M60 86 C62 96 70 100 78 96" fill="none" stroke="${OL}" stroke-width="3" stroke-linecap="round"/>
  <path d="M76 98 L90 84 L82 100 Z" fill="#fffdf5" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <path d="M60 46 C66 46 70 52 70 58 C70 64 66 68 60 68 C54 68 50 64 50 58 C50 52 54 46 60 46 Z" fill="#7d8fc8" stroke="${OL}" stroke-width="2"/>
  <circle cx="54" cy="56" r="4.4" fill="#fff"/><circle cx="55" cy="56" r="2.4" fill="${OL}"/>
  <circle cx="66" cy="56" r="4.4" fill="#fff"/><circle cx="67" cy="56" r="2.4" fill="${OL}"/>
  <path d="M56 63 C58 65 62 65 64 63" fill="none" stroke="${OL}" stroke-width="1.8" stroke-linecap="round"/>`;

  // ------------------------------- Lexicorn (champion of the bee) --------
  A.lexicorn = `
  <defs><linearGradient id="lx-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#fffaf0"/><stop offset="100%" stop-color="#e3d6f5"/></linearGradient>
    <linearGradient id="lx-m" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#ff9ac2"/><stop offset="50%" stop-color="#ffd34d"/><stop offset="100%" stop-color="#7fc4e0"/></linearGradient>
    <radialGradient id="lx-a" cx="50%" cy="45%" r="58%"><stop offset="0%" stop-color="#ffe9a3" stop-opacity=".5"/><stop offset="100%" stop-color="#ffe9a3" stop-opacity="0"/></radialGradient></defs>
  <circle cx="60" cy="56" r="54" fill="url(#lx-a)"/>
  <ellipse cx="60" cy="110" rx="36" ry="4" fill="#000" opacity=".15"/>
  <!-- body + legs -->
  <path d="M30 70 C30 58 44 54 66 56 C86 58 96 66 94 78 C92 88 80 90 66 90 C46 90 30 84 30 70 Z" fill="url(#lx-b)" stroke="${OL}" stroke-width="3"/>
  <g stroke="${OL}" stroke-width="2.6" fill="url(#lx-b)"><rect x="36" y="84" width="8" height="22" rx="3"/><rect x="50" y="86" width="8" height="20" rx="3"/>
    <rect x="72" y="86" width="8" height="20" rx="3"/><rect x="84" y="82" width="8" height="24" rx="3"/></g>
  <path d="M94 70 C106 66 112 76 108 88 C104 80 100 78 94 78 Z" fill="url(#lx-m)" stroke="${OL}" stroke-width="2"/>
  <!-- neck + head -->
  <path d="M34 66 C28 52 26 40 32 30 L48 34 C46 46 46 56 50 64 Z" fill="url(#lx-b)" stroke="${OL}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M30 30 C26 22 34 16 44 18 C54 20 58 30 52 36 C46 42 36 40 30 30 Z" fill="url(#lx-b)" stroke="${OL}" stroke-width="3"/>
  <path d="M38 22 C42 14 48 10 54 12 C50 18 48 26 50 34" fill="url(#lx-m)" stroke="${OL}" stroke-width="2" opacity=".9"/>
  <!-- lettered spiral horn -->
  <path d="M38 18 L30 -2 L44 16 Z" transform="translate(0 4)" fill="#ffd34d" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <g stroke="#c98a12" stroke-width="1.2"><path d="M33 14 l5 -1 M32 9 l4 -1 M31 5 l3 0"/></g>
  <circle cx="40" cy="28" r="3.4" fill="#fff"/><circle cx="40.6" cy="28" r="2" fill="${OL}"/>
  <!-- ribbon medal -->
  <path d="M58 60 L54 74 L60 70 L66 74 L62 60 Z" fill="#e04a6a" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="60" cy="60" r="6" fill="#ffd34d" stroke="${OL}" stroke-width="2"/>
  <text x="60" y="63" font-size="7" text-anchor="middle" font-weight="800" fill="${OL}">A</text>`;
})(window.CRITTER_ART);
