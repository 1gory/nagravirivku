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
  font-family: 'Tahoma', sans-serif;
  max-width: 740px;
  margin: 0 auto;
  padding: 20px 40px;
  font-size: 15px;
`;

export default () => (
  <Wrapper>
    <AboutAnchor name="AboutAnchor" />
    <Header>О компании</Header>
    <TextAbout>
        <strong>CASP Lase</strong> - Рекламно-производственная компания.
        <br /> Занимаемся изготовлением рекламной и сувенирной продукции.
        <br />С нашей помощью вы сможете выделить свою продукцию и сделать ваш бренд запоминающимся!
        <br />Для этого используем лазерную резку и гравировку, фрезерование, УФ-печать на различных материалах.
        <br />
        <br /> Наше оборудование позволяет выполнять:
        <br />- резку до 1500х1000мм
        <br />- фрезерование до 2080х3080мм
        <br />- УФ-печать до 300х280мм.
        <br /> Если вам нужен больший формат- позвоните нам! Мы обязательно придумаем, как вам помочь.
        <br />  Зачастую, предприятия, занимающиеся большими объемами, находятся далеко за городом и мы с ними поддерживаем плотные контакты, поэтому всегда сможем вас направить.
        <br />
        <br />Не было времени или возможности создать макет? Это не проблема, подготовим макет любой сложности
        <br />Просто опишите нам то, что хотите получить, или пришлите фотографию желаемого изделия.
        <br />Теперь вам не придется рыться в интернете или искать человека, который умеет работать в CorelDraw, AI и AutoCAD - наша команда разработает макет для вас, учитывая тонкости работы на станках.
        <br />
        <br />Кроме производства, мы организуем всю логистическую цепочку, чтобы у вас было меньше головной боли: приобретение материала или товара под ваши задачи, хранение на складе, доставка по вашему адресу.
    </TextAbout>
    </Wrapper>
);
