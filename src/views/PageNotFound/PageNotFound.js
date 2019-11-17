import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
      <div className="tile is-parent has-text-centered">
        <article className="tile is-child notification">
          <p className="title">404 Page Not Found</p>
          <p className="subtitle">Torna enrere</p>
          <figure className="image is-128x128 is-inline-block">
            <Link to="/">
              <img src={require('../../images/logoBap.png')} alt="logo" />
            </Link>
          </figure>
        </article>
      </div>
    );
  }
}

export default PageNotFound;
