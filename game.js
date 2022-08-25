// If I used some code from outside, you can see on "plan.md" inside the folder plan 😉

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
// let computerHand;
// let userHand;
let computerAceCount = 0;
let userAceCount = 0;

btnHit.disabled = false;
btnStand.disabled = false;

const startGame = () => {
  resetDefaultValues();

  // giveCards(userHand, 2);
  for (let i = 0; i < 2; i++) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    countUserPoints += getValue(card);
    checkAce(countUserPoints, userAceCount);
    userCards.append(cardImg);
    userHand.push(countUserPoints);
    userPoints.textContent = countUserPoints;
  }

  // giveCards(computerHand, 2);
  for (let i = 0; i < 2; i++) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    countComputerPoints += getValue(card);
    checkAce(computerAceCount);
    computerHand.push(countComputerPoints);
    computerCards.append(cardImg);
    computerPoints.textContent = countComputerPoints;
  }

  checkRules();
};

const createDeck = () => {
  //prettier-ignore
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
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
  computerHand = [];
  userHand = [];
};

// const giveCards = (hand, n) => {
//   for (let i = 0; i < n; i++) {
//     hand.push(deck.drawCard());
//   }
// };

const checkRules = () => {
  // countComputerPoints = countPoints(computerHand);
  // countUserPoints = countPoints(userHand);

  if (countComputerPoints > 21) {
    messageDisplay.textContent = `Computer Loose the game!`;
    btnHit.disabled = true;
    btnStand.disabled = true;
  } else if (countUserPoints > 21) {
    messageDisplay.textContent = `You Loose the game!`;
    btnHit.disabled = true;
    btnStand.disabled = true;
  } else if (countComputerPoints === 21 && countUserPoints === 21) {
    messageDisplay.textContent = `It's a draw!`;
  } else if (countComputerPoints === 21) {
    messageDisplay.textContent = `BLACKJACK! Computer win!!`;
  } else if (countUserPoints === 21) {
    messageDisplay.textContent = `BLACKJACK! You win!!`;
    btnHit.disabled = true;
    btnStand.disabled = true;
  } else {
    messageDisplay.textContent = `Do you want HIT or STAND?`;
    if (btnStand.clicked === true) {
      computerCheck();
    }
  }
};

// const updateScreenElement = () => {
//   userCards.setAttribute("data-hand", `cards: ${userHand}`);
//   computerCards.setAttribute("data-hand", `cards: ${computerHand}`);
//   computerPoints.textContent = countComputerPoints;
//   userPoints.textContent = countUserPoints;
// };

const getValue = (card) => {
  let data = card.split("-");
  let value = data[0];

  if (isNaN(value)) {
    if (value === "A") {
      return 11;
    }
    return 10;
  }

  return parseInt(value);
};

const checkAce = (points, handAce) => {
  let acesNumber = 0;

  while (points > 21 && handAce > 0) {
    points -= 10;
    acesNumber--;
  }

  return points;
};

// const countPoints = (hand) => {
//   let acesNumber = 0;
//   let result = 0;
//   for (let i = 0; i < hand.length; i++) {
//     let x = hand[i][0];
//     switch (x) {
//       case "Q":
//       case "K":
//       case "J":
//       case "T":
//         result += 10;
//         break;
//       case "A":
//         result += 11;
//         acesNumber++;
//         break;
//       default:
//         result += parseInt(x);
//         break;
//     }
//   }
//   while (result > 21 && acesNumber > 0) {
//     result -= 10;
//     acesNumber--;
//   }
//   return result;
// };

const resetGame = () => {
  document.location.reload(true);
};

const hitOption = () => {
  let cardImg = document.createElement("img");
  let card = deck.pop();
  cardImg.src = "./cards/" + card + ".png";
  countUserPoints += getValue(card);
  userCards.append(cardImg);
  userPoints.textContent = countUserPoints;

  computerCheck();
  checkRules();

  return countUserPoints;
};

const standOption = () => {
  checkRules();
  btnHit.disabled = true;
  btnStand.disabled = true;
};

const computerCheck = () => {
  if (countComputerPoints < 17) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    countComputerPoints += getValue(card);
    computerHand = countComputerPoints;
    computerCards.append(cardImg);
    computerPoints.textContent = countComputerPoints;
  }
  return countComputerPoints;
};

startGame();

btnHit.addEventListener("click", hitOption);
btnRestart.addEventListener("click", resetGame);
btnStand.addEventListener("click", standOption);
