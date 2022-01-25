import React from "react";
import { Container } from "react-bootstrap";
import "./title.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Title = ({ text, image }) => {
  return (
    <Container className="title-container" fluid>
        <img className="title-image"  src={image || "images/banner-img.jpg"} />
        <p className="title-text">{text}</p>
    </Container>
  );
};

export default Title;
