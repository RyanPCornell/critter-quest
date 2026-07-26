// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 2 (Ridge, Desert, Legendary)
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // -------------------------------------------------------------- Emberling
  A.emberling = `
  <defs>
    <linearGradient id="em-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffb25e"/><stop offset="100%" stop-color="#e8703a"/>
    </linearGradient>
    <radialGradient id="em-flame" cx="50%" cy="70%" r="60%">
      <stop offset="0%" stop-color="#fff3b0"/><stop offset="60%" stop-color="#ffb25e"/><stop offset="100%" stop-color="#f25c3a"/>
    </radialGradient>
  </defs>
  <ellipse cx="58" cy="106" rx="30" ry="6" fill="#000" opacity=".12"/>
  <path d="M88 84 C100 80 106 70 102 60 C98 66 92 68 88 68" fill="none" stroke="#e8703a" stroke-width="9" stroke-linecap="round"/>
  <path d="M100 56 C96 46 100 40 106 36 C104 44 108 46 108 52 C108 58 104 60 100 56 Z" fill="url(#em-flame)" stroke="#c2451f" stroke-width="2">
    <animateTransform attributeName="transform" type="rotate" values="-6 102 52;6 102 52;-6 102 52" dur="1.2s" repeatCount="indefinite"/>
  </path>
  <ellipse cx="56" cy="82" rx="30" ry="22" fill="url(#em-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="56" cy="90" rx="18" ry="11" fill="#ffe0b3" opacity=".95"/>
  <circle cx="50" cy="52" r="20" fill="url(#em-body)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="#ffd94d" stroke="${OL}" stroke-width="2">
    <path d="M38 40 C34 30 38 24 44 20 C43 28 48 30 47 36 Z"/>
    <path d="M52 34 C50 24 55 18 62 16 C59 24 64 28 62 34 Z"/>
  </g>
  <circle cx="43" cy="52" r="4.2" fill="${OL}"/><circle cx="44.6" cy="50.4" r="1.5" fill="#fff"/>
  <circle cx="59" cy="52" r="4.2" fill="${OL}"/><circle cx="60.6" cy="50.4" r="1.5" fill="#fff"/>
  <path d="M47 61 q4 3.5 8 0" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="37" cy="59" rx="4" ry="2.8" fill="#ff8f6b"/>
  <ellipse cx="65" cy="59" rx="4" ry="2.8" fill="#ff8f6b"/>
  <g fill="#e8703a" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="36" cy="98" rx="8" ry="5.5"/><ellipse cx="72" cy="98" rx="8" ry="5.5"/>
  </g>
  <path d="M32 95 l-2 -3 M37 94 l0 -4 M68 94 l0 -4 M74 95 l2 -3" stroke="#ffe0b3" stroke-width="2" stroke-linecap="round"/>
  <g fill="#ffd94d" opacity=".9">
    <circle cx="24" cy="60" r="1.8"><animate attributeName="opacity" values=".9;.3;.9" dur="1.6s" repeatCount="indefinite"/></circle>
    <circle cx="88" cy="40" r="1.5"><animate attributeName="opacity" values=".3;.9;.3" dur="1.3s" repeatCount="indefinite"/></circle>
  </g>`;

  // ---------------------------------------------------------------- Rocklet
  A.rocklet = `
  <defs>
    <radialGradient id="rk-stone" cx="42%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#cfc6b4"/><stop offset="100%" stop-color="#9c917c"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="28" ry="6" fill="#000" opacity=".12"/>
  <path d="M34 108 C28 96 34 88 46 86 L74 86 C86 88 92 96 86 108 Z" fill="url(#rk-stone)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M38 86 C32 70 42 58 60 58 C78 58 88 70 82 86 C72 92 48 92 38 86 Z" fill="url(#rk-stone)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M44 58 C42 44 50 36 60 36 C70 36 78 44 76 58 C68 64 52 64 44 58 Z" fill="url(#rk-stone)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M52 36 C52 28 56 24 60 24 C64 24 68 28 68 36 C64 40 56 40 52 36 Z" fill="url(#rk-stone)" stroke="${OL}" stroke-width="2.6"/>
  <g stroke="#7c725e" stroke-width="1.8" fill="none" opacity=".8">
    <path d="M44 96 q5 3 10 0"/><path d="M66 98 q5 -3 10 1"/><path d="M48 74 q4 3 9 0"/><path d="M64 76 q4 -2 8 1"/>
  </g>
  <circle cx="53" cy="48" r="3.8" fill="${OL}"/><circle cx="54.4" cy="46.6" r="1.3" fill="#fff"/>
  <circle cx="67" cy="48" r="3.8" fill="${OL}"/><circle cx="68.4" cy="46.6" r="1.3" fill="#fff"/>
  <path d="M56 55 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <ellipse cx="47" cy="53" rx="3.4" ry="2.2" fill="#d99e8a" opacity=".7"/>
  <ellipse cx="73" cy="53" rx="3.4" ry="2.2" fill="#d99e8a" opacity=".7"/>
  <g fill="url(#rk-stone)" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="30" cy="80" rx="7" ry="5" transform="rotate(-20 30 80)"/>
    <ellipse cx="90" cy="80" rx="7" ry="5" transform="rotate(20 90 80)"/>
  </g>
  <g fill="#b3a98f"><circle cx="46" cy="68" r="1.6"/><circle cx="76" cy="70" r="1.6"/><circle cx="60" cy="30" r="1.4"/></g>
  <path d="M18 104 l6 -8 l6 8 Z M94 104 l5 -7 l5 7 Z" fill="#b3a98f" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>`;

  // ---------------------------------------------------------------- Fumaroo
  A.fumaroo = `
  <defs>
    <linearGradient id="fm-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e0a9a0"/><stop offset="100%" stop-color="#b5726b"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="30" ry="6" fill="#000" opacity=".12"/>
  <g fill="#f2ede8" opacity=".85">
    <circle cx="34" cy="26" r="6"><animate attributeName="cy" values="26;18;26" dur="2.6s" repeatCount="indefinite"/><animate attributeName="opacity" values=".85;.2;.85" dur="2.6s" repeatCount="indefinite"/></circle>
    <circle cx="62" cy="16" r="5"><animate attributeName="cy" values="16;9;16" dur="2.2s" repeatCount="indefinite"/><animate attributeName="opacity" values=".7;.15;.7" dur="2.2s" repeatCount="indefinite"/></circle>
  </g>
  <path d="M78 92 C96 90 104 78 102 66 C96 76 88 78 82 78" fill="url(#fm-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <ellipse cx="58" cy="74" rx="24" ry="28" fill="url(#fm-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 70 C38 84 46 94 58 96 C50 86 48 78 48 70 Z" fill="#a05f58" opacity=".6"/>
  <path d="M44 74 C42 90 54 98 66 96 C74 94 78 86 76 76 C70 84 52 86 44 74 Z" fill="#f2d9c4" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="62" cy="88" r="7" fill="#c98f77" stroke="${OL}" stroke-width="2"/>
  <circle cx="60" cy="87" r="2.2" fill="${OL}"/><circle cx="65" cy="87" r="2.2" fill="${OL}"/>
  <path d="M60 91 q2.5 2 5 0" fill="none" stroke="${OL}" stroke-width="1.8" stroke-linecap="round"/>
  <circle cx="52" cy="40" r="16" fill="url(#fm-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 30 C34 18 38 10 44 8 C46 16 50 20 50 26 Z" fill="url(#fm-body)" stroke="${OL}" stroke-width="2.5"/>
  <path d="M62 28 C64 16 60 8 54 7 C54 15 52 20 54 26 Z" fill="url(#fm-body)" stroke="${OL}" stroke-width="2.5"/>
  <path d="M43 28 C40 21 42 15 45 13 M58 27 C60 20 58 14 55 12" stroke="#e8c4b8" stroke-width="2.4" fill="none" stroke-linecap="round"/>
  <circle cx="46" cy="40" r="3.8" fill="${OL}"/><circle cx="47.4" cy="38.6" r="1.3" fill="#fff"/>
  <circle cx="58" cy="40" r="3.8" fill="${OL}"/><circle cx="59.4" cy="38.6" r="1.3" fill="#fff"/>
  <ellipse cx="52" cy="48" rx="4" ry="3" fill="#8a4f48"/>
  <path d="M48 52 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="url(#fm-body)" stroke="${OL}" stroke-width="2.6">
    <path d="M38 96 C28 98 24 104 28 108 L48 108 C50 102 46 96 38 96 Z"/>
    <path d="M74 96 C84 98 88 104 84 108 L64 108 C62 102 66 96 74 96 Z"/>
  </g>
  <path d="M30 76 C24 74 20 68 22 62 C26 66 30 68 34 68" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>`;

  // -------------------------------------------------------------- Cindercub
  A.cindercub = `
  <defs>
    <radialGradient id="cc-body" cx="45%" cy="32%" r="80%">
      <stop offset="0%" stop-color="#6b6260"/><stop offset="100%" stop-color="#3f3836"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="30" ry="6" fill="#000" opacity=".14"/>
  <ellipse cx="60" cy="80" rx="28" ry="24" fill="url(#cc-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="50" r="22" fill="url(#cc-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="43" cy="33" r="8" fill="#4f4644" stroke="${OL}" stroke-width="2.5"/>
  <circle cx="77" cy="33" r="8" fill="#4f4644" stroke="${OL}" stroke-width="2.5"/>
  <circle cx="43" cy="33" r="3.4" fill="#f5a05e"/><circle cx="77" cy="33" r="3.4" fill="#f5a05e"/>
  <ellipse cx="60" cy="58" rx="12" ry="9" fill="#8d8280" stroke="${OL}" stroke-width="2.2"/>
  <ellipse cx="60" cy="55" rx="4.6" ry="3.4" fill="${OL}"/>
  <path d="M56 61 q4 3.5 8 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="50" cy="46" r="4" fill="#ffb25e"/><circle cx="50" cy="46" r="1.8" fill="${OL}"/>
  <circle cx="70" cy="46" r="4" fill="#ffb25e"/><circle cx="70" cy="46" r="1.8" fill="${OL}"/>
  <ellipse cx="60" cy="86" rx="14" ry="11" fill="#57504e"/>
  <g stroke="#f5a05e" stroke-width="2.6" stroke-linecap="round">
    <path d="M36 92 l-4 8 M42 94 l-2 8 M78 94 l2 8 M84 92 l4 8" fill="none"/>
  </g>
  <g fill="#57504e" stroke="${OL}" stroke-width="2.5">
    <ellipse cx="38" cy="98" rx="9" ry="6.5"/><ellipse cx="82" cy="98" rx="9" ry="6.5"/>
  </g>
  <g stroke="#ffb25e" stroke-width="2" stroke-linecap="round">
    <path d="M34 96 l-2 -3 M38 95 l0 -4 M42 96 l2 -3 M78 96 l-2 -3 M82 95 l0 -4 M86 96 l2 -3" fill="none"/>
  </g>
  <g fill="#b9b0ae" opacity=".9">
    <circle cx="30" cy="56" r="1.6"><animate attributeName="cy" values="56;48;56" dur="3s" repeatCount="indefinite"/></circle>
    <circle cx="92" cy="60" r="1.4"><animate attributeName="cy" values="60;52;60" dur="2.5s" repeatCount="indefinite"/></circle>
    <circle cx="60" cy="20" r="1.4"><animate attributeName="cy" values="20;13;20" dur="2.8s" repeatCount="indefinite"/></circle>
  </g>
  <path d="M46 74 q4 -3 8 0 M66 74 q4 -3 8 0" stroke="#8d8280" stroke-width="2" fill="none" stroke-linecap="round"/>`;

  // -------------------------------------------------------------- Boulderox
  A.boulderox = `
  <defs>
    <radialGradient id="bx-body" cx="45%" cy="30%" r="85%">
      <stop offset="0%" stop-color="#b3a284"/><stop offset="100%" stop-color="#82755c"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="109" rx="38" ry="6" fill="#000" opacity=".14"/>
  <path d="M20 84 C16 56 34 38 60 38 C86 38 104 56 100 84 C96 98 84 104 60 104 C36 104 24 98 20 84 Z" fill="url(#bx-body)" stroke="${OL}" stroke-width="3"/>
  <g fill="none" stroke="#5f553f" stroke-width="2.2" opacity=".85">
    <path d="M34 58 q8 6 2 14"/><path d="M84 56 q-8 8 -2 16"/><path d="M56 46 q6 5 0 11"/>
  </g>
  <g fill="#6c9c3f" stroke="${OL}" stroke-width="1.8" opacity=".95">
    <ellipse cx="38" cy="46" rx="8" ry="4.6" transform="rotate(-18 38 46)"/>
    <ellipse cx="86" cy="50" rx="7" ry="4" transform="rotate(14 86 50)"/>
  </g>
  <path d="M24 62 C10 58 6 46 12 38 C18 46 26 48 32 50 Z" fill="#cfc0a0" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M96 62 C110 58 114 46 108 38 C102 46 94 48 88 50 Z" fill="#cfc0a0" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <ellipse cx="60" cy="74" rx="24" ry="17" fill="#c4b394" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="50" cy="68" r="4" fill="${OL}"/><circle cx="51.5" cy="66.5" r="1.4" fill="#fff"/>
  <circle cx="70" cy="68" r="4" fill="${OL}"/><circle cx="71.5" cy="66.5" r="1.4" fill="#fff"/>
  <ellipse cx="60" cy="82" rx="13" ry="8" fill="#a8977a" stroke="${OL}" stroke-width="2.2"/>
  <ellipse cx="55" cy="81" rx="2.6" ry="3.4" fill="${OL}"/><ellipse cx="65" cy="81" rx="2.6" ry="3.4" fill="${OL}"/>
  <g stroke="#d8cfc0" stroke-width="2" stroke-linecap="round" opacity=".9">
    <path d="M52 76 q-3 -5 -7 -6 M68 76 q3 -5 7 -6" fill="none">
      <animate attributeName="opacity" values=".9;.2;.9" dur="2.4s" repeatCount="indefinite"/>
    </path>
  </g>
  <g fill="url(#bx-body)" stroke="${OL}" stroke-width="2.6">
    <path d="M30 100 l0 8 l12 0 l0 -8"/><path d="M78 100 l0 8 l12 0 l0 -8"/>
  </g>
  <path d="M30 108 l12 0 M78 108 l12 0" stroke="${OL}" stroke-width="3" stroke-linecap="round"/>`;

  // --------------------------------------------------------------- Pyrewing
  A.pyrewing = `
  <defs>
    <linearGradient id="pw-wing" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffd94d"/><stop offset="55%" stop-color="#ff9a3c"/><stop offset="100%" stop-color="#f25c3a"/>
    </linearGradient>
    <radialGradient id="pw-body" cx="45%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#ffb25e"/><stop offset="100%" stop-color="#e8703a"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="24" ry="5" fill="#000" opacity=".1"/>
  <path d="M50 56 C34 40 14 38 8 52 C20 52 26 58 30 66 C20 66 16 72 18 78 C28 74 38 76 46 82 Z" fill="url(#pw-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round">
    <animateTransform attributeName="transform" type="rotate" values="-4 50 60;4 50 60;-4 50 60" dur="1.4s" repeatCount="indefinite"/>
  </path>
  <path d="M70 56 C86 40 106 38 112 52 C100 52 94 58 90 66 C100 66 104 72 102 78 C92 74 82 76 74 82 Z" fill="url(#pw-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round">
    <animateTransform attributeName="transform" type="rotate" values="4 70 60;-4 70 60;4 70 60" dur="1.4s" repeatCount="indefinite"/>
  </path>
  <path d="M60 100 C48 100 42 90 44 76 C46 62 52 52 60 52 C68 52 74 62 76 76 C78 90 72 100 60 100 Z" fill="url(#pw-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M52 74 C52 86 56 92 60 94 C64 92 68 86 68 74 C64 78 56 78 52 74 Z" fill="#ffe0b3"/>
  <path d="M54 96 C48 106 52 112 58 112 C56 106 58 102 60 100 C62 102 64 106 62 112 C68 112 72 106 66 96 Z" fill="url(#pw-wing)" stroke="#c2451f" stroke-width="2">
    <animate attributeName="opacity" values="1;.8;1" dur="1s" repeatCount="indefinite"/>
  </path>
  <circle cx="60" cy="40" r="15" fill="url(#pw-body)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="#ffd94d" stroke="${OL}" stroke-width="2">
    <path d="M52 28 C50 20 54 14 60 12 C58 20 62 22 61 28 Z"/>
    <path d="M64 28 C66 21 72 18 76 20 C71 24 70 27 68 30 Z"/>
  </g>
  <circle cx="54" cy="39" r="3.8" fill="${OL}"/><circle cx="55.4" cy="37.6" r="1.4" fill="#fff"/>
  <circle cx="66" cy="39" r="3.8" fill="${OL}"/><circle cx="67.4" cy="37.6" r="1.4" fill="#fff"/>
  <path d="M56 46 L64 46 L60 53 Z" fill="#ffd066" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <g fill="#ffd94d" opacity=".95">
    <circle cx="24" cy="88" r="2"><animate attributeName="opacity" values=".95;.2;.95" dur="1.4s" repeatCount="indefinite"/></circle>
    <circle cx="96" cy="86" r="2"><animate attributeName="opacity" values=".2;.95;.2" dur="1.2s" repeatCount="indefinite"/></circle>
    <circle cx="60" cy="116" r="1.8"><animate attributeName="opacity" values=".6;.1;.6" dur="1s" repeatCount="indefinite"/></circle>
  </g>`;

  // --------------------------------------------------------------- Duneling
  A.duneling = `
  <defs>
    <linearGradient id="dl-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f2cf9a"/><stop offset="100%" stop-color="#d9a86c"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="107" rx="30" ry="6" fill="#000" opacity=".11"/>
  <path d="M34 46 C26 20 34 6 44 6 C52 6 54 28 52 48 Z" fill="url(#dl-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M86 46 C94 20 86 6 76 6 C68 6 66 28 68 48 Z" fill="url(#dl-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M38 40 C33 22 38 12 44 11 C48 12 49 28 48 44 Z" fill="#fbe9d0"/>
  <path d="M82 40 C87 22 82 12 76 11 C72 12 71 28 72 44 Z" fill="#fbe9d0"/>
  <circle cx="60" cy="58" r="21" fill="url(#dl-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M42 60 L36 66 M78 60 L84 66" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <ellipse cx="60" cy="88" rx="24" ry="18" fill="url(#dl-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="93" rx="13" ry="9" fill="#fbe9d0"/>
  <path d="M80 92 C98 96 106 88 106 76 C100 84 92 82 88 80" fill="url(#dl-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <circle cx="103" cy="77" r="5" fill="#fbe9d0" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="52" cy="56" r="4.2" fill="${OL}"/><circle cx="53.6" cy="54.4" r="1.5" fill="#fff"/>
  <circle cx="68" cy="56" r="4.2" fill="${OL}"/><circle cx="69.6" cy="54.4" r="1.5" fill="#fff"/>
  <ellipse cx="60" cy="65" rx="4" ry="3" fill="#5c463a"/>
  <path d="M56 69 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <ellipse cx="45" cy="63" rx="4" ry="2.6" fill="#f2a67e" opacity=".8"/>
  <ellipse cx="75" cy="63" rx="4" ry="2.6" fill="#f2a67e" opacity=".8"/>
  <g fill="#e8bd85" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="42" cy="102" rx="8" ry="5"/><ellipse cx="78" cy="102" rx="8" ry="5"/>
  </g>
  <path d="M14 100 q8 -5 16 0 M90 100 q8 -5 16 0" stroke="#e0b57e" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;

  // ---------------------------------------------------------------- Cactini
  A.cactini = `
  <defs>
    <linearGradient id="ct-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8fce7a"/><stop offset="100%" stop-color="#4e8c3e"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="26" ry="6" fill="#000" opacity=".12"/>
  <ellipse cx="60" cy="72" rx="24" ry="34" fill="url(#ct-body)" stroke="${OL}" stroke-width="2.8"/>
  <g stroke="#3c6e30" stroke-width="2.2" fill="none" opacity=".9">
    <path d="M48 44 C46 62 46 84 48 100"/><path d="M60 40 C60 62 60 84 60 104"/><path d="M72 44 C74 62 74 84 72 100"/>
  </g>
  <g stroke="#f4f0dc" stroke-width="2" stroke-linecap="round">
    <path d="M48 52 l-5 -2 M48 66 l-5 2 M48 82 l-5 -2 M72 52 l5 -2 M72 66 l5 2 M72 82 l5 -2 M60 48 l-2 -4 M60 92 l2 4" fill="none"/>
  </g>
  <path d="M36 62 C24 60 18 52 22 44 C28 50 34 52 38 54 Z" fill="url(#ct-body)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M84 62 C96 60 102 52 98 44 C92 50 86 52 82 54 Z" fill="url(#ct-body)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <g stroke="${OL}" stroke-width="2">
    <circle cx="60" cy="30" r="6" fill="#ff8fb1"/>
    <ellipse cx="51" cy="26" rx="5.5" ry="4.5" fill="#ffb3c7" transform="rotate(-30 51 26)"/>
    <ellipse cx="69" cy="26" rx="5.5" ry="4.5" fill="#ffb3c7" transform="rotate(30 69 26)"/>
    <ellipse cx="55" cy="19" rx="5" ry="4.5" fill="#ffb3c7" transform="rotate(-10 55 19)"/>
    <ellipse cx="65" cy="19" rx="5" ry="4.5" fill="#ffb3c7" transform="rotate(10 65 19)"/>
  </g>
  <circle cx="60" cy="23" r="3.4" fill="#ffe066" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="53" cy="62" r="4" fill="${OL}"/><circle cx="54.4" cy="60.6" r="1.4" fill="#fff"/>
  <circle cx="67" cy="62" r="4" fill="${OL}"/><circle cx="68.4" cy="60.6" r="1.4" fill="#fff"/>
  <path d="M54 72 Q60 78 66 72" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="47" cy="69" rx="3.6" ry="2.4" fill="#f2a67e" opacity=".8"/>
  <ellipse cx="73" cy="69" rx="3.6" ry="2.4" fill="#f2a67e" opacity=".8"/>
  <path d="M20 104 q8 -4 16 0 M84 104 q8 -4 16 0" stroke="#e0b57e" stroke-width="2.6" fill="none" stroke-linecap="round"/>
  <circle cx="88" cy="98" r="3" fill="#d9a86c" stroke="${OL}" stroke-width="1.6"/>`;

  // --------------------------------------------------------------- Scorchid
  A.scorchid = `
  <defs>
    <linearGradient id="sc-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e0b57e"/><stop offset="100%" stop-color="#b98a52"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="36" ry="6" fill="#000" opacity=".12"/>
  <path d="M76 74 C92 70 98 58 94 44 C90 32 78 26 70 30" fill="none" stroke="url(#sc-body)" stroke-width="10" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="2" fill="#ff8fb1">
    <ellipse cx="62" cy="22" rx="7" ry="10" transform="rotate(-24 62 22)"/>
    <ellipse cx="76" cy="16" rx="7" ry="10"/>
    <ellipse cx="90" cy="22" rx="7" ry="10" transform="rotate(24 90 22)"/>
    <ellipse cx="68" cy="34" rx="6" ry="8" transform="rotate(-60 68 34)"/>
    <ellipse cx="84" cy="34" rx="6" ry="8" transform="rotate(60 84 34)"/>
  </g>
  <circle cx="76" cy="26" r="5" fill="#ffe066" stroke="${OL}" stroke-width="2"/>
  <ellipse cx="52" cy="82" rx="30" ry="18" fill="url(#sc-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M30 76 Q52 68 74 76 M32 88 Q52 82 72 88" fill="none" stroke="#96703f" stroke-width="2" opacity=".85"/>
  <circle cx="24" cy="72" r="12" fill="url(#sc-body)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="20" cy="69" r="3.4" fill="${OL}"/><circle cx="21.3" cy="67.7" r="1.2" fill="#fff"/>
  <circle cx="29" cy="69" r="3.4" fill="${OL}"/><circle cx="30.3" cy="67.7" r="1.2" fill="#fff"/>
  <path d="M21 77 q3.5 2.5 7 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="url(#sc-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round">
    <path d="M14 62 C6 56 4 46 10 42 C12 50 16 54 20 56 Z"/>
    <path d="M12 78 C4 80 0 88 6 92 C8 86 12 82 16 82 Z"/>
  </g>
  <path d="M10 42 l-4 -4 M6 92 l-5 3" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3" stroke-linecap="round">
    <path d="M38 98 L34 106 M50 100 L48 108 M62 100 L64 108 M74 98 L78 106" fill="none"/>
  </g>
  <path d="M92 100 q8 -4 16 0" stroke="#e0b57e" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;

  // -------------------------------------------------------------- Mirageist
  A.mirageist = `
  <defs>
    <linearGradient id="mg-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#efe0f7" stop-opacity=".95"/>
      <stop offset="70%" stop-color="#b9a3d6" stop-opacity=".75"/>
      <stop offset="100%" stop-color="#8f7bb8" stop-opacity=".35"/>
    </linearGradient>
  </defs>
  <g stroke="#e0c8a0" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".8">
    <path d="M18 100 q10 -5 20 0 q10 5 20 0"><animateTransform attributeName="transform" type="translate" values="0 0;4 0;0 0" dur="3s" repeatCount="indefinite"/></path>
    <path d="M66 104 q10 -5 20 0 q8 4 16 0"><animateTransform attributeName="transform" type="translate" values="0 0;-4 0;0 0" dur="2.6s" repeatCount="indefinite"/></path>
  </g>
  <g opacity=".45">
    <path d="M34 92 C28 62 38 34 54 30 C44 44 42 72 46 92 Z" fill="#cbb8e4">
      <animateTransform attributeName="transform" type="translate" values="0 0;-3 -2;0 0" dur="2.8s" repeatCount="indefinite"/>
    </path>
    <path d="M86 92 C92 62 82 34 66 30 C76 44 78 72 74 92 Z" fill="#cbb8e4">
      <animateTransform attributeName="transform" type="translate" values="0 0;3 -2;0 0" dur="2.4s" repeatCount="indefinite"/>
    </path>
  </g>
  <path d="M40 96 C30 70 38 34 60 28 C82 34 90 70 80 96 C74 90 70 98 66 92 C62 100 58 100 54 92 C50 98 46 90 40 96 Z" fill="url(#mg-body)" stroke="#6f5f96" stroke-width="2.6" stroke-linejoin="round">
    <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="3.2s" repeatCount="indefinite"/>
  </path>
  <g>
    <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="3.2s" repeatCount="indefinite"/>
    <ellipse cx="52" cy="56" rx="4.5" ry="6" fill="#41355c"/><ellipse cx="68" cy="56" rx="4.5" ry="6" fill="#41355c"/>
    <circle cx="53.5" cy="53.5" r="1.5" fill="#efe6ff"/><circle cx="69.5" cy="53.5" r="1.5" fill="#efe6ff"/>
    <path d="M55 70 q5 4 10 0" fill="none" stroke="#41355c" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M44 44 q6 -6 12 -2 M64 42 q6 -4 12 2" stroke="#8f7bb8" stroke-width="2" fill="none" stroke-linecap="round" opacity=".8"/>
  </g>
  <g fill="#efe6ff" opacity=".9">
    <circle cx="26" cy="40" r="1.8"><animate attributeName="opacity" values=".9;.2;.9" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="96" cy="46" r="1.6"><animate attributeName="opacity" values=".2;.9;.2" dur="1.7s" repeatCount="indefinite"/></circle>
    <circle cx="60" cy="14" r="1.6"><animate attributeName="opacity" values=".6;.1;.6" dur="2.4s" repeatCount="indefinite"/></circle>
  </g>`;

  // ---------------------------------------------------------------- Sunwyrm
  A.sunwyrm = `
  <defs>
    <radialGradient id="sw-sun" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fff3b0"/><stop offset="70%" stop-color="#ffd94d" stop-opacity=".65"/><stop offset="100%" stop-color="#ffd94d" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="sw-body" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffd94d"/><stop offset="50%" stop-color="#ffb25e"/><stop offset="100%" stop-color="#f2884b"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="54" r="50" fill="url(#sw-sun)">
    <animate attributeName="r" values="50;54;50" dur="3s" repeatCount="indefinite"/>
  </circle>
  <g stroke="#ffd94d" stroke-width="2.6" stroke-linecap="round" opacity=".9">
    <path d="M60 6 L60 0 M104 54 L112 54 M16 54 L8 54 M92 22 L98 16 M28 22 L22 16 M92 86 L98 92 M28 86 L22 92" fill="none">
      <animateTransform attributeName="transform" type="rotate" values="0 60 54;8 60 54;0 60 54" dur="6s" repeatCount="indefinite"/>
    </path>
  </g>
  <path d="M22 78 C18 60 30 48 44 50 C58 52 60 66 52 72 C46 76 40 72 42 66"
        fill="none" stroke="url(#sw-body)" stroke-width="11" stroke-linecap="round"/>
  <path d="M96 66 C104 54 100 40 88 34 C76 28 64 34 62 44 C60 54 70 60 78 56"
        fill="none" stroke="url(#sw-body)" stroke-width="12" stroke-linecap="round"/>
  <path d="M22 78 C30 88 44 92 56 86 C64 82 72 74 78 56" fill="none" stroke="url(#sw-body)" stroke-width="12" stroke-linecap="round"/>
  <g stroke="#c2721f" stroke-width="1.8" fill="none" opacity=".75">
    <path d="M26 80 C34 88 46 90 55 84"/><path d="M64 76 C70 68 74 62 77 55"/>
  </g>
  <path d="M18 82 C10 84 6 90 8 96 C14 92 18 92 22 90 Z" fill="#ffd94d" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <ellipse cx="92" cy="46" rx="15" ry="13" fill="url(#sw-body)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="#ffd94d" stroke="${OL}" stroke-width="2">
    <path d="M82 36 C78 28 82 20 88 18 C86 26 90 30 89 34 Z"/>
    <path d="M96 32 C96 24 102 18 108 18 C104 26 106 30 103 34 Z"/>
  </g>
  <circle cx="87" cy="45" r="3.6" fill="${OL}"/><circle cx="88.3" cy="43.7" r="1.3" fill="#fff"/>
  <circle cx="99" cy="45" r="3.6" fill="${OL}"/><circle cx="100.3" cy="43.7" r="1.3" fill="#fff"/>
  <path d="M89 53 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M104 50 q6 2 8 6" stroke="${OL}" stroke-width="2" fill="none" stroke-linecap="round"/>
  <g fill="#fff" opacity=".95">
    <circle cx="36" cy="30" r="1.6"><animate attributeName="opacity" values=".95;.2;.95" dur="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="108" cy="80" r="1.6"><animate attributeName="opacity" values=".2;.95;.2" dur="1.5s" repeatCount="indefinite"/></circle>
  </g>`;

  // ---------------------------------------------------------------- Lunavis
  A.lunavis = `
  <defs>
    <radialGradient id="lv-halo" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#cfd8ff" stop-opacity=".55"/><stop offset="100%" stop-color="#cfd8ff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="lv-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4a5387"/><stop offset="100%" stop-color="#2b3157"/>
    </linearGradient>
    <linearGradient id="lv-wing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#39406e"/><stop offset="100%" stop-color="#1f2440"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="52" r="52" fill="url(#lv-halo)"/>
  <path d="M52 52 C32 30 8 32 6 52 C10 68 30 76 50 68 Z" fill="url(#lv-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M68 52 C88 30 112 32 114 52 C110 68 90 76 70 68 Z" fill="url(#lv-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <g fill="#e8ecff">
    <circle cx="24" cy="48" r="1.6"/><circle cx="36" cy="42" r="1.2"/><circle cx="30" cy="58" r="1.3"/><circle cx="18" cy="56" r="1"/>
    <circle cx="96" cy="48" r="1.6"/><circle cx="84" cy="42" r="1.2"/><circle cx="90" cy="58" r="1.3"/><circle cx="102" cy="56" r="1"/>
  </g>
  <path d="M36 62 C34 40 44 26 60 26 C76 26 86 40 84 62 C84 84 74 96 60 96 C46 96 36 84 36 62 Z" fill="url(#lv-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 34 L32 20 L48 28 Z M80 34 L88 20 L72 28 Z" fill="url(#lv-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <circle cx="48" cy="50" r="9" fill="#f4f2ff" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="72" cy="50" r="9" fill="#f4f2ff" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="48" cy="50" r="4" fill="#5b6ed9"/><circle cx="49.6" cy="48.4" r="1.4" fill="#fff"/>
  <circle cx="72" cy="50" r="4" fill="#5b6ed9"/><circle cx="73.6" cy="48.4" r="1.4" fill="#fff"/>
  <path d="M56 58 L64 58 L60 65 Z" fill="#c9cff2" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <path d="M64 78 a9.5 9.5 0 1 1 -7 -16 a12 12 0 1 0 7 16" fill="#ffe9a3" stroke="#caa93f" stroke-width="1.8">
    <animate attributeName="opacity" values="1;.7;1" dur="2.4s" repeatCount="indefinite"/>
  </path>
  <g fill="#aab4e8" opacity=".9"><circle cx="46" cy="86" r="1.4"/><circle cx="60" cy="90" r="1.4"/><circle cx="74" cy="86" r="1.4"/></g>
  <g fill="#fff">
    <circle cx="20" cy="20" r="1.6"><animate attributeName="opacity" values="1;.2;1" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="16" r="1.4"><animate attributeName="opacity" values=".2;1;.2" dur="1.7s" repeatCount="indefinite"/></circle>
    <circle cx="110" cy="86" r="1.3"><animate attributeName="opacity" values=".6;.1;.6" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="12" cy="80" r="1.3"><animate attributeName="opacity" values=".1;.8;.1" dur="1.9s" repeatCount="indefinite"/></circle>
  </g>`;

})(window.CRITTER_ART);
