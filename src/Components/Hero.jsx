import React from 'react';
import 'animate.css';
import '../Styles/Home.css'; // Your CSS file

const Hero = () => {
  return (
    <div>
      <div className="flower-vid">
        <video muted autoPlay loop>
          <source src="images/video/flower.mp4" type="video/mp4" />
        </video>
        <div className="flower-container">
          <h1 className="header-home animate__animated animate__fadeIn">HNUB BLOOMS</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
