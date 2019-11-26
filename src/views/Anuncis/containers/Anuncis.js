import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Anuncis.css';
import ResultsList from './../components/ResultsList/ResultsList';
import ResultsSearch from './../components/ResultsSearch/ResultsSearch';

import NavBar from '../../../components/NavBar/NavBar';


const data = [
  {
    _id: "5dd45c45fd7daa922fd82e34",
    title: "S'ofereix professor per classes particulars",
    description: "Hola, m'ofereixo per moltes coses",
    rang: 10,
    services: {
      babysitter: false,
      classes: true,
      cleaner: false,
      pets: false,
    },
    price: 15,
    owner: {
      type: 1234,
      name: 'Francesc Muñoz',
      username: 'franlol',
      avgRating: 5
    },
  },
  {
    _id: "5dd45c55fd7daa922fd82e35",
    title: 'Noia responsable per cangurs i neteja',
    description: "Hola, jo també m'ofereixo per moltes coses",
    rang: 10,
    services: {
      babysitter: true,
      classes: false,
      cleaner: true,
      pets: false,
    },
    price: 15,
    owner: {
      type: 6789,
      name: 'Xavi Sánchez',
      username: 'xavixanxe',
      avgRating: 3.5
    },
  },
  {
    _id: "5dd45c55fd7daa922fd82e36",
    title: 'Programadora per classes particulars',
    description: "Hola, jo també m'ofereixo per moltes coses",
    rang: 10,
    services: {
      babysitter: false,
      classes: true,
      cleaner: false,
      pets: false,
    },
    price: 15,
    owner: {
      type: 54321,
      name: 'Miriam Aparicio',
      username: 'miriamap',
      avgRating: 4.5
    },
  },
];


class Anuncis extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  constructor() {
    super();

    this.state = {
      filter: {
        babysitter: true,
        cleaner: true,
        pets: true,
        classes: true,
      }
    }
  }

  handlePostOnClick = (e) => {
    const postId = e.currentTarget.getAttribute('id');
    //TODO link to ad detail page
    console.log(postId);
  }

  handleFilterClick = (e) => {

    const prop = e.currentTarget.getAttribute('id');

    this.setState(prevState => ({
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
        <section id="anuncis" className="hero is-fullheight-with-navbar is-fullwidth form-hero">
          <div className="hero-body posts-body">
            <div className="container">
              <ResultsSearch
                query="08294"
                onFilterClick={this.handleFilterClick}
                filter={this.state.filter}></ResultsSearch>
              <ResultsList
                results={data}
                filter={this.state.filter}
                query="08294"
                handlePostOnClick={this.handlePostOnClick}></ResultsList>
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
