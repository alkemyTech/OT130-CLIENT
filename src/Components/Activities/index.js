import React from "react";
import { Container } from "react-bootstrap";
import Title from "../Title/Title";
import ActivitiesList from "./ActivitiesList";
import Footer from "../Footer/Footer";
import "../CardListStyles.css";

const Activities = () => {

  return (
    <div>
      <Title text="Actividades" />
      <Container>
          <ActivitiesList/>
      </Container>
    </div>
  );
};

export default Activities;
