import React from "react";
import background from "../../assets/background.svg";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-center"
      id="home"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay"></div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <p className="welcome-text mb-3">Welcome to Bike Farms</p>
            <h1 className="hero-title mb-4">
              Your Trusted Source for Healthy, Quality Livestock
            </h1>
            <a href="#learn-more" className="btn cta-btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
