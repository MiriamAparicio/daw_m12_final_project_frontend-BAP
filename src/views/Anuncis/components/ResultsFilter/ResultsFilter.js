import React from 'react';
import { PropTypes } from 'prop-types';
import ServiceLabel from './../ServiceLabel/ServiceLabel';
import './ResultsFilter.css';

const ResultsFilter = ({ onFilterClick, filter }) => {

    return (
        <div className="servicesCont">
            <div className="columns is-mobile filterCont">
                <div className="column">
                    <div className="columns">
                        <div className="column">
                            <ServiceLabel
                                service={'babysitter'}
                                text={'Cangur'}
                                onClickHandler={onFilterClick}
                                serviceStates={filter}>
                            </ServiceLabel>
                        </div>
                        <div className="column">
                            <ServiceLabel
                                service={'cleaner'}
                                text={'Neteja'}
                                onClickHandler={onFilterClick}
                                serviceStates={filter}>
                            </ServiceLabel>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="columns">
                        <div className="column">
                            <ServiceLabel
                                service={'pets'}
                                text={'Cura mascotes'}
                                onClickHandler={onFilterClick}
                                serviceStates={filter}>
                            </ServiceLabel>
                        </div>
                        <div className="column">
                            <ServiceLabel
                                service={'classes'}
                                text={'Classes particulars'}
                                onClickHandler={onFilterClick}
                                serviceStates={filter}>
                            </ServiceLabel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ResultsFilter.propTypes = {
    filter: PropTypes.shape({
        babysitter: PropTypes.bool.isRequired,
        cleaner: PropTypes.bool.isRequired,
        pets: PropTypes.bool.isRequired,
        classes: PropTypes.bool.isRequired,
    }),
    onFilterClick: PropTypes.func.isRequired,
}

export default ResultsFilter;