import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './SearchBanner.css';

import SearchInput from '../SearchInput/SearchInput';

class SearchBanner extends Component {
  render() {
    return (
      <div className="columns search-banner">
        <div className="column">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column is-5 is-offset-1 has-text-centered search">
                <img
                  src={require('../../../../images/cerca.png')}
                  alt="imatge-cerca"
                />
              </div>
              <div className="column is-4 has-text-centered">
                <h2 className="title search-banner-subtitle">
                  Cerca serveis <br /> a la teva zona
              </h2>
                <SearchInput></SearchInput>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SearchBanner;
