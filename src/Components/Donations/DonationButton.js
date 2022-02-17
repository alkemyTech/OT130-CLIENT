import React from "react";
import { DONATION_BUTTON_TEXT } from "../../Helpers/messagesText";

const MercadoPagoButton = () => {
  return (
    <a className="btn btn-primary" href="https://mpago.la/25bic4G">
      {DONATION_BUTTON_TEXT}
    </a>
  );
};

export default MercadoPagoButton;
