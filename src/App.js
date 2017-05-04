import React, { Component } from 'react';
import { Route, HashRouter, Link, Redirect, Switch } from 'react-router-dom';
import routes from './routes';
import { logout } from './helpers/auth';
import { firebaseAuth } from './config/constants';

import styleReset from './sanitize.scss';
import style from './App.scss';

function PrivateRoute ({component: Component, authed}) {
    return <Route render={(props) => authed === true ? <Component {...props} /> : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}/>
}

function PublicRoute ({component: Component, authed}) {
    return <Route render={(props) => <Component {...props} />}/>
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
        return this.state.loading ? <h2>Loading</h2> : (
            <HashRouter>
                <div>
                    <header>
                        <Link to="/">David Ashton Portfolio{this.state.authed ? 'true' : 'false'}</Link>
                        <nav className='nav'>
                            {routes.map((route, idx) => {
                                if(route.label !== 'Login'){
                                    return <Link to={route.path} key={idx} className='nav__item'>{route.label}</Link>
                                }else if(!this.state.authed){
                                    return <Link to={route.path} key={idx} className='nav__item'>{route.label}</Link>
                                }
                            })}
                            { this.state.authed ? <button className='nav__item' style={{border: 'none', background: 'transparent'}} onClick={() => { logout() }} >Logout</button> : null}
                        </nav>
                    </header>
                    <Switch>
                        {
                            routes.map((route, idx) => {
                                if(route.label==='Home'){
                                    return <Route path='/' exact component={route.component} key={idx} />
                                }else if(route.protected===true){
                                    return <PrivateRoute authed={this.state.authed} path={route.path} component={route.component} key={idx}/>    
                                }else{
                                    return <PublicRoute authed={this.state.authed} path={route.path} component={route.component} key={idx}/>
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