import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [hobbiesOpen, setHobbiesOpen] = useState(false)
  const [projectsOpen, setProjectsOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
    setHobbiesOpen(false)
  }

  return (
    <>
      {/* Hamburger */}
      <div
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Fullscreen menu */}
      <div className={`nav-links ${open ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/About" onClick={closeMenu}>About</Link>

        {/* Expandable Hobbies */}
        <button
          className={`nav-expand ${hobbiesOpen ? 'open' : ''}`}
          onClick={() => setHobbiesOpen(!hobbiesOpen)}
        >
          Hobbies <span className="arrow">▾</span>
        </button>

        <div className={`submenu-inline ${hobbiesOpen ? 'open' : ''}`}>
          <Link to="/hobbies/cycling" onClick={closeMenu}>Cycling</Link>
          <Link to="/hobbies/homelabbing" onClick={closeMenu}>Homelabbing</Link>
        </div>

        {/* Expandable projects */}
        <button className={`nav-expand ${projectsOpen ? 'open' : ''}`} onClick={() => setProjectsOpen(!projectsOpen)}>
          Projects <span className="arrow">▾</span>
        </button>
        <div className={`submenu-inline ${projectsOpen ? 'open' : ''}`}>
          <Link to="/projects/FootballRatings" onClick={closeMenu}>Premier league ratings</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
