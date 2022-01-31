import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getSlides, deleteSlide } from "../../Services/slidesService";

import SlideCard from "../SlideCard/SlideCard";

const SlidesList = () => {
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      const { data: slides, error } = await getSlides();
      if (error) {
        return setError(error);
      }
      setError(null);
      setSlides(slides);
    };
    getdata();
  }, []);

  const handleDeleteSlide = async (slideId) => {
    const { error } = await deleteSlide(slideId);
    if (error) {
      return setError(error);
    }
    const updatedSlides = slides.filter((slide) => slide.id !== slideId);
    setError(null);
    setSlides(updatedSlides);
  };

  return (
    <div className="container">
      <Link to="/backoffice/create-slide">
        <Button variant="primary" className="my-3">
          Crear slide +
        </Button>
      </Link>
      {error && (
        <Alert variant="danger" className="text-center">
          Error: {error.message}
        </Alert>
      )}
      {slides?.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {slides.map((slide, index) => (
            <div className="col" key={index}>
              <SlideCard slide={slide} onClickDelete={handleDeleteSlide} />
            </div>
          ))}
        </div>
      ) : (
        <Alert variant="primary" className="text-center">
          Esta lista está vacía
        </Alert>
      )}
    </div>
  );
};

export default SlidesList;