import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class SearchInput extends Component {
  render() {
    return (
      <div className="field search-field">
        <div className="control">
          <input
            className="input is-small"
            type="text"
            placeholder="Introdueix el codi postal"
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;
