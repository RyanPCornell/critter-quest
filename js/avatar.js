// ============================================================================
//  CRITTER QUEST — AVATAR
//  Hand-drawn, customizable trainer sprite. Three poses (down / up / side —
//  left is the flipped side pose), composed from swappable hand-drawn parts:
//  hat style, glasses, hair color, skin tone, shirt color, pants color.
// ============================================================================

(function () {
  var OL = "#3a2b28";

  var SKINS  = ["#f2c9a0", "#e8b380", "#d99c66", "#b97e4b", "#93582f", "#f7ddc8"];
  var HAIRS  = ["#5a4632", "#2e2620", "#b3702a", "#e8c46a", "#c14a54", "#7a5ea8", "#3a6ea8", "#9aa0a8"];
  var SHIRTS = ["#e85f6a", "#5b7fbf", "#5cb85c", "#e8a23c", "#7a5ea8", "#3fa39b", "#d97fb8", "#57504e"];
  var PANTS  = ["#4a5387", "#6e604a", "#3f6e5a", "#8a4f48"];
  var HATS   = [
    { id: "cap",    name: "Cap" },
    { id: "ranger", name: "Ranger" },
    { id: "flower", name: "Flower" },
    { id: "beanie", name: "Beanie" },
    { id: "none",   name: "No hat" },
  ];
  var GLASSES = [
    { id: "none",   name: "None" },
    { id: "round",  name: "Round" },
    { id: "square", name: "Square" },
    { id: "green",  name: "Green" },
    { id: "shades", name: "Shades" },
  ];

  var DEFAULT = { skin: 0, hair: 0, shirt: 0, pants: 0, hat: "cap", glasses: "none" };

  function pal(cfg) {
    cfg = cfg || DEFAULT;
    return {
      skin:  SKINS[cfg.skin]   || SKINS[0],
      hair:  HAIRS[cfg.hair]   || HAIRS[0],
      shirt: SHIRTS[cfg.shirt] || SHIRTS[0],
      pants: PANTS[cfg.pants]  || PANTS[0],
      hat:   cfg.hat || "cap",
      glasses: cfg.glasses || "none",
    };
  }

  function shade(hex, f) { // simple darken for shirt trim
    var n = parseInt(hex.slice(1), 16);
    var r = Math.round(((n >> 16) & 255) * f), g = Math.round(((n >> 8) & 255) * f), b = Math.round((n & 255) * f);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  // ---- hats (front view). Hair renders beneath. -----------------
  function hatFront(p) {
    switch (p.hat) {
      case "ranger": return `
        <ellipse cx="24" cy="10" rx="13.5" ry="4.5" fill="#8a6f47" stroke="${OL}" stroke-width="2"/>
        <path d="M17 9 a7 7 0 0 1 14 0 l0 2 a10 10 0 0 0 -14 0 Z" fill="#a3854f" stroke="${OL}" stroke-width="2"/>
        <path d="M17 10.5 h14" stroke="#5f4326" stroke-width="1.8"/>`;
      case "beanie": return `
        <path d="M14.5 12 a9.5 9.5 0 0 1 19 0 l0 2.5 a12 12 0 0 0 -19 0 Z" fill="#c14a54" stroke="${OL}" stroke-width="2"/>
        <path d="M15 12.5 a12 12 0 0 1 18 0" fill="none" stroke="#8f2f38" stroke-width="2.2"/>
        <circle cx="24" cy="3.5" r="3" fill="#f4e9c8" stroke="${OL}" stroke-width="1.6"/>`;
      case "flower": return `
        <g stroke="${OL}" stroke-width="1.3">
          <circle cx="16" cy="8" r="2.6" fill="#ffb3c7"/><circle cx="24" cy="6" r="2.6" fill="#ffe066"/><circle cx="32" cy="8" r="2.6" fill="#c7a6ff"/>
        </g>
        <circle cx="16" cy="8" r="1" fill="#fff"/><circle cx="24" cy="6" r="1" fill="#fff"/><circle cx="32" cy="8" r="1" fill="#fff"/>`;
      case "none": return "";
      default: return `
        <path d="M14 11 a10 10 0 0 1 20 0 l0 2 a13 13 0 0 0 -20 0 Z" fill="#e8a23c" stroke="${OL}" stroke-width="2"/>
        <path d="M14 12 l-3 3" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>`;
    }
  }

  function hatBack(p) { // up pose
    switch (p.hat) {
      case "ranger": return `
        <ellipse cx="24" cy="11" rx="13.5" ry="4.5" fill="#8a6f47" stroke="${OL}" stroke-width="2"/>
        <path d="M17 10 a7 7 0 0 1 14 0 l0 3 a10 10 0 0 0 -14 0 Z" fill="#a3854f" stroke="${OL}" stroke-width="2"/>`;
      case "beanie": return `
        <path d="M14.5 13 a9.5 9.5 0 0 1 19 0 l0 3 a12 12 0 0 0 -19 0 Z" fill="#c14a54" stroke="${OL}" stroke-width="2"/>
        <circle cx="24" cy="4.5" r="3" fill="#f4e9c8" stroke="${OL}" stroke-width="1.6"/>`;
      case "flower": return `
        <g stroke="${OL}" stroke-width="1.3">
          <circle cx="17" cy="7" r="2.4" fill="#ffb3c7"/><circle cx="27" cy="6" r="2.4" fill="#c7a6ff"/>
        </g>`;
      case "none": return "";
      default: return `
        <path d="M14 13 a10 10 0 0 1 20 0 l0 4 a13 13 0 0 0 -20 0 Z" fill="#e8a23c" stroke="${OL}" stroke-width="2"/>
        <circle cx="24" cy="9" r="2.6" fill="#c9821e" stroke="${OL}" stroke-width="1.4"/>`;
    }
  }

  function hatSide(p) {
    switch (p.hat) {
      case "ranger": return `
        <ellipse cx="25" cy="10" rx="13" ry="4.2" fill="#8a6f47" stroke="${OL}" stroke-width="2"/>
        <path d="M18 9 a7 7 0 0 1 14 -0.5 l0 2.5 a10 10 0 0 0 -14 0 Z" fill="#a3854f" stroke="${OL}" stroke-width="2"/>`;
      case "beanie": return `
        <path d="M15.5 11.5 a9.5 9.5 0 0 1 19 0 l0 2.5 a12 12 0 0 0 -19 0 Z" fill="#c14a54" stroke="${OL}" stroke-width="2"/>
        <circle cx="25" cy="3" r="3" fill="#f4e9c8" stroke="${OL}" stroke-width="1.6"/>`;
      case "flower": return `
        <g stroke="${OL}" stroke-width="1.3">
          <circle cx="20" cy="6" r="2.6" fill="#ffb3c7"/><circle cx="28" cy="5.5" r="2.4" fill="#ffe066"/>
        </g>`;
      case "none": return "";
      default: return `
        <path d="M15 11 a10 10 0 0 1 19 -1 l1 3 a13 13 0 0 0 -20 -1 Z" fill="#e8a23c" stroke="${OL}" stroke-width="2"/>
        <path d="M34 12 l5 1" stroke="${OL}" stroke-width="2" stroke-linecap="round"/>`;
    }
  }

  // hair under/around the hat
  function hairFront(p) {
    if (p.hat === "none" || p.hat === "flower") {
      return `<path d="M14 13 a10 10 0 0 1 20 0 l0 4 q-3 -3 -5 -1 q-2 -3 -5 -2 q-3 -1 -5 2 q-2 -2 -5 1 Z" fill="${p.hair}" stroke="${OL}" stroke-width="1.8"/>`;
    }
    return `<path d="M14.5 13 q2 4 4 4 q1.5 -2 0 -4 Z M33.5 13 q-2 4 -4 4 q-1.5 -2 0 -4 Z" fill="${p.hair}" stroke="${OL}" stroke-width="1.4"/>`;
  }
  function hairBack(p) {
    return `<path d="M14 14 a10 10 0 0 1 20 0 l0 7 q-10 5 -20 0 Z" fill="${p.hair}" stroke="${OL}" stroke-width="1.8"/>`;
  }
  function hairSide(p) {
    if (p.hat === "none" || p.hat === "flower") {
      return `<path d="M15 12 a10 10 0 0 1 19 -1 l0 5 q-4 -3 -7 -2 q-5 -3 -9 0 q-2 0 -3 2 Z" fill="${p.hair}" stroke="${OL}" stroke-width="1.8"/>
              <path d="M15 14 q-1 4 1 7" stroke="${p.hair}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
    }
    return `<path d="M16 13 q0 5 2 6 q2 -2 1 -6 Z" fill="${p.hair}" stroke="${OL}" stroke-width="1.4"/>`;
  }

  // ---- glasses (front + side views; nothing in the back/up view) --------
  function glassSpec(g) {
    return {
      frame: g === "green" ? "#3f9a4a" : OL,
      lens:  g === "shades" ? "#2b2320" : g === "green" ? "#bfe8ad" : "#c7e6ff",
      op:    g === "shades" ? "0.88" : "0.4",
      square: g === "square",
    };
  }
  function lensShape(cx, cy, r, s) {
    if (s.square) return `<rect x="${cx - r}" y="${cy - r + 0.3}" width="${2 * r}" height="${2 * r - 0.6}" rx="1.6" fill="${s.lens}" fill-opacity="${s.op}" stroke="${s.frame}" stroke-width="1.3"/>`;
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${s.lens}" fill-opacity="${s.op}" stroke="${s.frame}" stroke-width="1.3"/>`;
  }
  function glassesFront(p) {
    var g = p.glasses;
    if (!g || g === "none") return "";
    var s = glassSpec(g), r = 3.2, lx = 20.4, rx = 27.6, cy = 15;
    return `<g class="av-glasses">${lensShape(lx, cy, r, s)}${lensShape(rx, cy, r, s)}
      <path d="M${lx + r - 0.2} ${cy - 0.6} q0.6 -1 ${(rx - r) - (lx + r) + 0.4} 0" fill="none" stroke="${s.frame}" stroke-width="1.3"/>
      <path d="M${lx - r} ${cy - 0.4} l-3 -1.2 M${rx + r} ${cy - 0.4} l3 -1.2" stroke="${s.frame}" stroke-width="1.3" stroke-linecap="round"/></g>`;
  }
  function glassesSide(p) {
    var g = p.glasses;
    if (!g || g === "none") return "";
    var s = glassSpec(g), r = 3.3, cx = 30, cy = 15;
    return `<g class="av-glasses">${lensShape(cx, cy, r, s)}
      <path d="M${cx - r} ${cy - 0.4} l-4 -1" stroke="${s.frame}" stroke-width="1.3" stroke-linecap="round"/>
      <path d="M${cx + r} ${cy - 0.2} q2.6 0 2.8 1.8" fill="none" stroke="${s.frame}" stroke-width="1.2"/></g>`;
  }

  function art(pose, cfg) {
    var p = pal(cfg);
    var trim = shade(p.shirt, 0.78);
    if (pose === "up") return `
      <ellipse cx="24" cy="43" rx="10" ry="3" fill="#000" opacity=".18"/>
      <rect x="16" y="20" width="16" height="16" rx="5" fill="${trim}" stroke="${OL}" stroke-width="2"/>
      <rect x="18" y="22" width="12" height="12" rx="3" fill="#8a9c5f" stroke="${OL}" stroke-width="1.8"/>
      <path d="M20 22 v12 M28 22 v12" stroke="#6e7f49" stroke-width="1.6"/>
      <rect x="13" y="22" width="5" height="10" rx="2.4" fill="${p.skin}" stroke="${OL}" stroke-width="1.8"/>
      <rect x="30" y="22" width="5" height="10" rx="2.4" fill="${p.skin}" stroke="${OL}" stroke-width="1.8"/>
      <rect x="17" y="34" width="6" height="9" rx="2.6" fill="${p.pants}" stroke="${OL}" stroke-width="1.8" class="leg-l"/>
      <rect x="25" y="34" width="6" height="9" rx="2.6" fill="${p.pants}" stroke="${OL}" stroke-width="1.8" class="leg-r"/>
      <circle cx="24" cy="13" r="9.5" fill="${p.skin}" stroke="${OL}" stroke-width="2"/>
      ${hairBack(p)}
      ${hatBack(p)}`;
    if (pose === "side") return `
      <ellipse cx="24" cy="43" rx="10" ry="3" fill="#000" opacity=".18"/>
      <rect x="17" y="20" width="14" height="16" rx="5" fill="${p.shirt}" stroke="${OL}" stroke-width="2"/>
      <rect x="14" y="22" width="6" height="11" rx="2.6" fill="#8a9c5f" stroke="${OL}" stroke-width="1.8"/>
      <rect x="28" y="23" width="5" height="10" rx="2.4" fill="${p.skin}" stroke="${OL}" stroke-width="1.8" class="arm"/>
      <rect x="18" y="34" width="6" height="9" rx="2.6" fill="${p.pants}" stroke="${OL}" stroke-width="1.8" class="leg-l"/>
      <rect x="25" y="34" width="6" height="9" rx="2.6" fill="${p.pants}" stroke="${OL}" stroke-width="1.8" class="leg-r"/>
      <circle cx="25" cy="13" r="9.5" fill="${p.skin}" stroke="${OL}" stroke-width="2"/>
      ${hairSide(p)}
      ${hatSide(p)}
      <circle cx="30" cy="15" r="1.7" fill="${OL}"/>
      <path d="M31 19 q1.6 1.2 3 .4" stroke="${OL}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="27" cy="17" r="1.6" fill="#f2a2b6" opacity=".8"/>
      ${glassesSide(p)}`;
    // down (default)
    return `
      <ellipse cx="24" cy="43" rx="10" ry="3" fill="#000" opacity=".18"/>
      <rect x="16" y="20" width="16" height="16" rx="5" fill="${p.shirt}" stroke="${OL}" stroke-width="2"/>
      <path d="M16 26 h16" stroke="${trim}" stroke-width="2"/>
      <rect x="13" y="22" width="5" height="10" rx="2.4" fill="${p.skin}" stroke="${OL}" stroke-width="1.8"/>
      <rect x="30" y="22" width="5" height="10" rx="2.4" fill="${p.skin}" stroke="${OL}" stroke-width="1.8"/>
      <rect x="17" y="34" width="6" height="9" rx="2.6" fill="${p.pants}" stroke="${OL}" stroke-width="1.8" class="leg-l"/>
      <rect x="25" y="34" width="6" height="9" rx="2.6" fill="${p.pants}" stroke="${OL}" stroke-width="1.8" class="leg-r"/>
      <circle cx="24" cy="13" r="9.5" fill="${p.skin}" stroke="${OL}" stroke-width="2"/>
      ${hairFront(p)}
      ${hatFront(p)}
      <circle cx="21" cy="15" r="1.6" fill="${OL}"/><circle cx="27" cy="15" r="1.6" fill="${OL}"/>
      <path d="M22 19 q2 1.6 4 0" stroke="${OL}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
      <circle cx="18" cy="17" r="1.6" fill="#f2a2b6" opacity=".8"/><circle cx="30" cy="17" r="1.6" fill="#f2a2b6" opacity=".8"/>
      ${glassesFront(p)}`;
  }

  window.AVATAR = {
    SKINS: SKINS, HAIRS: HAIRS, SHIRTS: SHIRTS, PANTS: PANTS, HATS: HATS, GLASSES: GLASSES,
    DEFAULT: DEFAULT,
    art: art,
    svg: function (pose, cfg, cls) {
      return '<svg class="' + (cls || "") + '" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">' + art(pose, cfg) + "</svg>";
    },
  };
})();
