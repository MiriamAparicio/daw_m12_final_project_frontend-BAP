import React from 'react';
import ResultsFilter from './../ResultsFilter/ResultsFilter';
import './ResultsSearch.css';

const ResultsSearch = ({ query, onFilterClick, filter }) => {

    return (
        <div className="container">
            <div className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="box">
                        <div className="field search-field is-grouped">
                            <p className="control is-expanded">
                                <input
                                    className="input is-small"
                                    type="text"
                                    defaultValue={query}
                                />
                            </p>
                            <p className="control">
                                <button href="#" className="button is-small search-button" type="submit">Cerca</button>
                            </p>
                        </div>
                        <p className="filterLabel">Filtra el tipus de servei que busques:</p>
                        <ResultsFilter 
                            onFilterClick={onFilterClick}
                            filter={filter}></ResultsFilter>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ResultsSearch;