import React from 'react';
import styles from './PageContainer.scss';

const PageContainer = (props) => {
    return(
        <article className='page'>
            {props.children}
        </article>
    );
}
export default PageContainer;