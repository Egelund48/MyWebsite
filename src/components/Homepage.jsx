import { useEffect, useState } from 'react'
import Navbar from './Navbar.jsx'
import '../style/Homepage.css'
import image from "../assets/images/me.jpeg"
import SocialLinks from './SocialLinks.jsx'

function Homepage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true)
  }, [])

  return (
    <>
      <Navbar />
      
      <div className="Homepage">
        <div className={`content ${isVisible ? 'animate-in' : ''}`}>
          <div className="header-section">
            <img src={image} alt="Christian Egelund Hansen" className="profile-image" />
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
            I am passionate about software development and actively seeking professional opportunities. 
            For more information, please feel free to explore my social media profiles or review my CV.          
          </p>
          <SocialLinks />
        </div>
      </div>
    </>
  )
}

export default Homepage