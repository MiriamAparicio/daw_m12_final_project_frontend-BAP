import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

import './PublicProfile.css';

class PublicProfile extends Component {
  static propTypes = {
    profile: PropTypes.object.isRequired
  };

  render() {
    const { profile, profile: { image } } = this.props;
    const fullName = `${profile.name} ${profile.surname}`;

    return (
      <>
        <div className="columns is-vcentered custom-columns owner-data">
          <div className="column is-four-fifths">
            <div className="owner-name">{fullName}</div>
            <div className="owner-location">
              {profile.postalCode}{' '}
              {profile.location ? `- ${profile.location.place}` : ''}
            </div>
            <div className="rating">
              <span className="avgRating">4</span>
              <Rating
                emptySymbol="far fa-star star"
                fullSymbol="fas fa-star star"
                initialRating="4"
                readonly
              />
            </div>
          </div>
          <div className="column is-vcentered owner-image">
            <figure className="image avatar is-96x96">
              <img
                className="is-rounded"
                src={image || 'https://bulma.io/images/placeholders/64x64.png'}
                alt={fullName}
              />
            </figure>
          </div>
        </div>
      </>
    );
  }
}

export default PublicProfile;
