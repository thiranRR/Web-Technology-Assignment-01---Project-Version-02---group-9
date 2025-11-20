import React, { useState } from 'react';

const Navigation = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-[#D2C1B6] to-[#456882] flex justify-center gap-8 md:gap-16 px-8 py-4 z-50 items-center flex-wrap">
      <a href="#" className="text-white font-bold text-base transition-transform hover:-translate-y-1 flex items-center gap-1">
        Home
      </a>
      <a href="#" className="text-white font-bold text-base transition-transform hover:-translate-y-1 flex items-center gap-1">
        My Projects
      </a>
      <a href="#" className="text-white font-bold text-base transition-transform hover:-translate-y-1 flex items-center gap-1">
        Contact
      </a>
      <a href="#" className="text-white font-bold text-base transition-transform hover:-translate-y-1 flex items-center gap-1">
        <i className="ph-user-circle"></i> My Profile
      </a>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search publications..."
          className="px-3 py-1 rounded-full border-none text-base outline-none w-44 focus:shadow-[0_0_8px_#5bd5db]"
        />
        <button
          type="submit"
          className="bg-[#5bd5db] border-none rounded-full p-2 cursor-pointer flex items-center justify-center hover:bg-[#4bc5cb]"
        >
          <i className="ph-magnifying-glass text-white"></i>
        </button>
      </form>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <div className="w-full md:w-72 bg-[#f0f8ff] p-5 flex flex-col items-center text-center rounded-none md:rounded-r-[8%]">
      <div className="flex flex-col items-center mb-3 mt-3">
        <div className="w-24 h-24 bg-gray-300 rounded-full mb-3"></div>
        <div>
          <h1 className="text-3xl mb-3 text-black">Cynthia Brown</h1>
          <p className="text-gray-800 text-2xl mb-3">College Lecturer</p>
        </div>
      </div>
      <div className="w-full">
        <ul className="list-none p-0 mt-8">
          <li className="my-4">
            <a
              href="#"
              className="no-underline text-black font-bold block border-none px-5 py-3 rounded cursor-pointer text-xl text-left hover:bg-[#1f5a8c] hover:text-white transition-colors"
            >
              <i className="fas fa-note-sticky mr-2"></i> Dashboard
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ActionCard = ({ type, title, description, image, link }) => {
  const bgColor = type === 'review' ? 'bg-[#edeffa]' : 'bg-[#fdf1e5]';
  
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bgColor} p-5 rounded-xl w-72 h-96 text-center flex flex-col justify-center shadow-[0_9px_8px_0_#1f5a8c] transition-transform hover:scale-105 no-underline text-inherit`}
    >
      <img src={image} alt={title} className="mx-auto mb-4 max-w-[150px]" />
      <h2 className="text-xl mt-5 text-[#2b78e4]">{title}</h2>
      <p className="mt-3 text-gray-600">{description}</p>
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#D2C1B6] to-[#456882] text-white py-8 w-full mt-auto">
      <div className="flex flex-wrap justify-between items-center max-w-6xl mx-auto px-5 gap-5">
        <div className="flex-1 min-w-[250px]">
          <div className="text-3xl font-bold font-serif mb-3">Scholar Connect</div>
          <p>Your gateway to academic excellence.</p>
        </div>
        <div className="flex-1 flex justify-center min-w-[150px]">
          <button className="bg-white/20 text-white border border-white px-6 py-2 rounded-full text-base cursor-pointer transition-all hover:bg-white/30 hover:-translate-y-0.5">
            About Us
          </button>
        </div>
        <div className="flex-1 min-w-[250px]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-lg w-5 text-center">
                <i className="ph-envelope"></i>
              </span>
              scholarconnect@example.com
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-lg w-5 text-center">
                <i className="ph-phone"></i>
              </span>
              +1 (234) 567-8901
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function LecturerProfile() {
  const publications = [
    { title: "Deep Learning for NLP" },
    { title: "Quantum Computing Advances" },
    { title: "AI in Healthcare" },
    { title: "Data Privacy & Security" }
  ];

  const handleSearch = (query) => {
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) {
      alert("Please enter a search term.");
      return;
    }
    
    const results = publications.filter(pub => 
      pub.title.toLowerCase().includes(trimmedQuery)
    );
    
    if (results.length > 0) {
      alert("Search Results:\n" + results.map(r => r.title).join("\n"));
    } else {
      alert("No publications found.");
    }
  };

  return (
    <>
      <link href="https://unpkg.com/phosphor-icons/css/phosphor.css" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <div className="font-sans bg-[#cce6ff] min-h-screen flex flex-col">
        <Navigation onSearch={handleSearch} />
        
        <div className="flex flex-col md:flex-row gap-5 pt-16 min-h-screen">
          <Sidebar />
          
          <div className="flex-1 p-10">
            <div className="flex flex-wrap items-center justify-center gap-12">
              <ActionCard
                type="review"
                title="Review Research Document"
                description="Review submitted research papers"
                image="S1.png"
                link="#"
              />
              <ActionCard
                type="new"
                title="New Research Opportunity"
                description="Post new research topics available to students"
                image="S2.png"
                link="Reserch.html"
              />
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}
