import React from 'react';
import { PropTypes } from 'prop-types';
import './ServiceType.css';

const ServiceType = ({ services }) => {

    const getServiceClass = (service) => {
        switch (services[service]) {
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
            <div className="columns">
                <div className={`column service ${getServiceClass("babysitter")}`}>
                    Cangur
                </div>
                <div className={`column service ${getServiceClass("cleaner")}`}>
                    Neteja
                </div>
                <div className={`column service ${getServiceClass("pets")}`}>
                    Cura mascotes
                </div>
                <div className={`column service ${getServiceClass("classes")}`}>
                    Classes particulars
                </div>
            </div>
        </div>
    );
}

ServiceType.propTypes = {
    services: PropTypes.shape({
        babysitter: PropTypes.bool.isRequired,
        cleaner: PropTypes.bool.isRequired,
        pets: PropTypes.bool.isRequired,
        classes: PropTypes.bool.isRequired,
    }),
}

export default ServiceType;