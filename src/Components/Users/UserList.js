import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Table, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, deleteUsers } from '../../actions/usersActions';
import { selectUsers } from '../../reducers/usersReducer';
import { SuccessAlert } from '../Alert';

const UserList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, error, users } = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const editData = (el) => {
    history.push(`/backoffice/users/create/${el.id}`);
  };

  const deleteData = (el) => {
    dispatch(deleteUsers(el.id));
    SuccessAlert('Listo', 'Usuario eliminado correctamente');
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
          {users.length > 0 ? ( 
            users.map((el) => (
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
          ) : isLoading ? (
            <tr>
              <td colSpan="3">
                <Spinner animation="border" role="status" />
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="3">{error && 'No hay usuarios'}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
