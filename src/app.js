import 'babel-polyfill';
import React, { Component } from 'react';
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
import OrderPopUp from './OrderPopUp';

const Wrapper = styled.div`
  
`;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({
      isOpened: true,
    });
  }

  handleClose() {
    this.setState({
      isOpened: false,
    });
  }

  render() {
      return <Wrapper>
          <OrderPopUp isOpened={this.state.isOpened} handleClose={this.handleClose} />
          <Header/>
          <Video/>
          <Form handleOpen={this.handleOpen}/>
          <Materials />
          <Price />
          <Equipment />
          <Gallery />
          <Partners />
          <About />
          <Footer />
      </Wrapper>
  }
};