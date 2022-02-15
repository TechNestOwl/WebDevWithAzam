import React, { Component } from 'react'

class Login extends Component {

    constructor() {
        super() 

        this.state = {
            username: '', 
            password: ''
        }
    }

    handleUserNameChanged = (e) => {

        this.setState({
            username: e.target.value 
        })

        console.log(e.target.value)
        console.log('handleUserNameChanged')
    }

    handlePasswordChanged = (e) => {

        this.setState({
            password: e.target.value 
        })

        console.log('handlePasswordChanged')
    }

    handleLogin = () => {
        console.log(this.state.username)
        console.log(this.state.password)
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <input type = "text" onChange = {this.handleUserNameChanged} />
                <input type = "text" onChange = {this.handlePasswordChanged} />
                <button onClick = {this.handleLogin}>Login</button>

            </div>
        )
    }
}

export default Login 