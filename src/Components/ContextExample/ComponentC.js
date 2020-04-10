import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ComponentC extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                {
                       username => {
                       return <div>'Component C ' says Hello from '{username}'</div>
                       }
                   }   
                </UserConsumer>
                
            </div>
        )
    }
}

export default ComponentC
