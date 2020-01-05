import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import * as userActionCreators from '../../../../store/user/actions';

import NavBar from '../../../../components/NavBar/NavBar';
import LoginForm from '../LoginForm/LoginForm';

export class Login extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
  };

  handleSubmit = (email, password) => e => {
    e.preventDefault();
    const { handleLogin, error, history } = this.props;
    handleLogin({ email, password }).then(() => {
      !error && history.replace('/');
    });
  };

  render() {
    return (
      <>
        <NavBar showIcon={false} isUserLogged={false} />
        <LoginForm handleSubmit={this.handleSubmit} error={this.props.error} />
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  error: user.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActionCreators, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
