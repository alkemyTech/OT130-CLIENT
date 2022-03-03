import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { LOGO } from '../../assets';
import './footerCampaings.css';

const FooterCampaings = () => {
  
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  return (
    <footer className="footer-school-style mt-5">
      <Container>
        <Row className="d-none d-xxl-flex py-3 campaings-links-container " xs="12">
          <Col className="d-flex justify-content-center mb-2" sm="6">
            <li>
              <NavLink to="school-campaign" activeClassName="link-footer-active">
                Escuelas
              </NavLink>
            </li>
          </Col>
          <Col className="d-flex justify-content-center mb-2" sm="6">
            <li>
              <NavLink to="/toys-campaign" activeClassName="link-footer-active">
                Juguetes
              </NavLink>
            </li>
          </Col>
          <hr />
        </Row>
        <Row className="align-items-center footer-main-container">
          <Col
            className="d-sm-flex justify-content-between justify-content-md-center align-items-center text-center my-1 "
            xs="8"
            sm="6"
          >
            <Image src={LOGO} alt="logo-somos-mas" className="logo-footer-school" />
            <NavLink to="/" className="d-none d-sm-inline">
              <span>Somos Mas</span>
            </NavLink>
          </Col>
          <Col className="d-flex justify-content-center mb-3" xs="2" sm="6">
            <div className="d-flex flex-column flex-sm-row flex-lg-column text-start">
              <NavLink to="">
                <FaLinkedinIn />
                <span className="social-name d-none d-lg-inline">Linkedin/company/SomosMas</span>
              </NavLink>
              <NavLink to="">
                <RiInstagramFill />
                <span className="social-name d-none d-lg-inline">Instagram/somosMas_ONG</span>
              </NavLink>
              <NavLink to="">
                <FaTwitter />
                <span className="social-name d-none d-lg-inline">Twitter/somosMas_ONG</span>
              </NavLink>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center align-items-center " xs="12">
          <span className="text-white mb-2">{`${currentYear} by Alkemy. All Rights Reserved`}</span>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterCampaings;
