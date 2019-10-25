import React, { Component } from 'react';
//import PropTypes from 'prop-types';

import NavBar from '../../../components/NavBar/NavBar';

class Anuncis extends Component {
  render() {
    return (
      <>
        <NavBar />
        <section className="section has-text-centered">
          <h1 className="title">Anuncis</h1>
        </section>
      </>
    );
  }
}

export default Anuncis;
