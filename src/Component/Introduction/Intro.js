import React from "react";
import { Link } from "react-router-dom";
import "./Intro.scss";


export default function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-link">
        <Link className="linke" to="supportpage">
          <i class="fa-brands fa-square-x-twitter"></i>
        </Link>
        <Link className="linke" to="supportpage">
          <i class="fa-brands fa-github"></i>
        </Link>
        <Link className="linke" to="supportpage">
          <i class="fa-brands fa-github"></i>
        </Link>
      </div>
      <div className="intro-img">
        <img src="./images/img1.jpeg"  alt="" />
      </div>
      <div className="intro-tite">
        <h1 className="intro-name">Hi, I'm Ikenna</h1>
        <h3 className="intro-subtitle">
          Senior Frontend Developer, & Design Engineer
        </h3>
        <p class="intro-description">
          Driven by a love for aesthetics and user-centric design, my journey in
          app development has been thrilling!. I possess a talent for creating
          functional and visually pleasing applications and I aim to provide
          users with outstanding experiences.
        </p>
      </div>
    </section>
  );
}
