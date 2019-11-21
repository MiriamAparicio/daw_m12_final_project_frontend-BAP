import React from 'react';
import { PropTypes } from 'prop-types'; 
import './ServiceLabel.css';


const ServiceLabel = ({ service, text, onClickHandler, serviceStates }) => {

    const getServiceClass = (service, serviceStates) => {
        switch (serviceStates[service]) {
            case true:
                return "selected";
            case false:
                return "unselected";
            default:
                return "unselected";
        }
    }

    return (
        <div className={`service ${getServiceClass(service,serviceStates)}`}
            id={service}
            onClick={onClickHandler ? onClickHandler : {}}
        >
            {text}
        </div>
    );
}

ServiceLabel.propTypes = {
    service: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func,
    serviceStates: PropTypes.object.isRequired,
}


export default ServiceLabel;