import { useEffect } from 'react'
import Navbar from '../Navbar.jsx'
import MyServerImage from '../../assets/images/HomelabbingImages/MyServer.jpg'
import '../../style/hobbies/Homelabbing.css'

function Homelabbing() {

  useEffect(() => {
    const sections = document.querySelectorAll('.section')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <div className="Homelabbing">

        {/* INTRO */}
        <section className="section intro">
          <div className="content">
            <h1>Homelabbing</h1>
            <p>
              My interest for homelabbing started in October 2025, when I got my
              first NAS — a <strong>Synology DS124</strong>.  
              It quickly turned into a playground for self-hosting, media,
              and learning how servers actually work.
            </p>
          </div>
        </section>

        {/* DS124 */}
        <section className="section ds124">
          <div className="content split">
            <div className="text">
              <h2>My Synology DS124</h2>

              <ul className="pill-list">
                <li>1 GB DDR4 RAM</li>
                <li>Quad-core 1.7 GHz</li>
                <li>1 × 1GbE</li>
                <li>2 × USB 3.2</li>
                <li>Low power usage</li>
                <li>Beginner-friendly GUI</li>
              </ul>

              <p>
                The main reason i got the DS124 was the low price and the beginner friendly interface. 
                It has an amazing GUI, which makes everything 10x easier for beginners, but still allows users to access it via SSH. 
                There is however a major drawback, since it only has room for one 3.5 HHD/2.5 SSD. This means i only got 4tb or storage (and no room for a failed harddrive). 
              </p>
            </div>

            <div className="image">
              <img src={MyServerImage} alt="My Synology DS124 NAS" />
              <p className="caption">My current Synology DS124 NAS</p>
            </div>
          </div>
        </section>

        {/* JELLYFIN */}
        <section className="section jellyfin">
          <div className="content">
            <h2>Jellyfin</h2>
            <p>
              Jellyfin is my primary media server. It allows me to stream movies
              and shows locally without relying on third-party services.
              Everything runs on my own hardware. 
            </p>
          </div>
        </section>

      </div>
    </>
  )
}

export default Homelabbing
