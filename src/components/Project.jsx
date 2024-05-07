import React from 'react';

const Project = ({ imageUrl, title, location }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`
  };

  return (
    <div className="col-md-4">
      <div className="project">
        <a href={imageUrl} className="img image-popup d-flex align-items-center" style={backgroundImageStyle}>
          <div className="icon d-flex align-items-center justify-content-center mb-5">
            <span className="fa fa-plus"></span>
          </div>
        </a>
        <div className="text">
          <span className="subheading">Building</span>
          <h3>{title}</h3>
          <p><span className="fa fa-map-marker mr-1"></span> {location}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
