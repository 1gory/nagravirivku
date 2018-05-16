import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import instagramIcon from '../Social/contact-social-insta.svg';
import vkIcon from '../Social/contact-social-vk.svg';
import telegramIcon from '../Social/contact-social-telegram.svg';
import visa from '../payments/visa.svg';
import maestro from '../payments/maestro.svg';
import mastecard from '../payments/mastercard.svg';
import sbOnline from '../payments/sb_online.svg';
import mir from '../payments/mir.svg';
import qiwi from '../payments/qiwi.svg';

const Wrapper = styled.div`
  background-color: #272727;
  padding: 20px;
`;

const MenuWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    justify-content: space-between;
    max-width: 970px;
    flex-direction: row;
  }
`;

const MenuLink = styled.span`
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-family: 'Roboto-Light', sans-serif;
  font-size: 16px;
  line-height: 1.88em;

  @media (min-width: 768px) {
    display: inline-block;
    padding-left: 25px;
  }
`;

const Icon = styled.img`
  width: 50px;
  margin: 10px;
`;

const SocialNetworksIcons = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const FooterMenu = styled.div`
  padding: 10px;
`;

const PaymentIcons = styled.div`
  padding: 10px;
  text-align: center;
`;

const PaymentServiceLogo = styled.img`
  height: 25px;
  padding: 5px 0 5px 15px;
`;

export default () => (
  <Wrapper>
    <MenuWrapper>
      <FooterMenu>
        <MenuLink to="/">Материалы</MenuLink>
        <MenuLink to="/catalog">Цены</MenuLink>
        <MenuLink to="/gallery">Галерея</MenuLink>
         <MenuLink to="/cooperation" onlyDesktop>Партнеры</MenuLink>
        <MenuLink to="/delivery">О нас</MenuLink>
      </FooterMenu>

      <PaymentIcons>
        <PaymentServiceLogo src={visa} alt="Оплата картой visa" />
        <PaymentServiceLogo src={maestro} alt="Оплата картой maestro" />
        <PaymentServiceLogo src={mastecard} alt="Оплата картой mastercard" />
        <PaymentServiceLogo src={sbOnline} alt="Оплата через сбербанк онлайн" />
        <PaymentServiceLogo src={mir} alt="Оплата картой МИР" />
        <PaymentServiceLogo src={qiwi} alt="Оплата через Киви" />
      </PaymentIcons>
    </MenuWrapper>

    <SocialNetworksIcons>
      <a href="https://vk.com/casewoodru">
        <Icon src={vkIcon} />
      </a>
      <a href="https://instagram.com/casewood.ru/">
        <Icon src={instagramIcon} />
      </a>
      <a href="https://youtube.com/channel/UCRhZ8w5tkM5PE74Fq3q4ESQ">
        <Icon src={telegramIcon} alt="CASEWOOD YouTube" />
      </a>
    </SocialNetworksIcons>
  </Wrapper>
);
