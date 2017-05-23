import React, {Component} from 'react';

var classNames = require('classnames'),
    skillsArray = [
        {
            label:'Development',
            skills:[
                'CSS',
                'HTML',
                'JavaScript',
                'JQuery',
                'React',
                'SASS',
                'Snap.svg'
            ]
        },
        {
            label:'Design',
            skills:[
                'Illustrator',
                'Photoshop',
                'Sketch'
            ]
        }
    ]
;

require('./Skills.scss');

export default class Skills extends Component {
    constructor(props){
        super();
    }
    render(){
        var className = classNames('Skills',this.props.className),
            timelineItems,
            skills
        ;
            
        skills = skillsArray.map((item,idx)=>{
            var skillsList = item.skills.map((skill,idx)=>{
                return(
                    <div className="Skill" key={idx}>
                        {skill}
                    </div>
                )
            });
            return(
                <section className="Skills__Category" key={idx}>
                    <h1 className="h3">{item.label}</h1>
                    {skillsList}
                </section>
            )
        });
        return(
            <section className={className}>
                <h1 className="h2">Skillset</h1>
                {skills}
            </section>
        );
    }
}