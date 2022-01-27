import React from "react";
import { Container, Image } from "react-bootstrap";
import "./Title.css";
import { DEFAULT_TITLE_BACKGROUND_IMAGE } from "../../config/imagePaths";

const Title = ({ text, image }) => {
  return (
    <Container className="title-container" fluid>
        <Image className="title-image"  src={image || DEFAULT_TITLE_BACKGROUND_IMAGE} />
        <p className="title-text">{text}</p>
    </Container>
  );
};

export default Title;
