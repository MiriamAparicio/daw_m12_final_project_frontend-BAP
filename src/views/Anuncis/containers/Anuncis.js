import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Anuncis.css';
import ResultsList from './../components/ResultsList/ResultsList';

import NavBar from '../../../components/NavBar/NavBar';

class Anuncis extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    return (
      <>
        <NavBar isUserLogged={!!this.props.user} />
        <section id="anuncis" className="hero is-fullheight is-fullwidth form-hero">
          <div className="hero-body">
            <ResultsList></ResultsList>
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
)(Anuncis);
