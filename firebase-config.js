// ============================================================================
//  FIREBASE CONFIG — Critter Quest
// ============================================================================
//  This reuses your existing Firebase project (same one as the Connections
//  Game and the slideshow decks). Cloud saves live in a `critterquest`
//  Firestore collection, one document per trainer name.
//
//  IMPORTANT: for cloud saves to work you must allow the collection in your
//  Firestore rules — see firestore.rules in this folder. Until then (or with
//  no internet) the game automatically uses local browser saves instead,
//  and everything still works.
// ============================================================================

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCTlSQVfBGMZBP5Tj3cNg6npEumKNo_-VQ",
  authDomain: "connections-47aac.firebaseapp.com",
  projectId: "connections-47aac",
  storageBucket: "connections-47aac.firebasestorage.app",
  messagingSenderId: "928107242700",
  appId: "1:928107242700:web:cf86ddb457394f1085ce69",
};

// You do not need to change anything below this line.
window.FIREBASE_CONFIGURED = !Object.values(window.FIREBASE_CONFIG).some(
  (v) => typeof v === "string" && v.indexOf("REPLACE_ME") === 0
);
