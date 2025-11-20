import React from "react";
import bannerImg from "../assets/img1.avif";
import Navbar from "./Navbar";
import "./ContactUs.css";

export default function Contactus() {
  return (
    <div className="contact-page">
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <div
        className="banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="banner-text">
          <h1>We’d love to hear from you</h1>
          <p>
            Whether you have a question about anything, our team is ready to answer all your questions.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <form action="mailto:yourgroupemail@example.com" method="post" encType="text/plain">
          
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="Name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="Email" required />

          <label htmlFor="query">Type of Query</label>
          <input type="text" id="query" name="Query" />

          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="Message" required />

          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
}
