import React from "react";
import { Card, Button } from "react-bootstrap";

import "./SlideCard.css";

const SlideCard = ({ slide, onClickDelete }) => {
  return (
    <Card>
      <Card.Img className="slide-card__image" variant="top" src={slide?.image} />
      <Card.Body>
        <Card.Title className="text-center">{slide?.name}</Card.Title>
        <Card.Text> Orden: {slide?.order}</Card.Text>
        <div className="text-center">
          <Button variant="primary" className="mx-3">
            Editar
          </Button>
          <Button variant="danger" onClick={() => onClickDelete(slide.id)}>Borrar</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SlideCard;
