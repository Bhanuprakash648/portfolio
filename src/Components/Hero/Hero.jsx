import React from 'react'
import './Hero.css';
import pic from '../../assets/yamu.jpg';
const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={pic} alt="" />
        <h1>
          <span>I'm Yamini Reddy </span>, full stack developer based in India.</h1>
          <p>I am a fornend developer from AP, India with 2 years of experience</p>
          <div className="hero-action">
            <div className="hero-connect">  <a href="https://www.youtube.com/watch?v=hkHHwA-vEyQ" target='blank' className='hero-link'>Connect with me </a></div>
              <div className="hero-resume">
                My resume
              </div>
          </div>
    </div>
  )
}
export default Hero
