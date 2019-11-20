import React from 'react';
import { PropTypes } from 'prop-types';
import './ResultsFilter.css';

const ResultsFilter = ({ onFilterClick, filter }) => {

    const getServiceClass = (service) => {
        switch (filter[service]) {
            case true:
                return "selected";
            case false:
                return "unselected";
            default:
                return "unselected";
        }
    }


    return (
        <div className="servicesCont">
            <div className="columns is-mobile filterCont">
                <div className="column">
                    <div className="columns ">
                        <div className={`column filter ${getServiceClass("babysitter")}`}
                            id="babysitter"
                            onClick={onFilterClick}>
                            Cangur
                        </div>
                        <div className={`column filter ${getServiceClass("cleaner")}`}
                            id="cleaner"
                            onClick={onFilterClick}>
                            Neteja
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="columns">
                        <div className={`column filter ${getServiceClass("pets")}`}
                            id="pets"
                            onClick={onFilterClick}>
                            Cura mascotes
                        </div>
                        <div className={`column filter ${getServiceClass("classes")}`}
                            id="classes"
                            onClick={onFilterClick}>
                            Classes particulars
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ResultsFilter.propTypes = {
    filter: PropTypes.shape ({
        babysitter: PropTypes.bool.isRequired,
        cleaner: PropTypes.bool.isRequired,
        pets: PropTypes.bool.isRequired,
        classes: PropTypes.bool.isRequired,
    }),
    onFilterClick: PropTypes.func.isRequired,
}

export default ResultsFilter;