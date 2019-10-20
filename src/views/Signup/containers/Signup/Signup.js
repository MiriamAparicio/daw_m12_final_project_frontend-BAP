import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import NavBar from '../../../shared-components/NavBar/NavBar';
import SignupForm from '../SignupForm/SignupForm';

class Signup extends Component {
  render() {
    return (
      <>
        <NavBar showIcon={false} />
        <SignupForm />
      </>
    );
  }
}

export default Signup;
