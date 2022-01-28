import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { DEFAULT_DONATION_MESSAGE } from "../../config/defaultTexts";

const Donations = ({ text }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col>{text || DEFAULT_DONATION_MESSAGE}</Col>
        <Col>{'ASDAS'}</Col>
      </Row>
    </Container>
  );
};

export default Donations;
