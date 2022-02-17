import React, { useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SlideCard from "../SlideCard/SlideCard";

import { getSlides, deleteSlide } from "../../actions/slidesActions";

const SlidesList = () => {
  const dispatch = useDispatch();
  const { slides } = useSelector((state) => state.slides);

  useEffect(() => {
    dispatch(getSlides());
  }, [dispatch]);

  const handleDeleteSlide = (slideId) => {
    dispatch(deleteSlide(slideId));
  };

  return (
    <div className="container">
      <Link to="/backoffice/create-slide">
        <Button variant="primary" className="my-3">
          Crear slide +
        </Button>
      </Link>
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