import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import H2 from '../Elements/H2';

const opt = {
  playerVars: { // https://developers.google.com/youtube/player_parameters
    rel: 0,
  },
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
`;

const Wrapper = styled.div`
  background: #000;
  padding-top: 30px;
  padding-bottom: 60px;
`;

const Header = styled(H2)`
  text-align: center;
  color: #fff;
`;

export default () => (
  <Wrapper>
    <Header>Видео</Header>
    <VideoWrapper>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <YouTubeVideo
            videoId="GIGAtuKlxpM"
            opts={opt}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <YouTubeVideo
            videoId="exhDGJ0MaB0"
            opts={opt}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <YouTubeVideo
            videoId="CTZd9sPxyHg"
            opts={opt}
          />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <YouTubeVideo
            videoId="Z5XBgr88_-I"
            opts={opt}
          />
        </Col>
      </Row>
    </VideoWrapper>
  </Wrapper>
)