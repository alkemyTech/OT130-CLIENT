import React from "react";
import { DONATION_BUTTON_TEXT } from "../../Helpers/messagesText";

const MercadoPagoButton = () => {
  return (
    <a className="btn btn-primary" href="https://mpago.la/2w3qx9K">
      {DONATION_BUTTON_TEXT}
    </a>
  );
};

export default MercadoPagoButton;
