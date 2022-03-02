import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({
  component: Component,
  ...rest
}) => {
  const { isAuthenticated } = useSelector(state => state.authUser)
  
  return (
    <Route {...rest}
      component={( props ) => (
        (isAuthenticated)
          ? (<Redirect to="/" />)
          : (<Component {...props} />)
      )}
    />
  )
}