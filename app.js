let firstCard = 11;
let secondCard = 5;

let hasBlackjack = false;
let isAlive = true;
let message = ""
let sum = firstCard + secondCard
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {

    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20) {
        message = "Do you want another card?"    
    } else if(sum === 21) {
        message = "You have got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You have lost!"
        isAlive = false;
    }
    messageEl.textContent = message
}
function newCard() {
    let newCards = 3
    sum += newCards
    startGame()
}
