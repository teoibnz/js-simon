// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
let wrapper = document.querySelector('.number-container');

let pcNumberContainer = document.getElementsByClassName("random-number");

let newNumber = [];
for ( let i = 1; i <= 5; i++){
    newNumber = randomInt(1,100)
    console.log(newNumber)
    pcNumberContainer.innerHTML = newNumber;
}
console.log(pcNumberContainer)
// genero una funzione per generare numeri random

function randomInt (minValue, maxValue){
    if ( isNaN (parseInt (minValue)) ||  (isNaN  (parseInt(maxValue)))) {
    console.error("randomInt(min, max) need two numbers as argument");
}
    return (Math.floor(Math.random() * ((maxValue + 1) - minValue) + minValue));
};
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
let userNumber = 0;
function userinput (){
    userNumber = parseInt(prompt("inserisci un numero"))
}

setTimeout(userinput, 3000)

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// if (userNumber.value == pcNumberContainer){
//     console.log(' Hai Vinto!')
// } else {
//     console.log('Hai perso!')
// }