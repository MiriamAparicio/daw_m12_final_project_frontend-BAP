import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './HomePage.css';
import { STEPS_SEARCH, STEPS_OFFER } from '../../../utils/copy-texts';
import NavBar from '../../../components/NavBar/NavBar';
import SearchBanner from '../components/SearchBanner/SearchBanner';
import InfoCard from '../components/InfoCard/InfoCard';

class HomePage extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    return (
      <>
        <NavBar isUserLogged={!!this.props.user} />
        <SearchBanner />
        <section className="section">
          <h1 className="title has-text-centered">Com funciona?</h1>
          <div className="columns info-cards">
            <InfoCard
              dotColor="red"
              titleKey="contractar"
              image="contracta.png"
              stepsList={STEPS_SEARCH}
            />
            <InfoCard
              dotColor="green"
              titleKey="oferir"
              image="ofereix.png"
              stepsList={STEPS_OFFER}
            />
          </div>
        </section>
      </>
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
)(HomePage);
