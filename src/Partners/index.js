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
  margin: 0 auto;
  text-align: center;
  @media (max-width: 991px) {
    height: 400px;
  }
`;

const Header = styled(H2)`
  text-align: center;
`;

const Img = styled.img`
  width: 120px;
  @media (min-width: 768px) {
    width: 150px;
  }
`;

const LogosWrapper = styled.div`
  max-height: 350px;
  @media (max-width: 991px) {
    display: none;
  }
`;

const MobileSlider = styled.div`
  display: none;
  @media (max-width: 991px) {
    display: block;
  }
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LeftArrow = styled.div`
  height: 90px;
  width: 60px;
  cursor: pointer;
  background: url(${leftArrow}) no-repeat;
  background-position: center center;
`;

const RightArrow = styled.div`
  height: 90px;
  width: 60px;
  cursor: pointer;
  background: url(${rightArrow}) no-repeat;
  background-position: center center;
`;

export default () => (
  <Wrapper>
    <Header>Наши партнеры</Header>
    <LogosWrapper>
      <div>
        <Img src={optprint} />
        <Img src={uzelkov} />
        <Img src={omega} />
        <Img src={trinitki} />
      </div>
      <div>
        <Img src={mrg} />
        <Img src={barplace} />
        <Img src={modulbank} />
        <Img src={broshaker} />
      </div>
    </LogosWrapper>
    <MobileSlider>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <LeftArrow onClick={previousSlide} />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <RightArrow onClick={nextSlide} />
        )}
        transitionMode="scroll3d"
        slideWidth="200px"
        slideWidth={0.8}
        heightMode="first"
        renderBottomCenterControls={null}
        cellAlign="right"
        slideIndex={1}
        opacityScale={0.3}
      >
        <Slide>
          <Img src={optprint} />
          <Img src={uzelkov} />
          <Img src={omega} />
        </Slide>
        <Slide>
          <Img src={trinitki} />
          <Img src={mrg} />
          <Img src={barplace} />
        </Slide>
        <Slide>
          <Img src={modulbank} />
          <Img src={broshaker} />
        </Slide>
      </Carousel>
    </MobileSlider>
  </Wrapper>
);
