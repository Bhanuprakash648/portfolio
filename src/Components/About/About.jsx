import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-right">
            <div className="about-para">
                <p>Hi! I am Bhanu Prakash, a BTech computer science student at SRM University with a strong interest in technology. Skilled in the MERN stack, I focus on creating dynamic web applications and practical experience in AWS. I am dedicated to ongoing learning and innovation in my field. I enjoy tackling challenges that push my limits and am excited about exploring new opportunities to make significant contributions to the tech industry.</p>
            </div>
            <div className="about-skills">
                <h1> skills</h1>
                <div className="skill-container">
                  <div className='skill'>Node Js</div>
                  <div className='skill'>Express</div>
                  <div className='skill'>MongoDB</div>
                  <div className='skill'>React Js</div>
                  <div className='skill'>Java Script</div>
                  <div className='skill'>HTML</div>
                  <div className='skill'>CSS</div>
                  <div className='skill'>C/C++</div>
                  <div className='skill'>Python</div>
                  <div className='skill'>Java</div>
                  <div className='skill'>MYSQL</div>
                  <div className='skill'>Machine Learning</div>

                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default About
