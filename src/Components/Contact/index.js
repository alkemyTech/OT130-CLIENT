import React from "react";
import { Container } from "react-bootstrap";
import Title from "../Title/Title";

import "../CardListStyles.css";
import { MapUbic } from "./MapUbic";

const Contacts = () => {

  return (
    <div>
      <Title text="Contactos" />
      <Container>
          <MapUbic />
      </Container>
    </div>
  );
};

export default Contacts; 