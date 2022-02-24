import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => {

  const { users } = useSelector(state => state.usersReducer)

  return (
    <Route {...rest}
      component={( props ) => (
        (users?.success)
          ? (<Redirect to="/" />)
          : (<Component {...props} />)
      )}
    />
  )
}