import React, {Component} from 'react';
import { Picture } from 'react-responsive-picture';
import styles from './Hero.scss';

export default class Hero extends Component {
    constructor(props){
        super();
    }
    render(){
        var props = this.props;
        return(
            <div className="Hero">
                <Picture
                    className="Hero__Image"
                    sources = {[
                        {
                            srcSet: `assets/images/${props.name}-sm.${props.type}, assets/images/${props.name}-sm@2x.${props.type} 2x`,
                            media: "(max-width: 414px)",
                        },
                        {
                            srcSet: `assets/images/${props.name}-lg.${props.type} 1x, assets/images/${props.name}-lg@2x.${props.type} 2x`,
                        }
                    ]}
                />
            </div>
        )
    }
}