import React, { useEffect, useState } from 'react';
import { getSlide } from "../../Services/publicApiService";
import { Carousel, Container, Row, Col } from 'react-bootstrap';

function CarouselHero() {

  const [getState, setGetState] = useState();

  useEffect(() => {
    (async function () {
      try {
        const res = await getSlide('/slides')
        setGetState(res.data.data)
      } catch (error) {
        alert("Error:", error)
      }
    })()
  }, []);

  return (
    <>
      <Carousel className='carousel'>
        {getState && getState.map((res) =>
          <Carousel.Item className='carousel-item' key={res.id}>
            <img src={res.image} className='d-block w-100 img-carousel' alt="First slide"></img>
          </Carousel.Item>)}
      </Carousel>

      <Container className='container-welcome-text'>
        <Row>
          <Col xs={12} className='welcome-text'>
            <h2>TEXTO BIENVENIDA</h2>
          </Col>
          <Col xs={8} className='welcome-text'>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris."
            </p>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default CarouselHero;
