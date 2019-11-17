import React from 'react';
import './ServiceType.css';

const ServiceType = ({ services }) => {

    const getServiceClass = (service) => {
        console.log(services[service]);
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
            <div className="columns is-3">
                <div className={`column service ${getServiceClass("cangur")}`}>
                    Cangur
                </div>
                <div className={`column service ${getServiceClass("neteja")}`}>
                    Neteja
                </div>
                <div className={`column service ${getServiceClass("mascotes")}`}>
                    Cura mascotes
                </div>
                <div className={`column service ${getServiceClass("classes")}`}>
                    Classes particulars
                </div>
            </div>
        </div>
    );
}


export default ServiceType;