import React from "react";
import { Button } from "react-bootstrap";
import "./Donation.css";
import { DONATION_BUTTON_TEXT } from "../../Helpers/componentText";

const donate = () => {
  
}

const MercadoPagoButton = () => {
  return (
    <Button className="donation-button" onClick={donate}>
      {DONATION_BUTTON_TEXT}
    </Button>
  );
};
export default MercadoPagoButton;
