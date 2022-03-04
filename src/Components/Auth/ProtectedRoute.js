import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectUserAuth } from '../../reducers/auth/authReducer';
import { selectAuth } from '../../reducers/auth/authReducer';

const AdminRoute = ({ component: Component, ...props }) => {
  const { auth } = useSelector(selectAuth);
  const currentUser = useSelector(selectUserAuth);
  const isUserAuth = currentUser?.user?.role_id;
  const isAdmin = isUserAuth === 1;

  return (
    <Route
      {...props}
      render={() => {
        return auth ? isAdmin ? <Component/> : <Redirect to='/'/> : <Redirect to="/login" />;
      }}
    />
  );
};

const AuthRoute = ({ component: Component, ...props }) => {
  const { auth } = useSelector(selectAuth);
  return (
    <Route
      {...props}
      render={() => {
        return auth ? <Component/> : <Redirect to="/login" />;
      }}
    />
  );
};

export { AdminRoute, AuthRoute };
