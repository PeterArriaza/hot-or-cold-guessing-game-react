import React from 'react';
import './App.css';
import TextElement from './TextElement.js';
import GuessForm from './GuessForm.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        guessList: [],
        guessNumber: 0,
        temperature: "cold"
        // freezing
        // ice cold
        // colder
        // cold
        // lukewarm
        // warm
        // hot
        // super hot
        // burning!
                
    };
  }

  handleSubmit(value) {
    console.log(value);
  }

  render() {  
    return (
      <main>
        <header className="header">
          <TextElement type="button" text="How to Play" />
          <TextElement type="button" text="+ New Game"/>
        </header>
        <section className="gameForm">
          <div className="title">
            <TextElement type="text" text="Hot 'N Cold"/>
          </div>
          <div className="mainArea">
            {/* implement stateful input of text value for hot or cold */}
            <TextElement className="result" type="text" text="super hot"/>
            <GuessForm className="guessForm"text="Enter Guess Here" onSubmit={value => this.handleSubmit(value)}></GuessForm>
          </div>
          <div className="guesses">
            <TextElement type="text" text="Guess # "/>
          </div>
        </section>
      </main>
    );
  }
}

