import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Intro.scss";
import resume from'../../../src/Chinaeme_Frontend_Resume.pdf'
import Aos from "aos";
import "aos/dist/aos.css"



export default function Intro() {

  useEffect(()=>{
    Aos.init({duration:1500 ,delay:"200"})
  })


  return (

    <section className="intro">
    <div data-aos="zoom-out" className="intro-section" id="Home">
    <div className="intro-link">
      <Link className="linke" to="https://twitter.com/ice_dunk">
      <i class="fa-brands fa-square-x-twitter fa-2x"></i>
      </Link>
      <Link className="linke" to="https://github.com/bignemz">
        <i class="fa-brands fa-github fa-2x"></i>
      </Link>
      <Link className="linke" to="https://www.linkedin.com/in/emerole-chinaeme-61324719a">
      <i class="fa-brands fa-linkedin fa-2x"></i>
      </Link>
    </div>
    <div className="intro-img">
      <img src="./images/nem22.png"  alt="" />
    </div>
    <div className="intro-title">
      <h1 className="intro-name">Hello, I'm Ikenna</h1>
      <h3 className="intro-subtitle">
      Frontend Developer, & Design Engineer
      </h3>
      <p class="intro-description">
      In the dynamic world of web development, I'm on a thrilling journey driven by genuine passion for beauty and user-centric design. My goal is to craft applications that seamlessly blend functionality with visual elegance, providing users with outstanding and delightful experiences. Each line of code is an opportunity to create something more than just functional—it's about delivering immersive and visually pleasing digital journeys.
      </p>

      <a href={resume} download="Resume"> <div className="btn">  <div>Download Cv  <i class="fa-solid fa-download"></i></div></div></a>
    </div>
  </div>
    </section>

  );
}
