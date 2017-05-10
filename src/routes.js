import React from 'react';

import Work from './pages/Work';

//import Register from './pages/Register';

const routes = [
    {
        path: '/work',
        component: Work,
        label: 'Work',
        protected: true
    }
];

export default routes;

