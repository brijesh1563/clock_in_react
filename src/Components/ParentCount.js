import React, { Component } from 'react'
import ChildCount from './ChildCount'

 class ParentCount extends Component {

    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    }

    clickHandler = () => {
        this.componentRef.current.incrementCount();
    }

    myCallback = (dataFromChild) => {
        console.log(dataFromChild);
    }

    render() {
        return(
            <div>
                <ChildCount ref={this.componentRef}  callbackFromParent={this.myCallback} />
                <button onClick={this.clickHandler}>Increment</button>
            </div>
        );
    }
    
}

export default ParentCount
