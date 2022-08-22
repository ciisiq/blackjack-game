class deck {
  constructor() {}
}

//Function for random the cards before to give
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
