import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as userActionCreators from '../../../../store/user/actions';

import NavBar from '../../../../components/NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';

class Login extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    isLogin: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  };

  handleSubmit = ({ email, password }) => e => {
    e.preventDefault();
    return this.props.handleLogin({ email, password }).then(() => {
      this.props.history.replace('/anuncis');
    });
  };

  render() {
    return (
      <>
        <NavBar showIcon={false} />
        <LoginForm handleSubmit={this.handleSubmit} />
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  isLogin: user.isLogin,
  error: user.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActionCreators, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
