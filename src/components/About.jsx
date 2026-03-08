import { useEffect } from 'react'
import Navbar from './Navbar.jsx'
import '../style/About.css'
import SocialLinks from './SocialLinks.jsx'

// Import images
import image1 from '../assets/images/AboutMeImages/img1.jpeg'
import image2 from '../assets/images/AboutMeImages/img2.jpeg'
import image3 from '../assets/images/AboutMeImages/img3.jpeg'
import image4 from '../assets/images/AboutMeImages/img4.jpeg'
import image5 from '../assets/images/AboutMeImages/img5.png'
import image6 from '../assets/images/AboutMeImages/img6.jpeg'

function About() {
  useEffect(() => {
    const track = document.getElementById("image-track");

    // Mouse events
    const handleMouseDown = (e) => {
      track.dataset.mouseDownAt = e.clientX;
    };

    const handleMouseUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleMouseMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;
      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
      const maxDelta = window.innerWidth;
      const percentage = (mouseDelta / maxDelta) * -50;
      const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;

      track.dataset.percentage = nextPercentage;

      track.animate(
        { transform: `translate(${nextPercentage}%, -50%)` },
        { duration: 150, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          { objectPosition: `${50 + nextPercentage}% center` },
          { duration: 150, fill: "forwards" }
        );
      }
    };

    // Touch events
    const handleTouchStart = (e) => {
      track.dataset.mouseDownAt = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      handleMouseMove({ clientX: e.touches[0].clientX });
    };

    const handleTouchEnd = () => handleMouseUp();

    // Add event listeners
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    // Cleanup
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);

      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="About">
        <div className="content">
          <h1>About me</h1>
          <p>
            I'm a 22 year old studying Computer science at the University of Southern Denmark (Syddansk Universitet). 
            I began programming in 2020, where I developed a strong interest in game development.  
            It was however implementing artificial intelligence into these extremely basic games, 
            that opened an entirely new world for me and significantly deepened my interest in the field. 
            <br /><br />
            I live with my Girlfriend of six years and my three-year-old dog, Jørgen. Since studying can be quite mentally demanding
            they help providing balance by allowing me to step away from constant thoughts about grades, school and personal projects - something I occasionally find challenging to do on my own.
          </p>
          <div className="gallery-container">
            <div id="image-track" data-mouse-down-at="0" data-prev-percentage="-55" data-percentage="-55">
              {/* Left duplicate set (for scrolling left) */}
              <img className="image" src={image1} alt="Gallery 1" draggable="false" />
              <img className="image" src={image2} alt="Gallery 2" draggable="false" />
              <img className="image" src={image3} alt="Gallery 3" draggable="false" />
              <img className="image" src={image4} alt="Gallery 4" draggable="false" />
              <img className="image" src={image5} alt="Gallery 5" draggable="false" />
              <img className="image" src={image6} alt="Gallery 6" draggable="false" />
              
              {/* Center set (starting view) */}
              <img className="image" src={image1} alt="Gallery 1" draggable="false" />
              <img className="image" src={image2} alt="Gallery 2" draggable="false" />
              <img className="image" src={image3} alt="Gallery 3" draggable="false" />
              <img className="image" src={image4} alt="Gallery 4" draggable="false" />
              <img className="image" src={image5} alt="Gallery 5" draggable="false" />
              <img className="image" src={image6} alt="Gallery 6" draggable="false" />
              
              {/* Right duplicate set (for scrolling right) */}
              <img className="image" src={image1} alt="Gallery 1" draggable="false" />
              <img className="image" src={image2} alt="Gallery 2" draggable="false" />
              <img className="image" src={image3} alt="Gallery 3" draggable="false" />
              <img className="image" src={image4} alt="Gallery 4" draggable="false" />
              <img className="image" src={image5} alt="Gallery 5" draggable="false" />
              <img className="image" src={image6} alt="Gallery 6" draggable="false" />
            </div>
          </div>
          <br />
          <p>
            I have other hobbies besides Computer Science, such as cycling, homelabbing, going out with friends etc. Feel free to read about them under the subpage Hobbies on my website.
          </p>
          <SocialLinks/>
        </div>
      </div>
    </>
  )
}

export default About