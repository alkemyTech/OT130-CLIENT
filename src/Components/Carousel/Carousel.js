import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

import { CAROUSEL_INTERVAL } from '../../Helpers/constants';

import './Carousel.css';

const Carousel = ({ slides }) => (
  <BootstrapCarousel fluid>
    {slides.map((slide, index) => (
      <BootstrapCarousel.Item key={index} interval={CAROUSEL_INTERVAL} controls={false}>
        <img className="slide-image d-block w-100" src={slide.image} alt={slide.name} />
        <BootstrapCarousel.Caption>
          <h3 className="slide-name">{slide.name}</h3>
          <p className="slide-description">{slide.description}</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    ))}
  </BootstrapCarousel>
);

export default Carousel;
