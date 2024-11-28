// Importuj i skonfiguruj Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuy41JSvPvX8lO9pG8K147PBZAkrR6dnQ",
  authDomain: "giziu-d9114.firebaseapp.com",
  projectId: "giziu-d9114",
  storageBucket: "giziu-d9114.firebasestorage.app",
  messagingSenderId: "311042530784",
  appId: "1:311042530784:web:3df6db355b3d423b865f85",
  measurementId: "G-NM3NZ05CDS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// DOM elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const opinieSection = document.getElementById("opinie-section");
const opinieList = document.getElementById("opinie-list");

// Pokaż/ukryj formularze logowania i rejestracji
document.getElementById("show-register-form").addEventListener("click", () => {
  loginForm.classList.add("hidden");
  registerForm.classList.remove("hidden");
});

document.getElementById("show-login-form").addEventListener("click", () => {
  registerForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

// Rejestracja użytkownika
document.getElementById("register-button").addEventListener("click", async () => {
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Rejestracja zakończona sukcesem!");
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  } catch (error) {
    alert(`Błąd rejestracji: ${error.message}`);
  }
});

// Logowanie użytkownika
document.getElementById("login-button").addEventListener("click", async () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Zalogowano!");
  } catch (error) {
    alert(`Błąd logowania: ${error.message}`);
  }
});

// Wyświetlanie opinii (dla zalogowanych użytkowników)
const displayOpinie = () => {
  onSnapshot(collection(db, "opinie"), (snapshot) => {
    opinieList.innerHTML = "";
    snapshot.forEach((doc) => {
      const opinia = document.createElement("div");
      opinia.textContent = doc.data().content;
      opinieList.appendChild(opinia);
    });
  });
};

// Dodawanie opinii
document.getElementById("add-opinion-button").addEventListener("click", async () => {
  const content = document.getElementById("opinia-content").value;
  if (content.trim() === "") {
    alert("Opinia nie może być pusta!");
    return;
  }
  try {
    await addDoc(collection(db, "opinie"), {
      content,
      userId: auth.currentUser.uid,
      timestamp: new Date()
    });
    alert("Opinia dodana!");
    document.getElementById("opinia-content").value = "";
  } catch (error) {
    alert(`Błąd dodawania opinii: ${error.message}`);
  }
});

// Sprawdzanie statusu zalogowania
onAuthStateChanged(auth, (user) => {
  if (user) {
    loginForm.classList.add("hidden");
    registerForm.classList.add("hidden");
    opinieSection.classList.remove("hidden");
    displayOpinie();
  } else {
    loginForm.classList.remove("hidden");
    opinieSection.classList.add("hidden");
  }
});
