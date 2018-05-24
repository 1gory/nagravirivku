import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import H2 from './../Elements/H2';
import EquipmentCard from './EquipmentCard';
import one from './1.jpg';
import two from './2.jpg';
import three from './3.jpg';
import four from './4.jpg';

const Wrapper = styled.div`
  padding: 30px 0;
`;

const Header = styled(H2)`
  text-align: center;
`;

const RowWrapper = styled.div`
  padding: 10px;
  
  @media(min-width: 768px) {
    padding: 30px;
    padding-top: 10px;
    margin: 0 auto;
    max-width: 967px;
  }
`;

export default () => (
  <Wrapper>
    <Header>Наше оборудование</Header>
    <RowWrapper>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <EquipmentCard
            name={<span>Оптоволоконный<br /> лазерный маркер</span>}
            description="Гравирует металл, кожу, горные породы"
            image={one}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <EquipmentCard
            name={<span>УФ-Принтер</span>}
            description="Печатает на металле, коже, пластике, стекле, дереве и тд"
            image={two}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <EquipmentCard
            name={<span>CO2 лазер</span>}
            description="Режет и гравирует дерево, кожу, пластик, орг стекло, стекло, ткань, горные породы"
            image={three}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <EquipmentCard
            name={<span>Фрезерный станок</span>}
            description="Выполняет фрезеровку дерева, орг стекла, пластика, мдф, акрила, так же возможно сделать механическую гравировку."
            image={four}
          />
        </Col>
      </Row>
    </RowWrapper>
  </Wrapper>
);
