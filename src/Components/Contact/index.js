import React from "react";
import { Container } from "react-bootstrap";
import Title from "../Title/Title";
import "../CardListStyles.css";
import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";

const Contacts = () => {

  return (
    <div>
      <Title text="Contactos" />
      <Container>
          <ContactsList />
          <ContactForm />
      </Container>
    </div>
  );
};

export default Contacts;