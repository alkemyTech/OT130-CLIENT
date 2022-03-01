import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LOGOJUGUETES, LOGO } from '../../assets';
import './headerCampaings.css'

const HeaderCampaings = () => {
  return (
    <header className="bkg-header">
      <Container >
        <Row >
          <Col className='d-flex d-lg-flex justify-content-xs-start d-xxl-flex justify-content-xxl-start'>
            <Link to="">
              <Image src={LOGOJUGUETES} alt="logo-juguetes" className="logo-header-toys" />
            </Link>
          </Col>
          <Col className='d-none d-md-none d-lg-flex justify-content-lg-center align-items-center  d-xxl-flex '>
            <span className='text-eslogan'>Campaña Juguetes</span>
          </Col>
          <Col className='d-none d-md-flex justify-content-md-end d-lg-flex justify-content-lg-end d-xxl-flex justify-content-xxl-end'>
            <Link to="">
              <Image src={LOGO} alt="logo-ong" className="logo-header-toys" />
            </Link>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
 
export default HeaderCampaings;