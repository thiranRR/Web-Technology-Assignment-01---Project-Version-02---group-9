import React, { useEffect } from 'react';
import './App.css';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Simple preloader timeout (remove GSAP for now)
    const timer = setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.style.display = 'none';
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Footer />
      
      {/* Video Background */}
      <video className="video-background" autoPlay muted loop>
        <source src="/white-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
    </div>
  );
}

export default App;