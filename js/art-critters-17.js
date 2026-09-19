// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 17
//  Evolutions, wave 2. Each one deliberately echoes its base form — same
//  palette and silhouette cues, grown up.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // ------------------------------- Trillark (from Chirpit) --------------
  A.trillark = `
  <defs>
    <linearGradient id="tk-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffe9c4"/><stop offset="55%" stop-color="#e8a04a"/><stop offset="100%" stop-color="#a8642a"/></linearGradient>
    <radialGradient id="tk-a" cx="50%" cy="46%" r="60%">
      <stop offset="0%" stop-color="#ffe9a3" stop-opacity=".45"/><stop offset="100%" stop-color="#ffe9a3" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="56" r="52" fill="url(#tk-a)"/>
  <ellipse cx="60" cy="106" rx="18" ry="4" fill="#000" opacity=".13"/>
  <!-- song notes rolling out -->
  <g fill="#e8a04a" opacity=".85" class="sway">
    <g transform="translate(14 28)"><ellipse cx="0" cy="8" rx="4" ry="3"/><path d="M4 8 V-2 l7 -2 V6" fill="none" stroke="#e8a04a" stroke-width="2"/></g>
    <g transform="translate(94 40)"><ellipse cx="0" cy="6" rx="3.4" ry="2.6"/><path d="M3.4 6 V-2" stroke="#e8a04a" stroke-width="2"/></g>
  </g>
  <!-- open wings -->
  <g stroke="${OL}" stroke-width="2.4" stroke-linejoin="round" fill="url(#tk-b)">
    <path d="M50 62 C24 46 12 60 22 76 C34 68 44 66 50 70 Z"/>
    <path d="M70 62 C96 46 108 60 98 76 C86 68 76 66 70 70 Z"/></g>
  <g stroke="#a8642a" stroke-width="1.6" fill="none" opacity=".65"><path d="M28 58 l7 9 M92 58 l-7 9"/></g>
  <ellipse cx="60" cy="72" rx="15" ry="19" fill="url(#tk-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M60 90 C55 102 58 108 60 112 C62 108 65 102 60 90 Z" fill="#e8a04a" stroke="${OL}" stroke-width="2"/>
  <circle cx="60" cy="48" r="14" fill="url(#tk-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- crest -->
  <path d="M54 35 l-3 -12 8 8 Z M62 34 l4 -13 3 12 Z" fill="#ffd166" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M74 48 L90 52 L74 56 Z" fill="#ffd166" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <circle cx="56" cy="46" r="4.4" fill="#fff"/><circle cx="57" cy="46" r="2.2" fill="${OL}"/>
  <g stroke="${OL}" stroke-width="2.6" stroke-linecap="round"><path d="M55 90 l-2 8 M66 90 l2 8"/></g>`;

  // ---------------------------- Mosswarden (from Mossling) --------------
  A.mosswarden = `
  <defs><linearGradient id="mw-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#8fb77a"/><stop offset="50%" stop-color="#5f8a4a"/><stop offset="100%" stop-color="#3a5a2c"/></linearGradient></defs>
  <ellipse cx="60" cy="108" rx="34" ry="5" fill="#000" opacity=".2"/>
  <!-- big boulder body -->
  <path d="M18 92 C12 60 30 38 60 38 C90 38 108 60 102 92 C90 100 30 100 18 92 Z"
        fill="url(#mw-b)" stroke="${OL}" stroke-width="3"/>
  <!-- moss cap + saplings growing on its shoulders -->
  <path d="M22 62 C28 44 44 34 60 34 C76 34 92 44 98 62 C86 54 74 50 60 50 C46 50 34 54 22 62 Z"
        fill="#6fbf4f" stroke="${OL}" stroke-width="2.4"/>
  <g stroke="#3a5a2c" stroke-width="2.6" stroke-linecap="round" class="sway">
    <path d="M40 38 C38 28 42 24 41 18"/><path d="M78 40 C80 30 76 26 77 20"/></g>
  <g fill="#8fd36a"><circle cx="41" cy="16" r="5"/><circle cx="77" cy="18" r="4.4"/></g>
  <!-- stone arms -->
  <path d="M18 74 C6 76 4 92 14 96 C16 86 22 82 28 82 Z" fill="url(#mw-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M102 74 C114 76 116 92 106 96 C104 86 98 82 92 82 Z" fill="url(#mw-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <circle cx="48" cy="70" r="6.5" fill="#fff"/><circle cx="49" cy="71" r="3.2" fill="${OL}"/>
  <circle cx="72" cy="70" r="6.5" fill="#fff"/><circle cx="71" cy="71" r="3.2" fill="${OL}"/>
  <path d="M50 86 q10 6 20 0" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <g fill="#a4d17a" opacity=".8"><circle cx="30" cy="80" r="2.4"/><circle cx="90" cy="84" r="2"/></g>`;

  // ------------------------------ Rapidfin (from Finling) ---------------
  A.rapidfin = `
  <defs><linearGradient id="rf-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#cfeeff"/><stop offset="55%" stop-color="#4aa3df"/><stop offset="100%" stop-color="#26628f"/></linearGradient></defs>
  <ellipse cx="60" cy="104" rx="24" ry="4.5" fill="#000" opacity=".14"/>
  <!-- rushing water behind it -->
  <g stroke="#9fd6f5" stroke-width="3" stroke-linecap="round" opacity=".8" class="sway">
    <path d="M6 44 h20 M2 60 h24 M8 76 h18"/></g>
  <!-- tall sail fin -->
  <path d="M40 62 C44 22 78 20 86 44 C74 40 58 44 48 58 Z" fill="url(#rf-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <g stroke="#26628f" stroke-width="1.8" fill="none" opacity=".6"><path d="M52 52 L54 30 M62 46 L66 26 M72 44 L78 30"/></g>
  <path d="M34 70 C42 54 92 54 100 70 C92 88 42 88 34 70 Z" fill="url(#rf-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M34 70 L12 54 L20 70 L12 88 Z" fill="#4aa3df" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M56 84 C54 94 62 96 66 88" fill="#6fb8e0" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="86" cy="68" r="5.6" fill="#fff"/><circle cx="87" cy="68" r="2.7" fill="${OL}"/>
  <path d="M92 78 q6 3 10 -1" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#eafaff" class="glowpulse"><circle cx="60" cy="66" r="1.8"/><circle cx="74" cy="74" r="1.5"/></g>`;

  // ------------------------------ Granitor (from Rocklet) ---------------
  A.granitor = `
  <defs><linearGradient id="gr-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#c2b69c"/><stop offset="50%" stop-color="#8e8169"/><stop offset="100%" stop-color="#57503f"/></linearGradient></defs>
  <ellipse cx="60" cy="110" rx="32" ry="5" fill="#000" opacity=".2"/>
  <!-- standing-stone body -->
  <path d="M34 108 L28 40 L46 14 L74 14 L92 40 L86 108 Z" fill="url(#gr-b)" stroke="${OL}" stroke-width="3" stroke-linejoin="round"/>
  <g stroke="#6f6553" stroke-width="2" opacity=".75"><path d="M48 20 L52 104 M72 20 L68 104 M30 58 h60 M32 80 h56"/></g>
  <!-- carved runes -->
  <g stroke="#cfc4a8" stroke-width="2.2" stroke-linecap="round" opacity=".85">
    <path d="M40 66 v10 M40 71 h7 M76 66 v10 M72 66 l8 10"/></g>
  <!-- slab arms -->
  <path d="M28 52 L10 62 L14 82 L30 74 Z" fill="url(#gr-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M92 52 L110 62 L106 82 L90 74 Z" fill="url(#gr-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <circle cx="50" cy="44" r="6.2" fill="#fff"/><circle cx="51" cy="45" r="3" fill="${OL}"/>
  <circle cx="71" cy="44" r="6.2" fill="#fff"/><circle cx="70" cy="45" r="3" fill="${OL}"/>
  <path d="M51 58 q9 5 18 0" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <g fill="#a4c17a" opacity=".8"><ellipse cx="38" cy="98" rx="7" ry="3"/><ellipse cx="82" cy="102" rx="6" ry="2.6"/></g>`;

  // ------------------------------ Duneveil (from Duneling) --------------
  A.duneveil = `
  <defs>
    <linearGradient id="dv-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f6e2b8"/><stop offset="55%" stop-color="#d9a86c"/><stop offset="100%" stop-color="#a3763f"/></linearGradient>
    <radialGradient id="dv-a" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#f0d9a8" stop-opacity=".55"/><stop offset="100%" stop-color="#f0d9a8" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="62" r="54" fill="url(#dv-a)"/>
  <ellipse cx="60" cy="104" rx="24" ry="4.5" fill="#000" opacity=".13"/>
  <!-- the sand veil -->
  <g stroke="#f0d9a8" stroke-width="3" stroke-linecap="round" opacity=".85" class="sway">
    <path d="M14 46 C30 40 42 44 50 40"/><path d="M12 62 C30 56 44 62 54 56"/><path d="M18 80 C34 74 46 80 56 74"/></g>
  <path d="M84 84 C104 78 106 58 94 52 C98 68 90 78 78 76 Z" fill="url(#dv-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M94 52 l6 -6 1 8 Z" fill="#fff6e0" stroke="${OL}" stroke-width="1.6" stroke-linejoin="round"/>
  <ellipse cx="58" cy="76" rx="26" ry="19" fill="url(#dv-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="56" cy="54" r="18" fill="url(#dv-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- big fox ears -->
  <path d="M40 40 L30 14 L52 32 Z M72 40 L84 14 L62 32 Z" fill="url(#dv-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M42 36 L36 22 L48 32 Z M70 36 L78 22 L64 32 Z" fill="#f6e2b8"/>
  <path d="M40 60 q16 4 32 0" fill="none" stroke="#f6e2b8" stroke-width="3" opacity=".8"/>
  <circle cx="49" cy="53" r="5" fill="#fff"/><circle cx="50" cy="53" r="2.4" fill="${OL}"/>
  <circle cx="64" cy="53" r="5" fill="#fff"/><circle cx="63" cy="53" r="2.4" fill="${OL}"/>
  <ellipse cx="56" cy="63" rx="3.6" ry="2.8" fill="#8a5a2a" stroke="${OL}" stroke-width="1.4"/>
  <g stroke="${OL}" stroke-width="3.2" stroke-linecap="round"><path d="M46 92 l-3 8 M70 92 l3 8"/></g>`;

  // ------------------------------ Bogbaron (from Bogbit) ----------------
  A.bogbaron = `
  <defs><linearGradient id="bb-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7fa86a"/><stop offset="55%" stop-color="#4a6b42"/><stop offset="100%" stop-color="#263a26"/></linearGradient></defs>
  <ellipse cx="60" cy="104" rx="30" ry="5" fill="#000" opacity=".18"/>
  <!-- reeds and still water -->
  <g stroke="#5f8a4a" stroke-width="3" stroke-linecap="round" opacity=".8" class="sway">
    <path d="M14 104 C12 84 16 72 14 58"/><path d="M106 104 C108 84 104 72 106 60"/></g>
  <g fill="#8a6f3a"><ellipse cx="14" cy="54" rx="3.4" ry="8"/><ellipse cx="106" cy="56" rx="3.4" ry="8"/></g>
  <!-- broad squat body -->
  <path d="M22 84 C18 58 102 58 98 84 C98 98 22 98 22 84 Z" fill="url(#bb-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M34 88 q26 10 52 0" fill="none" stroke="#2f4a2c" stroke-width="2.2" opacity=".7"/>
  <!-- wide head with high-set eyes -->
  <path d="M28 62 C28 40 92 40 92 62 Z" fill="url(#bb-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="44" cy="44" r="10" fill="url(#bb-b)" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="76" cy="44" r="10" fill="url(#bb-b)" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="44" cy="43" r="5.4" fill="#ffd166"/><ellipse cx="44" cy="43" rx="2" ry="4" fill="${OL}"/>
  <circle cx="76" cy="43" r="5.4" fill="#ffd166"/><ellipse cx="76" cy="43" rx="2" ry="4" fill="${OL}"/>
  <path d="M40 66 q20 10 40 0" fill="none" stroke="${OL}" stroke-width="2.8" stroke-linecap="round"/>
  <!-- the croak -->
  <path d="M60 72 q-8 8 0 12 q8 -4 0 -12 Z" fill="#6f9a5a" opacity=".8" class="glowpulse"/>
  <g stroke="#263a26" stroke-width="4" stroke-linecap="round"><path d="M34 96 l-8 6 M86 96 l8 6"/></g>`;

  // ----------------------------- Noctilume (from Glowbat) ---------------
  A.noctilume = `
  <defs>
    <linearGradient id="nl-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8a7fb0"/><stop offset="55%" stop-color="#4f4470"/><stop offset="100%" stop-color="#2a2340"/></linearGradient>
    <radialGradient id="nl-g" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#fff6cf" stop-opacity=".8"/><stop offset="100%" stop-color="#ffd94d" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="62" r="52" fill="url(#nl-g)" opacity=".55"/>
  <!-- hanging from the ceiling -->
  <path d="M40 6 H80" stroke="#4a4260" stroke-width="4" stroke-linecap="round"/>
  <path d="M60 8 V22" stroke="${OL}" stroke-width="3"/>
  <!-- broad wings spread like a lantern shade -->
  <g fill="url(#nl-b)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round">
    <path d="M54 44 C24 40 8 62 14 84 C30 70 42 66 54 70 Z"/>
    <path d="M66 44 C96 40 112 62 106 84 C90 70 78 66 66 70 Z"/></g>
  <g stroke="#6f5f92" stroke-width="1.8" fill="none" opacity=".7">
    <path d="M24 58 L40 66 M22 72 L42 72 M96 58 L80 66 M98 72 L78 72"/></g>
  <ellipse cx="60" cy="58" rx="16" ry="20" fill="url(#nl-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- the lantern glow in its chest -->
  <circle cx="60" cy="62" r="8" fill="#fff6cf" stroke="${OL}" stroke-width="2" class="glowpulse"/>
  <path d="M48 34 l-4 -14 12 10 Z M72 34 l4 -14 -12 10 Z" fill="#4f4470" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="54" cy="44" r="4.4" fill="#ffd166"/><circle cx="54" cy="44" r="2.1" fill="${OL}"/>
  <circle cx="67" cy="44" r="4.4" fill="#ffd166"/><circle cx="67" cy="44" r="2.1" fill="${OL}"/>
  <g stroke="${OL}" stroke-width="2.4" stroke-linecap="round"><path d="M54 78 l-2 8 M67 78 l2 8"/></g>`;

  // ------------------------------ Coralynx (from Coralkit) --------------
  A.coralynx = `
  <defs><radialGradient id="cy-b" cx="45%" cy="38%" r="70%">
    <stop offset="0%" stop-color="#9ff0e4"/><stop offset="60%" stop-color="#3fa89e"/><stop offset="100%" stop-color="#1f5f63"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="28" ry="4.5" fill="#000" opacity=".15"/>
  <!-- coral mane -->
  <g fill="#ff8f6b" stroke="${OL}" stroke-width="2" stroke-linejoin="round">
    <path d="M34 48 C26 30 38 26 42 42 Z"/><path d="M50 40 C46 20 58 20 58 38 Z"/>
    <path d="M70 40 C72 20 84 22 78 40 Z"/><path d="M86 50 C94 34 102 42 92 54 Z"/></g>
  <g fill="#ff6f9a" stroke="${OL}" stroke-width="1.8"><path d="M42 36 C40 24 48 24 48 34 Z"/><path d="M76 36 C80 24 88 28 82 38 Z"/></g>
  <!-- long prowling body -->
  <path d="M88 88 C108 82 110 62 98 56 C102 72 94 82 82 80 Z" fill="url(#cy-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="58" cy="76" rx="30" ry="20" fill="url(#cy-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="56" cy="56" r="19" fill="url(#cy-b)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 42 L34 24 L50 36 Z M72 42 L78 24 L62 36 Z" fill="url(#cy-b)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="49" cy="55" r="5.4" fill="#fff6cf"/><ellipse cx="49" cy="55" rx="2" ry="4" fill="${OL}"/>
  <circle cx="64" cy="55" r="5.4" fill="#fff6cf"/><ellipse cx="64" cy="55" rx="2" ry="4" fill="${OL}"/>
  <path d="M52 66 L56 70 L60 66" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <g stroke="${OL}" stroke-width="1.4"><path d="M46 68 L32 66 M46 71 L32 74 M66 68 L80 66"/></g>
  <g stroke="#1f5f63" stroke-width="4" stroke-linecap="round"><path d="M42 94 l-3 8 M74 94 l3 8"/></g>`;

  // ------------------------------- Cumulon (from Nimbik) ----------------
  A.cumulon = `
  <defs>
    <radialGradient id="cm-b" cx="45%" cy="34%" r="72%">
      <stop offset="0%" stop-color="#ffffff"/><stop offset="55%" stop-color="#c3d2df"/><stop offset="100%" stop-color="#7b8ba0"/></radialGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="30" ry="5" fill="#000" opacity=".14"/>
  <!-- towering thunderhead body -->
  <g fill="url(#cm-b)" stroke="${OL}" stroke-width="2.8">
    <circle cx="32" cy="74" r="18"/><circle cx="60" cy="62" r="24"/><circle cx="88" cy="74" r="18"/>
    <rect x="28" y="72" width="64" height="26" rx="13"/></g>
  <!-- lightning underneath -->
  <path d="M52 98 l8 12 -5 1 7 11" fill="none" stroke="#ffd94d" stroke-width="3" stroke-linecap="round" class="glowpulse"/>
  <g stroke="#9fb0c4" stroke-width="2.4" stroke-linecap="round" opacity=".8"><path d="M38 100 l-3 8 M84 100 l3 8"/></g>
  <!-- curled ram horns -->
  <path d="M38 52 C22 48 18 66 30 70 C30 60 34 56 42 56 Z" fill="#c9b48a" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M82 52 C98 48 102 66 90 70 C90 60 86 56 78 56 Z" fill="#c9b48a" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <g stroke="#a3906a" stroke-width="1.6" fill="none"><path d="M26 58 h9 M94 58 h-9"/></g>
  <circle cx="51" cy="62" r="6" fill="#fff"/><circle cx="52" cy="63" r="2.9" fill="${OL}"/>
  <circle cx="70" cy="62" r="6" fill="#fff"/><circle cx="69" cy="63" r="2.9" fill="${OL}"/>
  <path d="M53 76 q8 5 16 0" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <g fill="#ffd94d" class="glowpulse"><circle cx="20" cy="56" r="2"/><circle cx="102" cy="58" r="1.8"/></g>`;

  // ----------------------------- Emberoost (from Sootpip) ---------------
  A.emberoost = `
  <defs>
    <linearGradient id="er-b" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffd166"/><stop offset="45%" stop-color="#e8703a"/><stop offset="100%" stop-color="#7a2b12"/></linearGradient>
    <radialGradient id="er-a" cx="50%" cy="48%" r="62%">
      <stop offset="0%" stop-color="#ff9a3a" stop-opacity=".5"/><stop offset="100%" stop-color="#ff9a3a" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="60" cy="58" r="56" fill="url(#er-a)"/>
  <ellipse cx="60" cy="106" rx="22" ry="4.5" fill="#000" opacity=".18"/>
  <!-- ash it has just risen from -->
  <path d="M28 100 C36 92 84 92 92 100 C80 106 40 106 28 100 Z" fill="#4a3f3c" stroke="${OL}" stroke-width="2.2"/>
  <!-- broad flame wings -->
  <g stroke="${OL}" stroke-width="2.6" stroke-linejoin="round" fill="url(#er-b)">
    <path d="M48 64 C18 48 6 66 16 84 C30 74 40 70 48 74 Z"/>
    <path d="M72 64 C102 48 114 66 104 84 C90 74 80 70 72 74 Z"/></g>
  <g stroke="#ffd166" stroke-width="2" fill="none" opacity=".8"><path d="M24 66 l8 10 M96 66 l-8 10"/></g>
  <!-- tail plumes -->
  <path d="M60 88 C50 102 56 108 60 112 C64 108 70 102 60 88 Z" fill="url(#er-b)" stroke="${OL}" stroke-width="2.2"/>
  <ellipse cx="60" cy="72" rx="17" ry="20" fill="url(#er-b)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="46" r="14" fill="url(#er-b)" stroke="${OL}" stroke-width="2.8"/>
  <!-- flame crest -->
  <path d="M50 34 C50 16 58 22 60 10 C64 22 70 18 70 34 Z" fill="#ffd166" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round" class="glowpulse"/>
  <path d="M74 46 L90 50 L74 54 Z" fill="#ffd166" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <circle cx="56" cy="45" r="4.6" fill="#fff6cf"/><circle cx="57" cy="45" r="2.2" fill="${OL}"/>
  <g stroke="#7a2b12" stroke-width="3" stroke-linecap="round"><path d="M54 90 l-3 8 M67 90 l3 8"/></g>
  <g fill="#ffb45c" class="glowpulse"><circle cx="30" cy="40" r="2"/><circle cx="92" cy="36" r="1.8"/></g>`;

})(window.CRITTER_ART);
