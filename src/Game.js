import React from "react";
import "./Game.css";
import TextElement from "./TextElement.js";
import GuessForm from "./GuessForm.js";
import GuessHistory from "./GuessHistory.js";
import { connect } from "react-redux";
import { resetGame, makeGuess } from "./actions";

export class Game extends React.Component {
  handleSubmit(guessNumber) {
    this.props.dispatch(makeGuess(guessNumber));
  }

  reset() {
    this.props.dispatch(resetGame());
  }

  render() {
    // for debugging
    console.log(this.props);
    const guessCount = this.props.guessList.length;
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
            <GuessHistory guesses={this.props.guessList}></GuessHistory>
          </div>
        </section>
      </main>
    );
  }
}

const mapPropsToState = state => ({
  guessList: state.guessList,
  guessNumber: state.guessNumber,
  temperature: state.temperature,
  answer: state.answer,
  solved: state.solved
});

export default connect(mapPropsToState)(Game);
