import React, { useState, useEffect  } from "react";

import "./Skill.scss";

import Aos from "aos";
import "aos/dist/aos.css"


function Skill() {
  const [Front, setFront] = useState(true);
const [Des, setDes] = useState(false);


useEffect(()=>{
  Aos.init({duration:1500 ,delay:"200"})
})


const handleFront = (index) => {
  setFront(true);
  setDes(false);


};
const handleDes = (index) => {
  setDes(true);
  setFront(false);
  

  

};

console.log(Front)
console.log(Des)
  return (
    <section className='skill-section' id="Skill">
    <div className='skill-title'>
    <h1>Skills</h1>
    <span>My technical Level</span>
    </div>
    <div>
    <div className='skill-set'>
    <div className='skill-front'>
    <div data-aos="zoom-out-right"   className='skill-role' onClick={handleFront} >
    <i class="fa-solid fa-code fa-2x logos"></i>
   <div >
   <h3>Frontend Developer</h3>
   <p>2 years</p>
   </div>
<span className='skill-down'>
{ Front ? <i class="fa-solid fa-circle-chevron-down logos"></i> :<i class="fa-solid fa-circle-chevron-up logos"></i>}
</span>
   
    </div>

    { Front && (
      <div  data-aos="zoom-out-right"  >

    <div className="skill-quest">
    <div>
      <p className="skill-stack">React & Redux</p>
    </div>
    <span className="skill-logo">
    <i class="fa-brands fa-react logo"></i>
    </span>
  </div>

  <div className="skill-quest">
  <div>
    <p className="skill-stack">Javascript | Typescript</p>
  </div>
  <span className="skill-logo">
  <i class="fa-brands fa-square-js logo"></i>
  </span>
</div>

<div className="skill-quest">
<div>
  <p className="skill-stack">HTML</p>
</div>
<span className="skill-logo">
<i class="fa-brands fa-html5 logo"></i>
</span>
</div>

<div className="skill-quest">
<div>
  <p className="skill-stack">CSS | SASS</p>
</div>
<span className="skill-logo">
<i class="fa-brands fa-css3-alt logo"></i>
</span>
</div>

<div className="skill-quest">
<div>
  <p className="skill-stack">Tailwind</p>
</div>
<span className="skill-logo">
<i class="fa-solid fa-circle-check logo"></i>
</span>
</div>

<div className="skill-quest">
<div>
  <p className="skill-stack">Git</p>
</div>
<span className="skill-logo">
<i class="fa-brands fa-square-git logo"></i>
</span>
</div>


    </div>
    )}

    </div>
    <div className='skill-design'>


    <div data-aos="zoom-out-left" className='skill-role'  onClick={handleDes}>
    <i class="fa-solid fa-pen-nib fa-2x logos"></i>
   <div>
   <h3>Design Engineer</h3>
   <p> 2 years</p>
   </div>

   <span className='skill-down'>
   { Des ? <i class="fa-solid fa-circle-chevron-down logos"></i> :<i class="fa-solid fa-circle-chevron-up logos"></i>}
</span>

   
    </div>

    { Des && ( <div>

    <div className="skill-quest">
    <div>
      <p className="skill-stack">AutoCAD Design</p>
    </div>
    <span className="skill-logo">
    <i class="fa-brands fa-react"></i>
    </span>
  </div>

<div className="skill-quest">
<div>
  <p className="skill-stack">AVEVA Design</p>
</div>
<span className="skill-logo">
<i class="fa-brands fa-html5"></i>
</span>
</div>




    </div>
    )}


    </div>
    </div>
    </div>
    </section>
  )
}

export default Skill