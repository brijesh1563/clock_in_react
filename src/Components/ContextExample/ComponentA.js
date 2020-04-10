import React, { Component } from 'react'
import ComponentB from './ComponentB'
import { UserProvider } from './UserContext'
import ComponentC from './ComponentC'

class ComponentA extends Component {
    render() {
        return (
            <div>
                <UserProvider value="ComponentA">
                    <ComponentC/>
                </UserProvider> 
            </div>
        )
    }
}

export default ComponentA
