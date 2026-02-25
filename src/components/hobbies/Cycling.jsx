import { useEffect, useRef } from "react"
import Navbar from '../Navbar.jsx'
import firstBike from '../../assets/images/CyclingImages/gamlee.png'
import tur from '../../assets/images/CyclingImages/img1.jpg'
import route from '../../assets/images/CyclingImages/fynRundt.PNG'
import ven from '../../assets/images/CyclingImages/ven.JPG'
import favRoute from '../../assets/images/CyclingImages/favRoute.PNG'
import bestTime from '../../assets/images/CyclingImages/bestTime.PNG'
import fynStats from '../../assets/images/CyclingImages/fynStats.PNG'
import venner from '../../assets/images/CyclingImages/venner.JPG'
import done from '../../assets/images/CyclingImages/færdig.jpg'


import '../../style/hobbies/Cycling.css'

function Cycling() {
  const imageRef = useRef(null)
  const images = [ven, bestTime,venner, done, route, fynStats, tur];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (imageRef.current) {
        imageRef.current.style.transform = `translateY(${scrollY * 0.4}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []); 

  // Intersection observer for fade-in
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.25 }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <div className="Cycling">

        {/* INTRO */}
        <section className="intro">
          <img
            ref={imageRef}
            src={tur}
            alt="Cycling background"
            className="intro-bg"
          />
          <div className="overlay" />
          <div className="fade-bottom" />
          <div className="content">
            <h1>My Passion for Cycling</h1>
          </div>
        </section>

        {/* BEGINNING */}
        <section className="beginning fade-section">
          <div className="beginning-content">
            <h2>The Beginning</h2>
            <p>
              I first got a bike in spring 2024, after a long period of illness. I wanted a new way to stay active besides running and bought a cheap roadbike. 
              My first bike was a Giant from 1997, which had a lot of issues. I quickly realized I had to learn how to fix it myself — and I discovered that tinkering and repairing the bike is just as enjoyable as riding it.
            </p>
          </div>
          <div className="beginning-image">
            <img src={firstBike} alt="My first bike" />
          </div>
        </section>

        {/* LEARNING SECTION */}
        <section className="learning fade-section">
          <div className="learning-content">
            <h2>Learning</h2>
            <p>
              After learning to ride with cleats, discovering new routes, and getting more comfortable with cycling, I started enjoying the full experience — both the exercise and the freedom of exploring new places.
            </p>
          </div>
        </section>

        {/* SCROLLING IMAGES */}

        <section className="scroll-image fade-section">
          <div className="scroll-image-inner">
            {images.map((src, i) => {
              const min = -15;
              const max = 15;
              const rotation = min + (i * (max - min)) / (images.length - 1);

              return (
                <img
                  key={i}
                  src={src}
                  alt={`Cycling image ${i}`}
                  style={{ '--rotation': `${rotation}deg` }}
                />
              );
            })}
          </div>
        </section>
      </div>
    </>
  )
}

export default Cycling
