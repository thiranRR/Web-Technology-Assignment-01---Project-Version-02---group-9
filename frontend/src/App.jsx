import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import NavBarAfter from './components/NavBarAfter';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import LectureDashboard from './components/LectureDashboard';

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.querySelector('.preloader');
      if (preloader) preloader.style.display = 'none';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Preloader />

      <Router>
        {/* Video Background */}
        <video className="video-background" autoPlay muted loop>
          <source src="/white-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Footer />
              </>
            }
          />

          {/* Login Route */}
          <Route path="/LoginPage" element={<LoginPage />} />

          {/* Dashboard Route */}
          <Route
            path="/LectureDashboard"
            element={
              <>
                <NavBarAfter />
                <LectureDashboard />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );

  return (
    <Router>
      <div className="App">
        <Preloader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research-content" element={<ResearchContent />} />
          <Route path="/review-research" element={<ReviewResearch />} />
        </Routes>
      </div>
    </Router>
  )

}

export default App;
