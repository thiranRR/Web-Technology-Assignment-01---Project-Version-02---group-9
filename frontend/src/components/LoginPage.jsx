import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage = () => {
  const [role, setRole] = useState("student");
  const navigate = useNavigate(); // for redirect

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`${role} Login Submitted`);
    
    // Redirect to dashboard
    navigate("/LectureDashboard");
  };

  return (
    <div className="login-page">
      <div className="main-content">
        <div className="container">
          <div className="tabs">
            <button
              id="studentBtn"
              onClick={() => setRole("student")}
              style={{ background: role === "student" ? "#2563eb" : "#3b82f6" }}
            >
              Login as a Student
            </button>
            <button
              id="lecturerBtn"
              onClick={() => setRole("lecturer")}
              style={{ background: role === "lecturer" ? "#2563eb" : "#3b82f6" }}
            >
              Login as a Lecturer
            </button>
          </div>

          {role === "student" ? (
            <form onSubmit={handleSubmit} className="login-form">
              <h2>Student Login</h2>
              <input type="text" placeholder="Matric No or Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="login-form">
              <h2>Lecturer Login</h2>
              <input type="text" placeholder="Lecturer ID or Email" required />
              <input type="password" placeholder="Password" required />
              <button type="submit">Login</button>
            </form>
          )}

          <p className="link">
            Don't have an account? <a href="/CreateAccount">Create one</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
