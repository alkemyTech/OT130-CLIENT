import React from 'react';
import { FaInstagramSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGO } from '../../assets/index';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-school-style mt-5">
      <Container>
        <Row className="d-none d-xxl-flex py-3 campaings-links-container " xs="12">
          <Col className="d-flex justify-content-center mb-2" sm="6">
            <li >
              <NavLink to=""  activeclassname="link-footer-active">
                    Escuelas
              </NavLink>
            </li>
          </Col>
          <Col className="d-flex justify-content-center mb-2" sm="6">
            <li >
              <NavLink to=""  activeclassname="link-footer-active" >
                    Juguetes
              </NavLink>
            </li>
          </Col>
          <hr />
        </Row>
        <Row className="align-items-center">
          <Col className="d-sm-flex justify-content-between justify-content-md-center align-items-center text-center my-1 " xs="8" sm="6">
            <Image src={LOGO} alt="logo-somos-mas" className="logo-footer-school" />
            <NavLink to="" className="d-none d-sm-inline link-somos-mas-text"> 
                <span>Somos Mas</span>
              </NavLink>
          </Col>
          <Col className="d-flex justify-content-center mb-3" xs="2" sm="6">
            <div className="d-flex flex-column flex-sm-row flex-lg-column text-start social-icon-container">
              <NavLink to="">
                <FaInstagramSquare /> 
                <span className="social-name d-none d-lg-inline">Instagram</span>
              </NavLink>
              <NavLink to="">
                <FaTwitterSquare />
                <span className="social-name d-none d-lg-inline">Twitter</span>
              </NavLink>
              <NavLink to="">
                <FaLinkedin />
                <span className="social-name d-none d-lg-inline">Linkedin</span>
              </NavLink>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center " xs="12">
          <span className="text-white mb-2">2022 by Alkemy. All Rights Reserved</span>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
