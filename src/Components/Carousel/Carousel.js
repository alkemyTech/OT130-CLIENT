import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

import { CAROUSEL_INTERVAL } from '../../Helpers/constants';

import './Carousel.css';

const Carousel = ({ slides }) => (
  <BootstrapCarousel className="carousel">
    {slides &&
      slides.map((slide) => (
        <BootstrapCarousel.Item className="carousel-item" key={slide.name}>
          <img src={slide.image} className="d-block w-100 img-carousel" alt="First slide"/>
        </BootstrapCarousel.Item>
      ))}
  </BootstrapCarousel>
);
export default Carousel;
