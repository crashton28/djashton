import React from 'react';
import styles from './PageContainer.scss';

// Page Container
export const PageContainer = (props) => {
    return(
        <article className='Page__Container'>
            {props.children}
        </article>
    );
}

// Content Comtainer
export const ContentContainer = (props) => {
    return(
        <section className='Content__Container'>
            {props.children}
        </section>
    );
}