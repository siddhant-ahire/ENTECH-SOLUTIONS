import React from 'react';

const Counter = ({ icon, number, text }) => {
  return (
    <div className="col-md-12 d-flex counter-wrap">
      <div className="block-18 bg-primary d-flex align-items-center justify-content-between">
        <div className="icon d-flex align-items-center justify-content-center"><span className={icon}></span></div>
        <div className="text">
          <strong className="number">{number}</strong>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;