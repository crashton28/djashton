import React from 'react';
import { Picture } from 'react-responsive-picture';
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

export const Hero = (props) => {
    return(
        <div className="Hero">
            <Picture
                className="Hero__Image"
                sources = {[
                    {
                        srcSet: `assets/images/${props.name}-sm.${props.type}, assets/images/${props.name}-sm@2x.${props.type} 2x`,
                        media: "(max-width: 414px)",
                    },
                    {
                        srcSet: `assets/images/${props.name}-lg.${props.type} 1x, assets/images/${props.name}-lg@2x.${props.type} 2x`,
                    }
                ]}
            />
        </div>
    )
}