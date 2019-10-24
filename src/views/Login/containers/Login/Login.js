import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import NavBar from '../../../../components/NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';

class Login extends Component {
  handleSubmit = ({ email, password }) => e => {
    e.preventDefault();
    console.log(email, password);
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

export default Login;
