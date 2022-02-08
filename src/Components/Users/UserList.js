import React, { useEffect, useState } from 'react';
import { deleteUser, getUsers } from '../../Services/usersService';
import Swal from 'sweetalert2';
import { Link, useHistory } from 'react-router-dom';
import { ConfirmAlert, ErrorAlert, SuccessAlert } from '../Alert';
import usersMock from '../../Services/mocks/users.json';
import { Button, Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

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

  const getMockUsers = async () => {
    try {
      setUserList(usersMock);
    } catch (error) {
      ErrorAlert('Error', error.message);
    }
  };

  useEffect(() => {
    updateUserList();
  }, []);

  const editData = (el) => {
    history.push(`/backoffice/users/edit/${el.id}`);
  };

  const deleteData = (el) => {
    ConfirmAlert('Estas seguro?', 'Una vez hecho no podra deshacerse').then((res) => {
      if (res.isConfirmed) {
        const { error } = deleteUser(el.id);
        console.log(error);
        if (error) {
          ErrorAlert('Error', error.message);
          Swal.fire({ title: 'Error', icon: 'error', text: `${error}` });
        } else {
          SuccessAlert(undefined, 'Usuario eliminado correctamente');
          updateUserList();
        }
      }
    });
  };

  return (
    <div>
      <Link to="/backoffice/users/create">
        <Button className=" my-3">Crear Usuario</Button>
      </Link>
      <h2>UserList</h2>
      <Table bordered hover>
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
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteData(el)}>
                    Eliminar
                  </Button>
                  <Button onClick={() => editData(el)}>Editar</Button>
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
