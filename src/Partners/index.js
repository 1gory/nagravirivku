import React from 'react';
import styled from 'styled-components';
import H2 from './../Elements/H2';
import omega from './omega.svg';
import broshaker from './broshaker.svg';
import mrg from './mrg.svg';
import modulbank from './modulbank.svg';
import optprint from './optprint.svg';
import barplace from './barplace.svg';
import uzelkov from './uzelkov.svg';
import trinitki from './trinitki.svg';

const Wrapper = styled.div`
  padding: 30px 0;
  max-width: 1170px;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled(H2) `
  text-align: center;
`;

const Img = styled.img`
  width: 120px;
  
  @media(min-width: 768px) {
    width: 200px;
  }
`;

const LogosWrapper = styled.div`
  padding-top: 20px;
`;

export default () => (
  <Wrapper>
    <Header>Наши партнеры</Header>
    <LogosWrapper>
      <div>
        <Img src={optprint}/>
        <Img src={uzelkov}/>
        <Img src={omega}/>
        <Img src={trinitki}/>
      </div>
      <div>
        <Img src={mrg}/>
        <Img src={barplace}/>
        <Img src={modulbank}/>
        <Img src={broshaker}/>
      </div>
    </LogosWrapper>
  </Wrapper>
);