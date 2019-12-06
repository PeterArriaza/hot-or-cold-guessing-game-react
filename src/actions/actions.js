// guessList: [],
// guessNumber: 0,
// answer: Math.floor(Math.random() * 100) + 1,
// temperature: "Guess a number b/w 0-100",
// solved: false

export const SET_GUESS_LIST = "SET_GUESS_LIST";
export const setGuessList = guessList => ({
  type: SET_GUESS_LIST,
  guessList
});

export const SET_GUESS_NUMBER = "SET_GUESS_NUMBER";
export const setGuessNumber = guessNumber => ({
  type: SET_GUESS_NUMBER,
  guessNumber
});

export const SET_ANSWER = "SET_GUESS_ANSWER";
export const setAnswer = answer => ({
  type: SET_ANSWER,
  answer
});

export const SET_TEMPERATURE = "SET_TEMPERATURE";
export const setTemperature = temperature => ({
  type: SET_TEMPERATURE,
  temperature
});

export const SET_SOLVED = "SET_SOLVED";
export const setSolved = solved => ({
  type: SET_SOLVED,
  solved
});
