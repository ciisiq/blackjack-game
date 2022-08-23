// If I used some code from outside, you can see on "plan.md" inside the folder plan 😉

const computerPoints = document.querySelector(".computer-counter");
const computerCards = document.querySelector("#computer-cards");
const userCards = document.querySelector("#user-cards");
const userPoints = document.querySelector(".user-counter");
const btnHint = document.querySelector(".hint");
const btnStand = document.querySelector(".stand");
const btnRestart = document.querySelector(".restart");

let countComputerPoints;
let countUserPoints;
let deck;
let computerHand;
let userHand;

const startGame = () => {
  resetDefaultValues();

  giveCards(userHand, 2);
  giveCards(computerHand, 2);

  countPoints();
  checkRules();
  updateScreenElement();
};

const resetDefaultValues = () => {
  countComputerPoints = 0;
  countUserPoints = 0;
  deck = new Deck();
  computerHand = [];
  userHand = [];
};

const giveCards = (hand, n) => {
  for (let i = 0; i < n; i++) {
    hand.push(deck.drawCard());
  }
};

const updateScreenElement = () => {
  userCards.setAttribute("data-hand", `cards: ${userHand}`);
  computerCards.setAttribute("data-hand", `cards: ${computerHand}`);
  computerPoints.textContent = countComputerPoints;
  userPoints.textContent = countUserPoints;
};

const checkRules = () => {
  if (countComputerPoints > 21) {
    console.log(`Computer Loose the game!`);
  } else if (countUserPoints > 21) {
    console.log(`You Loose the game!`);
  }

  if (countComputerPoints === 21) {
    console.log(`BLACKJACK! Computer win!!`);
  } else if (countUserPoints === 21) {
    console.log(`BLACKJACK! You win!!`);
  }

  if (countComputerPoints < 21) {
    if (countComputerPoints < 17) {
      btnHint.addEventListener("click", hintButton);
    } else {
      btnStand.addEventListener("click", StandButton);
    }
  } else if (countUserPoints < 21) {
    console.log(`Do you want stand or hint?`);
    btnHint.addEventListener("click", hintButton);
    btnStand.addEventListener("click", StandButton);
  }
};

const countPoints = () => {
  if (deck.cards[0] === "Q" || deck.cards[0] === "K" || deck.cards[0] === "J") {
    countComputerPoints += computerPoints.textContent = 10;
    countUserPoints += userPoints.textContent = 10;
  } else if (deck.cards[0] === "A") {
    let aceValue = deck.randomAceValue();
    countComputerPoints += computerPoints.textContent = aceValue;
    countUserPoints += userPoints.textContent = aceValue;
  } else {
    countComputerPoints += computerPoints.textContent = deck.cards[0];
    countUserPoints += userPoints.textContent = deck.cards[0];
  }
};

const resetGame = btnRestart.addEventListener("click", () => {
  startGame();
});

const hintOption = btnHint.addEventListener("click", () => {
  giveCards(userHand, 1);
  checkRules();
});

const StandOption = btnStand.addEventListener("click", () => {
  checkRules();
});

startGame();
