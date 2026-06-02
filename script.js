

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
nowyParagraf.textContent = "Krolik uciekl!";
document.body.appendChild(nowyParagraf);

const glownyPrzycisk = document.querySelector('.przy');
const srodekStrony = document.querySelector('.animals');
glownyPrzycisk.addEventListener('click', () =>{
    const nowyPrzycisk = document.createElement('button');
    nowyPrzycisk.textContent = "klinij mnie";
    srodekStrony.appendChild(nowyPrzycisk)
    nowyPrzycisk.classList.add('moj-button')
})

const przyciskWyczysc = document.querySelector('.btn-clear');
const ikonaKoszyka = document.querySelector('.cart-icon');
przyciskWyczysc.addEventListener('click', () => {
 if (ikonaKoszyka.style.display === "none"){
    ikonaKoszyka.style.display = "block"
    nowyNapis.style.display = "none"
} else {
    ikonaKoszyka.style.display = "none"
    
}
 const nowyNapis = document.createElement('h1');
nowyNapis.textContent = "koszyk zniknal";


document.body.appendChild(nowyNapis);
   
})