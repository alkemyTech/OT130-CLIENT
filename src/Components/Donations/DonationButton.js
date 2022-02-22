import React from "react";
import { LinksMercadoPago } from "../../config/LinksMercadoPago";
import { DONATION_BUTTON_TEXT } from "../../Helpers/messagesText";

const MercadoPagoButton = () => {
  return (
    <div className="btn-group" role="group">
      <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        {DONATION_BUTTON_TEXT}
      </button>
      <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
        {LinksMercadoPago.map(link => (
          <li>
            <a className="dropdown-item" href={link.Link}>{link.Description}</a>
          </li>
        ))
        }
      </ul>
    </div>
  );
};

export default MercadoPagoButton;
