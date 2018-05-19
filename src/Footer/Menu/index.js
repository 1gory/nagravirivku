import React from 'react';
import styled from 'styled-components';
import Scroll from 'react-scroll';
import instagramIcon from '../Social/contact-social-insta.svg';
import vkIcon from '../Social/contact-social-vk.svg';
import telegramIcon from '../Social/contact-social-telegram.svg';
import visa from '../Payments/visa.svg';
import maestro from '../Payments/maestro.svg';
import mastecard from '../Payments/mastercard.svg';
import sbOnline from '../Payments/sb_online.svg';
import mir from '../Payments/mir.svg';
import qiwi from '../Payments/qiwi.svg';

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
  display: flex;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const PaymentIcons = styled.div`
  padding: 10px;
  text-align: center;
`;

const PaymentServiceLogo = styled.img`
  height: 25px;
  padding: 5px 0 5px 15px;
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
    <MenuWrapper>
      <FooterMenu>
        <MenuLink onClick={() => (handleClick('MaterialsAnchor'))}>Материалы</MenuLink>
        <MenuLink onClick={() => (handleClick('PriceAnchor'))}>Цены</MenuLink>
        <MenuLink onClick={() => (handleClick('GalleryAnchor'))}>Галерея</MenuLink>
        <MenuLink onClick={() => (handleClick('AboutAnchor'))}>О нас</MenuLink>
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
      <a href="https://vk.com/casplase">
        <Icon src={vkIcon} />
      </a>
      <a href="https://www.instagram.com/casp_lase//">
        <Icon src={instagramIcon} />
      </a>
      <a href="tg://resolve?domain=andrew1322">
        <Icon src={telegramIcon} alt="CASEWOOD YouTube" />
      </a>
    </SocialNetworksIcons>
  </Wrapper>
);
