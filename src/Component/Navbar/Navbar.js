import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
 

import "./Navbar.scss";

function Navbar() {
  const navRef = useRef();

  function showNavbar() {
    navRef.current.classList.toggle("reponsive");
  }

  function removeNavbar() {
    navRef.current.classList.remove("reponsive");
  }

  return (
    <nav className="navbar">
      <div>
        <h1 className="nav-logo">Ikenna</h1>
      </div>

      <div ref={navRef} className="nav-links">
        <button className=" btn nav-close " onClick={removeNavbar}>
          <i class="fa-solid fa-x fa-2x"></i>
        </button>

        <div className="nav-widget">

        <HashLink  className="link" onClick={removeNavbar} smooth to='#Home'>
        <i class="fa-solid fa-house"></i>
        <p>Home</p>
       
      </HashLink>

      

      <HashLink  className="link" onClick={removeNavbar} smooth to='#Skill'>
    
      <i class="fa-solid fa-file-lines"></i>
      <p>Skills</p>
    </HashLink>

    <HashLink  className="link" onClick={removeNavbar} smooth to='#Qualification'>
    <i class="fa-solid fa-file-lines"></i>
    <p>Qualification</p>
    </HashLink>
    
    <HashLink  className="link" onClick={removeNavbar} smooth to='#Showcase'>
    <i class="fa-solid fa-file-lines"></i>
    <p>Showcase</p>
    </HashLink>
      
    <HashLink  className="link" onClick={removeNavbar} smooth to='#Testimonial'>
    <i class="fa-solid fa-file-lines"></i>
    <p>Testimonial</p>
    </HashLink>

    <HashLink  className="link" onClick={removeNavbar} smooth to='#Contact'>
      <i class="fa-solid fa-house"></i>
      <p>Contact</p>
      
      </HashLink>
        
        </div>
      
      </div>
      <button className="nav-open btn" onClick={showNavbar}>
      <i class="fa-solid fa-grip fa-2x"></i>
      </button>
    </nav>
  );
}

export default Navbar;