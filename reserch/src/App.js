import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [researchTitle, setResearchTitle] = useState("");
  const [professor, setProfessor] = useState("");
  const [abstract, setAbstract] = useState("");
  const [content, setContent] = useState("");
  const [department, setDepartment] = useState("");
  const [deadline, setDeadline] = useState("");
  const [errors, setErrors] = useState({});

  const publications = [
    { title: "Deep Learning for Natural Language Processing" },
    { title: "Quantum Computing Advances" },
    { title: "Renewable Energy Technologies" },
    { title: "AI in Healthcare" },
    { title: "Data Privacy and Security" },
    { title: "Machine Learning in Education" },
  ];

  useEffect(() => {
    // Set minimum deadline to today
    const today = new Date().toISOString().split("T")[0];
    setDeadline(today);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim().toLowerCase();
    if (!query) {
      alert("Please enter keywords to search.");
      return;
    }
    const results = publications.filter((pub) =>
      pub.title.toLowerCase().includes(query)
    );
    if (results.length > 0) {
      alert("Search Results:\n" + results.map((r) => r.title).join("\n"));
    } else {
      alert("No publications found matching your keywords.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!researchTitle.trim()) newErrors.researchTitle = "Please enter a research title";
    if (!professor) newErrors.professor = "Please select a professor";
    if (!abstract.trim()) newErrors.abstract = "Please enter an abstract";
    if (!content.trim()) newErrors.content = "Please enter content";
    if (!department) newErrors.department = "Please select a department";
    if (!deadline) newErrors.deadline = "Please select a deadline";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Research submitted successfully!");
      setResearchTitle("");
      setProfessor("");
      setAbstract("");
      setContent("");
      setDepartment("");
      setDeadline(new Date().toISOString().split("T")[0]);
    }
  };

  return (
    <div className="App">
      <nav>
        <a href="#home">Home</a>
        <a href="#browse">Browse Researches</a>
        <a href="#contact">Contact</a>
        <a href="#profile">
          <i className="ph-user-circle profile-icon"></i>My Profile
        </a>
        <form className="nav-search" onSubmit={handleSearch}>
          <input type="text" name="search" placeholder="Search publications..." />
          <button type="submit"><i className="ph-magnifying-glass"></i></button>
        </form>
      </nav>

      <main>
        <div className="upbox">
          <form className="uploadbox" onSubmit={handleSubmit}>
            <label>Research Title:</label>
            <input
              type="text"
              value={researchTitle}
              onChange={(e) => setResearchTitle(e.target.value)}
            />
            {errors.researchTitle && <div className="error">{errors.researchTitle}</div>}

            <label>Professor in Charge:</label>
            <select value={professor} onChange={(e) => setProfessor(e.target.value)}>
              <option value="" disabled>Select Professor...</option>
              <option value="prof1">Professor 1</option>
              <option value="prof2">Professor 2</option>
              <option value="prof3">Professor 3</option>
            </select>
            {errors.professor && <div className="error">{errors.professor}</div>}

            <label>Abstract:</label>
            <textarea value={abstract} onChange={(e) => setAbstract(e.target.value)} />
            {errors.abstract && <div className="error">{errors.abstract}</div>}

            <label>Content:</label>
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {errors.content && <div className="error">{errors.content}</div>}

            <div className="twosection">
              <div>
                <label>Department:</label>
                <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                  <option value="" disabled>Select Department...</option>
                  <option value="cse">Computer Science</option>
                  <option value="ece">Electronics</option>
                  <option value="mech">Mechanical</option>
                  <option value="civil">Civil</option>
                  <option value="bio">Biotechnology</option>
                </select>
                {errors.department && <div className="error">{errors.department}</div>}
              </div>

              <div>
                <label>Deadline:</label>
                <input
                  type="date"
                  value={deadline}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setDeadline(e.target.value)}
                />
                {errors.deadline && <div className="error">{errors.deadline}</div>}
              </div>
            </div>

            <button type="submit">Post</button>
          </form>
        </div>
      </main>

      <footer>
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
              <div className="contact-item">📧 scholarconnect@example.com</div>
              <div className="contact-item">📞 +1 (234) 567-8901</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
