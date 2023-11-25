import React, { useState } from "react";
import "./Quality.scss";

function Quality () {

const [Exp, setExp] = useState(true);
const [Edu, setEdu] = useState(false);


const handleExp = (index) => {
  setExp(true);
  setEdu(false);


};
const handleEdu = (index) => {
  setEdu(true);
  setExp(false);
  

  

};

console.log(Edu)
console.log(Exp)
  return (
  <section  className="quality-section" id="Qualification">

  <div className="quality-title">
  <h1>Qualification</h1>
  <p>My personal journey</p>
  </div>
    <div className="quality-head">
   
    <h2 onClick={handleExp}> <span><i class="fa-solid fa-briefcase"></i></span>  Experience
    </h2>
    <h2 onClick={handleEdu} ><span><i class="fa-solid fa-graduation-cap"></i></span>Education</h2>
    </div>

    { Exp && (
      
  
    <div className="Quality-education">
   <div className="Quality-item">
   <div className="Quality-first"> <h3>Mid-level Frontend <span>(Full-time)</span></h3>
   <p>Abamade</p>
   <p><span><i class="fa-regular fa-calendar-check"></i></span>May2023-October2023</p>
</div>
   <div  className="Quality-second">
   <span className="Quality-round" ></span>
   <span className="Quality-line" ></span>
   </div>
   <div className="Quality-last">
   </div>
   </div>

   <div className="Quality-item">
   <div className="Quality-first"></div>
   <div  className="Quality-second">
   <span className="Quality-round" ></span>
   <span className="Quality-line" ></span>
   </div>
   <div className="Quality-last">
   <h3>Junior-level Frontend <span>(Full-time)</span></h3>
   <p>Abamade</p>
   <p><span><i class="fa-regular fa-calendar-check"></i></span>Nov2022-May2023</p>

   </div>
   </div>

   <div className="Quality-item">
   <div className="Quality-first">
   <h3>Frontend Developer  <span>(Freelancer)</span></h3>
   <p>Upwork</p>
   <p><span><i class="fa-regular fa-calendar-check"></i></span>June2022-Nov2022</p>

   </div>
   <div  className="Quality-second">
   <span className="Quality-round" ></span>
   <span className="Quality-line" ></span>
   </div>
   <div className="Quality-last">
  
   </div>
   </div>

   <div className="Quality-item">
   <div className="Quality-first"></div>
   <div  className="Quality-second">
   <span className="Quality-round" ></span>
   <span className="Quality-line" ></span>
   </div>
   <div className="Quality-last">
   <h3>Frontend Developer  <span>(Freelancer)</span></h3>
   <p>Upwork</p>
   <p><span><i class="fa-regular fa-calendar-check"></i></span>June2022-Nov2022</p>

   </div>
   </div>
    
    </div>

    )}

    { Edu && (

    <div className="Quality-experience">
   <div className="Quality-item">
   <div className="Quality-first">
   
   </div>
   <div  className="Quality-second">
   <span className="Quality-round" ></span>
   <span className="Quality-line" ></span>
   </div>
   <div className="Quality-last">
   <h3>React.js,Next,js</h3>
   <p>Udemy,Youtube</p>
   <p><span><i class="fa-regular fa-calendar-check"></i></span>2020-2023</p>
   </div>
   </div>

   <div className="Quality-item">
   <div className="Quality-first">
   <h3>Html,JavaScript</h3>
   <p>FreeCodeCamp</p>
   <p><span><i class="fa-regular fa-calendar-check"></i></span> 2020</p>
   </div>
   <div  className="Quality-second">
   <div className="Quality-round" ></div>
   <div className="Quality-line" ></div>
   </div>
   <div className="Quality-last">

   </div>
   </div>

   <div className="Quality-item">
   <div className="Quality-first">
 
</div>
   <div  className="Quality-second">
   <span className="Quality-round" ></span>
   <span className="Quality-line" ></span>
   </div>
   <div className="Quality-last">
   <h3>Mechtronics Engineer</h3>
   <p>ABUAD  UNIVERSITY</p>
   <p><span><i class="fa-regular fa-calendar-check"></i></span>2017-2022</p>
  

   </div>
   </div>
    </div>
    
    )}
  
    
  </section>
  )
}
 
export default Quality;