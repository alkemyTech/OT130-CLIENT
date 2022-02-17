import React from "react";
import { Container } from "react-bootstrap";
import Title from "../Title/Title";
import ContactsList from "./ContactsList";
import "../CardListStyles.css";
import RegisterForm from "../Auth/RegisterForm";

const Contacts = () => {

  return (
    <div>
      <Title text="Contactos" />
      <Container>
          <ContactsList />
          <RegisterForm />
      </Container>
    </div>
  );
};

export default Contacts;