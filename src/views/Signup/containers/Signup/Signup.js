import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import NavBar from '../../../shared-components/NavBar/NavBar';
import SignupForm from '../SignupForm/SignupForm';

class Signup extends Component {
  handleSubmit = ({
    username,
    name,
    surname,
    postalCode,
    email,
    password
  }) => e => {
    e.preventDefault();
    console.log(username, name, surname, postalCode, email, password);
  };

  render() {
    return (
      <>
        <NavBar showIcon={false} />
        <SignupForm handleSubmit={this.handleSubmit} />
      </>
    );
  }
}

export default Signup;
