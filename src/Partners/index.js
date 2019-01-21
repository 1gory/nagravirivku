import React from 'react';
import styled from 'styled-components';
import H2 from './../Elements/H2';
import g585 from './585gold.svg';
import broshaker from './broshaker.svg';
import MRG_Logo from './MRG_Logo.svg';
import modulbank from './modulbank.svg';
import rosautodor from './rosautodor.svg';
import barplace from './barplaces.svg';

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
        <Img src={g585}/>
        <Img src={barplace}/>
        <Img src={MRG_Logo}/>
      </div>
      <div>
        <Img src={broshaker}/>
        <Img src={rosautodor}/>
        <Img src={modulbank}/>
      </div>
    </LogosWrapper>
  </Wrapper>
);