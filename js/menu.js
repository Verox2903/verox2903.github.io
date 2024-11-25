document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle'); // Przycisk hamburgera
    const menu = document.querySelector('.menu'); // Lista menu

    // Kliknięcie w przycisk hamburgera
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active'); // Dodaj/usuń klasę "active"
    });

    // Ukryj menu po kliknięciu w link
    menu.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            menu.classList.remove('active'); // Usuń klasę "active"
        }
    });
});
