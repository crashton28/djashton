import React from 'react';

import Home from './pages/Home';
import About from './pages/About';

//import Register from './pages/Register';

const routes = [
    {
        path: '/about',
        component: About,
        label: 'About',
        protected: true
    }
];

export default routes;

