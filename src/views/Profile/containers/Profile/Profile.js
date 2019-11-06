import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import profileService from '../../../../services/profile-service';
import * as userActionCreators from '../../../../store/user/actions';
import './Profile.css';

import NavBar from '../../../../components/NavBar/NavBar';
import ProfileForm from '../ProfileForm/ProfileForm';

class Profile extends Component {
  static propTypes = {
    isLogin: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    token: PropTypes.string.isRequired,
    handleUpdateUser: PropTypes.func.isRequired
  };

  state = {
    profile: {},
    isEditting: false
  };

  componentDidMount() {
    const { user, token } = this.props;
    this.handleFetchUserProfile(user._id, token);
  }

  handleFetchUserProfile(id, token) {
    return profileService
      .fetchUserProfile(id, token)
      .then(response => {
        this.setState({
          profile: response.data.user
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  handleSubmit = ({ username, name, surname, postalCode, email }) => e => {
    e.preventDefault();
    this.props
      .handleUpdateUser(
        {
          username,
          name,
          surname,
          email,
          postalCode
        },
        this.props.token
      )
      .then(() => {
        const { user, token } = this.props;
        this.setState({ isEditting: false });
        this.handleFetchUserProfile(user._id, token);
      });
  };

  render() {
    return (
      <>
        <NavBar isUserLogged={!!this.props.user} />
        <section id="profile" className="hero is-fullheight is-fullwidth form-hero">
          <ProfileForm
            user={this.props.user}
            profile={this.state.profile}
            handleSubmit={this.handleSubmit}
            isEditting={this.state.isEditting}
          />
        </section>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.data,
  isLogin: user.isLogin,
  error: user.error,
  token: user.token
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
