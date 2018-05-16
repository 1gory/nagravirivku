import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 20px 40px;
`;

const H2 = styled.h2`
  font-family: 'Lato-Regular';
  font-size: 24px;
  color: #9d9d9d;
`;

const Description = styled.p`
  font-family: 'Lato-Regular';
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
      Москва, Алтуфьевское шоссе д.5. В пешей доступности от станции метро «Владыкино»
      и от станции МЦК «Окружная».
    </Description>
  </Wrapper>
);
