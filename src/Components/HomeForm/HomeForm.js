import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";

import getOrganizationData from "../../Services/getOrganizationData";
import getSlides from "../../Services/getSlides";

import WelcomeTextForm from "../WelcomeTextForm/WelcomeTextForm";
import SlidesForm from "../Slides/SlidesForm";

const HomeForm = () => {
  const [slides, setSlides] = useState([{}]);
  const [welcomeText, setWelcomeText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const SLIDES_LIMIT = 3;

  useEffect(() => {
    const fetchData = async () => {
      const slides = await getSlides();
      const organizationData = await getOrganizationData();
      setSlides(slides?.data);
      setWelcomeText(organizationData?.data?.welcome_text);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const addSlide = () => {
    setSlides([...slides, {}]);
  };

  return (
    <Container>
      <h1 className="text-center my-3">Formulario de edición del home</h1>
      {isLoading ? (
        <div className="text-center">Cargando...</div>
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