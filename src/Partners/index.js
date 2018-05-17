import React from 'react';
import styled from 'styled-components';
import H2 from './../Elements/H2';
import p1 from './1.jpg';
import p2 from './2.jpg';
import p3 from './3.jpg';
import p4 from './4.jpg';
import p5 from './5.jpg';
import p6 from './6.jpg';
import p7 from './7.jpg';

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
  width: 150px;
  
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
        <Img src={p1}/>
        <Img src={p4}/>
        <Img src={p7}/>
        <Img src={p2}/>
      </div>
      <div>
        <Img src={p5}/>
        <Img src={p6}/>
        <Img src={p3}/>
      </div>
    </LogosWrapper>
  </Wrapper>
);