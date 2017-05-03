import React, { Component } from 'react';
import { Route, HashRouter, Link, Redirect, Switch } from 'react-router-dom';
import routes from './routes';
import { logout } from './helpers/auth';
import { firebaseAuth } from './config/constants';

import styleReset from './sanitize.scss';
import style from './App.scss';

function PrivateRoute ({component: Component, authed}) {
    return (
        <Route render={(props) => authed === true ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}/>
    )
}

function PublicRoute ({component: Component, authed}) {
    return (
        <Route render={(props) => authed === false ? <Component {...props} /> : <Redirect to='/' />}/>
    )
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authed: false,
            loading: true
        };
    }
    componentDidMount () {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
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
    componentWillUnmount () {
        this.removeListener()
    }
    render() {
        return this.state.loading === true ? <h1>Loading</h1> : (
            <HashRouter>
                <div>
                    <header>
                        <Link to="/">David Ashton Portfolio</Link>
                        <nav className='nav'>
                            {routes.map((route, i) => {
                                if(route.label !== 'Login' && route.label !== 'Register'){
                                    return(
                                        <Link to={route.path} key={i} className='nav__item'>{route.label}</Link>
                                    )
                                }else if(!this.state.authed){
                                    return(
                                        <Link to={route.path} key={i} className='nav__item'>{route.label}</Link>
                                    )
                                }
                            })}
                            { this.state.authed ? <button className='nav__item' style={{border: 'none', background: 'transparent'}} onClick={() => { logout() }} >Logout</button> : null}
                        </nav>
                    </header>
                    <Switch>
                        {
                            routes.map((route, i) => {
                                if(route.label==='Home'){
                                    return(
                                        <Route path='/' exact component={route.component} key={i} />
                                    )
                                }else if(route.protected===true){
                                    return(
                                        <PrivateRoute authed={this.state.authed} path={route.path} component={route.component} key={i}/>    
                                    )
                                }else{
                                    return(
                                        <PublicRoute authed={this.state.authed} path={route.path} component={route.component} key={i}/>
                                    )
                                }
                            })
                        }
                        <Route render={() => <h3>No Match</h3>} />
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}