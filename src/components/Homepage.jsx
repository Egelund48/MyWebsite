import Navbar from './Navbar.jsx'
import '../style/Homepage.css'
import image from "../assets/images/me.jpeg"
import { FaLinkedin, FaGithub, FaGitlab, FaFilePdf } from 'react-icons/fa'

function Homepage() {
  return (
    <>
      <Navbar />
      
      <div className="Homepage">
        <div className="content">
          <div className="header-section">
            <img src={image} alt="Christian Egelund Hansen" className="profile-image" />
            <div className="title-wrapper">
              <h1>Christian Egelund Hansen</h1>
            </div>
          </div>
          <p>
            I'm a 22 year old studying Computer science at Syddansk University. Living in Odense, Denmark. Im currently on my fourth semester, 
            taking the classes:     
            <ul className="course-list">
                <li>Concurrent programming</li>
                <li>Operating systems</li>
                <li>Advanced algorithms</li>
                <li>Datamining</li>
            </ul>
            I am passionate about software development and actively seeking professional opportunities. 
            For more information, please feel free to explore my social media profiles or review my CV.          
            </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/christian-egelund-hansen-94586a298/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/Egelund48" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>            
            <a href="https://gitlab.sdu.dk/chhan24" target="_blank" rel="noopener noreferrer">
              <FaGitlab className="social-icon" />
            </a>
            <a href="../public/CV.pdf" target="_blank" rel="noopener noreferrer">
              <FaFilePdf className="social-icon" />
              <span>CV</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Homepage