import React from "react";
import { MapView } from "./mapView/MapView";
import ContactsList from "./ContactsList";
import Title from "../Title/Title";
import "../CardListStyles.css";

const Contacts = () => {

  return (
    <div>
      <Title text="Contactos" />
          <ContactsList />
          <MapView />
    </div>
  );
};

export default Contacts;
