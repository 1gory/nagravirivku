import React from 'react';
import styled from 'styled-components';
import video from './video.mp4';
import pixel from './pixel.png'

const Wrapper = styled.div`
  width: 100%;
  position:relative;
  height: 400px;
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  top: 50%; 
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%; 
  min-height: 100%; 
  width: auto; 
  height: auto;
  z-index: -1000; 
  overflow: hidden;
`;

const Pixel = styled.div`
  width: 100%;
  height: inherit;
  position: absolute;
  background-image: url(${pixel});
`;

const Mask = styled.div`
  width: 100%;
  height: inherit;
  position: absolute;
  background: #000;
  opacity: 0.3;
`;

const Text = styled.div`
  width: 100%;
  padding-top: 110px;
  position: absolute;
  color: #fff;
  text-align: center;
  
  @media(min-width: 768px) {
    padding-top: 70px;
  }
`;

const H1 = styled.h1`
  font-size: 32px;
  font-family: 'Roboto-Light', sans-serif;
  
  @media(min-width: 768px) {
    font-size: 48px;
  }
`;

const SubHeader = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
`;

export default () => (
  <Wrapper>
    <Pixel />
    <Mask />
    <Text>
      <H1>
        Лазерная гравировка, <br />резка, УФ-печать
        <SubHeader><br />в Москве</SubHeader>
      </H1>
    </Text>
    <Video autoPlay playsInline muted loop>
      <source src={video} type="video/mp4" />
    </Video>
  </Wrapper>
)