import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'
import Logout from './Logout';
import { useSelector } from 'react-redux';
import { selectAuth, selectUserAuth } from '../../reducers/auth/authReducer';


const UserAuth = () => {
  
  const isUserAuth = useSelector(selectAuth);
  const currentUser = useSelector(selectUserAuth);

  return (
        <>
            { isUserAuth ?
            <Logout currentUser={currentUser} /> : <LoginForm />
            } 
            <RegisterForm />      
        </>
  )
  ;
};

export default UserAuth;
