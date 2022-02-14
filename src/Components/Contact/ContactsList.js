import React from 'react';
import { Button, Spinner, Table } from 'react-bootstrap';
import { useRequestContactsList } from '../../customHooks/useRequestContacts';
import { InfoAlert } from '../Alert';
import '../CardListStyles.css';

const ContactsList = () => {
  const [allContacts, isLoading] = useRequestContactsList([]);

  return (
    <div>
      <h1 className="text-center my-3">Listado de Contactos</h1>
      {/* <ul className="list-container row"> */}
      <Table  bordered hover className='card-info'>
        <thead>
          <tr className="text-center">
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            (allContacts.length > 0 ? (
              allContacts.map((contact) => {
                return (
                  <tr key={contact.id} className='text-center'>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                        <Button onClick={() => InfoAlert(contact.message)}>Ver Mensaje</Button></td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  <b>NO HAY CONTACTOS</b>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {isLoading && (
        <div className="position-absolute text-center">
          <Spinner variant="primary" animation="border" role="status" />
        </div>
      )}
      {/* </ul> */}
    </div>
  );
};

export default ContactsList;
