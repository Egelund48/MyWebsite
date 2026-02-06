import Navbar from './Navbar.jsx'
import '../style/Hobbies.css'

function Homepage() {
  return (
    <>
      <Navbar />
      
      <div className="Hobbies">
        <div className="content">
          <h1>Hobbies Page</h1>
          <p>
            These are my hobbies besides Computer science
          </p>
        </div>
      </div>
    </>
  )
}

export default Homepage