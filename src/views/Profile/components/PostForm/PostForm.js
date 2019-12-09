import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PostForm.css';

import { MAX_KM } from '../../../../utils/constants';
import ServiceLabel from '../../../../components/ServiceLabel/ServiceLabel';

class PostForm extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    userId: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    handleCancelPublish: PropTypes.func,
    handleCreatePost: PropTypes.func,
    handleDeletePost: PropTypes.func
  };

  state = {
    title: ' ',
    description: ' ',
    range: ' ',
    services: {
      babysitter: true,
      cleaner: true,
      pets: true,
      classes: true
    },
    price: 0,
    isEditable: true,
    formValid: false
  };

  componentDidMount() {
    if (this.props.post._id) {
      const { userId, post } = this.props;
      this.setState({
        title: post.title,
        description: post.description,
        range: post.range,
        services: post.services,
        price: post.price,
        isEditable: userId === post.owner
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.post._id !== this.props.post._id ||
      prevProps.post.error !== this.props.post.error
    ) {
      const { userId, post } = this.props;
      this.setState({
        title: post.title,
        description: post.description,
        range: post.range,
        services: post.services,
        price: post.price,
        isEditable: userId === post.owner
      });
    }
  }

  getSelectOption() {
    const options = [];

    for (let i = 0; i <= MAX_KM; i = i + 5) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  }

  onChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(
      {
        [name]: value
      },
      this.validateForm
    );
  };

  validateForm = () => {
    const { title, description } = this.state;
    this.setState({
      formValid: title && description
    });
  };

  handleServiceClick = e => {
    const service = e.currentTarget.getAttribute('id');

    this.setState(prevState => ({
      services: {
        ...prevState.services,
        [service]: !prevState.services[service]
      }
    }));
  };

  handlePublishPost = () => {
    const { title, description, range, services, price } = this.state;
    this.props.handleCreatePost({ title, description, range, services, price });
  };

  render() {
    const {
      title,
      description,
      price,
      range,
      isEditable,
      formValid
    } = this.state;
    const options = this.getSelectOption();
    return (
      <div className="columns is-vcentered post-form is-multiline">
        <div className="column is-three-fifths is-four-fifths-mobile post-column">
          <h3>Anunci</h3>

          <div className="field">
            <label className="label">Títol</label>
            <div className="control">
              <input
                name="title"
                className="input"
                type="text"
                value={title}
                onChange={this.onChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Descripció</label>
            <div className="control">
              <textarea
                name="description"
                className="textarea has-fixed-size"
                value={description}
                onChange={this.onChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="column is-three-quarters-mobile">
          <div className="services-list">
            <label className="label service-label">
              Tipus de servei ofertat
            </label>
            <ServiceLabel
              service="babysitter"
              onClickHandler={this.handleServiceClick}
              serviceStates={this.state.services}
            />
            <ServiceLabel
              service="cleaner"
              onClickHandler={this.handleServiceClick}
              serviceStates={this.state.services}
            />
            <ServiceLabel
              service="pets"
              onClickHandler={this.handleServiceClick}
              serviceStates={this.state.services}
            />
            <ServiceLabel
              service="classes"
              onClickHandler={this.handleServiceClick}
              serviceStates={this.state.services}
            />
          </div>
          <div className="field range-field">
            <label className="label">Distància màxima</label>
            <div className="control">
              <div className="select is-small">
                <select name="range" value={range} onChange={this.onChange}>
                  {options}
                </select>
              </div>
            </div>
          </div>
          <div>
            <label className="label  price-field">Preu/hora</label>
          </div>
          <div className="field price-field has-addons">
            <div className="control">
              <input
                name="price"
                className="input is-small"
                min="0"
                type="number"
                placeholder="0"
                value={price}
                onChange={this.onChange}
              />
            </div>
            <p className="control">
              <span className="button is-small is-static">€</span>
            </p>
          </div>
        </div>
        {isEditable && (
          <div className="column post-column">
            {this.props.error && (
              <p className="help has-text-left is-danger">{this.props.error}</p>
            )}
            <div className="field is-grouped is-grouped-left">
              <div className="control">
                {this.props.post._id ? (
                  <button
                    onClick={() => {}}
                    className="button button-text form-button"
                    disabled={!formValid}
                  >
                    Edita
                  </button>
                ) : (
                  <button
                    onClick={this.handlePublishPost}
                    className="button button-text form-button"
                    disabled={!formValid}
                  >
                    Publica
                  </button>
                )}
              </div>
              <div className="control">
                {this.props.post._id ? (
                  <button
                    onClick={this.props.handleDeletePost}
                    className="button button-text form-button"
                  >
                    Eliminar
                  </button>
                ) : (
                  <button
                    onClick={this.props.handleCancelPublish}
                    className="button button-text form-button"
                  >
                    Cancel·la
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PostForm;
