import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import { firebaseAuth } from './config/constants';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// Components
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import LoadAnim from './components/LoadAnim/LoadAnim';

// Routes
import Home from './pages/Home';
import HomeAuthed from './pages/HomeAuthed';
import Work from './pages/Work';
import Error404 from './pages/404';

// Styles
import styleReset from './sanitize.scss';
import style from './App.scss';

// Route Types
function PrivateRoute ({component: Component, authed}) {
    return <Route render={(props) => authed === true ? <Component {...props} /> : <Redirect from={props.path} to="/" />}/>
}
function PublicRoute ({component: Component, authed}) {
    return <Route render={(props) => <Component {...props} />}/>
}

// App
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authed: false,
            loading: true
        };
    }
    authListener(){
        firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                })
            } else {
                this.setState({
                    authed: false,
                    loading: false
                })
            }
        })
    }
    componentWillMount () {        
        this.authListener();
    }
    render() {
        var authed = this.state.authed;
    
        return this.state.loading ? <LoadAnim /> : (
            <Router>
                <div className='Container__Main'>
                    <Header className={authed && 'is--collapsed'} authed={authed}/>
                    <Login className={authed && 'is--hidden'}/>
                    <Route render={({ location }) => (
                        <CSSTransitionGroup 
                            transitionName="PageTransition"
                            transitionEnterTimeout={0}
                            transitionLeave={false}
                            transitionLeaveTimeout={0}
                        >
                            <Switch key={location.key} location={location}>
                                {authed ? <Route exact path='/' component={HomeAuthed} location={location}/> : <Route exact path='/' component={Home} location={location}/>}
                                <PrivateRoute authed={authed} path='/work' component={Work}/>
                                <Route component={Error404} />
                            </Switch>
                        </CSSTransitionGroup>
                    )}/>
                </div>
            </Router>
        );
    }
}