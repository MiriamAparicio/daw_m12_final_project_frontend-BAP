import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class SearchInput extends Component {
  render() {
    return (
      <div className="field search-field is-grouped">
        <p className="control is-expanded">
          <input
            className="input is-small"
            type="text"
            placeholder="Introdueix el codi postal"
          />
        </p>
        <p class="control">
          <button href="#" class="button is-small search-button" type="submit">Cerca</button>
        </p>
      </div>
    );
  }
}

export default SearchInput;
