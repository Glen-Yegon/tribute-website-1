// =============================
// IMPORT FIRESTORE FROM tributes-firebase.js
// =============================
import { db, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from './tributes-firebase.js';

// =============================
// DOM ELEMENTS
// =============================
const openModalBtn = document.getElementById('open-modal');
const modal = document.getElementById('tribute-modal');
const closeModalBtn = document.querySelector('.close-modal');
const tributeForm = document.getElementById('tribute-form');
const tributesContainer = document.getElementById('tributes-container');

// =============================
// MODAL HANDLING
// =============================
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', e => {
  if(e.target === modal) {
    modal.style.display = 'none';
  }
});

// =============================
// CREATE TRIBUTE CARD
// =============================
function createTributeCard({ text, from, timestamp, photoBase64 }) {
  const card = document.createElement('div');
  card.className = 'tribute-card';

  if(photoBase64) {
    const img = document.createElement('img');
    img.src = photoBase64;
    img.className = 'tribute-photo';
    img.alt = 'Tribute Photo';
    card.appendChild(img);
  }

  const tributeText = document.createElement('div');
  tributeText.className = 'tribute-text';
  tributeText.textContent = text;
  card.appendChild(tributeText);

  const tributeFrom = document.createElement('div');
  tributeFrom.className = 'tribute-from';
  tributeFrom.textContent = `From: ${from}`;
  card.appendChild(tributeFrom);

  const tributeTime = document.createElement('div');
  tributeTime.className = 'tribute-time';
  tributeTime.textContent = timestamp;
  card.appendChild(tributeTime);

  // Prepend to top
  tributesContainer.prepend(card);

  // Animate fade-in
  card.style.animation = 'fadeInCard 0.6s forwards';
}

// =============================
// SUBMIT FORM AND SAVE TO FIRESTORE
// =============================
tributeForm.addEventListener('submit', async e => {
  e.preventDefault();

  const text = document.getElementById('tribute-text').value.trim();
  const from = document.getElementById('tribute-from').value.trim();
  const photoInput = document.getElementById('tribute-photo');

  // Convert photo to Base64 if exists
  let photoBase64 = '';
  if(photoInput.files && photoInput.files[0]) {
    const file = photoInput.files[0];
    photoBase64 = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  try {
    // Save tribute to Firestore
    const docRef = await addDoc(collection(db, 'tributes'), {
      text,
      from,
      timestamp: new Date().toLocaleString(),
      photoBase64,
      createdAt: serverTimestamp() // for ordering
    });

    // Wait for Firestore to confirm creation by listening for updates
    const unsubscribe = onSnapshot(
      query(collection(db, 'tributes'), orderBy('createdAt', 'desc')),
      snapshot => {
        snapshot.docChanges().forEach(change => {
          if(change.type === 'added' && change.doc.id === docRef.id) {
            // Close modal immediately once the card is visible on frontend
            tributeForm.reset();
            modal.style.display = 'none';
            unsubscribe(); // stop listening for this submission
          }
        });
      }
    );

  } catch (error) {
    console.error("Error saving tribute:", error);
    alert("Failed to submit tribute. Please try again.");
  }
});

// =============================
// LOAD TRIBUTES FROM FIRESTORE (REAL-TIME)
// =============================
function loadTributes() {
  const q = query(collection(db, 'tributes'), orderBy('createdAt', 'desc'));

  // Listen for changes in real-time
  onSnapshot(q, snapshot => {
    tributesContainer.innerHTML = ''; // Clear existing cards
    snapshot.forEach(doc => {
      const data = doc.data();
      createTributeCard(data);
    });
  });
}

// Load tributes on page load
loadTributes();
