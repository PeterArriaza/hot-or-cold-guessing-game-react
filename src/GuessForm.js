import React from 'react';
import './GuessForm.css'

class GuessForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.textInput.value = '';
}

    render() {
        return (
            // <div className={props.className}>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        type="number" 
                        placeholder={this.props.text} 
                        max="100"
                        min="0"
                        ref={input => this.textInput = input}
                        onChange={e =>
                            this.setState({value:e.target.value})}>
                    </input>
                    <input type="submit" value="Submit Guess"></input>
                </form>
            // </div>
        );  
    }
}

export default GuessForm;   