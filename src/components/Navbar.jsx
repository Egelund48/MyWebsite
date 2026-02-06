import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/Navbar.css'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/About" onClick={() => setOpen(false)}>About</Link>
        <Link to="/Hobbies" onClick={() => setOpen(false)}>Hobbies</Link>
        <Link to="/Projects" onClick={() => setOpen(false)}>Projects</Link>
      </div>
    </>
  )
}

export default Navbar