import React from 'react'
import "./body.css"
import Spline from '@splinetool/react-spline';

function Home() {
  return (
    <>
    <div className="container">
      <div className="left">
        <h1>Feel Comfort <br />
        to <strong> hire us.</strong> </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam purus eget consectetur tellus imperdiet. Est sit pharetra egestas blandit.</p>
        <button>Contact Us</button>
      </div>
      <div className="right">
      <Spline scene="https://prod.spline.design/9oMYCeIheTWISj9T/scene.splinecode" />
        {/* <img className='home-image' src={require('../images/home-image.png')} alt="" /> */}
      </div>
    </div>
    <div className="box">
      <h4>Next Infirmation Will Coming Soon..!</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam purus eget consectetur tellus imperdiet. Est sit pharetra egestas blandit. Quis lacus pellentesque elit dapibus eget risus, fusce fermentum nullam. Molestie id elementum orci egestas purus aliquet.</p>
    </div>
    </>
  )
}

export default Home