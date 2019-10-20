import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './SearchBanner.css';

import SearchInput from '../SearchInput/SearchInput';

class SearchBanner extends Component {
  render() {
    return (
      <section className="section search-banner">
        <div className="container has-text-centered">
          <h2 className="subtitle search-banner-subtitle">
            Cerca serveis a la teva zona
          </h2>
          <SearchInput></SearchInput>
        </div>
      </section>
    );
  }
}

export default SearchBanner;
