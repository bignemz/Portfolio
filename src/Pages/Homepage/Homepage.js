import React from "react";
import Navbar from "../../Component/Navbar/Navbar";
import Quality from "../../Component/Qualification/Quality";
import Intro from "../../Component/Introduction/Intro";
import Project from "../../Component/Project/Project";
import Skill from "../../Component/Skill/Skill";
import Testimonial from "../../Component/Testimonial/Testimonial";
import Contact from "../../Component/Contact/Contact";
import Footer from "../../Component/Footer/Footer";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skill/>
      <Quality/>
      <Project/>
      <Testimonial/>
      <Contact/>
       <Footer/>

      
    </div>
  );
}

export default Homepage;
