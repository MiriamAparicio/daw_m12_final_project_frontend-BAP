import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavBar.css';

class NavBar extends Component {
  static propTypes = {
    showIcon: PropTypes.bool,
    isUserLogged: PropTypes.bool.isRequired
  };

  static defaultProps = {
    showIcon: true
  };

  render() {
    const url = this.props.isUserLogged ? '/profile' : '/login';
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <div className="navbar-item logo">
            <Link to="/">
              <img src={require('../../images/logoBap.png')} alt="logo" />
            </Link>
          </div>
        </div>
        {this.props.showIcon && (
          <div className="navbar-item user-icon">
            <Link to={url} className="button is-rounded icon is-medium">
              <i className="far fa-user user-icon-color"></i>
            </Link>
          </div>
        )}
      </nav>
    );
  }
}

export default NavBar;
