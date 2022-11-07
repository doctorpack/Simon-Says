

// array contenente i numeri generati casualmente
const numbers = generateNumbers(5, 1, 10);
// alert che mostra i 5 numeri casuali chiamando la funzione
alert(numbers);
// funzione timeout di 30 secondi (NB:CAMBIARE DURATA A 30 SECONDI)
let clock = setTimeout(gameEnd, 30000);

// funzione che verrà eseguita durante i 30 secondi
function game(numbers){
    let guessedNumbers = [];
    for(let i = 0;i < 5;i++){
        let userNumber = parseInt(prompt("inserisci uno dei numeri tra 1 e 10 che hai visualizzato prima"))
        if(numbers.includes(userNumber)){
            guessedNumbers.push(userNumber);
        }
    }
    return guessedNumbers;
}

// funzione che verrà eseguita dopo 30 secondi dalla chiusura dell'alert
function gameEnd() {
    let guessedNumbers = game(numbers);
    alert(`Complimenti hai indovinato${guessedNumbers.length} numeri su 5, i numeri generati erano:${numbers}`);
}

// funzioni che generano 5 numeri casuali,non duplicati e li inserisce nell'array
function generateNumbers(n, min, max){
    let generatedNumbers = [];
    while(generatedNumbers.length < n){
        let number = getRndInteger(min, max);
        if(!generatedNumbers.includes(number)){
            generatedNumbers.push(number);
        }
    }
    return generatedNumbers;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
