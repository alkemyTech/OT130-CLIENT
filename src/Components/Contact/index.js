import React from 'react';
import { LeafletMap } from './leafletMap/LeafletMap';
import ContactsList from './ContactsList';
import Title from '../Title/Title';
import '../CardListStyles.css';

const Contacts = () => {
  return (
    <div>
      <Title text="Contactos" />
      <ContactsList />
      <LeafletMap />
    </div>
  );
};

export default Contacts;
