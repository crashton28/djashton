import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
//import Register from './pages/Register';

const routes = [
    {
        path: '/',
        component: Home,
        label: 'Home',
        protected: false
    },
    {
        path: '/about',
        component: About,
        label: 'About',
        protected: true
    },
    {
        path: '/login',
        component: Login,
        label: 'Login',
        protected: false
    }
];

export default routes;

