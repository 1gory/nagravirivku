import React from "react";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import H2 from "./../Elements/H2";
import omega from "./omega.svg";
import broshaker from "./broshaker.svg";
import mrg from "./mrg.svg";
import modulbank from "./modulbank.svg";
import optprint from "./optprint.svg";
import barplace from "./barplace.svg";
import uzelkov from "./uzelkov.svg";
import trinitki from "./trinitki.svg";
import leftArrow from "./arrow-left.svg";
import rightArrow from "./arrow-right.svg";

const Wrapper = styled.div`
  padding: 30px 0;
  max-width: 1170px;
  height: 300px;
  margin: 0 auto;
  text-align: center;
`;

const Header = styled(H2)`
  text-align: center;
`;

const Img = styled.img`
  width: 120px;
  @media (min-width: 768px) {
    width: 200px;
  }
`;

const MobileSlider = styled.div`
  position: relative;
  @media (min-width: 768px) {
    display: block;
  }
`;

const LeftArrow = styled.div`
  position: absolute;
  top: -70px;
  left: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
  background: url(${leftArrow}) no-repeat;
  background-position: left center;
`;

const RightArrow = styled.div`
  position: absolute;
  top: -70px;
  right: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
  background: url(${rightArrow}) no-repeat;
  background-position: right center;
`;

export default () => (
  <Wrapper>
    <Header>Наши партнеры</Header>
    <MobileSlider>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <LeftArrow onClick={previousSlide} />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <RightArrow onClick={nextSlide} />
        )}
        renderBottomCenterControls={null}
        cellAlign="right"
        slideIndex={1}
        opacityScale={0.3}
      >
        <div>
          <Img src={optprint} />
          <Img src={uzelkov} />
          <Img src={omega} />
        </div>
        <div>
          <Img src={trinitki} />
          <Img src={mrg} />
          <Img src={barplace} />
        </div>
        <div>
          <Img src={modulbank} />
          <Img src={broshaker} />
        </div>
      </Carousel>
    </MobileSlider>
  </Wrapper>
);
