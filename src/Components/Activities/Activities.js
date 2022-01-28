import React from "react";
import Title from "../Title/Title";

import "../CardListStyles.css";
import { Container } from "react-bootstrap";
import ActivitiesList from "./ActivitiesList";

const Activities = () => {
  return (
    <div>
      <Title text="Actividades" />
      <Container>
          <ActivitiesList />
      </Container>
    </div>
  );
};

export default Activities;
