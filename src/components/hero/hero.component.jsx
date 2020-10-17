import React from "react";
import "./hero.styles.css";

const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <video
          src="https://mpartial-data.s3.us-east-2.amazonaws.com/homepage.mp4"
          autoPlay
          loop
          muted
        ></video>
        <p>Impartial, Remote, 3rd-Party,</p>
        <p>Estimating Engine</p>
      </div>
    </div>
  );
};

export default Hero;
