import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 20px 40px;
`;

const H2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  color: #000;
`;

const Description = styled.p`
  font-family: 'Roboto-Light', sans-serif;
  font-size: 16px;
  color: #3b3b3b;
  
  @media (min-width: 768px) {
    width: 650px;
    margin: 0 auto;
  }
`;

export default () => (
  <Wrapper>
    <H2>Наш адрес</H2>
    <Description>
        г.Москва, Алтуфьевское шоссе д.79Ас6. <br/> 10 минут от м.«Бибирево».
    </Description>
  </Wrapper>
);
