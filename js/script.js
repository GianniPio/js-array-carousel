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

// variabili vuote per la stampa

let bigImg = "";
let smallImg = "";

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
    document.getElementsByClassName("big_img")[0].classList.add("active");

    smallImg += `
        <div class="small_img">
            <img src="${items[i]}" alt="${title[i]}">
        </div>
    `

    small.innerHTML = smallImg;
    document.getElementsByClassName("small_img")[0].classList.add("active");
}