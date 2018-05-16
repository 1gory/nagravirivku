import React from 'react';
import styled from 'styled-components';
import H2 from './../Elements/H2';

const Wrapper = styled.div`
  // background: #f3f3f3;
  padding: 30px 0; 
`;

const Header = styled(H2)`
  text-align: center;
`;

const PriceGroup = styled.div`
  width: 600px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

const Name = styled.h3`
  
`;

const Count = styled.div`
  padding: 10px;
  display: flex;
  border-bottom: 1px solid #3333;
  font-family: 'Roboto-Light', sans-serif;
`;

const Prices = styled.div`
  padding: 10px;
  display: flex;
  font-family: 'Roboto-Light', sans-serif;
`;

const Col = styled.div`
  width: 33%;
`;

export default () => (
  <Wrapper>
    <Header>Цены</Header>
    <PriceGroup>
      <Name>Лазерная гравировка</Name>
      <Count>
        <Col>от 1000</Col>
        <Col>от 500</Col>
        <Col>от 10</Col>
      </Count>
      <Prices>
        <Col>от 3.5 руб. см<sup>2</sup></Col>
        <Col>от 3.5 руб. см<sup>2</sup></Col>
        <Col>от 3.5 руб. см<sup>2</sup></Col>
      </Prices>
    </PriceGroup>

    <PriceGroup>
      <Name>Лазерная резка кожа/пластик/фанера</Name>
      <Count>
        <Col>от 1000</Col>
        <Col>от 500</Col>
        <Col>от 10</Col>
      </Count>
      <Prices>
        <Col>от 9 руб. м</Col>
        <Col>от 14 руб. м</Col>
        <Col>от 17 руб. м</Col>
      </Prices>
    </PriceGroup>

    <PriceGroup>
      <Name>Печать</Name>
      <Count>
        <Col>от 1000</Col>
        <Col>от 500</Col>
        <Col>от 10</Col>
      </Count>
      <Prices>
        <Col>от 10 руб. см<sup>2</sup></Col>
        <Col>от 16.3 руб. см<sup>2</sup></Col>
        <Col>от 17.6 руб. см<sup>2</sup></Col>
      </Prices>
    </PriceGroup>
  </Wrapper>
);
