import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '.././../../assets/logo.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer-ong'>
        <Container>
            <Row>
                <Col className='d-flex justify-content-center' xs={12} md={4}>
                    <Image className='image-logo' src={logo} />
                </Col>
                <Col xs={12} md={4}  className=' mt-4 mb-4 title-name'>
                    Nombre de la ONG
                </Col>
                <Col className='d-flex flex-column justify-content-center mt-4 mb-4' xs={12} md={4}>
                    <Row>
                        <Col>
                            <BsLinkedin className='icon-item' />
                            <a className="link-item" href="https://www.facebook.com/"><span>linkedin/nombre</span></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BsInstagram className='icon-item' />
                            <a className="link-item" href="https://www.facebook.com/"><span>linkedin/nombre</span></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BsTwitter className='icon-item' />
                            <a className="link-item" href="https://www.facebook.com/"><span>linkedin/nombre</span></a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;