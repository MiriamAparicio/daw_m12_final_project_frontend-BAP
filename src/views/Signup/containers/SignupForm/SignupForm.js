import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SignupForm.css';

import {
  validateUsername,
  validatePostalCode,
  validateEmail,
  validatePassword
} from '../../../../utils/validations';
import { ERROR_MESSAGES } from '../../../../utils/error-messages';

class SignupForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    error: PropTypes.string.isRequired
  };

  state = {
    username: '',
    name: '',
    surname: '',
    postalCode: '',
    email: '',
    password: '',
    formErrors: {},
    usernameValid: false,
    emailValid: false,
    postalCodeValid: false,
    passwordValid: false,
    formValid: false
  };

  onChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value
      },
      this.validateFields(name, value)
    );
  };

  validateFields = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let postalCodeValid = this.state.postalCodeValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let error = '';

    switch (fieldName) {
      case 'username':
        if (!value) {
          error = ERROR_MESSAGES[4];
        } else {
          usernameValid = validateUsername(value);
          error = usernameValid ? '' : ERROR_MESSAGES[5];
        }
        fieldValidationErrors.username = error;
        break;
      case 'postalCode':
        if (!value) {
          error = ERROR_MESSAGES[4];
        } else {
          postalCodeValid = validatePostalCode(value);
          error = postalCodeValid ? '' : ERROR_MESSAGES[8];
        }
        fieldValidationErrors.postalCode = error;
        break;
      case 'email':
        if (!value) {
          error = ERROR_MESSAGES[4];
        } else {
          emailValid = validateEmail(value);
          error = emailValid ? '' : ERROR_MESSAGES[6];
        }
        fieldValidationErrors.email = error;
        break;
      case 'password':
        if (!value) {
          error = ERROR_MESSAGES[4];
        }
        passwordValid = validatePassword(value);
        error = passwordValid ? '' : ERROR_MESSAGES[7];
        fieldValidationErrors.password = error;
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        usernameValid,
        postalCodeValid,
        emailValid,
        passwordValid
      },
      this.validateForm
    );
  };

  validateForm = () => {
    const {
      usernameValid,
      postalCodeValid,
      emailValid,
      passwordValid
    } = this.state;
    this.setState({
      formValid: usernameValid && postalCodeValid && emailValid && passwordValid
    });
  };

  render() {
    const {
      formErrors,
      formValid,
      username,
      name,
      surname,
      postalCode,
      email,
      password
    } = this.state;
    return (
      <section
        data-test="component-signupForm"
        className="hero is-fullheight form-hero"
      >
        <div className="hero-body form-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box">
                  <h2 className="is-3 has-text-left form-title">
                    Registre d'usuari
                  </h2>
                  <div className="field">
                    <label className="label form-label">Nom d'usuari</label>
                    <div className="control has-icons-left">
                      <input
                        onChange={this.onChange}
                        name="username"
                        type="text"
                        placeholder="Silent Bob"
                        className={`input ${formErrors.username &&
                          'is-danger'}`}
                        value={username}
                      />
                      {formErrors.username && (
                        <p className="help has-text-left is-danger">
                          {formErrors.username}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label className="label form-label">Nom</label>
                    <div className="control has-icons-left">
                      <input
                        onChange={this.onChange}
                        name="name"
                        type="text"
                        placeholder="Bob"
                        className="input"
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label form-label">Cognoms</label>
                    <div className="control has-icons-left">
                      <input
                        onChange={this.onChange}
                        name="surname"
                        type="text"
                        placeholder="Smith"
                        className="input"
                        value={surname}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label form-label">Codi Postal</label>
                    <div className="control has-icons-left">
                      <input
                        onChange={this.onChange}
                        name="postalCode"
                        type="text"
                        placeholder="08339"
                        className={`input ${formErrors.postalCode &&
                          'is-danger'}`}
                        value={postalCode}
                      />
                      {formErrors.postalCode && (
                        <p className="help has-text-left is-danger">
                          {formErrors.postalCode}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label className="label form-label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        name="email"
                        onChange={this.onChange}
                        type="email"
                        placeholder="bobsmith@gmail.com"
                        className={`input ${formErrors.email && 'is-danger'}`}
                        value={email}
                      />
                      {formErrors.email && (
                        <p className="help has-text-left is-danger">
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label className="label form-label">Contrasenya</label>
                    <div className="control has-icons-left">
                      <input
                        name="password"
                        onChange={this.onChange}
                        type="password"
                        placeholder="*******"
                        className={`input ${formErrors.password &&
                          'is-danger'}`}
                        value={password}
                      />
                      {formErrors.password && (
                        <p className="help has-text-left is-danger">
                          {formErrors.password}
                        </p>
                      )}
                    </div>
                  </div>
                  {this.props.error && (
                    <p className="help has-text-left is-danger">
                      {this.props.error}
                    </p>
                  )}
                  <div className="field has-text-centered">
                    <button
                      onClick={this.props.handleSubmit(this.state)}
                      className="button button-text form-button"
                      disabled={!formValid}
                    >
                      Envia
                    </button>
                  </div>
                </form>
                <div>
                  <p className="has-text-centered login-foot">
                    Ja tens un compte?{' '}
                    <Link to="/login" className="coloured-text">
                      Inicia sessió
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignupForm;
