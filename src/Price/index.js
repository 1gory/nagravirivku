import React from "react";
import { Row, Col } from "react-flexbox-grid";
import styled from "styled-components";
import Scroll from "react-scroll";
import Waypoint from "react-waypoint";
import H2 from "./../Elements/H2";
import BG from "./1.jpg";

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
  font-size: 1em;

  @media (min-width: 768px) {
    font-size: 1.17em;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 300px;
  font-family: "Roboto-Light", sans-serif;
  color: #fff;
  background: url(${props => props.bg}) no-repeat;
`;

const Description = styled.span`
  font-family: "Roboto-Light", sans-serif;
  display: inline-block;
  padding: 5 0px;
  padding-top: 30px;

  @media (min-width: 768px) {
    padding-top: 40px;
  }
`;

const DescriptionWrapper = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Button = styled.button`
  width: 70%;
  height: 38px;
  margin: 30px 0 30px 0;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;

  // Change the color to separate the buttons
  background-color: #a2281f;

  &:hover {
    background-color: #f00;
  }

  @media (min-width: 768px) {
    background-color: #d92518;
    padding: 5px 30px;
    font-size: 18px;
  }
`;

const handleClick = () => {
  this.props.formPopUpOpen();
};

export default ({ handleScroll }) => (
  <Wrapper>
    <PriceAnchor name="PriceAnchor" />
    <Waypoint onEnter={handleScroll} />
    <Header>Стоимость</Header>
    <RowWrapper>
      <Row>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Card bg={BG}>
            <Name>Лазерная гравировка</Name>
            <Col>
              от 2,5 руб/ см<sup>2</sup>
            </Col>
            <Button onClick={() => handleClick()}>Заказать</Button>
          </Card>{" "}
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Card bg={BG}>
            <Name>Лазерная резка</Name>
            <Col>от 9 руб/ м.п.</Col>
            <Button onClick={() => handleClick()}>Заказать</Button>
          </Card>
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Card bg={BG}>
            <Name>УФ-печать</Name>
            <Col>
              от 10 руб/ см<sup>2</sup>
            </Col>
            <Button onClick={() => handleClick()}>Заказать</Button>
          </Card>
        </Col>
      </Row>
    </RowWrapper>
    <DescriptionWrapper>
      <Description>*Стоимость минимального заказа - 1000 руб.</Description>
    </DescriptionWrapper>
  </Wrapper>
);
