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

export default () => (
  <div>
    <Wrapper>
      <Menu>
        <Logo src={logo} />
        <Contacts>
          <Phone href="tel:+79162282456">+7 (916) 228-24-56</Phone>
          <Mail href="mailto:info@casplase.ru">info@casplase.ru</Mail>
        </Contacts>
      </Menu>
    </Wrapper>
    <Substrate />
  </div>
);