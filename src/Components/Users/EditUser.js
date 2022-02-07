import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../Services/usersService';
import Swal from 'sweetalert2';
import CreateEditUser from './CreateEditUser';

const EditUser = () => {
  const [user, setUser] = useState({});
  let { id } = useParams();

  const getById = async () => {
    console.log('peticion');
    const { data, error } = await getUser(id);
    if (error) {
      Swal.fire({ title: 'Error', icon: 'error', text: `${error}` });
    } else {
      setUser(data);
      console.log(data);
    }
  };

  useEffect(() => {
    getById();
  }, []);

  return (
    <div>
      <CreateEditUser user={user} />
    </div>
  );
};

export default EditUser;
