import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import Homepage from './components/Homepage';
import About from "./components/About";
import Projects from "./components/Projects";
import Cycling from "./components/hobbies/Cycling";
import Homelabbing from "./components/hobbies/Homelabbing";
import FootballRatings from "./components/projects/FootballRatings";

function ScrollRestoration() {
  const location = useLocation();

  // Restore scroll when page mounts or route changes
  useEffect(() => {
    const savedScroll = localStorage.getItem(`scrollPos-${location.pathname}`);
    if (savedScroll) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScroll));
      }, 50); 
    }
  }, [location.pathname]);

  useEffect(() => {
    const saveScroll = () => {
      localStorage.setItem(`scrollPos-${location.pathname}`, window.scrollY);
    };
    window.addEventListener("beforeunload", saveScroll);
    return () => window.removeEventListener("beforeunload", saveScroll);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Hobbies/Cycling" element={<Cycling/>}/>
        <Route path="/Hobbies/Homelabbing" element={<Homelabbing/>}/>
        <Route path="/Projects/Footballratings" element={<FootballRatings/>}/>
      </Routes>
    </Router>
  );
}

export default App;
