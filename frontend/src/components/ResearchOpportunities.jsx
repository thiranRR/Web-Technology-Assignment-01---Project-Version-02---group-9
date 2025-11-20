"use client"

import { useState } from "react"
import { Search, ArrowUpRight } from "lucide-react"
import "../styles/ResearchOpportunities.css"

const ResearchOpportunities = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const opportunities = [
    {
      id: 1,
      title: "AI for Healthcare",
      description: "Develop artificial intelligence solutions for medical diagnosis and patient care systems",
      tags: ["ai", "biology"],
      supervisor: "Dr. Smith",
      date: "May 20",
      avatar: "👨‍⚕️",
    },
    {
      id: 2,
      title: "Stem Cell Research",
      description: "Study the properties of stem cells and their potential applications in regenerative medicine",
      tags: ["biology", "robotics"],
      supervisor: "Prof. Johnson",
      date: "May 25",
      avatar: "👩‍🔬",
    },
    {
      id: 3,
      title: "Machine Learning Methods",
      description: "Explore advanced techniques for machine learning algorithms and neural network architectures",
      tags: ["machine-learning"],
      supervisor: "Dr. Brown",
      date: "Apr 30",
      avatar: "👨‍💻",
    },
    {
      id: 4,
      title: "Genome Editing",
      description: "Investigate CRISPR and other genome editing technologies for therapeutic applications",
      tags: ["genome"],
      supervisor: "Dr. Taylor",
      date: "May 18",
      avatar: "🧬",
    },
    {
      id: 5,
      title: "Computational Neuroscience",
      description: "Model neural networks and brain function using computational approaches and data analysis",
      tags: ["neuroscience", "ai"],
      supervisor: "Dr. Chen",
      date: "Jun 05",
      avatar: "🧠",
    },
    {
      id: 6,
      title: "Human-Robot Interaction",
      description: "Analyze interactions between humans and robotic systems in various environments",
      tags: ["robotics", "ai"],
      supervisor: "Dr. Wilson",
      date: "Jun 02",
      avatar: "🤖",
    },
  ]

  const filteredOpportunities = opportunities.filter(
    (opportunity) =>
      opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.supervisor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opportunity.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  const formatTagName = (tag) => {
    return tag.charAt(0).toUpperCase() + tag.slice(1).replace("-", " ")
  }

  return (
    <div className="research-opportunities-page">
      <nav className="research-nav">
        <a href="/">Home</a>
        <a href="#browse">My Projects</a>
        <a href="#contact">Contact</a>
        <a href="#profile">
          <span className="profile-icon">👤</span>
          My Profile
        </a>
      </nav>

      <div className="research-container">
        <div className="research-header">
          <h1 className="research-title">Research Opportunities</h1>
          <button className="expand-btn" aria-label="Expand">
            <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="search-container">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="opportunities-grid">
          {filteredOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="opportunity-card">
              <h3 className="card-title">{opportunity.title}</h3>
              <p className="card-description">{opportunity.description}</p>
              <div className="card-tags">
                {opportunity.tags.map((tag, index) => (
                  <span key={index} className={`tag tag-${tag}`}>
                    {formatTagName(tag)}
                  </span>
                ))}
              </div>
              <div className="card-footer">
                <div className="supervisor">
                  <div className="supervisor-avatar">{opportunity.avatar}</div>
                  <span className="supervisor-name">{opportunity.supervisor}</span>
                </div>
                <span className="date">{opportunity.date}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="no-results">No research opportunities found matching your search.</div>
        )}
      </div>

      <footer className="research-footer">
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
                <span className="contact-icon">✉️</span>
                scholarconnect@example.com
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                +1 (234) 567-8901
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ResearchOpportunities
