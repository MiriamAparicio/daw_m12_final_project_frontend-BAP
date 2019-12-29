import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ServicesList from './../ServicesList/ServicesList';
import { MAX_KM } from '../../../../utils/constants';
import './ResultsSearch.css';

class ResultsSearch extends Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    onFilterClick: PropTypes.func.isRequired,
    onSearchClick: PropTypes.func.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSelectChange: PropTypes.func.isRequired,
    filter: PropTypes.shape({
      babysitter: PropTypes.bool.isRequired,
      cleaner: PropTypes.bool.isRequired,
      pets: PropTypes.bool.isRequired,
      classes: PropTypes.bool.isRequired,
    }),
  }

  getSelectOption() {
    const options = [];

    for (let i = 0; i <= MAX_KM; i = i + 5) {
      options.push(
        <option key={i} value={i} selected={i===30}>
          {i}
        </option>
      );
    }
    return options;
  }

  render() {
    const { query, onFilterClick, filter, onSelectChange, onInputChange, onSearchClick } = this.props;
    const options = this.getSelectOption();

    return (
      <div className="container" >
        <div className="columns">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="box search-container">
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input is-small text-input"
                    type="text"
                    onChange={onInputChange}
                    placeholder="Introdueix el codi postal"
                    defaultValue={query}
                  />
                </p>
                <label className="label select-label">Distància màxima</label>
                <div className="field">
                  <div className="control">
                    <div className="select is-small range-select">
                      <select onChange={onSelectChange}
                        name="range"
                        >
                        {options}
                      </select>
                    </div>
                  </div>
                </div>
                <p className="control">
                  <button href="#"
                    className="button is-small search-button"
                    type="submit"
                    onClick={onSearchClick}>
                    Cerca
                  </button>
                </p>
              </div>
              <p className="filterLabel">Filtra el tipus de servei que busques:</p>
              <ServicesList
                onLabelClick={onFilterClick}
                serviceStates={filter}></ServicesList>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default ResultsSearch;   