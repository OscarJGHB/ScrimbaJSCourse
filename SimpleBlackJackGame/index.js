import player from "./player.js"

let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let cardArray = []

let messageEl = document.querySelector("#message-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.querySelector("#sum-el")

document.querySelector("#new-card-button-el").addEventListener("click", newCard)
document.querySelector("#start-button-el").addEventListener("click", startGame)

const currentPlayer = new player("Player_1", 100, document.querySelector("#player-stats-el"))

function drawCard(){
    let cardDrawn = Math.floor(Math.random()*13) + 1
    if (cardDrawn === 1) {
        return 11
    }
    else if (cardDrawn > 10 ) {
        return 10
    }
    return cardDrawn
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = drawCard()
    let secondCard = drawCard()
    sum = firstCard + secondCard
    cardArray = []
    cardArray.push(firstCard, secondCard)
    currentPlayer.renderStats()
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    cardArray.forEach(card => {cardsEl.textContent += " " + card})
    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card? :?)"
    } else if (sum === 21) {
        hasBlackJack = true
        currentPlayer.chips += 10
        message = "Woohoo! You've got Blackjack! Press Start Game to Play Again!"
    } else {
        message = "You're out of the game! Press Start Game to Play Again!"
        currentPlayer.chips -= 10
        isAlive = false
    }

    currentPlayer.renderStats()
    messageEl.textContent = message
}

function newCard() {

    if(isAlive && !hasBlackJack){
        let card = drawCard()
        cardArray.push(card)
        sum += card
        renderGame()
    }
    else{
        messageEl.textContent = "Press Start Game To Play!"
    }
}