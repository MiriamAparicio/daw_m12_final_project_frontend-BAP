import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import authService from '../../../../services/auth-service';
import { withRouter } from 'react-router-dom';

import NavBar from '../../../../components/NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';

class Login extends Component {
  handleSubmit = ({ email, password }) => e => {
    e.preventDefault();
    console.log(email, password);
    authService
      .login({ email, password })
      .then(() => {
        this.props.history.replace('/anuncis');
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <>
        <NavBar showIcon={false} />
        <LoginForm handleSubmit={this.handleSubmit} />
      </>
    );
  }
}

export default withRouter(Login);
