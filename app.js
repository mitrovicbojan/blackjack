let firstCard = 6;
let secondCard = 9;
let hasBlackjack = false;
let isAlive = true;
let message = ""
let sum = firstCard + secondCard;


function startGame() {
    if(sum <= 20) {
        message = "do you want another card?"    
    } else if(sum === 21) {
        message = "you have got Blackjack!";
        hasBlackjack = true;
    } else {
        message = "You have lost!"
        isAlive = false;
    }
}
