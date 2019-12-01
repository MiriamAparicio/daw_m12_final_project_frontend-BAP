import React from 'react';
import { PropTypes } from 'prop-types';
import ServiceLabel from './ServiceLabel/ServiceLabel';
import './ServicesList.css';

const ServicesList = ({ onLabelClick, serviceStates }) => {

    return (
        <div>
            <div className="columns is-mobile services-cont service-columns">
                <div className="column service-column">
                    <div className="columns service-columns left-column">
                        <div className="column service-column">
                            <ServiceLabel
                                service={'babysitter'}
                                onClickHandler={onLabelClick ? onLabelClick : () => {}}
                                serviceStates={serviceStates}>
                            </ServiceLabel>
                        </div>
                        <div className="column service-column">
                            <ServiceLabel
                                service={'cleaner'}
                                onClickHandler={onLabelClick ? onLabelClick : () => {}}
                                serviceStates={serviceStates}>
                            </ServiceLabel>
                        </div>
                    </div>
                </div>
                <div className="column service-column">
                    <div className="columns service-columns right-column">
                        <div className="column service-column">
                            <ServiceLabel
                                service={'pets'}
                                onClickHandler={onLabelClick ? onLabelClick : () => {}}
                                serviceStates={serviceStates}>
                            </ServiceLabel>
                        </div>
                        <div className="column service-column">
                            <ServiceLabel
                                service={'classes'}
                                onClickHandler={onLabelClick ? onLabelClick : () => {}}
                                serviceStates={serviceStates}>
                            </ServiceLabel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ServicesList.propTypes = {
    serviceStates: PropTypes.shape({
        babysitter: PropTypes.bool.isRequired,
        cleaner: PropTypes.bool.isRequired,
        pets: PropTypes.bool.isRequired,
        classes: PropTypes.bool.isRequired,
    }),
    onLabelClick: PropTypes.func,
}

export default ServicesList;