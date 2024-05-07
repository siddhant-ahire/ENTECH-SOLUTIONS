import React from 'react';

const TestimonialItem = ({ imageUrl, quote, name, position }) => {
  return (
    <div className="item">
      <div className="testimony-wrap py-4 pb-5 d-flex justify-content-between align-items-end">
        <div className="user-img" style={{ backgroundImage: `url(${imageUrl})` }}>
          <span className="quote d-flex align-items-center justify-content-center">
            <i className="fa fa-quote-left"></i>
          </span>
        </div>
        <div className="text">
          <p className="mb-4">{quote}</p>
          <p className="name">{name}</p>
          <span className="position">{position}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;