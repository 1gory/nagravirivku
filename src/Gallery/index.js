import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-grid-gallery';
import H2 from '../Elements/H2';

const images =
  [
    {
      src: '/gallery/1.jpg',
      thumbnail: '/gallery/1.jpg',
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: '/gallery/2.jpg',
      thumbnail: '/gallery/2.jpg',
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: '/gallery/3.jpg',
      thumbnail: '/gallery/3.jpg',
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: '/gallery/4.jpg',
      thumbnail: '/gallery/4.jpg',
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: '/gallery/5.jpg',
      thumbnail: '/gallery/5.jpg',
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: '/gallery/6.jpg',
      thumbnail: '/gallery/6.jpg',
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: '/gallery/7.jpg',
      thumbnail: '/gallery/7.jpg',
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
    {
      src: '/gallery/8.jpg',
      thumbnail: '/gallery/8.jpg',
      thumbnailWidth: 300,
      thumbnailHeight: 300,
    },
  ];


const GalleryContent = styled.div`
  padding-top: 20px;
`;

const ClearBlock = styled.div`
  clear: both;
`;

const Wrapper = styled.div`
  background: #f3f3f3;
  padding: 15px 0;
  
  @media(min-width: 768px) {
    padding: 30px 0;
  }
`;

const GalleryWrapper = styled.div`
  padding-bottom: 40px;
  
  @media(min-width: 768px) {
    padding-bottom: 80px;
    max-width: 1170px;
    margin: 0 auto;
  }
`;

const Header = styled(H2)`
  text-align: center;
`;

export default () => (
  <Wrapper>
    <GalleryWrapper>
      <Header>Примеры работ</Header>
      <GalleryContent>
        <Gallery images={images} enableImageSelection={false} rowHeight={300}/>
        <ClearBlock />
      </GalleryContent>
    </GalleryWrapper>
  </Wrapper>
)