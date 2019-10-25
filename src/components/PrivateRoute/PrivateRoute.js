import React from 'react';
import { Route, Redirect } from 'react-router-dom';

//TODO comprovar a l'store si el user esta logged
const isAuthenticated = false;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;
