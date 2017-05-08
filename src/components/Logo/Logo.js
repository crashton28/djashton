import React, {Component} from 'react';
import { Link } from 'react-router-dom';

var classNames = require('classnames');

require('./Logo.scss');

export default class Logo extends Component {
    constructor(props){
        super();
        this.state = {
            logoCurrText    : '',
            logoObject      : <span></span>,
            charPos         : 0
        }
    }
    
    updateText(){
        var logoText        = ' david.ashton ',
            logoLength      = logoText.length,
            charPos         = this.state.charPos,
            char            = logoText.charAt(charPos)
        ;
        if(char === '<' || char === '/' || char === '>'){
            //char = <span className='logo__tag'>{char}</span>;
        }
        

        charPos++;
        this.setState({
            charPos      : charPos,
            logoCurrText : this.state.logoCurrText+char,
            logoObject   : <span>{this.state.logoCurrText}{char}</span>

            
        });
        //console.log(char, charPos, logoLength);
        if(charPos >= logoLength){
            clearInterval(this.state.timer);
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
        this.setState({timer: setTimeout(setInterval(this.updateText.bind(this),100),2000)});
    }
    
    
    render(){
        var className = classNames('Logo',this.props.className);
        return(
            <div className={className}>
                <Link to="/" id="logo" className="Logo__Text"><span className='Logo__Tag'>{`<`}</span> {this.state.logoObject}<span className='Logo__Tag'> {`/>`}</span></Link>
                <div className="Logo__Tagline">Designer, Developer</div>
            </div>
        );
    }
}