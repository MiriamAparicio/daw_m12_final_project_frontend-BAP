import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResultsList from './../components/ResultsList/ResultsList';
import ResultsSearch from './../components/ResultsSearch/ResultsSearch';
import postService from '../../../services/post-service';
import './Anuncis.css';
import { POSTS_BREADCRUMBS } from '../../../utils/constants';

import NavBar from '../../../components/NavBar/NavBar';

class Anuncis extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  state = {
    cp: '',
    distance: 30,
    data: [],
    filter: {
      babysitter: true,
      cleaner: true,
      pets: true,
      classes: true,
    }
  }

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        ...this.state,
        cp: this.props.location.state.cp,
      }, this.handleSearchClick)
    }
  }

  handlePostOnClick = (e) => {
    const userId = e.currentTarget.getAttribute('id');
    this.props.history.push({
      pathname: `/profile/${userId}`,
      as: '/profile'
    });
  }

  handleFilterClick = (e) => {
    const prop = e.currentTarget.getAttribute('id');

    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        [prop]: !prevState.filter[prop]
      }
    }));
  };

  handleSearchClick = () => {
    const token = this.props.token;
    postService.fetchPostByPC(this.state.cp, token, this.state.distance)
      .then(response => {
        this.setState({
          ...this.state,
          data: response.data.ads,
        })
      }
      )
  }

  handleInput = (e) => {
    this.setState({
      ...this.state,
      cp: e.target.value,
    })
  }

  handleSelect = (e) => {
    this.setState({
      ...this.state,
      distance: e.target.value,
    })
  }

  render() {
    return (
      <>
        <NavBar
          isUserLogged={!!this.props.user}
          breadcrumbs={POSTS_BREADCRUMBS}
        />
        <section id="anuncis" className="section is-medium results-container">
          <div className="hero-body">
            <div className="container">
              <ResultsSearch
                query={this.state.cp}
                onFilterClick={this.handleFilterClick}
                onSearchClick={this.handleSearchClick}
                onInputChange={this.handleInput}
                onSelectChange={this.handleSelect}
                filter={this.state.filter} />
            </div>
            <div className="container">
              <ResultsList
                results={this.state.data}
                filter={this.state.filter}
                handlePostOnClick={this.handlePostOnClick} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user: user.data,
  token: user.token,
  isLoading: user.isLoading
});

export default connect(mapStateToProps)(Anuncis);
