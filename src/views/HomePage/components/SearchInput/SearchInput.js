import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

//import PropTypes from 'prop-types';

class SearchInput extends Component {
  state = {
    postalCode: '',
    search: false
  };

  handleSearchClick = () => {
    this.setState({
      ...this.state,
      search: true
    });
  };

  handleInput = e => {
    this.setState({
      ...this.state,
      postalCode: e.target.value
    });
  };

  render() {
    if (this.state.search)
      return (
        <Redirect
          to={{
            pathname: '/anuncis',
            state: { postalCode: this.state.postalCode }
          }}
        />
      );
    return (
      <div className="field search-field is-grouped">
        <p className="control is-expanded">
          <input
            className="input is-small"
            type="text"
            placeholder="Introdueix el codi postal"
            onChange={this.handleInput}
          />
        </p>
        <p className="control input-control">
          <button
            href="#"
            className="button is-small search-button"
            type="submit"
            onClick={this.handleSearchClick}
          >
            Cerca
          </button>
        </p>
      </div>
    );
  }
}

export default SearchInput;
