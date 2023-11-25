import React, { useState } from "react";
import "./Item.scss";
import { ite } from '../../Test';
import { Link } from "react-router-dom";

function Item() {

  const [More, setMore] = useState(null);

  const handleClick = (index) => {
    setMore(More === index ? null : index);
  };
  const handleClose = (index) => {
    setMore(null);
  };
  return (
    <section className="Item-section" >
    {ite.map((item, index) => ( 

    <div className="Item-title">
    <div className="Item-link">
    <div className="Item-live"  onClick={() => handleClick(index)}><i class="fa-solid fa-eye logos"></i>See more</div>
    <div className="Item-code"> <Link className="linko" to={item.code}><i class="fa-sharp fa-solid fa-code-branch logos"></i>Code</Link></div>
    </div>
    <div className="Item-pic"><img src={item.Img} alt=""/></div>
 <div className="Item-des">
 <h4>{item.Project}</h4>
 <p>{item.des.substring(0, 150)}.....</p>


 </div>
 <Link className="linke" to={item.link}>
 <div className='Item-btn'>
 
 <i class="fa-solid fa-link logos"></i>Link
 </div>
 </Link>
 


  
    {index === More && (
      <div className="Modal-Section">
    <div className="Modal-Container">
      <span className="close"  onClick={() => handleClose(index)}>
        &times;
      </span>
      <div className='Modal-Profile'>
   
      <div className='Modal-Content'>
      <h4 className='Content-Title'>Company</h4>
      <div className='Content-desc'>{item.Project}</div>
      </div>
    
      
    
      <div className='Modal-Content'>
      <h4 className='Content-Title'>About</h4>
      <div className='Content-desc'>{item.des}</div>
      </div>
    
      <div className='Modal-Content'>
      <h4 className='Content-Title'>Technologies</h4>
      <div className='Content-desc'>{item.stack1},{item.stack2},{item.stack3}</div>
      </div>
    
      <div className='Modal-Content'>
      <h4 className='Content-Title'>My Contribution</h4>
      <div className='Content-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti nihil nobis aut reprehenderit est asperiores earum officia velit maxime, ratione soluta commodi ullam beatae.</div>
      </div>
    
      <div className='Modal-Content'>
      <h4 className='Content-Title'>Image</h4>
      <div className='Content-desc'><img src={item.Img} alt=""/></div>
      </div>
    
    
    
    
    
      </div>
    
     
    
    
    </div>
    </div>
    )}


    </div>
    ))}
    </section>

  
  

  )
}

export default Item




