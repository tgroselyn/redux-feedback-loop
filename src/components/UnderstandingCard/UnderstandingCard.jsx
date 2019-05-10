import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandingCard extends Component {
    
    handleInput = (event) => {
        this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value })
    }

    handleNext = () => {
        this.props.history.push('/support');
    }

    render() {
        return (
            <div>
                <h2>How well are you understanding the content?</h2>
                <label>Understanding?</label>
                <input onChange={this.handleInput} type="number" placeholder="1 - 5" />
                <button onClick={this.handleNext}>NEXT</button>
            </div>
        )
    }
}

export default connect()(UnderstandingCard);