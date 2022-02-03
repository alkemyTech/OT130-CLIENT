import React, { useEffect, useState } from 'react';
import { deleteUser, getUsers } from '../../Services/usersService';
import Swal from 'sweetalert2';
import { Link, useHistory } from 'react-router-dom';
import CreateEditUser from './CreateEditUser';

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const history = useHistory();
  const [editUser, setEditUser] = useState({});

  const updateUserList = async () => {
    const { data, error } = await getUsers();

    if (error) {
      Swal.fire({ title: 'Error', icon: 'error', text: `${error}` });
    } else {
      setUserList(data);
    }
  };

  const editData = (el) => {
    history.push(`/backoffice/users/${el.id}`);
  };

  const deleteData = (el) => {
    Swal.fire({
      title: 'Esta seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((res) => {
      if (res.isConfirmed) {
        const { data, error } = deleteUser(el.id);
        if (error) {
          Swal.fire({ title: 'Error', icon: 'error', text: `${error}` });
        } else {
          Swal.fire({
            title: 'Eliminado correctamente',
            icon: 'success',
          });
          updateUserList();
        }
      }
    });
  };

  useEffect(() => {
    updateUserList();
  }, []);

  return (
    <div>
      <Link to="/backoffice/users/create">Crear Usuario</Link>
      <h2>UserList</h2>
      <table>
        <thead>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </thead>
        <tbody>
          {userList.length === 0 ? (
            <tr>
              <td colSpan="3">Sin Datos</td>
            </tr>
          ) : (
            userList.map((el) => (
              <tr>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>
                  <button onClick={() => deleteData(el)}>Eliminar</button>
                  <button onClick={() => editData(el)}>Editar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    
  );
};

export default UserList;
