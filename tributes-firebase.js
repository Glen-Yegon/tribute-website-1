import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCEWk6TaA5IHVwdNsenRCAS5idfXfJ-c0E",
  authDomain: "tribute-project-2346e.firebaseapp.com",
  projectId: "tribute-project-2346e",
  storageBucket: "tribute-project-2346e.firebasestorage.app",
  messagingSenderId: "495496007936",
  appId: "1:495496007936:web:a14660eb3851a8338b23e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export db so it can be used in tributes.js
export { db, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot };
