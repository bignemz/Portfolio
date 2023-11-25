import React, { useState } from 'react'
import './Contact.scss'
import { Link } from "react-router-dom";

function Contact() {
    const [Formdata, setFormdata]= useState({
    })

    function handleSubmit(e){
        e.preventDefault();

    }


    function handleInputChange(e){
           const { name, value } = e.target;
        setFormdata((prevData) => ({
        ...prevData,
        [name]: value,
    }));
    }


  return (
    <section className="Contact-section" id='Contact'>

    <div className="Contact-title">
    <h1>Contact Me</h1>
    <p>I'm Available :)</p>
    </div>
    <div className="Contact-info">
    <div >
    <div className="Contact-link">
    <Link className="Contact-linke" to="https://twitter.com/ice_dunk">
      <i class="fa-brands fa-square-x-twitter fa-2x"></i>
    </Link>
    <div>
    <h2>Connect</h2>
    <p>Twitter</p>
    </div>
    </div>
    <div className="Contact-link">
    <Link className="Contact-linke" to="supportpage">
    <i class="fa-solid fa-envelope fa-2x"></i>
  </Link>
  <div>
  <h2>Email</h2>
  <p>Emeroleikenna123@gmail.com</p>
  </div>

    </div>
  
  </div>
    

    <div className="contact-form-container">
    
   <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input type="text"
            name='name'
            value={Formdata.name}
            onChange={handleInputChange}

    />

    <label>Email</label>
    <input type="Email"
            name='email'
            value={Formdata.email}
            onChange={handleInputChange}

    />

    <label>Message</label>
    <textarea 
            name='message'
            value={Formdata.message}
            onChange={handleInputChange}

    />
    <button type='submit'>Submit</button>
 
   </form>
   
</div>
    
    
    </div>

    
    
    </section>
  
  )
}

export default Contact