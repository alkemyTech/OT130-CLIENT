import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";

import WelcomeTextForm from "../WelcomeTextForm/WelcomeTextForm";
import SlidesForm from "../Slides/SlidesForm";

import { SLIDES_LIMIT } from "../../Helpers/constants";
import { Get } from "../../Services/privateApiService";

const HomeForm = () => {
  const [slides, setSlides] = useState([{}]);
  const [welcomeText, setWelcomeText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: slides } = await Get("slides");
        const { data: organizationData } = await Get("organization");
        setSlides(slides?.data);
        setWelcomeText(organizationData?.data?.welcome_text);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  const addSlide = () => {
    setSlides([...slides, {}]);
  };

  return error ? (
    <div className="text-center my-3">Algo salio mal :(</div>
  ) : (
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