import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import Waypoint from 'react-waypoint';
import H2 from './../Elements/H2';

const PriceAnchor = Scroll.Element;

const Wrapper = styled.div`
  padding: 15px 0; 
  padding-bottom: 30px;
  
  @media(min-width: 768px) {
    padding: 30px 0;
    padding-bottom: 60px;
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
    width: 550px;
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
  display: flex;
  justify-content: space-between;
  
  font-family: 'Roboto-Light', sans-serif;
  
  & div {
    border-bottom: 1px solid #3333;
  }
`;

const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto-Light', sans-serif;
`;

const Col = styled.div`
  padding: 5px 0;
  width: 28%;
  
  @media(min-width: 768px) {
    padding: 10px;
    width: 20%;
  }
`;

const Description = styled.span` 
  font-family: 'Roboto-Light', sans-serif;
  display: inline-block;
  padding: 0 20px;
  padding-top: 30px;
  
  @media(min-width: 768px) {
    padding-top: 40px;
  }
`;

const DescriptionWrapper = styled.div` 
  text-align: left;
  
  @media(min-width: 768px) {
    text-align: center;
  }
`;

export default ({ handleScroll }) => (
  <Wrapper>
    <PriceAnchor name="PriceAnchor" />
    <Waypoint onEnter={handleScroll} />
    <Header>Цены</Header>
    <PriceGroup>
      <Name>Лазерная гравировка</Name>
      <Values>
        <Count>
          <Col>от 1000 ед.</Col>
          <Col>от 500 ед.</Col>
          <Col>от 10 ед.</Col>
        </Count>
        <Prices>
          <Col>от 3.5 руб/см<sup>2</sup></Col>
          <Col>от 3.8 руб/см<sup>2</sup></Col>
          <Col>от 4.5 руб/см<sup>2</sup></Col>
        </Prices>
      </Values>
    </PriceGroup>

    <PriceGroup>
      <Name>Лазерная резка кожа/пластик/фанера</Name>
      <Values>
        <Count>
          <Col>от 1000 м.</Col>
          <Col>от 500 м.</Col>
          <Col>от 10 м.</Col>
        </Count>
        <Prices>
          <Col>от 9 руб/м</Col>
          <Col>от 14 руб/м</Col>
          <Col>от 17 руб/м</Col>
        </Prices>
      </Values>
    </PriceGroup>

    <PriceGroup>
      <Name>УФ-печать</Name>
      <Values>
        <Count>
          <Col>от 1000 ед.</Col>
          <Col>от 500 ед.</Col>
          <Col>от 10 ед.</Col>
        </Count>
        <Prices>
          <Col>от 10 руб/см<sup>2</sup></Col>
          <Col>от 16.3 руб/см<sup>2</sup></Col>
          <Col>от 17.6 руб/см<sup>2</sup></Col>
        </Prices>
      </Values>
    </PriceGroup>

    <DescriptionWrapper>
      <Description>
        Минимальный розничный заказ - 500 рублей
      </Description>
    </DescriptionWrapper>
  </Wrapper>
);
