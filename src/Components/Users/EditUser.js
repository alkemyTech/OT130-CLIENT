import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../Services/usersService';
import CreateEditUser from './CreateEditUser';
import { ErrorAlert } from '../Alert';

const EditUser = () => {
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(false);
  let { id } = useParams();

  const getById = async () => {
    const { data, error } = await getUser(id);
    if (error) {
      ErrorAlert('Error', error.message);
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
