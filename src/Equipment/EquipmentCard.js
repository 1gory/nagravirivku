import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  height: 350px;
  padding-top: 15px;
  
  @media (min-width: 768px) {
    height: 400px;
  }
`;

const Background = styled.div`
  background-image: url(${({ image }) => image});
  position: relative;
  background-size: cover;
  height: 100%;
`;

const Name = styled.h3`
  color: #fff;
  font-family: 'Lato-Regular',sans-serif;
  font-size: 18px;
  font-weight: bolder;
`;

const Description = styled.p`
  opacity: 0.7;
  font-family: 'Lato-Light',sans-serif;
  color: #fff;
  margin: 0;
  padding: 0 30px;
`;

const Shadow = styled.div`
  background: linear-gradient(to bottom, transparent, black) no-repeat bottom;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Section = styled.section``;

const CardContent = styled.div`
  position: absolute;
  bottom: 65px;
  width: 100%;
`;

export default ({ name, description, image }) => (<Wrapper>
  <Background image={image}>
    <Shadow />
    <CardContent>
      <Section>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Section>
    </CardContent>
  </Background>
</Wrapper>);
