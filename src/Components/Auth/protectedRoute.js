import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { selectUserAuth } from '../../reducers/auth/authReducer';

const ProtectedRoute = ({ path, component }) => {
    const currentAuth = useSelector(selectUserAuth);
    const isUserAuth = currentAuth?.user?.role_id;
    const isAdmin = isUserAuth === 1;

    return (
        <Route
        path={path}
        render={() => {
          return isAdmin ? component : <Redirect to="/" />;
        }}
      />
    )
}
export default ProtectedRoute