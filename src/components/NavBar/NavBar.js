import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './NavBar.css';

class NavBar extends Component {
  static propTypes = {
    showIcon: PropTypes.bool,
    isUserLogged: PropTypes.bool.isRequired,
    breadcrumbs: PropTypes.array
  };

  static defaultProps = {
    showIcon: true,
    breadcrumbs: []
  };

  render() {
    const url = this.props.isUserLogged ? `/profile/${this.props.user._id}` : '/login';

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
                <Link replace to={url} className="button is-rounded icon is-medium">
                  <i className="far fa-user user-icon-color"></i>
                </Link>
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
});


export default connect(mapStateToProps)(NavBar);

