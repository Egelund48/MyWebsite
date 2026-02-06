import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import About from "./components/About"
import Hobbies from "./components/Hobbies"
import Projects from "./components/Projects"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Hobbies" element={<Hobbies/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </Router>
  )
}

export default App
