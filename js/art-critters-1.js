// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 1 (Meadow, Forest, Lake)
//  Each entry is hand-drawn SVG inner markup for a 0 0 120 120 viewBox.
//  Style: soft gradients, warm dark outlines, round joins — storybook look.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28"; // outline color used everywhere

  // ------------------------------------------------------------ Bloomble
  A.bloomble = `
  <defs>
    <radialGradient id="blb-body" cx="45%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#eafbe0"/><stop offset="70%" stop-color="#bfe8a8"/><stop offset="100%" stop-color="#98cf82"/>
    </radialGradient>
    <linearGradient id="blb-ear" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c9ecb4"/><stop offset="100%" stop-color="#a3d58c"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="26" ry="6" fill="#000" opacity=".12"/>
  <path d="M43 52 C36 20 42 8 49 7 C56 6 58 26 56 50" fill="url(#blb-ear)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M77 52 C84 20 78 8 71 7 C64 6 62 26 64 50" fill="url(#blb-ear)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M46 44 C42 26 45 16 49 15 C53 15 54 30 53 46" fill="#f7fdf2" opacity=".7"/>
  <path d="M74 44 C78 26 75 16 71 15 C67 15 66 30 67 46" fill="#f7fdf2" opacity=".7"/>
  <g stroke="${OL}" stroke-width="2" fill="#ffb3c7">
    <circle cx="49" cy="8" r="4.5"/><circle cx="44" cy="12" r="4"/><circle cx="54" cy="12" r="4"/>
  </g><circle cx="49" cy="11" r="2.6" fill="#ffe066" stroke="${OL}" stroke-width="1.5"/>
  <g stroke="${OL}" stroke-width="2" fill="#c7a6ff">
    <circle cx="71" cy="8" r="4.5"/><circle cx="66" cy="12" r="4"/><circle cx="76" cy="12" r="4"/>
  </g><circle cx="71" cy="11" r="2.6" fill="#ffe066" stroke="${OL}" stroke-width="1.5"/>
  <ellipse cx="60" cy="78" rx="30" ry="28" fill="url(#blb-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="56" r="24" fill="url(#blb-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="86" rx="14" ry="11" fill="#f4fbee" opacity=".9"/>
  <circle cx="51" cy="54" r="4.2" fill="${OL}"/><circle cx="52.6" cy="52.4" r="1.5" fill="#fff"/>
  <circle cx="69" cy="54" r="4.2" fill="${OL}"/><circle cx="70.6" cy="52.4" r="1.5" fill="#fff"/>
  <ellipse cx="45" cy="61" rx="4.5" ry="3" fill="#ffb3c7" opacity=".85"/>
  <ellipse cx="75" cy="61" rx="4.5" ry="3" fill="#ffb3c7" opacity=".85"/>
  <path d="M57 61 Q60 64 63 61" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M60 61 L60 58" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <ellipse cx="42" cy="92" rx="8" ry="6" fill="#aedd97" stroke="${OL}" stroke-width="2.4"/>
  <ellipse cx="78" cy="92" rx="8" ry="6" fill="#aedd97" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="88" cy="72" r="8" fill="#f7fdf2" stroke="${OL}" stroke-width="2.4"/>
  <path d="M30 104 q3 -8 6 0 M84 104 q3 -8 6 0 M20 100 q2 -6 5 -1" stroke="#7fb069" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;

  // ---------------------------------------------------------- Thistlepuff
  A.thistlepuff = `
  <defs>
    <radialGradient id="tp-puff" cx="45%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#ffffff"/><stop offset="75%" stop-color="#f0f0e4"/><stop offset="100%" stop-color="#dcdcc8"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="24" ry="5" fill="#000" opacity=".10"/>
  <g stroke="#cfcbb2" stroke-width="1.6" opacity=".9">
    <path d="M60 62 L28 34"/><path d="M60 62 L92 34"/><path d="M60 62 L60 22"/>
    <path d="M60 62 L34 74"/><path d="M60 62 L86 74"/><path d="M60 62 L40 22"/><path d="M60 62 L80 22"/>
  </g>
  <g fill="#fff" stroke="#c9c5aa" stroke-width="1.2">
    <circle cx="28" cy="34" r="4"/><circle cx="92" cy="34" r="4"/><circle cx="60" cy="22" r="4"/>
    <circle cx="34" cy="74" r="3.4"/><circle cx="86" cy="74" r="3.4"/><circle cx="40" cy="22" r="3.4"/><circle cx="80" cy="22" r="3.4"/>
  </g>
  <circle cx="60" cy="66" r="30" fill="url(#tp-puff)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="none" stroke="#d8d4bd" stroke-width="2">
    <path d="M40 52 q6 -6 12 -2"/><path d="M66 46 q7 -4 12 2"/><path d="M44 80 q6 6 13 3"/><path d="M68 82 q7 3 12 -3"/>
  </g>
  <path d="M40 44 L34 28 L52 36 Z" fill="#efedd9" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M80 44 L86 28 L68 36 Z" fill="#efedd9" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M40 41 L37.5 32.5 L47 37 Z" fill="#ffc9d6"/>
  <path d="M80 41 L82.5 32.5 L73 37 Z" fill="#ffc9d6"/>
  <path d="M48 62 q3.5 -4 7 0" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M65 62 q3.5 -4 7 0" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M56 70 q4 3.5 8 0" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M60 70 l0 -3" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="45" cy="69" rx="4" ry="2.6" fill="#ffb3c7" opacity=".8"/>
  <ellipse cx="75" cy="69" rx="4" ry="2.6" fill="#ffb3c7" opacity=".8"/>
  <g stroke="#b9b5a0" stroke-width="1.6" stroke-linecap="round">
    <path d="M30 64 L14 60"/><path d="M31 70 L16 72"/><path d="M90 64 L106 60"/><path d="M89 70 L104 72"/>
  </g>
  <ellipse cx="48" cy="96" rx="7" ry="5" fill="#efedd9" stroke="${OL}" stroke-width="2.4"/>
  <ellipse cx="72" cy="96" rx="7" ry="5" fill="#efedd9" stroke="${OL}" stroke-width="2.4"/>
  <path d="M86 90 C100 88 104 76 96 70" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <circle cx="96" cy="69" r="5" fill="#fff" stroke="${OL}" stroke-width="2.2"/>`;

  // -------------------------------------------------------------- Chirpit
  A.chirpit = `
  <defs>
    <radialGradient id="cp-body" cx="42%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#a9e8e2"/><stop offset="70%" stop-color="#5fc4bb"/><stop offset="100%" stop-color="#3fa39b"/>
    </radialGradient>
  </defs>
  <ellipse cx="58" cy="107" rx="20" ry="5" fill="#000" opacity=".10"/>
  <path d="M76 74 C96 70 104 52 98 42 C94 52 84 56 78 58" fill="#d97fb8" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="99" cy="40" r="5.5" fill="#d97fb8" stroke="${OL}" stroke-width="2.2"/>
  <ellipse cx="58" cy="68" rx="27" ry="29" fill="url(#cp-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 62 C34 78 42 92 58 94 C50 84 48 72 50 62 Z" fill="#4bb1a8" opacity=".7"/>
  <ellipse cx="58" cy="82" rx="14" ry="11" fill="#fdf6d8" stroke="${OL}" stroke-width="2.2"/>
  <path d="M36 62 C24 60 20 68 26 74 C30 70 34 68 40 70" fill="#7fd6cd" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M55 30 q3 -10 8 -1 q4 -8 8 1" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="49" cy="55" r="4.6" fill="${OL}"/><circle cx="50.8" cy="53.2" r="1.6" fill="#fff"/>
  <circle cx="70" cy="55" r="4.6" fill="${OL}"/><circle cx="71.8" cy="53.2" r="1.6" fill="#fff"/>
  <path d="M56 62 L64 62 L60 70 Z" fill="#ffb347" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M56 62 L64 62" stroke="${OL}" stroke-width="1.6"/>
  <ellipse cx="44" cy="62" rx="4" ry="2.8" fill="#ff9eb8" opacity=".85"/>
  <ellipse cx="74" cy="62" rx="4" ry="2.8" fill="#ff9eb8" opacity=".85"/>
  <g stroke="#e8a23c" stroke-width="2.6" stroke-linecap="round" fill="none">
    <path d="M50 96 L48 106 M50 106 L46 110 M50 106 L53 110"/>
    <path d="M66 96 L68 106 M68 106 L64 110 M68 106 L71 110"/>
  </g>
  <g fill="#7a5ea8" stroke="${OL}" stroke-width="1.8">
    <path d="M88 22 l0 -12 l8 -2 l0 12" fill="none" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="86" cy="23" rx="3.6" ry="2.8"/><ellipse cx="94" cy="21" rx="3.6" ry="2.8"/>
  </g>
  <g fill="none" stroke="#9fd9d3" stroke-width="2" stroke-linecap="round" opacity=".9">
    <path d="M22 36 q4 -3 8 0"/><path d="M18 44 q4 -3 8 0"/>
  </g>`;

  // --------------------------------------------------------------- Zumble
  A.zumble = `
  <defs>
    <linearGradient id="zb-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffdf6b"/><stop offset="100%" stop-color="#f0b429"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="24" ry="5" fill="#000" opacity=".10"/>
  <g fill="#dff3f7" opacity=".85" stroke="#9fc9d4" stroke-width="2">
    <ellipse cx="34" cy="38" rx="17" ry="9" transform="rotate(-28 34 38)"/>
    <ellipse cx="86" cy="38" rx="17" ry="9" transform="rotate(28 86 38)"/>
    <ellipse cx="36" cy="52" rx="13" ry="7" transform="rotate(-14 36 52)"/>
    <ellipse cx="84" cy="52" rx="13" ry="7" transform="rotate(14 84 52)"/>
  </g>
  <g stroke="#b7dde6" stroke-width="1.4" opacity=".8">
    <path d="M24 34 L44 42 M26 42 L44 45" fill="none"/><path d="M96 34 L76 42 M94 42 L76 45" fill="none"/>
  </g>
  <ellipse cx="60" cy="66" rx="26" ry="30" fill="url(#zb-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M36 58 Q60 66 84 58 L84 68 Q60 76 36 68 Z" fill="${OL}" opacity=".85"/>
  <path d="M38 78 Q60 86 82 78 L81 87 Q60 94 39 87 Z" fill="${OL}" opacity=".85"/>
  <path d="M60 96 L60 112 L56 106 M60 112 L64 106" fill="none" stroke="#c8871e" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M58 108 L62 108 L60 116 Z" fill="#ffe066" stroke="${OL}" stroke-width="1.6"/>
  <path d="M42 26 a20 16 0 0 1 36 0 l-4 8 a24 18 0 0 0 -28 0 Z" fill="#c0c8d0" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M46 24 a15 11 0 0 1 28 0" fill="none" stroke="#eef2f5" stroke-width="2.4" stroke-linecap="round"/>
  <circle cx="60" cy="12" r="3.4" fill="#e85f6a" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="51" cy="44" r="4.4" fill="${OL}"/><circle cx="52.6" cy="42.4" r="1.5" fill="#fff"/>
  <circle cx="69" cy="44" r="4.4" fill="${OL}"/><circle cx="70.6" cy="42.4" r="1.5" fill="#fff"/>
  <path d="M55 51 q5 4 10 0" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="45" cy="50" rx="3.6" ry="2.4" fill="#ffab91" opacity=".85"/>
  <ellipse cx="75" cy="50" rx="3.6" ry="2.4" fill="#ffab91" opacity=".85"/>
  <g stroke="${OL}" stroke-width="2.6" stroke-linecap="round">
    <path d="M38 70 L22 76" fill="none"/><path d="M82 70 L98 76" fill="none"/>
  </g>
  <path d="M14 66 L30 70 L26 84 L12 80 Z" fill="#e85f6a" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M17 70 l8 2 M16 75 l8 2" stroke="#ffd3d8" stroke-width="2" stroke-linecap="round"/>
  <path d="M98 76 L112 70" stroke="#c8871e" stroke-width="3.4" stroke-linecap="round"/>
  <path d="M110 66 l6 3 l-5 4 Z" fill="#ffe066" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>`;

  // -------------------------------------------------------------- Petalisk
  A.petalisk = `
  <defs>
    <linearGradient id="pt-vine" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8fce7a"/><stop offset="100%" stop-color="#5da24a"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="34" ry="5" fill="#000" opacity=".10"/>
  <path d="M18 100 C40 104 52 92 46 78 C40 64 52 54 66 58 C82 62 92 52 88 40"
        fill="none" stroke="url(#pt-vine)" stroke-width="13" stroke-linecap="round"/>
  <path d="M18 100 C40 104 52 92 46 78 C40 64 52 54 66 58 C82 62 92 52 88 40"
        fill="none" stroke="${OL}" stroke-width="16.5" stroke-linecap="round" opacity="0" />
  <path d="M18 100 C40 104 52 92 46 78 C40 64 52 54 66 58 C82 62 92 52 88 40"
        fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="0" transform="translate(0,-7.5)" opacity=".9"/>
  <path d="M18 100 C40 104 52 92 46 78 C40 64 52 54 66 58 C82 62 92 52 88 40"
        fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round" transform="translate(0,7.5)" opacity=".9"/>
  <g stroke="${OL}" stroke-width="1.8">
    <circle cx="30" cy="98" r="5" fill="#ffb3c7"/><circle cx="47" cy="86" r="5" fill="#c7a6ff"/>
    <circle cx="46" cy="68" r="5" fill="#ffe066"/><circle cx="63" cy="57" r="5" fill="#ffb3c7"/>
    <circle cx="82" cy="58" r="5" fill="#c7a6ff"/>
  </g>
  <g fill="#fff"><circle cx="30" cy="98" r="1.8"/><circle cx="47" cy="86" r="1.8"/><circle cx="46" cy="68" r="1.8"/><circle cx="63" cy="57" r="1.8"/><circle cx="82" cy="58" r="1.8"/></g>
  <ellipse cx="88" cy="34" rx="14" ry="12" fill="#8fce7a" stroke="${OL}" stroke-width="2.8"/>
  <g stroke="${OL}" stroke-width="2">
    <ellipse cx="76" cy="22" rx="6" ry="9" fill="#ffb3c7" transform="rotate(-30 76 22)"/>
    <ellipse cx="88" cy="17" rx="6" ry="9" fill="#ffc9d6" transform="rotate(0 88 17)"/>
    <ellipse cx="100" cy="22" rx="6" ry="9" fill="#ffb3c7" transform="rotate(30 100 22)"/>
  </g>
  <circle cx="82" cy="32" r="3.8" fill="${OL}"/><circle cx="83.4" cy="30.6" r="1.3" fill="#fff"/>
  <circle cx="95" cy="32" r="3.8" fill="${OL}"/><circle cx="96.4" cy="30.6" r="1.3" fill="#fff"/>
  <path d="M85 40 q3.5 3 7 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M99 38 C106 40 110 44 108 50 C104 46 100 45 97 44" fill="#e2607b" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <g fill="#6fb75c" stroke="${OL}" stroke-width="1.8">
    <path d="M36 96 q-8 -10 2 -14 q4 8 -2 14"/><path d="M58 62 q-10 -6 -4 -14 q8 4 4 14"/>
  </g>`;

  // ------------------------------------------------------------ Verdantler
  A.verdantler = `
  <defs>
    <linearGradient id="vd-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c8a887"/><stop offset="100%" stop-color="#9a7a58"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="110" rx="30" ry="5" fill="#000" opacity=".12"/>
  <g stroke="#7a5f43" stroke-width="3.4" fill="none" stroke-linecap="round">
    <path d="M46 34 C40 22 30 20 24 10 M40 26 L32 24 M43 30 L36 34"/>
    <path d="M74 34 C80 22 90 20 96 10 M80 26 L88 24 M77 30 L84 34"/>
  </g>
  <g fill="#6fb75c" stroke="${OL}" stroke-width="1.6">
    <path d="M24 10 q-6 -4 -2 -9 q6 2 2 9"/><path d="M32 22 q-7 -2 -5 -8 q7 0 5 8"/>
    <path d="M36 33 q-7 1 -7 -6 q7 -2 7 6"/><path d="M96 10 q6 -4 2 -9 q-6 2 -2 9"/>
    <path d="M88 22 q7 -2 5 -8 q-7 0 -5 8"/><path d="M84 33 q7 1 7 -6 q-7 -2 -7 6"/>
  </g>
  <ellipse cx="60" cy="80" rx="27" ry="20" fill="url(#vd-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M48 58 C46 44 52 38 60 38 C68 38 74 44 72 58 C70 66 50 66 48 58 Z" fill="url(#vd-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M44 46 l-8 -6 l10 0 Z M76 46 l8 -6 l-10 0 Z" fill="#b08e6b" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="53" cy="50" r="3.8" fill="${OL}"/><circle cx="54.4" cy="48.6" r="1.3" fill="#fff"/>
  <circle cx="67" cy="50" r="3.8" fill="${OL}"/><circle cx="68.4" cy="48.6" r="1.3" fill="#fff"/>
  <ellipse cx="60" cy="59" rx="4.5" ry="3.2" fill="#5c463a"/>
  <g fill="#f4e9c8"><circle cx="50" cy="74" r="2.2"/><circle cx="60" cy="70" r="2.2"/><circle cx="70" cy="74" r="2.2"/><circle cx="55" cy="84" r="2.2"/><circle cx="66" cy="84" r="2.2"/></g>
  <g stroke="${OL}" stroke-width="2.6" stroke-linecap="round" fill="#9a7a58">
    <path d="M42 96 L40 110 M52 98 L51 112 M70 98 L71 112 M78 96 L80 110" stroke-width="5.5"/>
  </g>
  <g stroke="#4c3a2c" stroke-width="2.6" stroke-linecap="round">
    <path d="M40 110 l-3 2 M51 112 l-3 2 M71 112 l3 2 M80 110 l3 2" fill="none"/>
  </g>
  <path d="M86 74 q8 2 6 10" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <g fill="#ffe066" opacity=".9"><circle cx="34" cy="60" r="1.6"/><circle cx="90" cy="58" r="1.6"/><circle cx="60" cy="30" r="1.6"/></g>`;

  // -------------------------------------------------------------- Mossling
  A.mossling = `
  <defs>
    <radialGradient id="ms-rock" cx="45%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#b9b3a4"/><stop offset="100%" stop-color="#8d8778"/>
    </radialGradient>
    <radialGradient id="ms-moss" cx="50%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#9ecb62"/><stop offset="100%" stop-color="#6c9c3f"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="30" ry="6" fill="#000" opacity=".12"/>
  <path d="M30 92 C24 62 38 42 60 42 C82 42 96 62 90 92 C84 102 36 102 30 92 Z" fill="url(#ms-rock)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M32 74 C34 52 46 44 60 44 C74 44 86 52 88 74 C80 66 72 62 60 62 C48 62 40 66 32 74 Z" fill="url(#ms-moss)" stroke="${OL}" stroke-width="2.4"/>
  <g fill="#85b34e" stroke="${OL}" stroke-width="1.8">
    <ellipse cx="38" cy="80" rx="7" ry="4.5"/><ellipse cx="84" cy="82" rx="6" ry="4"/><ellipse cx="66" cy="94" rx="7" ry="4"/>
  </g>
  <path d="M60 42 C60 34 64 30 62 22" fill="none" stroke="#5d8a36" stroke-width="3" stroke-linecap="round"/>
  <g fill="#8fce7a" stroke="${OL}" stroke-width="1.8">
    <path d="M62 22 q-9 -2 -8 -10 q9 0 8 10"/><path d="M62 22 q9 -2 8 -10 q-9 0 -8 10"/>
  </g>
  <path d="M47 74 q3 -4 6 0" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M67 74 q3 -4 6 0" fill="none" stroke="${OL}" stroke-width="2.6" stroke-linecap="round"/>
  <path d="M55 84 q5 4 10 0" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="43" cy="82" rx="4" ry="2.6" fill="#e2a08c" opacity=".7"/>
  <ellipse cx="77" cy="82" rx="4" ry="2.6" fill="#e2a08c" opacity=".7"/>
  <ellipse cx="30" cy="94" rx="9" ry="7" fill="url(#ms-rock)" stroke="${OL}" stroke-width="2.5"/>
  <ellipse cx="90" cy="94" rx="9" ry="7" fill="url(#ms-rock)" stroke="${OL}" stroke-width="2.5"/>
  <path d="M26 90 q4 -3 8 0 M86 90 q4 -3 8 0" stroke="#6c9c3f" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  <g fill="#d8d3c4"><circle cx="48" cy="94" r="1.8"/><circle cx="74" cy="90" r="1.8"/><circle cx="60" cy="98" r="1.5"/></g>`;

  // --------------------------------------------------------------- Shroomp
  A.shroomp = `
  <defs>
    <radialGradient id="sh-cap" cx="45%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#f26d6d"/><stop offset="100%" stop-color="#c93f4b"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="107" rx="26" ry="5" fill="#000" opacity=".11"/>
  <path d="M20 52 C22 30 40 18 60 18 C80 18 98 30 100 52 C84 58 36 58 20 52 Z" fill="url(#sh-cap)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="#ffe9e2" stroke="${OL}" stroke-width="1.6">
    <circle cx="42" cy="34" r="6"/><circle cx="70" cy="28" r="7.5"/><circle cx="88" cy="42" r="5"/><circle cx="30" cy="46" r="4.4"/>
  </g>
  <path d="M20 52 Q60 62 100 52 L98 58 Q60 66 22 58 Z" fill="#a83240" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <ellipse cx="60" cy="76" rx="22" ry="18" fill="#bfe3a8" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="83" rx="12" ry="8" fill="#e9f7dc"/>
  <circle cx="51" cy="70" r="4.6" fill="${OL}"/><circle cx="52.8" cy="68.2" r="1.6" fill="#fff"/>
  <circle cx="69" cy="70" r="4.6" fill="${OL}"/><circle cx="70.8" cy="68.2" r="1.6" fill="#fff"/>
  <path d="M52 78 Q60 85 68 78" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="44" cy="76" rx="4" ry="2.8" fill="#f6a09a" opacity=".85"/>
  <ellipse cx="76" cy="76" rx="4" ry="2.8" fill="#f6a09a" opacity=".85"/>
  <path d="M40 88 C30 92 26 100 30 104 C36 106 44 100 46 94" fill="#a5d18a" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M80 88 C90 92 94 100 90 104 C84 106 76 100 74 94" fill="#a5d18a" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M30 104 l-2 4 M34 104 l0 4 M90 104 l2 4 M86 104 l0 4" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#ffe066" opacity=".8"><circle cx="24" cy="66" r="1.6"/><circle cx="98" cy="64" r="1.6"/><circle cx="60" cy="10" r="1.6"/></g>`;

  // -------------------------------------------------------------- Glimmoth
  A.glimmoth = `
  <defs>
    <radialGradient id="gm-glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fff7cf" stop-opacity=".9"/><stop offset="100%" stop-color="#fff7cf" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gm-wing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f4ecff"/><stop offset="100%" stop-color="#cdb9ee"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="58" r="52" fill="url(#gm-glow)"/>
  <ellipse cx="60" cy="106" rx="20" ry="4" fill="#000" opacity=".08"/>
  <path d="M54 56 C34 34 12 34 10 52 C8 68 30 78 52 70 Z" fill="url(#gm-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M66 56 C86 34 108 34 110 52 C112 68 90 78 68 70 Z" fill="url(#gm-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M54 68 C42 76 28 82 24 92 C36 94 50 84 56 76 Z" fill="#e6dbf7" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M66 68 C78 76 92 82 96 92 C84 94 70 84 64 76 Z" fill="#e6dbf7" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <g fill="#ffe57f" stroke="#caa93f" stroke-width="1.4">
    <path d="M30 52 a7 7 0 1 1 5 -12 a9 9 0 1 0 -5 12" />
    <path d="M90 52 a7 7 0 1 0 -5 -12 a9 9 0 1 1 5 12" />
  </g>
  <g fill="#ffe57f" opacity=".9"><circle cx="38" cy="66" r="2"/><circle cx="82" cy="66" r="2"/><circle cx="34" cy="86" r="1.6"/><circle cx="86" cy="86" r="1.6"/></g>
  <ellipse cx="60" cy="70" rx="10" ry="20" fill="#efe6d4" stroke="${OL}" stroke-width="2.6"/>
  <g stroke="#cbbfa4" stroke-width="1.8"><path d="M52 62 L68 62 M52 70 L68 70 M53 78 L67 78" fill="none"/></g>
  <circle cx="60" cy="48" r="10" fill="#f4ead6" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="56" cy="47" r="3" fill="${OL}"/><circle cx="57.2" cy="45.8" r="1.1" fill="#fff"/>
  <circle cx="64" cy="47" r="3" fill="${OL}"/><circle cx="65.2" cy="45.8" r="1.1" fill="#fff"/>
  <g fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round">
    <path d="M55 40 C50 34 46 32 42 32"/><path d="M65 40 C70 34 74 32 78 32"/>
  </g>
  <circle cx="42" cy="32" r="3" fill="#ffe57f" stroke="${OL}" stroke-width="1.6"/>
  <circle cx="78" cy="32" r="3" fill="#ffe57f" stroke="${OL}" stroke-width="1.6"/>
  <g fill="#fff" opacity=".9"><circle cx="20" cy="30" r="1.4"/><circle cx="100" cy="26" r="1.4"/><circle cx="14" cy="80" r="1.2"/><circle cx="106" cy="82" r="1.2"/></g>`;

  // ---------------------------------------------------------------- Barkun
  A.barkun = `
  <defs>
    <linearGradient id="bk-bark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#a8815a"/><stop offset="100%" stop-color="#7c5b3a"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="30" ry="6" fill="#000" opacity=".12"/>
  <ellipse cx="60" cy="80" rx="29" ry="26" fill="url(#bk-bark)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="50" r="22" fill="url(#bk-bark)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="none" stroke="#5f4326" stroke-width="2" opacity=".8">
    <path d="M40 76 q6 4 0 9"/><path d="M78 72 q-5 5 1 10"/><path d="M56 92 q5 -3 9 1"/>
    <path d="M46 40 q5 3 0 7"/><path d="M74 42 q-5 3 0 7"/>
  </g>
  <circle cx="44" cy="32" r="8" fill="#8a663f" stroke="${OL}" stroke-width="2.5"/>
  <circle cx="76" cy="32" r="8" fill="#8a663f" stroke="${OL}" stroke-width="2.5"/>
  <circle cx="44" cy="32" r="3.4" fill="#5f4326"/><circle cx="76" cy="32" r="3.4" fill="#5f4326"/>
  <ellipse cx="60" cy="58" rx="13" ry="10" fill="#e9d7ba" stroke="${OL}" stroke-width="2.2"/>
  <ellipse cx="60" cy="55" rx="5" ry="3.8" fill="#4c3a2c"/>
  <path d="M56 62 q4 3.5 8 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="50" cy="46" r="3.8" fill="${OL}"/><circle cx="51.4" cy="44.6" r="1.3" fill="#fff"/>
  <circle cx="70" cy="46" r="3.8" fill="${OL}"/><circle cx="71.4" cy="44.6" r="1.3" fill="#fff"/>
  <path d="M60 28 C60 22 64 18 62 12" fill="none" stroke="#5d8a36" stroke-width="2.8" stroke-linecap="round"/>
  <path d="M62 12 q10 -3 9 -11 q-10 0 -9 11" fill="#8fce7a" stroke="${OL}" stroke-width="1.8"/>
  <g fill="#8a663f" stroke="${OL}" stroke-width="2.5">
    <ellipse cx="34" cy="94" rx="10" ry="8"/><ellipse cx="86" cy="94" rx="10" ry="8"/>
  </g>
  <g stroke="#efe6d4" stroke-width="2.2" stroke-linecap="round">
    <path d="M29 90 l-3 -3 M34 89 l-1 -4 M39 90 l2 -3 M81 90 l-2 -3 M86 89 l1 -4 M91 90 l3 -3" fill="none"/>
  </g>
  <ellipse cx="60" cy="88" rx="12" ry="9" fill="#c8a87e" opacity=".65"/>`;

  // ---------------------------------------------------------------- Owlume
  A.owlume = `
  <defs>
    <linearGradient id="ow-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8a7ba8"/><stop offset="100%" stop-color="#5d5180"/>
    </linearGradient>
    <radialGradient id="ow-flame" cx="50%" cy="60%" r="60%">
      <stop offset="0%" stop-color="#fff3b0"/><stop offset="100%" stop-color="#f5a623"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="24" ry="5" fill="#000" opacity=".12"/>
  <path d="M34 40 L26 22 L46 32 Z" fill="url(#ow-body)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M86 40 L94 22 L74 32 Z" fill="url(#ow-body)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M30 62 C30 40 42 28 60 28 C78 28 90 40 90 62 C90 88 78 100 60 100 C42 100 30 88 30 62 Z" fill="url(#ow-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M32 58 C24 62 20 70 22 78 C28 76 32 72 36 66 Z" fill="#6f628f" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M88 58 C96 62 100 70 98 78 C92 76 88 72 84 66 Z" fill="#6f628f" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <circle cx="47" cy="50" r="10" fill="#f4ead6" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="73" cy="50" r="10" fill="#f4ead6" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="47" cy="50" r="4.6" fill="${OL}"/><circle cx="48.8" cy="48.2" r="1.6" fill="#fff"/>
  <circle cx="73" cy="50" r="4.6" fill="${OL}"/><circle cx="74.8" cy="48.2" r="1.6" fill="#fff"/>
  <path d="M56 56 L64 56 L60 64 Z" fill="#f0b429" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="60" cy="80" r="13" fill="#fbf3dd" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="60" cy="80" r="9.5" fill="none" stroke="#d8c9a3" stroke-width="1.6"/>
  <path d="M60 86 C55 82 56 76 60 73 C64 76 65 82 60 86 Z" fill="url(#ow-flame)" stroke="#c07f18" stroke-width="1.6">
    <animate attributeName="opacity" values="1;.75;1" dur="1.6s" repeatCount="indefinite"/>
  </path>
  <path d="M52 70 L68 70" stroke="#b9a97e" stroke-width="2" stroke-linecap="round"/>
  <path d="M52 90 L68 90" stroke="#b9a97e" stroke-width="2" stroke-linecap="round"/>
  <g fill="#4c4368" opacity=".8"><path d="M38 86 q4 -4 8 0 q-4 4 -8 0"/><path d="M74 86 q4 -4 8 0 q-4 4 -8 0"/><path d="M42 94 q4 -4 8 0 q-4 4 -8 0"/><path d="M70 94 q4 -4 8 0 q-4 4 -8 0"/></g>
  <g stroke="#f0b429" stroke-width="2.6" stroke-linecap="round">
    <path d="M50 100 l-2 8 M54 100 l0 8 M66 100 l0 8 M70 100 l2 8" fill="none"/>
  </g>`;

  // --------------------------------------------------------------- Sylvyrn
  A.sylvyrn = `
  <defs>
    <linearGradient id="sy-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#7fbf6a"/><stop offset="100%" stop-color="#4e8c3e"/>
    </linearGradient>
    <linearGradient id="sy-wing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#b8e29b"/><stop offset="100%" stop-color="#7ab35f"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="32" ry="5" fill="#000" opacity=".12"/>
  <path d="M50 54 C30 40 8 42 6 60 C20 56 32 60 42 68 Z" fill="url(#sy-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M70 54 C90 40 112 42 114 60 C100 56 88 60 78 68 Z" fill="url(#sy-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <g stroke="#4e8c3e" stroke-width="1.8" fill="none" opacity=".85">
    <path d="M46 58 C34 50 20 50 12 57"/><path d="M44 63 C34 57 24 56 16 60"/>
    <path d="M74 58 C86 50 100 50 108 57"/><path d="M76 63 C86 57 96 56 104 60"/>
  </g>
  <path d="M60 100 C44 100 36 88 38 72 C40 58 50 48 60 48 C70 48 80 58 82 72 C84 88 76 100 60 100 Z" fill="url(#sy-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M50 70 Q60 78 70 70 M50 80 Q60 88 70 80" fill="none" stroke="#3c6e30" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="60" cy="88" rx="11" ry="9" fill="#d8eec4" opacity=".9"/>
  <path d="M78 92 C94 96 102 90 104 80 L96 84 L98 74 L88 80 Z" fill="#6fb75c" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <circle cx="60" cy="38" r="16" fill="url(#sy-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M48 30 L40 18 L52 24 Z M72 30 L80 18 L68 24 Z" fill="#5da24a" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="53" cy="36" r="4" fill="#ffd94d" stroke="${OL}" stroke-width="1.6"/><circle cx="53" cy="36" r="1.7" fill="${OL}"/>
  <circle cx="67" cy="36" r="4" fill="#ffd94d" stroke="${OL}" stroke-width="1.6"/><circle cx="67" cy="36" r="1.7" fill="${OL}"/>
  <path d="M54 46 Q60 50 66 46" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M56 49 l1.6 3 M64 49 l-1.6 3" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
  <g fill="#8fce7a" stroke="${OL}" stroke-width="1.8">
    <path d="M60 22 q-8 -4 -5 -12 q8 2 5 12"/>
  </g>
  <g stroke="${OL}" stroke-width="2.5" stroke-linecap="round" fill="#4e8c3e">
    <path d="M46 98 L42 108 M74 98 L78 108" stroke-width="5"/>
  </g>`;

  // ---------------------------------------------------------------- Puddlet
  A.puddlet = `
  <defs>
    <radialGradient id="pd-body" cx="42%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#cdeefc"/><stop offset="70%" stop-color="#7fc8ee"/><stop offset="100%" stop-color="#4fa3d8"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="34" ry="8" fill="#9fd4f0" stroke="#5b9ec7" stroke-width="2" opacity=".8"/>
  <path d="M60 18 C74 40 88 54 88 74 C88 92 76 102 60 102 C44 102 32 92 32 74 C32 54 46 40 60 18 Z" fill="url(#pd-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M44 44 C38 56 36 66 38 76" fill="none" stroke="#e8f7ff" stroke-width="4" stroke-linecap="round" opacity=".8"/>
  <g stroke="${OL}" stroke-width="2.2" fill="#f490b1">
    <path d="M34 62 C24 58 20 50 24 44 C30 48 34 54 38 58"/>
    <path d="M86 62 C96 58 100 50 96 44 C90 48 86 54 82 58"/>
    <path d="M38 74 C28 74 22 70 22 64 C28 66 34 68 40 68"/>
    <path d="M82 74 C92 74 98 70 98 64 C92 66 86 68 80 68"/>
  </g>
  <circle cx="50" cy="70" r="4.6" fill="${OL}"/><circle cx="51.8" cy="68.2" r="1.6" fill="#fff"/>
  <circle cx="70" cy="70" r="4.6" fill="${OL}"/><circle cx="71.8" cy="68.2" r="1.6" fill="#fff"/>
  <path d="M52 80 Q60 87 68 80" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="43" cy="78" rx="4" ry="2.8" fill="#ff9eb8" opacity=".8"/>
  <ellipse cx="77" cy="78" rx="4" ry="2.8" fill="#ff9eb8" opacity=".8"/>
  <ellipse cx="46" cy="96" rx="7" ry="4.5" fill="#7fc8ee" stroke="${OL}" stroke-width="2.2"/>
  <ellipse cx="74" cy="96" rx="7" ry="4.5" fill="#7fc8ee" stroke="${OL}" stroke-width="2.2"/>
  <g fill="#cdeefc" stroke="#5b9ec7" stroke-width="1.6">
    <circle cx="26" cy="30" r="4"><animate attributeName="cy" values="30;24;30" dur="3s" repeatCount="indefinite"/></circle>
    <circle cx="94" cy="26" r="3"><animate attributeName="cy" values="26;20;26" dur="2.4s" repeatCount="indefinite"/></circle>
  </g>`;

  // ---------------------------------------------------------------- Finling
  A.finling = `
  <defs>
    <linearGradient id="fl-body" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#79c9e8"/><stop offset="100%" stop-color="#3f8fc4"/>
    </linearGradient>
    <linearGradient id="fl-sail" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#ff9e7d"/><stop offset="100%" stop-color="#ffd166"/>
    </linearGradient>
  </defs>
  <path d="M12 96 Q24 90 36 96 T60 96 T84 96 T108 96" fill="none" stroke="#7fc8ee" stroke-width="3" stroke-linecap="round" opacity=".8"/>
  <g fill="#cdeefc" stroke="#5b9ec7" stroke-width="1.4" opacity=".9">
    <circle cx="30" cy="86" r="3"/><circle cx="90" cy="84" r="4"/><circle cx="44" cy="92" r="2.4"/>
  </g>
  <path d="M46 34 C52 16 78 12 84 30 C88 42 80 50 72 52 L46 44 Z" fill="url(#fl-sail)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <g stroke="#e07b4f" stroke-width="1.8" fill="none" opacity=".85">
    <path d="M52 38 C56 28 66 22 74 24"/><path d="M58 42 C62 32 72 28 78 30"/>
  </g>
  <path d="M22 66 C34 46 78 40 94 56 C100 62 98 70 90 74 C70 84 34 82 22 66 Z" fill="url(#fl-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M24 66 L6 54 L10 70 L4 82 Z" fill="#5fb2d9" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M60 76 C56 82 56 88 60 92 C66 88 66 82 62 76 Z" fill="#5fb2d9" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <g fill="none" stroke="#2f7ba8" stroke-width="1.8" opacity=".8">
    <path d="M40 58 q6 8 0 16"/><path d="M52 56 q6 9 0 19"/><path d="M64 55 q6 9 0 19"/>
  </g>
  <circle cx="84" cy="58" r="5.5" fill="#fff" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="85.4" cy="58" r="2.8" fill="${OL}"/><circle cx="86.4" cy="56.8" r="1" fill="#fff"/>
  <path d="M92 66 q4 2 6 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <ellipse cx="80" cy="66" rx="3.4" ry="2.2" fill="#ff9eb8" opacity=".8"/>`;

  // ---------------------------------------------------------------- Croakle
  A.croakle = `
  <defs>
    <radialGradient id="ck-body" cx="45%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#a5d982"/><stop offset="100%" stop-color="#5f9e46"/>
    </radialGradient>
    <radialGradient id="ck-throat" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#fff2c8"/><stop offset="100%" stop-color="#f4d489"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="107" rx="32" ry="6" fill="#000" opacity=".11"/>
  <ellipse cx="60" cy="84" rx="20" ry="15" fill="url(#ck-throat)" stroke="${OL}" stroke-width="2.6">
    <animate attributeName="ry" values="15;18;15" dur="1.8s" repeatCount="indefinite"/>
  </ellipse>
  <path d="M28 72 C24 46 40 30 60 30 C80 30 96 46 92 72 C90 88 78 94 60 94 C42 94 30 88 28 72 Z" fill="url(#ck-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="42" cy="30" r="11" fill="url(#ck-body)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="78" cy="30" r="11" fill="url(#ck-body)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="42" cy="30" r="5.5" fill="#fff" stroke="${OL}" stroke-width="2"/>
  <circle cx="78" cy="30" r="5.5" fill="#fff" stroke="${OL}" stroke-width="2"/>
  <circle cx="43" cy="31" r="2.6" fill="${OL}"/><circle cx="79" cy="31" r="2.6" fill="${OL}"/>
  <path d="M40 56 Q60 70 80 56" fill="none" stroke="${OL}" stroke-width="2.8" stroke-linecap="round"/>
  <ellipse cx="34" cy="52" rx="4.4" ry="3" fill="#f2a2b6" opacity=".85"/>
  <ellipse cx="86" cy="52" rx="4.4" ry="3" fill="#f2a2b6" opacity=".85"/>
  <g fill="#7cb95e" stroke="${OL}" stroke-width="1.8"><circle cx="50" cy="44" r="2.8"/><circle cx="70" cy="44" r="2.8"/><circle cx="60" cy="40" r="2.4"/></g>
  <g fill="url(#ck-body)" stroke="${OL}" stroke-width="2.5">
    <path d="M30 88 C20 90 16 98 22 102 C30 104 38 98 40 92"/>
    <path d="M90 88 C100 90 104 98 98 102 C90 104 82 98 80 92"/>
  </g>
  <path d="M22 102 l-3 4 M27 103 l-1 5 M98 102 l3 4 M93 103 l1 5" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#5b7fbf" stroke="${OL}" stroke-width="1.6">
    <path d="M96 18 l0 -9 l6 -1.5 l0 9" fill="none" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="94.5" cy="18.5" rx="2.8" ry="2.2"/><ellipse cx="100.5" cy="17" rx="2.8" ry="2.2"/>
  </g>
  <g fill="#5b7fbf" stroke="${OL}" stroke-width="1.6" opacity=".85">
    <path d="M16 26 l0 -7" fill="none" stroke-width="2" stroke-linecap="round"/><ellipse cx="14.5" cy="26.5" rx="2.4" ry="1.9"/>
  </g>`;

  // --------------------------------------------------------------- Bubblorb
  A.bubblorb = `
  <defs>
    <radialGradient id="bb-dome" cx="40%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity=".95"/><stop offset="60%" stop-color="#cfeefa" stop-opacity=".75"/><stop offset="100%" stop-color="#8fd0ec" stop-opacity=".9"/>
    </radialGradient>
    <radialGradient id="bb-core" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#fff7cf"/><stop offset="100%" stop-color="#ffd166"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="22" ry="4" fill="#000" opacity=".08"/>
  <g stroke="#8fd0ec" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".9">
    <path d="M48 78 C44 88 46 98 42 106"><animate attributeName="d" values="M48 78 C44 88 46 98 42 106;M48 78 C52 88 44 98 46 106;M48 78 C44 88 46 98 42 106" dur="3s" repeatCount="indefinite"/></path>
    <path d="M60 80 C60 90 58 98 60 108"><animate attributeName="d" values="M60 80 C60 90 58 98 60 108;M60 80 C62 90 62 98 58 108;M60 80 C60 90 58 98 60 108" dur="2.6s" repeatCount="indefinite"/></path>
    <path d="M72 78 C76 88 74 98 78 106"><animate attributeName="d" values="M72 78 C76 88 74 98 78 106;M72 78 C68 88 76 98 74 106;M72 78 C76 88 74 98 78 106" dur="3.4s" repeatCount="indefinite"/></path>
  </g>
  <circle cx="60" cy="52" r="32" fill="url(#bb-dome)" stroke="#5b9ec7" stroke-width="2.6"/>
  <path d="M38 36 A28 28 0 0 1 52 24" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".9"/>
  <circle cx="60" cy="56" r="13" fill="url(#bb-core)" stroke="#d8a53c" stroke-width="2">
    <animate attributeName="r" values="13;14.5;13" dur="2.2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="55" cy="52" r="2.6" fill="${OL}"/><circle cx="65" cy="52" r="2.6" fill="${OL}"/>
  <circle cx="55.9" cy="51.1" r="1" fill="#fff"/><circle cx="65.9" cy="51.1" r="1" fill="#fff"/>
  <path d="M56 60 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#e8f7ff" stroke="#8fd0ec" stroke-width="1.4">
    <circle cx="28" cy="22" r="4"><animate attributeName="cy" values="22;14;22" dur="4s" repeatCount="indefinite"/></circle>
    <circle cx="94" cy="30" r="3"><animate attributeName="cy" values="30;22;30" dur="3.2s" repeatCount="indefinite"/></circle>
    <circle cx="86" cy="14" r="2.4"><animate attributeName="cy" values="14;8;14" dur="2.8s" repeatCount="indefinite"/></circle>
  </g>`;

  // ---------------------------------------------------------------- Shellby
  A.shellby = `
  <defs>
    <radialGradient id="sb-shell" cx="45%" cy="30%" r="85%">
      <stop offset="0%" stop-color="#7fd0c8"/><stop offset="100%" stop-color="#3f8f88"/>
    </radialGradient>
    <radialGradient id="sb-pearl" cx="40%" cy="35%" r="70%">
      <stop offset="0%" stop-color="#ffffff"/><stop offset="70%" stop-color="#f2e3f5"/><stop offset="100%" stop-color="#d9b8e0"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="34" ry="6" fill="#000" opacity=".12"/>
  <path d="M22 84 C22 56 38 40 60 40 C82 40 98 56 98 84 C86 92 34 92 22 84 Z" fill="url(#sb-shell)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="none" stroke="#2f6e68" stroke-width="2" opacity=".85">
    <path d="M40 50 C36 62 34 74 36 86"/><path d="M60 44 L60 88"/><path d="M80 50 C84 62 86 74 84 86"/>
    <path d="M28 68 C44 60 76 60 92 68"/>
  </g>
  <circle cx="60" cy="34" r="12" fill="url(#sb-pearl)" stroke="${OL}" stroke-width="2.4">
    <animate attributeName="r" values="12;12.8;12" dur="2.6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="56" cy="30" r="3" fill="#fff" opacity=".95"/>
  <path d="M96 82 C106 80 110 72 108 66 C102 70 96 72 92 74 Z" fill="#8fd8d0" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="26" cy="76" rx="13" ry="11" fill="#a5dcd6" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="22" cy="73" r="3.4" fill="${OL}"/><circle cx="23.3" cy="71.7" r="1.2" fill="#fff"/>
  <path d="M16 80 q3 2.5 7 1" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <ellipse cx="30" cy="80" rx="3.4" ry="2.2" fill="#f2a2b6" opacity=".8"/>
  <g fill="#8fd8d0" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="38" cy="97" rx="9" ry="5.5"/><ellipse cx="80" cy="97" rx="9" ry="5.5"/>
  </g>
  <g fill="#e8f7ff" stroke="#8fd0ec" stroke-width="1.2" opacity=".9">
    <circle cx="20" cy="46" r="2.6"/><circle cx="102" cy="42" r="2.2"/>
  </g>`;

  // ---------------------------------------------------------------- Lochlyn
  A.lochlyn = `
  <defs>
    <linearGradient id="ll-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#6f8fc9"/><stop offset="100%" stop-color="#44608f"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="102" rx="42" ry="8" fill="#9fd4f0" stroke="#5b9ec7" stroke-width="2" opacity=".7"/>
  <path d="M30 96 C28 84 34 78 42 78 C50 78 54 86 52 96 Z" fill="url(#ll-body)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M66 96 C64 82 72 74 80 76 C88 78 90 88 88 96 Z" fill="url(#ll-body)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M44 96 C40 66 48 44 62 36 C74 30 88 36 88 48 C88 58 78 60 72 56"
        fill="none" stroke="url(#ll-body)" stroke-width="14" stroke-linecap="round"/>
  <path d="M44 96 C40 66 48 44 62 36" fill="none" stroke="${OL}" stroke-width="2.4" transform="translate(-7,0)"/>
  <path d="M44 96 C42 70 50 48 64 40" fill="none" stroke="${OL}" stroke-width="2.4" transform="translate(7,2)"/>
  <g fill="#44608f" stroke="${OL}" stroke-width="2">
    <path d="M52 50 L44 44 L54 42 Z"/><path d="M50 66 L42 62 L51 58 Z"/><path d="M50 82 L42 80 L50 74 Z"/>
  </g>
  <ellipse cx="76" cy="46" rx="15" ry="12" fill="url(#ll-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M72 34 L68 22 L78 28 Z M84 34 L88 22 L80 28 Z" fill="#5b7fbf" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="72" cy="44" r="3.6" fill="#cfe3ff" stroke="${OL}" stroke-width="1.8"/><circle cx="72" cy="44" r="1.6" fill="${OL}"/>
  <circle cx="84" cy="44" r="3.6" fill="#cfe3ff" stroke="${OL}" stroke-width="1.8"/><circle cx="84" cy="44" r="1.6" fill="${OL}"/>
  <path d="M74 52 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <ellipse cx="66" cy="50" rx="3.4" ry="2.2" fill="#b8a3d6" opacity=".85"/>
  <g fill="#eef4fb" opacity=".8">
    <ellipse cx="26" cy="60" rx="14" ry="5"><animate attributeName="cx" values="26;32;26" dur="6s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="98" cy="70" rx="12" ry="4.4"><animate attributeName="cx" values="98;92;98" dur="5s" repeatCount="indefinite"/></ellipse>
    <ellipse cx="60" cy="24" rx="12" ry="4"><animate attributeName="cx" values="60;66;60" dur="7s" repeatCount="indefinite"/></ellipse>
  </g>
  <path d="M14 96 q6 -4 12 0 M92 96 q6 -4 12 0" stroke="#7fc8ee" stroke-width="2.4" fill="none" stroke-linecap="round"/>`;

})(window.CRITTER_ART);
