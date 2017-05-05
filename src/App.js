import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import { logout } from './helpers/auth';
import { firebaseAuth } from './config/constants';

// Routes and Components
import Routes from './routes';
import Logo from './components/Logo/Logo';
import Login from './components/Login/Login';
import Home from './pages/Home';
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
        var nav, routes;
        
        nav = Routes && Routes.map((route,idx)=>{
            if(!route.protected || route.protected && this.state.authed){
                return <Link to={route.path} key={idx} className='nav__item'>{route.label}</Link>;
            }
        });

        routes = Routes && Routes.map((route,idx)=>{
            if(route.protected===true){
                return <PrivateRoute authed={this.state.authed} path={route.path} component={route.component} key={idx}/>    
            }else{
                return <PublicRoute authed={this.state.authed} path={route.path} component={route.component} key={idx}/>
            }
        });

        return this.state.loading ? <h2>Loading</h2> : (
            <BrowserRouter>
                <div className='Container__Main'>
                    <header>
                        <Logo />
                        <nav className='Nav'>
                            {nav}
                            {this.state.authed ? <div className='Nav__Item' onClick={() => { logout() }} >Logout</div> : null}
                        </nav>
                    </header>
                    {this.state.authed ? <div>Welcome: Stay thirsty my friend...</div> : null}
                    <Switch>
                        <Route path='/' exact component={Home} />
                        {routes}
                        <Route render={Error404} />
                    </Switch>
                    {!this.state.authed ? <Login /> : null}
                </div>
            </BrowserRouter>
        );
    }
}