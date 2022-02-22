import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Content.css';
import { daysToDue, countDown } from '../../Helpers/daysUntilDate';
import { SCHOOL_CAMPAIGN_DATE, SCHOOL_CAMPAIGN_DESCRIPTION, SCHOOL_CAMPAIGN_LOCATION } from '../../Helpers/messagesText';

const Content = () => {
  const date = '2022-03-13';
  return (
    <Container className='content-container' fluid>
      <Row>
        <p className="subtitle-text">{SCHOOL_CAMPAIGN_DATE} en {SCHOOL_CAMPAIGN_LOCATION}</p>
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
            {SCHOOL_CAMPAIGN_DESCRIPTION}
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
