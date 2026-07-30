// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 8
//  Second-wave wild critters + the Frostcrown & Gleamcave quest creatures.
//  Each entry is inner SVG markup drawn on a 0 0 120 120 canvas, keyed by id.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // ---------------------------------------------------------------- Emberfly
  A.emberfly = `
  <defs>
    <linearGradient id="ef-wing" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffd166"/><stop offset="55%" stop-color="#f2913a"/><stop offset="100%" stop-color="#e05a2b"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="20" ry="4" fill="#000" opacity=".16"/>
  <g stroke="${OL}" stroke-width="2.4" stroke-linejoin="round">
    <path d="M58 62 C30 40 20 52 24 68 C28 84 46 78 58 70 Z" fill="url(#ef-wing)"/>
    <path d="M62 62 C90 40 100 52 96 68 C92 84 74 78 62 70 Z" fill="url(#ef-wing)"/>
  </g>
  <g fill="#fff2c8" opacity=".85"><circle cx="36" cy="60" r="4"/><circle cx="84" cy="60" r="4"/></g>
  <ellipse cx="60" cy="66" rx="9" ry="17" fill="#5a3a2a" stroke="${OL}" stroke-width="2.4"/>
  <path d="M60 50 l-6 -12 M60 50 l6 -12" stroke="${OL}" stroke-width="2" stroke-linecap="round" fill="none"/>
  <circle cx="54" cy="40" r="2.4" fill="#ffd166"/><circle cx="66" cy="40" r="2.4" fill="#ffd166"/>
  <circle cx="56" cy="60" r="3" fill="#fff"/><circle cx="56" cy="60" r="1.5" fill="${OL}"/>
  <circle cx="64" cy="60" r="3" fill="#fff"/><circle cx="64" cy="60" r="1.5" fill="${OL}"/>
  <g fill="#ffcf6b" class="glowpulse"><circle cx="30" cy="82" r="2"/><circle cx="90" cy="82" r="2"/><circle cx="60" cy="92" r="2"/></g>`;

  // -------------------------------------------------------------- Thornsprout
  A.thornsprout = `
  <defs>
    <radialGradient id="ts-body" cx="45%" cy="38%" r="70%">
      <stop offset="0%" stop-color="#8fd36a"/><stop offset="100%" stop-color="#4e9a3e"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="24" ry="5" fill="#000" opacity=".16"/>
  <ellipse cx="60" cy="74" rx="30" ry="26" fill="url(#ts-body)" stroke="${OL}" stroke-width="2.8"/>
  <g stroke="${OL}" stroke-width="2.2" fill="#3f7d33">
    <path d="M40 56 l-8 -10 4 12 Z"/><path d="M60 50 l0 -14 5 12 Z"/><path d="M80 56 l8 -10 -4 12 Z"/>
    <path d="M34 74 l-12 -3 10 7 Z"/><path d="M86 74 l12 -3 -10 7 Z"/>
  </g>
  <path d="M52 44 C56 34 64 34 68 44" fill="#6fbf4f" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="51" cy="72" r="4.5" fill="#fff"/><circle cx="52" cy="73" r="2.2" fill="${OL}"/>
  <circle cx="69" cy="72" r="4.5" fill="#fff"/><circle cx="68" cy="73" r="2.2" fill="${OL}"/>
  <path d="M54 84 q6 5 12 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M46 66 q3 3 0 6 M74 66 q-3 3 0 6" fill="#c9705a"/>
  <g stroke="${OL}" stroke-width="2.4" stroke-linecap="round"><path d="M48 98 l-2 8 M72 98 l2 8"/></g>`;

  // ------------------------------------------------------------------ Rilllet
  A.rilllet = `
  <defs>
    <radialGradient id="rl-body" cx="45%" cy="35%" r="72%">
      <stop offset="0%" stop-color="#8fd6f5"/><stop offset="100%" stop-color="#3f8fd0"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="22" ry="4" fill="#000" opacity=".14"/>
  <path d="M70 66 C96 54 104 74 92 86 C86 78 78 76 72 78 Z" fill="url(#rl-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <circle cx="54" cy="70" r="28" fill="url(#rl-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="46" cy="60" rx="9" ry="6" fill="#d8f2ff" opacity=".7"/>
  <circle cx="46" cy="70" r="5.5" fill="#fff"/><circle cx="47" cy="71" r="2.7" fill="${OL}"/>
  <circle cx="64" cy="70" r="5.5" fill="#fff"/><circle cx="63" cy="71" r="2.7" fill="${OL}"/>
  <path d="M50 84 q6 6 14 1" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <g fill="#d8f2ff" class="glowpulse"><circle cx="30" cy="54" r="2"/><circle cx="80" cy="52" r="1.6"/><circle cx="34" cy="86" r="1.6"/></g>`;

  // ------------------------------------------------------------------ Dunepip
  A.dunepip = `
  <defs>
    <radialGradient id="dp-body" cx="45%" cy="38%" r="70%">
      <stop offset="0%" stop-color="#efce97"/><stop offset="100%" stop-color="#c69a5c"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="22" ry="5" fill="#000" opacity=".16"/>
  <path d="M34 78 C30 52 90 52 86 78 C86 94 34 94 34 78 Z" fill="url(#dp-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M42 60 C46 50 74 50 78 60" fill="none" stroke="${OL}" stroke-width="2.2"/>
  <path d="M50 56 l-4 -12 M60 54 l0 -13 M70 56 l4 -12" stroke="${OL}" stroke-width="2.2" stroke-linecap="round" fill="none"/>
  <circle cx="50" cy="44" r="2.4" fill="#8a6a3a"/><circle cx="60" cy="41" r="2.4" fill="#8a6a3a"/><circle cx="70" cy="44" r="2.4" fill="#8a6a3a"/>
  <circle cx="52" cy="74" r="5" fill="#fff"/><circle cx="53" cy="75" r="2.4" fill="${OL}"/>
  <circle cx="68" cy="74" r="5" fill="#fff"/><circle cx="67" cy="75" r="2.4" fill="${OL}"/>
  <path d="M56 84 q4 4 8 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="3" stroke-linecap="round"><path d="M46 92 l-3 10 M74 92 l3 10"/></g>`;

  // ------------------------------------------------------------------ Breezel
  A.breezel = `
  <defs>
    <radialGradient id="bz-puff" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#ffffff"/><stop offset="100%" stop-color="#dfeaf0"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="106" rx="16" ry="3.5" fill="#000" opacity=".12"/>
  <g fill="url(#bz-puff)" stroke="${OL}" stroke-width="1.6">
    <circle cx="60" cy="52" r="30"/>
  </g>
  <g stroke="#cddbe2" stroke-width="1.6" stroke-linecap="round">
    <path d="M60 52 L60 22 M60 52 L38 34 M60 52 L82 34 M60 52 L32 52 M60 52 L88 52 M60 52 L40 72 M60 52 L80 72"/>
  </g>
  <g fill="#fff"><circle cx="60" cy="22" r="3"/><circle cx="38" cy="34" r="3"/><circle cx="82" cy="34" r="3"/><circle cx="32" cy="52" r="3"/><circle cx="88" cy="52" r="3"/><circle cx="40" cy="72" r="3"/><circle cx="80" cy="72" r="3"/></g>
  <ellipse cx="60" cy="80" rx="12" ry="14" fill="#8fb7c9" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="55" cy="78" r="3.4" fill="#fff"/><circle cx="55" cy="78" r="1.7" fill="${OL}"/>
  <circle cx="65" cy="78" r="3.4" fill="#fff"/><circle cx="65" cy="78" r="1.7" fill="${OL}"/>
  <path d="M56 87 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>`;

  // ------------------------------------------------------------------ Murklet
  A.murklet = `
  <defs>
    <radialGradient id="mk-body" cx="50%" cy="40%" r="70%">
      <stop offset="0%" stop-color="#6f6390"/><stop offset="100%" stop-color="#3c3358"/>
    </radialGradient>
    <radialGradient id="mk-lamp" cx="50%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#cfeaff"/><stop offset="100%" stop-color="#6fb7e0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="58" r="40" fill="url(#mk-lamp)" opacity=".7"/>
  <ellipse cx="60" cy="104" rx="18" ry="4" fill="#000" opacity=".16"/>
  <path d="M38 72 C36 46 84 46 82 72 C82 92 74 96 68 88 C64 96 56 96 52 88 C46 96 38 92 38 72 Z" fill="url(#mk-body)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="60" cy="42" r="6" fill="#dff2ff" class="glowpulse" stroke="${OL}" stroke-width="1.6"/>
  <path d="M60 48 L60 58" stroke="${OL}" stroke-width="1.8"/>
  <circle cx="52" cy="66" r="4.6" fill="#dff2ff"/><circle cx="52" cy="66" r="2.2" fill="${OL}"/>
  <circle cx="68" cy="66" r="4.6" fill="#dff2ff"/><circle cx="68" cy="66" r="2.2" fill="${OL}"/>
  <path d="M54 78 q6 4 12 0" fill="none" stroke="#dff2ff" stroke-width="2" stroke-linecap="round"/>`;

  // ---------------------------------------------------------------- Glacimoth
  A.glacimoth = `
  <defs>
    <linearGradient id="gm-wing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eafcff"/><stop offset="55%" stop-color="#b6ecff"/><stop offset="100%" stop-color="#7fc4e0"/>
    </linearGradient>
    <radialGradient id="gm-aura" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#d9c6ff" stop-opacity=".55"/><stop offset="100%" stop-color="#d9c6ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="58" r="52" fill="url(#gm-aura)"/>
  <ellipse cx="60" cy="106" rx="20" ry="4" fill="#000" opacity=".14"/>
  <g stroke="${OL}" stroke-width="2.4" stroke-linejoin="round">
    <path d="M56 66 C26 40 12 56 20 74 C26 90 46 82 56 74 Z" fill="url(#gm-wing)"/>
    <path d="M64 66 C94 40 108 56 100 74 C94 90 74 82 64 74 Z" fill="url(#gm-wing)"/>
    <path d="M54 74 C40 84 34 98 44 104 C52 98 54 88 56 82 Z" fill="url(#gm-wing)"/>
    <path d="M66 74 C80 84 86 98 76 104 C68 98 66 88 64 82 Z" fill="url(#gm-wing)"/>
  </g>
  <g stroke="#8fd6f0" stroke-width="1.4" fill="none"><path d="M34 58 l8 8 M86 58 l-8 8 M46 96 l6 -6 M74 96 l-6 -6"/></g>
  <g fill="#eafcff"><circle cx="34" cy="62" r="3"/><circle cx="86" cy="62" r="3"/></g>
  <ellipse cx="60" cy="70" rx="8" ry="18" fill="#6f86b0" stroke="${OL}" stroke-width="2.4"/>
  <path d="M60 52 l-7 -12 M60 52 l7 -12" stroke="${OL}" stroke-width="2" stroke-linecap="round" fill="none"/>
  <circle cx="53" cy="40" r="2.6" fill="#eafcff"/><circle cx="67" cy="40" r="2.6" fill="#eafcff"/>
  <circle cx="56" cy="64" r="3" fill="#fff"/><circle cx="56" cy="64" r="1.5" fill="${OL}"/>
  <circle cx="64" cy="64" r="3" fill="#fff"/><circle cx="64" cy="64" r="1.5" fill="${OL}"/>`;

  // ----------------------------------------------------------------- Auravern
  A.auravern = `
  <defs>
    <linearGradient id="av-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#dff3ff"/><stop offset="60%" stop-color="#a7d4ee"/><stop offset="100%" stop-color="#6fa8d0"/>
    </linearGradient>
    <linearGradient id="av-crown" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#c9f0d8"/><stop offset="50%" stop-color="#9fd6ff"/><stop offset="100%" stop-color="#c6b6ff"/>
    </linearGradient>
    <radialGradient id="av-aura" cx="50%" cy="42%" r="62%">
      <stop offset="0%" stop-color="#bfe6ff" stop-opacity=".5"/><stop offset="100%" stop-color="#bfe6ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="56" r="56" fill="url(#av-aura)"/>
  <ellipse cx="60" cy="108" rx="26" ry="5" fill="#000" opacity=".18"/>
  <path d="M30 100 C18 84 22 66 34 60 C30 78 40 84 48 82" fill="url(#av-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M90 100 C102 84 98 66 86 60 C90 78 80 84 72 82" fill="url(#av-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M60 96 C40 96 36 74 40 60 C46 44 74 44 80 60 C84 74 80 96 60 96 Z" fill="url(#av-body)" stroke="${OL}" stroke-width="2.8"/>
  <circle cx="60" cy="50" r="22" fill="url(#av-body)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="url(#av-crown)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round">
    <path d="M40 34 L34 12 L48 26 L60 8 L72 26 L86 12 L80 34 Z"/>
  </g>
  <g class="glowpulse" fill="#eafcff"><circle cx="34" cy="16" r="2"/><circle cx="60" cy="10" r="2.3"/><circle cx="86" cy="16" r="2"/></g>
  <circle cx="52" cy="50" r="5" fill="#fff"/><circle cx="52" cy="50" r="2.5" fill="${OL}"/>
  <circle cx="68" cy="50" r="5" fill="#fff"/><circle cx="68" cy="50" r="2.5" fill="${OL}"/>
  <path d="M53 62 q7 5 14 0" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <path d="M60 72 l-8 14 8 -4 8 4 Z" fill="#cfe8f6" stroke="${OL}" stroke-width="2"/>`;

  // ----------------------------------------------------------------- Gleamkit
  A.gleamkit = `
  <defs>
    <linearGradient id="gk-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e7c6ff"/><stop offset="100%" stop-color="#a86fd6"/>
    </linearGradient>
    <radialGradient id="gk-glow" cx="50%" cy="55%" r="55%">
      <stop offset="0%" stop-color="#f2d9ff" stop-opacity=".6"/><stop offset="100%" stop-color="#f2d9ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="66" r="44" fill="url(#gk-glow)"/>
  <ellipse cx="60" cy="106" rx="22" ry="4" fill="#000" opacity=".16"/>
  <path d="M84 92 C104 84 104 64 92 58 C96 72 88 84 78 84 Z" fill="url(#gk-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="58" cy="80" rx="26" ry="20" fill="url(#gk-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M40 52 L34 26 L52 44 Z M76 52 L82 26 L64 44 Z" fill="url(#gk-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M42 48 L38 32 L48 44 Z M74 48 L78 32 L68 44 Z" fill="#f0dcff"/>
  <circle cx="58" cy="60" r="20" fill="url(#gk-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M58 44 L50 60 L58 76 L66 60 Z" fill="#f6e6ff" opacity=".8"/>
  <circle cx="50" cy="60" r="5" fill="#fff"/><circle cx="51" cy="61" r="2.5" fill="${OL}"/>
  <circle cx="66" cy="60" r="5" fill="#fff"/><circle cx="65" cy="61" r="2.5" fill="${OL}"/>
  <path d="M55 70 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#fbeaff" class="glowpulse"><circle cx="34" cy="70" r="1.8"/><circle cx="88" cy="72" r="1.8"/><circle cx="60" cy="96" r="1.8"/></g>`;

  // ---------------------------------------------------------------- Prismegis
  A.prismegis = `
  <defs>
    <linearGradient id="pg-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eddcff"/><stop offset="55%" stop-color="#c39ae8"/><stop offset="100%" stop-color="#8f6ec9"/>
    </linearGradient>
    <linearGradient id="pg-heart" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fff6b0"/><stop offset="50%" stop-color="#ffd166"/><stop offset="100%" stop-color="#ff9a5a"/>
    </linearGradient>
    <radialGradient id="pg-aura" cx="50%" cy="48%" r="60%">
      <stop offset="0%" stop-color="#ffe9a8" stop-opacity=".55"/><stop offset="100%" stop-color="#ffe9a8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="58" r="56" fill="url(#pg-aura)"/>
  <ellipse cx="60" cy="108" rx="28" ry="5" fill="#000" opacity=".18"/>
  <g fill="url(#pg-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round">
    <path d="M60 98 L34 86 L38 58 L60 48 L82 58 L86 86 Z"/>
    <path d="M40 92 L30 104 L44 100 Z M80 92 L90 104 L76 100 Z"/>
  </g>
  <path d="M60 48 L44 40 L52 20 L60 12 L68 20 L76 40 Z" fill="url(#pg-body)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <g stroke="${OL}" stroke-width="1.5" opacity=".5" fill="none"><path d="M60 12 L60 48 M44 40 L60 30 L76 40 M52 20 L60 30 L68 20"/></g>
  <path d="M60 66 L50 76 L60 90 L70 76 Z" fill="url(#pg-heart)" stroke="${OL}" stroke-width="2.2" class="glowpulse"/>
  <circle cx="52" cy="58" r="4.6" fill="#fff"/><circle cx="52" cy="58" r="2.3" fill="${OL}"/>
  <circle cx="68" cy="58" r="4.6" fill="#fff"/><circle cx="68" cy="58" r="2.3" fill="${OL}"/>
  <g fill="#fff6d8" class="glowpulse"><circle cx="30" cy="60" r="2.2"/><circle cx="90" cy="60" r="2.2"/><circle cx="60" cy="100" r="2"/></g>`;

})(window.CRITTER_ART);
