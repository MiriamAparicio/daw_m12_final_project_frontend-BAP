import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { withRouter } from 'react-router-dom';
import * as userActionCreators from '../../../../store/user/actions';
import './Profile.css';

import NavBar from '../../../../components/NavBar/NavBar';
import ProfileForm from '../ProfileForm/ProfileForm';

class Profile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    isLogin: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  };

  handleSubmit = ({
    username,
    name,
    surname,
    postalCode,
    email,
    password
  }) => e => {
    e.preventDefault();
    //send location instead of postalCode ("00000000Mn")
    const location = {
      lat: 123456,
      lng: 123456
    };
    this.props
      .handleSignup({
        username,
        name,
        surname,
        email,
        password,
        location,
        postalCode
      })
      .then(() => {
        this.props.history.replace('/anuncis');
      });
  };

  render() {
    return (
      <>
        <NavBar isUserLogged={!!this.props.user} />
        <section id="profile" className="section container">
          <ProfileForm handleSubmit={this.handleSubmit} />
        </section>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.data,
  isLogin: user.isLogin,
  error: user.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
