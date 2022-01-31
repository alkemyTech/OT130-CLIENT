import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Donation.css";
import { DONATION_THANKS_TEXT } from "../../Helpers/messagesText";

const Thanks = () => {
  return (
    <Container className="donation-container">
      <Row className="justify-content-center">
        <p className="donation-thanks">{DONATION_THANKS_TEXT}</p>
      </Row>
    </Container>
  );
};

export default Thanks;
