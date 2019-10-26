import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        //TODO BUG si falla sigup es redirigeix a login, evitar aixó
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
