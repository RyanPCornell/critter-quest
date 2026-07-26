// ============================================================================
//  CRITTER QUEST — CREATURE ART, PART 6 (Ultra Legendaries)
//  Sergio the Maine Coon, Solvarr the Sunmane Lion, Glacior the Leviathan.
// ============================================================================
window.CRITTER_ART = window.CRITTER_ART || {};

(function (A) {
  var OL = "#3a2b28";

  // ------------------------------------------------------------- Sergio 🐱
  //  A very fluffy, very regal Maine Coon.
  A.sergio = `
  <defs>
    <radialGradient id="sg-fur" cx="45%" cy="34%" r="78%">
      <stop offset="0%" stop-color="#d3b184"/><stop offset="65%" stop-color="#ab8555"/><stop offset="100%" stop-color="#7e603a"/>
    </radialGradient>
    <linearGradient id="sg-ruff" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#f0dcb8"/><stop offset="100%" stop-color="#d3b184"/>
    </linearGradient>
    <radialGradient id="sg-glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#fff3c4" stop-opacity=".55"/><stop offset="100%" stop-color="#fff3c4" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="58" r="54" fill="url(#sg-glow)"><animate attributeName="r" values="54;58;54" dur="3s" repeatCount="indefinite"/></circle>
  <ellipse cx="60" cy="112" rx="30" ry="6" fill="#000" opacity=".12"/>
  <!-- grand fluffy tail curling up the right -->
  <path d="M86 98 C112 92 116 54 96 40 C82 30 66 40 72 56" fill="none" stroke="url(#sg-fur)" stroke-width="17" stroke-linecap="round"/>
  <g fill="#8a6a42" opacity=".6"><path d="M104 78 q6 -3 8 2 M108 62 q6 -2 7 3 M100 90 q6 -2 8 3"/></g>
  <path d="M92 40 C86 34 74 38 76 50" fill="none" stroke="#e8d5b0" stroke-width="5" stroke-linecap="round" opacity=".7"/>
  <!-- body + big ruff -->
  <ellipse cx="56" cy="86" rx="27" ry="22" fill="url(#sg-fur)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M30 78 q6 8 0 16 M40 88 q5 8 -1 15 M72 88 q-5 8 1 15 M82 78 q-6 8 0 16" fill="none" stroke="#7e603a" stroke-width="2" opacity=".5"/>
  <!-- fluffy chest ruff (scalloped) -->
  <path d="M36 70 q4 8 0 14 q6 -2 8 6 q4 -6 8 4 q4 -8 8 0 q4 -10 8 0 q4 -6 8 2 q4 -8 8 4 q4 -8 0 -14 Z"
        fill="url(#sg-ruff)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <ellipse cx="56" cy="92" rx="12" ry="9" fill="#f4e6cc" opacity=".85"/>
  <!-- head -->
  <circle cx="57" cy="48" r="25" fill="url(#sg-fur)" stroke="${OL}" stroke-width="2.8"/>
  <!-- fluffy cheek fur tufts -->
  <path d="M32 50 q-8 4 -6 12 q6 -3 9 -6 M82 50 q8 4 6 12 q-6 -3 -9 -6" fill="url(#sg-ruff)" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <!-- ears with lynx tufts -->
  <path d="M40 30 L30 8 L50 24 Z" fill="url(#sg-fur)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M74 30 L84 8 L64 24 Z" fill="url(#sg-fur)" stroke="${OL}" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M41 27 L35 14 L47 24 Z" fill="#e8b6a0"/>
  <path d="M73 27 L79 14 L67 24 Z" fill="#e8b6a0"/>
  <g stroke="#5f4326" stroke-width="2" stroke-linecap="round"><path d="M30 8 l-2 -7 M31 8 l3 -6 M84 8 l2 -7 M83 8 l-3 -6"/></g>
  <!-- tabby "M" on forehead -->
  <g stroke="#5f4326" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".85">
    <path d="M48 34 l3 8 M57 32 l0 9 M66 34 l-3 8"/>
    <path d="M40 42 q4 2 8 1 M80 42 q-4 2 -8 1"/>
  </g>
  <!-- big amber eyes -->
  <circle cx="47" cy="50" r="7" fill="#fff" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="67" cy="50" r="7" fill="#fff" stroke="${OL}" stroke-width="2.2"/>
  <circle cx="47.5" cy="50.5" r="4.8" fill="#8fbf5c"/><circle cx="67.5" cy="50.5" r="4.8" fill="#8fbf5c"/>
  <ellipse cx="47.5" cy="51" rx="2" ry="4" fill="${OL}"/><ellipse cx="67.5" cy="51" rx="2" ry="4" fill="${OL}"/>
  <circle cx="49" cy="48" r="1.6" fill="#fff"/><circle cx="69" cy="48" r="1.6" fill="#fff"/>
  <!-- nose + mouth -->
  <path d="M53 59 L61 59 L57 63 Z" fill="#e07a8a" stroke="${OL}" stroke-width="1.8" stroke-linejoin="round"/>
  <path d="M57 63 q-4 4 -8 2 M57 63 q4 4 8 2" fill="none" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>
  <!-- whiskers -->
  <g stroke="#f4e6cc" stroke-width="1.6" stroke-linecap="round" opacity=".95">
    <path d="M42 57 l-14 -3 M42 60 l-14 1 M72 57 l14 -3 M72 60 l14 1"/>
  </g>
  <!-- fluffy front paws -->
  <g fill="url(#sg-ruff)" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="46" cy="104" rx="9" ry="6"/><ellipse cx="68" cy="104" rx="9" ry="6"/>
  </g>
  <g stroke="#8a6a42" stroke-width="1.4" opacity=".6"><path d="M43 104 l0 4 M46 104 l0 4 M49 104 l0 4 M65 104 l0 4 M68 104 l0 4 M71 104 l0 4"/></g>
  <!-- little floating crown of light -->
  <g fill="#ffe57f" opacity=".95">
    <circle cx="22" cy="34" r="1.8"><animate attributeName="opacity" values=".95;.2;.95" dur="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="94" cy="30" r="1.6"><animate attributeName="opacity" values=".2;.95;.2" dur="2.1s" repeatCount="indefinite"/></circle>
    <circle cx="16" cy="66" r="1.5"><animate attributeName="opacity" values=".6;.1;.6" dur="1.5s" repeatCount="indefinite"/></circle>
  </g>`;

  // ------------------------------------------------------------- Solvarr 🦁
  A.solvarr = `
  <defs>
    <radialGradient id="sv-mane" cx="50%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#ffd94d"/><stop offset="60%" stop-color="#f0a429"/><stop offset="100%" stop-color="#e0701f"/>
    </radialGradient>
    <radialGradient id="sv-face" cx="45%" cy="38%" r="72%">
      <stop offset="0%" stop-color="#ffe1a6"/><stop offset="100%" stop-color="#e8b06a"/>
    </radialGradient>
    <radialGradient id="sv-glow" cx="50%" cy="48%" r="55%">
      <stop offset="0%" stop-color="#fff3b0" stop-opacity=".6"/><stop offset="100%" stop-color="#fff3b0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="56" r="56" fill="url(#sv-glow)"><animate attributeName="r" values="56;60;56" dur="2.6s" repeatCount="indefinite"/></circle>
  <ellipse cx="60" cy="112" rx="28" ry="6" fill="#000" opacity=".12"/>
  <!-- sunburst mane -->
  <g fill="url(#sv-mane)" stroke="#c2451f" stroke-width="1.6">
    ${(function(){var s='',cx=60,cy=54,i;for(i=0;i<20;i++){var a=i*18*Math.PI/180,r1=26,r2=44;var x1=cx+Math.cos(a)*r1,y1=cy+Math.sin(a)*r1,x2=cx+Math.cos(a+0.16)*r2,y2=cy+Math.sin(a+0.16)*r2,x3=cx+Math.cos(a+0.32)*r1,y3=cy+Math.sin(a+0.32)*r1;s+='<path d="M'+x1.toFixed(1)+' '+y1.toFixed(1)+' L'+x2.toFixed(1)+' '+y2.toFixed(1)+' L'+x3.toFixed(1)+' '+y3.toFixed(1)+' Z"/>';}return s;})()}
  </g>
  <circle cx="60" cy="54" r="27" fill="url(#sv-mane)" stroke="#c2451f" stroke-width="2"/>
  <!-- face -->
  <circle cx="60" cy="55" r="21" fill="url(#sv-face)" stroke="${OL}" stroke-width="2.8"/>
  <path d="M46 40 L40 28 L52 36 Z M74 40 L80 28 L68 36 Z" fill="url(#sv-face)" stroke="${OL}" stroke-width="2.2" stroke-linejoin="round"/>
  <path d="M47 37 L43 30 L51 35 Z M73 37 L77 30 L69 35 Z" fill="#c98a4a"/>
  <circle cx="52" cy="52" r="4.4" fill="${OL}"/><circle cx="53.4" cy="50.6" r="1.5" fill="#fff"/>
  <circle cx="68" cy="52" r="4.4" fill="${OL}"/><circle cx="69.4" cy="50.6" r="1.5" fill="#fff"/>
  <path d="M55 60 L65 60 L60 65 Z" fill="#c96a5a" stroke="${OL}" stroke-width="2" stroke-linejoin="round"/>
  <path d="M60 65 q-5 5 -10 3 M60 65 q5 5 10 3" fill="none" stroke="${OL}" stroke-width="2.2" stroke-linecap="round"/>
  <g stroke="#fff6dc" stroke-width="1.6" stroke-linecap="round" opacity=".9"><path d="M50 62 l-14 -2 M50 65 l-14 2 M70 62 l14 -2 M70 65 l14 2"/></g>
  <!-- body + paws -->
  <ellipse cx="60" cy="94" rx="22" ry="16" fill="url(#sv-face)" stroke="${OL}" stroke-width="2.8"/>
  <g fill="url(#sv-face)" stroke="${OL}" stroke-width="2.4">
    <ellipse cx="46" cy="106" rx="9" ry="5.5"/><ellipse cx="74" cy="106" rx="9" ry="5.5"/>
  </g>
  <path d="M80 92 C94 88 96 78 92 72 C88 80 82 82 78 82" fill="url(#sv-mane)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <circle cx="91" cy="71" r="5" fill="url(#sv-mane)" stroke="#c2451f" stroke-width="1.8"/>
  <g fill="#fff3b0"><circle cx="24" cy="30" r="2"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle><circle cx="98" cy="40" r="1.8"><animate attributeName="opacity" values=".2;1;.2" dur="1.9s" repeatCount="indefinite"/></circle></g>`;

  // ------------------------------------------------------------- Glacior 🐋
  A.glacior = `
  <defs>
    <linearGradient id="gc-body" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#dff2fb"/><stop offset="55%" stop-color="#9fcfe6"/><stop offset="100%" stop-color="#6fa4c4"/>
    </linearGradient>
    <radialGradient id="gc-glow" cx="50%" cy="45%" r="58%">
      <stop offset="0%" stop-color="#d6f0ff" stop-opacity=".5"/><stop offset="100%" stop-color="#d6f0ff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="58" r="56" fill="url(#gc-glow)"><animate attributeName="r" values="56;60;56" dur="3.4s" repeatCount="indefinite"/></circle>
  <ellipse cx="60" cy="104" rx="42" ry="9" fill="#9fd4f0" stroke="#5b9ec7" stroke-width="2" opacity=".65"/>
  <!-- aurora ribbons above -->
  <g fill="none" stroke-width="3" stroke-linecap="round" opacity=".7">
    <path d="M14 24 q20 -12 40 0 q22 12 44 -2" stroke="#7fe0b0"><animate attributeName="opacity" values=".7;.25;.7" dur="3s" repeatCount="indefinite"/></path>
    <path d="M18 32 q20 -10 40 2 q22 10 42 -2" stroke="#a08fe0"><animate attributeName="opacity" values=".3;.7;.3" dur="3s" repeatCount="indefinite"/></path>
  </g>
  <!-- great body breaching -->
  <path d="M14 92 C18 62 40 46 66 48 C92 50 106 66 104 86 C96 96 30 98 14 92 Z" fill="url(#gc-body)" stroke="${OL}" stroke-width="2.8"/>
  <!-- frost-fern texture -->
  <g stroke="#c9e8f7" stroke-width="1.8" fill="none" opacity=".8"><path d="M34 70 q6 -4 12 0 M54 66 q6 -4 12 0 M74 70 q6 -4 12 0 M44 82 q6 -4 12 0 M66 82 q6 -4 12 0"/></g>
  <!-- fluke/tail on the left -->
  <path d="M14 92 C4 84 2 74 8 70 C10 78 14 82 18 84 M14 92 C6 96 2 98 0 96 C4 90 10 88 14 88 Z" fill="url(#gc-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <!-- head + eye + gentle smile -->
  <ellipse cx="86" cy="76" rx="20" ry="17" fill="url(#gc-body)" stroke="${OL}" stroke-width="2.6"/>
  <circle cx="82" cy="70" r="4.4" fill="${OL}"/><circle cx="83.6" cy="68.4" r="1.6" fill="#fff"/>
  <path d="M78 84 q10 5 20 -1" fill="none" stroke="${OL}" stroke-width="2.4" stroke-linecap="round"/>
  <ellipse cx="76" cy="80" rx="4" ry="2.6" fill="#a8d4ea" opacity=".8"/>
  <!-- blowhole spout -->
  <g stroke="#dff2fb" stroke-width="2.6" fill="none" stroke-linecap="round">
    <path d="M66 48 C64 40 66 34 70 30 M66 48 C68 40 72 36 76 34"><animate attributeName="opacity" values="1;.4;1" dur="2s" repeatCount="indefinite"/></path>
  </g>
  <g fill="#eafaff"><circle cx="70" cy="28" r="3"><animate attributeName="cy" values="28;20;28" dur="2.6s" repeatCount="indefinite"/></circle><circle cx="76" cy="32" r="2.2"><animate attributeName="cy" values="32;25;32" dur="2.2s" repeatCount="indefinite"/></circle></g>
  <!-- side fin -->
  <path d="M52 88 C48 98 40 100 34 96 C40 92 44 88 46 84 Z" fill="url(#gc-body)" stroke="${OL}" stroke-width="2.4" stroke-linejoin="round"/>
  <g fill="#fff" opacity=".9"><circle cx="24" cy="52" r="1.6"><animate attributeName="opacity" values=".9;.2;.9" dur="2.2s" repeatCount="indefinite"/></circle><circle cx="104" cy="54" r="1.5"><animate attributeName="opacity" values=".2;.9;.2" dur="1.8s" repeatCount="indefinite"/></circle></g>`;

})(window.CRITTER_ART);
