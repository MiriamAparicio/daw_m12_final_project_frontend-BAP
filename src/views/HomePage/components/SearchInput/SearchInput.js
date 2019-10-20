import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class SearchInput extends Component {
  render() {
    return (
      <div class="field">
        <div class="control">
          <input
            class="input is-rounded"
            type="text"
            placeholder="Codi Postal"
          />
        </div>
      </div>
    );
  }
}

export default SearchInput;
