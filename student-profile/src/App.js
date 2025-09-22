import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("info");

  // Sample publications for search
  const publications = [
    { title: "Deep Learning for NLP" },
    { title: "Quantum Computing Advances" },
    { title: "AI in Healthcare" },
    { title: "Data Privacy & Security" },
  ];

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.searchInput.value.trim().toLowerCase();
    const results = publications.filter((pub) =>
      pub.title.toLowerCase().includes(query)
    );
    alert(
      results.length
        ? "Search Results:\n" + results.map((r) => r.title).join("\n")
        : "No publications found."
    );
  };

  return (
    <div>
      {/* Top Nav */}
      <nav>
        <a href="#">Home</a>
        <a href="#">My Projects</a>
        <a href="#">Contact</a>
        <a href="#">My Profile</a>
        <form className="nav-search" onSubmit={handleSearch}>
          <input type="text" name="searchInput" placeholder="Search publications..." />
          <button type="submit">🔍</button>
        </form>
      </nav>

      {/* Page Content */}
      <div className="page-content">
        {/* Supnavbar */}
        <div className="supnavbar">
          <div className="user">
            <div className="user-icon"></div>
            <div className="username">JOHN DOE ▼</div>
          </div>
        </div>

        {/* Layout */}
        <div className="layout">
          {/* Sidebar */}
          <div className="sidebar">
            <h2>Result Repository</h2>
            <a href="#" className="name-link">
              1234567890
            </a>
            <ul>
              <li><a href="#">View Profile</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Board</a></li>
              <li><a href="#">Results</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="main-content">
            <div className="box profile-box">
              <div className="profile-pic"></div>
              <div>
                <h1>JOHN DOE</h1>
                <p>Welcome to your profile page</p>
                <button className="edit-btn">Edit Profile</button>
              </div>
            </div>

            {/* Tabs */}
            <div className="tabs">
              <div
                className={`tab ${activeTab === "info" ? "active" : ""}`}
                onClick={() => setActiveTab("info")}
              >
                Information
              </div>
              <div
                className={`tab ${activeTab === "settings" ? "active" : ""}`}
                onClick={() => setActiveTab("settings")}
              >
                Settings
              </div>
            </div>

            {/* Main Section */}
            <div className="main-section">
              <div className="left-column">
                {activeTab === "info" && (
                  <div className="info-box">
                    <h3>PERSONAL INFORMATION</h3>
                    <p><strong>Surname:</strong> DOE</p>
                    <p><strong>Firstname:</strong> JOHN</p>
                    <p><strong>Lastname:</strong> SMITH</p>
                    <p><strong>Matric No.:</strong> 1234567890</p>
                    <p><strong>Date of Birth:</strong> 1995-01-01</p>
                    <p><strong>Sex:</strong> Male</p>
                    <p><strong>Email:</strong> john@example.com</p>
                  </div>
                )}

                {activeTab === "settings" && (
                  <div className="settings-box">
                    <h3>Change Password</h3>
                    <form>
                      <label htmlFor="current">Current Password</label>
                      <input type="password" id="current" name="current" />
                      <label htmlFor="new">New Password</label>
                      <input type="password" id="new" name="new" />
                      <label htmlFor="confirm">Confirm New Password</label>
                      <input type="password" id="confirm" name="confirm" />
                      <button className="btn" type="submit">
                        Change Password
                      </button>
                    </form>
                  </div>
                )}
              </div>

              <div className="right-column">
                <div className="box result-box">
                  <h3>My Results</h3>
                  <p>Total number of courses you offered</p>
                  <h1>2</h1>
                  <div className="chart-icon">📊</div>
                </div>

                <div className="box result-box">
                  <a href="#" target="_blank" rel="noreferrer">
                    <h3>Research Project</h3>
                    <p>Upload your research project</p>
                    <div className="bolt-icon">⚡</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* end of page-content */}

      {/* Footer */}
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
                📧 scholarconnect@example.com
              </div>
              <div className="contact-item">📞 +1 (234) 567-8901</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
