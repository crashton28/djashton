import React, {Component} from 'react';

var classNames = require('classnames'),
    careerArray = [
        {
            yearStart:'2014',
            monthStart:'Jan',
            yearEnd:'',
            monthEnd:'',
            company:'ESPN',
            location: 'Bristol, CT',
            position:'Mgr. Product Front End Development',
            description:''
        },
        {
            yearStart:'2012',
            monthStart:'Jan',
            yearEnd:'',
            monthEnd:'',
            company:'ESPN',
            location: 'Bristol, CT',
            position:'Assoc. Art Director',
            description:''
        },
        {
            yearStart:'2010',
            monthStart:'Jan',
            yearEnd:'',
            monthEnd:'',
            company:'ESPN',
            location: 'Bristol, CT',
            position:'Sr. Designer',
            description:'Worked with the ESPN.com Ad Solutions team to develop advertising standards, create unique advertising opportunities, design and develop advertising campaigns, and enable the execution of ad formats on the various ESPN page types.  Designed and  developed  the  revised  ESPN.com  header  and  personalized  navigation  menu with mega-dropdowns.  Currently developing site design standards in order to add consistency throughout ESPN internet properties.'
        },
        {
            yearStart:'2008',
            monthStart:'Sept',
            yearEnd:'2010',
            monthEnd:'Jan',
            company:'ESPN: Apex Systems',
            location: 'Bristol, CT',
            position:'Web Designer / Developer',
            description:'Worked with the ESPN.com redesign team to design and develop updated page layouts and standards. Designed  and  developed  the  ESPN.com front  page  stripe restructure, sport playoff treatments, section layouts and backgrounds, section sub-header treatments, blog and notebook treatments, Photoshop page templates, the Lance Armstrong “Why Now, Why Not” page and various advertising mockups.'
        },
        {
            yearStart:'1999',
            monthStart:'Sept',
            yearEnd:'2008',
            monthEnd:'Sept',
            company:'Infotree Web Services',
            location: 'Windsor, CT',
            position:'Sr. Designer / Developer',
            description:'Created web page designs, converted designs to XHTML/CSS, created Flash sites, intros  and  banners,  created  PHP/MySQL  database  sites,  and  worked  in  various other  graphic  design  and  web  development  tasks  for  a  wide  variety  of  companies including e-commerce, manufacturing, health care, web portals, etc. '
        },
        {
            yearStart:'1999',
            monthStart:'Jun',
            yearEnd:'1999',
            monthEnd:'Sept',
            company:'Dept. of Environmental Protection',
            location: 'Hartford, CT',
            position:'Web Designer',
            description:'Edited  web  pages,  converted  documents  to  PDF  files,  created  instructions  for various web  building  tasks and  set up  methods  for  converting  forms  to  electronic versions (Word and Internet).'
        },
        {
            yearStart:'1999',
            monthStart:'Jan',
            yearEnd:'1999',
            monthEnd:'Jun',
            company:'Manchester Community Technical College ',
            location: 'Manchester, CT',
            position:'Web Designer (Co-op)',
            description:'Designed and developed the Career and Cooperative Education program websites.'
        }
    ]
;

require('./CareerTimeline.scss');

export default class CareerTimeline extends Component {
    constructor(props){
        super();
    }
    render(){
        var className = classNames('CareerTimeline',this.props.className),
            timelineItems
        ;
            
        timelineItems = careerArray.map((item,idx)=>{
            return(
                <section className="CareerTimeline__Item" key={idx}>
                    <div className="CareerTimeline__Date">
                        <span>{item.monthStart}</span>
                        {item.yearStart}
                    </div>
                    <div className="CareerTimeline__Details">
                        <h1 className="h3 CareerTimeline__Company">{item.company}</h1>
                        <h2 className="CareerTimeline__Position">{item.position}</h2>
                    </div>
                </section>
            )
        });
        return(
            <section className={className}>
                <h1 className="h2">Career Timeline</h1>
                {timelineItems}
            </section>
        );
    }
}