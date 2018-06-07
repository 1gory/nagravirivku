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
        <Col xs={6} sm={6} md={6} lg={6}>
          <YouTubeVideo
            videoId="NIsNvU9Ek_g"
            opts={opt}
          />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <YouTubeVideo
            videoId="r686d-I89NE"
            opts={opt}
          />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <YouTubeVideo
            videoId="DDXp8psesLU"
            opts={opt}
          />
        </Col>
        <Col xs={6} sm={6} md={6} lg={6}>
          <YouTubeVideo
            videoId="VWBwtZLOvWU"
            opts={opt}
          />
        </Col>
      </Row>
    </VideoWrapper>
  </Wrapper>
)