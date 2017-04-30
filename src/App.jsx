import React from 'react';
import {HashRouter, Route, IndexRoute, Link} from 'react-router-dom';
import routes from './routes';
import style from './App.scss';
import Navigation from './components/Navigation/Navigation';

export default class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navigation />
                    <hr />
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route}/>
                    ))}
                </div>
            </HashRouter>
        );
    }
}

const RouteWithSubRoutes = (route) => (
    <Route exact path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
)