import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import Waypoint from 'react-waypoint';
import H2 from './../Elements/H2';

const PriceAnchor = Scroll.Element;

const Wrapper = styled.div`

  padding-bottom: 30px;
  
  @media(min-width: 768px) {
    padding-bottom: 60px;
  }
`;

const Header = styled(H2)`
  text-align: center;
  padding-right: 20px;
`;

const PriceGroup = styled.div`
  width: auto;  
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 15px;
  
  @media(min-width: 768px) {
  
    width: 650px;
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
 
`;

const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto-Light', sans-serif;
      text-align: center;
      padding-bottom: 10;
`;

const Col = styled.div`
  padding: 5px 0;
  width: 28%;
  
  @media(min-width: 768px) {
    padding: 12px;
    width: 27%;
  }
`;

const Description = styled.span` 
  font-family: 'Roboto-Light', sans-serif;
  display: inline-block;
  padding: 5 0px;
  padding-top: 30px;
  
  @media(min-width: 768px) {
    padding-top: 40px;
    
  }
`;

const DescriptionWrapper = styled.div` 
  text-align: center;
  
  @media(min-width: 768px) {
    text-align: center;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 38px;
  color:#ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: 'Roboto',sans-serif;
  cursor: pointer;
  
  // Change the color to separate the buttons
  background-color:#a2281f;
  
  &:hover {
    background-color: #f00;
  }
  
  @media (min-width: 768px) {
    background-color:#d92518;
      padding: 5px 30px;
      font-size: 18px;
  }
  `;
const scroller = Scroll.scroller;

const handleClick = (anchor) => {
    scroller.scrollTo(anchor, {
        duration: 800,
        delay: 100,
        smooth: true,
    });
};

export default ({ handleScroll }) => (
  <Wrapper>
    <PriceAnchor name="PriceAnchor" />
    <Waypoint onEnter={handleScroll} />
    <Header>Цены</Header>
    <PriceGroup>
      <Values>
          <Prices>
              <Col> <Name>Лазерная гравировка</Name></Col>
              <Col> <Name>Лазерная резка</Name></Col>
              <Col> <Name>УФ-печать</Name></Col>
          </Prices>

          <Prices>
              <Col>от 2,5 руб/ см<sup>2</sup></Col>
              <Col>от 9 руб/ м.п.</Col>
              <Col>от 10 руб/ см<sup>2</sup></Col>
          </Prices>
        <Count>
            <Col>
                <div>
                <Button onClick={() => (handleClick('FormAnchor'))}>Заказать</Button>
            </div>
            </Col>
            <Col><div>
                <Button onClick={() => (handleClick('FormAnchor'))}>Заказать</Button>
            </div></Col>
            <Col>
                <div>
                    <Button onClick={() => (handleClick('FormAnchor'))}>Заказать</Button>
                </div>
            </Col>
        </Count>

      </Values>
    </PriceGroup>
    <DescriptionWrapper>
      <Description>
        *Стоимость минимального заказа - 1000 руб.
      </Description>
    </DescriptionWrapper>
  </Wrapper>
);
