import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { getSlide } from "../../Services/publicApiService";
import { useEffect, useState } from 'react';


function CarouselHero() {

    const [getState, setGetState] = useState();

    const bringSlide = async () => {
        let data = await getSlide('/slides');
        setGetState(data)
    }

    useEffect(() => {
        bringSlide()
    }, []);

    return (
        <>
            <Carousel className='carousel'>
                {getState && getState.map((res) => <Carousel.Item className='carousel-item' key={res.id}><img src={res.image} className='d-block w-100 img-carousel' alt="First slide"></img></Carousel.Item>)}
            </Carousel>

            <Container className='cont-welcome-text'>
                <Row>
                    <Col xs={12} className='welcome-text'>
                        <h2>TEXTO BIENVENIDA</h2>
                    </Col>
                    <Col xs={12} className='welcome-text'>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."</p>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default CarouselHero;
