import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import { Row, Col } from 'react-flexbox-grid';
import H2 from './../Elements/H2';
import photo1 from './panchenko.jpg';
import photo2 from './igor.jpg';
import photo3 from './solonitsky.jpg';
import photo4 from './any.jpg';

const AboutAnchor = Scroll.Element;

const Wrapper = styled.div`
  background: #f3f3f3;
  padding: 30px 0;
`;

const Header = styled(H2)`
  text-align: center;
`;

const Img = styled.img`
  margin: 0 auto;
  display: block;
  border-radius: 50%;
  width: 100px;
  
  @media(min-width: 768px) {
    width: 150px;
  }
`;

const Name = styled.div`
  padding-top: 15px;
  padding-bottom: 10px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  
  @media(min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 5px;
    margin: 0 auto;
    max-width: 1170px;
  }
`;

const Description = styled.p`
  width: 100px;
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Roboto-Light', sans-serif;
  padding-bottom: 15px;
  
  @media(min-width: 768px) {
    font-size: 14px;
    width: 200px;
  }
`;

const RowWrapper = styled.div`
  padding: 30px;
  
  @media(min-width: 768px) {
    margin: 0 auto;
    max-width: 1170px;
  }
`;

const TextAbout = styled.p`
  font-family: 'Roboto-Light', sans-serif;
  max-width: 740px;
  margin: 0 auto;
  padding: 20px 40px;
`;

export default () => (
  <Wrapper>
    <AboutAnchor name="AboutAnchor" />
    <Header>О компании</Header>
    <RowWrapper>
      <Row>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={photo1} alt="Андрей" />
          <Name>Андрей</Name>
          <Description>Моя специализация - быстрый и точный расчет стоимости услуг</Description>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={photo2} alt="Игорь" />
          <Name>Игорь</Name>
          <Description>Знание тонкостей производства позволяют рассчитать точные сроки</Description>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={photo3} alt="Андрей" />
          <Name>Андрей</Name>
          <Description>Главный приоритет - качество предоставляемых услуг!</Description>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={photo4} alt="Аня" />
          <Name>Аня</Name>
          <Description>Дизайн - моя стихия, делаю красиво для людей</Description>
        </Col>
      </Row>
    </RowWrapper>
    <TextAbout>
      Предоставляем готовые решения по услугам лазерной гравировки, резки, УФ печати.
      <br />Избавим вас от всех проблем связанных с заказом услуг.
      <br />Мы знаем как сложно выбрать компанию, которая изготовит ваш заказ качественно и срок!
      <br />Среднее время изготовления заказов 1-3 рабочих дня в зависимости от объема.
      <br />Имеется возможность срочного изготовления день в день.
      <br />В нашем штате имеется дизайнер, который бесплатно подготовит и согласует дизайн.
    </TextAbout>
  </Wrapper>
);
