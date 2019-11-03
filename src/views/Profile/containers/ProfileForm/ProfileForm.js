import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './ProfileForm.css';

class ProfileForm extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func
  };

  state = {
    username: '',
    name: '',
    surname: '',
    postalCode: '',
    email: '',
    isEditable: false,
    isEditting: false
  };

  componentDidMount() {
    //todo get data from get user endpoint instead of the store
    const { user } = this.props;

    this.setState({
      username: user.username,
      name: user.name,
      surname: user.surname,
      postalCode: user.cp,
      email: user.email,
      isEditable: user._id === user._id //TODO check ids from logged user or users
    });
  }

  onChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
  };

  handleEditProfile = () => {
    this.setState({
      isEditting: true
    });
  };

  handleCancel = () => {
    this.setState({
      isEditting: false
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
      isEditting //TODO check ids from logged user or users
    } = this.state;

    const inputClasses = classNames('input', {
      'input-is-read-only': !this.state.isEditting,
      'is-static': !isEditting
    });
    return (
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns box is-vcentered custom-columns">
              <div className="column"></div>
              <div className="column is-three-fifths">
                <h2 className="title is-3 has-text-centered">Perfil</h2>
                {/* USERNAME */}
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
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
                          className={inputClasses}
                          value={username}
                          readOnly={!isEditting}
                          //required TODO make own validations
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* NAME */}
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
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
                          //required TODO make own validations
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* SURNAME */}
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
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
                          //required TODO make own validations
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* POSTALCODE */}
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
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
                          className={inputClasses}
                          value={postalCode}
                          readOnly={!isEditting}
                          //required TODO make own validations
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* EMAIL */}
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
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
                          className={inputClasses}
                          value={email}
                          readOnly={!isEditting}
                          //required TODO make own validations
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {isEditable &&
                  (!isEditting ? (
                    <div className="field">
                      <button
                        onClick={this.handleEditProfile}
                        className="button is-success is-fullwidth"
                      >
                        Edita
                      </button>
                    </div>
                  ) : (
                    <div className="field is-grouped is-grouped-centered">
                      <div className="control">
                        <button
                          onClick={() => {}}
                          className="button is-info is-fullwidth"
                        >
                          Desa
                        </button>
                      </div>
                      <div className="control">
                        <button
                          onClick={this.handleCancel}
                          className="button is-link is-light is-fullwidth"
                        >
                          Cancel·la
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="column">
                <div className="colums">
                  <div className="column has-text-centered">
                    <figure className="image avatar is-128x128">
                      <img
                        className="is-rounded"
                        src="https://bulma.io/images/placeholders/128x128.png"
                      />
                    </figure>
                  </div>
                  <div className="column has-text-centered">
                    <p>{username}</p>
                  </div>
                  <div className="column has-text-centered">
                    <span className="rate">4,5</span>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                  <div className="column has-text-centered">
                    <p>4 comentaris</p>
                  </div>
                </div>
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.data,
  isLoading: user.isLoading
});

export default connect(
  mapStateToProps,
  {}
)(ProfileForm);
