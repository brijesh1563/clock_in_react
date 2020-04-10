import React, { Component } from 'react'

class ChildCount extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        },
        () => {
            this.props.callbackFromParent(this.state.count)
        }
        )
       
    } 

    render() {
        return (
            <div>
                <p>Count = {this.state.count}</p>
            </div>
        )
    }
}

export default ChildCount;
