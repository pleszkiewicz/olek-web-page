

// 1. Obiekty muzyczne zawsze na samej górze pliku
const muzyka = new Audio('websites-music/Enemy.mp3'); 
const inmuzyka = new Audio('websites-music/The Devil Made Me Do It.mp3'); 

// 2. Łapanie przycisków z HTML
const wlaczMuzyke = document.querySelector('.music-button');
const wlaczInnaMuzyke = document.querySelector('.buttonms');

// 3. Funkcja dla PIERWSZEGO przycisku (Muzyka: "brum")
const przelaczMuzyke = () => {
    // Sprawdzamy czy pierwsza piosenka stoi
    if (muzyka.paused) {
        // Zanim włączysz "brum", ucisz i zresetuj "hej!"
        inmuzyka.pause();
        inmuzyka.currentTime = 0;
        wlaczMuzyke.innerText = `spauzuj "Enemy"` 
        wlaczInnaMuzyke.innerText = `włącz "the devil made me do it"`
        
        muzyka.play();
    } else {
        muzyka.pause();
        wlaczMuzyke.innerText = `włącz "Enemy"`
    }
};

// 4. Funkcja dla DRUGIEGO przycisku (Muzyka: "hej!")
const przelaczmusic = () => {
    // Sprawdzamy czy druga piosenka stoi
    if (inmuzyka.paused) {
        // Zanim włączysz "hej!", ucisz i zresetuj "brum"
        muzyka.pause();
        muzyka.currentTime = 0; 
        wlaczInnaMuzyke.innerText = `spauzuj "the devil made me do it"`
        inmuzyka.play();
        wlaczMuzyke.innerText = `włącz "Enemy"`
    } else {
        inmuzyka.pause();
        wlaczInnaMuzyke.innerText = `włącz "the devil made me do it"`
    }
};

// 5. Podpięcie funkcji pod przyciski
wlaczMuzyke.addEventListener('click', () => {
    przelaczMuzyke();                // Odpala lub pauzuje pierwszą piosenkę
});

wlaczInnaMuzyke.addEventListener('click', przelaczmusic);


const FromInternet = async () => {
    const link = await fetch('https://dummyjson.com/users');
    const format = await link.json();
    const kont3 = document.querySelector('.spaceStation');
    kont3.innerHTML = ""
    
    format.users.forEach((element3) => {
        if (element3.eyeColor === "Green") {
            kont3.innerHTML += `<p> 👤 Osoba: ${element3.firstName} ${element3.lastName} (Oczy: ${element3.eyeColor})</p>`;
        }
    });
    kont3.innerHTML += `
    <h2> misja kosmiczna </h2>
        <p> tralala </p>
        `
};

FromInternet();

const przycisk = document.querySelector('.change')
const przelaczMotyw = () =>{
    const doPstryczka = document.querySelector('.spaceStation')
    doPstryczka.classList.toggle('noc')
}
przycisk.addEventListener('click', () => {
    przelaczMotyw()

})

const pobierzAgentow = async () => {
    const dane = await fetch('https://dummyjson.com/users');
    const odp = await dane.json();
    const kont = document.querySelector('.baza-szpiegow');
    kont.innerHTML = "";
    odp.users.forEach((element) => {
        if(element.eyeColor === "Blue"){
            kont.innerHTML += `<p>Osoba: ${element.firstName} ${element.lastName}(Oczy: ${element.eyeColor})</p>`
        } 

        
    })
    kont.innerHTML +=`
    <h2> Status bazy: Bezpieczny</h2>.
`

    } 
    pobierzAgentow()
    const przycisk2 = document.querySelector('.alert-btn')
    const przelacz = () => {
        const bazaSzpiegow = document.querySelector('.baza-szpiegow');
        bazaSzpiegow.classList.toggle('tryb-alarmowy')
    }
    przycisk2.addEventListener('click', () => { 
        przelacz()
    })
