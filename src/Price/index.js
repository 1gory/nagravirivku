import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import H2 from './../Elements/H2';

const PriceAnchor = Scroll.Element;

const Wrapper = styled.div`
  padding: 15px 0; 
  
  @media(min-width: 768px) {
    padding: 30px 0;
  }
`;

const Header = styled(H2)`
  text-align: center;
`;

const PriceGroup = styled.div`
  width: auto;  
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 15px;
  
  @media(min-width: 768px) {
    padding-top: 30px;
    width: 600px;
  }
`;

const Name = styled.h3`
  font-size: 1em;

  @media(min-width: 768px) {
    font-size: 1.17em;
  }
`;

const Values = styled.div`
  font-size: 13px;
  
  @media(min-width: 768px) {
    font-size: 14px;
  }
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
    <PriceAnchor name="PriceAnchor" />
    <Header>Цены</Header>
    <PriceGroup>
      <Name>Лазерная гравировка</Name>
      <Values>
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
      </Values>
    </PriceGroup>

    <PriceGroup>
      <Name>Лазерная резка кожа/пластик/фанера</Name>
      <Values>
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
      </Values>
    </PriceGroup>

    <PriceGroup>
      <Name>Печать</Name>
      <Values>
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
      </Values>
    </PriceGroup>
  </Wrapper>
);
