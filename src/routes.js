import React from 'react';

import Index from './Pages/Index';
import About from './Pages/About';
import Contact from './Pages/Contact';

const routes = [
    {
        path: '/',
        component: Index,
        label: 'Home'
    },
    {
        path: '/about',
        component: About,
        label: 'About'
    },
    {
        path: '/contact',
        component: Contact,
        label: 'Contact',
        routes: [
            {
                path: '/section/sub1',
                component: Contact
            },
            {
                path: '/section/sub2',
                component: Contact
            }
        ]
    }
];

export default routes;

