import React from 'react';
import { PropTypes } from 'prop-types'; 
import './ServiceLabel.css';


const ServiceLabel = ({ service, onClickHandler, serviceStates }) => {

    const labelText = {
        babysitter: 'Cangur',
        cleaner: 'Neteja',
        pets: 'Cura mascotes',
        classes: 'Classes particulars',
    }

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
            onClick={onClickHandler ? onClickHandler : ()=>{}}
        >
            {labelText[service]}
        </div>
    );
}

ServiceLabel.propTypes = {
    service: PropTypes.string.isRequired,
    onClickHandler: PropTypes.func,
    serviceStates: PropTypes.object.isRequired,
}


export default ServiceLabel;