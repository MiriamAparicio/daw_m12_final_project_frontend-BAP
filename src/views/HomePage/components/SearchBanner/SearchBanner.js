import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './SearchBanner.css';

import SearchInput from '../SearchInput/SearchInput';

class SearchBanner extends Component {
  render() {
    return (
      <section className="hero is-small search-banner">
        <div className="hero-body">
          <div className="container columns is-vcentered is-centered">
            <div className="column has-text-centered search">
              <img
                src={require('../../../../images/cerca.png')}
                alt="imatge-cerca"
              />
            </div>
            <div className="column has-text-centered">
              <h2 className="title is-2 search-banner-subtitle">
                Cerca serveis a la teva zona
              </h2>
              <SearchInput></SearchInput>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchBanner;
