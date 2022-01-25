import React, { useState } from "react";
import { Carousel as BootstrapCarousel } from "react-bootstrap";

import "./Carousel.css";

const Carousel = ({ slides }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <BootstrapCarousel activeIndex={index} onSelect={handleSelect}>
      {slides.map((slide, index) => (
        <BootstrapCarousel.Item key={index}>
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
};

export default Carousel;