"use client";

import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="carousel-img d-block w-100" src="https://images3.alphacoders.com/686/thumb-1920-686170.jpg" alt="First slide" />
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="carousel-img d-block w-100" src="https://images8.alphacoders.com/124/thumb-1920-1243956.jpg" alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="carousel-img d-block w-100" src="https://images7.alphacoders.com/592/thumb-1920-592678.jpg" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;