import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logout from './Logout/Logout';
import './NavBar.css';

class NavBar extends Component {
  static propTypes = {
    showIcon: PropTypes.bool,
    isUserLogged: PropTypes.bool.isRequired,
    token: PropTypes.string
  };

  static defaultProps = {
    showIcon: true
  };

  handleBurgerMenu = () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const navbarMenu = document.getElementById('navbarMenu');
    burgerMenu.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
  };

  render() {
    const url = this.props.isUserLogged
      ? `/profile/${this.props.user._id}`
      : '/login';
    const { image } = this.props.user;

    return (
      <nav
        className="navbar is-fixed-top is-transparent is-white"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item logo">
              <Link to="/">
                <img src={require('../../images/logoBap.png')} alt="logo" />
              </Link>
            </div>
            {this.props.showIcon && (
              <div
                id="burgerMenu"
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={this.handleBurgerMenu}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </div>
            )}
          </div>
          {this.props.showIcon && (
            <div id="navbarMenu" className="navbar-menu">
              <div className="navbar-start">
                <Link replace to="/" className="navbar-item">
                  Inici
                </Link>

                <Link replace to="/anuncis" className="navbar-item">
                  Anuncis
                </Link>
              </div>
              <div className="navbar-end user-icon">
                <div className="navbar-item has-dropdown is-hoverable">
                  <div className="button is-rounded icon is-medium navbar-icon navbar-link is-arrowless">
                    {image ? (
                      <img className="navbar-icon-img is-rounded" src={image} alt="imagead" />
                    ) : (
                      <div>
                        <i className="far fa-user user-icon-color"></i>
                      </div>
                    )}
                  </div>
                  <div className="navbar-dropdown is-right is-boxed">
                    <Link
                      replace
                      to={url}
                      style={{ color: 'darkgrey', fontWeight: '700' }}
                      className="navbar-item"
                    >
                      {this.props.token ? 'Perfil' : 'Inicia sessió'}
                    </Link>
                    {this.props.token && (
                      <div className="navbar-item">
                        <Logout />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.data,
  token: user.token
});

export default connect(mapStateToProps)(NavBar);
