import React from "react";
import { Row, Container } from "react-bootstrap";
import "./Title.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Title = ({ text, image }) => {
  return (
    <Container style={{backgroundImage:`url(${image||"images/banner-img.jpg"})`}} fluid className="title-container vertical-center">
      <Row className="justify-content-center">
        <p className="title-text">{text}</p>
      </Row>
    </Container>
  );
};

export default Title;
