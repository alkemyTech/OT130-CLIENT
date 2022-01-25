import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

function CarouselHero() {
    return (
        <>
            <Carousel className='carousel'> 
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-100 img-carousel"
                        src='https://ep01.epimg.net/elpais/imagenes/2021/04/02/album/1617358467_015666_1617366075_noticia_normal.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src='https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg'
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-carousel"
                        src='https://www.recreoviral.com/wp-content/uploads/2015/08/Im%C3%A1genes-perfectan-que-relajan-el-alma.jpg'
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
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
