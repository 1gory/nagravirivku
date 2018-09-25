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
    <Header>Посмотреть видео</Header>
    <VideoWrapper>
      <Row>
        <Col xs={6} sm={6} md={3} lg={3}>
          <YouTubeVideo
            videoId="GPwQ7fR62PE"
            opts={opt}
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <YouTubeVideo
            videoId="r686d-I89NE"
            opts={opt}
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <YouTubeVideo
            videoId="fWDj8b-Bmbc"
            opts={opt}
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <YouTubeVideo
            videoId="Z5XBgr88_-I"
            opts={opt}
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <YouTubeVideo
              videoId="CTZd9sPxyHg"
              opts={opt}
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <YouTubeVideo
              videoId="L6Tk3qcI3MQ"
              opts={opt}
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <YouTubeVideo
              videoId="ECYIyiTFO9Q"
              opts={opt}
          />
        </Col>
        <Col xs={6} sm={6} md={3} lg={3}>
          <YouTubeVideo
              videoId="VWBwtZLOvWU"
              opts={opt}
          />
        </Col>
      </Row>
    </VideoWrapper>
  </Wrapper>
)