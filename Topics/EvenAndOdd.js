import React, { Component } from 'react'

export default class EvenAndOdd extends Component {
    handleChange(val) {
        this.setState({ userInput: val })
    }
    assignEvenAndOdds(userInput) {
        console.log('click')
        let arr = userInput.split(',')
        let evens = []
        let odds = []
        for (let i = 0 ; i < arr.length ; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i]))
            } else {
                odds.push(parseInt(arr[i]))
            }
        }
        this.setState({ evenArray: evens, oddArray: odds})
    }
    constructor() {
        super()
        
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput)}}> Split </button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) }</span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}