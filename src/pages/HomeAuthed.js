import React from 'react';
import {PageContainer, ContentContainer, Hero} from 'Components/PageContainer/PageContainer';
import CareerTimeline from 'Components/CareerTimeline/CareerTimeline';
import Skills from 'Components/Skills/Skills';

const Page = (props) => (
    <PageContainer>
        <Hero name="profile" type="jpg" />
        <ContentContainer>
            <h1 className="h1">Hi, I'm Dave Ashton.</h1>
            <p>I've been designing and developing websites for 20 years and currently I lead the Product Front End Development team at ESPN.</p>
            <div className="Layout__A">
                <CareerTimeline />
                <Skills />
            </div>
        </ContentContainer>
    </PageContainer>
);

export default Page;

