// If I used some code from outside, you can see on "plan.md" inside the folder plan 😉

const computerPoints = document.querySelector(".computer-counter");
const computerCards = document.querySelector("#computer-cards");
const userCards = document.querySelector("#user-cards");
const userPoints = document.querySelector(".user-counter");
const btnHit = document.querySelector(".hit");
const btnStand = document.querySelector(".stand");
const btnRestart = document.querySelector(".restart");
const messageDisplay = document.querySelector(".message");

cards.options.width = 130;

let countComputerPoints;
let countUserPoints;
let deck;
let computerHand;
let userHand;

const startGame = () => {
  resetDefaultValues();

  giveCards(userHand, 2);
  giveCards(computerHand, 2);

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
  countComputerPoints = countPoints(computerHand);
  countUserPoints = countPoints(userHand);

  if (countComputerPoints > 21) {
    messageDisplay.textContent = `Computer Loose the game!`;
  } else if (countUserPoints > 21) {
    messageDisplay.textContent = `You Loose the game!`;
  }

  if (countComputerPoints === 21) {
    messageDisplay.textContent = `BLACKJACK! Computer win!!`;
  } else if (countUserPoints === 21) {
    messageDisplay.textContent = `BLACKJACK! You win!!`;
  }

  if (countUserPoints < 21) {
    messageDisplay.textContent = `Do you want HIT or STAND?`;
  }
};

const countPoints = (hand) => {
  // TODO use reduce
  let acesNumber = 0;
  let result = 0;
  for (let i = 0; i < hand.length; i++) {
    let x = hand[i][0];
    switch (x) {
      case "Q":
      case "K":
      case "J":
      case "T":
        result += 10;
        break;
      case "A":
        result += 11;
        acesNumber++;
        break;
      default:
        result += parseInt(x);
        break;
    }
  }
  while (result > 21 && acesNumber > 0) {
    result -= 10;
    acesNumber--;
  }
  return result;
};

const resetGame = () => {
  updateScreenElement();
  resetDefaultValues();
  startGame();
};

const hitOption = () => {
  giveCards(userHand, 1);
  checkRules();
};

const standOption = () => {
  if (countComputerPoints < 21) {
    if (countComputerPoints < 17) {
      hintOption();
    }
  }
};

startGame();

// setup
btnHit.addEventListener("click", hitOption);
btnRestart.addEventListener("click", startGame);
btnStand.addEventListener("click", standOption);
