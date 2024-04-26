import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/Kigalicity.jpg" alt="kigali city" />
      <div className="item">
        <h3>KIGALI Events</h3>
        <div>
          <h1>We are here for you</h1>
          <p>
            Book here the events now
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
