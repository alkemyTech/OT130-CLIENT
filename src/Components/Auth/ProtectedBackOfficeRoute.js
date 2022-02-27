import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectAuth, selectUserAuth } from '../../reducers/auth/authReducer';

const RequireAuthBackOffice = ({ children }) => {
  const currentAuth = useSelector(selectAuth);
  const currentUser = useSelector(selectUserAuth);
  const isUserAuth = currentUser.user?.role_id;
  const isAdmin = isUserAuth === 1;
  const isUser = isUserAuth === 2;
  const isBackOfficePath = children.props.path.includes('backoffice');
  
  return (
    <>
      {
        isAdmin ? children : // si es admin puede ver todas las rutas
        isUser && !isBackOfficePath ? children : // ver rutas publicas si es usuario
        currentAuth ? <Redirect to="/" /> : <Redirect to="/login" /> //si no esta autenticado
      }
   </>    
  )
};

export { RequireAuthBackOffice };