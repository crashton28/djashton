import React, {Component} from 'react';
import { Link } from 'react-router-dom';

var classNames = require('classnames');

require('./Logo.scss');

export default class Logo extends Component {
    constructor(props){
        super();
    }
    render(){
        var className = classNames('Logo',this.props.className);
        return(
            <div className={className}>
                <Link to="/" id="logo" className="Logo__Name">
                    <span className='Logo__Tag'>{`<`}</span> 
                    <span className="Logo__Text"></span> 
                    <span className='Logo__Tag'>{`/>`}</span>
                </Link>
                <div className="Logo__Tagline">Designer, Developer</div>
            </div>
        );
    }
}