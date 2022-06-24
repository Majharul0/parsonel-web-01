import React from 'react'
import "./body.css"

function About() {
  return (
    <>
        <div className="container">
      <div className="left">
        <h1>Something about<br />
        <strong> Desinging Lab.</strong> </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam purus eget consectetur tellus imperdiet. Est sit pharetra egestas blandit. Quis lacus pellentesque elit dapibus eget risus, fusce fermentum nullam. Molestie id elementum orci egestas purus aliquet.</p>
      </div>
      <div className="right">
        <img className='home-image' src={require('../images/about-image.png')} alt="" />
      </div>
    </div></>
  )
}

export default About