import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review';

class SupportCard extends Component {
    
    handleInput = (event) => {
        this.props.dispatch({ type: 'SET_SUPPORT', payload: event.target.value })
    }

    handleNext = () => {
        this.props.history.push('/comments');
    }

    render() {
        return (
            <div>
                <h2>How well are you being supported?</h2>
                <label>Support? (1 - 5)</label>
                <input onChange={this.handleInput} type="number" />
                <button onClick={this.handleNext}>NEXT</button>
                <Review />
            </div>
        )
    }
}

export default connect()(SupportCard);