import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkSessionExpired } from '../../utils/utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
  checkSessionExpired();
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
