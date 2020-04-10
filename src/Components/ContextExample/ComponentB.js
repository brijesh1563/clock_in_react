import React, { Component } from 'react'
import ComponentC from './ComponentC'
import { UserProvider } from './UserContext'
import ComponentD from './ComponentD'

class ComponentB extends Component {
    render() {
        return (
            <div>
                <UserProvider value="Component B">
                    <ComponentD/>
                </UserProvider>
                
            </div>
        )
    }
}

export default ComponentB
