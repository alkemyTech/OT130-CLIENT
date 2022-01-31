import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from 'sweetalert';

import { getSlides, deleteSlide } from "../../Services/slidesService";

import SlideCard from "../SlideCard/SlideCard";

const SlidesList = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const { data: slides, error } = await getSlides();
      if (error) {
        return swal("Error", error.message, "error");
      }
      setSlides(slides);
    };
    getdata();
  }, []);

  const handleDeleteSlide = async (slideId) => {
    const { error } = await deleteSlide(slideId);
    if (error) {
      return swal("Error", error.message, "error");
    }
    swal("Eliminado con éxito", "", "success");
    const updatedSlides = slides.filter((slide) => slide.id !== slideId);
    setSlides(updatedSlides);
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