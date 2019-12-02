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
    return Object.assign({}, state, {
      guessList: [],
      guessNumber: 0,
      answer: Math.floor(Math.random() * 100) + 1,
      temperature: "Guess a number b/w 0-100",
      solved: false
    });
  }

  if (action.type === MAKE_GUESS) {
    return Object.assign({}, state, {});
  }
  return state;
};
