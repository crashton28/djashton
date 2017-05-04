import React, { Component } from 'react'
import { login, resetPassword } from '../../helpers/auth'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginMessage: null
        };
    }
    handleSubmit(e){
        e.preventDefault()
        login(this.email.value, this.pw.value)
        .catch((error) => {
            this.setState({loginMessage:'Invalid username/password.'})
        })
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Email</label>
                    <input ref={(email) => {this.email = email}} placeholder="Email"/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" ref={(pw) => {this.pw = pw}} />
                    { this.state.loginMessage && <div>Error: {this.state.loginMessage}</div> }
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
