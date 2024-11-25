document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookiesButton = document.getElementById('acceptCookies');

    // Funkcja do ustawiania cookie
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
    }

    // Funkcja do pobierania cookie
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    // Sprawdź, czy użytkownik zaakceptował cookies
    if (!getCookie('cookiesAccepted')) {
        cookieBanner.style.display = 'flex'; // Wyświetl baner
    }

    // Akceptacja cookies
    acceptCookiesButton.addEventListener('click', () => {
        setCookie('cookiesAccepted', 'true', 365); // Zapisz cookie na 365 dni
        cookieBanner.style.display = 'none'; // Ukryj baner
    });
});