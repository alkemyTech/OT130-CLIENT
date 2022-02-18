import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Carousel from '../../Components/Carousel/Carousel';
import { daysToDue, countDown } from '../../Helpers/daysUntilDate';
const Content = () => {
  return (
    <Container>
      <Row>
        <Carousel slides={''} />
      </Row>
      <Row>
        <h3></h3>
      </Row>
      <Row>
        <h3>Te quedan </h3>
      </Row>
    </Container>
  );
};

export default Content;
