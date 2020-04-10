import React from 'react'

function ChildCount(props) {

    return (
        <div>
            <button onClick={props.inc}>Increment</button>
            <button onClick={props.dec}>Decrement</button>
        </div>
    )
}

export default ChildCount
