import React from "react";
import { Container } from "react-bootstrap";
import { MapView } from "./mapView/MapView";
import ContactsList from "./ContactsList";
import Title from "../Title/Title";
import "../CardListStyles.css";

const Contacts = () => {

  return (
    <div>
      <Title text="Contactos" />
      <Container>
          <ContactsList />
          <MapView />
      </Container>
    </div>
  );
};

export default Contacts;
