import { RESET_GAME, MAKE_GUESS } from "./actions";

const initialState = {
  guessList: [],
  guessNumber: 0,
  answer: Math.floor(Math.random() * 100) + 1,
  temperature: "Guess a number b/w 0-100",
  solved: false
};

export default (state = initialState, action) => {
  if (action.type === RESET_GAME) {
    console.log("reset reducer action");
    return Object.assign({}, state, {
      guessList: [],
      guessNumber: 0,
      answer: Math.floor(Math.random() * 100) + 1,
      temperature: "Guess a number b/w 0-100",
      solved: false
    });
  }

  if (action.type === MAKE_GUESS) {
    const guess = action.guess;
    const difference = Math.abs(guess - state.answer);
    let solved = state.solved;

    let feedback;
    if (difference >= 40) {
      feedback = "You're Freezing.....";
    } else if (difference >= 35) {
      feedback = "You're Ice Cold....";
    } else if (difference >= 25) {
      feedback = "You're Colder...";
    } else if (difference >= 15) {
      feedback = "You're Cold.";
    } else if (difference >= 10) {
      feedback = "You're Warm.";
    } else if (difference >= 7) {
      feedback = "You're Hot!";
    } else if (difference >= 3) {
      feedback = "You're Super Hot!!";
    } else if (difference >= 1) {
      feedback = "You're Burning!!!";
    } else {
      feedback = "You got it!";
      solved = true;
    }
    return Object.assign({}, state, {
      temperature: feedback,
      guessList: [...state.guessList, guess],
      solved
    });
  }
  return state;
};
