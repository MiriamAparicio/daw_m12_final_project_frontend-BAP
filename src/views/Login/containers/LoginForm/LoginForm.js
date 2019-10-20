import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func
  };

  state = {
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
      <section className="hero is-light is-fullheight">
        <div className="hero-body form-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" className="box">
                  <h2 className="title is-3 has-text-centered">Login</h2>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        onChange={this.onChange}
                        name="email"
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
                        onChange={this.onChange}
                        name="password"
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
                      className="button is-info"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <div>
                  <p>
                    Encara no tens compte? <a href="/signup">Registra't</a>.
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
