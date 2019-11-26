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

    applyFilter(results){

        const { filter } = this.props;

        const filteredResults = results.filter( post => {
            let ok = false;
            for(let prop in post.services){
                if(filter[prop] === true && post.services[prop] === true){
                    ok = true;
                } 
            }
            return ok;  
        });
        return filteredResults;
    }


    resultsToComp = (results) => {

        const { handlePostOnClick } = this.props;

        if (results) {
            return (
                results.map((post, index) => (
                    <ResultsItem
                        key={post._id}
                        id={post._id}
                        post={post}
                        handlePostOnClick={handlePostOnClick}>
                    </ResultsItem>
                ))
            );
        }
    }

    render() {

        const filteredResults = this.applyFilter(this.state.results);

        return (
            <div className="container list-cont">
                <div className="columns">
                    <div className="column is-three-fifths is-offset-one-fifth">
                        {filteredResults.length > 0 ?
                            <div className="ammount">{`S'han trobat ${filteredResults.length} resultats`}</div> :
                            <div className="ammount">No s'han trobat resultats</div>}
                        {this.resultsToComp(filteredResults)}
                    </div>
                </div>
            </div>
        );
    }
}

ResultsList.propTypes = {
    query: PropTypes.string.isRequired,
    results: PropTypes.array.isRequired,
    handlePostOnClick: PropTypes.func.isRequired,
}

export default ResultsList;

