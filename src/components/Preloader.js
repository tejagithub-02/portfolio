import React from 'react';
import './Preloader.css';

const Preloader = () => {
  return (
    <div className="animated-preloader">
     
      <h1 className="floating-text">Leela's Portfolio</h1>
      <div className="sliding-bars">
        <div></div><div></div><div></div><div></div>
      </div>
    </div>
  );
};

export default Preloader;
