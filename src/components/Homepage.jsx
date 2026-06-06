import { useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'
import '../style/Homepage.css'
import image from "../assets/images/me2.png"
import SocialLinks from './SocialLinks.jsx'

function Homepage() {
  return (
    <>
      <Navbar />
      
      <div className="Homepage">
        <div className={"content animate-in"}>
          <div className="header-section">
            <div className="profile-image-wrapper">
              <img src={image} alt="Christian Egelund Hansen" className="profile-image" />
            </div>
            <div className="title-wrapper">
              <h1>Christian Egelund Hansen</h1>
            </div>
          </div>
          <p className="intro-text">
            I'm a 22 year old studying Computer science at Syddansk University. Living in Odense, Denmark. Im currently on my fourth semester, 
            taking the classes:   
          </p>  
          <ul className="course-list">
            <li>Concurrent programming</li>
            <li>Operating systems</li>
            <li>Advanced algorithms</li>
            <li>Datamining</li>
          </ul>
          <p className="closing-text">
            I am passionate about software development and currently work at Odense University Hospital
            in the Department of Cardiothoracic and Vascular Surgery at the RAPTOR Research Unit as a Junior Full Stack Developer.
            My work focuses on developing a platform that enables radiologists to classify lung tumors,
            with the collected data being used to support the development of machine learning solutions for lung tumor detection.
            <br/>
            Feel free to explore my social media profiles or review my CV.          
          </p>
          <SocialLinks />
        </div>
      </div>
    </>
  )
}

export default Homepage