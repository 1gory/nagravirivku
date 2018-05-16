import React from 'react';
import styled from 'styled-components';
import video from './rain.mp4';
import pixel from './pixel.png'

const Wrapper = styled.div`
  width: 100%;
  position:relative;
  height: 400px;
  overflow: hidden;
`;

const Video = styled.video`
    width: 100%;
`;

const Pixel = styled.div`
  width: 100%;
  height: inherit;
  position: absolute;
  background-image: url(${pixel});
`;

const Text = styled.div`
  width: 100%;
  padding-top: 100px;
  position: absolute;
  color: #fff;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 48px;
  font-family: 'Roboto-Light', sans-serif;
`;

const SubHeader = styled.span`
  font-family: 'Roboto', sans-serif;
`;

export default () => (
  <Wrapper>
    <Pixel />
    <Text>
      <H1>
        Лазерная гравировка, резка, УФ-печать
        <SubHeader><br />в Москве</SubHeader>
      </H1>
    </Text>
    <Video autoPlay muted loop>
      <source src={video} type="video/mp4" />
    </Video>
  </Wrapper>
)