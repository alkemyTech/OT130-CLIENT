import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DonationButton from "./DonationButton";
import { DEFAULT_DONATION_MESSAGE } from "../../config/defaultTexts";

const Donations = ({ text }) => {
  return (
    <Container className="donation-container">
      <Row className="justify-content-center">
        <Col md="7">
          <div className="donation-text">{text || DEFAULT_DONATION_MESSAGE}</div>
        </Col>
        <Col md="auto">
          <DonationButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Donations;
