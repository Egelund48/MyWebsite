import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import '../../style/projects/Other.css'

function Other() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />

      <div className="Other">
        <div className={`content ${isVisible ? "animate-in" : ""}`}>
          
          <div className="title-wrapper">
            <h1>My Other Projects</h1>
          </div>

          <p className="intro-text">
            Over time, I’ve worked on a variety of projects, both through my
            studies and in my spare time, simply because I enjoy building and
            learning new things.
            Even while balancing university and personal projects, I structure
            my time carefully, which allows me to take on student jobs
            alongside my studies. More details about my additional work will be
            added here as I continue documenting them.
            </p>
        </div>
      </div>
    </>
  );
}

export default Other;