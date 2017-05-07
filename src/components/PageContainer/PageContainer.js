import React from 'react';
import styles from './PageContainer.scss';

export const ContentContainer = (props) => {
    return(
        <section className='Content__Container'>
            {props.children}
        </section>
    );
}

export const PageContainer = (props) => {
    return(
        <article className='Page__Container'>
            {props.children}
        </article>
    );
}