const computerPoints = document.querySelector(".computer-counter");
const computerCards = document.querySelector("#computer-cards");
const userCards = document.querySelector("#user-cards");
const userPoints = document.querySelector(".user-counter");
const btnHit = document.querySelector(".hit");
const btnStand = document.querySelector(".stand");
const btnRestart = document.querySelector(".restart");
const messageDisplay = document.querySelector(".message");

let countComputerPoints;
let countUserPoints;
let deck;
let userHand = [];
let computerHand = [];

btnHit.disabled = false;
btnStand.disabled = false;

const startGame = () => {
  resetDefaultValues();

  //Give computer 2 cards
  giveCard(computerCards, computerHand, 2);
  countComputerPoints = countPoints(computerHand);
  computerPoints.textContent = countComputerPoints;

  // Give user 2 cards
  giveCard(userCards, userHand, 2);
  countUserPoints += countPoints(userHand);
  userPoints.textContent = countUserPoints;

  checkRules();
};

const giveCard = (player, hand, n) => {
  for (let i = 0; i < n; i++) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    hand.push(card);
    cardImg.src = "./cards/" + card + ".png";
    player.append(cardImg);
  }
};

const createDeck = () => {
  //prettier-ignore
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K"];
  let suits = ["C", "D", "H", "S"];
  deck = [];

  for (let i = 0; i < values.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push(values[i] + "-" + suits[j]);
    }
  }
};

const suffleDeck = () => {
  for (let i = 0; i < deck.length; i++) {
    let random = Math.floor(Math.random() * deck.length);
    let temp = deck[i];

    deck[i] = deck[random];
    deck[random] = temp;
  }
};

const resetDefaultValues = () => {
  countComputerPoints = 0;
  countUserPoints = 0;
  createDeck();
  suffleDeck();
};

const checkRules = () => {
  if (countUserPoints > 21 && countComputerPoints > 21) {
    messageDisplay.textContent = `Both lost the game, try again!`;
    disableBtn();
  } else if (countUserPoints > 21) {
    messageDisplay.textContent = `You lost the game, try again!`;
    disableBtn();
  } else if (countComputerPoints > 21) {
    messageDisplay.textContent = `You win! Computer > 21 points!`;
    disableBtn();
  } else if (countComputerPoints === 21 && countUserPoints === 21) {
    messageDisplay.textContent = `It's a draw!`;
  } else if (countComputerPoints === 21) {
    messageDisplay.textContent = `BLACKJACK! Computer win!!`;
    disableBtn();
  } else if (countUserPoints === 21) {
    messageDisplay.textContent = `BLACKJACK! You win!!`;
    disableBtn();
  } else {
    messageDisplay.textContent = `Do you want HIT or STAND?`;
  }
};

const disableBtn = () => {
  btnHit.disabled = true;
  btnStand.disabled = true;
};

const countPoints = (cards) => {
  let acesNumber = 0;
  let result = 0;

  for (let i = 0; i < cards.length; i++) {
    let data = cards[i].split("-");
    let value = data[0];

    switch (value) {
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
        result += parseInt(value);
        break;
    }
  }

  while (result > 21 && acesNumber > 0) {
    result = result - 10;
    acesNumber--;
  }

  return result;
};

const resetGame = () => {
  document.location.reload(true);
};

const hitOption = () => {
  giveCard(userCards, userHand, 1);
  countUserPoints = countPoints(userHand);
  userPoints.textContent = countUserPoints;

  checkRules();
};

const standOption = () => {
  computerCheck();

  if (countUserPoints > countComputerPoints || countComputerPoints > 21) {
    messageDisplay.textContent = `😍😍 You win!!`;
  } else if (countComputerPoints > countUserPoints) {
    messageDisplay.textContent = `Oh noo.. 😭😭 Computer win!`;
  } else if (countComputerPoints === countUserPoints) {
    messageDisplay.textContent = `It's a draw!`;
  }

  disableBtn();
};

const computerCheck = () => {
  if (countComputerPoints < 17) {
    giveCard(computerCards, computerHand, 1);
    countComputerPoints = countPoints(computerHand);
    computerPoints.textContent = countComputerPoints;
  }
};

startGame();

btnHit.addEventListener("click", hitOption);
btnRestart.addEventListener("click", resetGame);
btnStand.addEventListener("click", standOption);
