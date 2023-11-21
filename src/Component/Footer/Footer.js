import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
function Footer() {
  return (
 

    <section className="footer">
      <div className="footer1">
        <div className="footer-get">
          <h1>Ikenna</h1>
          <p>
          Frontend Developer & Design Engineer 
          </p>
        </div>

        <div className="footer-item">
       
        <div className="footer-skill">
          <HashLink  className="linke" smooth to='#Skill'>
        <p>Skill</p>
          </HashLink>
          <HashLink  className="linke" smooth to='#Qualification'>
          <p>Qualification</p>
          </HashLink>

          <HashLink className="linke" smooth to='#Contact'>
          <p>Reach Out</p>
          </HashLink>
        </div>
      </div>

      

          <div className="follow">
            <div>
              <h5>Follow me</h5>
            </div>
            <div className="social">
              <Link className="linke" to="supportpage">
                <i class="fa-brands fa-square-x-twitter"></i>
              </Link>
              <Link className="linke" to="supportpage">
                <i class="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        
      </div>
      <div className="copyright">
        <p>Created By Chinaeme ikenna Emerole © All right reserved.</p>
      </div>
    </section>
  );
}

export default Footer;