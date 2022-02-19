import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {

  const { users } = useSelector(state => state.usersReducer)

  return (
    <Route {...rest}
      component={(props) => (
        (users?.success)
          ? (<Redirect to="/" />)
          : (<Component {...props} />)
      )}
    />
  )
}