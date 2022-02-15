import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ path, component }) => {
  const auth = true; // TODO: Conectar con estado global
  return (
    <Route
      path={path}
      render={() => {
        return auth ? component : <Redirect to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;
