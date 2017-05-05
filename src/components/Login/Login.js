import React, { Component } from 'react'
import { login, resetPassword } from '../../helpers/auth'

require('./Login.scss');

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
            this.setState({loginMessage:'Nice try, but nope... try again.'})
        })
    }
    render () {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label className='Login__Label'>Email</label>
                    <input className='Login__Input' ref={(email) => {this.email = email}} placeholder="Email"/>
                    <label className='Login__Label'>Password</label>
                    <input className='Login__Input' type="password" placeholder="Password" ref={(pw) => {this.pw = pw}} />
                    <button className='Login__Submit' type="submit">Login</button>
                    { this.state.loginMessage && <div className='Login__ErrorMsg'>{this.state.loginMessage}</div> }
                </form>
            </div>
        )
    }
}
