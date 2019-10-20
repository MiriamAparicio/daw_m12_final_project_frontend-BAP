import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import NavBar from '../../shared-components/NavBar/NavBar';

class HomePage extends Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
        <div>Cercador</div>
        <div>Serveis</div>
      </>
    );
  }
}

export default HomePage;
