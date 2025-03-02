import React from "react";
import { Link } from "react-router-dom";

const ServiceItem2 = ({ backgroundUrl, icon, title, description, path }) => {
  return (
    <div className="col-md-4">
      <div className="services-wrap">
        <div className="img">
          <img src={backgroundUrl} alt={title} className="img-fluid" crossOrigin="anonymous" />
        </div>
        <div className="text" style={{ maxHeight: 300 }}>
          <div className="icon">
            <span className={icon}></span>
          </div>
          <h2>{title}</h2>
          <p className="description">{description}</p>
          <Link to={`/services/${path}`} className="btn-custom">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem2;
