// src/components/ContactSection.jsx
import React from "react";
import bannerImg from "../assets/img1.avif";

export default function Contactus() {
  

  return (
    <div className="font-sans bg-gray-100 min-h-screen py-16 px-4">
      {/* Banner */}
      <div
        className="bg-cover bg-center text-center py-20 px-5 rounded-lg mb-10 opacity-70"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-4xl font-bold text-[#003366] mb-3">
          We’d love to hear from you
        </h1>
        <p className="text-lg text-gray-800">
          Whether you have a question about anything, our team is ready to answer all your questions.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <form action="mailto:yourgroupemail@example.com" method="post" encType="text/plain">
          <label htmlFor="name" className="block font-bold text-gray-700 mt-4">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-700"
          />

          <label htmlFor="email" className="block font-bold text-gray-700 mt-4">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-700"
          />

          <label htmlFor="query" className="block font-bold text-gray-700 mt-4">
            Type of Query
          </label>
          <input
            type="text"
            id="query"
            name="Query"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md text-gray-700"
          />

          <label htmlFor="message" className="block font-bold text-gray-700 mt-4">
            Your Message
          </label>
          <textarea
            id="message"
            name="Message"
            required
            className="w-full mt-1 p-3 border border-gray-300 rounded-md text-gray-700 resize-y h-36"
          />

          <input
            type="submit"
            value="Send Message"
            className="mt-6 w-full bg-[#003366] text-white py-3 rounded-lg hover:bg-[#0055aa] cursor-pointer transition"
          />
        </form>
      </div>
    </div>
  );
}
