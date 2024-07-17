import React from 'react'
import './Hero.css';
import pic from '../../assets/Bhanu.jpg';
import { VscGithub } from "react-icons/vsc";
import { BiLogoLinkedin } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={pic} alt="" />
        <h1>
          Hello, <span>I'm Bhanu Prakash </span>, Full Stack Developer.</h1>
          <div className='hero-social-media'>
            <div className="account"><a href="https://github.com/Bhanuprakash648" target="blank"><VscGithub /></a></div>
            <div className="account"><a href="https://www.linkedin.com/in/bhanu-prakash-sanikommu-89734424b" target="blank"><BiLogoLinkedin /></a></div>
            <div className="account"><a href="https://www.instagram.com/bhanu_prakashy_2" target="blank"><IoLogoInstagram /></a></div>

          </div>
          <div className="hero-action">
            <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact with me</AnchorLink></div>
              <div className="hero-resume">
                <a href="https://drive.google.com/file/d/1Xirlw2mj--uGo-PNuBXL3lPxQwrj7AMS/view?usp=drive_link" target='blank' className='hero-link'> My resume</a>
              </div>
          </div>
    </div>
  )
}
export default Hero
