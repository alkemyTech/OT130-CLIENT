import React from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { LinksMercadoPago } from "../../config/LinksMercadoPago";
import { DONATION_BUTTON_TEXT } from "../../Helpers/messagesText";

const MercadoPagoButton = () => {
  return (
    <ButtonGroup>
      <DropdownButton as={ButtonGroup} title={DONATION_BUTTON_TEXT} id="bg-nested-dropdown">
        {LinksMercadoPago.map((link, i) => (
          <Dropdown.Item href={link.Link} key={i}>{link.Description}</Dropdown.Item>
        ))
        }
      </DropdownButton>
    </ButtonGroup>
  );
};

export default MercadoPagoButton;