// ============================================================================
//  CRITTER QUEST — ORBS
//  Focus Orbs come in one flavor per biome, plus a universal Prism Orb for
//  legendaries. To catch a critter you throw an orb of its habitat's type
//  (Prism Orbs work on anything as a fallback). Orbs are found lying in the
//  wild, dropped by critters you catch, and awarded when you level up. Feeding
//  a batch of orbs to a critter can evolve it.
// ============================================================================

(function () {
  var OL = "#3a2b28";

  // key -> {name, color, glow, zone it comes from}
  window.ORB_TYPES = {
    meadow: { name: "Meadow Orb", color: "#7fc24a", glow: "#d6f0b0" },
    forest: { name: "Forest Orb", color: "#3f9a5a", glow: "#bfe6c4" },
    lake:   { name: "Tide Orb",   color: "#4aa3df", glow: "#bfe6f7" },
    ridge:  { name: "Ember Orb",  color: "#e8703a", glow: "#ffd0a8" },
    desert: { name: "Sun Orb",    color: "#e6b52c", glow: "#ffe9a8" },
    tundra: { name: "Frost Orb",  color: "#7fc4e0", glow: "#dff2fb" },
    marsh:  { name: "Bog Orb",    color: "#6f9a4a", glow: "#cfe6a8" },
    cavern: { name: "Gem Orb",    color: "#b06fd0", glow: "#e6c4f2" },
    rift:   { name: "Astral Orb", color: "#5b6ee0", glow: "#c8d0ff", starry: true },
    sanctum:{ name: "Abyssal Orb", color: "#1f8f8a", glow: "#9ff0e4", bubbly: true },
    prism:  { name: "Prism Orb",  color: "#f06fb0", glow: "#ffd6ef", rainbow: true },
  };

  window.ORB_ORDER = ["meadow", "forest", "lake", "ridge", "desert", "tundra", "marsh", "cavern", "rift", "sanctum", "prism"];

  // Which orb a critter needs: its habitat's orb; roaming legendaries -> prism.
  window.orbForZone = function (zone) {
    if (zone === "any") return "prism";
    return window.ORB_TYPES[zone] ? zone : "meadow";
  };

  // Hand-drawn orb sprite for a given key, drawn in a 0 0 48 48 box.
  window.orbArt = function (key) {
    var o = window.ORB_TYPES[key] || window.ORB_TYPES.meadow;
    var grad = key + "-og";
    var body;
    if (o.rainbow) {
      body =
        '<radialGradient id="' + grad + '" cx="42%" cy="34%" r="72%">' +
          '<stop offset="0%" stop-color="#fff"/><stop offset="45%" stop-color="#ffd6ef"/>' +
          '<stop offset="75%" stop-color="#c9a6ff"/><stop offset="100%" stop-color="#7fc8ee"/>' +
        "</radialGradient>";
    } else {
      body =
        '<radialGradient id="' + grad + '" cx="42%" cy="32%" r="72%">' +
          '<stop offset="0%" stop-color="#ffffff"/><stop offset="40%" stop-color="' + o.glow + '"/>' +
          '<stop offset="100%" stop-color="' + o.color + '"/>' +
        "</radialGradient>";
    }
    return (
      "<defs>" + body + "</defs>" +
      '<ellipse cx="24" cy="41" rx="11" ry="3.4" fill="#000" opacity=".15"/>' +
      '<circle cx="24" cy="23" r="17" fill="url(#' + grad + ')" stroke="' + OL + '" stroke-width="2.4"/>' +
      (o.starry ? '<g fill="#fff"><circle cx="18" cy="20" r="1.3"/><circle cx="29" cy="26" r="1"/><circle cx="24" cy="16" r="1.1"/><circle cx="31" cy="19" r="0.9"/><circle cx="16" cy="28" r="0.9"/></g>' : "") +
      (o.bubbly ? '<g fill="#eafffb" opacity=".9"><circle cx="19" cy="27" r="2"/><circle cx="28" cy="30" r="1.4"/><circle cx="30" cy="22" r="1.1"/><circle cx="22" cy="31" r="1"/></g>' : "") +
      // equator band + button, like a poké-orb but soft
      '<path d="M8 24 a16 16 0 0 1 32 0" fill="none" stroke="' + OL + '" stroke-width="2.2" opacity=".55"/>' +
      '<circle cx="24" cy="24" r="4.6" fill="#fff" stroke="' + OL + '" stroke-width="2.2"/>' +
      '<circle cx="24" cy="24" r="1.8" fill="' + o.color + '"/>' +
      // sparkle highlights
      '<circle cx="17" cy="16" r="2.4" fill="#fff" opacity=".85"/>' +
      '<circle cx="30" cy="14" r="1.3" fill="#fff" opacity=".7"/>'
    );
  };

  window.orbSVG = function (key, cls) {
    return '<svg class="' + (cls || "") + '" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' + window.orbArt(key) + "</svg>";
  };

  // A fresh, generous starting stash so new trainers can catch right away.
  window.startingOrbs = function () {
    return { meadow: 6, forest: 5, lake: 5, ridge: 5, desert: 5, tundra: 4, marsh: 4, cavern: 4, rift: 2, sanctum: 2, prism: 2 };
  };
})();
