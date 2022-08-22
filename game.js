// If I used some code from outside, you can see on "plan.md" inside the folder plan 😉

const computerPoints = document.querySelector(".computer-points");
const userPoints = document.querySelector(".user-points");
// console.log(userPoints);

let countComputerPoints = 0;
let countUserPoints = 0;

computerPoints.textContent = countComputerPoints;
userPoints.textContent = countUserPoints;

//Function for random the cards for to give
const randomCards = () => {
  const cards = getCards();
  cards.sort(() => Math.random() - 0.5);
  return cards;
};

//Function for to make the value for Ace cards be 1 or 11;
const randomAceValue = () => {
  let aceRandom;
  aceRandom = Math.floor(Math.random() < 0.5 ? 1 : 11);
  return aceRandom;
};

const checkRules = () => {
  //check points from both if it is more than 21
  if (countComputerPoints > 21) {
    console.log(`Computer Loose the game!`);
    //Ask if user want to play again
  } else if (countUserPoints > 21) {
    console.log(`You Loose the game!`);
    //Ask if user want to play again
  }

  //check points from both if it is == 21
  if (countComputerPoints === 21) {
    console.log(`BLACKJACK! Computer win!!`);
    //Ask if user want to play again
  } else if (countUserPoints === 21) {
    console.log(`BLACKJACK! You win!!`);
    //Ask if user want to play again
  }

  //check points from both if it is < 21
  if (countComputerPoints < 21) {
    //make the logic for the computer(?)
  } else if (countUserPoints < 21) {
    console.log(`Do you want stand or hint?`);
  }
};

console.log(randomAceValue());

// for (let i = 0; i < TestData.length; i++) {
//   if (TestData[i].name === "ace") {
//   }
// }
