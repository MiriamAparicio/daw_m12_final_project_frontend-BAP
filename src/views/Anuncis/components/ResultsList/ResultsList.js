import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import ResultsItem from './ResultsItem/ResultsItem';



class ResultsList extends Component {

    constructor(props) {
        super(props);

        const { query, results } = this.props;

        this.state = {
            query,
            results
        }
    }

    resultsToComp = (results) => {

        const { handleAdOnClick } = this.props;

        if (results) {
            return (
                results.map((ad, index) => (
                    <ResultsItem
                        key={ad._id}
                        id={ad._id}
                        ad={ad}
                        handleAdOnClick={handleAdOnClick}>
                    </ResultsItem>
                ))
            );
        }
    }

    render() {

        const { results } = this.state;

        return (
            <div className="container list-cont">
                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        {results ?
                            <div className="ammount">{`S'han trobat ${results.length} resultats`}</div> :
                            <div className="ammount">No s'han trobat resultats</div>}
                        {this.resultsToComp(results)}
                    </div>
                </div>
            </div>
        );
    }
}

ResultsList.propTypes = {
    query: PropTypes.string.isRequired,
    results: PropTypes.array.isRequired,
    handleAdOnClick: PropTypes.func.isRequired,
}

export default ResultsList;

