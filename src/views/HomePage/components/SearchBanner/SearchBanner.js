import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './SearchBanner.css';

import SearchInput from '../SearchInput/SearchInput';

class SearchBanner extends Component {
  render() {
    return (
      <section class="section">
        <div class="container">
          <h2 class="subtitle">Cerca serveis a la teva zona</h2>
          <SearchInput></SearchInput>
        </div>
      </section>
    );
  }
}

export default SearchBanner;
