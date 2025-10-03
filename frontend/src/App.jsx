 import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      if (preloader) {
        preloader.style.display = 'none';
      }
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

        <Switch>
          {/* Home Route */}
          <Route exact path="/">
            <Navbar />
            <Hero />
            <About />
            <Footer />
          </Route>

          {/* Login Route */}
          <Route path="/LoginPage">
            <LoginPage />
          </Route>

          {/* Dashboard Route */}
          <Route path="/LectureDashboard">
            <NavBarAfter />
            <LectureDashboard />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;