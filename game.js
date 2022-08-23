// If I used some code from outside, you can see on "plan.md" inside the folder plan 😉

const computerPoints = document.querySelector(".computer-points");
const userPoints = document.querySelector(".user-points");
const btnHint = document.querySelector(".hint");
const btnStand = document.querySelector(".stand");
const btnRestart = document.querySelector(".restart");
const computerCards = document.querySelector("#computer-cards");
const userCards = document.querySelector("#user-cards");

let countComputerPoints = 0;
let countUserPoints = 0;

const startGame = () => {
  computerPoints.textContent = countComputerPoints;
  userPoints.textContent = countUserPoints;

  //Function for to update the count points;
  const countPoints = () => {
    if (getCards.name === "face") {
      countComputerPoints += computerPoints.textContent = 10;
      countUserPoints += userPoints.textContent = 10;
    } else if (getCards.name === "ace") {
      let aceValue = randomAceValue();
      countComputerPoints += computerPoints.textContent = aceValue;
      countUserPoints += userPoints.textContent = aceValue;
    } else {
      countComputerPoints += computerPoints.textContent = getCards.value;
      countUserPoints += userPoints.textContent = getCards.value;
    }
  };

  const hintButton = () => {
    // give more 1 card
    checkRules();
  };

  const StandButton = () => {
    checkRules();
  };

  // Fucntion with the rules of the game
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
      if (countComputerPoints < 17) {
        btnHint.addEventListener("click", hintButton);
      } else {
        btnStand.addEventListener("click", StandButton);
      }
    } else if (countUserPoints < 21) {
      console.log(`Do you want stand or hint?`);
      // If Hint call function Hint;
      btnHint.addEventListener("click", hintButton);
      //Else call function Stand;
      btnStand.addEventListener("click", StandButton);
    }
  };
};

startGame();

// restart the game
const resetGame = () => {
  startGame();
};

btnRestart.addEventListener("click", resetGame);
