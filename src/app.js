import React from 'react';
import styled from 'styled-components';
import H2 from './Elements/H2';
import GoogleMap from 'google-map-react';
import MapStyle from './MapStyle.json';
import locationIcon from './location.svg';
import Header from './Header';
import Video from './Video';
import Form from './Form';
import Materials from './Materials';
import Price from './Price';
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
    <Gallery />
    <Partners />
    <About />
    <Footer />
  </Wrapper>
);