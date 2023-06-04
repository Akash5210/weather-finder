import React from 'react'
import '../Styles/About.css'
export default function About() {

  return (
    <div className='about'>
      <div className="top-container">
      <img src={require("../Images/cloud.png")} alt="cloud" className="first-cloud" />
      <h1>I'm Akash.</h1>
      <h2>a Web Developer</h2>
      <img src={require("../Images/cloud.png")} alt="cloud" className="second-cloud" />
      <img src={require("../Images/mountain.png")} alt="mountain" className="mountain" />
    </div>

    <div className="middle-container">
      <div className="profile">
        <img src={require("../Images/akimg1.jpg")}  alt="my" id="profile-img" />
        <h2>Hello.</h2>
        <p>I am a MERN Stack Developer. I am working as Programmer Analyst trainee in CTS. I love Playing and Travelling.</p>
      </div>
      <h4 className="four-dot">.....</h4>
      <div className="skills">
        <h2>My Skills.</h2>
        <div className="skill-row">
          <img className="skill-img1" src="https://media.giphy.com/media/juua9i2c2fA0AIp2iq/giphy.gif" alt="skill img1" />
          <h3>Design & Development</h3>
          <p>I am skilled in HTML, CSS, Bootstrap, Javascript, Reactjs, Nodejs, Expressjs, MongoDB.
            Apart from web development i have coding knowledge of C++ and Data structure. </p>
        </div>
        <div className="skill-row">
          <img className="skill-img2" src="https://media.giphy.com/media/B9ASSRShV2dPi/giphy.gif" alt="skill img2" />
          <h3>Other Hobbies</h3>
          <p>I am good in playing Badminton, carrom, high end graphic games and sketching..</p>
        </div>
      </div>
      <h4 className="four-dot">.....</h4>
      <div className="contact-me">
        <h2>Get In Touch</h2>
        <h3>If you want to know more about me.</h3>
        <p>Connect with me on these plateforms for more project releted discusson.</p>
        <a className="btn" href="mailto:akash.01raj@gmail.com">CONTACT ME</a>
      </div>
    </div>
    
    
    <div className="bottom-container">
      <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
      <a className="footer-link" href="https://twitter.com/">Twitter</a>
      <a className="footer-link" href="https://www.facebook.com/">Facebook</a>
      <p>&copy;2022 Akash Kumar @Web Developer</p>
    </div>
    </div>
  )
}
