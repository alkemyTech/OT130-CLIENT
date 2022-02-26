import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectAuth } from '../../reducers/auth/authReducer';

const RequireAuth = ({ children }) => {
  const {auth} = useSelector(selectAuth)
  
  return auth ? children : <Redirect to="/login" />;
};


export { RequireAuth };
