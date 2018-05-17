import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import H2 from './../Elements/H2';
import photo1 from './panchenko.jpg';
import photo2 from './igor.jpg';
import photo3 from './solonitsky.jpg';
import photo4 from './any.jpg';

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
  padding-bottom: 60px;
  
  @media(min-width: 768px) {
    margin: 0 auto;
    max-width: 1170px;
  }
`;

const TextAbout = styled.p`
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px 60px;
`;

export default () => (
  <Wrapper>
    <Header>О нас</Header>
    <RowWrapper>
      <Row>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={photo1} alt="Андрей" />
          <Name>Андрей</Name>
          <Description>Маркетинг, аналитика, реклама</Description>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={photo2} alt="Игорь" />
          <Name>Игорь</Name>
          <Description>Разработка, верстка, инструменты</Description>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={photo3} alt="Андрей" />
          <Name>Андрей</Name>
          <Description>Просчет заказов, контроль, логистика</Description>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={photo4} alt="Аня" />
          <Name>Аня</Name>
          <Description>Подготовка макетов, дизайн, иллюстрации</Description>
        </Col>
      </Row>
    </RowWrapper>
    <TextAbout>
      Разумеется, для оптовиков у нас особые условия и мы всегда предоставляем
      высококачественный результат точно в сроки.
      Логотип и слоган в виде лазерной гравировки в Москве может быть нанесен на поверхность
      сувенирной продукции для вашего успешного брендинга. Напишите нам и мы обговорим индивидуальные условия.
    </TextAbout>
  </Wrapper>
);
