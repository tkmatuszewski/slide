import React from 'react';
import hero__vid from "../../images/hero__vid.mp4";
import './Hero.scss';

export default function Hero() {
  return (
    <section id="home">
      <div className="hero__cnt">
        <div className="hero__inner__cnt">
          <h1 id="logo">Ride!</h1>
          <div className="hero__bg">
            <video
              className="hero__vid"
              src={hero__vid}
              type="video/mp4"
              autoPlay={true}
              preload="auto"
              loop={true}
              muted={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
