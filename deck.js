class Deck {
  constructor() {
    this.cards =
      // prettier-ignore
      ["AC", "AD", "AH", "AS", "2C", "2D", "2H", "2S","3C", "3D", "3H", "3S","4C", "4D", "4H", "4S", "5C", "5D", "5H", "5S", "6C", "6D", "6H", "6S","7C", "7D", "7H", "7S", "8C", "8D", "8H", "8S", "9C", "9D", "9H", "9S", "TC", "TD", "TH", "TS","KC", "KD", "KH", "KS", "JC", "JD", "JH", "JS", "QC", "QD", "QH", "QS"];
  }

  drawCard() {
    return this.cards.splice(Math.floor(Math.random() * this.cards.length), 1);
  }

  randomAceValue = () => {
    let aceRandom;
    aceRandom = Math.floor(Math.random() < 0.5 ? 1 : 11);
    return aceRandom;
  };
}
