import {
  SET_GUESS_LIST,
  SET_GUESS_NUMBER,
  SET_ANSWER,
  SET_TEMPERATURE,
  SET_SOLVED
} from "../actions/actions";

export const initialState = {
  guessList: [],
  guessNumber: 0,
  answer: Math.floor(Math.random() * 100) + 1,
  temperature: "Guess a number b/w 0-100",
  solved: false
};

export const gameReducer = (state = initialState, action) => {
  if (action.type === SET_GUESS_LIST) {
    return Object.assign({}, state, {
      guessList: action.guessList
    });
  } else if (action.type === SET_GUESS_NUMBER) {
    return Object.assign({}, state, {
      guessNumber: action.guessNumber
    });
  } else if (action.type === SET_ANSWER) {
    return Object.assign({}, state, {
      answer: action.answer
    });
  } else if (action.type === SET_TEMPERATURE) {
    return Object.assign({}, state, {
      temperature: action.temperature
    });
  } else if (action.type === SET_SOLVED) {
    return Object.assign({}, state, {
      solved: action.solved
    });
  }
  return state;
};
