// array 

// array delle immagini
const items = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];

// array del titolo
const title = ['Svezia','Svizzera','Gran Bretagna','Germania','Paradise']


// array del testo
const text = ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.','Lorem ipsum','Lorem ipsum, dolor sit amet consectetur adipisicing elit.','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,','Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// variabili generali per il collegamento con HTML

const big = document.querySelector(".big");
const small = document.querySelector(".small");
const back = document.querySelector(".back");
const next = document.querySelector(".next");


// variabili vuote per la stampa

let bigImg = "";
let smallImg = "";

// ciclo for per stampare gli elementi in HTML per ogni indice dell'array items

for ( i = 0; i < items.length; i++) {

    bigImg += `
        <div class="big_img">
            <img src=${items[i]} alt=${title[i]}>
            <div class="text">
                <h3>${title[i]}</h3>
                <p>${text[i]}</p>
            </div>
        </div>
    `;

    big.innerHTML = bigImg;
    
    smallImg = `
        <div class="small_img">
            <img src="${items[i]}" alt="${title[i]}">
        </div>
    `
    small.innerHTML += smallImg;

    // aggiunga classe active
    document.getElementsByClassName("big_img")[0].classList.add("active");
    document.getElementsByClassName("small_img")[0].classList.add("active");
}




let indexActive = 0; /* per contare la posizione in cui si trova active nell'array*/


// click tasto next
document.querySelector(".next").addEventListener("click",

    // al click del bottone
    function(){
        // incremento subito indexActive
        ++indexActive;
        
        // controllo che il contatore abbia superato la lista, in quel torna indietro
        if (indexActive == 5) {

            indexActive = 0;
        
        }

        // rimuovo la classe "active" dall'immagine centrale attuale e la aggiungo a quella successiva
        document.querySelector(".big_img.active").classList.remove("active");
        document.getElementsByClassName("big_img")[indexActive].classList.add("active");

        // rimuovo la classe "active" dall' immagine centrale attuale e la aggiungo a quella successiva
        document.querySelector(".small_img.active").classList.remove("active");
        document.getElementsByClassName("small_img")[indexActive].classList.add("active");


        
    }
)

// click tasto back
document.querySelector(".back").addEventListener("click",

    // al click del bottone back
    function() {

            // decremento subito il contatore
        --indexActive;

        // verifico se il contatore è inferiore a zero, in quel caso torna indietro iniziando dal valore più alto
        if (indexActive == -1 ) {

            indexActive = 4;
        
        }

        // rimuovo la class active dall'immagine centrale attuale e la aggiungo a quella precedente
        document.querySelector(".big_img.active").classList.remove("active");
        document.getElementsByClassName("big_img")[indexActive].classList.add("active");

        // rimuovo la class active dall'immagine laterale attuale e la aggiungo a quella precedente
        document.querySelector(".small_img.active").classList.remove("active");
        document.getElementsByClassName("small_img")[indexActive].classList.add("active");

    }
)

