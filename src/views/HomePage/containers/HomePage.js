import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import NavBar from '../../shared-components/NavBar/NavBar';
import SearchBanner from '../components/SearchBanner/SearchBanner';

class HomePage extends Component {
  render() {
    return (
      <>
        <NavBar></NavBar>
        <SearchBanner />
        <div>Serveis</div>
      </>
    );
  }
}

export default HomePage;
