import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Delete, Get } from "../../Services/privateApiService";
import SlideCard from "../SlideCard/SlideCard";

const SlidesList = () => {
  const [slides, setSlides] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getdata = async () => {
      try {
        const { data: slides } = await Get("slides");
        setSlides(slides?.data);
      } catch (error) {
        setError(error);
      }
    };
    getdata();
  }, []);

  const handleDeleteSlide = async (slideId) => {
    try {
      await Delete(`slides/${slideId}`);
      const updatedSlides = slides.filter((slide) => slide.id !== slideId);
      setSlides(updatedSlides);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div class="container">
      <Link to="/backoffice/create-slide">
        <Button variant="primary" className="my-3">
          Crear slide +
        </Button>
      </Link>
      {error && (
        <Alert variant="danger" className="text-center">
          Ocurrió un error
        </Alert>
      )}
      {slides.length > 0 ? (
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          {slides.map((slide) => (
            <div class="col">
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