import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import Logout from './Logout';
import { selectAuth } from '../../reducers/auth/authReducer';

const UserAuth = () => {
  
  const isUserAuth = useSelector(selectAuth);

  return (
        <>
            { isUserAuth ?
            <Logout  /> : <LoginForm />
            }    
        </>
  )
  ;
};

export default UserAuth;
