const nap = document.querySelector('.napis1');
const napi = document.querySelector('.napis2');
nap.style.color = "red";
nap.style.backgoundColor = "green";
nap.style.fontSize = "30px";


const przyciskWejdz = document.querySelector('.btn-enter');
const poleHaslo = document.querySelector('.input-password');

// 🔥 TUTAJ SĄ TWOJE NOWE ZMIENNE:
const napis1 = document.querySelector('.komunikat-sukces');
const napis2 = document.querySelector('.komunikat-blad');

const sprawdzHaslo = () => {
    const wpisaneHaslo = poleHaslo.value;
    
    if (wpisaneHaslo === "tajne123") {
        napis1.style.display = "block"
        napis2.style.display = "none"
        
    } else {
        napis1.style.display = "none"
        napis2.style.display = "block"
        
        
    }
};

przyciskWejdz.addEventListener('click', sprawdzHaslo);
window.addEventListener('keydown', (e) => {
    if (e.key === "Enter") { sprawdzHaslo(); }
});



const zbanowani = ["Jan", "Marta", "Bumbum"];
const kontenerListy = document.querySelector('.lista-banow');
zbanowani.forEach((imie) => {
    kontenerListy.innerHTML += "Użytkownik " + imie + " ma bana!<br>";
});
const ceny = [20, 50, 10, 120];
const kontenerCen = document.querySelector('.lista-cen');
ceny.forEach((jednacena) => {
    if (jednacena > 40){
        kontenerCen.innerHTML += "produkt" + " "  + jednacena + "zł(Drogi!) <br>";
    } else {
        kontenerCen.innerHTML += "produkt" + " " + jednacena + "zł(Tani!) <br>";
    }
})
const kontenerCeny = document.querySelector('.lista-ceny');
const sklep = [
    { nazwa: "Buty", cena: 120 },
    { nazwa: "Czapka", cena: 30 },
    { nazwa: "Koszulka", cena: 50 }
];
sklep.forEach((pojedynczyProdukt) => {
    // Łączymy tekst z właściwościami obiektu za pomocą plusów:

    kontenerCeny.innerHTML += "Produkt: " + pojedynczyProdukt.nazwa + " - Cena: " + pojedynczyProdukt.cena + " zł<br>";
});
const kontenerRona = document.querySelector('.sklepRona');
    const owoce = [
        {nazwa: "banan", cena: 30},
        {nazwa: "jablko", cena: 20},
        {nazwa: "arbuz", cena: 50},
    ];
    owoce.forEach((pojedynczyOwoc) => {
        kontenerRona.innerHTML += "Owoc: " + pojedynczyOwoc.nazwa + ",cena:" + pojedynczyOwoc.cena + "zł<br>";
    });

    const przyciskzs = document.querySelector('.zamknij');
    const calyBaner = document.querySelector('.bananybla');
    przyciskzs.addEventListener('click', () => {
        if (calyBaner.style.display === "none"){
            calyBaner.style.display = "block"
    } else {
        calyBaner.style.display = "none"
    }
     

        
    })
    
    
