import React from "react";
import { Container, Image } from "react-bootstrap";
import "./title.css";
import { defaultTitleImage } from "../../Helpers/imagePaths";

const Title = ({ text, image }) => {
  return (
    <Container className="title-container" fluid>
        <Image className="title-image"  src={image || defaultTitleImage} />
        <p className="title-text">{text}</p>
    </Container>
  );
};

export default Title;
