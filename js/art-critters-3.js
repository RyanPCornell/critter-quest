// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 3 (expansion: 16 regionals + 4 legendaries)
//  Same storybook style as parts 1–2: 0 0 120 120 viewBox, warm outlines.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // ---------------------------------------------------------------- Clovern
  A.clovern = `
  <defs>
    <radialGradient id="cv-body" cx="45%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#d8f2c4"/><stop offset="70%" stop-color="#a3d98c"/><stop offset="100%" stop-color="#7cbf66"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="27" ry="6" fill="#000" opacity=".11"/>
  <g stroke="${OL}" stroke-width="2.2" fill="#8fce7a">
    <path d="M40 34 C30 20 34 8 44 8 C50 8 50 24 48 38 Z"/>
    <path d="M80 34 C90 20 86 8 76 8 C70 8 70 24 72 38 Z"/>
  </g>
  <path d="M42 30 C36 20 38 12 44 12 C47 13 47 24 46 34 Z" fill="#c4e8ae"/>
  <path d="M78 30 C84 20 82 12 76 12 C73 13 73 24 74 34 Z" fill="#c4e8ae"/>
  <circle cx="60" cy="56" r="22" fill="url(#cv-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="88" rx="24" ry="18" fill="url(#cv-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="93" rx="13" ry="9" fill="#eef8e4"/>
  <circle cx="52" cy="54" r="4.2" fill="${OL}"/><circle cx="53.6" cy="52.4" r="1.5" fill="#fff"/>
  <circle cx="68" cy="54" r="4.2" fill="${OL}"/><circle cx="69.6" cy="52.4" r="1.5" fill="#fff"/>
  <ellipse cx="60" cy="62" rx="3.6" ry="2.8" fill="#4c6e3a"/>
  <path d="M56 66 q4 3.5 8 0 M60 62 l0 3" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M53 68 q7 5 14 0" fill="none" stroke="${OL}" stroke-width="1.8" stroke-linecap="round" opacity=".6"/>
  <ellipse cx="45" cy="60" rx="4" ry="2.6" fill="#f2a2b6" opacity=".8"/>
  <ellipse cx="75" cy="60" rx="4" ry="2.6" fill="#f2a2b6" opacity=".8"/>
  <g fill="#8fce7a" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="42" cy="102" rx="8" ry="5"/><ellipse cx="78" cy="102" rx="8" ry="5"/>
  </g>
  <path d="M82 84 C92 82 96 74 94 68" fill="none" stroke="#5d8a36" stroke-width="3" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="1.8" fill="#6fb75c">
    <circle cx="96" cy="62" r="5"/><circle cx="90" cy="58" r="5"/><circle cx="98" cy="55" r="5"/><circle cx="92" cy="51" r="5"/>
  </g>
  <path d="M94 66 L93 56" stroke="#4c6e3a" stroke-width="1.8" stroke-linecap="round"/>
  <g fill="#ffe066" opacity=".9"><circle cx="26" cy="46" r="1.6"/><circle cx="98" cy="80" r="1.6"/></g>`;

  // --------------------------------------------------------------- Puffodil
  A.puffodil = `
  <defs>
    <linearGradient id="pf-stem" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8fce7a"/><stop offset="100%" stop-color="#5da24a"/>
    </linearGradient>
    <radialGradient id="pf-bell" cx="45%" cy="40%" r="75%">
      <stop offset="0%" stop-color="#ffe98c"/><stop offset="100%" stop-color="#f5b73c"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="107" rx="24" ry="5" fill="#000" opacity=".11"/>
  <path d="M56 100 C54 78 56 62 58 48 L66 48 C68 62 70 78 68 100 Z" fill="url(#pf-stem)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M56 88 C42 86 34 76 34 66 C44 70 52 74 58 80 Z" fill="#6fb75c" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M68 84 C82 82 90 72 90 62 C80 66 72 70 66 76 Z" fill="#6fb75c" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <g stroke="${OL}" stroke-width="2.2" fill="#ffd94d">
    <ellipse cx="42" cy="30" rx="8" ry="14" transform="rotate(-38 42 30)"/>
    <ellipse cx="60" cy="22" rx="8" ry="14"/>
    <ellipse cx="78" cy="30" rx="8" ry="14" transform="rotate(38 78 30)"/>
    <ellipse cx="48" cy="44" rx="8" ry="13" transform="rotate(-72 48 44)"/>
    <ellipse cx="72" cy="44" rx="8" ry="13" transform="rotate(72 72 44)"/>
  </g>
  <path d="M48 38 C46 26 54 18 62 20 C72 22 76 32 72 42 C70 50 50 48 48 38 Z" fill="url(#pf-bell)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M50 44 C46 52 48 58 54 60 C60 62 68 60 70 54 C71 50 70 46 68 43 C62 48 54 48 50 44 Z" fill="#f5a52c" stroke="${OL}" stroke-width="2.4"/>
  <path d="M52 56 Q60 62 68 55" fill="none" stroke="#c27c14" stroke-width="2" stroke-linecap="round"/>
  <circle cx="55" cy="34" r="3.6" fill="${OL}"/><circle cx="56.4" cy="32.6" r="1.3" fill="#fff"/>
  <circle cx="67" cy="34" r="3.6" fill="${OL}"/><circle cx="68.4" cy="32.6" r="1.3" fill="#fff"/>
  <ellipse cx="50" cy="40" rx="3.4" ry="2.2" fill="#ff9e7d" opacity=".85"/>
  <ellipse cx="72" cy="40" rx="3.4" ry="2.2" fill="#ff9e7d" opacity=".85"/>
  <g fill="#7a5ea8" stroke="${OL}" stroke-width="1.6">
    <path d="M88 26 l0 -8 l5 -1.2 l0 8" fill="none" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="86.5" cy="26.5" rx="2.6" ry="2"/><ellipse cx="91.5" cy="25.2" rx="2.6" ry="2"/>
  </g>
  <g fill="#7a5ea8" opacity=".85"><circle cx="26" cy="22" r="2"/><path d="M26 22 l0 -7 l4 -1" stroke="#7a5ea8" stroke-width="1.8" fill="none" stroke-linecap="round"/></g>
  <g stroke="url(#pf-stem)" stroke-width="3" stroke-linecap="round">
    <path d="M50 100 L44 108 M70 100 L76 108" fill="none" stroke="#5da24a"/>
  </g>`;

  // --------------------------------------------------------------- Gustling
  A.gustling = `
  <defs>
    <linearGradient id="gu-body" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eaf6fb" stop-opacity=".95"/><stop offset="100%" stop-color="#a8d4e8" stop-opacity=".8"/>
    </linearGradient>
  </defs>
  <g stroke="#bfe0ef" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".9">
    <path d="M10 84 q14 -8 28 0 q10 6 20 1"><animateTransform attributeName="transform" type="translate" values="0 0;6 0;0 0" dur="3s" repeatCount="indefinite"/></path>
    <path d="M66 94 q12 -6 24 0 q8 4 16 0"><animateTransform attributeName="transform" type="translate" values="0 0;-5 0;0 0" dur="2.5s" repeatCount="indefinite"/></path>
  </g>
  <path d="M46 96 C30 92 24 76 32 62 C38 50 52 44 62 48 C54 56 50 62 52 70 C54 80 64 82 70 76 C74 70 70 62 64 62 C66 56 76 56 80 64 C86 76 76 92 60 96 C55 97 50 97 46 96 Z"
        fill="url(#gu-body)" stroke="#5b9ec7" stroke-width="2.6" stroke-linejoin="round">
    <animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur="3.4s" repeatCount="indefinite"/>
  </path>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur="3.4s" repeatCount="indefinite"/>
    <circle cx="46" cy="66" r="3.8" fill="${OL}"/><circle cx="47.4" cy="64.6" r="1.3" fill="#fff"/>
    <circle cx="60" cy="64" r="3.8" fill="${OL}"/><circle cx="61.4" cy="62.6" r="1.3" fill="#fff"/>
    <path d="M50 74 q4 3 9 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="41" cy="72" rx="3.2" ry="2.2" fill="#b3d9ec"/>
    <path d="M34 58 q4 -5 9 -3 M60 54 q5 -3 9 0" stroke="#8fc4dd" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>
  <path d="M74 44 C80 30 94 24 102 30 C108 36 104 50 92 54 C84 57 76 52 74 44 Z" fill="#8fce7a" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round" transform="rotate(8 88 42)">
    <animateTransform attributeName="transform" type="rotate" values="4 88 42;12 88 42;4 88 42" dur="2.2s" repeatCount="indefinite"/>
  </path>
  <path d="M78 46 C84 36 94 32 100 34 M88 28 L88 52" stroke="#4c8a3c" stroke-width="1.8" fill="none" opacity=".8" stroke-linecap="round">
    <animateTransform attributeName="transform" type="rotate" values="4 88 42;12 88 42;4 88 42" dur="2.2s" repeatCount="indefinite"/>
  </path>
  <path d="M74 60 C72 54 74 48 78 46" stroke="#8a663f" stroke-width="2" fill="none" stroke-linecap="round"/>
  <g fill="#fff" opacity=".9">
    <circle cx="22" cy="40" r="1.6"><animate attributeName="opacity" values=".9;.2;.9" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="76" r="1.4"><animate attributeName="opacity" values=".3;.9;.3" dur="1.7s" repeatCount="indefinite"/></circle>
  </g>`;

  // ----------------------------------------------------------------- Twigby
  A.twigby = `
  <defs>
    <linearGradient id="tw-wood" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b08e6b"/><stop offset="100%" stop-color="#8a663f"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="107" rx="24" ry="5" fill="#000" opacity=".11"/>
  <path d="M30 104 L90 104" stroke="#7c5b3a" stroke-width="5" stroke-linecap="round"/>
  <path d="M38 104 l-4 -6 M74 104 l5 -7" stroke="#7c5b3a" stroke-width="3" stroke-linecap="round"/>
  <path d="M58 96 C54 80 56 64 60 52 C64 64 66 80 62 96 Z" fill="url(#tw-wood)" stroke="${OL}" stroke-width="2.5"/>
  <path d="M59 78 C50 74 46 66 46 58 M61 70 C70 66 74 60 74 52" stroke="url(#tw-wood)" stroke-width="4.5" fill="none" stroke-linecap="round"/>
  <path d="M59 78 C50 74 46 66 46 58 M61 70 C70 66 74 60 74 52" stroke="${OL}" stroke-width="1.2" fill="none" stroke-linecap="round" opacity=".4"/>
  <g fill="#8fce7a" stroke="${OL}" stroke-width="1.8">
    <path d="M46 58 q-8 -4 -6 -12 q8 2 6 12"/>
    <path d="M74 52 q8 -4 6 -12 q-8 2 -6 12"/>
  </g>
  <circle cx="60" cy="38" r="15" fill="url(#tw-wood)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M52 26 C50 18 54 12 58 12 M66 27 C68 20 66 14 62 12" stroke="#8a663f" stroke-width="3" fill="none" stroke-linecap="round"/>
  <circle cx="58" cy="11" r="3.4" fill="#a3d98c" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="63" cy="12" r="2.6" fill="#ffb3c7" stroke="${OL}" stroke-width="1.6"/>
  <circle cx="54" cy="37" r="3.6" fill="${OL}"/><circle cx="55.3" cy="35.7" r="1.3" fill="#fff"/>
  <circle cx="66" cy="37" r="3.6" fill="${OL}"/><circle cx="67.3" cy="35.7" r="1.3" fill="#fff"/>
  <path d="M56 45 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="49" cy="43" rx="3" ry="2" fill="#e2a08c" opacity=".75"/>
  <ellipse cx="71" cy="43" rx="3" ry="2" fill="#e2a08c" opacity=".75"/>
  <path d="M58 96 L52 104 M62 96 L68 104" stroke="url(#tw-wood)" stroke-width="4" stroke-linecap="round"/>
  <g stroke="#5f4326" stroke-width="1.4" opacity=".7">
    <path d="M58 60 q2 2 4 0 M59 86 q2 2 3 0" fill="none"/>
  </g>`;

  // ------------------------------------------------------------- Vesperwing
  A.vesperwing = `
  <defs>
    <linearGradient id="vw-wing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8a7ba8"/><stop offset="100%" stop-color="#5d5180"/>
    </linearGradient>
    <radialGradient id="vw-body" cx="45%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#7d6b9e"/><stop offset="100%" stop-color="#4c4368"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="22" ry="5" fill="#000" opacity=".1"/>
  <path d="M50 56 C34 40 12 42 8 58 C16 56 20 60 22 66 C28 62 32 66 34 72 C40 68 46 70 48 76 Z"
        fill="url(#vw-wing)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M70 56 C86 40 108 42 112 58 C104 56 100 60 98 66 C92 62 88 66 86 72 C80 68 74 70 72 76 Z"
        fill="url(#vw-wing)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <g stroke="#4c4368" stroke-width="1.8" fill="none" opacity=".85">
    <path d="M46 60 C36 50 24 48 16 54"/><path d="M74 60 C84 50 96 48 104 54"/>
  </g>
  <path d="M22 52 q4 -6 10 -4 M88 48 q6 -2 10 4" stroke="#a3d98c" stroke-width="2" fill="none" stroke-linecap="round" opacity=".9"/>
  <ellipse cx="60" cy="70" rx="20" ry="26" fill="url(#vw-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="80" rx="11" ry="12" fill="#b3a3cc" opacity=".85"/>
  <path d="M48 42 L40 26 L54 34 Z M72 42 L80 26 L66 34 Z" fill="url(#vw-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M49 39 L44 30 L52 35 Z M71 39 L76 30 L68 35 Z" fill="#c9b8e0"/>
  <circle cx="52" cy="54" r="4.6" fill="#ffd94d" stroke="${OL}" stroke-width="1.8"/><circle cx="52" cy="54" r="2" fill="${OL}"/>
  <circle cx="68" cy="54" r="4.6" fill="#ffd94d" stroke="${OL}" stroke-width="1.8"/><circle cx="68" cy="54" r="2" fill="${OL}"/>
  <path d="M55 62 q5 4 10 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M56 63 l1 3 M64 63 l-1 3" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="2.4" stroke-linecap="round">
    <path d="M52 95 L50 104 M68 95 L70 104" fill="none"/>
  </g>
  <path d="M46 104 q4 3 8 0 M66 104 q4 3 8 0" stroke="${OL}" stroke-width="2" fill="none" stroke-linecap="round"/>
  <g fill="#fff" opacity=".85">
    <circle cx="20" cy="24" r="1.4"><animate attributeName="opacity" values=".85;.2;.85" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="22" r="1.3"><animate attributeName="opacity" values=".2;.85;.2" dur="1.8s" repeatCount="indefinite"/></circle>
  </g>
  <path d="M94 16 a7 7 0 1 1 -5 -12 a9 9 0 1 0 5 12" fill="#ffe9a3" stroke="#caa93f" stroke-width="1.4"/>`;

  // ------------------------------------------------------------ Bramblelynx
  A.bramblelynx = `
  <defs>
    <linearGradient id="bl-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#9c8a6e"/><stop offset="100%" stop-color="#77664c"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="107" rx="30" ry="6" fill="#000" opacity=".12"/>
  <ellipse cx="62" cy="82" rx="27" ry="20" fill="url(#bl-body)" stroke="${OL}" stroke-width="2.8"/>
  <g stroke="#3c6e30" stroke-width="2.4" fill="none" stroke-linecap="round">
    <path d="M42 68 C36 62 34 56 36 50 M52 62 C48 56 48 50 50 44 M72 62 C76 56 76 50 74 44 M82 68 C88 62 90 56 88 50"/>
  </g>
  <g fill="#5da24a" stroke="${OL}" stroke-width="1.6">
    <path d="M36 50 l-4 -5 l6 1 Z M50 44 l-2 -6 l5 3 Z M74 44 l2 -6 l-5 3 Z M88 50 l4 -5 l-6 1 Z"/>
  </g>
  <g fill="#4a3550" stroke="${OL}" stroke-width="1.4">
    <circle cx="40" cy="60" r="2.6"/><circle cx="84" cy="60" r="2.6"/><circle cx="62" cy="56" r="2.6"/>
  </g>
  <circle cx="62" cy="44" r="19" fill="url(#bl-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M48 32 L42 16 L56 24 Z M76 32 L82 16 L68 24 Z" fill="url(#bl-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M42 16 L40 8 M82 16 L84 8" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M50 29 L46 20 L54 25 Z M74 29 L78 20 L70 25 Z" fill="#d9c8a8"/>
  <circle cx="55" cy="42" r="4" fill="#ffd94d" stroke="${OL}" stroke-width="1.8"/><ellipse cx="55" cy="42" rx="1.6" ry="2.6" fill="${OL}"/>
  <circle cx="69" cy="42" r="4" fill="#ffd94d" stroke="${OL}" stroke-width="1.8"/><ellipse cx="69" cy="42" rx="1.6" ry="2.6" fill="${OL}"/>
  <ellipse cx="62" cy="50" rx="3.6" ry="2.6" fill="#4a3550"/>
  <path d="M58 54 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g stroke="#d9c8a8" stroke-width="1.6" stroke-linecap="round" opacity=".9">
    <path d="M46 48 l-9 -1 M46 52 l-8 2 M78 48 l9 -1 M78 52 l8 2" fill="none"/>
  </g>
  <ellipse cx="62" cy="58" rx="9" ry="6" fill="#d9c8a8" opacity=".9"/>
  <g fill="url(#bl-body)" stroke="${OL}" stroke-width="2.5">
    <ellipse cx="42" cy="99" rx="9" ry="6"/><ellipse cx="82" cy="99" rx="9" ry="6"/>
  </g>
  <path d="M86 76 C98 72 102 62 98 54 C94 60 88 62 84 62" fill="url(#bl-body)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <g fill="#7a5ea8" stroke="${OL}" stroke-width="1.4">
    <circle cx="30" cy="94" r="2.8"/><circle cx="26" cy="98" r="2.8"/><circle cx="31" cy="100" r="2.8"/>
  </g>`;

  // -------------------------------------------------------------- Minnowisp
  A.minnowisp = `
  <defs>
    <radialGradient id="mw-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#bfe9f7" stop-opacity=".6"/><stop offset="100%" stop-color="#bfe9f7" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="mw-fish" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#9fdcf2"/><stop offset="100%" stop-color="#5fb2d9"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="58" r="50" fill="url(#mw-glow)"/>
  <path d="M14 96 q10 -5 20 0 q10 5 20 0 q10 -5 20 0 q10 5 20 0" stroke="#7fc8ee" stroke-width="2.6" fill="none" stroke-linecap="round" opacity=".8"/>
  <g stroke="${OL}" stroke-width="1.8" fill="url(#mw-fish)">
    <path d="M28 44 C34 38 44 38 48 44 C44 50 34 50 28 44 Z M28 44 l-7 -5 l1 10 Z"/>
    <path d="M52 32 C58 26 68 26 72 32 C68 38 58 38 52 32 Z M52 32 l-7 -5 l1 10 Z"/>
    <path d="M76 44 C82 38 92 38 96 44 C92 50 82 50 76 44 Z M76 44 l-7 -5 l1 10 Z"/>
    <path d="M40 60 C46 54 56 54 60 60 C56 66 46 66 40 60 Z M40 60 l-7 -5 l1 10 Z"/>
    <path d="M66 62 C72 56 82 56 86 62 C82 68 72 68 66 62 Z M66 62 l-7 -5 l1 10 Z"/>
    <path d="M52 78 C58 72 68 72 72 78 C68 84 58 84 52 78 Z M52 78 l-7 -5 l1 10 Z"/>
  </g>
  <g fill="#fff"><circle cx="44" cy="43" r="1.8"/><circle cx="68" cy="31" r="1.8"/><circle cx="92" cy="43" r="1.8"/><circle cx="56" cy="59" r="1.8"/><circle cx="82" cy="61" r="1.8"/></g>
  <g fill="${OL}"><circle cx="44.6" cy="43.4" r="1"/><circle cx="68.6" cy="31.4" r="1"/><circle cx="92.6" cy="43.4" r="1"/><circle cx="56.6" cy="59.4" r="1"/><circle cx="82.6" cy="61.4" r="1"/></g>
  <path d="M68 78 C74 72 84 72 88 78" fill="none" stroke="${OL}" stroke-width="1.6" opacity="0"/>
  <circle cx="66" cy="79" r="1.8" fill="#fff"/><circle cx="66.6" cy="79.4" r="1" fill="${OL}"/>
  <path d="M62 82 q3 2 6 0" stroke="${OL}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <g fill="#e8f7ff" opacity=".95">
    <circle cx="30" cy="26" r="2"><animate attributeName="opacity" values=".95;.3;.95" dur="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="94" cy="24" r="1.8"><animate attributeName="opacity" values=".3;.95;.3" dur="2.1s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="70" r="1.6"><animate attributeName="opacity" values=".6;.15;.6" dur="1.5s" repeatCount="indefinite"/></circle>
    <circle cx="20" cy="66" r="1.6"><animate attributeName="opacity" values=".15;.6;.15" dur="1.9s" repeatCount="indefinite"/></circle>
  </g>`;

  // -------------------------------------------------------------- Paddlepus
  A.paddlepus = `
  <defs>
    <linearGradient id="pp-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a8886a"/><stop offset="100%" stop-color="#7c5f45"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="34" ry="7" fill="#9fd4f0" stroke="#5b9ec7" stroke-width="2" opacity=".8"/>
  <path d="M16 72 C10 64 12 54 20 52 C28 50 34 56 34 64 L30 78 Z" fill="url(#pp-body)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round" transform="rotate(-14 24 64)"/>
  <path d="M14 58 L14 78 M20 54 L20 80 M26 54 L26 80" stroke="#5f4326" stroke-width="1.6" opacity=".55" transform="rotate(-14 24 64)"/>
  <ellipse cx="60" cy="76" rx="30" ry="22" fill="url(#pp-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="62" cy="84" rx="18" ry="11" fill="#e8cba8"/>
  <circle cx="76" cy="52" r="16" fill="url(#pp-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M86 56 C98 54 106 56 108 62 C106 68 98 70 88 66 C84 64 84 58 86 56 Z" fill="#e8a23c" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M90 60 L104 61 M89 64 L100 66" stroke="#c27c14" stroke-width="1.6" stroke-linecap="round"/>
  <circle cx="72" cy="48" r="3.8" fill="${OL}"/><circle cx="73.4" cy="46.6" r="1.4" fill="#fff"/>
  <circle cx="84" cy="48" r="3.4" fill="${OL}"/><circle cx="85.2" cy="46.8" r="1.2" fill="#fff"/>
  <ellipse cx="66" cy="56" rx="3.6" ry="2.4" fill="#f2a67e" opacity=".8"/>
  <g fill="#e8a23c" stroke="${OL}" stroke-width="2.2">
    <path d="M44 94 C38 100 38 106 44 106 C50 106 54 100 52 94 Z"/>
    <path d="M74 96 C70 102 72 108 78 107 C84 106 86 100 82 95 Z"/>
  </g>
  <path d="M44 100 l8 0 M74 101 l8 0" stroke="#c27c14" stroke-width="1.6" stroke-linecap="round"/>
  <g fill="#cdeefc" stroke="#5b9ec7" stroke-width="1.4" opacity=".9">
    <circle cx="98" cy="34" r="3"><animate attributeName="cy" values="34;27;34" dur="2.6s" repeatCount="indefinite"/></circle>
    <circle cx="30" cy="40" r="2.4"><animate attributeName="cy" values="40;34;40" dur="3s" repeatCount="indefinite"/></circle>
  </g>
  <circle cx="40" cy="66" r="3" fill="#8fd0ec" stroke="#5b9ec7" stroke-width="1.4" opacity=".9"/>`;

  // -------------------------------------------------------------- Mistrelle
  A.mistrelle = `
  <defs>
    <linearGradient id="mi-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#dfe9f2"/><stop offset="100%" stop-color="#a8bccb"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="30" ry="5" fill="#9fd4f0" opacity=".6"/>
  <g fill="#eef4f8" opacity=".75">
    <ellipse cx="30" cy="88" rx="18" ry="6"><animate attributeName="cx" values="30;38;30" dur="6s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="88" cy="94" rx="16" ry="5"><animate attributeName="cx" values="88;80;88" dur="5s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="64" cy="76" rx="14" ry="4.4"><animate attributeName="cx" values="64;72;64" dur="7s" repeatCount="indefinite"/></ellipse>
  </g>
  <path d="M56 100 L56 74 M66 100 L66 74" stroke="#e8a23c" stroke-width="3" stroke-linecap="round"/>
  <path d="M52 104 l8 0 M62 104 l8 0" stroke="#e8a23c" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M44 72 C40 54 50 40 62 40 C76 40 84 52 80 68 C77 78 70 82 61 82 C52 82 46 79 44 72 Z" fill="url(#mi-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M50 68 C48 58 52 50 58 46" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".8"/>
  <path d="M74 76 C86 74 92 66 92 58 C86 62 80 62 76 60 Z" fill="#c3d2de" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M62 44 C60 32 62 22 70 16 C74 14 78 16 78 20 C78 26 72 30 70 38" fill="url(#mi-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <circle cx="72" cy="22" r="8.5" fill="url(#mi-body)" stroke="${OL}" stroke-width="2.5"/>
  <path d="M79 24 L98 28 L79 30 Z" fill="#e8a23c" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="72" cy="21" r="2.8" fill="${OL}"/><circle cx="73" cy="20" r="1" fill="#fff"/>
  <path d="M66 14 C64 8 66 4 70 3" stroke="${OL}" stroke-width="2" fill="none" stroke-linecap="round"/>
  <circle cx="70" cy="3" r="2" fill="#7a5ea8" stroke="${OL}" stroke-width="1.4"/>
  <g stroke="#8aa2b5" stroke-width="1.8" fill="none" opacity=".85">
    <path d="M52 58 C56 62 64 64 70 62"/><path d="M50 66 C56 70 66 72 72 69"/>
  </g>
  <g fill="#fff" opacity=".9">
    <circle cx="24" cy="30" r="1.4"><animate attributeName="opacity" values=".9;.2;.9" dur="2.4s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="44" r="1.3"><animate attributeName="opacity" values=".2;.9;.2" dur="2s" repeatCount="indefinite"/></circle>
  </g>`;

  // --------------------------------------------------------------- Flintick
  A.flintick = `
  <defs>
    <linearGradient id="ft-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c9bda6"/><stop offset="100%" stop-color="#9c907a"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="24" ry="5" fill="#000" opacity=".12"/>
  <circle cx="60" cy="70" r="28" fill="url(#ft-body)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="#b3a78e" stroke="#7c725e" stroke-width="1.6">
    <path d="M42 58 l8 -4 l2 8 l-9 2 Z"/><path d="M68 52 l9 2 l-3 8 l-8 -3 Z"/>
    <path d="M48 80 l8 2 l-2 8 l-8 -3 Z"/><path d="M70 78 l8 -2 l1 8 l-8 2 Z"/>
  </g>
  <path d="M46 46 C46 32 52 24 60 24 C68 24 74 32 74 46 C70 52 50 52 46 46 Z" fill="url(#ft-body)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M54 24 l-2 -8 M60 22 l0 -9 M66 24 l2 -8" stroke="#9c907a" stroke-width="2.6" stroke-linecap="round"/>
  <circle cx="54" cy="15" r="2.4" fill="#ffd94d" stroke="${OL}" stroke-width="1.4"/>
  <circle cx="60" cy="12" r="2.6" fill="#ff9a3c" stroke="${OL}" stroke-width="1.4"/>
  <circle cx="68" cy="15" r="2.2" fill="#ffd94d" stroke="${OL}" stroke-width="1.4"/>
  <circle cx="53" cy="40" r="3.8" fill="${OL}"/><circle cx="54.4" cy="38.6" r="1.4" fill="#fff"/>
  <circle cx="67" cy="40" r="3.8" fill="${OL}"/><circle cx="68.4" cy="38.6" r="1.4" fill="#fff"/>
  <path d="M56 46 L64 46 L60 53 Z" fill="#e8a23c" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <g fill="#ffd94d" stroke="#c27c14" stroke-width="1.4">
    <path d="M64 50 l6 2 l-4 3 l7 3 l-9 0 l3 -4 l-5 -2 Z">
      <animate attributeName="opacity" values="1;.3;1" dur="1.1s" repeatCount="indefinite"/>
    </path>
  </g>
  <ellipse cx="45" cy="47" rx="3.4" ry="2.2" fill="#f2a67e" opacity=".8"/>
  <ellipse cx="75" cy="47" rx="3.4" ry="2.2" fill="#f2a67e" opacity=".8"/>
  <path d="M36 66 C28 64 24 58 26 52 C30 56 34 58 38 58 Z" fill="url(#ft-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M84 66 C92 64 96 58 94 52 C90 56 86 58 82 58 Z" fill="url(#ft-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <g stroke="#e8a23c" stroke-width="2.6" stroke-linecap="round">
    <path d="M52 98 L50 106 M50 106 L46 110 M50 106 L54 110" fill="none"/>
    <path d="M68 98 L70 106 M70 106 L66 110 M70 106 L74 110" fill="none"/>
  </g>`;

  // ---------------------------------------------------------------- Magmoll
  A.magmoll = `
  <defs>
    <radialGradient id="mm-body" cx="45%" cy="35%" r="80%">
      <stop offset="0%" stop-color="#6e5a50"/><stop offset="100%" stop-color="#4a3b34"/>
    </radialGradient>
  </defs>
  <path d="M14 96 C26 88 42 86 60 86 C78 86 94 88 106 96 C94 102 26 102 14 96 Z" fill="#8d7a64" stroke="${OL}" stroke-width="2.4"/>
  <path d="M30 96 C30 72 42 58 60 58 C78 58 90 72 90 96 Z" fill="url(#mm-body)" stroke="${OL}" stroke-width="2.8"/>
  <g stroke="#ff8c42" stroke-width="2.4" fill="none" stroke-linecap="round">
    <path d="M40 78 q6 4 2 10 M58 70 q4 6 0 12 M76 78 q-6 4 -2 10">
      <animate attributeName="opacity" values="1;.45;1" dur="1.8s" repeatCount="indefinite"/>
    </path>
  </g>
  <circle cx="60" cy="52" r="17" fill="url(#mm-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="60" rx="8" ry="6" fill="#d9a88c" stroke="${OL}" stroke-width="2"/>
  <ellipse cx="60" cy="58" rx="3.4" ry="2.6" fill="#8a4f48"/>
  <path d="M50 48 q3 -4 7 -1 M63 47 q4 -3 7 1" stroke="${OL}" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  <path d="M46 40 l-4 -8 M74 40 l4 -8" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#e8b393" stroke="${OL}" stroke-width="2.2">
    <path d="M30 74 C20 70 16 62 20 56 C26 60 32 64 36 66 Z"/>
    <path d="M90 74 C100 70 104 62 100 56 C94 60 88 64 84 66 Z"/>
  </g>
  <g stroke="${OL}" stroke-width="1.8" stroke-linecap="round">
    <path d="M24 60 l-4 -3 M27 64 l-5 -2 M96 60 l4 -3 M93 64 l5 -2" fill="none"/>
  </g>
  <g fill="#ffb25e" opacity=".95">
    <circle cx="26" cy="90" r="1.8"><animate attributeName="opacity" values=".95;.3;.95" dur="1.4s" repeatCount="indefinite"/></circle>
    <circle cx="94" cy="90" r="1.8"><animate attributeName="opacity" values=".3;.95;.3" dur="1.7s" repeatCount="indefinite"/></circle>
  </g>
  <path d="M42 96 q6 -4 12 0 M66 96 q6 -4 12 0" stroke="#5f4d40" stroke-width="2.2" fill="none" stroke-linecap="round"/>`;

  // -------------------------------------------------------------- Obsidrake
  A.obsidrake = `
  <defs>
    <linearGradient id="ob-body" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4a4152"/><stop offset="55%" stop-color="#2e2836"/><stop offset="100%" stop-color="#1f1a28"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="107" rx="28" ry="6" fill="#000" opacity=".14"/>
  <path d="M78 88 C94 86 100 76 98 66 C92 74 84 74 80 72" fill="url(#ob-body)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M96 68 l6 -5 l-2 8 Z" fill="#7d6b9e" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <ellipse cx="58" cy="76" rx="25" ry="21" fill="url(#ob-body)" stroke="${OL}" stroke-width="2.8"/>
  <g stroke="#7d6b9e" stroke-width="1.6" fill="none" opacity=".8">
    <path d="M42 66 L52 74 L46 84 M66 62 L72 74 L64 84 M52 74 L64 72"/>
  </g>
  <path d="M40 62 C36 46 44 34 56 34 C66 34 72 42 70 54 C66 62 46 66 40 62 Z" fill="url(#ob-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M50 34 L46 22 L56 28 Z M64 38 L70 28 L58 30 Z" fill="url(#ob-body)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M44 30 C40 24 42 16 50 14 C48 20 52 24 52 28 Z" fill="#efe6d4" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="49" cy="50" r="4.4" fill="#c9b8e0" stroke="${OL}" stroke-width="1.8"/><ellipse cx="49" cy="50" rx="1.6" ry="2.8" fill="${OL}"/>
  <circle cx="63" cy="48" r="4.4" fill="#c9b8e0" stroke="${OL}" stroke-width="1.8"/><ellipse cx="63" cy="48" rx="1.6" ry="2.8" fill="${OL}"/>
  <path d="M46 58 q6 5 14 2" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M48 59 l1.4 3 M56 61 l-1 3" stroke="#efe6d4" stroke-width="1.8" stroke-linecap="round"/>
  <path d="M36 54 q-5 0 -7 -4" stroke="${OL}" stroke-width="2" fill="none" stroke-linecap="round"/>
  <g fill="url(#ob-body)" stroke="${OL}" stroke-width="2.4">
    <path d="M40 92 L36 106 L46 100 Z"/><path d="M72 94 L76 107 L64 101 Z"/>
  </g>
  <g stroke="#7d6b9e" stroke-width="1.4" opacity=".9">
    <path d="M30 70 l-4 -2 M88 58 l4 -3" fill="none"/>
  </g>
  <g fill="#fff" opacity=".8"><circle cx="44" cy="42" r="1.2"/><circle cx="52" cy="68" r="1"/><circle cx="70" cy="80" r="1"/></g>`;

  // ---------------------------------------------------------------- Tumblim
  A.tumblim = `
  <defs>
    <radialGradient id="tb-ball" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#d9b378"/><stop offset="100%" stop-color="#b08c52"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="28" ry="6" fill="#000" opacity=".11"/>
  <g stroke="#96703f" stroke-width="2.2" fill="none" stroke-linecap="round">
    <circle cx="60" cy="66" r="34" stroke="${OL}" stroke-width="2.6" fill="url(#tb-ball)"/>
    <path d="M34 52 C46 44 74 44 86 52 M30 66 C44 58 76 58 90 66 M34 80 C46 88 74 88 86 80"/>
    <path d="M46 36 C42 52 42 80 46 94 M60 32 C56 50 56 82 60 100 M74 36 C78 52 78 80 74 94"/>
    <path d="M40 42 q-6 -4 -6 -10 M80 42 q6 -4 6 -10 M92 60 q7 -2 9 -8 M28 60 q-7 -2 -9 -8"/>
  </g>
  <ellipse cx="60" cy="66" rx="17" ry="14" fill="#f7e3bb" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="53" cy="63" r="3.8" fill="${OL}"/><circle cx="54.4" cy="61.6" r="1.4" fill="#fff"/>
  <circle cx="67" cy="63" r="3.8" fill="${OL}"/><circle cx="68.4" cy="61.6" r="1.4" fill="#fff"/>
  <path d="M54 72 Q60 77 66 72" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <ellipse cx="47" cy="69" rx="3.2" ry="2.2" fill="#f2a67e" opacity=".85"/>
  <ellipse cx="73" cy="69" rx="3.2" ry="2.2" fill="#f2a67e" opacity=".85"/>
  <path d="M28 78 L16 84 M18 80 l-2 6 l6 0" stroke="#96703f" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M92 78 L104 84 M102 80 l2 6 l-6 0" stroke="#96703f" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <g stroke="#d9b378" stroke-width="2.2" fill="none" stroke-linecap="round" opacity=".9">
    <path d="M12 100 q6 -4 12 0"><animateTransform attributeName="transform" type="translate" values="0 0;5 0;0 0" dur="2s" repeatCount="indefinite"/></path>
    <path d="M96 100 q6 -4 12 0"><animateTransform attributeName="transform" type="translate" values="0 0;-5 0;0 0" dur="2.4s" repeatCount="indefinite"/></path>
  </g>`;

  // ------------------------------------------------------------ Scarabright
  A.scarabright = `
  <defs>
    <linearGradient id="sr-shell" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7fd0c8"/><stop offset="50%" stop-color="#4aa3df"/><stop offset="100%" stop-color="#7a5ea8"/>
    </linearGradient>
    <radialGradient id="sr-sun" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#fff3b0"/><stop offset="100%" stop-color="#ffd94d"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="30" ry="6" fill="#000" opacity=".12"/>
  <circle cx="60" cy="34" r="15" fill="url(#sr-sun)" stroke="#d8a53c" stroke-width="2.4">
    <animate attributeName="r" values="15;16.5;15" dur="2.4s" repeatCount="indefinite"/>
  </circle>
  <g stroke="#ffd94d" stroke-width="2" stroke-linecap="round" opacity=".9">
    <path d="M60 14 L60 8 M76 20 L81 15 M44 20 L39 15 M80 34 L87 34 M40 34 L33 34" fill="none"/>
  </g>
  <path d="M34 78 C34 58 44 46 60 46 C76 46 86 58 86 78 C86 92 76 100 60 100 C44 100 34 92 34 78 Z" fill="url(#sr-shell)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M60 46 L60 100" stroke="${OL}" stroke-width="2"/>
  <g stroke="#fff" stroke-width="1.6" opacity=".7" fill="none">
    <path d="M42 60 C48 56 54 54 58 54 M78 60 C72 56 66 54 62 54"/>
    <path d="M40 76 C46 72 54 70 58 70 M80 76 C74 72 66 70 62 70"/>
  </g>
  <g fill="#fff" opacity=".85"><circle cx="48" cy="64" r="1.6"/><circle cx="72" cy="64" r="1.6"/><circle cx="52" cy="84" r="1.6"/><circle cx="68" cy="84" r="1.6"/></g>
  <circle cx="60" cy="56" r="9" fill="#3a3242" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="57" cy="54" r="2.2" fill="#ffd94d"/><circle cx="63" cy="54" r="2.2" fill="#ffd94d"/>
  <path d="M57 60 q3 2 6 0" stroke="#ffd94d" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="2.6" stroke-linecap="round" fill="none">
    <path d="M40 56 C32 50 28 42 32 36 M80 56 C88 50 92 42 88 36"/>
    <path d="M38 84 L26 90 M82 84 L94 90 M44 96 L38 106 M76 96 L82 106"/>
  </g>
  <path d="M32 36 L52 26 M88 36 L68 26" stroke="${OL}" stroke-width="2.2" stroke-linecap="round" opacity="0"/>`;

  // -------------------------------------------------------------- Glassifly
  A.glassifly = `
  <defs>
    <linearGradient id="gf-wing" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#e8f4fa" stop-opacity=".9"/><stop offset="50%" stop-color="#cfe8f5" stop-opacity=".7"/><stop offset="100%" stop-color="#e6d4f2" stop-opacity=".85"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="26" ry="5" fill="#000" opacity=".08"/>
  <g stroke="#8fb7c9" stroke-width="2" fill="url(#gf-wing)">
    <ellipse cx="30" cy="46" rx="26" ry="9" transform="rotate(-18 30 46)"/>
    <ellipse cx="90" cy="46" rx="26" ry="9" transform="rotate(18 90 46)"/>
    <ellipse cx="32" cy="62" rx="22" ry="8" transform="rotate(-6 32 62)"/>
    <ellipse cx="88" cy="62" rx="22" ry="8" transform="rotate(6 88 62)"/>
  </g>
  <g stroke="#aecfe0" stroke-width="1.2" fill="none" opacity=".9">
    <path d="M12 40 L48 52 M16 34 L48 48 M108 40 L72 52 M104 34 L72 48"/>
    <path d="M14 62 L52 62 M106 62 L68 62"/>
  </g>
  <g fill="#ffd94d" stroke="#c27c14" stroke-width="1.2">
    <path d="M26 42 l4 1.5 l-3 2 l4 2 l-6 -.5 l2 -2.5 l-3 -1 Z">
      <animate attributeName="opacity" values="1;.2;1" dur="1.3s" repeatCount="indefinite"/>
    </path>
    <path d="M92 58 l4 1.5 l-3 2 l4 2 l-6 -.5 l2 -2.5 l-3 -1 Z">
      <animate attributeName="opacity" values=".2;1;.2" dur="1.5s" repeatCount="indefinite"/>
    </path>
  </g>
  <path d="M56 40 C56 66 56 86 60 102 C64 86 64 66 64 40 Z" fill="#d9a86c" stroke="${OL}" stroke-width="2.4"/>
  <path d="M56 52 l8 0 M56 62 l8 0 M57 72 l7 0 M57 82 l6 0" stroke="#b08c52" stroke-width="1.8"/>
  <circle cx="60" cy="34" r="11" fill="#e0b57e" stroke="${OL}" stroke-width="2.5"/>
  <circle cx="54" cy="32" r="4.6" fill="#7fd0c8" stroke="${OL}" stroke-width="1.8"/><circle cx="55.6" cy="30.4" r="1.6" fill="#fff"/>
  <circle cx="66" cy="32" r="4.6" fill="#7fd0c8" stroke="${OL}" stroke-width="1.8"/><circle cx="67.6" cy="30.4" r="1.6" fill="#fff"/>
  <path d="M57 40 q3 2 6 0" stroke="${OL}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M52 24 q-3 -5 -1 -9 M68 24 q3 -5 1 -9" stroke="${OL}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <circle cx="51" cy="14" r="1.8" fill="#ffd94d" stroke="#c27c14" stroke-width="1"/>
  <circle cx="69" cy="14" r="1.8" fill="#ffd94d" stroke="#c27c14" stroke-width="1"/>`;

  // --------------------------------------------------------------- Sphinxel
  A.sphinxel = `
  <defs>
    <linearGradient id="sx-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eecf9d"/><stop offset="100%" stop-color="#cfa468"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="32" ry="6" fill="#000" opacity=".12"/>
  <path d="M26 104 C24 88 32 76 46 74 L82 74 C94 78 98 90 96 104 Z" fill="url(#sx-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M34 104 C34 94 38 86 44 82 M88 104 C88 96 86 90 82 84" stroke="#b08c52" stroke-width="2" fill="none" stroke-linecap="round"/>
  <g fill="url(#sx-body)" stroke="${OL}" stroke-width="2.4">
    <path d="M36 104 l0 -12 q5 -3 10 0 l0 12"/>
    <path d="M74 104 l0 -12 q5 -3 10 0 l0 12"/>
  </g>
  <path d="M92 84 C102 80 106 70 102 62 C98 68 92 70 88 70" fill="url(#sx-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <circle cx="103" cy="61" r="4.5" fill="#4a3550" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="60" cy="50" r="21" fill="url(#sx-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M44 38 L38 22 L52 30 Z M76 38 L82 22 L68 30 Z" fill="url(#sx-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M46 35 L42 26 L50 31 Z M74 35 L78 26 L70 31 Z" fill="#4aa3df"/>
  <path d="M39 30 C34 30 30 34 30 40 L38 40 M81 30 C86 30 90 34 90 40 L82 40" fill="#4aa3df" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M30 40 q4 3 8 0 M82 40 q4 3 8 0" stroke="${OL}" stroke-width="2" fill="none"/>
  <path d="M38 28 C42 20 50 16 60 16 C70 16 78 20 82 28" fill="none" stroke="#4aa3df" stroke-width="5" stroke-linecap="round"/>
  <path d="M38 28 C42 20 50 16 60 16 C70 16 78 20 82 28" fill="none" stroke="${OL}" stroke-width="1.6" stroke-linecap="round" opacity=".5"/>
  <circle cx="60" cy="13" r="3" fill="#ffd94d" stroke="${OL}" stroke-width="1.6"/>
  <circle cx="52" cy="48" r="4.2" fill="#4a9d8f" stroke="${OL}" stroke-width="1.8"/><ellipse cx="52" cy="48" rx="1.6" ry="2.8" fill="${OL}"/>
  <circle cx="68" cy="48" r="4.2" fill="#4a9d8f" stroke="${OL}" stroke-width="1.8"/><ellipse cx="68" cy="48" rx="1.6" ry="2.8" fill="${OL}"/>
  <path d="M57 55 L63 55 L60 59 Z" fill="#c98d8d" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M60 59 q-4 4 -8 2 M60 59 q4 4 8 2" stroke="${OL}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <g stroke="#d9c8a8" stroke-width="1.4" stroke-linecap="round" opacity=".95">
    <path d="M44 52 l-8 -1 M44 56 l-7 2 M76 52 l8 -1 M76 56 l7 2" fill="none"/>
  </g>
  <text x="94" y="34" font-size="20" font-weight="bold" fill="#7a5ea8" stroke="none" font-family="Georgia,serif">?
    <animate attributeName="opacity" values="1;.4;1" dur="2s" repeatCount="indefinite"/>
  </text>`;

  // --------------------------------------------------------------- Terravox
  A.terravox = `
  <defs>
    <linearGradient id="tv-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#9c8a6e"/><stop offset="100%" stop-color="#6e5c44"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="38" ry="6" fill="#000" opacity=".14"/>
  <g stroke="#b3a78e" stroke-width="2" fill="none" opacity=".9">
    <path d="M18 40 a44 44 0 0 1 0 36"><animate attributeName="opacity" values=".9;.2;.9" dur="2.6s" repeatCount="indefinite"/></path>
    <path d="M10 34 a54 54 0 0 1 0 48"><animate attributeName="opacity" values=".5;.1;.5" dur="2.6s" repeatCount="indefinite"/></path>
  </g>
  <path d="M30 92 C24 66 38 46 62 46 C86 46 100 64 96 90 C92 102 74 106 60 106 C46 106 34 102 30 92 Z" fill="url(#tv-body)" stroke="${OL}" stroke-width="3"/>
  <g fill="#6c9c3f" stroke="${OL}" stroke-width="1.8">
    <ellipse cx="56" cy="48" rx="10" ry="5"/><ellipse cx="76" cy="52" rx="8" ry="4.4"/><ellipse cx="66" cy="44" rx="6" ry="3.4"/>
  </g>
  <path d="M40 60 q8 6 2 14 M78 58 q-8 8 -2 16" stroke="#5f4d38" stroke-width="2.2" fill="none" opacity=".8"/>
  <ellipse cx="46" cy="74" rx="21" ry="17" fill="#c4b394" stroke="${OL}" stroke-width="2.8"/>
  <path d="M28 62 C14 60 6 50 10 40 C16 34 26 36 30 44 C24 46 22 52 26 56 Z" fill="#e8dcc0" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M64 62 C78 58 84 48 80 38 C74 32 64 36 62 44 C68 46 70 52 66 56 Z" fill="#e8dcc0" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M14 44 q6 -2 10 2 M74 42 q-6 -1 -9 3" stroke="#b08c52" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <circle cx="40" cy="70" r="4" fill="${OL}"/><circle cx="41.5" cy="68.5" r="1.4" fill="#fff"/>
  <circle cx="56" cy="70" r="4" fill="${OL}"/><circle cx="57.5" cy="68.5" r="1.4" fill="#fff"/>
  <ellipse cx="46" cy="82" rx="12" ry="8" fill="#a8977a" stroke="${OL}" stroke-width="2.2"/>
  <ellipse cx="42" cy="81" rx="2.4" ry="3.2" fill="${OL}"/><ellipse cx="51" cy="81" rx="2.4" ry="3.2" fill="${OL}"/>
  <path d="M38 88 q8 5 16 0" stroke="${OL}" stroke-width="2" fill="none" stroke-linecap="round"/>
  <g fill="url(#tv-body)" stroke="${OL}" stroke-width="2.6">
    <path d="M34 100 l0 8 l12 0 l0 -8"/><path d="M74 100 l0 8 l12 0 l0 -8"/>
  </g>
  <g fill="#ffe066" opacity=".9">
    <circle cx="98" cy="40" r="1.8"><animate attributeName="opacity" values=".9;.2;.9" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="88" cy="28" r="1.5"><animate attributeName="opacity" values=".2;.9;.2" dur="1.6s" repeatCount="indefinite"/></circle>
  </g>`;

  // ---------------------------------------------------------------- Aurorix
  A.aurorix = `
  <defs>
    <linearGradient id="ax-tail" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#5cd6a8" stop-opacity=".9"/>
      <stop offset="45%" stop-color="#4aa3df" stop-opacity=".85"/>
      <stop offset="100%" stop-color="#b878e0" stop-opacity=".8"/>
    </linearGradient>
    <linearGradient id="ax-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f4f7fb"/><stop offset="100%" stop-color="#cfdbe8"/>
    </linearGradient>
  </defs>
  <ellipse cx="52" cy="106" rx="26" ry="5" fill="#000" opacity=".1"/>
  <path d="M62 78 C78 70 82 54 76 40 C90 44 100 34 100 20 C106 32 104 48 94 58 C104 58 112 52 116 44 C114 62 100 76 82 80 C75 82 68 81 62 78 Z"
        fill="url(#ax-tail)" stroke="#4a90b8" stroke-width="2" stroke-linejoin="round">
    <animate attributeName="opacity" values="1;.75;1" dur="2.6s" repeatCount="indefinite"/>
  </path>
  <g fill="#fff" opacity=".95">
    <circle cx="84" cy="46" r="1.6"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle>
    <circle cx="98" cy="34" r="1.4"><animate attributeName="opacity" values=".2;1;.2" dur="1.9s" repeatCount="indefinite"/></circle>
    <circle cx="102" cy="56" r="1.4"><animate attributeName="opacity" values=".6;.1;.6" dur="1.4s" repeatCount="indefinite"/></circle>
  </g>
  <ellipse cx="46" cy="84" rx="24" ry="18" fill="url(#ax-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="40" cy="52" r="18" fill="url(#ax-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M28 42 C22 30 26 20 34 18 C36 26 40 30 40 36 Z" fill="url(#ax-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M50 40 C52 28 48 20 42 18 C42 26 40 30 42 36 Z" fill="url(#ax-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M31 39 C28 32 30 26 33 24 M46 38 C48 31 46 25 43 23" stroke="#b878e0" stroke-width="2.2" fill="none" stroke-linecap="round"/>
  <circle cx="34" cy="52" r="3.8" fill="#4aa3df"/><circle cx="35.4" cy="50.6" r="1.4" fill="#fff"/>
  <circle cx="47" cy="52" r="3.8" fill="#4aa3df"/><circle cx="48.4" cy="50.6" r="1.4" fill="#fff"/>
  <ellipse cx="40" cy="60" rx="3.4" ry="2.6" fill="#4a5387"/>
  <path d="M36 63 q4 3 8 0" stroke="${OL}" stroke-width="2" fill="none" stroke-linecap="round"/>
  <g fill="#5cd6a8" opacity=".8"><circle cx="30" cy="58" r="1.4"/><circle cx="50" cy="58" r="1.4"/><circle cx="42" cy="44" r="1.2"/></g>
  <g fill="url(#ax-body)" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="32" cy="99" rx="8" ry="5"/><ellipse cx="60" cy="99" rx="8" ry="5"/>
  </g>
  <path d="M28 96 l-2 -3 M33 95 l0 -4 M56 95 l0 -4 M62 96 l2 -3" stroke="#b878e0" stroke-width="1.8" stroke-linecap="round"/>`;

  // ------------------------------------------------------------- Tempestrel
  A.tempestrel = `
  <defs>
    <linearGradient id="tp-cloud" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eef2f7"/><stop offset="100%" stop-color="#aebccb"/>
    </linearGradient>
    <linearGradient id="tp-storm" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8a9cb3"/><stop offset="100%" stop-color="#5d6e87"/>
    </linearGradient>
  </defs>
  <g fill="#8fb7c9" opacity=".5">
    <ellipse cx="24" cy="98" rx="14" ry="4"/><ellipse cx="94" cy="102" rx="16" ry="4.4"/>
  </g>
  <path d="M50 62 C30 58 16 64 12 76 C22 74 28 78 30 84 C38 78 46 78 52 82 Z" fill="url(#tp-storm)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M70 62 C90 58 104 64 108 76 C98 74 92 78 90 84 C82 78 74 78 68 82 Z" fill="url(#tp-storm)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <g stroke="#ffd94d" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M30 84 l-4 8 l6 -2 l-3 8"><animate attributeName="opacity" values="1;.2;1" dur="1.2s" repeatCount="indefinite"/></path>
    <path d="M90 84 l4 8 l-6 -2 l3 8"><animate attributeName="opacity" values=".2;1;.2" dur="1.4s" repeatCount="indefinite"/></path>
  </g>
  <path d="M38 74 C34 52 46 36 60 36 C74 36 86 52 82 74 C78 88 68 94 60 94 C52 94 42 88 38 74 Z" fill="url(#tp-cloud)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="#c9d4e0" opacity=".9">
    <circle cx="46" cy="80" r="7"/><circle cx="56" cy="84" r="8"/><circle cx="68" cy="82" r="7"/><circle cx="76" cy="77" r="6"/>
  </g>
  <circle cx="60" cy="32" r="14" fill="url(#tp-cloud)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M48 26 C44 18 48 10 56 10 C54 16 56 22 56 26 Z" fill="url(#tp-storm)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M72 26 C76 18 72 10 64 10 C66 16 64 22 64 26 Z" fill="url(#tp-storm)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="54" cy="31" r="4" fill="#ffd94d" stroke="${OL}" stroke-width="1.8"/><circle cx="54" cy="31" r="1.7" fill="${OL}"/>
  <circle cx="66" cy="31" r="4" fill="#ffd94d" stroke="${OL}" stroke-width="1.8"/><circle cx="66" cy="31" r="1.7" fill="${OL}"/>
  <path d="M56 38 L64 38 L60 45 Z" fill="#e8a23c" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <g stroke="#5d6e87" stroke-width="2" fill="none" stroke-linecap="round" opacity=".9">
    <path d="M46 56 q6 4 12 0 M62 56 q6 4 12 0"/>
  </g>
  <g fill="#7fc8ee" opacity=".9">
    <path d="M44 100 l-2 6 M60 102 l0 6 M76 100 l2 6" stroke="#7fc8ee" stroke-width="2.4" stroke-linecap="round">
      <animate attributeName="opacity" values=".9;.2;.9" dur="1.1s" repeatCount="indefinite"/>
    </path>
  </g>`;

  // ---------------------------------------------------------------- Umbryss
  A.umbryss = `
  <defs>
    <linearGradient id="um-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3d3654"/><stop offset="100%" stop-color="#211d33"/>
    </linearGradient>
    <radialGradient id="um-pool" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#2b3157"/><stop offset="100%" stop-color="#151726"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="98" rx="44" ry="13" fill="url(#um-pool)" stroke="#3d4470" stroke-width="2.4"/>
  <ellipse cx="60" cy="98" rx="32" ry="8.5" fill="none" stroke="#4a5387" stroke-width="1.6" opacity=".8">
    <animate attributeName="rx" values="32;38;32" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values=".8;.2;.8" dur="4s" repeatCount="indefinite"/>
  </ellipse>
  <path d="M38 96 C34 74 42 58 58 50 C50 44 48 34 54 26 C58 20 68 18 74 22 C66 24 62 30 64 38 C66 46 74 48 80 44 C84 52 82 62 74 66 C84 72 88 84 84 96 C76 100 46 100 38 96 Z"
        fill="url(#um-body)" stroke="#151726" stroke-width="2.8" stroke-linejoin="round">
    <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="3.6s" repeatCount="indefinite"/>
  </path>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;0 -3;0 0" dur="3.6s" repeatCount="indefinite"/>
    <path d="M46 70 C44 78 46 86 50 92 M70 72 C74 78 74 86 72 92" stroke="#4a5387" stroke-width="1.8" fill="none" opacity=".7"/>
    <ellipse cx="54" cy="62" rx="4" ry="5.5" fill="#bfe9f7"/>
    <ellipse cx="68" cy="60" rx="4" ry="5.5" fill="#bfe9f7"/>
    <ellipse cx="54" cy="62" rx="1.8" ry="3" fill="#151726"/>
    <ellipse cx="68" cy="60" rx="1.8" ry="3" fill="#151726"/>
    <path d="M56 74 q5 3 10 -1" stroke="#bfe9f7" stroke-width="1.8" fill="none" stroke-linecap="round" opacity=".7"/>
    <g fill="#7fa3c9" opacity=".8"><circle cx="48" cy="54" r="1.2"/><circle cx="76" cy="56" r="1.2"/><circle cx="60" cy="46" r="1"/></g>
  </g>
  <g fill="#4a5387" opacity=".9">
    <circle cx="26" cy="88" r="2.6"><animate attributeName="cy" values="88;80;88" dur="3s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;.2;.9" dur="3s" repeatCount="indefinite"/></circle>
    <circle cx="96" cy="86" r="2.2"><animate attributeName="cy" values="86;78;86" dur="2.6s" repeatCount="indefinite"/><animate attributeName="opacity" values=".2;.9;.2" dur="2.6s" repeatCount="indefinite"/></circle>
  </g>
  <g fill="#fff" opacity=".9">
    <circle cx="18" cy="30" r="1.4"><animate attributeName="opacity" values=".9;.2;.9" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="98" cy="24" r="1.3"><animate attributeName="opacity" values=".2;.9;.2" dur="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="88" cy="12" r="1.2"><animate attributeName="opacity" values=".6;.1;.6" dur="2.5s" repeatCount="indefinite"/></circle>
  </g>`;

})(window.CRITTER_ART);
