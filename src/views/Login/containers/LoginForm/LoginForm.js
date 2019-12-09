import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './LoginForm.css';

export class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    error: PropTypes.string.isRequired
  };

  state = {
    email: '',
    password: '',
    formErrors: {}
  };

  onChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <section
        data-test="component-loginForm"
        className="hero is-fullheight form-hero"
      >
        <div className="hero-body form-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box">
                  <h2 className="is-3 has-text-left form-title">
                    Inici sessió
                  </h2>
                  <div className="field">
                    <label className="label form-label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        onChange={this.onChange}
                        name="email"
                        type="email"
                        placeholder="bobsmith@gmail.com"
                        className="input"
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label form-label">Contrasenya</label>
                    <div className="control has-icons-left">
                      <input
                        onChange={this.onChange}
                        name="password"
                        type="password"
                        placeholder="*******"
                        className="input"
                        value={password}
                      />
                    </div>
                  </div>
                  {this.props.error && (
                    <p className="help has-text-left is-danger">
                      {this.props.error}
                    </p>
                  )}
                  <div className="field has-text-centered">
                    <button
                      onClick={this.props.handleSubmit(email, password)}
                      className="button button-text form-button"
                    >
                      Envia
                    </button>
                  </div>
                </form>
                <div>
                  <p className="login-foot has-text-centered">
                    Encara no tens compte?{' '}
                    <Link to="/signup" className="coloured-text">
                      Registra't
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

export default LoginForm;
