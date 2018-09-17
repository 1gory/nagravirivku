import React from 'react';
import styled from 'styled-components';
import logo from './logoblack.svg';

const Wrapper = styled.div`
  background: #fff;
  opacity: 0.9;
  width: 100%;
  position: fixed;
  z-index: 1;
`;

const HeaderWrapper = styled.div`
  // display: none;
  width: 100%;
  
  @media(min-width: 768px) {
    padding-left: 20px;
    display: block;
  }
`;

const H1 = styled.h1`
  text-align: left;
  font-size: 12px;
  font-family: 'Roboto-Light', sans-serif;
  
  @media(min-width: 768px) {
    font-size: 18px;
  }
`;

const Menu = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 60px;
`;

const Contacts = styled.div`
  white-space: nowrap;
  padding: 0px;
  font-family: 'Roboto-Light', sans-serif;
  font-size: 12px;
  
  @media(min-width: 768px) {
    font-size: 14px;
    padding: 20px;
  }
`;

const Phone = styled.a`
  color: black;
  padding-right: 15px;
  font-size: 19px;
`;

const Mail = styled.a`
  color: black;
`;

const Substrate = styled.div`
  height: 60px;
`;

const Br = styled.br`
  @media(min-width: 768px) {
    display: none;
  }
`;

export default () => (
  <div>
    <Wrapper>
      <Menu>
        <Logo src={logo}/>
        <HeaderWrapper>
          <H1>
            Лазерная резка,<Br /> гравировка, УФ-печать
          </H1>
        </HeaderWrapper>
        Круглосуточно <Br />прием заявок
        <Contacts>

          <Phone href="tel:+79030069990" onClick={() => (yaCounter48967208.reachGoal('phone'))}>
            <strong>+7 (903) 006-99-90</strong>
          </Phone>
          <Br />
          <Mail href="mailto:info@casplase.ru" onClick={() => (yaCounter48967208.reachGoal('mail'))}>
            info@casplase.ru
          </Mail>
        </Contacts>
      </Menu>
    </Wrapper>
    <Substrate />
  </div>
);