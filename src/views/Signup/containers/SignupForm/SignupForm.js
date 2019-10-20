import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import './SignupForm.css';

class SignupForm extends Component {
  render() {
    return (
      <section className="hero is-light is-fullheight">
        <div className="hero-body form-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box">
                  <h2 className="title is-3 has-text-centered">Registra't</h2>
                  <div className="field">
                    <label className="label">Nom d'usuari</label>
                    <div className="control has-icons-left">
                      <input
                        name="username"
                        type="text"
                        placeholder="Silent Bob"
                        className="input"
                        //required TODO make own validations
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Nom</label>
                    <div className="control has-icons-left">
                      <input
                        name="name"
                        type="text"
                        placeholder="Bob"
                        className="input"
                        //required TODO make own validations
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Cognoms</label>
                    <div className="control has-icons-left">
                      <input
                        name="surname"
                        type="text"
                        placeholder="Smith"
                        className="input"
                        //required TODO make own validations
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Codi Postal</label>
                    <div className="control has-icons-left">
                      <input
                        name="postalCode"
                        type="text"
                        placeholder="08339"
                        className="input"
                        //required TODO make own validations
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        type="email"
                        placeholder="bobsmith@gmail.com"
                        className="input"
                        //required TODO make own validations
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                        //required TODO make own validations
                      />
                    </div>
                  </div>
                  <div className="field has-text-centered">
                    <button className="button is-info">Signup</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignupForm;
