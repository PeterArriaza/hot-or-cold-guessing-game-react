import React from "react";
import "./App.css";
import TextElement from "./TextElement";
import GuessForm from "./GuessForm";
import GuessHistory from "./GuessHistory";
import { connect } from "react-redux";
import { initialState } from "../reducers/reducers";

import {
  setGuessList,
  setGuessNumber,
  setTemperature,
  setAnswer,
  setSolved
} from "../actions/actions";

export class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   //   this.state = {
  //   //     guessList: [],
  //   //     guessNumber: 0,
  //   //     answer: Math.floor(Math.random() * 100) + 1,
  //   //     temperature: "Guess a number b/w 0-100",
  //   //     solved: false
  // }

  handleSubmit(guessNumber) {
    this.props.dispatch(setGuessNumber({ guessNumber }), () =>
      this.checkGuess()
    );
    // this.setState({ guessNumber }, () => this.checkGuess());
    // const guessList = this.props.guessList;
    this.props.dispatch(
      setGuessList({ guessList: [...this.props.guessList, guessNumber] })
    );
    // this.setState({ guessList: [...guessList, guessNumber] });
  }

  checkGuess() {
    const guess = this.props.guessNumber;
    const difference = Math.abs(guess - this.props.answer);

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
      // this.setState({ solved: true });
      this.props.dispatch(setSolved(true));
    }
    // this.setState({ temperature: feedback });
    this.props.dispatch(setTemperature({ temperature: feedback }));
  }

  reset() {
    console.log("reset pressed");
    // this.setState({
    //   guessList: [],
    //   guessNumber: 0,
    //   temperature: "Guess a number b/w 0-100",
    //   answer: Math.floor(Math.random() * 100) + 1,
    //   solved: false
    // });
    this.props.dispatch(setGuessList(initialState.guessList));
    this.props.dispatch(setGuessNumber(initialState.guessNumber));
    this.props.dispatch(setTemperature(initialState.temperature));
    this.props.dispatch(setAnswer(initialState.answer));
    this.props.dispatch(setSolved(initialState.solved));
  }

  render() {
    // for debugging
    console.log(this.props.answer);
    const guessCount = 0;
    console.log(this.props.guessList);
    // this.props.guessList.length;
    const numberOfGuess = "Guess # " + guessCount;
    const solved = this.props.solved;
    return (
      <main>
        <nav className="nav">
          <TextElement
            type="button"
            text="How to Play"
            onClick={() =>
              alert(
                "The object of the game is to correctly guess the random number between 0-100 that is chosen by the computer.  You will receive feedback based on how close or far your guess is.  To get started, input a number into the guess box below!"
              )
            }
          />
          <TextElement
            type="button"
            text="+ New Game"
            onClick={() => this.reset()}
            className={`${solved ? "highlightNewGame" : ""}`}
          />
        </nav>
        <section className="gameForm">
          <div className="title">
            <TextElement type="text" text="Hot 'N Cold" />
          </div>
          <div className="mainArea">
            <TextElement
              className="result"
              type="text"
              text={this.props.temperature}
            />
            <GuessForm
              className="guessForm"
              text="Enter Guess Here"
              onSubmit={value => this.handleSubmit(value)}
              solved={this.props.solved}
            ></GuessForm>
          </div>
          <div className="guesses">
            <TextElement type="text" text={numberOfGuess} />
            {/* <GuessHistory guesses={this.props.guessList}></GuessHistory> */}
          </div>
        </section>
      </main>
    );
  }
}

export const mapStateToProps = state => ({
  guessList: state.GuessList,
  guessNumber: state.guessNumber,
  temperature: state.temperature,
  answer: state.answer,
  solved: state.solved
});

export default connect(mapStateToProps)(App);
