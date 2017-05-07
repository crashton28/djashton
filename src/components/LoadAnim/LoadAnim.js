import React, {Component} from 'react';
import { Link } from 'react-router-dom';

require('./LoadAnim.scss');

export default class Logo extends Component {
    render(){
        return(
            <div className='LoadAnim'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}