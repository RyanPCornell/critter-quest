// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 19
//  The Hush over Frostpeak: mist creatures, the Lumenbell, and the Rimewraith.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#2e2840";

  // ------------------------------- Hushling (mist mote) ------------------
  A.hushling = `
  <defs><radialGradient id="hzl-b" cx="45%" cy="40%" r="60%">
    <stop offset="0%" stop-color="#f1eefb"/><stop offset="60%" stop-color="#b9b0d6"/><stop offset="100%" stop-color="#7f74a8"/></radialGradient></defs>
  <ellipse cx="60" cy="104" rx="20" ry="4" fill="#000" opacity=".12"/>
  <g class="sway" opacity=".55" fill="#b9b0d6">
    <circle cx="26" cy="78" r="7"/><circle cx="96" cy="70" r="6"/><circle cx="88" cy="94" r="4"/></g>
  <path d="M30 76 C22 60 34 42 50 46 C54 32 74 32 78 46 C94 42 102 62 92 76 C96 90 80 98 70 92 C64 100 50 100 46 92 C34 98 24 88 30 76 Z"
        fill="url(#hzl-b)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="51" cy="66" r="6" fill="#fff"/><circle cx="52" cy="67" r="3.2" fill="${OL}"/>
  <circle cx="71" cy="66" r="6" fill="#fff"/><circle cx="72" cy="67" r="3.2" fill="${OL}"/>
  <!-- a little stitched-shut mouth: the Hush took its voice -->
  <path d="M54 80 H68" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="1.4" stroke-linecap="round"><path d="M57 77.5 v5 M61 77.5 v5 M65 77.5 v5"/></g>
  <g fill="#fff" opacity=".8"><circle cx="44" cy="54" r="2"/><circle cx="80" cy="56" r="1.4"/></g>`;

  // ------------------------------- Hushwing (silent owl) -----------------
  A.hushwing = `
  <defs><linearGradient id="hzw-b" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#e9e6f5"/><stop offset="100%" stop-color="#8d86ad"/></linearGradient></defs>
  <ellipse cx="60" cy="108" rx="22" ry="4" fill="#000" opacity=".14"/>
  <g fill="#c9c3e0" opacity=".5" class="sway"><path d="M8 60 C20 54 30 58 36 66 C24 64 16 66 8 60 Z"/><path d="M112 58 C100 52 90 56 84 64 C96 62 104 64 112 58 Z"/></g>
  <path d="M34 62 C14 52 8 70 18 84 C26 76 34 74 40 76 Z M86 62 C106 52 112 70 102 84 C94 76 86 74 80 76 Z"
        fill="url(#hzw-b)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M60 30 C80 30 88 46 86 68 C84 90 74 100 60 100 C46 100 36 90 34 68 C32 46 40 30 60 30 Z" fill="url(#hzw-b)" stroke="${OL}" stroke-width="3"/>
  <path d="M42 34 L38 20 L50 30 Z M78 34 L82 20 L70 30 Z" fill="#8d86ad" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <ellipse cx="60" cy="78" rx="14" ry="15" fill="#f6f4fc" stroke="${OL}" stroke-width="1.8"/>
  <g fill="none" stroke="#a9a2c8" stroke-width="1.5"><path d="M52 74 q3 3 6 0 M62 74 q3 3 6 0 M56 82 q3 3 6 0"/></g>
  <circle cx="49" cy="50" r="9" fill="#fff" stroke="${OL}" stroke-width="2.2"/><circle cx="71" cy="50" r="9" fill="#fff" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="49" cy="51" r="5" fill="#6a5fa0"/><circle cx="71" cy="51" r="5" fill="#6a5fa0"/>
  <circle cx="47.5" cy="49" r="1.6" fill="#fff"/><circle cx="69.5" cy="49" r="1.6" fill="#fff"/>
  <!-- beak frozen shut with a crust of frost -->
  <path d="M56 58 L60 66 L64 58 Z" fill="#e3c76a" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M55 60 h10" stroke="#cfe8ff" stroke-width="2.4" stroke-linecap="round"/>
  <g stroke="${OL}" stroke-width="2.2" stroke-linecap="round"><path d="M53 100 l-3 6 M67 100 l3 6"/></g>`;

  // ------------------------------- Wraithfox (mist fox) ------------------
  A.wraithfox = `
  <defs><linearGradient id="hzf-b" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#f4f2fb"/><stop offset="70%" stop-color="#c3bde0"/><stop offset="100%" stop-color="#c3bde0" stop-opacity="0"/></linearGradient></defs>
  <ellipse cx="54" cy="104" rx="30" ry="4" fill="#000" opacity=".12"/>
  <!-- tail fading into mist -->
  <path d="M74 80 C92 76 108 60 104 40 C116 52 116 76 98 88 C90 94 80 92 74 88 Z" fill="url(#hzf-b)" stroke="${OL}" stroke-width="2.2" stroke-dasharray="6 3"/>
  <g fill="#c3bde0" opacity=".45" class="sway"><circle cx="110" cy="34" r="5"/><circle cx="114" cy="22" r="3"/></g>
  <path d="M28 98 C24 76 34 62 54 62 C72 62 82 74 80 98 Z" fill="#eeebf8" stroke="${OL}" stroke-width="2.8"/>
  <g stroke="${OL}" stroke-width="2.6" fill="#eeebf8"><path d="M36 96 v8 h7 v-8 M62 96 v8 h7 v-8"/></g>
  <path d="M30 56 C26 40 34 30 46 30 L36 12 L54 26 L66 14 L64 32 C74 36 76 48 70 58 C62 70 38 70 30 56 Z" fill="#f4f2fb" stroke="${OL}" stroke-width="2.8" stroke-linejoin="round"/>
  <path d="M40 16 L44 26 L48 22 Z M62 18 L60 28 L56 24 Z" fill="#b6aed6"/>
  <path d="M38 50 C42 58 48 62 54 62 C48 64 40 62 36 56 Z" fill="#d9d4ee"/>
  <circle cx="58" cy="54" r="3" fill="${OL}"/>
  <path d="M38 42 q4 -4 8 0 M54 40 q4 -4 8 0" fill="none" stroke="#6a5fa0" stroke-width="2.6" stroke-linecap="round"/>
  <circle cx="42" cy="44" r="2" fill="#6a5fa0"/><circle cx="58" cy="42" r="2" fill="#6a5fa0"/>`;

  // ------------------------------- Lumenbell (warding bell) --------------
  A.lumenbell = `
  <defs><linearGradient id="hzb-b" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#ffe9a3"/><stop offset="55%" stop-color="#d9a441"/><stop offset="100%" stop-color="#9a6a22"/></linearGradient>
    <radialGradient id="hzb-g" cx="50%" cy="55%" r="55%"><stop offset="0%" stop-color="#fff6c9" stop-opacity=".8"/><stop offset="100%" stop-color="#fff6c9" stop-opacity="0"/></radialGradient></defs>
  <circle cx="60" cy="62" r="56" fill="url(#hzb-g)"/>
  <g fill="none" stroke="#ffe08a" stroke-width="2" opacity=".7" class="glowpulse">
    <path d="M14 62 C14 40 26 26 36 20 M106 62 C106 40 94 26 84 20"/><path d="M6 62 C6 34 20 18 32 10 M114 62 C114 34 100 18 88 10"/></g>
  <path d="M54 14 C54 8 66 8 66 14 L66 20 L54 20 Z" fill="#9a6a22" stroke="${OL}" stroke-width="2.4"/>
  <path d="M60 20 C40 20 34 40 34 60 C34 74 28 82 22 88 L98 88 C92 82 86 74 86 60 C86 40 80 20 60 20 Z" fill="url(#hzb-b)" stroke="${OL}" stroke-width="3" stroke-linejoin="round"/>
  <path d="M24 88 H96" stroke="${OL}" stroke-width="5" stroke-linecap="round"/>
  <g stroke="#9a6a22" stroke-width="1.8" fill="none" opacity=".8"><path d="M38 72 C50 76 70 76 82 72"/></g>
  <circle cx="60" cy="98" r="8" fill="#ffe08a" stroke="${OL}" stroke-width="2.4"/>
  <path d="M60 88 v2" stroke="${OL}" stroke-width="2.4"/>
  <circle cx="50" cy="52" r="5" fill="#fff"/><circle cx="51" cy="53" r="2.6" fill="${OL}"/>
  <circle cx="70" cy="52" r="5" fill="#fff"/><circle cx="71" cy="53" r="2.6" fill="${OL}"/>
  <path d="M53 62 C57 66 63 66 67 62" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M44 34 C48 28 54 26 58 26" fill="none" stroke="#fff6c9" stroke-width="3" stroke-linecap="round" opacity=".8"/>`;

  // ------------------------------- Rimewraith (thief of words) -----------
  A.rimewraith = `
  <defs><linearGradient id="hzr-c" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#4a4170"/><stop offset="70%" stop-color="#2a2342"/><stop offset="100%" stop-color="#2a2342" stop-opacity="0"/></linearGradient>
    <radialGradient id="hzr-m" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#8a7fb8" stop-opacity=".55"/><stop offset="100%" stop-color="#8a7fb8" stop-opacity="0"/></radialGradient></defs>
  <ellipse cx="60" cy="96" rx="58" ry="20" fill="url(#hzr-m)"/>
  <!-- tattered cloak woven from frozen letters -->
  <path d="M60 22 C34 24 24 50 22 78 C20 92 16 102 10 110 L26 104 L32 112 L42 104 L50 114 L60 104 L70 114 L78 104 L88 112 L94 104 L110 110 C104 102 100 92 98 78 C96 50 86 24 60 22 Z"
        fill="url(#hzr-c)" stroke="${OL}" stroke-width="3" stroke-linejoin="round"/>
  <g font-size="8" font-weight="800" fill="#b8b0e0" opacity=".75" text-anchor="middle">
    <text x="38" y="70" transform="rotate(-12 38 70)">w</text><text x="80" y="66" transform="rotate(10 80 66)">r</text>
    <text x="46" y="88">d</text><text x="74" y="90" transform="rotate(-8 74 90)">s</text><text x="60" y="80">o</text></g>
  <!-- frost crown of ice spikes -->
  <path d="M38 34 L42 12 L48 28 L54 6 L60 26 L66 6 L72 28 L78 12 L82 34 Z" fill="#cfe8ff" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M40 40 C40 28 80 28 80 40 C80 54 72 62 60 62 C48 62 40 54 40 40 Z" fill="#1c1730" stroke="${OL}" stroke-width="2.6"/>
  <ellipse cx="51" cy="44" rx="5" ry="3.4" fill="#9fe3ff" class="glowpulse"/><ellipse cx="69" cy="44" rx="5" ry="3.4" fill="#9fe3ff" class="glowpulse"/>
  <!-- hands spilling the Hush -->
  <g fill="#8a7fb8" opacity=".6" class="sway"><circle cx="18" cy="74" r="7"/><circle cx="10" cy="64" r="4"/><circle cx="102" cy="74" r="7"/><circle cx="110" cy="64" r="4"/></g>
  <path d="M26 66 C20 70 18 76 22 80 M94 66 C100 70 102 76 98 80" fill="none" stroke="#cfe8ff" stroke-width="3" stroke-linecap="round"/>`;
})(window.CRITTER_ART);
