/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]
Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.
Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?
 *
 */ 

let images = ["img/01.jpg , img/02.jpg , img/03.jpg , img/04.jpg , img/05.jpg"]

let bottomCarosello;

let bottomCaroselloContainer = document.querySelector("div.my-thumbnails");

for(i = 0; i < images.length; i++){
    console.log(images)
    bottomCarosello+=`<div class="botton-img-container">
                           <img class="my-img" src="${images[i]}" alt="">
                      </div>`
}

bottomCaroselloContainer.innerHTML += bottomCarosello;
