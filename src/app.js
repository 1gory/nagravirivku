import 'babel-polyfill';
import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Form from './Form';
import Materials from './Materials';
import Price from './Price';
import Equipment from './Equipment';
import Gallery from './Gallery';
import Video from './Video';
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
      mapPreloader: true,
    };

    this.handleWaypointEnter = this.handleWaypointEnter.bind(this);
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

  handleWaypointEnter() {
    this.setState({
      mapPreloader: false,
    });
  }

  render() {
      return <Wrapper>
          <OrderPopUp isOpened={this.state.isOpened} handleClose={this.handleClose} />
          <Header/>
          <Form handleOpen={this.handleOpen}/>
          <Materials />
          <Price handleScroll={this.handleWaypointEnter} />
          <Gallery />
          <Video />
          <Equipment />
          <Form handleOpen={this.handleOpen}/>
          <Partners />
          <About />
          <Footer mapPreloader={this.state.mapPreloader} />
      </Wrapper>
  }
};