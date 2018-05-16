import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import H2 from './../Elements/H2';
import leather from './leather.jpg';
import metal from './metal.jpg';
import plastic from './plastic.jpg';
import wood from './wood.jpg';

const Wrapper = styled.div`
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

const Material = styled.div`
  padding: 15px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  
  @media(min-width: 768px) {
    padding-top: 30px;
    margin: 0 auto;
    max-width: 1170px;
  }
`;

const RowWrapper = styled.div`
  padding: 30px;
  
  @media(min-width: 768px) {
    margin: 0 auto;
    max-width: 1170px;
  }
`;

const Delimiter = styled.hr`
  max-width: 50%;
`;

export default () => (
  <Wrapper>
    <Header>C чем мы работаем</Header>
    <RowWrapper>
      <Row>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={metal} alt="Металл" />
          <Material>Металл</Material>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={leather} alt="Кожа" />
          <Material>Кожа</Material>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={wood} alt="Дерево" />
          <Material>Дерево</Material>
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <Img src={plastic} alt="Пластик" />
          <Material>Пластик</Material>
        </Col>
      </Row>
    </RowWrapper>
    <Delimiter color="black" size="1" />
  </Wrapper>
);
