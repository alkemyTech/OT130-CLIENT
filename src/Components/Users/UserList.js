import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

import { ConfirmAlert, ErrorAlert } from '../Alert';
import { deleteUser, getUsers } from '../../Services/usersService';
import usersMock from '../../Services/mocks/users.json';

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const history = useHistory();

  const updateUserList = async () => {
    const { data, error } = await getUsers();

    if (error) {
      ErrorAlert('Error', error.message);
    } else {
      setUserList(data.data);
    }
  };

  useEffect(() => {
    updateUserList();
  }, []);

  const editData = (el) => {
    history.push(`/backoffice/users/edit/${el.id}`);
  };

  const getMockUsers = async () => {
    try {
      setUserList(usersMock);
    } catch (error) {
      ErrorAlert('Error', error.message);
    }
  };

  const deleteData = (el) => {
    ConfirmAlert(deleteUser(el.id), 'Usuario eliminado correctamente');
  };

  return (
    <div className=" p-1 ">
      <Link to="/backoffice/users/create">
        <Button className=" my-3">Crear Usuario</Button>
      </Link>
      <h2>Lista de Usuarios</h2>
      <Table responsive bordered hover size="sm">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {userList.length === 0 ? (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          ) : (
            userList.map((el) => (
              <tr key={el.id}>
                <td className=" p-3">{el.name}</td>
                <td className=" p-3">{el.email}</td>
                <td>
                  <div className=" d-flex flex-row">
                    <Button className=" m-1" onClick={() => editData(el)}>
                      Editar
                    </Button>
                    <Button className=" m-1" variant="danger" onClick={() => deleteData(el)}>
                      Eliminar
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
