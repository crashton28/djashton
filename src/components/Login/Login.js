import React, { Component } from 'react';
import { login, resetPassword } from 'Helpers/auth';

var classNames = require('classnames');

require('./Login.scss');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginErrorClass: 'Login__ErrorMsg'
        };
    }
    handleSubmit(e){
        e.preventDefault()
        login(this.email.value, this.pw.value)
        .catch((error) => {
            this.setState({loginErrorClass:'Login__ErrorMsg is--active'})
        })
    }
    render () {
        var className = classNames('Login__Wrapper',this.props.className);
        return (
            <section className={className}>
                <form onSubmit={this.handleSubmit.bind(this)} className="Login__Form">
                    <div className="Login__Group">
                        <label className="Login__Label">Email</label>
                        <input className="Login__Input" ref={(email) => {this.email = email}} placeholder="Email"/>
                    </div>
                    <div className="Login__Group">
                        <label className="Login__Label">Password</label>
                        <input className="Login__Input" type="password" placeholder="Password" ref={(pw) => {this.pw = pw}} />
                    </div>
                    <button className="Login__Submit" type="submit">Login</button>
                </form>
                <div className={this.state.loginErrorClass}>Not quite... try again.</div>
                
            </section>
        )
    }
}
