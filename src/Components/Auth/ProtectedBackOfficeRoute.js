import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectUserAuth } from '../../reducers/auth/authReducer';

const RequireAuthBackOffice = ({ children }) => {
  const currentUser = useSelector(selectUserAuth);
  const isUserAuth = currentUser.user?.role_id;
  const isAdmin = isUserAuth === 1;
  
  return isAdmin ? children : <Redirect to="/" />;
};

export { RequireAuthBackOffice };