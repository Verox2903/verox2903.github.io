// auth.js
import { auth } from './firebase-config.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// Logowanie użytkownika
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Zalogowano pomyślnie!");
            location.reload(); // Odśwież stronę po zalogowaniu
        } catch (error) {
            alert("Błąd logowania: " + error.message);
        }
    });
}

// Rejestracja użytkownika
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Rejestracja zakończona sukcesem! Możesz się teraz zalogować.");
            window.location.href = '../sites/index.html'; // Przekierowanie na stronę główną
        } catch (error) {
            alert("Błąd rejestracji: " + error.message);
        }
    });
}

// Wyświetlanie stanu zalogowania
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Zalogowano jako:", user.email);
        // Wyświetlaj dodatkowe opcje dla zalogowanego użytkownika
    } else {
        console.log("Użytkownik niezalogowany.");
    }
});

// Wylogowanie użytkownika (opcjonalnie dodaj przycisk wylogowania)
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', async () => {
        await signOut(auth);
        alert("Wylogowano!");
        location.reload();
    });
}
