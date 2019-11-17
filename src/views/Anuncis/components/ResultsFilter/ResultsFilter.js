import React from 'react';
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
            <div className="columns filterCont">
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
    );
}



export default ResultsFilter;