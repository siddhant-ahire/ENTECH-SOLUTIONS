import React from 'react';
import { Slide } from 'react-awesome-reveal';

const ServiceItem = ({id, icon, title, description }) => {
  return (
    <div className="col-lg-4 d-flex align-self-stretch">
      <Slide triggerOnce direction={ id == 1 ? "left" : (id == 2 ? "up" : "right")}>
      <div className="media block-6 services d-flex">
        <div className="icon justify-content-center align-items-center d-flex">
          <span className={icon}></span>
        </div>
        <div className="media-body pl-4">
          <h3 className="heading mb-3">{title}</h3>
          <p>{description}</p>
        </div>
      </div>      
    </Slide>
    </div>
  );
};

export default ServiceItem;