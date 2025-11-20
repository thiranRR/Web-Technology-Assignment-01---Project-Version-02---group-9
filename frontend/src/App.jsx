import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import NavBarAfter from "./components/NavBarAfter";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import LectureDashboard from "./components/LectureDashboard";
import ResearchContent from "./components/ResearchContent";
import ReviewResearch from "./components/ReviewResearch";
import Contactus from "./components/ContactUs.jsx"; // Contact component

// New Components
import SignUp from "./components/SignUp";
import ResearchOpportunities from "./components/ResearchOpportunities";

function HomePage() {
  return (
    <div className="App">
      {/* Video Background */}
      <video className="video-background" autoPlay muted loop>
        <source src="/white-vid.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>

      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

function App() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const preloader = document.querySelector(".preloader");
      if (preloader) preloader.style.display = "none";
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <Preloader />

        <Routes>
          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* LOGIN */}
          <Route path="/LoginPage" element={<LoginPage />} />

          {/* LECTURER DASHBOARD */}
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

          {/* RESEARCH PAGES */}
          <Route path="/research-content" element={<ResearchContent />} />
          <Route path="/review-research" element={<ReviewResearch />} />

          {/* USER SIGNUP */}
          <Route path="/signup" element={<SignUp />} />

          {/* RESEARCH OPPORTUNITIES */}
          <Route path="/research-opportunities" element={<ResearchOpportunities />} />

          {/* CONTACT PAGE */}
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
