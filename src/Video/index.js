import React from "react";
import YouTube from "react-youtube";
import Carousel from "nuka-carousel";
import styled from "styled-components";
import leftArrow from "./arrow-left.svg";
import rightArrow from "./arrow-right.svg";
import { Row, Col } from "react-flexbox-grid";
import H2 from "../Elements/H2";

const opt = {
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    rel: 0
  }
};

const VideoWrapper = styled.div`
  padding: 10px;

  @media (min-width: 768px) {
    max-width: 992px;
    margin: 0 auto;
  }
`;

const YouTubeVideo = styled(YouTube)`
  width: 100%;
  & div {
    @media (max-width: 991px) {
      width: 300px;
    }
  }
`;

const Wrapper = styled.div`
  height: 450px;
  background: #000;
  padding-top: 30px;
  padding-bottom: 60px;
`;

const Header = styled(H2)`
  text-align: center;
  color: #fff;
`;

const LeftArrow = styled.div`
  cursor: pointer;
  width: 200px;
  height: 400px;
  background: url(${leftArrow}) no-repeat;
  background-position: left center;
  @media (max-width: 991px) {
    width: 30px;
  }
`;

const RightArrow = styled.div`
  cursor: pointer;
  width: 200px;
  height: 400px;
  background: url(${rightArrow}) no-repeat;
  background-position: right center;
  @media (max-width: 991px) {
    width: 30px;
  }
`;

export default () => (
  <Wrapper>
    <Header>Посмотреть видео</Header>
    <VideoWrapper>
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <LeftArrow onClick={previousSlide} />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <RightArrow onClick={nextSlide} />
        )}
        transitionMode="scroll3d"
        slideWidth={0.8}
        heightMode="first"
        renderBottomCenterControls={null}
        cellAlign="right"
        slideIndex={1}
        opacityScale={0.3}
      >
        <div>
          <YouTubeVideo videoId="GPwQ7fR62PE" opts={opt} />
        </div>

        <div>
          <YouTubeVideo videoId="r686d-I89NE" opts={opt} />
        </div>

        <div>
          <YouTubeVideo videoId="fWDj8b-Bmbc" opts={opt} />
        </div>

        <div>
          <YouTubeVideo videoId="Z5XBgr88_-I" opts={opt} />
        </div>

        <div>
          <YouTubeVideo videoId="CTZd9sPxyHg" opts={opt} />
        </div>

        <div>
          <YouTubeVideo videoId="L6Tk3qcI3MQ" opts={opt} />
        </div>

        <div>
          <YouTubeVideo videoId="ECYIyiTFO9Q" opts={opt} />
        </div>

        <div>
          <YouTubeVideo videoId="VWBwtZLOvWU" opts={opt} />
        </div>
      </Carousel>
    </VideoWrapper>
  </Wrapper>
);
