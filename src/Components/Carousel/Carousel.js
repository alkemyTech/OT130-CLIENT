import React from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";

import "./Carousel.css";

const Carousel = ({ slides }) => (
  <BootstrapCarousel>
    {slides.map((slide, index) => (
      <BootstrapCarousel.Item key={index} interval={5000}>
        <img
          className="slide-image d-block w-100"
          src={slide.image}
          alt={slide.name}
        />
        <BootstrapCarousel.Caption>
          <h3>{slide.name}</h3>
          <p>{slide.description}</p>
        </BootstrapCarousel.Caption>
      </BootstrapCarousel.Item>
    ))}
  </BootstrapCarousel>
);

export default Carousel;