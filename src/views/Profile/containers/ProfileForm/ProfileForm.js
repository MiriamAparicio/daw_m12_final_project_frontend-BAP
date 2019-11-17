import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './ProfileForm.css';

import {
  validateUsername,
  validatePostalCode,
  validateEmail
} from '../../../../utils/validations';
import { ERROR_MESSAGES } from '../../../../utils/error-messages';

class ProfileForm extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func,
    isEditting: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  };

  state = {
    username: '',
    name: '',
    surname: '',
    postalCode: '',
    email: '',
    isEditable: false,
    isEditting: false,
    formErrors: {},
    usernameValid: true,
    emailValid: true,
    postalCodeValid: true,
    formValid: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { user, profile, isEditting } = this.props;
      this.setState({
        username: profile.username,
        name: profile.name,
        surname: profile.surname,
        postalCode: profile.cp,
        email: profile.email,
        isEditable: user._id === profile._id,
        isEditting
      });
    }
  }

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
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        usernameValid,
        postalCodeValid,
        emailValid
      },
      this.validateForm
    );
  };

  validateForm = () => {
    const { usernameValid, postalCodeValid, emailValid } = this.state;
    this.setState({
      formValid: usernameValid && postalCodeValid && emailValid
    });
  };

  handleEditProfile = () => {
    this.setState({
      isEditting: true
    });
  };

  handleCancel = () => {
    const { profile } = this.props;
    this.setState({
      username: profile.username,
      name: profile.name,
      surname: profile.surname,
      postalCode: profile.cp,
      email: profile.email,
      isEditting: false,
      formErrors: {}
    });
  };

  render() {
    const {
      username,
      name,
      surname,
      postalCode,
      email,
      isEditable,
      isEditting,
      formErrors,
      formValid
    } = this.state;

    const inputClasses = classNames('input input-text', {
      'input-is-read-only': !this.state.isEditting,
      'is-static': !isEditting
    });
    return (
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div
              className="column is-three-fifths-desktop is-four-fifths-tablet
              is-offset-one-fifth-desktop is-offset-1-tablet box main"
            >
              <h2 className="form-title is-3 has-text-left is-hidden-tablet">
                Perfil
              </h2>

              <div className="columns is-vcentered custom-columns">
                <div className="column is-three-fifths is-four-fifths-mobile  profile-column right-border">
                  <h2 className="form-title is-3 has-text-left is-hidden-mobile">
                    Perfil
                  </h2>

                  {/* USERNAME */}
                  <div className="field is-horizontal">
                    <div className="field-label form-label is-normal">
                      <label className="label">Nom d'usuari</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input
                            onChange={this.onChange}
                            name="username"
                            type="text"
                            placeholder="Silent Bob"
                            className={`${inputClasses} ${formErrors.username &&
                              'is-danger'}`}
                            value={username}
                            readOnly={!isEditting}
                          />
                          {formErrors.username && (
                            <p className="help has-text-left is-danger">
                              {formErrors.username}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* NAME */}
                  <div className="field is-horizontal">
                    <div className="field-label form-label is-normal">
                      <label className="label">Nom</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input
                            onChange={this.onChange}
                            name="name"
                            type="text"
                            placeholder="Bob"
                            className={inputClasses}
                            value={name}
                            readOnly={!isEditting}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* SURNAME */}
                  <div className="field is-horizontal">
                    <div className="field-label form-label is-normal">
                      <label className="label">Cognoms</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input
                            onChange={this.onChange}
                            name="surname"
                            type="text"
                            placeholder="Smith"
                            className={inputClasses}
                            value={surname}
                            readOnly={!isEditting}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* POSTALCODE */}
                  <div className="field is-horizontal">
                    <div className="field-label form-label is-normal">
                      <label className="label">Codi Postal</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input
                            onChange={this.onChange}
                            name="postalCode"
                            type="text"
                            placeholder="08339"
                            className={`${inputClasses} ${formErrors.postalCode &&
                              'is-danger'}`}
                            value={postalCode}
                            readOnly={!isEditting}
                          />
                          {formErrors.postalCode && (
                            <p className="help has-text-left is-danger">
                              {formErrors.postalCode}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* EMAIL */}
                  <div className="field is-horizontal">
                    <div className="field-label form-label is-normal">
                      <label className="label">Email</label>
                    </div>
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input
                            name="email"
                            onChange={this.onChange}
                            type="email"
                            placeholder="bobsmith@gmail.com"
                            className={`${inputClasses} ${formErrors.email &&
                              'is-danger'}`}
                            value={email}
                            readOnly={!isEditting}
                          />
                          {formErrors.email && (
                            <p className="help has-text-left is-danger">
                              {formErrors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {this.props.error && (
                    <p className="help has-text-left is-danger">
                      {this.props.error}
                    </p>
                  )}
                  {isEditable &&
                    (!isEditting && !this.props.error ? (
                      <div className="field">
                        <button
                          onClick={this.handleEditProfile}
                          className="button form-button button-text"
                        >
                          Edita
                        </button>
                      </div>
                    ) : (
                      <div className="field is-grouped is-grouped-left">
                        <div className="control">
                          <button
                            onClick={this.props.handleSubmit(this.state)}
                            className="button button-text form-button"
                            disabled={!formValid}
                          >
                            Desa
                          </button>
                        </div>
                        <div className="control">
                          <button
                            onClick={this.handleCancel}
                            className="button button-text form-button"
                          >
                            Cancel·la
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="column bottom-border is-three-quarters-mobile ">
                  <div className="separate has-text-centered">
                    <figure className="image avatar is-128x128">
                      <img
                        className="is-rounded"
                        src="https://bulma.io/images/placeholders/128x128.png"
                        alt={username}
                      />
                    </figure>
                  </div>
                  <div className="separate has-text-centered">
                    <p className="username">{this.props.profile.username}</p>
                  </div>
                  <div className="has-text-centered">
                    <span className="rate">4,5</span>
                    <i className="fas fa-star rate-stars"></i>
                    <i className="fas fa-star rate-stars"></i>
                    <i className="fas fa-star rate-stars"></i>
                    <i className="fas fa-star rate-stars"></i>
                    <i className="fas fa-star-half-alt rate-stars"></i>
                  </div>
                  <div className="separate has-text-centered">
                    <p>4 comentaris</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.data,
  isLoading: user.isLoading
});

export default connect(mapStateToProps, {})(ProfileForm);
