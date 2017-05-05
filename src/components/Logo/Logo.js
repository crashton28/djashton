import React, {Component} from 'react';
import { Link } from 'react-router-dom';

require('./Logo.scss');

export default class Logo extends Component {
    constructor(props){
        super();
        this.state = {
            logoCurrText    : '',
            className       : '',
            charPos         : 0
        }
    }
    updateText(){
        var logoText        = '< david.ashton />',
            logoLength      = logoText.length,
            charPos         = this.state.charPos,
            char            = logoText.charAt(charPos)
        ;
        if(char === '<' || char === '/' || char === '>'){
            //char = "<span className='logo__tag'>"+char+"</span>";
        }
        charPos++;
        this.setState({
            charPos      : charPos,
            logoCurrText : this.state.logoCurrText + char
            
        });
        if(charPos === logoLength){
            clearInterval(this.timer);
            /*
            setTimeout(function(){
                this.setState({
                    className : 'is--hidden'
                });
            },8000);
            setTimeout(function(){
                this.setState({
                    logoCurrText : '',
                    className : ''
                });
                charPos=0;
                this.timer = setInterval(this.updateText.bind(this),100); 
            }, 10000);
            */
        }
    }
    componentDidMount(){

        var timer;
        this.timer = setInterval(this.updateText.bind(this),100); 
    }
    
    
    render(){
        return(
            <Link to="/" id="logo" className={this.state.className}>{this.state.logoCurrText}</Link>
        );
    }
}