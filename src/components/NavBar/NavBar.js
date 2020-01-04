import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logout from './Logout/Logout';
import './NavBar.css';

class NavBar extends Component {
  static propTypes = {
    showIcon: PropTypes.bool,
    isUserLogged: PropTypes.bool.isRequired,
    breadcrumbs: PropTypes.array,
    token: PropTypes.string
  };

  static defaultProps = {
    showIcon: true,
    breadcrumbs: []
  };

  render() {
    const url = this.props.isUserLogged ? `/profile/${this.props.user._id}` : '/login';
    const { image } = this.props.user;

    return (
      <nav
        className="navbar breadcrumb is-fixed-top is-transparent is-white"
        role="navigation"
        aria-label="breadcrumbs"
      >
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item logo">
              <Link to="/">
                <img src={require('../../images/logoBap.png')} alt="logo" />
              </Link>
            </div>
            <ul className="navbar-breadcrumbs">
              {this.props.breadcrumbs.map((breadcrumb, index) => {
                const className = classNames({
                  'is-active': breadcrumb.current
                });
                return (
                  <li key={`${breadcrumb.name}${index}`} className={className}>
                    <Link to={breadcrumb.url}>{breadcrumb.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {this.props.showIcon && (
            <div className="navbar-menu">
              <div className="navbar-end user-icon">
                {this.props.token ? (
                  <>
                    <Logout />
                    <Link replace to={url} className="button is-rounded icon is-medium navbar-icon">
                      <figure className="image is-32x32">
                        <img className="is-rounded" src={image || 'https://bulma.io/images/placeholders/128x128.png'} alt='imagead' />
                      </figure>
                    </Link>
                  </>
                )
                  :
                  <Link className="navbar-text" to="/login">Logeja't</Link>
                }
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

