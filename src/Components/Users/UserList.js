import React, { useEffect, useState } from 'react';
import { deleteUser, getUsers } from '../../Services/usersService';
import Swal from 'sweetalert2';

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [RequestError, setRequestError] = useState();

  const updateUserList = async () => {
    const { data, error } = await getUsers();

    if (error) {
      setRequestError(error);
    } else {
      setUserList(data);
    }
  };

  const editData = async () => {};

  const deleteData = async (id) => {
    await Swal.fire({
      title: 'Esta seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((res) => {
      if (res.isConfirmed) {
        const { data, error } = deleteUser(id);
        if (error) {
          setRequestError(error);
        } else {
          updateUserList();
        }
      }
    });
  };

  useEffect(() => {
    updateUserList();
  }, [userList]);

  return (
    <div>
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
                  <button onClick={() => deleteData(el.id)}>Eliminar</button>
                  <button>Editar</button>
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
