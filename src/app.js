import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Video from './Video';
import Form from './Form';
import Materials from './Materials';
import Price from './Price';
import Equipment from './Equipment';
import Gallery from './Gallery';
import Partners from './Partners';
import About from './About';
import Footer from './Footer';

const Wrapper = styled.div`
  
`;

export default () => (
  <Wrapper>
    <Header/>
    <Video/>
    <Form />
    <Materials />
    <Price />
    <Equipment />
    <Gallery />
    <Partners />
    <About />
    <Footer />
  </Wrapper>
);