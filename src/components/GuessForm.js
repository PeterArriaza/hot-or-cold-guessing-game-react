import React from 'react';
import './GuessForm.css'

export default class GuessForm extends React.Component {

handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.textInput.value);
    this.textInput.value = '';
}

    render() {
        if (this.props.solved === true) {
        return (
                <form className={this.props.className} onSubmit={e => this.handleSubmit(e)}>
                  
                </form>
        )}
        else {
            return(
                <form className={this.props.className} onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        type="number" 
                        placeholder={this.props.text} 
                        max="100"
                        min="0"
                        ref={input => this.textInput = input}
                    >
                    </input>
                    <input type="submit" value="Submit Guess"></input>
                </form>
            )}  
    }
}

