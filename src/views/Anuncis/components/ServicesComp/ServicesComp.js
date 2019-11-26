import React from 'react';
import { PropTypes } from 'prop-types';
import ServiceLabel from './ServiceLabel/ServiceLabel';
import './ServicesComp.css';

const ServicesComp = ({ onLabelClick, serviceStates }) => {

    return (
        <div>
            <div className="columns is-mobile servicesCont">
                <div className="column">
                    <div className="columns">
                        <div className="column">
                            <ServiceLabel
                                service={'babysitter'}
                                onClickHandler={onLabelClick ? onLabelClick : () => {}}
                                serviceStates={serviceStates}>
                            </ServiceLabel>
                        </div>
                        <div className="column">
                            <ServiceLabel
                                service={'cleaner'}
                                onClickHandler={onLabelClick ? onLabelClick : () => {}}
                                serviceStates={serviceStates}>
                            </ServiceLabel>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="columns">
                        <div className="column">
                            <ServiceLabel
                                service={'pets'}
                                onClickHandler={onLabelClick ? onLabelClick : () => {}}
                                serviceStates={serviceStates}>
                            </ServiceLabel>
                        </div>
                        <div className="column">
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

ServicesComp.propTypes = {
    serviceStates: PropTypes.shape({
        babysitter: PropTypes.bool.isRequired,
        cleaner: PropTypes.bool.isRequired,
        pets: PropTypes.bool.isRequired,
        classes: PropTypes.bool.isRequired,
    }),
    onLabelClick: PropTypes.func,
}

export default ServicesComp;