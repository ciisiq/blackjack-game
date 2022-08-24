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

btnHit.disabled = false;
btnStand.disabled = false;

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

const checkRules = () => {
  countComputerPoints = countPoints(computerHand);
  countUserPoints = countPoints(userHand);

  if (countComputerPoints > 21) {
    messageDisplay.textContent = `Computer Loose the game!`;
  } else if (countUserPoints > 21) {
    messageDisplay.textContent = `You Loose the game!`;
    btnHit.disabled = true;
    btnStand.disabled = true;
  }

  if (countComputerPoints === 21 && countUserPoints === 21) {
    messageDisplay.textContent = `It's a draw!`;
  }

  if (countComputerPoints === 21) {
    messageDisplay.textContent = `BLACKJACK! Computer win!!`;
  } else if (countUserPoints === 21) {
    messageDisplay.textContent = `BLACKJACK! You win!!`;
    btnHit.disabled = true;
    btnStand.disabled = true;
  }

  if (countUserPoints < 21) {
    messageDisplay.textContent = `Do you want HIT or STAND?`;
    if (btnStand.clicked === true) {
      giveCards(computerHand, 1);
      updateScreenElement();
    }
  }
};

const updateScreenElement = () => {
  userCards.setAttribute("data-hand", `cards: ${userHand}`);
  computerCards.setAttribute("data-hand", `cards: ${computerHand}`);
  computerPoints.textContent = countComputerPoints;
  userPoints.textContent = countUserPoints;
};

const countPoints = (hand) => {
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
  document.location.reload(true);
};

const hitOption = () => {
  giveCards(userHand, 1);
  updateScreenElement();
  checkRules();

  console.log(userHand);
};

const standOption = () => {
  if (countComputerPoints < 17) {
    giveCards(computerHand, 1);
    updateScreenElement();
  }

  checkRules();
  btnHit.disabled = true;
  btnStand.disabled = true;
};

startGame();

btnHit.addEventListener("click", hitOption);
btnRestart.addEventListener("click", resetGame);
btnStand.addEventListener("click", standOption);
