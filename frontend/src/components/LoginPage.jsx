import React, { useState } from "react";
import "./login.css";


const Login = () => {
  const [role, setRole] = useState("student");

  const handleSearch = (event) => {
    event.preventDefault();
    const query = document.getElementById("searchInput").value.trim();
    if (!query) {
      alert("Please enter keywords to search.");
      return;
    }
    window.location.href = `Research-Opportunities.html?query=${encodeURIComponent(
      query
    )}`;
  };

  return (
    <div className="login-page">
       

      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="container">
          <div className="tabs">
            <button
              id="studentBtn"
              onClick={() => setRole("student")}
              style={{
                background: role === "student" ? "#2563eb" : "#3b82f6",
              }}
            >
              Login as a Student
            </button>
            <button
              id="lecturerBtn"
              onClick={() => setRole("lecturer")}
              style={{
                background: role === "lecturer" ? "#2563eb" : "#3b82f6",
              }}
            >
              Login as a Lecturer
            </button>
          </div>

          {role === "student" ? (
            <form id="studentForm" className="login-form">
              <h2>Student Login</h2>
              <input type="text" placeholder="Matric No or Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
          ) : (
            <form id="lecturerForm" className="login-form">
              <h2>Lecturer Login</h2>
              <input type="text" placeholder="Lecturer ID or Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
          )}

          <p className="link">
            Don't have an account? <a href="createaccount.html">Create one</a>
          </p>
        </div>
      </div>
 
    </div>
  );
};

export default LoginPage;
