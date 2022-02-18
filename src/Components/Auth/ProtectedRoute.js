import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ErrorAlert } from "../Alert";

const ProtectedRoute = ({ path, component }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    ErrorAlert("Error", "Debe estar registrado para poder suscribirse");
  }

  return (
    <Route
      path={path}
      render={() => {
        return token ? component : <Redirect to="/" />;
      }}
    />
  );
};

export default ProtectedRoute;