import React from "react";
import { Container, Row } from "react-bootstrap";
import { DEFAULT_THANKS_DONATION_MESSAGE } from "../../config/defaultTexts";

const Thanks = ({ text }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {text || DEFAULT_THANKS_DONATION_MESSAGE}
      </Row>
    </Container>
  );
};

export default Thanks;
