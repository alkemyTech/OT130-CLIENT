import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Content.css';
import { daysToDue, countDown } from '../../Helpers/daysUntilDate';
const Content = () => {
  const date = '2022-12-03';
  return (
    <Container className='content-container' fluid>
      <Row>
        <p className="subtitle-text">{date} Calle 123, Localidad, Provincia</p>
      </Row>
      <Row className='countdown'>
        <p className="subtitle-text">Te quedan {countDown(date)} para participar.</p>
      </Row>
      <Row>
        <Col>
          <Image className="content-image" src="images/schools_content.png" />
        </Col>
        <Col lg="7">
          <p className="campaign-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tellus tellus. Sed
            blandit, justo non sagittis luctus, justo urna venenatis orci, id pretium enim quam in
            diam. Aenean scelerisque, felis a ultricies lacinia, erat risus tincidunt dolor, eget
            finibus massa augue a purus. Sed convallis, sem eu accumsan dictum, nisl ligula finibus
            justo, vel sodales magna nunc at tortor. Praesent dictum ullamcorper porta. Aenean non
            imperdiet sem. Phasellus in tempor nulla, non lacinia massa. Ut vitae finibus ante.
            Vivamus auctor efficitur erat, et maximus nisl faucibus mattis. Pellentesque finibus
            elit a enim auctor lacinia.
          </p>
        </Col>
        <Col>
          <Image className="content-image" src="images/schools_content1.png" />
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
