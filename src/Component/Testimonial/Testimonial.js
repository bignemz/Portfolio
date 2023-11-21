import React from 'react'
import Slider from '../Slider/Slider'
import "./Testimonial.scss";

function Testimonial() {
  return (
    <section className="Test-section" id='Testimonial'>
    <div className="Test-title">
    <h1>Testimonial</h1>
    <p>Employer / client / collaborators</p>
    </div>
    <div>

    <Slider/>
    </div>

    </section>
  )
}

export default Testimonial