import React from 'react';
import './App.css';
import TextElement from './TextElement.js';
import GuessForm from './GuessForm.js';
import GuessHistory from './GuessHistory.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        guessList: [],
        guessNumber: 0,
        answer: Math.floor(Math.random() * 100) + 1,
        temperature: "Guess a number b/w 0-100",
        solved: false      
    };
  }

  handleSubmit(guessNumber) {
    this.setState({guessNumber}, () => 
      this.checkGuess()
    );
    const guessList = this.state.guessList;

    this.setState({guessList: [...guessList, guessNumber] });
  }

  checkGuess() {
    const guess = this.state.guessNumber;
    const difference = Math.abs(guess - this.state.answer);

    let feedback;
    if (difference >= 40) {
      feedback = 'You\'re Freezing.....';
    } else if (difference >= 35) {
      feedback = 'You\'re Ice Cold....';
    } else if (difference >= 25) {
      feedback = 'You\'re Colder...';
    } else if (difference >= 15) {
      feedback = 'You\'re Cold.';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 7) {
      feedback = 'You\'re Hot!';
    } else if (difference >= 3) {
      feedback = 'You\'re Super Hot!!';
    } else if (difference >= 1) {
      feedback = 'You\'re Burning!!!';
    } else {
      feedback = 'You got it!';
      this.setState({solved: true});
        
    }    
    this.setState({temperature: feedback});
  }

  reset() {
    console.log('reset pressed');
    this.setState({
      guessList: [],
      guessNumber: 0,
      temperature: 'Guess a number b/w 0-100',
      answer: Math.floor(Math.random() * 100) + 1,
      solved: false
    });

  }


  render() { 
      // for debugging
    console.log(this.state.answer);
    const guessCount = this.state.guessList.length;
    const numberOfGuess = ('Guess # ' + guessCount);
    return (
      <main>
        <nav className="nav">
          <TextElement type="button" text="How to Play" onClick={()=> alert(
            'The object of the game is to correctly guess the random number between 0-100 that is chosen by the computer.  You will receive feedback based on how close or far your guess is.  To get started, input a number into the guess box below!'
          )}/>
          <TextElement type="button" text="+ New Game" onClick={() => this.reset()} ref={input => this.textInput = input}
/>
        </nav>
        <section className="gameForm">
          <div className="title">
            <TextElement type="text" text="Hot 'N Cold"/>
          </div>
          <div className="mainArea">
            <TextElement className="result" type="text" text={this.state.temperature}/>
            <GuessForm className="guessForm" text="Enter Guess Here" 
                onSubmit={value => this.handleSubmit(value)} 
                solved={this.state.solved}>
                </GuessForm>
            </div>
          <div className="guesses">
            <TextElement type="text" text={numberOfGuess}/>
            <GuessHistory guesses={this.state.guessList}></GuessHistory>
          </div>
        </section>
      </main>
    );
  }
}

