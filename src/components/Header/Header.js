import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { logout } from 'Helpers/auth';

var classNames = require('classnames');

import Logo from '../Logo/Logo';

require('./Header.scss');

export default class Header extends Component {
    constructor(props){
        super();
    }
    render(){
        var className = classNames('Header',this.props.className);
        return(
            <header className={className}>
                <Logo/>
                {this.props.authed ? <div className='Logout' onClick={() => { logout() }} >Logout</div> : null}
            </header>
        );
    }
}