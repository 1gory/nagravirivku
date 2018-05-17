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

const Menu = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 100px;
  height: 60px;
`;

const Contacts = styled.div`
  padding: 20px;
  font-family: 'Roboto-Light', sans-serif;
  font-size: 12px;
  
  @media(min-width: 768px) {
    font-size: 14px;
  }
`;

const Phone = styled.a`
  color: black;
  padding-right: 15px;
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
        <Logo src={logo} />
        <Contacts>
          <Phone href="tel:+79162282456">+7 (916) 228-24-56</Phone>
          <Br />
          <Mail href="mailto:info@casplase.ru">info@casplase.ru</Mail>
        </Contacts>
      </Menu>
    </Wrapper>
    <Substrate />
  </div>
);