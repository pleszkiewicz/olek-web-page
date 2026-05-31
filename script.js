const obrazekKota = document.querySelector('.kot');

// 2. SŁUCHAMY KLIKNIĘCIA: Dodajemy "podsłuchiwacz" (Event Listener) na kliknięcie
obrazekKota.addEventListener('click', () => {
    
    // 3. AKCJA: Tutaj wpisujemy, co ma się stać po kliknięciu
    alert("Auuu! Nie klikaj mnie, jestem tylko szklanym kotem!");
    
});

const obrazekKrolika = document.querySelector('.krolik');
const textNapisu = document.querySelector('.napis');

obrazekKrolika.addEventListener('click', () => {
    textNapisu.textContent = "Królik uciekł!";
    obrazekKrolika.style.display = "none";
});