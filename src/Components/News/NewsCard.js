import React from "react";

import { Card } from "react-bootstrap";
import Skeleton from "../Skeleton/Skeleton";

const NewsCard = ({ novedad, isLoading }) => (
  <Card style={{ width: "100%" }}>
    <div className="ratio ratio-16x9">
      {isLoading ? (
        <div className="card-img-top">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <Card.Img variant="top" src={novedad.image} />
      )}
    </div>
    <Card.Body>
      {isLoading ? (
        <Skeleton variant="text" />
      ) : (
        <Card.Title>{novedad.name}</Card.Title>
      )}
    </Card.Body>
  </Card>
);

export default NewsCard;