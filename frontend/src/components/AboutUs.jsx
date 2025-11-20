// src/components/AboutSection.jsx
import React from "react";
import aboutImg from "../assets/aboutus.jpg";

export default function AboutUs() {
  return (
    <section className="py-16 px-5 flex justify-center items-center">
      <div className="max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeIn">
        <div className="flex flex-wrap items-center p-10">
          {/* Text Section */}
          <div className="flex-1 min-w-[280px] md:w-3/5 md:pr-8 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-5 text-[#2c3e50]">
              About Scholar Connect
            </h1>
            <p className="text-lg leading-7 mb-5 text-gray-700">
              Scholar Connect is a web-based platform built to foster academic
              collaboration between university students and faculty members. It
              serves as a hub for posting and applying for research
              opportunities, making the process seamless and effective.
            </p>
            <p className="text-lg leading-7 mb-5 text-gray-700">
              Our goal is to empower research-driven minds with tools that
              connect them based on shared academic goals, research fields, and
              skills. We believe that knowledge shared is knowledge grown.
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition"
            >
              Back to Home
            </a>
          </div>

          {/* Image Section */}
          <div className="flex-1 min-w-[250px] md:w-2/5 text-center mt-8 md:mt-0">
            <img
              src={aboutImg} 
              alt="About Us"
              className="max-w-full h-auto rounded-2xl shadow-lg animate-float mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
