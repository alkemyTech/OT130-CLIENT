import React, { useEffect, useState } from 'react';
import { getSlides } from "../../Services/homeService";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { getSlides } from '../../Services/slidesService';
>>>>>>> main
import { ErrorAlert } from '../Alert';
=======
import { ErrorAlert } from '../Alert';
import { Spinner } from '../Spinner/Spinner';
>>>>>>> 03379f33c3487fc11fe4d7df44e498cf9ecab025

function CarouselHero() {

  const [getState, setGetState] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async function () {
      try {
        const res = await getSlides();
<<<<<<< HEAD
        setGetState(res.data.data);
=======
<<<<<<< HEAD
        setGetState(res.data.data)
>>>>>>> main
      } catch (error) {
        ErrorAlert(error);       
=======
        setGetState(res.data.data);
      } catch (error) {
        ErrorAlert(error);
>>>>>>> 03379f33c3487fc11fe4d7df44e498cf9ecab025
      }
      setLoading(false);
    })();
  }, []);

<<<<<<< HEAD
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
};
=======
  return (
    <>
      {loading && <Spinner/>}      
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
>>>>>>> 03379f33c3487fc11fe4d7df44e498cf9ecab025

export default CarouselHero;