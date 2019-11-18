import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Anuncis.css';
import ResultsList from './../components/ResultsList/ResultsList';
import ResultsSearch from './../components/ResultsSearch/ResultsSearch';

import NavBar from '../../../components/NavBar/NavBar';

class Anuncis extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      filter: {
        babysitter: false,
        cleaner: false,
        pets: false,
        classes: false,
      }
    }
  }
  
  handleAdOnClick = (e) => {
    const adId = e.currentTarget.getAttribute('id');
    //TODO link to ad detail page
    console.log(adId);
  }

  handleFilterClick = (e) => {

    const prop = e.currentTarget.getAttribute('id');

    this.setState( prevState => ({
      filter: {
        ...prevState.filter,
        [prop]: !prevState.filter[prop]
      }
    }));
  }

  render() {
    return (
      <>
        <NavBar isUserLogged={!!this.props.user} />
        <section id="anuncis" className="hero is-fullheight is-fullwidth form-hero">
          <div className="hero-body">
            <div className="container">
              <ResultsSearch
                query="08294"
                onFilterClick={this.handleFilterClick}
                filter={this.state.filter}></ResultsSearch>
              <ResultsList
                filter={this.state.filter}
                handleAdOnClick={this.handleAdOnClick}></ResultsList>
            </div>
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
