import React, { useEffect, useState } from 'react';
import { getSlides } from '../../Services/homeService';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { ErrorAlert } from '../Alert';
import { Spinner } from '../Spinner/Spinner';

function CarouselHero() {
  const [getState, setGetState] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async function () {
      try {
        const res = await getSlides();
        setGetState(res.data.data);
      } catch (error) {
        ErrorAlert(error);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading && <Spinner />}
      <Carousel className="carousel">
        {getState &&
          getState.map((res) => (
            <Carousel.Item className="carousel-item" key={res.id}>
              <img src={res.image} className="d-block w-100 img-carousel" alt="First slide"></img>
            </Carousel.Item>
          ))}
      </Carousel>
      <Container className="container-welcome-text">
        <Row>
          <Col xs={12} className="welcome-text">
            <h2>Somos Mas</h2>
          </Col>
          <Col xs={8} className="welcome-text">
            <p>
              Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y
              vecinos del barrio La Cava generando procesos de crecimiento y de inserción social.
              Buscamos mejorar la calidad de vida de niños y familias en situación de vulnerabilidad
              en el barrio, otorgando un cambio de rumbo en cada individuo a través de la educación,
              salud, trabajo, deporte, responsabilidad y compromiso.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CarouselHero;
