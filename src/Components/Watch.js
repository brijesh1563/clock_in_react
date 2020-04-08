import React, {Component} from 'react'

class Watch extends Component{

    constructor(){
        super()

        this.state = {
            Time: new Date()
        }
    }

    currentTime(){
        this.setState({
            Time: new Date()
        })
    }

    componentWillMount(){
        setInterval(() => this.currentTime() ,1000)
    }


    render(){
        return(
            <div>
                <p>Current Time => {this.state.Time.toLocaleTimeString()} </p>
            </div>
        )
    }
}

export default Watch;