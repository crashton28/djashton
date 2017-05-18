import React from 'react';
import {PageContainer, ContentContainer, Hero} from 'Components/PageContainer/PageContainer';

const Page = (props) => (
    <PageContainer>
        <Hero name="profile" type="jpg" />
        <ContentContainer>
            <h1>Hi, I'm Dave Ashton.</h1>
            <p>I've been designing and developing websites for 20 years and currently I lead the Product Front End Development team at ESPN.</p>
        </ContentContainer>
    </PageContainer>
);

export default Page;

