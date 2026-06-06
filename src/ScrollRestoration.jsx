// ScrollRestoration.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const location = useLocation();
  const key = location.pathname + location.hash; // include hash

  // Restore scroll when route changes
  useEffect(() => {
    const savedScroll = localStorage.getItem(`scrollPos-${key}`);
    if (savedScroll) {
      // wait a tick to allow React to render the page
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedScroll, 10));
      }, 50);
      return () => clearTimeout(id); 
    }
  }, [key]);

  // Save scroll when navigating away or refreshing
  useEffect(() => {
    const saveScroll = () => {
      localStorage.setItem(`scrollPos-${key}`, window.scrollY);
    };

    window.addEventListener('beforeunload', saveScroll);
    return () => window.removeEventListener('beforeunload', saveScroll);
  }, [key]);

  return null;
}