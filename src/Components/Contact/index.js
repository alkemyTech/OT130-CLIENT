import React from "react";
import Title from "../Title/Title";
import { MapView } from "./mapView/MapView";

import "../CardListStyles.css";


const Contacts = () => {

  return (
    <div>
      <Title text="Contactos" />
          <MapView />
    </div>
  );
};

export default Contacts; 
