import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import ResultsItem from './ResultsItem/ResultsItem';

class ResultsList extends PureComponent {
  applyFilter(results) {
    const { filter } = this.props;

    const filteredResults = results.filter(post => {
      let ok = false;

      for (let prop in post.services) {
        if (filter[prop] === true && post.services[prop] === true) {
          ok = true;
        }
      }

      return ok;
    });

    return filteredResults;
  }

  resultsToComp = results => {
    const { handlePostOnClick } = this.props;

    if (results) {
      return results.map((post, i) => (
        <ResultsItem
          key={`result-${i}`}
          id={post.owner._id}
          post={post}
          handlePostOnClick={handlePostOnClick}
        />
      ));
    }
  };

  render() {
    const filteredResults = this.applyFilter(this.props.results);

    return (
      <div>
        {filteredResults.length > 0 ? (
          <div className="ammount">{`S'han trobat ${filteredResults.length} resultats`}</div>
        ) : (
          <div className="ammount">No s'han trobat resultats</div>
        )}
        {this.resultsToComp(filteredResults)}
      </div>
    );
  }
}

ResultsList.propTypes = {
  results: PropTypes.array.isRequired,
  handlePostOnClick: PropTypes.func.isRequired
};

export default ResultsList;
