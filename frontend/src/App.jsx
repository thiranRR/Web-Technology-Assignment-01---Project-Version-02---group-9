"use client"

import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"

// Components
import Preloader from "./components/Preloader"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Footer from "./components/Footer"
import SignUp from "./components/SignUp"
import ResearchOpportunities from "./components/ResearchOpportunities"

function HomePage() {
  return (
    <>
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
    </>
  )
}

function App() {
  useEffect(() => {
    // Simple preloader timeout
    const timer = setTimeout(() => {
      const preloader = document.querySelector(".preloader")
      if (preloader) {
        preloader.style.display = "none"
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router>
      <div className="App">
        <Preloader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/research" element={<ResearchOpportunities />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
