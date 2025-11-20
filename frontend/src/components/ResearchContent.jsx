import React from 'react';
import '../styles/ResearchContent.css';

const ResearchContent = () => {
  return (
    <div className="research-container">
      <h1 className="page-title">AI for Healthcare</h1>
      
      <div className="research-card">
        <div className="research-main">
          <div className="researcher-info">
            <div className="avatar">👨‍⚕️ </div>
            <h2 className="researcher-name">Dr. Smith</h2>
          </div>

          <div className="abstract-section">
            <h3 className="section-title">Abstract</h3>
            <p className="abstract-text">
              The aim of this research is to develop advanced artificial intelligence methods for merged diagnosis and patient care. We will explore machine learning techniques to analyze medical data, identify patterns, and improve decision making.
            </p>
          </div>
        </div>

        <div className="research-sidebar">
          <div className="info-section">
            <h3 className="section-title">Assrract</h3>
            <ul className="tags-list">
              <li>Machine learning</li>
              <li>Data analysis</li>
              <li>Medical imaging</li>
            </ul>
          </div>

          <div className="info-section">
            <div className="info-grid">
              <div>
                <h4 className="info-label">Department</h4>
                <p className="info-value">Computer Science</p>
              </div>
              <div>
                <h4 className="info-label">Deadline</h4>
                <p className="info-value">May 20</p>
              </div>
            </div>
          </div>

          <button className="apply-button">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default ResearchContent;