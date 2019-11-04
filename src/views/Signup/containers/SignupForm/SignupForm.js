import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SignupForm.css';

class SignupForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  };

  state = {
    username: '',
    name: '',
    surname: '',
    postalCode: '',
    email: '',
    password: ''
  };

  onChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  render() {
    return (
      <section className="hero is-fullheight form-hero">
        <div className="hero-body form-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box">
                  <h2 className="is-3 has-text-left form-title">Registre d'usuari</h2>
                  <div className="field">
                    <label className="label form-label">Nom d'usuari</label>
                    <div className="control has-icons-left">
                      <input
                        onChange={this.onChange}
                        name="username"
                        type="text"
                        placeholder="Silent Bob"
                        className="input"
                        //required TODO make own validations
                      />
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
                        //required TODO make own validations
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
                        //required TODO make own validations
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
                        className="input"
                        //required TODO make own validations
                      />
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
                        className="input"
                        //required TODO make own validations
                      />
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
                        className="input"
                        //required TODO make own validations
                      />
                    </div>
                  </div>
                  <div className="field has-text-centered">
                    <button
                      onClick={this.props.handleSubmit(this.state)}
                      className="button button-text"
                    >
                      Envia
                    </button>
                  </div>
                </form>
                <div>
                  <p className="has-text-centered login-foot">
                    Ja tens un compte? <a href="/login" className="coloured-text">Inicia sessió</a>.
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
