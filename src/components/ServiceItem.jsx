import React from 'react';

const ServiceItem = ({ icon, title, description }) => {
  return (
    <div className="col-lg-4 d-flex align-self-stretch">
      <div className="media block-6 services d-flex">
        <div className="icon justify-content-center align-items-center d-flex">
          <span className={icon}></span>
        </div>
        <div className="media-body pl-4">
          <h3 className="heading mb-3">{title}</h3>
          <p>{description}</p>
        </div>
      </div>      
    </div>
  );
};

export default ServiceItem;