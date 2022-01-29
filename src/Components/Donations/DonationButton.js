import React from "react";
import { Button } from "react-bootstrap";
import "./Donation.css";
import { DONATION_URL } from "../../config/donations";
import { DEFAULT_DONATION_BUTTON_TEXT } from "../../config/defaultTexts";
const MercadoPagoButton = () => {
  return (
    <Button className="donation-button" href={DONATION_URL}>
      {DEFAULT_DONATION_BUTTON_TEXT}
    </Button>
  );
};
export default MercadoPagoButton;
