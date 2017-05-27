import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { logout } from 'Helpers/auth';
import Logo from '../Logo/Logo';

var classNames = require('classnames');

require('./Header.scss');

export default class Header extends Component {
    constructor(props){
        super();
    }
    render(){
        var className = classNames('Header',this.props.className),
            authed = this.props.authed
        ;
        return(
            <header className={className}>
                <Logo/>
                {authed && <Link to="/work" className="Button__Nav">Work</Link>}
                {authed && <div className='Logout' onClick={() => { logout() }} >Logout</div>}
            </header>
        );
    }
}