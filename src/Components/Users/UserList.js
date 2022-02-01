import React, { useEffect, useState } from 'react';
import { getUser } from '../../Services/usersService';

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [RequestError, setRequestError] = useState();

  const updateUserList = async () => {
    const { data, error } = await getUser();

    if (error) {
      setRequestError(error);
    } else {
      setUserList(data);
    }
    console.log(error, data);
  };

  useEffect(() => {
    updateUserList();
  }, []);

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
                  <button>Eliminar</button>
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
