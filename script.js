

const obrazekKota = document.querySelector('.kot');
const obrazekKrolika = document.querySelector('.krolik');
const textNapisu = document.querySelector('.napis');

// --- 2. AKCJA: UCIECZKA KRÓLIKA ---
obrazekKrolika.addEventListener('click', () => {
    textNapisu.textContent = "Królik uciekł!";
    obrazekKrolika.style.display = "none"; // Królik znika
});

// --- 3. AKCJA: MAGIA KOTA (NOWOŚĆ) ---
obrazekKota.addEventListener('click', () => {
    textNapisu.textContent = "Kot wyczarował królika!";
    
    // 🔥 Przywracamy królika na ekran!
    obrazekKrolika.style.display = "block"; 

    
});
const obrazekPieska = document.querySelector('.piesek');
obrazekPieska.addEventListener('click', () =>  {
    textNapisu.textContent = "emm..., co slychac?";
    alert("bum");
    obrazekKota.style.display = "none";
    obrazekKrolika.style.display = "none";
});
    const przycisk = document.querySelector('.prz');
    przycisk.addEventListener('click', () => {
        obrazekKota.style.display = "block";
        obrazekKrolika.style.display = "block";
        
    })
    // 1. Tworzymy "szklankę" (pudełko na tekst)
const nowyParagraf = document.createElement('p'); 

// 2. Wlewamy "wodę" (tekst) do tej konkretnej szklanki
nowyParagraf.textContent = "Królik uciekł!";
document.body.appendChild(nowyParagraf);

const nowyPrzycisk = document.createElement('button');
const srodekStrony = document.querySelector('.animals');

przycisk.addEventListener('click', () => {
    const nowyPrzycisk = document.createElement('button');
nowyPrzycisk.textContent = "Przejdź do Wikipedii";
nowyPrzycisk.classList.add('batonikbuttonik');

// 2. 🔥 Dodajemy nasłuchiwanie na NOWY przycisk!
nowyPrzycisk.addEventListener('click', () => {
    window.location.href = 'https://pl.wikipedia.org';
});

// 3. Wrzucamy gotowy przycisk na środek strony
srodekStrony.appendChild(nowyPrzycisk);
})