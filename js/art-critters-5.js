// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 5
//  Gleamcave Hollows (5) + evolved forms (5).
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // --------------------------------------------------------------- Sparkmole
  A.sparkmole = `
  <defs>
    <radialGradient id="sm-body" cx="45%" cy="32%" r="78%">
      <stop offset="0%" stop-color="#8f86a8"/><stop offset="100%" stop-color="#5f5776"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="26" ry="6" fill="#000" opacity=".14"/>
  <ellipse cx="60" cy="76" rx="28" ry="24" fill="url(#sm-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="84" rx="16" ry="11" fill="#cfc4dd" opacity=".8"/>
  <circle cx="60" cy="50" r="20" fill="url(#sm-body)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="#f2d94d" stroke="${OL}" stroke-width="1.8">
    <path d="M50 34 l-3 -12 l7 7 Z"/><path d="M62 30 l2 -13 l5 10 Z"/>
  </g>
  <path d="M40 46 C30 42 26 34 30 28 C34 34 40 38 44 40 Z" fill="#c99a3a" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M80 46 C90 42 94 34 90 28 C86 34 80 38 76 40 Z" fill="#c99a3a" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <ellipse cx="60" cy="58" rx="11" ry="8" fill="#ffc9d6" stroke="${OL}" stroke-width="2.2"/>
  <path d="M60 54 L60 64 M55 66 q5 3 10 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <circle cx="52" cy="49" r="3.4" fill="${OL}"/><circle cx="53.2" cy="47.8" r="1.2" fill="#fff"/>
  <circle cx="68" cy="49" r="3.4" fill="${OL}"/><circle cx="69.2" cy="47.8" r="1.2" fill="#fff"/>
  <g fill="#f4e9c8" stroke="${OL}" stroke-width="2.4">
    <path d="M34 74 C22 72 16 64 20 56 C24 62 30 66 36 66 Z"/>
    <path d="M86 74 C98 72 104 64 100 56 C96 62 90 66 84 66 Z"/>
  </g>
  <g stroke="#e8dcc0" stroke-width="2.2" stroke-linecap="round">
    <path d="M22 58 l-4 -3 M25 62 l-5 -1 M98 58 l4 -3 M95 62 l5 -1" fill="none"/>
  </g>
  <g stroke="#ffe94d" stroke-width="2" stroke-linecap="round" fill="none">
    <path d="M18 46 l6 4 l-4 3 l6 3">
      <animate attributeName="opacity" values="1;.2;1" dur="0.9s" repeatCount="indefinite"/>
    </path>
    <path d="M102 44 l-6 4 l4 3 l-6 3">
      <animate attributeName="opacity" values=".2;1;.2" dur="1.1s" repeatCount="indefinite"/>
    </path>
  </g>
  <g stroke="${OL}" stroke-width="2.4" stroke-linecap="round">
    <path d="M52 98 l-2 8 M68 98 l2 8" fill="none"/>
  </g>`;

  // ----------------------------------------------------------------- Glowbat
  A.glowbat = `
  <defs>
    <radialGradient id="gb-halo" cx="50%" cy="55%" r="55%">
      <stop offset="0%" stop-color="#c9ffe6" stop-opacity=".55"/><stop offset="100%" stop-color="#c9ffe6" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="gb-wing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6d5f88"/><stop offset="100%" stop-color="#463c60"/>
    </linearGradient>
    <radialGradient id="gb-body" cx="45%" cy="34%" r="75%">
      <stop offset="0%" stop-color="#7d6ea0"/><stop offset="100%" stop-color="#514670"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="66" r="40" fill="url(#gb-halo)"/>
  <ellipse cx="60" cy="104" rx="18" ry="4" fill="#000" opacity=".1"/>
  <path d="M50 52 C32 40 12 42 8 56 C18 54 22 58 24 64 C30 60 36 62 40 68 Z" fill="url(#gb-wing)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M70 52 C88 40 108 42 112 56 C102 54 98 58 96 64 C90 60 84 62 80 68 Z" fill="url(#gb-wing)" stroke="${OL}" stroke-width="2.5" stroke-linejoin="round"/>
  <g stroke="#463c60" stroke-width="1.6" fill="none" opacity=".8"><path d="M44 58 C34 50 22 50 16 55 M76 58 C86 50 98 50 104 55"/></g>
  <ellipse cx="60" cy="66" rx="19" ry="22" fill="url(#gb-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="74" rx="9" ry="9" fill="#b7f2d4" stroke="#4f9a72" stroke-width="1.8" class="glowpulse"/>
  <path d="M48 40 L42 26 L54 34 Z M72 40 L78 26 L66 34 Z" fill="url(#gb-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <circle cx="52" cy="52" r="4.4" fill="#c9ffe6" stroke="${OL}" stroke-width="1.6"/><circle cx="52" cy="52" r="1.9" fill="${OL}"/>
  <circle cx="68" cy="52" r="4.4" fill="#c9ffe6" stroke="${OL}" stroke-width="1.6"/><circle cx="68" cy="52" r="1.9" fill="${OL}"/>
  <path d="M55 60 q5 3 10 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <path d="M56 61 l1 2.5 M64 61 l-1 2.5" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="2.2" stroke-linecap="round"><path d="M54 88 l-2 6 M66 88 l2 6" fill="none"/></g>
  <g fill="#c9ffe6" opacity=".9">
    <circle cx="26" cy="34" r="1.6"><animate attributeName="opacity" values=".9;.2;.9" dur="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="96" cy="36" r="1.4"><animate attributeName="opacity" values=".2;.9;.2" dur="2.1s" repeatCount="indefinite"/></circle>
  </g>`;

  // ---------------------------------------------------------------- Crystile
  A.crystile = `
  <defs>
    <linearGradient id="cr-scale" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d6b8ec"/><stop offset="100%" stop-color="#9a6fc4"/>
    </linearGradient>
    <radialGradient id="cr-body" cx="45%" cy="34%" r="75%">
      <stop offset="0%" stop-color="#e0cdb0"/><stop offset="100%" stop-color="#b89a72"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="107" rx="30" ry="6" fill="#000" opacity=".13"/>
  <path d="M28 88 C24 66 40 52 62 54 C84 56 96 72 92 90 C80 98 40 98 28 88 Z" fill="url(#cr-body)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="url(#cr-scale)" stroke="#7a4fa0" stroke-width="1.8" stroke-linejoin="round">
    <path d="M40 60 l8 -8 l8 8 l-8 8 Z"/><path d="M58 56 l8 -8 l8 8 l-8 8 Z"/><path d="M76 62 l7 -7 l7 7 l-7 7 Z"/>
    <path d="M48 76 l8 -8 l8 8 l-8 8 Z"/><path d="M66 74 l8 -8 l8 8 l-8 8 Z"/><path d="M34 76 l7 -7 l6 7 l-6 7 Z"/>
    <path d="M56 90 l7 -7 l7 7 l-7 7 Z"/><path d="M40 90 l6 -6 l6 6 l-6 6 Z"/><path d="M74 88 l6 -6 l6 6 l-6 6 Z"/>
  </g>
  <circle cx="30" cy="66" r="14" fill="url(#cr-body)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M20 56 l-4 -8 l9 4 Z" fill="url(#cr-scale)" stroke="#7a4fa0" stroke-width="1.8" stroke-linejoin="round"/>
  <circle cx="26" cy="64" r="3.6" fill="${OL}"/><circle cx="27.3" cy="62.7" r="1.3" fill="#fff"/>
  <path d="M20 72 q6 3 12 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <path d="M16 68 q-4 1 -6 4" stroke="${OL}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <g fill="url(#cr-body)" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="42" cy="98" rx="8" ry="5"/><ellipse cx="80" cy="98" rx="8" ry="5"/>
  </g>
  <g stroke="#8a6f4a" stroke-width="2" stroke-linecap="round">
    <path d="M37 98 l-3 -3 M42 97 l0 -4 M47 98 l3 -3 M75 98 l-3 -3 M80 97 l0 -4 M85 98 l3 -3" fill="none"/>
  </g>
  <path d="M90 84 C100 82 104 74 100 68 C96 74 92 76 88 76" fill="url(#cr-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M98 70 l6 -4 l-2 7 Z" fill="url(#cr-scale)" stroke="#7a4fa0" stroke-width="1.6" stroke-linejoin="round"/>
  <g fill="#f2e0ff"><circle cx="52" cy="60" r="1.4"/><circle cx="70" cy="58" r="1.2"/></g>`;

  // ---------------------------------------------------------------- Gloomoth
  A.gloomoth = `
  <defs>
    <linearGradient id="gm2-wing" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4a4260"/><stop offset="100%" stop-color="#2c2740"/>
    </linearGradient>
    <radialGradient id="gm2-body" cx="45%" cy="34%" r="72%">
      <stop offset="0%" stop-color="#6a5f80"/><stop offset="100%" stop-color="#403858"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="20" ry="4" fill="#000" opacity=".1"/>
  <path d="M54 56 C34 36 12 38 10 54 C8 68 28 76 50 68 Z" fill="url(#gm2-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M66 56 C86 36 108 38 110 54 C112 68 92 76 70 68 Z" fill="url(#gm2-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M52 68 C42 78 30 84 26 94 C38 94 48 84 54 76 Z" fill="#37324c" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M68 68 C78 78 90 84 94 94 C82 94 72 84 66 76 Z" fill="#37324c" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <g fill="#b79ae0" stroke="#7a4fa0" stroke-width="1.4">
    <circle cx="30" cy="52" r="5"><animate attributeName="opacity" values="1;.4;1" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="90" cy="52" r="5"><animate attributeName="opacity" values=".4;1;.4" dur="2s" repeatCount="indefinite"/></circle>
  </g>
  <g fill="#8f7fb0" opacity=".8"><circle cx="36" cy="64" r="2"/><circle cx="84" cy="64" r="2"/></g>
  <ellipse cx="60" cy="66" rx="10" ry="20" fill="url(#gm2-body)" stroke="${OL}" stroke-width="2.6"/>
  <g stroke="#2c2740" stroke-width="1.8"><path d="M52 60 h16 M52 68 h16 M53 76 h14" fill="none"/></g>
  <circle cx="60" cy="46" r="10" fill="url(#gm2-body)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="56" cy="45" r="3" fill="#c9b8e6"/><circle cx="56.9" cy="44" r="1.1" fill="#fff"/>
  <circle cx="64" cy="45" r="3" fill="#c9b8e6"/><circle cx="64.9" cy="44" r="1.1" fill="#fff"/>
  <path d="M55 38 C50 32 46 30 42 30 M65 38 C70 32 74 30 78 30" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#b79ae0"><circle cx="42" cy="30" r="2.6"/><circle cx="78" cy="30" r="2.6"/></g>
  <g fill="#c9b8e6" opacity=".85">
    <circle cx="20" cy="82" r="1.6"><animate attributeName="opacity" values=".85;.2;.85" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="86" r="1.4"><animate attributeName="opacity" values=".2;.85;.2" dur="1.9s" repeatCount="indefinite"/></circle>
  </g>`;

  // ---------------------------------------------------------------- Geodrake
  A.geodrake = `
  <defs>
    <linearGradient id="gd-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#8f8298"/><stop offset="100%" stop-color="#5f5570"/>
    </linearGradient>
    <radialGradient id="gd-gem" cx="50%" cy="42%" r="58%">
      <stop offset="0%" stop-color="#f2e0ff"/><stop offset="60%" stop-color="#c79ae6"/><stop offset="100%" stop-color="#8f5fc0"/>
    </radialGradient>
    <radialGradient id="gd-halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e6c9ff" stop-opacity=".5"/><stop offset="100%" stop-color="#e6c9ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="60" r="48" fill="url(#gd-halo)"/>
  <ellipse cx="60" cy="108" rx="30" ry="6" fill="#000" opacity=".14"/>
  <path d="M78 92 C96 88 104 76 100 64 C94 74 84 76 80 74" fill="url(#gd-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M96 66 l7 -5 l-2 9 Z" fill="url(#gd-gem)" stroke="#7a4fa0" stroke-width="1.8" stroke-linejoin="round"/>
  <ellipse cx="58" cy="78" rx="26" ry="22" fill="url(#gd-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M46 60 L54 66 L48 80 L40 74 Z" fill="url(#gd-gem)" stroke="#7a4fa0" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M66 62 L74 70 L68 82 L60 76 Z" fill="url(#gd-gem)" stroke="#7a4fa0" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M40 46 C34 30 42 20 56 20 C68 20 74 30 72 44 C66 52 46 54 40 46 Z" fill="url(#gd-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M46 24 L40 10 L54 18 Z M66 26 L74 12 L58 18 Z" fill="url(#gd-gem)" stroke="#7a4fa0" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="49" cy="38" r="4.4" fill="#f2e0ff" stroke="${OL}" stroke-width="1.8"/><ellipse cx="49" cy="38" rx="1.7" ry="2.9" fill="${OL}"/>
  <circle cx="64" cy="38" r="4.4" fill="#f2e0ff" stroke="${OL}" stroke-width="1.8"/><ellipse cx="64" cy="38" rx="1.7" ry="2.9" fill="${OL}"/>
  <path d="M46 48 q6 5 14 2" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M48 49 l1.6 3 M56 51 l-1 3" stroke="#f2e0ff" stroke-width="1.8" stroke-linecap="round"/>
  <g fill="url(#gd-body)" stroke="${OL}" stroke-width="2.4">
    <path d="M40 96 L36 108 L48 102 Z"/><path d="M72 96 L76 108 L64 102 Z"/>
  </g>
  <g fill="#f2e0ff" opacity=".9">
    <circle cx="30" cy="46" r="1.6"><animate attributeName="opacity" values=".9;.2;.9" dur="1.7s" repeatCount="indefinite"/></circle>
    <circle cx="92" cy="42" r="1.5"><animate attributeName="opacity" values=".2;.9;.2" dur="2s" repeatCount="indefinite"/></circle>
  </g>`;

  // --------------------------------------------------------------- Floralope
  A.floralope = `
  <defs>
    <linearGradient id="fa-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c9e8ac"/><stop offset="100%" stop-color="#8fc46a"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="26" ry="6" fill="#000" opacity=".12"/>
  <g stroke="#5da24a" stroke-width="3" fill="none" stroke-linecap="round">
    <path d="M46 30 C40 18 30 16 26 6 M74 30 C80 18 90 16 94 6"/>
  </g>
  <g stroke="${OL}" stroke-width="1.6">
    <circle cx="26" cy="6" r="4.5" fill="#ffb3c7"/><circle cx="22" cy="10" r="3.6" fill="#ffc9d6"/><circle cx="30" cy="10" r="3.6" fill="#ffc9d6"/>
    <circle cx="94" cy="6" r="4.5" fill="#c7a6ff"/><circle cx="90" cy="10" r="3.6" fill="#d6bcff"/><circle cx="98" cy="10" r="3.6" fill="#d6bcff"/>
  </g>
  <circle cx="26" cy="9" r="2" fill="#ffe066"/><circle cx="94" cy="9" r="2" fill="#ffe066"/>
  <path d="M50 66 C46 52 52 44 60 44 C68 44 74 52 70 66 Z" fill="url(#fa-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="84" rx="22" ry="16" fill="url(#fa-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="88" rx="11" ry="8" fill="#eef8e0"/>
  <path d="M44 50 l-6 -5 l9 1 Z M76 50 l6 -5 l-9 1 Z" fill="#a5d98c" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="53" cy="54" r="3.8" fill="${OL}"/><circle cx="54.3" cy="52.7" r="1.4" fill="#fff"/>
  <circle cx="67" cy="54" r="3.8" fill="${OL}"/><circle cx="68.3" cy="52.7" r="1.4" fill="#fff"/>
  <ellipse cx="60" cy="62" rx="3.8" ry="2.8" fill="#4c7a3a"/>
  <path d="M56 66 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#ffe066"><circle cx="50" cy="80" r="2"/><circle cx="60" cy="76" r="2"/><circle cx="70" cy="80" r="2"/></g>
  <g stroke="${OL}" stroke-width="5" stroke-linecap="round" fill="none">
    <path d="M46 98 L44 108 M54 100 L53 110 M66 100 L67 110 M74 98 L76 108" stroke="#8fc46a"/>
  </g>
  <g stroke="#4c7a3a" stroke-width="2.4" stroke-linecap="round">
    <path d="M44 108 l-3 2 M53 110 l-3 2 M67 110 l3 2 M76 108 l3 2" fill="none"/>
  </g>
  <path d="M82 82 C92 78 94 70 90 64" fill="none" stroke="#8fc46a" stroke-width="3.4" stroke-linecap="round"/>
  <circle cx="90" cy="63" r="3.4" fill="#ffb3c7" stroke="${OL}" stroke-width="1.6"/>`;

  // --------------------------------------------------------------- Magmander
  A.magmander = `
  <defs>
    <linearGradient id="mg3-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#4a3c40"/><stop offset="100%" stop-color="#2e2528"/>
    </linearGradient>
    <radialGradient id="mg3-glow" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#ffd94d"/><stop offset="60%" stop-color="#ff8c42"/><stop offset="100%" stop-color="#e0431f"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="107" rx="30" ry="6" fill="#000" opacity=".13"/>
  <path d="M84 88 C102 84 112 70 106 54 C104 66 96 74 88 76 C96 66 98 56 92 48"
        fill="none" stroke="url(#mg3-glow)" stroke-width="8" stroke-linecap="round">
    <animate attributeName="opacity" values="1;.75;1" dur="1.4s" repeatCount="indefinite"/>
  </path>
  <ellipse cx="56" cy="80" rx="30" ry="20" fill="url(#mg3-body)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="url(#mg3-glow)" stroke="#c2451f" stroke-width="1.2">
    <path d="M40 72 l6 -4 l4 6 l-6 4 Z"/><path d="M58 68 l6 -4 l5 6 l-6 4 Z"/><path d="M74 74 l6 -3 l3 6 l-6 3 Z"/>
  </g>
  <circle cx="42" cy="54" r="18" fill="url(#mg3-body)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="url(#mg3-glow)" stroke="#c2451f" stroke-width="1.4">
    <path d="M32 40 l-3 -12 l7 8 Z"/><path d="M44 36 l1 -13 l6 10 Z"/>
  </g>
  <ellipse cx="42" cy="62" rx="10" ry="7" fill="#5a4a48" stroke="${OL}" stroke-width="2"/>
  <path d="M34 62 q8 5 16 0" fill="none" stroke="#ff8c42" stroke-width="2" stroke-linecap="round"/>
  <circle cx="36" cy="52" r="4.2" fill="#ffd94d" stroke="${OL}" stroke-width="1.8"/><ellipse cx="36" cy="52" rx="1.6" ry="2.6" fill="${OL}"/>
  <circle cx="49" cy="52" r="4.2" fill="#ffd94d" stroke="${OL}" stroke-width="1.8"/><ellipse cx="49" cy="52" rx="1.6" ry="2.6" fill="${OL}"/>
  <g fill="url(#mg3-body)" stroke="${OL}" stroke-width="2.4">
    <path d="M40 96 C32 100 30 106 36 106 L48 106 C50 100 46 96 40 96 Z"/>
    <path d="M70 96 C78 100 80 106 74 106 L62 106 C60 100 64 96 70 96 Z"/>
  </g>
  <g fill="#ff8c42" opacity=".95">
    <circle cx="24" cy="64" r="1.8"><animate attributeName="opacity" values=".95;.3;.95" dur="1.2s" repeatCount="indefinite"/></circle>
    <circle cx="98" cy="46" r="1.6"><animate attributeName="opacity" values=".3;.95;.3" dur="1.5s" repeatCount="indefinite"/></circle>
  </g>`;

  // --------------------------------------------------------------- Cascolotl
  A.cascolotl = `
  <defs>
    <radialGradient id="ca-body" cx="42%" cy="30%" r="80%">
      <stop offset="0%" stop-color="#bfeafc"/><stop offset="70%" stop-color="#6fc0e8"/><stop offset="100%" stop-color="#3f95c9"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="30" ry="7" fill="#9fd4f0" stroke="#5b9ec7" stroke-width="2" opacity=".7"/>
  <ellipse cx="60" cy="78" rx="27" ry="24" fill="url(#ca-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="50" r="21" fill="url(#ca-body)" stroke="${OL}" stroke-width="2.8"/>
  <g stroke="${OL}" stroke-width="2.2" fill="#8fd8f2">
    <path d="M40 38 C28 30 22 34 22 42 C28 40 34 42 38 46 Z"/>
    <path d="M40 50 C26 48 20 54 22 62 C28 56 34 54 40 56 Z"/>
    <path d="M80 38 C92 30 98 34 98 42 C92 40 86 42 82 46 Z"/>
    <path d="M80 50 C94 48 100 54 98 62 C92 56 86 54 80 56 Z"/>
  </g>
  <g stroke="#bfeeff" stroke-width="2" fill="none" stroke-linecap="round" opacity=".9">
    <path d="M26 44 q-2 6 -1 12"><animate attributeName="opacity" values=".9;.3;.9" dur="1.6s" repeatCount="indefinite"/></path>
    <path d="M94 44 q2 6 1 12"><animate attributeName="opacity" values=".3;.9;.3" dur="1.6s" repeatCount="indefinite"/></path>
  </g>
  <circle cx="51" cy="48" r="4.4" fill="${OL}"/><circle cx="52.6" cy="46.4" r="1.6" fill="#fff"/>
  <circle cx="69" cy="48" r="4.4" fill="${OL}"/><circle cx="70.6" cy="46.4" r="1.6" fill="#fff"/>
  <path d="M52 58 Q60 65 68 58" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="44" cy="56" rx="4" ry="2.6" fill="#ff9eb8" opacity=".8"/>
  <ellipse cx="76" cy="56" rx="4" ry="2.6" fill="#ff9eb8" opacity=".8"/>
  <ellipse cx="60" cy="86" rx="14" ry="10" fill="#e8f8ff" opacity=".8"/>
  <path d="M84 84 C96 82 102 72 98 62 C92 70 86 72 80 72 Z" fill="url(#ca-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <g fill="url(#ca-body)" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="44" cy="98" rx="8" ry="5"/><ellipse cx="76" cy="98" rx="8" ry="5"/>
  </g>
  <g fill="#cdeefc" stroke="#5b9ec7" stroke-width="1.4" opacity=".9">
    <circle cx="26" cy="30" r="3"><animate attributeName="cy" values="30;24;30" dur="2.6s" repeatCount="indefinite"/></circle>
    <circle cx="96" cy="28" r="2.4"><animate attributeName="cy" values="28;22;28" dur="3s" repeatCount="indefinite"/></circle>
  </g>`;

  // ---------------------------------------------------------------- Frostfang
  A.frostfang = `
  <defs>
    <linearGradient id="fw-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eef6fb"/><stop offset="55%" stop-color="#c3ddec"/><stop offset="100%" stop-color="#95b8ce"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="108" rx="30" ry="6" fill="#5f8aa8" opacity=".22"/>
  <path d="M84 92 C96 86 100 74 96 66 C92 74 84 80 78 82 Z" fill="url(#fw-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <ellipse cx="58" cy="82" rx="28" ry="20" fill="url(#fw-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 74 C42 84 40 92 36 98 M76 74 C74 84 76 92 80 98" stroke="#7fa8c4" stroke-width="2" fill="none" opacity=".6"/>
  <path d="M44 60 C40 44 50 34 60 34 C70 34 80 44 76 60 C70 68 50 68 44 60 Z" fill="url(#fw-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M46 38 L38 22 L54 30 Z M74 38 L82 22 L66 30 Z" fill="url(#fw-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M47 34 L42 24 L52 30 Z M73 34 L78 24 L68 30 Z" fill="#bcd9e8"/>
  <circle cx="52" cy="52" r="4.2" fill="#4a7a9a" stroke="${OL}" stroke-width="1.6"/><circle cx="53.4" cy="50.6" r="1.4" fill="#fff"/>
  <circle cx="68" cy="52" r="4.2" fill="#4a7a9a" stroke="${OL}" stroke-width="1.6"/><circle cx="69.4" cy="50.6" r="1.4" fill="#fff"/>
  <path d="M56 60 L64 60 L60 66 Z" fill="#7fa8c4" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M60 66 q-5 5 -10 3 M60 66 q5 5 10 3" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M54 68 l2 5 M66 68 l-2 5" stroke="#eafaff" stroke-width="2.4" stroke-linecap="round"/>
  <g fill="url(#fw-body)" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="42" cy="99" rx="9" ry="6"/><ellipse cx="80" cy="99" rx="9" ry="6"/>
  </g>
  <g stroke="#7fa8c4" stroke-width="2" stroke-linecap="round">
    <path d="M37 99 l-3 -3 M42 98 l0 -4 M47 99 l3 -3 M75 99 l-3 -3 M80 98 l0 -4 M85 99 l3 -3" fill="none"/>
  </g>
  <g fill="#fff" opacity=".9">
    <circle cx="22" cy="42" r="1.6"><animate attributeName="opacity" values=".9;.2;.9" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="48" r="1.5"><animate attributeName="opacity" values=".2;.9;.2" dur="1.9s" repeatCount="indefinite"/></circle>
  </g>`;

  // --------------------------------------------------------------- Voltcavor
  A.voltcavor = `
  <defs>
    <radialGradient id="vc-body" cx="45%" cy="32%" r="78%">
      <stop offset="0%" stop-color="#7a6fa0"/><stop offset="100%" stop-color="#4a4068"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="107" rx="28" ry="6" fill="#000" opacity=".14"/>
  <g stroke="#ffe94d" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M60 8 l-6 12 l7 -2 l-5 12">
      <animate attributeName="opacity" values="1;.2;1" dur="0.7s" repeatCount="indefinite"/>
    </path>
  </g>
  <ellipse cx="60" cy="78" rx="30" ry="24" fill="url(#vc-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="86" rx="17" ry="11" fill="#cbb8e6" opacity=".7"/>
  <g fill="#ffe94d" stroke="#c99a3a" stroke-width="1.2">
    <path d="M44 74 l5 -3 l-2 5 l5 2 l-7 1 l2 -4 Z"/><path d="M70 70 l5 -3 l-2 5 l5 2 l-7 1 l2 -4 Z"/>
  </g>
  <circle cx="60" cy="50" r="22" fill="url(#vc-body)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="#ffe94d" stroke="${OL}" stroke-width="1.8">
    <path d="M48 32 l-4 -14 l9 9 Z"/><path d="M64 30 l3 -15 l6 12 Z"/>
  </g>
  <path d="M38 46 C26 42 22 32 26 26 C30 32 36 38 42 40 Z" fill="#c99a3a" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M82 46 C94 42 98 32 94 26 C90 32 84 38 78 40 Z" fill="#c99a3a" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <ellipse cx="60" cy="58" rx="12" ry="9" fill="#ffc9d6" stroke="${OL}" stroke-width="2.2"/>
  <path d="M60 54 L60 64 M54 66 q6 4 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <circle cx="51" cy="48" r="4" fill="#ffe94d" stroke="${OL}" stroke-width="1.8"/><circle cx="51" cy="48" r="1.7" fill="${OL}"/>
  <circle cx="69" cy="48" r="4" fill="#ffe94d" stroke="${OL}" stroke-width="1.8"/><circle cx="69" cy="48" r="1.7" fill="${OL}"/>
  <g fill="#f4e9c8" stroke="${OL}" stroke-width="2.4">
    <path d="M32 78 C20 76 14 68 18 60 C22 66 28 70 34 70 Z"/>
    <path d="M88 78 C100 76 106 68 102 60 C98 66 92 70 86 70 Z"/>
  </g>
  <g stroke="#e8dcc0" stroke-width="2.2" stroke-linecap="round">
    <path d="M20 64 l-4 -3 M23 68 l-5 -1 M100 64 l4 -3 M97 68 l5 -1" fill="none"/>
  </g>
  <g stroke="${OL}" stroke-width="2.6" stroke-linecap="round"><path d="M50 100 l-2 6 M70 100 l2 6" fill="none"/></g>
  <g fill="#ffe94d" opacity=".95">
    <circle cx="24" cy="88" r="1.8"><animate attributeName="opacity" values=".95;.2;.95" dur="0.8s" repeatCount="indefinite"/></circle>
    <circle cx="96" cy="90" r="1.6"><animate attributeName="opacity" values=".2;.95;.2" dur="1s" repeatCount="indefinite"/></circle>
  </g>`;

})(window.CRITTER_ART);
