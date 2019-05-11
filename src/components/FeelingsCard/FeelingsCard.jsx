import React, {Component} from 'react';
import {connect} from 'react-redux';
import Review from '../Review/Review';

class FeelingsCard extends Component {
    
    handleInput = (event) => {
        this.props.dispatch({type: 'SET_FEELINGS', payload: event.target.value})
    }

    handleNext = () => {
        this.props.history.push('/understanding');
    }
    
    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <label>Feeling?</label>
                <input onChange={this.handleInput} type="number" placeholder="1 - 5" />
                <button onClick={this.handleNext}>NEXT</button>
                <Review />
            </div>
        )
    }
}

export default connect()(FeelingsCard);