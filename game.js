// If I used some code from outside, you can see on "plan.md" inside the folder plan 😉

const computerPoints = document.querySelector(".computer-points");
const userPoints = document.querySelector(".user-points");
// console.log(userPoints);

let countComputerPoints = 0;
let countUserPoints = 0;

computerPoints.textContent = countComputerPoints;
userPoints.textContent = countUserPoints;

const getCards = () => [
  {
    image: "images/",
    back: "images/",
    name: "ace",
  },
  {
    image: "images/",
    back: "images/",
    name: "2",
  },
  {
    image: "images/",
    back: "images/",
    name: "face",
  },
  {
    image: "images/",
    back: "images/",
    name: "ace",
  },
  {
    image: "images/",
    back: "images/",
    name: "3",
  },
  {
    image: "images/",
    back: "images/",
    name: "face",
  },
  {
    image: "images/",
    back: "images/",
    name: "ace",
  },
  {
    image: "images/",
    back: "images/",
    name: "4",
  },
  {
    image: "images/",
    back: "images/",
    name: "face",
  },
  {
    image: "images/",
    back: "images/",
    name: "ace",
  },
  {
    image: "images/",
    back: "images/",
    name: "5",
  },
  {
    image: "images/",
    back: "images/",
    name: "face",
  },
];

const randomCards = () => {
  const cards = getCards();
  cards.sort(() => Math.random() - 0.5);
  return cards;
};

// console.log(randomAceCards());

const TestData = [
  {
    image: "images/",
    back: "images/",
    name: "ace",
  },
  {
    image: "images/",
    back: "images/",
    name: "2",
  },
  {
    image: "images/",
    back: "images/",
    name: "face",
  },
];

console.log(TestData[1].name);

const randomAceCards = (min, max) => {
  min = 1;
  max = 11;
  let aceRandom = 0;

  for (let i = 0; i < TestData.length; i++) {
    if (TestData[i].name === "ace") {
      aceRandom = Math.floor(Math.random() * (max + 1 - min)) + min;
    }
  }
  console.log(aceRandom);
  return aceRandom;
};

console.log(randomAceCards());
