import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <div className="site-name">Scholar Connect</div>
          <p>Connecting students with opportunities</p>
        </div>

        <div className="footer-center">
          <button className="about-btn">About Us</button>
        </div>

        <div className="footer-right">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon"><i className="fas fa-phone-alt"></i></span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><i className="fas fa-map-marker-alt"></i></span>
              <span>123 Education St, Campus City</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><i className="fas fa-envelope"></i></span>
              <span>contact@scholarconnect.edu</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;