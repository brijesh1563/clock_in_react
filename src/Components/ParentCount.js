import React, { Component } from 'react'
import ChildCount from './ChildCount'

 class ParentCount extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    } 

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    } 

    render() {
        return (
            <div>
                <p>Count = {this.state.count}</p>
                <ChildCount inc={() => this.incrementCount()} dec={() => this.decrementCount()}/>
            </div>
        )
    }
}

export default ParentCount
