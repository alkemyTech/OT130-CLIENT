import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../features/auth/authSlice';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'
import Logout from './Logout';

const UserAuth = () => {
  const isUserAuth = useSelector(selectAuth);
  return (
        <>
            {isUserAuth ? <Logout /> : <LoginForm />}  
            <RegisterForm />      
        </>
  )
  ;
};

export default UserAuth;
