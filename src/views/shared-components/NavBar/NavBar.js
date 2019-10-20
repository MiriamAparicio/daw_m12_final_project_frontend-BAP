import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <span>BEN A PROP</span>
          </div>
        </div>
        <div className="navbar-item">
          <a href="/login" className="button is-rounded icon is-medium">
            <i className="far fa-user user-icon-color"></i>
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
