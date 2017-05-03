import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/auth'

function setErrorMsg(error) {
    return {
        loginMessage: error
    }
}

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
            this.setState(setErrorMsg('Invalid username/password.'))
        })
    }
    resetPassword(){
        resetPassword(this.email.value)
        .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
        .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
    }
    render () {
        return (
            <div >
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Email</label>
                    <input ref={(email) => {this.email = email}} placeholder="Email"/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" ref={(pw) => {this.pw = pw}} />
                    {
                        this.state.loginMessage &&
                        <div>
                            Error: {this.state.loginMessage} <a href="#" onClick={this.resetPassword}>Forgot Password?</a>
                        </div>
                    }
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
