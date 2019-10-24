import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './HomePage.css';

import NavBar from '../../../components/NavBar/NavBar';
import SearchBanner from '../components/SearchBanner/SearchBanner';

class HomePage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <SearchBanner />
        <section className="section has-text-centered">
          <h1 className="title">Quins serveis pots trobar</h1>
          <h2 className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            gravida id magna eget tempor. Vestibulum id semper justo, vel
            eleifend nulla. Praesent convallis ante est, in sodales lorem
            volutpat eget. Sed felis felis, luctus et enim ac, accumsan cursus
            nunc.
          </h2>
        </section>
      </>
    );
  }
}

export default HomePage;
