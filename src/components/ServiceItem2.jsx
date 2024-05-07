import React from 'react';

const ServiceItem2 = ({ backgroundUrl, icon, title, description }) => {
  const backgroundImageStyle = {
    backgroundImage: `url('${backgroundUrl}')`
  };

  return (
    <div className="col-md-4">
      <div className="services-wrap">
        <div className="img" style={backgroundImageStyle}></div>
        <div className="text">
          <div className="icon"><span className={icon}></span></div>
          <h2>{title}</h2>
          <p>{description}</p>
          <a href="#" className="btn-custom">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem2;