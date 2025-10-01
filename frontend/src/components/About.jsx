import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle circle3"></div>
      <div className="border-circle border-circle1"></div>
      <div className="border-circle border-circle2"></div>
      <div className="border-circle border-circle3"></div>
      <div className="border-circle border-circle4"></div>
      <div className="border-circle border-circle5"></div>
      
      <div style={{textAlign: 'center'}}>
        <img src="/doing-research1.avif" alt="Research collaboration" />
        <img src="/doing-research3.jpg" alt="Academic research" />
        <img src="/Doing-Research2.jpg" alt="Student research" />
      </div>
      
      <p>Bridge the gap between faculty research opportunities and student aspirations. Join our platform where meaningful academic collaborations begin.</p>
      
      <div className="highlight">Ready to start your research journey?</div>
      
      <div className="cta-buttons">
        <button>Sign up as a Student</button>
        <button className="lectureSignUpButton">Sign up as a Lecturer</button>
      </div>
    </section>
  );
};

export default About;