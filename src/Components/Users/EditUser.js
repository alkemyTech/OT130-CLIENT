import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../Services/usersService';
import Swal from 'sweetalert2';
import CreateEditUser from './CreateEditUser';

const EditUser = () => {
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(false);
  let { id } = useParams();

  const getById = async () => {
    console.log('peticion');
    const { data, error } = await getUser(id);
    if (error) {
      Swal.fire({ title: 'Error', icon: 'error', text: `${error.message}` });
    } else {
      setUser(data.data);
      setSuccess(true);
    }
  };
  useEffect(() => {
    getById();
  }, []);

  return <div>{success && <CreateEditUser user={user} />}</div>;
};

export default EditUser;
