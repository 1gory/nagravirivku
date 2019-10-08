import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Scroll from "react-scroll";
import { Waypoint } from "react-waypoint";
import H2 from "./../Elements/H2";
import cutting from "./cutting.jpg";
import engraving from "./engraving.jpg";
import print from "./print.jpg";

const PriceAnchor = Scroll.Element;

const Wrapper = styled.div`
  padding-bottom: 30px;

  @media (min-width: 768px) {
    padding-bottom: 60px;
  }
`;

const RowWrapper = styled.div`
  padding: 10px;

  @media (min-width: 768px) {
    padding: 30px;
    padding-top: 10px;
    margin: 0 auto;
    max-width: 967px;
  }
`;

const Header = styled(H2)`
  text-align: center;
  padding-right: 20px;
`;

const Name = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: bolder;
  z-index: 100;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 300px;
  font-family: "Roboto-Light", sans-serif;
  color: #fff;
  background: url(${props => props.bg}) no-repeat;
  background-size: cover;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 70%;
  height: 38px;
  margin: 10px 0 10px 0;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  z-index: 1;

  // Change the color to separate the buttons
  background-color: #a2281f;

  &:hover {
    background-color: #f00;
  }

  @media (min-width: 768px) {
    background-color: #d92518;
    padding: 5px 10px;
    font-size: 14px;
  }
`;

const Price = styled.div`
  z-index: 100;
`;

const Shadow = styled.div`
  position: absolute;
  background: linear-gradient(to bottom, transparent, black) no-repeat bottom;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export default ({ formPopUpOpen, handleScroll }) => (
  <Wrapper>
    <PriceAnchor name="PriceAnchor" />
    <Waypoint onEnter={handleScroll} />
    <Header>Стоимость</Header>
    <RowWrapper>
      <Row>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Card bg={engraving}>
            <Name>Лазерная гравировка</Name>
            <Price>
              от 2,5 руб/ см<sup>2</sup>
            </Price>
            <Button onClick={formPopUpOpen}>Получить консультацию</Button>
            <Shadow />
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Card bg={cutting}>
            <Shadow />
            <Name>Лазерная резка</Name>
            <Price>от 9 руб/ м.п.</Price>
            <Button onClick={formPopUpOpen}>Получить консультацию</Button>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Card bg={print}>
            <Shadow />
            <Name>УФ-печать</Name>
            <Price>
              от 10 руб/ см<sup>2</sup>
            </Price>
            <Button onClick={formPopUpOpen}>Получить консультацию</Button>
          </Card>
        </Col>
      </Row>
    </RowWrapper>
  </Wrapper>
);
