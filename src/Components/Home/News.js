import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function News() {
    return (
        <>
            <Container className='container-news'>

                <Row>
                    <Col className='title-news'>
                        <h3>ULTIMAS NOVEDADES</h3>
                    </Col>
                </Row>

                <Row className='row-news'>
                    <Col className='col-news'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://quenoticias.com/wp-content/uploads/2021/10/Gato.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='col-news'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://quenoticias.com/wp-content/uploads/2021/10/Gato.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='col-news'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://quenoticias.com/wp-content/uploads/2021/10/Gato.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className='col-news'>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://quenoticias.com/wp-content/uploads/2021/10/Gato.jpg" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='container-btn'>
                    <Col className='btn-news'>
                        <Button variant="primary">VER TODAS</Button>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default News;
