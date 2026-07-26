// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 4
//  Frostpeak Tundra, Glowfen Marsh, + the Rimewyrd legendary.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // ---------------------------------------------------------------- Snowlet
  A.snowlet = `
  <defs>
    <radialGradient id="sn-body" cx="45%" cy="32%" r="78%">
      <stop offset="0%" stop-color="#ffffff"/><stop offset="70%" stop-color="#eef6fb"/><stop offset="100%" stop-color="#cfe2ee"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="27" ry="6" fill="#7fa8c4" opacity=".22"/>
  <path d="M40 34 C32 18 36 8 44 8 C51 8 52 24 50 40 Z" fill="url(#sn-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M80 34 C88 18 84 8 76 8 C69 8 68 24 70 40 Z" fill="url(#sn-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M43 31 C38 20 41 13 45 13 C48 14 48 24 47 34 Z" fill="#bfd9e8"/>
  <path d="M77 31 C82 20 79 13 75 13 C72 14 72 24 73 34 Z" fill="#bfd9e8"/>
  <ellipse cx="60" cy="86" rx="26" ry="20" fill="url(#sn-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="56" r="23" fill="url(#sn-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="92" rx="14" ry="10" fill="#fbfeff"/>
  <circle cx="51" cy="54" r="4.4" fill="${OL}"/><circle cx="52.6" cy="52.4" r="1.6" fill="#fff"/>
  <circle cx="69" cy="54" r="4.4" fill="${OL}"/><circle cx="70.6" cy="52.4" r="1.6" fill="#fff"/>
  <ellipse cx="60" cy="63" rx="4.2" ry="3.2" fill="#7fa8c4" stroke="${OL}" stroke-width="1.6"/>
  <path d="M60 66 L60 69 M56 72 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <ellipse cx="44" cy="63" rx="4.4" ry="3" fill="#a8d4ea" opacity=".9"/>
  <ellipse cx="76" cy="63" rx="4.4" ry="3" fill="#a8d4ea" opacity=".9"/>
  <g fill="url(#sn-body)" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="42" cy="100" rx="8.5" ry="5.5"/><ellipse cx="78" cy="100" rx="8.5" ry="5.5"/>
  </g>
  <path d="M84 82 C96 78 100 68 96 60" fill="none" stroke="url(#sn-body)" stroke-width="8" stroke-linecap="round"/>
  <path d="M84 82 C96 78 100 68 96 60" fill="none" stroke="${OL}" stroke-width="1.6" stroke-linecap="round" opacity=".5"/>
  <g stroke="#bfe6f7" stroke-width="1.8" stroke-linecap="round">
    <path d="M22 32 l0 8 M18 34 l8 4 M26 34 l-8 4" fill="none">
      <animateTransform attributeName="transform" type="rotate" values="0 22 36;180 22 36" dur="9s" repeatCount="indefinite"/>
    </path>
    <path d="M100 26 l0 7 M97 28 l6 3 M103 28 l-6 3" fill="none">
      <animateTransform attributeName="transform" type="rotate" values="0 100 29.5;-180 100 29.5" dur="11s" repeatCount="indefinite"/>
    </path>
  </g>`;

  // ---------------------------------------------------------------- Cryssal
  A.cryssal = `
  <defs>
    <linearGradient id="cy-ice" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eafaff" stop-opacity=".95"/><stop offset="55%" stop-color="#a8dcf2" stop-opacity=".9"/><stop offset="100%" stop-color="#6fb8db" stop-opacity=".95"/>
    </linearGradient>
    <radialGradient id="cy-glow" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="#dff6ff" stop-opacity=".55"/><stop offset="100%" stop-color="#dff6ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="58" r="46" fill="url(#cy-glow)"/>
  <ellipse cx="60" cy="106" rx="18" ry="4" fill="#7fa8c4" opacity=".2"/>
  <path d="M60 8 L74 44 L68 92 L60 108 L52 92 L46 44 Z" fill="url(#cy-ice)" stroke="#4f9dc4" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M60 12 L66 44 L62 88 L60 98 Z" fill="#fbfeff" opacity=".75"/>
  <path d="M46 44 L74 44" stroke="#4f9dc4" stroke-width="1.8" opacity=".7"/>
  <path d="M36 52 L48 40 L50 58 Z" fill="url(#cy-ice)" stroke="#4f9dc4" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M84 52 L72 40 L70 58 Z" fill="url(#cy-ice)" stroke="#4f9dc4" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="54" cy="52" r="4" fill="#2f5f7a"/><circle cx="55.4" cy="50.6" r="1.4" fill="#fff"/>
  <circle cx="66" cy="52" r="4" fill="#2f5f7a"/><circle cx="67.4" cy="50.6" r="1.4" fill="#fff"/>
  <path d="M56 61 q4 3.5 8 0" fill="none" stroke="#2f5f7a" stroke-width="2.2" stroke-linecap="round"/>
  <ellipse cx="48" cy="59" rx="3.6" ry="2.4" fill="#8fd4f0" opacity=".9"/>
  <ellipse cx="72" cy="59" rx="3.6" ry="2.4" fill="#8fd4f0" opacity=".9"/>
  <g stroke="#dff6ff" stroke-width="2" stroke-linecap="round" opacity=".95">
    <path d="M22 40 l0 10 M17 43 l10 5 M27 43 l-10 5" fill="none">
      <animateTransform attributeName="transform" type="rotate" values="0 22 45;180 22 45" dur="8s" repeatCount="indefinite"/>
    </path>
    <path d="M98 66 l0 9 M94 68 l9 4 M103 68 l-9 4" fill="none">
      <animateTransform attributeName="transform" type="rotate" values="0 98 70.5;-180 98 70.5" dur="10s" repeatCount="indefinite"/>
    </path>
  </g>
  <g fill="#fff">
    <circle cx="34" cy="82" r="1.6"><animate attributeName="opacity" values="1;.2;1" dur="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="88" cy="88" r="1.4"><animate attributeName="opacity" values=".2;1;.2" dur="2.1s" repeatCount="indefinite"/></circle>
    <circle cx="60" cy="4" r="1.5"><animate attributeName="opacity" values=".6;.1;.6" dur="1.5s" repeatCount="indefinite"/></circle>
  </g>`;

  // --------------------------------------------------------------- Woolhorn
  A.woolhorn = `
  <defs>
    <radialGradient id="wh-wool" cx="45%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#fbf7ee"/><stop offset="100%" stop-color="#ddd4c2"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="34" ry="6" fill="#7fa8c4" opacity=".22"/>
  <g fill="url(#wh-wool)" stroke="${OL}" stroke-width="2.6">
    <circle cx="34" cy="74" r="14"/><circle cx="52" cy="66" r="16"/><circle cx="72" cy="66" r="16"/>
    <circle cx="88" cy="76" r="13"/><circle cx="44" cy="86" r="14"/><circle cx="64" cy="88" r="15"/><circle cx="82" cy="88" r="12"/>
  </g>
  <g fill="url(#wh-wool)" stroke="none">
    <circle cx="52" cy="70" r="14"/><circle cx="70" cy="70" r="14"/><circle cx="60" cy="82" r="14"/><circle cx="44" cy="80" r="12"/><circle cx="80" cy="80" r="12"/>
  </g>
  <g stroke="#c9bfa8" stroke-width="1.6" fill="none" opacity=".8">
    <path d="M46 72 q5 4 10 0 M64 70 q5 4 10 0 M52 86 q5 4 10 0"/>
  </g>
  <g fill="#6e604a" stroke="${OL}" stroke-width="2.6">
    <path d="M40 100 l0 8 l8 0 l0 -8" /><path d="M72 100 l0 8 l8 0 l0 -8"/>
  </g>
  <circle cx="60" cy="48" r="18" fill="#c4b8a2" stroke="${OL}" stroke-width="2.8"/>
  <path d="M42 42 C28 40 22 50 26 60 C32 66 42 62 44 54 C38 54 34 50 38 46 Z" fill="#e8dcc0" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M78 42 C92 40 98 50 94 60 C88 66 78 62 76 54 C82 54 86 50 82 46 Z" fill="#e8dcc0" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M32 48 q6 -1 9 3 M88 48 q-6 -1 -9 3" stroke="#b8a888" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <circle cx="53" cy="46" r="3.8" fill="${OL}"/><circle cx="54.4" cy="44.6" r="1.4" fill="#fff"/>
  <circle cx="67" cy="46" r="3.8" fill="${OL}"/><circle cx="68.4" cy="44.6" r="1.4" fill="#fff"/>
  <ellipse cx="60" cy="56" rx="9" ry="6.5" fill="#d8c8ac" stroke="${OL}" stroke-width="2"/>
  <ellipse cx="56.5" cy="55" rx="1.8" ry="2.4" fill="${OL}"/><ellipse cx="63.5" cy="55" rx="1.8" ry="2.4" fill="${OL}"/>
  <path d="M56 60 q4 3 8 0" stroke="${OL}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <g fill="#fff" opacity=".9">
    <circle cx="20" cy="28" r="1.6"><animate attributeName="opacity" values=".9;.2;.9" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="24" r="1.4"><animate attributeName="opacity" values=".2;.9;.2" dur="1.7s" repeatCount="indefinite"/></circle>
  </g>`;

  // -------------------------------------------------------------- Glacierne
  A.glacierne = `
  <defs>
    <linearGradient id="gl-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#dff2fb"/><stop offset="55%" stop-color="#9fd0e8"/><stop offset="100%" stop-color="#6fa8c9"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="34" ry="6" fill="#5f8aa8" opacity=".25"/>
  <ellipse cx="60" cy="80" rx="31" ry="26" fill="url(#gl-body)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="#c9e8f7" opacity=".85">
    <path d="M38 66 L48 62 L46 76 L36 78 Z"/><path d="M70 62 L82 66 L84 78 L72 76 Z"/><path d="M52 88 L64 86 L66 98 L54 98 Z"/>
  </g>
  <g stroke="#5f9ec7" stroke-width="1.8" fill="none" opacity=".8">
    <path d="M40 70 L50 66 M74 66 L82 70 M54 90 L64 88"/>
  </g>
  <circle cx="60" cy="48" r="23" fill="url(#gl-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="41" cy="30" r="9" fill="#b3ddf0" stroke="${OL}" stroke-width="2.5"/>
  <circle cx="79" cy="30" r="9" fill="#b3ddf0" stroke="${OL}" stroke-width="2.5"/>
  <circle cx="41" cy="30" r="4" fill="#7fb8d6"/><circle cx="79" cy="30" r="4" fill="#7fb8d6"/>
  <circle cx="51" cy="45" r="4.2" fill="${OL}"/><circle cx="52.6" cy="43.4" r="1.5" fill="#fff"/>
  <circle cx="69" cy="45" r="4.2" fill="${OL}"/><circle cx="70.6" cy="43.4" r="1.5" fill="#fff"/>
  <ellipse cx="60" cy="56" rx="13" ry="10" fill="#e8f6fd" stroke="${OL}" stroke-width="2.2"/>
  <ellipse cx="60" cy="53" rx="4.6" ry="3.4" fill="#3f6e88"/>
  <path d="M56 60 q4 3.5 8 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M52 63 q8 5 16 0" fill="none" stroke="${OL}" stroke-width="1.8" stroke-linecap="round" opacity=".55"/>
  <g fill="#b3ddf0" stroke="${OL}" stroke-width="2.6">
    <ellipse cx="36" cy="100" rx="11" ry="7"/><ellipse cx="84" cy="100" rx="11" ry="7"/>
  </g>
  <g stroke="#eafaff" stroke-width="2.4" stroke-linecap="round">
    <path d="M30 97 l-3 -4 M36 96 l0 -5 M42 97 l3 -4 M78 97 l-3 -4 M84 96 l0 -5 M90 97 l3 -4" fill="none"/>
  </g>
  <g fill="#fff" opacity=".9">
    <circle cx="18" cy="46" r="1.6"><animate attributeName="opacity" values=".9;.2;.9" dur="2.3s" repeatCount="indefinite"/></circle>
    <circle cx="104" cy="52" r="1.5"><animate attributeName="opacity" values=".2;.9;.2" dur="1.9s" repeatCount="indefinite"/></circle>
  </g>`;

  // ----------------------------------------------------------------- Bogbit
  A.bogbit = `
  <defs>
    <radialGradient id="bg-body" cx="42%" cy="32%" r="78%">
      <stop offset="0%" stop-color="#8fbf72"/><stop offset="70%" stop-color="#5f8f4a"/><stop offset="100%" stop-color="#44693a"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="100" rx="34" ry="8" fill="#4a5f3f" opacity=".45"/>
  <path d="M74 62 C92 56 102 44 98 32 C94 44 84 50 76 52" fill="url(#bg-body)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M98 32 C102 38 100 46 94 48" fill="#78ad60" opacity=".8"/>
  <ellipse cx="52" cy="66" rx="30" ry="26" fill="url(#bg-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="52" cy="76" rx="17" ry="12" fill="#a8cf8c" opacity=".85"/>
  <circle cx="40" cy="52" r="10" fill="url(#bg-body)" stroke="${OL}" stroke-width="2.5"/>
  <circle cx="64" cy="50" r="10" fill="url(#bg-body)" stroke="${OL}" stroke-width="2.5"/>
  <circle cx="40" cy="52" r="5.2" fill="#f7e9a8" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="64" cy="50" r="5.2" fill="#f7e9a8" stroke="${OL}" stroke-width="1.8"/>
  <ellipse cx="40.8" cy="52.6" rx="2" ry="2.8" fill="${OL}"/><ellipse cx="64.8" cy="50.6" rx="2" ry="2.8" fill="${OL}"/>
  <path d="M40 70 Q52 80 66 70" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M44 72 l1.5 4 M60 73 l-1.5 4" stroke="#e8f2dc" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="32" cy="70" rx="4.4" ry="3" fill="#f2a2b6" opacity=".7"/>
  <ellipse cx="72" cy="68" rx="4.4" ry="3" fill="#f2a2b6" opacity=".7"/>
  <g fill="#5f8f4a" stroke="${OL}" stroke-width="2.2">
    <ellipse cx="38" cy="92" rx="8" ry="5"/><ellipse cx="64" cy="93" rx="8" ry="5"/>
  </g>
  <g fill="#6f8f5f" opacity=".9">
    <circle cx="22" cy="86" r="3"><animate attributeName="cy" values="86;80;86" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;.2;.9" dur="3s" repeatCount="indefinite"/></circle>
    <circle cx="92" cy="88" r="2.4"><animate attributeName="cy" values="88;82;88" dur="2.5s" repeatCount="indefinite"/><animate attributeName="opacity" values=".2;.9;.2" dur="2.5s" repeatCount="indefinite"/></circle>
  </g>
  <path d="M14 96 q8 -4 16 0 M88 98 q8 -4 16 0" stroke="#5f7a52" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;

  // --------------------------------------------------------------- Wispwick
  A.wispwick = `
  <defs>
    <radialGradient id="ww-flame" cx="50%" cy="60%" r="60%">
      <stop offset="0%" stop-color="#f0fff4"/><stop offset="45%" stop-color="#9ff2c4"/><stop offset="100%" stop-color="#4fc78f"/>
    </radialGradient>
    <radialGradient id="ww-halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#9ff2c4" stop-opacity=".55"/><stop offset="100%" stop-color="#9ff2c4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="52" r="48" fill="url(#ww-halo)">
    <animate attributeName="r" values="48;53;48" dur="3s" repeatCount="indefinite"/>
  </circle>
  <g stroke="#4a6b52" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".85">
    <path d="M18 100 q10 -5 20 0 q10 5 20 0 q10 -5 20 0 q8 4 16 0"/>
  </g>
  <path d="M60 92 C46 88 38 74 42 58 C46 44 58 34 60 20 C64 34 76 44 80 58 C84 74 74 88 60 92 Z"
        fill="url(#ww-flame)" stroke="#2f8f66" stroke-width="2.4" stroke-linejoin="round">
    <animate attributeName="opacity" values="1;.82;1" dur="1.8s" repeatCount="indefinite"/>
  </path>
  <path d="M60 82 C52 78 48 68 51 58 C54 48 58 42 60 34 C63 44 68 50 70 60 C72 70 68 78 60 82 Z" fill="#e8fff2" opacity=".65"/>
  <circle cx="53" cy="60" r="4.4" fill="#1f4f3a"/><circle cx="54.6" cy="58.4" r="1.6" fill="#eafff4"/>
  <circle cx="67" cy="60" r="4.4" fill="#1f4f3a"/><circle cx="68.6" cy="58.4" r="1.6" fill="#eafff4"/>
  <path d="M55 70 q5 4 10 0" fill="none" stroke="#1f4f3a" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M56 71 l1.4 3 M64 71 l-1.4 3" stroke="#eafff4" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M60 20 C58 12 62 6 66 4" stroke="#7fe0b0" stroke-width="2.6" fill="none" stroke-linecap="round">
    <animate attributeName="d" values="M60 20 C58 12 62 6 66 4;M60 20 C62 12 58 6 54 4;M60 20 C58 12 62 6 66 4" dur="2.6s" repeatCount="indefinite"/>
  </path>
  <g fill="#c4ffe0">
    <circle cx="30" cy="46" r="2.4"><animate attributeName="cy" values="46;36;46" dur="3.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;.1;.9" dur="3.4s" repeatCount="indefinite"/></circle>
    <circle cx="92" cy="54" r="2"><animate attributeName="cy" values="54;44;54" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values=".2;.9;.2" dur="2.8s" repeatCount="indefinite"/></circle>
    <circle cx="80" cy="30" r="1.6"><animate attributeName="cy" values="30;22;30" dur="3.1s" repeatCount="indefinite"/><animate attributeName="opacity" values=".7;.1;.7" dur="3.1s" repeatCount="indefinite"/></circle>
  </g>`;

  // --------------------------------------------------------------- Mirelurch
  A.mirelurch = `
  <defs>
    <linearGradient id="ml-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7a8f5a"/><stop offset="100%" stop-color="#4e6338"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="98" rx="42" ry="9" fill="#4a5f3f" opacity=".4"/>
  <path d="M18 84 C14 76 18 68 26 68 C34 68 38 76 34 86 Z" fill="url(#ml-body)" stroke="${OL}" stroke-width="2.4"/>
  <ellipse cx="62" cy="78" rx="34" ry="18" fill="url(#ml-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="62" cy="84" rx="20" ry="9" fill="#9fb37a" opacity=".7"/>
  <g fill="#6c9c3f" stroke="${OL}" stroke-width="1.8">
    <ellipse cx="48" cy="66" rx="9" ry="5" transform="rotate(-18 48 66)"/>
    <ellipse cx="70" cy="64" rx="8" ry="4.4" transform="rotate(12 70 64)"/>
  </g>
  <g stroke="#3c6e30" stroke-width="2.2" fill="none" stroke-linecap="round">
    <path d="M44 62 C42 52 46 46 44 40 M46 42 l-5 -4 M46 48 l5 -3"/>
    <path d="M72 60 C74 52 70 46 72 40 M72 44 l5 -4 M72 50 l-5 -3"/>
  </g>
  <circle cx="96" cy="72" r="6" fill="#c9a86c" stroke="${OL}" stroke-width="2"/>
  <path d="M96 72 a6 6 0 1 1 -4 -5" fill="none" stroke="#8a6f47" stroke-width="1.8"/>
  <path d="M90 68 C88 62 92 58 96 60" stroke="#c9a86c" stroke-width="3" fill="none" stroke-linecap="round"/>
  <ellipse cx="30" cy="72" rx="15" ry="13" fill="url(#ml-body)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="24" cy="68" r="4" fill="#f7e9a8" stroke="${OL}" stroke-width="1.6"/><ellipse cx="24.6" cy="68.4" rx="1.6" ry="2.4" fill="${OL}"/>
  <circle cx="36" cy="67" r="4" fill="#f7e9a8" stroke="${OL}" stroke-width="1.6"/><ellipse cx="36.6" cy="67.4" rx="1.6" ry="2.4" fill="${OL}"/>
  <path d="M22 78 q8 4 15 1" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="url(#ml-body)" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="44" cy="93" rx="9" ry="5"/><ellipse cx="78" cy="93" rx="9" ry="5"/>
  </g>
  <g fill="#6f8f5f" opacity=".85">
    <circle cx="14" cy="88" r="2.6"><animate attributeName="cy" values="88;82;88" dur="3.2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".85;.2;.85" dur="3.2s" repeatCount="indefinite"/></circle>
    <circle cx="104" cy="86" r="2.2"><animate attributeName="cy" values="86;80;86" dur="2.7s" repeatCount="indefinite"/><animate attributeName="opacity" values=".2;.85;.2" dur="2.7s" repeatCount="indefinite"/></circle>
  </g>`;

  // ---------------------------------------------------------------- Fenfrond
  A.fenfrond = `
  <defs>
    <linearGradient id="ff-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4e7a4a"/><stop offset="100%" stop-color="#2f5236"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="26" ry="6" fill="#2f4030" opacity=".35"/>
  <g stroke="#3f7d46" stroke-width="2.6" fill="none" stroke-linecap="round" class="sway">
    <path d="M56 60 C40 50 26 34 22 14 M46 48 l-10 -3 M40 40 l-9 -6 M34 30 l-7 -7"/>
    <path d="M64 60 C80 50 94 34 98 14 M74 48 l10 -3 M80 40 l9 -6 M86 30 l7 -7"/>
    <path d="M60 56 C58 38 60 24 60 8 M60 40 l-8 -8 M60 40 l8 -8 M60 26 l-7 -7 M60 26 l7 -7"/>
  </g>
  <path d="M44 96 C38 76 44 60 60 60 C76 60 82 76 76 96 Z" fill="url(#ff-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M50 76 C48 86 50 92 54 96 M70 76 C72 86 70 92 66 96" stroke="#7fa86e" stroke-width="1.8" fill="none" opacity=".7"/>
  <circle cx="53" cy="72" r="4.6" fill="#d8f2c4" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="67" cy="72" r="4.6" fill="#d8f2c4" stroke="${OL}" stroke-width="1.8"/>
  <ellipse cx="53.6" cy="72.4" rx="1.8" ry="3" fill="${OL}"/><ellipse cx="67.6" cy="72.4" rx="1.8" ry="3" fill="${OL}"/>
  <path d="M55 84 q5 3 10 0" fill="none" stroke="#8fbf72" stroke-width="2" stroke-linecap="round"/>
  <g fill="url(#ff-body)" stroke="${OL}" stroke-width="2.4">
    <path d="M46 96 l-4 10 l10 -2 Z"/><path d="M74 96 l4 10 l-10 -2 Z"/>
  </g>
  <path d="M40 84 C30 86 24 94 26 102" stroke="#3f7d46" stroke-width="3" fill="none" stroke-linecap="round" class="sway"/>
  <path d="M80 84 C90 86 96 94 94 102" stroke="#3f7d46" stroke-width="3" fill="none" stroke-linecap="round" class="sway"/>
  <g fill="#a3d98c" opacity=".85"><circle cx="26" cy="102" r="2.4"/><circle cx="94" cy="102" r="2.4"/></g>
  <g fill="#c8e6a8" opacity=".8"><circle cx="34" cy="66" r="1.6"/><circle cx="88" cy="62" r="1.4"/></g>`;

  // -------------------------------------------------------------- Lanternjaw
  A.lanternjaw = `
  <defs>
    <radialGradient id="lj-body" cx="42%" cy="32%" r="78%">
      <stop offset="0%" stop-color="#6f9c8a"/><stop offset="70%" stop-color="#456e60"/><stop offset="100%" stop-color="#2e4c44"/>
    </radialGradient>
    <radialGradient id="lj-lure" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#fffbe0"/><stop offset="60%" stop-color="#ffe066"/><stop offset="100%" stop-color="#f0b429"/>
    </radialGradient>
    <radialGradient id="lj-halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffe066" stop-opacity=".5"/><stop offset="100%" stop-color="#ffe066" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="102" rx="38" ry="8" fill="#2b3d38" opacity=".4"/>
  <circle cx="84" cy="24" r="26" fill="url(#lj-halo)">
    <animate attributeName="r" values="26;30;26" dur="2.6s" repeatCount="indefinite"/>
  </circle>
  <path d="M56 52 C56 38 64 28 76 24" fill="none" stroke="#3f5f54" stroke-width="4" stroke-linecap="round"/>
  <circle cx="84" cy="24" r="10" fill="url(#lj-lure)" stroke="#c27c14" stroke-width="2.2">
    <animate attributeName="r" values="10;11.4;10" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="80.5" cy="20.5" r="2.6" fill="#fff" opacity=".9"/>
  <ellipse cx="56" cy="74" rx="34" ry="26" fill="url(#lj-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="56" cy="84" rx="20" ry="13" fill="#9ec4b2" opacity=".8"/>
  <path d="M24 78 C36 92 76 92 88 78 C80 92 70 98 56 98 C42 98 32 92 24 78 Z" fill="#243b36" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <g fill="#f4f0dc" stroke="${OL}" stroke-width="1.2">
    <path d="M32 82 l4 8 l4 -8 Z"/><path d="M44 86 l4 8 l4 -8 Z"/><path d="M56 88 l4 8 l4 -8 Z"/><path d="M68 86 l4 8 l4 -8 Z"/><path d="M78 82 l4 7 l4 -7 Z"/>
  </g>
  <circle cx="42" cy="62" r="9" fill="#f7e9a8" stroke="${OL}" stroke-width="2.4"/>
  <ellipse cx="43" cy="62" rx="3.4" ry="5" fill="${OL}"/><circle cx="44.4" cy="59.6" r="1.5" fill="#fff"/>
  <circle cx="68" cy="60" r="7.5" fill="#f7e9a8" stroke="${OL}" stroke-width="2.2"/>
  <ellipse cx="69" cy="60" rx="2.8" ry="4.2" fill="${OL}"/><circle cx="70.2" cy="58" r="1.3" fill="#fff"/>
  <g fill="#6f9c8a" stroke="${OL}" stroke-width="2.2">
    <path d="M22 68 C10 64 6 54 12 48 C16 56 22 60 26 62 Z"/>
    <path d="M90 68 C102 64 106 54 100 48 C96 56 90 60 86 62 Z"/>
  </g>
  <g fill="#ffe066" opacity=".9">
    <circle cx="100" cy="42" r="2"><animate attributeName="opacity" values=".9;.2;.9" dur="1.9s" repeatCount="indefinite"/></circle>
    <circle cx="70" cy="14" r="1.6"><animate attributeName="opacity" values=".2;.9;.2" dur="2.2s" repeatCount="indefinite"/></circle>
  </g>`;

  // --------------------------------------------------------------- Rimewyrd
  A.rimewyrd = `
  <defs>
    <linearGradient id="rw-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eaf6fb"/><stop offset="55%" stop-color="#bcd9e8"/><stop offset="100%" stop-color="#8fb4c9"/>
    </linearGradient>
    <linearGradient id="rw-antler" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#9fdcf2"/><stop offset="100%" stop-color="#eafaff"/>
    </linearGradient>
    <radialGradient id="rw-halo" cx="50%" cy="42%" r="55%">
      <stop offset="0%" stop-color="#cfeeff" stop-opacity=".5"/><stop offset="100%" stop-color="#cfeeff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="50" r="52" fill="url(#rw-halo)"/>
  <ellipse cx="60" cy="110" rx="30" ry="5" fill="#5f8aa8" opacity=".25"/>
  <g stroke="url(#rw-antler)" stroke-width="3.6" fill="none" stroke-linecap="round">
    <path d="M46 32 C40 20 28 16 22 4 M40 24 L30 20 M43 28 L34 32 M36 16 L28 12"/>
    <path d="M74 32 C80 20 92 16 98 4 M80 24 L90 20 M77 28 L86 32 M84 16 L92 12"/>
  </g>
  <g fill="#eafaff" opacity=".95">
    <circle cx="22" cy="4" r="2.6"><animate attributeName="opacity" values=".95;.35;.95" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="98" cy="4" r="2.6"><animate attributeName="opacity" values=".35;.95;.35" dur="2.6s" repeatCount="indefinite"/></circle>
    <circle cx="28" cy="12" r="1.8"/><circle cx="92" cy="12" r="1.8"/>
  </g>
  <ellipse cx="60" cy="82" rx="27" ry="21" fill="url(#rw-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M48 60 C46 46 52 40 60 40 C68 40 74 46 72 60 C70 68 50 68 48 60 Z" fill="url(#rw-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M44 48 l-9 -6 l11 0 Z M76 48 l9 -6 l-11 0 Z" fill="#d8ecf7" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="53" cy="51" r="3.8" fill="#3f6e88"/><circle cx="54.4" cy="49.6" r="1.4" fill="#fff"/>
  <circle cx="67" cy="51" r="3.8" fill="#3f6e88"/><circle cx="68.4" cy="49.6" r="1.4" fill="#fff"/>
  <ellipse cx="60" cy="60" rx="4.6" ry="3.4" fill="#6f9ab5"/>
  <path d="M56 64 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#eafaff" opacity=".9"><circle cx="50" cy="76" r="2.2"/><circle cx="60" cy="72" r="2.2"/><circle cx="70" cy="76" r="2.2"/><circle cx="55" cy="86" r="2"/><circle cx="66" cy="86" r="2"/></g>
  <g stroke="${OL}" stroke-width="5.5" stroke-linecap="round" fill="none">
    <path d="M44 98 L42 110 M53 100 L52 112 M68 100 L69 112 M77 98 L79 110" stroke="url(#rw-body)"/>
  </g>
  <g stroke="#7fa8c4" stroke-width="2.4" stroke-linecap="round">
    <path d="M42 110 l-3 2 M52 112 l-3 2 M69 112 l3 2 M79 110 l3 2" fill="none"/>
  </g>
  <g stroke="#eafaff" stroke-width="1.8" stroke-linecap="round" opacity=".95">
    <path d="M14 62 l0 9 M10 64 l8 5 M18 64 l-8 5" fill="none">
      <animateTransform attributeName="transform" type="rotate" values="0 14 66;180 14 66" dur="9s" repeatCount="indefinite"/>
    </path>
    <path d="M106 70 l0 8 M102 72 l8 4 M110 72 l-8 4" fill="none">
      <animateTransform attributeName="transform" type="rotate" values="0 106 74;-180 106 74" dur="11s" repeatCount="indefinite"/>
    </path>
  </g>`;

})(window.CRITTER_ART);
