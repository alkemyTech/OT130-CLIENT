import React from 'react';
import { LeafletMap } from './leafletMap/LeafletMap';
import ContactsList from './ContactsList';
import Title from '../Title/Title';
import Footer from "../Footer/Footer";
import '../CardListStyles.css';

const Contacts = () => {
  return (
    <div>
      <Title text="Contactos" />
      <ContactsList />
      <LeafletMap />
      <Footer/>
    </div>
  );
};

export default Contacts;
