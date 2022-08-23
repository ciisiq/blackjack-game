class deck {
  constructor() {
    this.hand =
      // prettier-ignore
      ["AS","KS","QS","JS","0S","9S","8S","7S","AC","KC","QC","JC","0C","9C","8C","7C","AD","KD","QD","JD","0D","9D","8D","7D","AH","KH","QH","JH","0H","9H","8H","7H"];
  }
}

// prettier-ignore
let deckTest = ["AS","KS","QS","JS","0S","9S","8S","7S","AC","KC","QC","JC","0C","9C","8C","7C","AD","KD","QD","JD","0D","9D","8D","7D","AH","KH","QH","JH","0H","9H","8H","7H"];

//Function for random the cards before to give
const get2Cards = () => {
  const shuffled = deckTest.sort(() => 0.5 - Math.random()).slice(0, 2);
  return shuffled;
};

const get1Card = () => {
  const shuffled = deckTest.sort(() => 0.5 - Math.random()).slice(0, 1);
  return shuffled;
};

// const randomCards = () => {
//   const cards = new deck();
//   cards.hand.sort(() => Math.random() - 0.5);
//   return cards;
// };

//Function for to make the value for Ace cards be 1 or 11;
const randomAceValue = () => {
  let aceRandom;
  aceRandom = Math.floor(Math.random() < 0.5 ? 1 : 11);
  return aceRandom;
};
