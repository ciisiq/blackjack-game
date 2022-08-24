# Plan the Logic game.

## Structure game:

- Header:
  - Logo
  - Rules
- Table game
  - Show 2 cards computer hand (1 face down, 1 face up)
  - Show 2 cards user hand (both face up)
  - Show points for both
  - Show Buttons: Hint and Stand

## Rules game

- You can use 1 deck (52 cards) or more;
- Cards if face = 10;
- Ace cards = 1 or 11(random);
- Cards 2 to 10 have their face value;
- Each turn need to ask user if they want to stand or hint
  - If stand = Stop the game here and check both hands
  - if Hint = +1 card in the hand and also for the computer
    Check if: (both sides) - if points === 21 = Blackjack WIN!; - if points > 21 = Loose game ask if the user want to play again; - if points < 21 = ask again user the options;
- Always give the option for the user play again the game (restart);
