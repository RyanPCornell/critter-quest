// ============================================================================
//  CRITTER QUEST — WORLD  (88×52 grid, 9 zones; the Astral Rift east of a void
//  wall at x=72-73 is reachable only via the village portal)
//  Hand-drawn SVG tile art, map generation, and rendering.
//  The map is a 46x36 tile grid with five zones:
//    Ember Ridge (north), Whispering Woods (west), Sundune Desert (east),
//    Willowmere Meadow (center), Lake Lumen (in the meadow).
// ============================================================================

(function () {
  var W = 88, H = 52, TILE = 48;

  // Deterministic RNG so the world is identical every visit
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  var ZONE_NAMES = {
    meadow: "Willowmere Meadow", forest: "Whispering Woods", lake: "Lake Lumen",
    ridge: "Ember Ridge", desert: "Sundune Desert",
    tundra: "Frostpeak Tundra", marsh: "Glowfen Marsh", cavern: "Gleamcave Hollows",
    rift: "the Astral Rift",
  };

  // ------------------------------------------------------------------------
  //  Hand-drawn decoration symbols (each drawn in a 48x48 box)
  // ------------------------------------------------------------------------
  var DEFS = `
  <symbol id="d-tree" viewBox="0 0 48 48" overflow="visible">
    <rect x="21" y="26" width="6" height="16" rx="2.5" fill="#8a663f" stroke="#5f4326" stroke-width="1.6"/>
    <path d="M24 42 l-4 3 M24 42 l4 3" stroke="#5f4326" stroke-width="1.4" fill="none"/>
    <circle cx="14" cy="20" r="11" fill="#5da24a" stroke="#3c6e30" stroke-width="1.8"/>
    <circle cx="34" cy="20" r="11" fill="#5da24a" stroke="#3c6e30" stroke-width="1.8"/>
    <circle cx="24" cy="10" r="12" fill="#6fb75c" stroke="#3c6e30" stroke-width="1.8"/>
    <circle cx="24" cy="19" r="12" fill="#6fb75c"/>
    <circle cx="19" cy="9" r="3.5" fill="#8fce7a" opacity=".9"/>
    <circle cx="12" cy="17" r="2.5" fill="#8fce7a" opacity=".8"/>
    <circle cx="33" cy="14" r="2.5" fill="#8fce7a" opacity=".8"/>
  </symbol>
  <symbol id="d-pine" viewBox="0 0 48 48" overflow="visible">
    <rect x="21.5" y="32" width="5" height="12" rx="2" fill="#7c5b3a" stroke="#5f4326" stroke-width="1.5"/>
    <path d="M24 2 L36 18 L29 17 L38 30 L31 29 L40 40 L8 40 L17 29 L10 30 L19 17 L12 18 Z"
          fill="#3f7d46" stroke="#2b5c32" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M24 8 L30 16 M22 20 L28 27" stroke="#5da24a" stroke-width="2" stroke-linecap="round"/>
  </symbol>
  <symbol id="d-rock" viewBox="0 0 48 48" overflow="visible">
    <path d="M8 38 C4 28 10 18 20 15 C32 11 42 19 42 29 C42 37 34 41 24 41 C17 41 10 41 8 38 Z"
          fill="#a89a80" stroke="#6e604a" stroke-width="2"/>
    <path d="M16 22 L26 18 M28 32 L37 28 M12 32 L20 30" stroke="#8b7d63" stroke-width="1.8" fill="none" stroke-linecap="round"/>
    <circle cx="32" cy="21" r="1.6" fill="#c4b79c"/>
  </symbol>
  <symbol id="d-tallgrass" viewBox="0 0 48 48" overflow="visible">
    <g stroke="#4c8a3c" stroke-width="2.6" fill="none" stroke-linecap="round" class="sway">
      <path d="M12 44 C10 34 12 26 10 18"/><path d="M19 44 C19 32 22 26 20 16"/>
      <path d="M26 44 C27 33 25 25 28 15"/><path d="M33 44 C34 34 32 27 35 18"/>
      <path d="M40 44 C39 36 41 30 39 22"/>
    </g>
    <g stroke="#67a751" stroke-width="2.2" fill="none" stroke-linecap="round" class="sway">
      <path d="M16 44 C15 36 17 30 15 24"/><path d="M23 44 C24 35 22 30 24 22"/>
      <path d="M30 44 C29 36 31 31 29 24"/><path d="M37 44 C38 37 36 32 38 26"/>
    </g>
  </symbol>
  <symbol id="d-fern" viewBox="0 0 48 48" overflow="visible">
    <g stroke="#3f7d46" stroke-width="2.2" fill="none" stroke-linecap="round" class="sway">
      <path d="M24 44 C22 32 16 24 8 20 M20 34 l-6 -1 M18 29 l-5 -3 M14 25 l-4 -3"/>
      <path d="M24 44 C26 32 32 24 40 20 M28 34 l6 -1 M30 29 l5 -3 M34 25 l4 -3"/>
      <path d="M24 44 C24 32 24 22 24 12 M24 30 l-5 -4 M24 30 l5 -4 M24 22 l-4 -4 M24 22 l4 -4"/>
    </g>
  </symbol>
  <symbol id="d-flower" viewBox="0 0 48 48" overflow="visible">
    <path d="M14 44 C13 38 15 34 14 30 M32 44 C33 39 31 35 33 31" stroke="#4c8a3c" stroke-width="2" fill="none" stroke-linecap="round"/>
    <g stroke="#a83258" stroke-width="1.2" fill="#ff9eb8">
      <circle cx="14" cy="27" r="3.4"/><circle cx="10" cy="30" r="3"/><circle cx="18" cy="30" r="3"/>
    </g><circle cx="14" cy="29.6" r="2" fill="#ffe066"/>
    <g stroke="#7a5ea8" stroke-width="1.2" fill="#c7a6ff">
      <circle cx="33" cy="28" r="3"/><circle cx="29.5" cy="31" r="2.7"/><circle cx="36.5" cy="31" r="2.7"/>
    </g><circle cx="33" cy="30.4" r="1.8" fill="#fff3b0"/>
  </symbol>
  <symbol id="d-reeds" viewBox="0 0 48 48" overflow="visible">
    <g stroke="#4c8a3c" stroke-width="2.4" fill="none" stroke-linecap="round" class="sway">
      <path d="M14 44 C13 32 15 22 13 14"/><path d="M24 44 C25 30 23 22 25 10"/><path d="M34 44 C35 33 33 24 35 16"/>
    </g>
    <ellipse cx="13" cy="12" rx="3" ry="7" fill="#8a663f" stroke="#5f4326" stroke-width="1.4"/>
    <ellipse cx="25" cy="9" rx="3" ry="7" fill="#a07a4a" stroke="#5f4326" stroke-width="1.4"/>
    <ellipse cx="35" cy="14" rx="2.6" ry="6" fill="#8a663f" stroke="#5f4326" stroke-width="1.4"/>
  </symbol>
  <symbol id="d-vent" viewBox="0 0 48 48" overflow="visible">
    <path d="M10 30 L20 26 L28 30 L38 26" stroke="#5c4a3a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M12 30 L20 27 L28 30 L36 27" stroke="#ff8c42" stroke-width="2" fill="none" stroke-linecap="round" class="glowpulse"/>
    <g fill="#d8d3cc" opacity=".8" class="steam">
      <circle cx="18" cy="18" r="3.4"/><circle cx="28" cy="14" r="2.8"/><circle cx="23" cy="10" r="2.2"/>
    </g>
    <circle cx="33" cy="34" r="2" fill="#ff8c42" class="glowpulse"/>
    <circle cx="14" cy="35" r="1.6" fill="#ffb25e" class="glowpulse"/>
  </symbol>
  <symbol id="d-cactus" viewBox="0 0 48 48" overflow="visible">
    <path d="M20 44 L20 12 C20 6 28 6 28 12 L28 44" fill="#5da24a" stroke="#3c6e30" stroke-width="2"/>
    <path d="M20 26 C12 26 10 22 10 16 L14 16 C14 20 16 22 20 22" fill="#5da24a" stroke="#3c6e30" stroke-width="2"/>
    <path d="M28 30 C36 30 38 26 38 19 L34 19 C34 24 32 26 28 26" fill="#5da24a" stroke="#3c6e30" stroke-width="2"/>
    <path d="M24 12 L24 40 M22 18 l-2 -2 M26 18 l2 -2 M22 28 l-2 -2 M26 30 l2 -2" stroke="#8fce7a" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <circle cx="24" cy="9" r="2.6" fill="#ff8fb1" stroke="#a83258" stroke-width="1.2"/>
  </symbol>
  <symbol id="d-shrub" viewBox="0 0 48 48" overflow="visible">
    <g stroke="#a07a4a" stroke-width="2" fill="none" stroke-linecap="round" class="sway">
      <path d="M24 44 C22 36 18 30 12 26 M24 44 C26 36 30 30 36 26 M24 44 C24 34 24 28 24 20"/>
      <path d="M24 34 C20 32 18 28 17 24 M24 32 C28 30 30 27 31 23"/>
    </g>
    <g fill="#c8a35f"><circle cx="12" cy="25" r="2"/><circle cx="36" cy="25" r="2"/><circle cx="24" cy="19" r="2"/><circle cx="17" cy="23" r="1.6"/><circle cx="31" cy="22" r="1.6"/></g>
  </symbol>
  <symbol id="d-dune" viewBox="0 0 48 48" overflow="visible">
    <path d="M6 30 q10 -8 20 0 q8 6 16 0" stroke="#d9b378" stroke-width="2.4" fill="none" stroke-linecap="round"/>
    <path d="M12 38 q8 -6 16 0" stroke="#d9b378" stroke-width="2" fill="none" stroke-linecap="round"/>
  </symbol>
  <symbol id="d-lily" viewBox="0 0 48 48" overflow="visible">
    <ellipse cx="24" cy="28" rx="12" ry="8" fill="#6fb75c" stroke="#3c6e30" stroke-width="1.8"/>
    <path d="M24 28 L34 22" stroke="#3c6e30" stroke-width="1.8"/>
    <g stroke="#a83258" stroke-width="1" fill="#ffc9d6">
      <ellipse cx="21" cy="18" rx="3" ry="4.4" transform="rotate(-20 21 18)"/>
      <ellipse cx="27" cy="18" rx="3" ry="4.4" transform="rotate(20 27 18)"/>
      <ellipse cx="24" cy="16" rx="3" ry="4.4"/>
    </g><circle cx="24" cy="19" r="1.8" fill="#ffe066"/>
  </symbol>
  <symbol id="d-wave" viewBox="0 0 48 48" overflow="visible">
    <path d="M8 22 q6 -5 12 0 q6 5 12 0 q5 -4 10 0" stroke="#bfe6f7" stroke-width="2.4" fill="none" stroke-linecap="round" class="wave"/>
  </symbol>
  <symbol id="d-house1" viewBox="0 0 96 96" overflow="visible">
    <rect x="12" y="42" width="72" height="44" rx="3" fill="#f2e3c4" stroke="#8a663f" stroke-width="2.6"/>
    <path d="M6 46 L48 12 L90 46 Z" fill="#c0392b" stroke="#7e2418" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M18 42 L48 18 L78 42" stroke="#e07b6a" stroke-width="2" fill="none"/>
    <rect x="40" y="58" width="16" height="28" rx="2" fill="#8a663f" stroke="#5f4326" stroke-width="2"/>
    <circle cx="52" cy="72" r="1.8" fill="#ffd94d"/>
    <rect x="20" y="52" width="14" height="12" rx="2" fill="#bfe6f7" stroke="#5f4326" stroke-width="2"/>
    <rect x="62" y="52" width="14" height="12" rx="2" fill="#bfe6f7" stroke="#5f4326" stroke-width="2"/>
    <path d="M27 52 v12 M20 58 h14 M69 52 v12 M62 58 h14" stroke="#5f4326" stroke-width="1.4"/>
    <rect x="60" y="16" width="9" height="16" fill="#a85e48" stroke="#7e2418" stroke-width="2"/>
    <circle cx="64" cy="8" r="3.4" fill="#e8e4dc" opacity=".85" class="steam"/>
  </symbol>
  <symbol id="d-house2" viewBox="0 0 96 96" overflow="visible">
    <rect x="14" y="40" width="68" height="46" rx="3" fill="#dbe8d0" stroke="#5f7050" stroke-width="2.6"/>
    <path d="M8 44 L48 10 L88 44 Z" fill="#5b7fbf" stroke="#3a5586" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M20 40 L48 16 L76 40" stroke="#8fa9d9" stroke-width="2" fill="none"/>
    <rect x="26" y="58" width="15" height="28" rx="2" fill="#7c5b3a" stroke="#5f4326" stroke-width="2"/>
    <circle cx="37" cy="72" r="1.8" fill="#ffd94d"/>
    <circle cx="62" cy="58" r="8" fill="#bfe6f7" stroke="#5f4326" stroke-width="2"/>
    <path d="M54 58 h16 M62 50 v16" stroke="#5f4326" stroke-width="1.4"/>
  </symbol>
  <symbol id="d-snowpine" viewBox="0 0 48 48" overflow="visible">
    <rect x="21.5" y="32" width="5" height="12" rx="2" fill="#6b4f33" stroke="#4a3524" stroke-width="1.5"/>
    <path d="M24 2 L36 18 L29 17 L38 30 L31 29 L40 40 L8 40 L17 29 L10 30 L19 17 L12 18 Z"
          fill="#35604a" stroke="#244434" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M24 2 L31 11 L26 11 L24 14 L22 11 L17 11 Z" fill="#f2fafd"/>
    <path d="M14 39 L22 39 L20 34 Z M34 39 L26 39 L28 34 Z" fill="#f2fafd" opacity=".95"/>
    <path d="M18 28 L26 28 L23 24 Z" fill="#eaf6fb" opacity=".9"/>
  </symbol>
  <symbol id="d-snowdrift" viewBox="0 0 48 48" overflow="visible">
    <path d="M4 40 C8 30 18 26 24 30 C30 24 42 28 44 40 Z" fill="#fbfeff" stroke="#c3dcea" stroke-width="2"/>
    <path d="M12 36 q6 -4 12 -1 M28 35 q6 -3 10 1" stroke="#dceaf2" stroke-width="2" fill="none" stroke-linecap="round"/>
  </symbol>
  <symbol id="d-icespire" viewBox="0 0 48 48" overflow="visible">
    <path d="M24 4 L33 30 L30 42 L18 42 L15 30 Z" fill="#bfe4f5" stroke="#6fa8c9" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 6 L29 30 L26 40 L24 40 Z" fill="#f2fbff" opacity=".85"/>
    <path d="M12 24 L16 38 L10 40 L7 30 Z" fill="#a8d4ea" stroke="#6fa8c9" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M38 28 L40 40 L34 40 L33 30 Z" fill="#a8d4ea" stroke="#6fa8c9" stroke-width="1.8" stroke-linejoin="round"/>
  </symbol>
  <symbol id="d-frostgrass" viewBox="0 0 48 48" overflow="visible">
    <g stroke="#8fb4c9" stroke-width="2.4" fill="none" stroke-linecap="round" class="sway">
      <path d="M14 44 C12 34 14 26 12 18"/><path d="M22 44 C22 32 25 26 23 16"/>
      <path d="M30 44 C31 33 29 25 32 16"/><path d="M38 44 C39 35 37 28 40 20"/>
    </g>
    <g fill="#eafaff"><circle cx="12" cy="18" r="2"/><circle cx="23" cy="16" r="2.2"/><circle cx="32" cy="16" r="2"/><circle cx="40" cy="20" r="1.8"/></g>
  </symbol>
  <symbol id="d-mudpool" viewBox="0 0 48 48" overflow="visible">
    <ellipse cx="24" cy="30" rx="17" ry="10" fill="#4f5f42" stroke="#3a4632" stroke-width="2"/>
    <ellipse cx="24" cy="29" rx="11" ry="6" fill="#63755a" opacity=".8"/>
    <circle cx="18" cy="28" r="2.4" fill="#7d8f6e" class="steam"/>
    <circle cx="29" cy="31" r="1.8" fill="#7d8f6e" class="steam"/>
  </symbol>
  <symbol id="d-cattail" viewBox="0 0 48 48" overflow="visible">
    <g stroke="#5f7a4a" stroke-width="2.4" fill="none" stroke-linecap="round" class="sway">
      <path d="M12 44 C11 32 13 22 11 12"/><path d="M24 44 C25 30 23 20 25 8"/><path d="M36 44 C37 33 35 24 37 14"/>
    </g>
    <ellipse cx="11" cy="11" rx="2.8" ry="7" fill="#6b4f33" stroke="#4a3524" stroke-width="1.4"/>
    <ellipse cx="25" cy="7" rx="2.8" ry="7" fill="#7d5c3c" stroke="#4a3524" stroke-width="1.4"/>
    <ellipse cx="37" cy="13" rx="2.6" ry="6" fill="#6b4f33" stroke="#4a3524" stroke-width="1.4"/>
  </symbol>
  <symbol id="d-glowcap" viewBox="0 0 48 48" overflow="visible">
    <path d="M16 42 L18 30 L22 30 L20 42 Z" fill="#d8cfae" stroke="#8a7f5f" stroke-width="1.6"/>
    <ellipse cx="20" cy="28" rx="12" ry="7" fill="#7fe0b0" stroke="#3f9a72" stroke-width="1.8"/>
    <ellipse cx="20" cy="26.5" rx="7" ry="3.4" fill="#c4ffe0" opacity=".9" class="glowpulse"/>
    <path d="M31 42 L32 34 L35 34 L34 42 Z" fill="#d8cfae" stroke="#8a7f5f" stroke-width="1.4"/>
    <ellipse cx="33" cy="32" rx="8" ry="5" fill="#9ff2c4" stroke="#3f9a72" stroke-width="1.6"/>
    <circle cx="33" cy="31" r="2.4" fill="#e8fff4" class="glowpulse"/>
  </symbol>
  <symbol id="d-deadtree" viewBox="0 0 48 48" overflow="visible">
    <path d="M24 44 L24 16" stroke="#5a4a3a" stroke-width="5" stroke-linecap="round"/>
    <path d="M24 30 C18 26 14 20 12 12 M24 24 C30 20 34 16 38 10 M24 36 C19 34 15 30 13 26"
          stroke="#5a4a3a" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M12 12 l-3 -4 M38 10 l3 -4" stroke="#5a4a3a" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="24" cy="44" rx="9" ry="3" fill="#4f5f42" opacity=".6"/>
    <circle cx="30" cy="20" r="2" fill="#9ff2c4" class="glowpulse"/>
  </symbol>
  <symbol id="d-crystal" viewBox="0 0 48 48" overflow="visible">
    <path d="M24 4 L32 30 L28 44 L18 44 L15 30 Z" fill="#c79ae6" stroke="#7a4fa0" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 6 L29 30 L26 42 L24 42 Z" fill="#e6c9f7" opacity=".8"/>
    <path d="M12 20 L16 40 L9 42 L6 28 Z" fill="#b07fd6" stroke="#7a4fa0" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M36 24 L38 42 L31 42 L30 30 Z" fill="#b07fd6" stroke="#7a4fa0" stroke-width="1.8" stroke-linejoin="round"/>
    <circle cx="23" cy="24" r="2" fill="#f2e0ff" class="glowpulse"/>
    <circle cx="12" cy="30" r="1.4" fill="#f2e0ff" class="glowpulse"/>
  </symbol>
  <symbol id="d-crystal2" viewBox="0 0 48 48" overflow="visible">
    <path d="M22 8 L30 32 L26 44 L16 44 L14 32 Z" fill="#8fd0e0" stroke="#3f8fa0" stroke-width="2" stroke-linejoin="round"/>
    <path d="M22 10 L27 32 L24 42 Z" fill="#d0f2fb" opacity=".8"/>
    <path d="M34 18 L38 42 L30 42 L29 28 Z" fill="#7fc0d4" stroke="#3f8fa0" stroke-width="1.8" stroke-linejoin="round"/>
    <circle cx="21" cy="26" r="1.8" fill="#eafcff" class="glowpulse"/>
  </symbol>
  <symbol id="d-stalag" viewBox="0 0 48 48" overflow="visible">
    <path d="M18 44 L24 10 L30 44 Z" fill="#5f5470" stroke="#3d3550" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 12 L27 44 L24 44 Z" fill="#4a4360" opacity=".7"/>
    <path d="M9 44 L13 26 L17 44 Z" fill="#544a66" stroke="#3d3550" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M32 44 L36 30 L40 44 Z" fill="#544a66" stroke="#3d3550" stroke-width="1.8" stroke-linejoin="round"/>
  </symbol>
  <symbol id="d-cavemush" viewBox="0 0 48 48" overflow="visible">
    <path d="M20 44 L21 32 L26 32 L25 44 Z" fill="#c9c0d8" stroke="#6d6482" stroke-width="1.8"/>
    <ellipse cx="23" cy="30" rx="13" ry="8" fill="#7a5fb0" stroke="#4d3580" stroke-width="2"/>
    <ellipse cx="23" cy="28" rx="8" ry="4" fill="#b79ae0" opacity=".9" class="glowpulse"/>
    <circle cx="18" cy="30" r="1.6" fill="#e6d6ff"/><circle cx="28" cy="31" r="1.4" fill="#e6d6ff"/>
    <circle cx="23" cy="26" r="1.6" fill="#f2e6ff" class="glowpulse"/>
  </symbol>
  <symbol id="d-caverock" viewBox="0 0 48 48" overflow="visible">
    <path d="M8 40 C4 30 12 22 22 22 C34 22 42 30 40 40 C34 44 14 44 8 40 Z"
          fill="#4d4560" stroke="#332e48" stroke-width="2"/>
    <circle cx="18" cy="30" r="1.6" fill="#8f7fb0" class="glowpulse"/>
    <circle cx="30" cy="34" r="1.3" fill="#8f7fb0"/>
    <path d="M14 34 L22 30 M28 32 L34 29" stroke="#3d3550" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  </symbol>
  <symbol id="d-star" viewBox="0 0 48 48" overflow="visible">
    <path d="M24 10 L27 20 L37 21 L29 28 L32 38 L24 32 L16 38 L19 28 L11 21 L21 20 Z"
          fill="#ffe9a3" stroke="#d8b45c" stroke-width="1.6" stroke-linejoin="round" class="glowpulse"/>
    <circle cx="24" cy="24" r="2" fill="#fff"/>
    <circle cx="12" cy="12" r="1.4" fill="#cfe0ff"/><circle cx="38" cy="34" r="1.4" fill="#cfe0ff"/>
  </symbol>
  <symbol id="d-riftcrystal" viewBox="0 0 48 48" overflow="visible">
    <ellipse cx="24" cy="42" rx="12" ry="3.5" fill="#150f28" opacity=".6"/>
    <path d="M24 4 L33 26 L28 44 L18 44 L15 26 Z" fill="#b884e6" stroke="#7a4fa0" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 6 L29 26 L26 42 L24 42 Z" fill="#e6c9ff" opacity=".85"/>
    <path d="M11 18 L16 40 L9 42 L6 26 Z" fill="#9a6fd0" stroke="#7a4fa0" stroke-width="1.8" stroke-linejoin="round"/>
    <path d="M37 22 L40 42 L33 42 L31 28 Z" fill="#9a6fd0" stroke="#7a4fa0" stroke-width="1.8" stroke-linejoin="round"/>
    <circle cx="23" cy="22" r="2" fill="#fff" class="glowpulse"/>
  </symbol>
  <symbol id="d-riftrock" viewBox="0 0 48 48" overflow="visible">
    <path d="M8 38 C4 28 12 20 22 20 C34 20 42 28 40 38 C34 42 14 42 8 38 Z"
          fill="#3a2f58" stroke="#241a3e" stroke-width="2"/>
    <circle cx="17" cy="30" r="1.6" fill="#b884e6" class="glowpulse"/>
    <circle cx="30" cy="33" r="1.3" fill="#8f7fc0"/>
    <path d="M14 34 L22 30 M28 32 L34 29" stroke="#241a3e" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    <g fill="#e6d6ff" opacity=".7"><circle cx="24" cy="16" r="1"/><circle cx="36" cy="24" r="0.9"/></g>
  </symbol>
  <symbol id="d-sign" viewBox="0 0 48 48" overflow="visible">
    <rect x="21" y="24" width="6" height="20" rx="2" fill="#8a663f" stroke="#5f4326" stroke-width="1.8"/>
    <rect x="6" y="8" width="36" height="18" rx="3" fill="#c8a35f" stroke="#5f4326" stroke-width="2"/>
    <path d="M11 14 h26 M11 20 h20" stroke="#5f4326" stroke-width="2" stroke-linecap="round"/>
  </symbol>
  <symbol id="d-shop" viewBox="0 0 96 96" overflow="visible">
    <rect x="12" y="44" width="72" height="42" rx="3" fill="#f3e8cf" stroke="#8a663f" stroke-width="2.6"/>
    <path d="M10 44 L48 16 L86 44 Z" fill="#4a9e8f" stroke="#2f6b60" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M20 40 L48 20 L76 40" stroke="#7fc9bb" stroke-width="2" fill="none"/>
    <!-- striped awning -->
    <path d="M12 44 h72 v10 l-6 6 -6 -6 -6 6 -6 -6 -6 6 -6 -6 -6 6 -6 -6 -6 6 -6 -6 -6 6 -6 -6 Z" fill="#e8703a" stroke="#8a663f" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 45 v9 M36 45 v11 M48 45 v9 M60 45 v11 M72 45 v9" stroke="#f3e8cf" stroke-width="3"/>
    <rect x="38" y="64" width="20" height="22" rx="2" fill="#8a663f" stroke="#5f4326" stroke-width="2"/>
    <circle cx="54" cy="76" r="1.8" fill="#ffd94d"/>
    <rect x="18" y="62" width="14" height="14" rx="2" fill="#bfe6f7" stroke="#5f4326" stroke-width="2"/>
    <rect x="64" y="62" width="14" height="14" rx="2" fill="#bfe6f7" stroke="#5f4326" stroke-width="2"/>
    <!-- hanging orb sign -->
    <rect x="40" y="30" width="16" height="12" rx="2" fill="#fffdf5" stroke="#5f4326" stroke-width="2"/>
    <circle cx="48" cy="36" r="4" fill="#b06fd0" stroke="#5f4326" stroke-width="1.6"/><circle cx="48" cy="36" r="1.4" fill="#fff"/>
  </symbol>
  <symbol id="d-arena" viewBox="0 0 96 96" overflow="visible">
    <ellipse cx="48" cy="80" rx="40" ry="10" fill="#c9b48a" stroke="#8a663f" stroke-width="2.6"/>
    <path d="M12 80 C12 54 30 40 48 40 C66 40 84 54 84 80" fill="#e6d6b0" stroke="#8a663f" stroke-width="2.6"/>
    <g fill="#d8c49a" stroke="#b09867" stroke-width="1.6">
      <rect x="18" y="52" width="10" height="28" rx="2"/><rect x="34" y="46" width="10" height="34" rx="2"/>
      <rect x="52" y="46" width="10" height="34" rx="2"/><rect x="68" y="52" width="10" height="28" rx="2"/>
    </g>
    <path d="M40 84 h16 v-16 a8 8 0 0 0 -16 0 Z" fill="#5f4326" stroke="#3a2b28" stroke-width="2"/>
    <!-- crossed swords banner -->
    <circle cx="48" cy="28" r="12" fill="#e85f6a" stroke="#3a2b28" stroke-width="2.4"/>
    <g stroke="#fff" stroke-width="2.6" stroke-linecap="round"><path d="M42 34 L54 22 M54 34 L42 22"/></g>
    <path d="M48 40 L48 30" stroke="#8a663f" stroke-width="2.4"/>
    <g fill="#ffd94d" stroke="#3a2b28" stroke-width="1.6"><path d="M20 46 l0 -10 l8 4 l-8 4 Z"/><path d="M76 46 l0 -10 l-8 4 l8 4 Z"/></g>
  </symbol>
  <symbol id="d-square" viewBox="0 0 96 96" overflow="visible">
    <!-- cobbled plaza -->
    <ellipse cx="48" cy="72" rx="42" ry="16" fill="#cbb48c" stroke="#a2895f" stroke-width="2.4"/>
    <g stroke="#a2895f" stroke-width="1.4" opacity=".6"><path d="M20 68 h56 M16 76 h64 M30 62 h36"/></g>
    <!-- notice board -->
    <rect x="18" y="30" width="60" height="34" rx="3" fill="#e9d3a6" stroke="#7c5b3a" stroke-width="3"/>
    <path d="M18 30 L48 12 L78 30 Z" fill="#b5763f" stroke="#7c5b3a" stroke-width="3" stroke-linejoin="round"/>
    <rect x="22" y="60" width="6" height="26" fill="#7c5b3a" stroke="#5f4326" stroke-width="1.6"/>
    <rect x="68" y="60" width="6" height="26" fill="#7c5b3a" stroke="#5f4326" stroke-width="1.6"/>
    <!-- pinned notes -->
    <g stroke="#5f4326" stroke-width="1.4">
      <rect x="26" y="38" width="16" height="12" rx="1.5" fill="#fffdf5" transform="rotate(-5 34 44)"/>
      <rect x="48" y="36" width="15" height="14" rx="1.5" fill="#dff0ff" transform="rotate(4 55 43)"/>
      <rect x="30" y="50" width="14" height="10" rx="1.5" fill="#ffe9c4" transform="rotate(3 37 55)"/>
      <rect x="54" y="50" width="14" height="10" rx="1.5" fill="#ffdce6" transform="rotate(-4 61 55)"/>
    </g>
    <g fill="#e85f6a"><circle cx="34" cy="39" r="1.4"/><circle cx="55" cy="37" r="1.4"/><circle cx="37" cy="51" r="1.4"/><circle cx="61" cy="51" r="1.4"/></g>
    <text x="48" y="26" font-size="9" text-anchor="middle" font-weight="800" fill="#7c5b3a" font-family="Avenir Next,sans-serif">NOTICES</text>
  </symbol>`;

  // ------------------------------------------------------------------------
  //  Player sprite (three facings; left = flipped right). 48x48 box.
  // ------------------------------------------------------------------------
  var PLAYER_ART = {
    down: `
      <ellipse cx="24" cy="43" rx="10" ry="3" fill="#000" opacity=".18"/>
      <rect x="16" y="20" width="16" height="16" rx="5" fill="#e85f6a" stroke="#3a2b28" stroke-width="2"/>
      <path d="M16 26 h16" stroke="#c14a54" stroke-width="2"/>
      <rect x="13" y="22" width="5" height="10" rx="2.4" fill="#f2c9a0" stroke="#3a2b28" stroke-width="1.8"/>
      <rect x="30" y="22" width="5" height="10" rx="2.4" fill="#f2c9a0" stroke="#3a2b28" stroke-width="1.8"/>
      <rect x="17" y="34" width="6" height="9" rx="2.6" fill="#4a5387" stroke="#3a2b28" stroke-width="1.8" class="leg-l"/>
      <rect x="25" y="34" width="6" height="9" rx="2.6" fill="#4a5387" stroke="#3a2b28" stroke-width="1.8" class="leg-r"/>
      <circle cx="24" cy="13" r="9.5" fill="#f2c9a0" stroke="#3a2b28" stroke-width="2"/>
      <path d="M14 11 a10 10 0 0 1 20 0 l0 2 a13 13 0 0 0 -20 0 Z" fill="#e8a23c" stroke="#3a2b28" stroke-width="2"/>
      <path d="M14 12 l-3 3" stroke="#3a2b28" stroke-width="2" stroke-linecap="round"/>
      <circle cx="21" cy="15" r="1.6" fill="#3a2b28"/><circle cx="27" cy="15" r="1.6" fill="#3a2b28"/>
      <path d="M22 19 q2 1.6 4 0" stroke="#3a2b28" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="18" cy="17" r="1.6" fill="#f2a2b6" opacity=".8"/><circle cx="30" cy="17" r="1.6" fill="#f2a2b6" opacity=".8"/>`,
    up: `
      <ellipse cx="24" cy="43" rx="10" ry="3" fill="#000" opacity=".18"/>
      <rect x="16" y="20" width="16" height="16" rx="5" fill="#c14a54" stroke="#3a2b28" stroke-width="2"/>
      <rect x="18" y="22" width="12" height="12" rx="3" fill="#8a9c5f" stroke="#3a2b28" stroke-width="1.8"/>
      <path d="M20 22 v12 M28 22 v12" stroke="#6e7f49" stroke-width="1.6"/>
      <rect x="13" y="22" width="5" height="10" rx="2.4" fill="#f2c9a0" stroke="#3a2b28" stroke-width="1.8"/>
      <rect x="30" y="22" width="5" height="10" rx="2.4" fill="#f2c9a0" stroke="#3a2b28" stroke-width="1.8"/>
      <rect x="17" y="34" width="6" height="9" rx="2.6" fill="#4a5387" stroke="#3a2b28" stroke-width="1.8" class="leg-l"/>
      <rect x="25" y="34" width="6" height="9" rx="2.6" fill="#4a5387" stroke="#3a2b28" stroke-width="1.8" class="leg-r"/>
      <circle cx="24" cy="13" r="9.5" fill="#e8b380" stroke="#3a2b28" stroke-width="2"/>
      <path d="M14 13 a10 10 0 0 1 20 0 l0 4 a13 13 0 0 0 -20 0 Z" fill="#e8a23c" stroke="#3a2b28" stroke-width="2"/>
      <circle cx="24" cy="9" r="2.6" fill="#c9821e" stroke="#3a2b28" stroke-width="1.4"/>`,
    side: `
      <ellipse cx="24" cy="43" rx="10" ry="3" fill="#000" opacity=".18"/>
      <rect x="17" y="20" width="14" height="16" rx="5" fill="#e85f6a" stroke="#3a2b28" stroke-width="2"/>
      <rect x="14" y="22" width="6" height="11" rx="2.6" fill="#8a9c5f" stroke="#3a2b28" stroke-width="1.8"/>
      <rect x="28" y="23" width="5" height="10" rx="2.4" fill="#f2c9a0" stroke="#3a2b28" stroke-width="1.8" class="arm"/>
      <rect x="18" y="34" width="6" height="9" rx="2.6" fill="#4a5387" stroke="#3a2b28" stroke-width="1.8" class="leg-l"/>
      <rect x="25" y="34" width="6" height="9" rx="2.6" fill="#4a5387" stroke="#3a2b28" stroke-width="1.8" class="leg-r"/>
      <circle cx="25" cy="13" r="9.5" fill="#f2c9a0" stroke="#3a2b28" stroke-width="2"/>
      <path d="M15 11 a10 10 0 0 1 19 -1 l1 3 a13 13 0 0 0 -20 -1 Z" fill="#e8a23c" stroke="#3a2b28" stroke-width="2"/>
      <path d="M34 12 l5 1" stroke="#3a2b28" stroke-width="2" stroke-linecap="round"/>
      <circle cx="30" cy="15" r="1.7" fill="#3a2b28"/>
      <path d="M31 19 q1.6 1.2 3 .4" stroke="#3a2b28" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="27" cy="17" r="1.6" fill="#f2a2b6" opacity=".8"/>`,
  };

  // ------------------------------------------------------------------------
  //  Map generation
  // ------------------------------------------------------------------------
  function buildMap() {
    var rng = mulberry32(20260715);
    var tiles = new Array(W * H);
    var i, x, y;

    function T(x, y) { return tiles[y * W + x]; }

    // Base zones — north strip splits into snowy peaks (west) and volcanic
    // ridge (east); forest west, desert east, marsh along the south.
    for (y = 0; y < H; y++) {
      for (x = 0; x < W; x++) {
        var zone, g;
        if (x >= 74) { zone = "rift"; g = "void"; }   // portal-only Astral Rift (far east)
        else if (y < 10) {
          if (x < 30) { zone = "tundra"; g = "snow"; }
          else { zone = "ridge"; g = "rock"; }
        }
        else if (x >= 60 && y >= 36) { zone = "cavern"; g = "cave"; }
        else if (y >= 43) { zone = "marsh"; g = "bog"; }
        else if (x < 14) { zone = "forest"; g = "forestfloor"; }
        else if (x >= 51) { zone = "desert"; g = "sand"; }
        else { zone = "meadow"; g = "grass"; }
        tiles[y * W + x] = { x: x, y: y, zone: zone, g: g, deco: null, block: false, wild: false };
      }
    }

    // Lake Lumen (ellipse) + shore
    var LCX = 23, LCY = 25, LRX = 7, LRY = 5.2;
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) {
      var dx = (x - LCX) / LRX, dy = (y - LCY) / LRY;
      if (dx * dx + dy * dy <= 1) {
        var t = T(x, y);
        t.zone = "lake"; t.g = "water"; t.block = true;
      }
    }
    // Shore tiles (walkable, zone=lake for spawns)
    for (y = 1; y < H - 1; y++) for (x = 1; x < W - 1; x++) {
      var t2 = T(x, y);
      if (t2.g === "water") continue;
      var nearWater = [T(x-1,y), T(x+1,y), T(x,y-1), T(x,y+1)].some(function (n) { return n.g === "water"; });
      if (nearWater) { t2.zone = "lake"; }
    }

    // Roads: a long east-west highway, a north-south spine, and spurs into
    // the tundra, the ridge, and the southern marsh.
    function path(x, y) { var t = T(x, y); if (t.g !== "water") { t.g = "path"; t.deco = null; t.block = false; } }
    for (x = 2; x <= 70; x++) { path(x, 36); }   // main east-west highway
    for (y = 4; y <= 47; y++) { path(37, y); }   // main north-south road
    for (x = 20; x <= 37; x++) { path(x, 14); }  // northern cross-road
    for (x = 14; x <= 20; x++) { path(x, 14); }
    for (y = 4; y <= 14; y++) { path(20, y); }   // spur up into the tundra
    for (x = 37; x <= 44; x++) { path(x, 6); }   // spur into the ridge
    for (x = 26; x <= 37; x++) { path(x, 46); }  // spur out into the marsh
    for (y = 36; y <= 46; y++) { path(26, y); }
    for (y = 36; y <= 48; y++) { path(65, y); }  // spur down into the cavern

    // Village houses (2x2 blocks) + sign
    function house(hx, hy, kind) {
      for (var yy = hy; yy < hy + 2; yy++) for (var xx = hx; xx < hx + 2; xx++) {
        var t = T(xx, yy); t.block = true; t.deco = null; t.wild = false;
      }
      T(hx, hy).deco = kind; // draw once from top-left tile
    }
    // main village around the crossroads
    house(32, 32, "house1");
    house(40, 32, "house2");
    house(32, 38, "house2");
    house(40, 38, "house1");
    house(44, 34, "house1");
    T(36, 34).deco = "sign";
    // tundra outpost + marsh outpost + cavern outpost
    house(16, 10, "house2");
    T(19, 12).deco = "sign";
    house(28, 47, "house1");
    T(27, 45).deco = "sign";
    house(62, 38, "house1");
    T(64, 40).deco = "sign";

    // Border ring (blocked, decorated by zone)
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) {
      if (x === 0 || y === 0 || x === W - 1 || y === H - 1) {
        var bt = T(x, y);
        bt.block = true;
        bt.deco = bt.zone === "ridge" ? "rock" : bt.zone === "desert" ? "rock"
                : bt.zone === "forest" ? "pine" : bt.zone === "tundra" ? "icespire"
                : bt.zone === "marsh" ? "deadtree" : bt.zone === "cavern" ? "stalag"
                : bt.zone === "rift" ? "riftrock" : "tree";
      }
    }

    // Void wall (x=72,73) walls the playable world off from the rift so the
    // Astral Rift is reachable only through a portal.
    for (y = 0; y < H; y++) for (x = 72; x <= 73; x++) {
      var vt = T(x, y); vt.block = true; vt.zone = "rift"; vt.g = "void"; vt.wild = false;
      vt.deco = (x + y) % 3 === 0 ? "riftrock" : null;
    }

    // Decorations + wild patches per zone
    for (y = 1; y < H - 1; y++) {
      for (x = 1; x < W - 1; x++) {
        var t3 = T(x, y);
        if (t3.deco || t3.block || t3.g === "path" || t3.g === "water") continue;
        // keep the tiles right around the village houses clear-ish
        var r = rng();
        if (t3.zone === "forest") {
          if (r < 0.16) { t3.deco = (rng() < 0.5 ? "tree" : "pine"); t3.block = true; }
          else if (r < 0.30) { t3.deco = "fern"; t3.wild = true; }
          else if (r < 0.33) { t3.deco = "rock"; t3.block = true; }
          else if (r < 0.36) { t3.deco = "flower"; }
        } else if (t3.zone === "ridge") {
          if (r < 0.12) { t3.deco = "rock"; t3.block = true; }
          else if (r < 0.24) { t3.deco = "vent"; t3.wild = true; }
        } else if (t3.zone === "desert") {
          if (r < 0.07) { t3.deco = "cactus"; t3.block = true; }
          else if (r < 0.20) { t3.deco = "shrub"; t3.wild = true; }
          else if (r < 0.30) { t3.deco = "dune"; }
          else if (r < 0.32) { t3.deco = "rock"; t3.block = true; }
        } else if (t3.zone === "tundra") {
          if (r < 0.10) { t3.deco = "snowpine"; t3.block = true; }
          else if (r < 0.16) { t3.deco = "icespire"; t3.block = true; }
          else if (r < 0.30) { t3.deco = "frostgrass"; t3.wild = true; }
          else if (r < 0.40) { t3.deco = "snowdrift"; }
        } else if (t3.zone === "marsh") {
          if (r < 0.08) { t3.deco = "deadtree"; t3.block = true; }
          else if (r < 0.26) { t3.deco = "cattail"; t3.wild = true; }
          else if (r < 0.36) { t3.deco = "glowcap"; t3.wild = true; }
          else if (r < 0.46) { t3.deco = "mudpool"; }
        } else if (t3.zone === "cavern") {
          if (r < 0.10) { t3.deco = (rng() < 0.5 ? "crystal" : "crystal2"); t3.block = true; }
          else if (r < 0.16) { t3.deco = "stalag"; t3.block = true; }
          else if (r < 0.20) { t3.deco = "caverock"; t3.block = true; }
          else if (r < 0.40) { t3.deco = "cavemush"; t3.wild = true; }
        } else if (t3.zone === "rift") {
          if (r < 0.10) { t3.deco = "riftcrystal"; t3.block = true; }
          else if (r < 0.34) { t3.deco = "star"; t3.wild = true; }
          else if (r < 0.44) { t3.deco = "riftrock"; t3.block = true; }
        } else if (t3.zone === "lake") {
          if (r < 0.45) { t3.deco = "reeds"; t3.wild = true; }
        } else { // meadow
          if (r < 0.13) { t3.deco = "tallgrass"; t3.wild = true; }
          else if (r < 0.20) { t3.deco = "flower"; }
          else if (r < 0.215) { t3.deco = "tree"; t3.block = true; }
        }
      }
    }

    // Lily pads / waves on some water tiles (visual only)
    for (y = 0; y < H; y++) for (x = 0; x < W; x++) {
      var wt = T(x, y);
      if (wt.g !== "water") continue;
      var r2 = rng();
      if (r2 < 0.08) wt.deco = "lily";
      else if (r2 < 0.30) wt.deco = "wave";
    }

    // ---------------------------------------------------------------- POIs
    // Shops & Arenas are enterable 2x2 buildings; NPCs are people you walk up
    // to. clearTile keeps an approach tile walkable next to each building.
    var pois = [];
    function clearTile(x, y) { var t = T(x, y); if (t.g !== "water") { t.deco = null; t.block = false; t.wild = false; } }
    function building(hx, hy, deco, poi) {
      for (var yy = hy; yy < hy + 2; yy++) for (var xx = hx; xx < hx + 2; xx++) {
        var t = T(xx, yy); t.block = true; t.deco = null; t.wild = false;
      }
      T(hx, hy).deco = deco;
      // front approach tiles (below the building) kept clear + walkable
      clearTile(hx, hy + 2); clearTile(hx + 1, hy + 2);
      poi.tx = hx; poi.ty = hy; poi.w = 2; poi.h = 2;
      poi.approach = [[hx, hy + 2], [hx + 1, hy + 2], [hx - 1, hy], [hx + 2, hy]];
      pois.push(poi);
    }
    building(29, 32, "shop",  { kind: "shop", id: "shop-village", name: "Willowmere General Store" });
    building(55, 17, "shop",  { kind: "shop", id: "shop-desert",  name: "Sundune Orb Emporium" });
    building(46, 39, "arena", { kind: "arena", id: "arena-village", name: "Willow Grove Arena", tier: 1 });
    building(23, 4,  "arena", { kind: "arena", id: "arena-tundra",  name: "Frostpeak Arena", tier: 2 });
    building(33, 29, "square",{ kind: "square", id: "square-village", name: "Willowmere Village Square" });

    // Portals — a 1-tile gateway you step onto. The village portal sends you to
    // the Astral Rift; a return portal there brings you home.
    function portal(x, y, id, name, dest, enterMsg) {
      var t = T(x, y); t.block = false; t.deco = null; t.wild = false; t.g = t.g === "void" ? "void" : t.g;
      // keep the approach tiles walkable
      [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]].forEach(function (a) {
        if (a[0] > 0 && a[1] > 0 && a[0] < W - 1 && a[1] < H - 1) { var at = T(a[0], a[1]); if (at.g !== "water") { at.block = false; at.deco = null; } }
      });
      pois.push({ kind: "portal", id: id, name: name, tx: x, ty: y, w: 1, h: 1, dest: dest, enterMsg: enterMsg,
        approach: [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]] });
    }
    portal(35, 33, "portal-village", "✦ Astral Portal", { tx: 79, ty: 44 },
      "You step through the shimmering gateway into the Astral Rift!");
    portal(79, 46, "portal-return", "Portal Home", { tx: 35, ty: 34 },
      "You drift back home to Willowmere.");
    // clear the teleport landing pads so you never arrive on a blocked tile
    [[79,44],[79,45],[78,44],[80,44],[78,45],[80,45],[35,34],[35,33],[34,34],[36,34],[35,35]]
      .forEach(function (a) { var t = T(a[0], a[1]); if (t && t.g !== "water") { t.block = false; t.deco = null; t.wild = false; } });

    // NPCs — sit on walkable tiles (nudged onto the nearest one). Rendered by
    // the game as little avatar people; give clues about the Ultra Legendaries.
    function npc(x, y, id, name, av) {
      // nudge to a nearby non-blocked, non-water tile
      var best = null;
      for (var rad = 0; rad < 4 && !best; rad++) {
        for (var dy = -rad; dy <= rad && !best; dy++) for (var dx = -rad; dx <= rad && !best; dx++) {
          var nx = x + dx, ny = y + dy;
          if (nx < 1 || ny < 1 || nx >= W - 1 || ny >= H - 1) continue;
          var t = T(nx, ny);
          if (!t.block && t.g !== "water") best = [nx, ny];
        }
      }
      if (!best) return;
      pois.push({ kind: "npc", id: id, name: name, av: av, tx: best[0], ty: best[1],
        approach: [[best[0]+1,best[1]],[best[0]-1,best[1]],[best[0],best[1]+1],[best[0],best[1]-1]] });
    }
    npc(31, 36, "npc-mayor",   "Mayor Pom",    { skin: 3, hair: 1, shirt: 4, pants: 0, hat: "none", glasses: "round" });
    npc(12, 22, "npc-ranger",  "Ranger Fenn",  { skin: 1, hair: 2, shirt: 2, pants: 2, hat: "ranger", glasses: "none" });
    npc(57, 30, "npc-nomad",   "Nomad Zia",    { skin: 4, hair: 4, shirt: 3, pants: 3, hat: "none", glasses: "shades" });
    npc(20, 8,  "npc-scout",   "Scout Bly",    { skin: 0, hair: 7, shirt: 1, pants: 0, hat: "beanie", glasses: "none" });
    npc(31, 47, "npc-angler",  "Angler Moss",  { skin: 2, hair: 0, shirt: 5, pants: 1, hat: "none", glasses: "green" });
    npc(64, 43, "npc-miner",   "Miner Quill",  { skin: 5, hair: 5, shirt: 7, pants: 2, hat: "cap", glasses: "round" });
    npc(43, 20, "npc-baker",   "Baker Tilly",  { skin: 1, hair: 3, shirt: 6, pants: 1, hat: "none", glasses: "square" });
    npc(52, 33, "npc-trader",  "Trader Vish",  { skin: 3, hair: 6, shirt: 0, pants: 3, hat: "beanie", glasses: "shades" });

    // Ultra Legendary hiding spots — validated walkable tiles across the world.
    var ultraCandidates = [
      [33, 20], [9, 30], [48, 24], [58, 26], [40, 4], [10, 6],
      [24, 48], [40, 49], [66, 46], [61, 40], [14, 40], [50, 12], [26, 26],
      [80, 12], [83, 30], [78, 20],
    ];
    var ultraSpots = ultraCandidates.filter(function (s) {
      var t = T(s[0], s[1]); return t && !t.block && t.g !== "water";
    }).map(function (s) { return { tx: s[0], ty: s[1] }; });

    return { W: W, H: H, TILE: TILE, tiles: tiles, at: T, zoneNames: ZONE_NAMES, pois: pois, ultraSpots: ultraSpots };
  }

  // ------------------------------------------------------------------------
  //  Rendering
  // ------------------------------------------------------------------------
  var GROUND_FILL = {
    grass: ["#8ecf6f", "#86c866"], forestfloor: ["#6fae58", "#68a750"],
    sand: ["#eed9a8", "#e7d09b"], rock: ["#b6a68c", "#aca083"],
    path: ["#e0c893", "#dac28c"], water: ["#64b7e2", "#5db0dc"],
    snow: ["#f2f9fd", "#e8f2f8"], bog: ["#6b7f58", "#647851"],
    cave: ["#3a3450", "#332e48"], void: ["#241a3e", "#1e1636"],
  };

  function renderWorld(map, svg) {
    var parts = ["<defs>" + DEFS + "</defs>"];
    var deco = [];
    var t, fx, fy;
    for (var idx = 0; idx < map.tiles.length; idx++) {
      t = map.tiles[idx];
      fx = t.x * TILE; fy = t.y * TILE;
      var pair = GROUND_FILL[t.g];
      var fill = pair[(t.x + t.y) % 2];
      parts.push('<rect x="' + fx + '" y="' + fy + '" width="' + TILE + '" height="' + TILE + '" fill="' + fill + '"/>');
      if (t.g === "water") {
        // deep-water shading toward the middle of the lake
        var ddx = (t.x - 23) / 7, ddy = (t.y - 25) / 5.2;
        if (ddx * ddx + ddy * ddy < 0.45)
          parts.push('<rect x="' + fx + '" y="' + fy + '" width="' + TILE + '" height="' + TILE + '" fill="#4fa3d8" opacity=".7"/>');
      }
      if (t.deco) {
        var big = (t.deco === "house1" || t.deco === "house2");
        var size = big ? TILE * 2 : TILE;
        deco.push({ y: t.y, html: '<use href="#d-' + t.deco + '" x="' + fx + '" y="' + fy + '" width="' + size + '" height="' + size + '"/>' });
      }
    }
    // subtle zone edge fades along the north and south borders
    parts.push('<rect x="0" y="' + (10 * TILE - 10) + '" width="' + (W * TILE) + '" height="20" fill="#b6a68c" opacity=".3" rx="10"/>');
    parts.push('<rect x="0" y="' + (43 * TILE - 10) + '" width="' + (W * TILE) + '" height="20" fill="#6b7f58" opacity=".3" rx="10"/>');
    parts.push('<rect x="' + (30 * TILE - 8) + '" y="0" width="16" height="' + (10 * TILE) + '" fill="#c3d8e4" opacity=".35" rx="8"/>');
    // cavern boundary (left edge x=60 for y>=36, top edge y=36 for x>=60)
    parts.push('<rect x="' + (60 * TILE - 8) + '" y="' + (36 * TILE) + '" width="16" height="' + (16 * TILE) + '" fill="#2a2540" opacity=".4" rx="8"/>');
    parts.push('<rect x="' + (60 * TILE) + '" y="' + (36 * TILE - 8) + '" width="' + (12 * TILE) + '" height="16" fill="#2a2540" opacity=".4" rx="8"/>');
    // draw decorations sorted by row so taller art overlaps correctly
    deco.sort(function (a, b) { return a.y - b.y; });
    parts.push('<g id="deco-layer">' + deco.map(function (d) { return d.html; }).join("") + "</g>");
    parts.push('<g id="poi-layer"></g>');
    parts.push('<g id="ultra-layer"></g>');
    parts.push('<g id="spawn-layer"></g>');
    parts.push('<g id="player-layer"><g id="player-sprite" class="player-idle">' + PLAYER_ART.down + "</g></g>");
    svg.innerHTML = parts.join("");
  }

  window.WORLD = { build: buildMap, render: renderWorld, PLAYER_ART: PLAYER_ART, TILE: TILE, ZONE_NAMES: ZONE_NAMES };
})();
