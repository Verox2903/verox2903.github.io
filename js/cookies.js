// Funkcja ustawiająca cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Funkcja pobierająca cookie
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

// Funkcja do inicjalizacji banera cookies
function initCookieBanner() {
  const banner = document.getElementById("cookieBanner");
  const acceptButton = document.getElementById("acceptCookies");
  const rejectButton = document.getElementById("reject-cookies");

  // Jeśli cookie nie zostało ustawione, pokaż baner
  if (!getCookie("cookiesAccepted")) {
    banner.classList.add("active"); // Wyświetl baner
  }

  // Obsługa akceptacji cookies
  acceptButton.addEventListener("click", () => {
    setCookie("cookiesAccepted", "true", 365);
    banner.classList.remove("active");
    enableGoogleAnalytics(); // Załaduj Google Analytics
  });

  // Obsługa odrzucenia cookies
  rejectButton.addEventListener("click", () => {
    setCookie("cookiesAccepted", "false", 365);
    banner.classList.remove("active");
    disableGoogleAnalytics(); // Wyłącz Google Analytics
  });
}

// Funkcja włączająca Google Analytics
function enableGoogleAnalytics() {
  // Tutaj kod do integracji z GA, jeśli akceptowane cookies
  gtag('config', 'G-NM3NZ05CDS');
}

// Funkcja wyłączająca Google Analytics
function disableGoogleAnalytics() {
  // Wyłączanie GA w przypadku odrzucenia cookies
  window['ga-disable-G-NM3NZ05CDS'] = true;
}

// Inicjalizacja
window.addEventListener("DOMContentLoaded", initCookieBanner);
