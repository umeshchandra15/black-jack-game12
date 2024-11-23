let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let massage = "";
let massageEl = document.getElementById("massage-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }

}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    massage = " do you want to draw a new card?";
  }
  else if (sum === 21) {
    massage = "whooo! you've got Blackjack";  
    hasBlackJack = true
  }
  else {
    massage = "you're out of  the game!";
    isAlive = false;
  }
  massageEl.textContent = massage;

}
function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard)
    renderGame();

  }
}
