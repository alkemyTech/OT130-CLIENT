import React, { useState, useEffect } from "react";
import { Button, Container, Spinner } from "react-bootstrap";

import { getSlides } from "../../Services/slidesService";
import { getOrganizationData } from "../../Services/organizationService";
import { ErrorAlert } from "../Alert";

import WelcomeTextForm from "../WelcomeTextForm/WelcomeTextForm";
import SlidesForm from "../Slides/SlidesForm";

import { SLIDES_LIMIT } from "../../Helpers/constants";

const HomeForm = () => {
  const [slides, setSlides] = useState([{}]);
  const [welcomeText, setWelcomeText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await getSlidesData();
      await getOrganization();
      setIsLoading(false);
    };
    getData();
  }, []);

  const getSlidesData = async () => {
    const { data: slides, error } = await getSlides();
    if (error) {
      return ErrorAlert("Error", error.message);
    }
    setSlides(slides.data);
  };

  const getOrganization = async () => {
    const { data, error } = await getOrganizationData();
    if (error) {
      return ErrorAlert("Error", error.message);
    }
    setWelcomeText(data?.organizationData?.welcome_text);
  };

  const addSlide = () => {
    setSlides([...slides, {}]);
  };

  return (
    <Container>
      <h1 className="text-center my-3">Formulario de edición del home</h1>
      {isLoading ? (
        <div className="text-center">
          <Spinner animation="border" role="status" className="text-center">
            <span className="visually-hidden">Cargando...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          <h2 className="mt-3 fs-3">Editar texto de bienvenida</h2>
          <WelcomeTextForm welcomeText={welcomeText} />
          <h2 className="mt-3 fs-3">Editar slides</h2>
          {slides.map((slide, index) => (
            <div className="mb-5" key={index}>
              <SlidesForm slide={slide} />
            </div>
          ))}
          {slides.length < SLIDES_LIMIT && (
            <Button onClick={addSlide}>Agregar nuevo slide +</Button>
          )}
        </div>
      )}
    </Container>
  );
};

export default HomeForm;