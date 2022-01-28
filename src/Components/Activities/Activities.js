import React from "react";
import Title from "../Title/Title";

import "../CardListStyles.css";
import { Container } from "react-bootstrap";
import ActivitiesList from "./ActivitiesList";
import ActivitiesForm from "./ActivitiesForm";

const Activities = () => {
  return (
    <div>
      <Title text="Actividades" />
      <Container>
          <ActivitiesList />
          <ActivitiesForm />
      </Container>
    </div>
  );
};

export default Activities;
