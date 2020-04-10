import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentD extends Component {
    render() {
        return (
            <UserConsumer>
                {
                       unm => {
                       return <div>'Component  D' says Hello from '{unm}'</div>
                       }
                   }  
            </UserConsumer>
        )
    }
}

export default ComponentD
