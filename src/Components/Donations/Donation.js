import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DonationButton from "./DonationButton";
import { DONATION_TITLE_TEXT } from "../../Helpers/componentText";

const Donations = ({ text }) => {
  return (
    <Container className="donation-container">
      <Row className="justify-content-center">
        <Col md="7">
          <p className="donation-text">{text || DONATION_TITLE_TEXT}</p>
        </Col>
        <Col md="auto">     
          <DonationButton />
        </Col>
      </Row>
    </Container>
  );
};

export default Donations;
