import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from "react";
import Homepage from './components/Homepage';
import About from "./components/About";
import Cycling from "./components/hobbies/Cycling";
import Homelabbing from "./components/hobbies/Homelabbing";
import FootballRatings from "./components/projects/FootballRatings";
import Other from './components/projects/Other'; 

function ScrollRestoration() {
  const location = useLocation();
  const key = location.pathname + location.hash; // include hash for HashRouter

  // Restore scroll when page mounts or route changes
  useEffect(() => {
    // Small delay to wait for images and content to render
    const timeout = setTimeout(() => {
      const savedScroll = localStorage.getItem(`scrollPos-${key}`);
      if (savedScroll) {
        window.scrollTo(0, parseInt(savedScroll));
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [key]);

  // Save scroll whenever route changes or user scrolls
  useEffect(() => {
    const saveScroll = () => {
      localStorage.setItem(`scrollPos-${key}`, window.scrollY);
    };

    // Save on scroll continuously (throttled)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          saveScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [key]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Hobbies/Cycling" element={<Cycling/>}/>
        <Route path="/Hobbies/Homelabbing" element={<Homelabbing/>}/>
        <Route path="/Projects/FootballRatings" element={<FootballRatings/>}/>
        <Route path="/Projects/other" element={<Other />} />
      </Routes>
    </Router>
  );
}

export default App;
