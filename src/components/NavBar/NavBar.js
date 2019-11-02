import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';

class NavBar extends Component {
  static propTypes = {
    showIcon: PropTypes.bool
  };

  static defaultProps = {
    showIcon: true
  };

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item logo">
            <a href="/">
              <img src={require('../../images/logoBap.png')} alt="logo" />
            </a>
          </div>
        </div>
        {this.props.showIcon && (
          <div className="navbar-item user-icon">
            <a href="/login" className="button is-rounded icon is-medium">
              <i className="far fa-user user-icon-color"></i>
            </a>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
