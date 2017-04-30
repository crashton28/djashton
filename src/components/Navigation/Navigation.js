import React from 'react';
import {NavLink} from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.scss';

const Navigation = () => {
    return(
        <nav className='globalNav'>
            {routes.map((route,i)=>{
                return(
                    <NavLink to={route.path} activeClassName='is--active' className='globalNav__item'>{route.label}</NavLink>
                );
            })}
        </nav>
    );
}
export default Navigation;