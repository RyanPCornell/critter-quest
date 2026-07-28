// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 7
//  Rift natives, Mythicals, and quest creatures.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // ---------------------------------------------------------------- Voidkit
  A.voidkit = `
  <defs>
    <radialGradient id="vk-body" cx="45%" cy="34%" r="78%">
      <stop offset="0%" stop-color="#4a4468"/><stop offset="70%" stop-color="#2c2648"/><stop offset="100%" stop-color="#1a1630"/>
    </radialGradient>
    <radialGradient id="vk-glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#7f8fe0" stop-opacity=".4"/><stop offset="100%" stop-color="#7f8fe0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="58" r="50" fill="url(#vk-glow)"/>
  <ellipse cx="60" cy="106" rx="24" ry="5" fill="#000" opacity=".2"/>
  <path d="M84 96 C102 92 106 76 98 62 C92 72 82 74 78 70" fill="none" stroke="url(#vk-body)" stroke-width="9" stroke-linecap="round"/>
  <g fill="#c9c0ff"><circle cx="98" cy="62" r="1.6"/><circle cx="90" cy="80" r="1.2"/></g>
  <ellipse cx="58" cy="80" rx="26" ry="22" fill="url(#vk-body)" stroke="${OL}" stroke-width="2.6"/>
  <ellipse cx="58" cy="88" rx="13" ry="9" fill="#3f3960" opacity=".7"/>
  <circle cx="58" cy="52" r="21" fill="url(#vk-body)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M42 38 L34 16 L52 30 Z M74 38 L82 16 L64 30 Z" fill="url(#vk-body)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M44 34 L40 22 L49 30 Z M72 34 L76 22 L67 30 Z" fill="#5b5384"/>
  <path d="M40 30 l-2 -6 M78 30 l2 -6" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <circle cx="50" cy="52" r="5" fill="#bfe6ff" stroke="${OL}" stroke-width="1.8"/><ellipse cx="50" cy="52" rx="1.8" ry="3.2" fill="${OL}"/>
  <circle cx="66" cy="52" r="5" fill="#bfe6ff" stroke="${OL}" stroke-width="1.8"/><ellipse cx="66" cy="52" rx="1.8" ry="3.2" fill="${OL}"/>
  <circle cx="51.4" cy="50.4" r="1.2" fill="#fff"/><circle cx="67.4" cy="50.4" r="1.2" fill="#fff"/>
  <path d="M55 60 L61 60 L58 64 Z" fill="#8f7fc0" stroke="${OL}" stroke-width="1.4" stroke-linejoin="round"/>
  <path d="M58 64 q-3 3 -7 2 M58 64 q3 3 7 2" fill="none" stroke="${OL}" stroke-width="1.8" stroke-linecap="round"/>
  <g stroke="#c9c0ff" stroke-width="1.4" stroke-linecap="round" opacity=".8"><path d="M46 58 l-10 -1 M46 61 l-9 2 M70 58 l10 -1 M70 61 l9 2"/></g>
  <g fill="url(#vk-body)" stroke="${OL}" stroke-width="2.2"><ellipse cx="46" cy="98" rx="7" ry="4.5"/><ellipse cx="70" cy="98" rx="7" ry="4.5"/></g>
  <g fill="#fff" opacity=".9">
    <circle cx="24" cy="34" r="1.4"><animate attributeName="opacity" values=".9;.2;.9" dur="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="94" cy="30" r="1.3"><animate attributeName="opacity" values=".2;.9;.2" dur="2.1s" repeatCount="indefinite"/></circle>
    <circle cx="20" cy="66" r="1.1"><animate attributeName="opacity" values=".6;.1;.6" dur="1.5s" repeatCount="indefinite"/></circle>
  </g>`;

  // --------------------------------------------------------------- Astrilla
  A.astrilla = `
  <defs>
    <linearGradient id="as-wing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#8fd0f0"/><stop offset="55%" stop-color="#5b8fd9"/><stop offset="100%" stop-color="#4a5fb0"/>
    </linearGradient>
    <radialGradient id="as-glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#c8e6ff" stop-opacity=".45"/><stop offset="100%" stop-color="#c8e6ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="56" r="52" fill="url(#as-glow)"/>
  <ellipse cx="60" cy="104" rx="26" ry="5" fill="#000" opacity=".12"/>
  <path d="M60 40 C36 40 14 54 8 72 C24 72 40 66 52 74 C58 60 60 50 60 40 Z" fill="url(#as-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round">
    <animateTransform attributeName="transform" type="rotate" values="-4 60 60;4 60 60;-4 60 60" dur="2.6s" repeatCount="indefinite"/>
  </path>
  <path d="M60 40 C84 40 106 54 112 72 C96 72 80 66 68 74 C62 60 60 50 60 40 Z" fill="url(#as-wing)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round">
    <animateTransform attributeName="transform" type="rotate" values="4 60 60;-4 60 60;4 60 60" dur="2.6s" repeatCount="indefinite"/>
  </path>
  <g fill="#e8f4ff" opacity=".85"><circle cx="30" cy="64" r="1.6"/><circle cx="44" cy="60" r="1.2"/><circle cx="90" cy="64" r="1.6"/><circle cx="76" cy="60" r="1.2"/></g>
  <ellipse cx="60" cy="58" rx="15" ry="22" fill="url(#as-wing)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M60 26 C58 20 62 16 66 14 C64 20 66 24 66 28 Z" fill="url(#as-wing)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M54 30 C52 24 56 20 60 18 C58 24 60 28 60 32 Z" fill="url(#as-wing)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="54" cy="52" r="4.2" fill="#fff" stroke="${OL}" stroke-width="1.8"/><circle cx="54" cy="52" r="1.9" fill="${OL}"/>
  <circle cx="66" cy="52" r="4.2" fill="#fff" stroke="${OL}" stroke-width="1.8"/><circle cx="66" cy="52" r="1.9" fill="${OL}"/>
  <path d="M55 62 q5 3 10 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <path d="M60 80 C60 92 58 100 60 112 M60 88 l-6 -3 M60 96 l6 -3" stroke="url(#as-wing)" stroke-width="4" fill="none" stroke-linecap="round"/>
  <g fill="#fff"><circle cx="60" cy="104" r="1.6" class="glowpulse"/></g>
  <g fill="#fff" opacity=".9">
    <circle cx="22" cy="40" r="1.4"><animate attributeName="opacity" values=".9;.2;.9" dur="1.7s" repeatCount="indefinite"/></circle>
    <circle cx="98" cy="42" r="1.4"><animate attributeName="opacity" values=".2;.9;.2" dur="2s" repeatCount="indefinite"/></circle>
  </g>`;

  // --------------------------------------------------------------- Nebulyn
  A.nebulyn = `
  <defs>
    <radialGradient id="nb-cloud" cx="45%" cy="38%" r="72%">
      <stop offset="0%" stop-color="#ffd6f2"/><stop offset="45%" stop-color="#b884e6"/><stop offset="100%" stop-color="#5b5fc0"/>
    </radialGradient>
    <radialGradient id="nb-glow" cx="50%" cy="45%" r="58%">
      <stop offset="0%" stop-color="#e6c9ff" stop-opacity=".55"/><stop offset="100%" stop-color="#e6c9ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="56" r="54" fill="url(#nb-glow)"><animate attributeName="r" values="54;58;54" dur="3s" repeatCount="indefinite"/></circle>
  <g fill="url(#nb-cloud)" stroke="${OL}" stroke-width="2.4">
    <circle cx="42" cy="58" r="18"/><circle cx="60" cy="46" r="22"/><circle cx="80" cy="58" r="17"/>
    <circle cx="50" cy="74" r="16"/><circle cx="72" cy="74" r="15"/>
  </g>
  <g fill="url(#nb-cloud)"><circle cx="60" cy="62" r="22"/><circle cx="46" cy="66" r="12"/><circle cx="76" cy="66" r="12"/></g>
  <g fill="#fff"><circle cx="34" cy="52" r="1.6" class="glowpulse"/><circle cx="86" cy="54" r="1.4"/><circle cx="52" cy="40" r="1.5"/><circle cx="70" cy="40" r="1.3"/><circle cx="60" cy="80" r="1.4"/><circle cx="44" cy="76" r="1.1"/><circle cx="78" cy="78" r="1.1"/></g>
  <circle cx="52" cy="58" r="5.5" fill="#2c2650" stroke="${OL}" stroke-width="1.8"/><circle cx="53.6" cy="56" r="2" fill="#ffe9ff"/>
  <circle cx="70" cy="58" r="5.5" fill="#2c2650" stroke="${OL}" stroke-width="1.8"/><circle cx="71.6" cy="56" r="2" fill="#ffe9ff"/>
  <path d="M55 68 q6 4 12 0" fill="none" stroke="#2c2650" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M55 69 l1.4 3 M67 69 l-1.4 3" stroke="#ffe9ff" stroke-width="1.8" stroke-linecap="round"/>
  <g fill="#ffe9ff" opacity=".95">
    <path d="M24 30 l1.5 4 l4 1.5 l-4 1.5 l-1.5 4 l-1.5 -4 l-4 -1.5 l4 -1.5 Z"><animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite"/></path>
    <path d="M96 34 l1.2 3.2 l3.2 1.2 l-3.2 1.2 l-1.2 3.2 l-1.2 -3.2 l-3.2 -1.2 l3.2 -1.2 Z"><animate attributeName="opacity" values=".3;1;.3" dur="2.4s" repeatCount="indefinite"/></path>
  </g>`;

  // --------------------------------------------------------------- Terraken
  A.terraken = `
  <defs>
    <radialGradient id="tk-body" cx="45%" cy="32%" r="82%">
      <stop offset="0%" stop-color="#9c8a6e"/><stop offset="100%" stop-color="#6b5a42"/>
    </radialGradient>
  </defs>
  <ellipse cx="60" cy="110" rx="38" ry="6" fill="#000" opacity=".14"/>
  <path d="M22 96 C16 62 34 40 60 40 C86 40 104 62 98 96 C92 106 28 106 22 96 Z" fill="url(#tk-body)" stroke="${OL}" stroke-width="3"/>
  <g stroke="#4f412e" stroke-width="2.2" fill="none" opacity=".8"><path d="M38 60 q8 6 2 14"/><path d="M84 58 q-8 8 -2 16"/><path d="M56 48 q6 5 0 11"/></g>
  <g fill="#e0431f" stroke="#a52f16" stroke-width="1.2"><path d="M40 74 l6 -3 l3 6 l-6 3 Z" class="glowpulse"/><path d="M74 76 l6 -3 l3 6 l-6 3 Z"/></g>
  <path d="M20 62 L6 50 L14 68 L4 82 Z" fill="#8a765a" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M100 62 L114 50 L106 68 L116 82 Z" fill="#8a765a" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M40 40 L44 20 L54 34 Z M80 40 L76 20 L66 34 Z" fill="#8a765a" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="60" cy="66" rx="24" ry="18" fill="#b3a184" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="50" cy="60" r="4.4" fill="#ffb25e" stroke="${OL}" stroke-width="1.8"/><circle cx="50" cy="60" r="1.9" fill="${OL}"/>
  <circle cx="70" cy="60" r="4.4" fill="#ffb25e" stroke="${OL}" stroke-width="1.8"/><circle cx="70" cy="60" r="1.9" fill="${OL}"/>
  <path d="M46 74 L74 74 L70 80 L50 80 Z" fill="#5c4a34" stroke="${OL}" stroke-width="2"/>
  <path d="M50 74 v6 M56 74 v6 M62 74 v6 M68 74 v6" stroke="#8a765a" stroke-width="1.6"/>
  <g fill="url(#tk-body)" stroke="${OL}" stroke-width="2.6"><path d="M32 100 l0 8 l14 0 l0 -8"/><path d="M74 100 l0 8 l14 0 l0 -8"/></g>
  <g fill="#ffb25e" opacity=".9"><circle cx="26" cy="52" r="1.6" class="glowpulse"/><circle cx="96" cy="48" r="1.4"/></g>`;

  // --------------------------------------------------------------- Sylphine
  A.sylphine = `
  <defs>
    <linearGradient id="sy2-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#eef6fb"/><stop offset="60%" stop-color="#cfe0ec"/><stop offset="100%" stop-color="#a8c0d4"/>
    </linearGradient>
    <linearGradient id="sy2-antler" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0%" stop-color="#7fe0b0"/><stop offset="50%" stop-color="#8fb0f0"/><stop offset="100%" stop-color="#c99ae6"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="48" r="52" fill="#cfe0ff" opacity=".22"/>
  <ellipse cx="60" cy="110" rx="28" ry="5" fill="#5f8aa8" opacity=".22"/>
  <g stroke="url(#sy2-antler)" stroke-width="3.6" fill="none" stroke-linecap="round">
    <path d="M46 32 C40 18 28 14 22 2 M40 22 L30 18 M43 28 L34 30"/>
    <path d="M74 32 C80 18 92 14 98 2 M80 22 L90 18 M77 28 L86 30"/>
  </g>
  <g fill="#eafaff" opacity=".95">
    <circle cx="22" cy="2" r="2.4"><animate attributeName="opacity" values=".95;.35;.95" dur="2.2s" repeatCount="indefinite"/></circle>
    <circle cx="98" cy="2" r="2.4"><animate attributeName="opacity" values=".35;.95;.35" dur="2.6s" repeatCount="indefinite"/></circle>
  </g>
  <ellipse cx="60" cy="84" rx="26" ry="20" fill="url(#sy2-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M48 62 C46 46 52 38 60 38 C68 38 74 46 72 62 C70 70 50 70 48 62 Z" fill="url(#sy2-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M44 48 l-9 -6 l11 0 Z M76 48 l9 -6 l-11 0 Z" fill="#dbe9f2" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="53" cy="50" r="4" fill="#5b8fd9" stroke="${OL}" stroke-width="1.8"/><circle cx="54.2" cy="48.6" r="1.4" fill="#fff"/>
  <circle cx="67" cy="50" r="4" fill="#5b8fd9" stroke="${OL}" stroke-width="1.8"/><circle cx="68.2" cy="48.6" r="1.4" fill="#fff"/>
  <ellipse cx="60" cy="59" rx="4.4" ry="3.2" fill="#8fa8bc"/>
  <path d="M56 63 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#a8f0d0" opacity=".7"><circle cx="50" cy="80" r="2"/><circle cx="60" cy="76" r="2"/><circle cx="70" cy="80" r="2"/><circle cx="55" cy="90" r="1.8"/><circle cx="66" cy="90" r="1.8"/></g>
  <g stroke="url(#sy2-body)" stroke-width="5" stroke-linecap="round" fill="none"><path d="M46 98 L44 110 M54 100 L53 112 M67 100 L68 112 M76 98 L78 110"/></g>
  <g stroke="#8fa8bc" stroke-width="2.2" stroke-linecap="round"><path d="M44 110 l-3 2 M53 112 l-3 2 M68 112 l3 2 M78 110 l3 2" fill="none"/></g>`;

  // --------------------------------------------------------------- Cindermane
  A.cindermane = `
  <defs>
    <radialGradient id="cm-mane" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#ffd94d"/><stop offset="55%" stop-color="#f0842e"/><stop offset="100%" stop-color="#d8431f"/>
    </radialGradient>
    <radialGradient id="cm-face" cx="45%" cy="38%" r="72%">
      <stop offset="0%" stop-color="#f2c090"/><stop offset="100%" stop-color="#d1935a"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="54" r="54" fill="#ffb060" opacity=".2"><animate attributeName="r" values="54;58;54" dur="2.4s" repeatCount="indefinite"/></circle>
  <ellipse cx="60" cy="110" rx="26" ry="5" fill="#000" opacity=".12"/>
  <g fill="url(#cm-mane)" stroke="#b83a18" stroke-width="1.6">
    ${(function(){var s='',cx=60,cy=52,i;for(i=0;i<18;i++){var a=i*20*Math.PI/180,r1=24,r2=42;var x1=cx+Math.cos(a)*r1,y1=cy+Math.sin(a)*r1,x2=cx+Math.cos(a+0.17)*r2,y2=cy+Math.sin(a+0.17)*r2,x3=cx+Math.cos(a+0.34)*r1,y3=cy+Math.sin(a+0.34)*r1;s+='<path d="M'+x1.toFixed(1)+' '+y1.toFixed(1)+' L'+x2.toFixed(1)+' '+y2.toFixed(1)+' L'+x3.toFixed(1)+' '+y3.toFixed(1)+' Z"><animate attributeName="opacity" values="1;.75;1" dur="'+(1.4+i%3*0.3).toFixed(1)+'s" repeatCount="indefinite"/></path>';}return s;})()}
  </g>
  <circle cx="60" cy="52" r="25" fill="url(#cm-mane)" stroke="#b83a18" stroke-width="2"/>
  <circle cx="60" cy="54" r="20" fill="url(#cm-face)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M46 40 L40 28 L52 36 Z M74 40 L80 28 L68 36 Z" fill="url(#cm-face)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="52" cy="52" r="4.2" fill="${OL}"/><circle cx="53.4" cy="50.6" r="1.4" fill="#fff"/>
  <circle cx="68" cy="52" r="4.2" fill="${OL}"/><circle cx="69.4" cy="50.6" r="1.4" fill="#fff"/>
  <path d="M55 60 L65 60 L60 65 Z" fill="#c96a5a" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <path d="M60 65 q-5 4 -10 2 M60 65 q5 4 10 2" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="#fff4dc" stroke-width="1.6" stroke-linecap="round" opacity=".9"><path d="M50 62 l-13 -2 M50 65 l-13 2 M70 62 l13 -2 M70 65 l13 2"/></g>
  <ellipse cx="60" cy="94" rx="22" ry="15" fill="url(#cm-face)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="url(#cm-face)" stroke="${OL}" stroke-width="2.4"><ellipse cx="46" cy="106" rx="8" ry="5"/><ellipse cx="74" cy="106" rx="8" ry="5"/></g>
  <path d="M82 92 C96 88 98 78 94 72 C90 80 84 82 78 82" fill="url(#cm-mane)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <g fill="#ffd94d"><circle cx="91" cy="71" r="4" class="glowpulse"/></g>`;

  // --------------------------------------------------------------- Gladewing
  A.gladewing = `
  <defs>
    <radialGradient id="gw-body" cx="45%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#c9e8a8"/><stop offset="70%" stop-color="#8fc46a"/><stop offset="100%" stop-color="#5d9a44"/>
    </radialGradient>
    <linearGradient id="gw-wing" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d8f4e0" stop-opacity=".9"/><stop offset="100%" stop-color="#a8e0c0" stop-opacity=".75"/>
    </linearGradient>
  </defs>
  <circle cx="60" cy="56" r="46" fill="#c8f0b0" opacity=".25"/>
  <ellipse cx="60" cy="104" rx="20" ry="4" fill="#000" opacity=".1"/>
  <path d="M50 58 C34 46 16 48 12 60 C22 60 28 64 32 70 Z" fill="url(#gw-wing)" stroke="#5d9a44" stroke-width="2.2" stroke-linejoin="round">
    <animateTransform attributeName="transform" type="rotate" values="-6 50 60;6 50 60;-6 50 60" dur="1.3s" repeatCount="indefinite"/>
  </path>
  <path d="M70 58 C86 46 104 48 108 60 C98 60 92 64 88 70 Z" fill="url(#gw-wing)" stroke="#5d9a44" stroke-width="2.2" stroke-linejoin="round">
    <animateTransform attributeName="transform" type="rotate" values="6 70 60;-6 70 60;6 70 60" dur="1.3s" repeatCount="indefinite"/>
  </path>
  <g stroke="#5d9a44" stroke-width="1.4" fill="none" opacity=".7"><path d="M44 58 C34 52 24 52 18 57"/><path d="M76 58 C86 52 96 52 102 57"/></g>
  <ellipse cx="60" cy="70" rx="18" ry="22" fill="url(#gw-body)" stroke="${OL}" stroke-width="2.8"/>
  <ellipse cx="60" cy="78" rx="10" ry="12" fill="#eef8e0" opacity=".85"/>
  <path d="M52 40 C48 30 52 22 60 20 C58 28 60 34 60 40 Z" fill="#8fc46a" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M68 40 C72 30 68 22 60 20 C62 28 60 34 60 40 Z" fill="#a5d982" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="60" cy="19" r="3" fill="#ffe066" stroke="${OL}" stroke-width="1.4" class="glowpulse"/>
  <circle cx="53" cy="52" r="4.4" fill="${OL}"/><circle cx="54.4" cy="50.4" r="1.5" fill="#fff"/>
  <circle cx="67" cy="52" r="4.4" fill="${OL}"/><circle cx="68.4" cy="50.4" r="1.5" fill="#fff"/>
  <path d="M55 60 q5 4 10 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <ellipse cx="47" cy="58" rx="3.6" ry="2.4" fill="#f2a2b6" opacity=".8"/>
  <ellipse cx="73" cy="58" rx="3.6" ry="2.4" fill="#f2a2b6" opacity=".8"/>
  <g fill="url(#gw-body)" stroke="${OL}" stroke-width="2.2"><ellipse cx="52" cy="94" rx="6" ry="4"/><ellipse cx="68" cy="94" rx="6" ry="4"/></g>
  <g fill="#ffe066" opacity=".9"><circle cx="26" cy="42" r="1.6" class="glowpulse"/><circle cx="94" cy="44" r="1.4"/></g>`;

  // --------------------------------------------------------------- Sablefin
  A.sablefin = `
  <defs>
    <linearGradient id="sf-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#3a4f7a"/><stop offset="100%" stop-color="#1e2b4a"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="42" ry="8" fill="#243b5a" opacity=".5"/>
  <path d="M18 92 C12 74 22 60 34 60 C46 60 50 72 44 84 C40 92 24 96 18 92 Z" fill="url(#sf-body)" stroke="${OL}" stroke-width="2.6"/>
  <path d="M40 88 C40 62 52 42 70 40 C86 38 98 48 96 60 C94 72 82 72 76 66 C82 76 80 88 70 92"
        fill="none" stroke="url(#sf-body)" stroke-width="15" stroke-linecap="round"/>
  <path d="M40 88 C42 66 54 46 70 44" fill="none" stroke="${OL}" stroke-width="2.2" transform="translate(-7.5,0)"/>
  <path d="M42 90 C44 68 56 48 72 46" fill="none" stroke="${OL}" stroke-width="2.2" transform="translate(7.5,2)"/>
  <g fill="#5b7fbf" stroke="${OL}" stroke-width="1.6"><path d="M46 66 l-9 -3 l7 -4 Z"/><path d="M44 80 l-9 -1 l7 -5 Z"/></g>
  <ellipse cx="82" cy="52" rx="15" ry="13" fill="url(#sf-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M76 40 L72 28 L82 36 Z M90 40 L94 28 L84 36 Z" fill="#3a4f7a" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <circle cx="78" cy="50" r="4" fill="#7fe0d0" stroke="${OL}" stroke-width="1.8"/><circle cx="78" cy="50" r="1.7" fill="${OL}"/>
  <circle cx="89" cy="50" r="4" fill="#7fe0d0" stroke="${OL}" stroke-width="1.8"/><circle cx="89" cy="50" r="1.7" fill="${OL}"/>
  <path d="M76 58 q7 4 13 0" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M77 59 l1.4 3 M88 59 l-1.4 3" stroke="#cfe6ff" stroke-width="1.8" stroke-linecap="round"/>
  <g fill="#8fd0e0" opacity=".85"><circle cx="52" cy="62" r="1.4"/><circle cx="58" cy="74" r="1.2"/><circle cx="66" cy="66" r="1.3"/></g>
  <g fill="#cfe6ff" opacity=".8"><circle cx="30" cy="72" r="2"><animate attributeName="cy" values="72;66;72" dur="3s" repeatCount="indefinite"/></circle><circle cx="98" cy="66" r="1.6"><animate attributeName="cy" values="66;60;66" dur="2.6s" repeatCount="indefinite"/></circle></g>`;

  // --------------------------------------------------------------- Dustmaw
  A.dustmaw = `
  <defs>
    <linearGradient id="dm2-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e0bd85"/><stop offset="100%" stop-color="#b18a52"/>
    </linearGradient>
  </defs>
  <ellipse cx="60" cy="104" rx="44" ry="9" fill="#c9a86c" opacity=".5"/>
  <path d="M10 96 q10 -6 20 0 q10 6 20 0" stroke="#c9a86c" stroke-width="3" fill="none" stroke-linecap="round"/>
  <path d="M18 90 C16 74 24 62 36 60 M96 84 C100 70 96 58 84 54"
        fill="none" stroke="url(#dm2-body)" stroke-width="16" stroke-linecap="round"/>
  <path d="M30 88 C28 68 40 50 60 46 C78 42 96 52 94 66" fill="none" stroke="url(#dm2-body)" stroke-width="20" stroke-linecap="round"/>
  <g fill="#96703f" stroke="${OL}" stroke-width="1.6"><path d="M40 60 l-4 -8 l9 3 Z"/><path d="M58 50 l-3 -9 l8 4 Z"/><path d="M76 50 l3 -9 l5 8 Z"/></g>
  <ellipse cx="86" cy="60" rx="17" ry="15" fill="url(#dm2-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M74 62 C64 66 62 78 70 82 C64 80 60 88 66 92 M98 62 C108 66 110 78 102 82 C108 80 112 88 106 92"
        fill="url(#dm2-body)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round" opacity=".95"/>
  <path d="M72 66 C66 70 66 78 72 80 L100 80 C106 78 106 70 100 66 Z" fill="#5c4630" stroke="${OL}" stroke-width="2.2"/>
  <g fill="#f4f0dc" stroke="${OL}" stroke-width="1"><path d="M75 66 l3 6 l3 -6 Z"/><path d="M84 66 l3 6 l3 -6 Z"/><path d="M93 66 l3 6 l3 -6 Z"/><path d="M79 80 l3 -5 l3 5 Z"/><path d="M89 80 l3 -5 l3 5 Z"/></g>
  <circle cx="82" cy="52" r="3.8" fill="#e0431f" stroke="${OL}" stroke-width="1.8"/><ellipse cx="82" cy="52" rx="1.5" ry="2.6" fill="${OL}"/>
  <circle cx="94" cy="52" r="3.4" fill="#e0431f" stroke="${OL}" stroke-width="1.6"/><ellipse cx="94" cy="52" rx="1.4" ry="2.4" fill="${OL}"/>
  <path d="M78 44 l4 -6 M98 44 l-4 -6" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g fill="#e0bd85" opacity=".8"><circle cx="24" cy="80" r="2"/><circle cx="16" cy="72" r="1.6"/></g>`;

  // --------------------------------------------------------------- Glimmerhart
  A.glimmerhart = `
  <defs>
    <linearGradient id="gh2-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fff4d0"/><stop offset="60%" stop-color="#f2dc9a"/><stop offset="100%" stop-color="#d9b96a"/>
    </linearGradient>
    <linearGradient id="gh2-antler" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0%" stop-color="#ffd94d"/><stop offset="100%" stop-color="#fff7cf"/>
    </linearGradient>
    <radialGradient id="gh2-glow" cx="50%" cy="42%" r="56%">
      <stop offset="0%" stop-color="#fff3b0" stop-opacity=".55"/><stop offset="100%" stop-color="#fff3b0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="48" r="54" fill="url(#gh2-glow)"><animate attributeName="r" values="54;58;54" dur="3s" repeatCount="indefinite"/></circle>
  <ellipse cx="60" cy="110" rx="28" ry="5" fill="#000" opacity=".12"/>
  <g stroke="url(#gh2-antler)" stroke-width="3.6" fill="none" stroke-linecap="round">
    <path d="M46 32 C40 18 28 14 22 2 M40 22 L30 18 M43 28 L34 30 M35 14 L27 10"/>
    <path d="M74 32 C80 18 92 14 98 2 M80 22 L90 18 M77 28 L86 30 M85 14 L93 10"/>
  </g>
  <g fill="#fff7cf" opacity=".95">
    <path d="M22 2 l1.3 3.4 l3.4 1.3 l-3.4 1.3 l-1.3 3.4 l-1.3 -3.4 l-3.4 -1.3 l3.4 -1.3 Z"><animate attributeName="opacity" values="1;.3;1" dur="2s" repeatCount="indefinite"/></path>
    <path d="M98 2 l1.3 3.4 l3.4 1.3 l-3.4 1.3 l-1.3 3.4 l-1.3 -3.4 l-3.4 -1.3 l3.4 -1.3 Z"><animate attributeName="opacity" values=".3;1;.3" dur="2.4s" repeatCount="indefinite"/></path>
    <circle cx="30" cy="18" r="1.6"/><circle cx="90" cy="18" r="1.6"/>
  </g>
  <ellipse cx="60" cy="84" rx="26" ry="20" fill="url(#gh2-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M48 62 C46 46 52 38 60 38 C68 38 74 46 72 62 C70 70 50 70 48 62 Z" fill="url(#gh2-body)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M44 48 l-9 -6 l11 0 Z M76 48 l9 -6 l-11 0 Z" fill="#efe0b8" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <circle cx="53" cy="50" r="4" fill="#8f6ec9" stroke="${OL}" stroke-width="1.8"/><circle cx="54.2" cy="48.6" r="1.4" fill="#fff"/>
  <circle cx="67" cy="50" r="4" fill="#8f6ec9" stroke="${OL}" stroke-width="1.8"/><circle cx="68.2" cy="48.6" r="1.4" fill="#fff"/>
  <ellipse cx="60" cy="59" rx="4.4" ry="3.2" fill="#b89a5a"/>
  <path d="M56 63 q4 3 8 0" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <g fill="#fff7cf"><circle cx="50" cy="80" r="2" class="glowpulse"/><circle cx="60" cy="76" r="2"/><circle cx="70" cy="80" r="2"/><circle cx="55" cy="90" r="1.8"/><circle cx="66" cy="90" r="1.8"/></g>
  <g stroke="url(#gh2-body)" stroke-width="5" stroke-linecap="round" fill="none"><path d="M46 98 L44 110 M54 100 L53 112 M67 100 L68 112 M76 98 L78 110"/></g>
  <g stroke="#b89a5a" stroke-width="2.2" stroke-linecap="round"><path d="M44 110 l-3 2 M53 112 l-3 2 M68 112 l3 2 M78 110 l3 2" fill="none"/></g>`;

})(window.CRITTER_ART);
