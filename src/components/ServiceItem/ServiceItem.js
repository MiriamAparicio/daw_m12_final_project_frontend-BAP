import React from 'react';
import { PropTypes } from 'prop-types';
import './ServiceItem.css';

const ServiceItem = ({ onClick, service, className, id }) => {
  return (
    <div className={className} onClick={onClick} id={id}>
      {service}
    </div>
  );
};

ServiceItem.propTypes = {
  service: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ServiceItem;
