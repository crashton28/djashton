import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import { firebaseAuth } from './config/constants';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

// Components
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import LoadAnim from './components/LoadAnim/LoadAnim';
import HomeAuthed from './pages/HomeAuthed';

// Routes
import Routes from './routes';
import Home from './pages/Home';
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
    componentDidMount () {
        this.authListener();
    }
    componentWillUnmount(){
        this.authListener();
    }
    render() {
        var nav, 
            routes, 
            authed = this.state.authed
        ;

        {/*
        nav = Routes && Routes.map((route,idx)=>{
            if(!route.protected || route.protected && authed){
                return <Link to={route.path} key={idx} className='nav__item'>{route.label}</Link>;
            }
        });
        */}

        routes = Routes && Routes.map((route,idx)=>{
            if(route.protected===true){
                return <PrivateRoute authed={authed} path={route.path} component={route.component} key={idx}/>    
            }else{
                return <PublicRoute authed={authed} path={route.path} component={route.component} key={idx}/>
            }
        });

        {/*return this.state.loading ? <LoadAnim /> : (*/}
        return(
            <BrowserRouter>
                <div className='Container__Main'>
                    <Header className={authed && 'is--collapsed'} authed={authed}/>
                    <Login className={authed && 'is--hidden'}/>
                    <Route render={({ location }) => (
                        <CSSTransitionGroup transitionName="PageTransition">
                            <Switch key={location.key} location={location}>
                                {authed ? <Route path='/' exact component={HomeAuthed}/> : <Route path='/' exact component={Home}/>}
                                {authed ? <Route path='/work' exact component={Work}/> : <Redirect from="/work" to="/" />}
                                {/*routes*/}
                                <Route component={Error404} />
                            </Switch>
                        </CSSTransitionGroup>
                    )}/>
                </div>
            </BrowserRouter>
        );
    }
}