import React from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import H2 from './../Elements/H2';
import leather from './leather.jpg';
import metal from './metal.jpg';
import plastic from './plastic.jpg';
import wood from './wood.jpg';
import cloth from './cloth.jpg';
import cardboard from './cardboard.jpg';

const MaterialsAnchor = Scroll.Element;

const Wrapper = styled.div`
  padding: 15px 0; 
  
  @media(min-width: 768px) {
    padding: 30px 0;
  }
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
  cursor: pointer;
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
  padding: 10px;
  
  @media(min-width: 768px) {
    padding: 30px;
    margin: 0 auto;
    max-width: 1170px;
  }
`;

const Delimiter = styled.hr`
  max-width: 50%;
`;

const Description = styled.p`
  font-size: 12px;
  padding-bottom: 10px;
  font-family: 'Roboto-Light', sans-serif;
  margin: 0;
  text-align: center;
  
  @media(min-width: 768px) {
    font-size: 13px;
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

export default () => (
  <Wrapper>
    <MaterialsAnchor name="MaterialsAnchor" />
    <Header>C чем мы работаем</Header>
    <RowWrapper>
      <Row>
        <Col xs={4} sm={4} md={2} lg={2}>
          <Img src={metal} alt="Металл" onClick={() => (handleClick('GalleryAnchor'))} />
          <Material>Металл</Material>
          <Description>Сталь, аллюминий, медь, латунь, драгоценные металлы.</Description>
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
          <Img src={leather} alt="Кожа" onClick={() => (handleClick('GalleryAnchor'))} />
          <Material>Кожа</Material>
          <Description>Кожа натуральная и искуственная, нубук, кожзам, фетр, войлок</Description>
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
          <Img src={wood} alt="Дерево" onClick={() => (handleClick('GalleryAnchor'))} />
          <Material>Дерево</Material>
          <Description>Фанера, МДФ, ДСП и пр.</Description>
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
          <Img src={cardboard} alt="Пластик" onClick={() => (handleClick('GalleryAnchor'))} />
          <Material>Картон</Material>
          <Description>Полиграфический картон, дизайнерский картон, Упаковочный картон</Description>
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
          <Img src={cloth} alt="Пластик" onClick={() => (handleClick('GalleryAnchor'))} />
          <Material>Ткань</Material>
          <Description>Натуральная и синтетическая ткань (шелк, шифон, хлопок, лен, неопрен, органза и пр.).</Description>
        </Col>
        <Col xs={4} sm={4} md={2} lg={2}>
          <Img src={plastic} alt="Пластик" onClick={() => (handleClick('GalleryAnchor'))} />
          <Material>Пластик</Material>
          <Description>Оргстекло, пэт, полистирол, двухслойный пластик</Description>
        </Col>
      </Row>
    </RowWrapper>
    <Delimiter color="black" size="1" />
  </Wrapper>
);
