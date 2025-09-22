import React from "react";
import "./App.css"; // Import your CSS

function Navbar() {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="#">My Projects</a>
      <a href="#">Contact</a>
      <a href="#"><i className="ph-user-circle profile-icon"></i> My Profile</a>
      <form className="nav-search" onSubmit={handleSearch}>
        <input type="text" id="searchInput" placeholder="Search publications..." />
        <button type="submit"><i className="ph-magnifying-glass"></i></button>
      </form>
    </nav>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-box">
        <div className="profile-pic"></div>
        <div className="profile-name">
          <h1>Cynthia Brown</h1>
          <p>College Lecturer</p>
        </div>
      </div>
      <div className="tabs">
        <ul>
          <li><a href="#"><i className="fas fa-note-sticky"></i> Dashboard</a></li>
          <li><a href="#"><i className="fas fa-clipboard"></i> Course</a></li>
          <li><a href="#"><i className="fas fa-book"></i> Students</a></li>
          <li><a href="#"><i className="fas fa-graduation-cap"></i> Paid Course</a></li>
          <li><a href="#"><i className="fas fa-calendar-alt"></i> Attendance</a></li>
          <li><a href="#"><i className="fas fa-list"></i> Grading</a></li>
          <li><a href="#"><i className="fas fa-headphones"></i> Alumni</a></li>
        </ul>
      </div>
    </div>
  );
}

function InfoSection() {
  return (
    <div className="information">
      <div className="twobox">
        <a href="#" className="rebox">
          <img src="S1.png" alt="Review Icon" />
          <h2>Review Research Document</h2>
          <p>Review submitted research papers</p>
        </a>
        <a href="Reserch.html" className="newbox">
          <img src="S2.png" alt="New Research Icon" />
          <h2>New Research Opportunity</h2>
          <p>Post new research topics available to students</p>
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="site-name">Scholar Connect</div>
          <p>Your gateway to academic excellence.</p>
        </div>
        <div className="footer-center">
          <button className="about-btn">About Us</button>
        </div>
        <div className="footer-right">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon ph-envelope"></span>
              scholarconnect@example.com
            </div>
            <div className="contact-item">
              <span className="contact-icon ph-phone"></span>
              +1 (234) 567-8901
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById("searchInput").value.trim().toLowerCase();
  const publications = [
    { title: "Deep Learning for NLP" },
    { title: "Quantum Computing Advances" },
    { title: "AI in Healthcare" },
    { title: "Data Privacy & Security" },
  ];
  const results = publications.filter(pub =>
    pub.title.toLowerCase().includes(query)
  );
  alert(results.length
    ? "Search Results:\n" + results.map(r => r.title).join("\n")
    : "No publications found."
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div className="fullbox">
        <Sidebar />
        <InfoSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
