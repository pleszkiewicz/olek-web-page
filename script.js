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
        kontenerCen.innerHTML += `produkt ${jednacena} zł (drogi!)<br>`
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

    const nowyParagraf = document.createElement("p");

// 2. Dodajemy do niego tekst
nowyParagraf.textContent = "Uwaga! To jest ważne powiadomienie.";
nowyParagraf.classList.add("alert")
document.body.appendChild(nowyParagraf)
const kontenerImiona = document.querySelector('.imionabla');
const imiona = ["jan", "marta", "aneczka"];

// Dla każdego imienia: weź literę na pozycji 0, powiększ ją i doklej resztę od pozycji 1
const poprawneImiona = imiona.map(imie => imie[0].toUpperCase() + imie.slice(1));
    poprawneImiona.forEach((pojimie) => {
        kontenerImiona.innerHTML += `imie na wielka litere ${pojimie} <br>`
    })
const kontenerWynikow = document.querySelector('.tablica-wynikow');
const punktyRunda1 = [10, 50, 100];
const podwpkt = punktyRunda1.map(x => x * 2);
podwpkt.forEach((pojpkt) => {
    kontenerWynikow.innerHTML += `nowy wynik: ${pojpkt}<br>`
})

const kontenerTanie = document.querySelector('.tanie-produkty');
const ceny1 = [15, 80, 25, 120, 10, 200];

const newtablica = ceny1.filter(newceny =>  newceny <= 40)

newtablica.forEach((tanieceny) => {
    kontenerTanie.innerHTML += `tanie ceny: ${tanieceny}<br>`
})
const kontenerPromocji = document.querySelector('.super-promki');
const cenyEuro = [10, 30, 50, 5];
const drogieZlotowki = cenyEuro
    .filter(cena => cena > 20)
    .map(cena => cena * 4);

// 2. I od razu wrzucamy te piękne ceny w PLN na stronę!
drogieZlotowki.forEach((cenaPLN) => {
    kontenerPromocji.innerHTML += `Produkt premium kosztuje: ${cenaPLN} zł<br>`;
});

const listaButow = document.querySelector('.promocja-buty');
const sklepButy = [
    { nazwa: "Nike Air", cena: 60 },
    { nazwa: "Adidas Zap", cena: 20 },
    { nazwa: "Puma Speed", cena: 100 },
    { nazwa: "Trampki NoName", cena: 15 }
];

    const drogieButyPLN = sklepButy
    .filter(but => but.cena > 40) // Zostawia tylko Nike i Pumę
    .map(but => {
        return {
            nazwa: but.nazwa,
            cenaPLN: but.cena * 4
        };
    });
    drogieButyPLN.forEach((pojbut) => {
        listaButow.innerHTML += `ten but premium "${pojbut.nazwa}" kosztuje ${pojbut.cenaPLN} zł<br>`
    })
    const kielbaski = document.querySelector('.baner-kielbaski');
    kielbaski.style.display = "none";
    setTimeout(() => {
        kielbaski.style.display = "block";
    }, 5000);

  const calyLicznik = document.querySelector('.licznik'); 
let czas = 10;
const mojStoper = setInterval(() => {
    czas = czas - 1;
    // Dopóki odliczamy, musimy doklejać słowo "sekund!" plusami
    calyLicznik.innerHTML = "Pozostało czasu: " + czas + " sekund!";
    if (czas === 0) {
        clearInterval(mojStoper);
        // 2. Nadpisujemy CAŁY tekst jednym czystym komunikatem:
        calyLicznik.innerHTML = "Koniec promocji!"; 
    }
}, 1000);

const licznik2 = document.querySelector('.odliczanie');
    let czas2 = 5;
    const nowystoper = setInterval(() => {
        
        if (czas2 === 5){
            licznik2.innerHTML = "pozostało " + czas2 + " sekund!"
        } else if (czas2 >= 2 && czas2 <= 4){
            licznik2.innerHTML = "pozostały " + czas2 + " sekundy!"
        } else {
            licznik2.innerHTML = "pozostała " + czas2 + " sekunda!"
        }
        czas2 = czas2 - 1;
        if (czas2 === 0){
        clearInterval(nowystoper);
        licznik2.innerHTML += "Koniec promocji! idź do domu"; 
        }
    }, 1000); 
    const stworzNapis = (nowyTekst) => {
    const cenaa = document.querySelector('.klasa-masa');
    cenaa.innerHTML += nowyTekst;
};

// 2. Wywołania testowe (to napisałeś super!)
stworzNapis("kiełbaski są smaczne<br>");
stworzNapis("banany na rany!");




const parNiepar = document.querySelector('.sthsostrong');

for (let i = 1; i <= 20; i++){
    const nowaLina = document.createElement('p');

    if (i % 2 === 0){
        nowaLina.innerHTML = i + ". hejo mordo (parzysta)";
        nowaLina.classList.add('parz');
    } else {
        nowaLina.innerHTML = i + ". hejo mordo (nieparzysta)";
        nowaLina.classList.add('nieparz');
    }

    parNiepar.appendChild(nowaLina);
}

const pobierzDaneZInternetu = async () => {
    
    // 2. Wysyłamy prośbę do sieci i CZEKAMY (await) na odpowiedź
    const odpowiedz = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // 3. Zamieniamy surowe dane z sieci na czystą tablicę JS i znowu CZEKAMY
    const uzytkownicy = await odpowiedz.json();
    
    // Zobaczmy w konsoli przeglądarki (F12), czy dane dopłynęły!
    console.log(uzytkownicy);

    // 4. Łapiemy nasz ulubiony kontener i wrzucamy dane na stronę!
    const kontener = document.querySelector('.anythingelse');
    
    // Czyścimy stary tekst "hejo mordo", żeby zrobić miejsce
    kontener.innerHTML = "<h2>Użytkownicy pobrani z sieci:</h2>"; 
    
    // Przelatujemy pętlą po 10 użytkownikach z internetu!
    uzytkownicy.forEach((user) => {
        kontener.innerHTML += `👤 Imię: <b>${user.name}</b>, Email: ${user.email} <br>`;
    });
};

// 5. Odpalamy funkcję!
pobierzDaneZInternetu();

const odtworzDzwiek = () => {
    // 🎵 Ścieżka relatywna – wrzuć plik mp3 obok swoich plików HTML/JS!
    const muzyka = new Audio('Enemy.mp3'); 
    muzyka.play();
};

const przyciskfunc = document.querySelector('.przyc');

// 🎛️ Łączymy obie akcje w jedno kliknięcie!
przyciskfunc.addEventListener('click', () => {
    stworzNapis("stworzyłem napis"); // 📝 Pierwsza akcja
                    // 🎵 Druga akcja: wywołujemy całą funkcję dźwięku!
});
const wlaczMuzyke = document.querySelector('.music-button');
wlaczMuzyke.addEventListener('click', () => {
    odtworzDzwiek()
})
const devil = () =>{
    const inmuzyka = new Audio('The Devil Made Me Do It.mp3');
    inmuzyka.play();
};
const wlaczInnaMuzyke = document.querySelector('.buttonms');
wlaczInnaMuzyke.addEventListener('click', () => {
    devil()
})
