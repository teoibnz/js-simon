// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
let wrapper = document.querySelector('.number-container');

let newNumber = [];
for ( let i = 1; i <= 5; i++){
    newNumber = randomInt(1,100)
    console.log(newNumber)
    let numberBox = document.createElement('div');
    numberBox.innerHTML = newNumber;
    numberBox.classList.add('random-number');
    wrapper.appendChild(numberBox)

}
// genero una funzione per generare numeri random

function randomInt (minValue, maxValue){
    if ( isNaN (parseInt (minValue)) ||  (isNaN  (parseInt(maxValue)))) {
    console.error("randomInt(min, max) need two numbers as argument");
}
    return (Math.floor(Math.random() * ((maxValue + 1) - minValue) + minValue));
};
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
let userNumber = [];
let userScore = document.getElementById('user-score')

let finalScore = 0;


function userinput (){
    for ( let i = 0; i < 5; i++){
        userNumber = parseInt(prompt("inserisci un numero"))
        console.log(userNumber)
        let userNumberBox = document.createElement('div');
        userNumberBox.innerHTML = userNumber;
        userNumberBox.classList.add('random-number');
        userScore.appendChild(userNumberBox)
        if (newNumber.value === userNumberBox.value){
            finalScore++
        } else {
            console.log('Questo l\'hai toppato')
        }
    document.getElementById('user-score').innerHTML = ' il tuo punteggio è ' + finalScore;

    }
}

function clearNumbers (){
    wrapper.innerHTML = '';

}

setTimeout(userinput, 3000)
setTimeout(clearNumbers, 2900)

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
