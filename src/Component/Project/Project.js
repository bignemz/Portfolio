import React from 'react'
import "./Project.scss";
import Item from '../Item/Item';


function Project() {
  return (
    <section className="Project-section" id='Showcase' >
    <div className="Project-title">
    <h1>Showcase</h1>
    <p>Project & Collaborations</p>
    </div>
    <div className="Project-work">

    
    <Item/>
    </div>
    </section>
  )
}

export default Project