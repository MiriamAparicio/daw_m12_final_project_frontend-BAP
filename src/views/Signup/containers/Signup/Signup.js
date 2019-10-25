import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import authService from '../../../../services/auth-service';
import { withRouter } from 'react-router-dom';

import NavBar from '../../../../components/NavBar/NavBar';
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
    //send location instead of postalCode ("00000000Mn")
    const location = {
      lat: 123456,
      lng: 123456
    };
    console.log(username, name, surname, email, password, location);
    authService
      .signup({ username, name, surname, email, password, location })
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
        <SignupForm handleSubmit={this.handleSubmit} />
      </>
    );
  }
}

export default withRouter(Signup);
