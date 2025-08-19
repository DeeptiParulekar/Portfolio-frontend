import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaUser, FaBriefcase, FaTags, FaFileAlt, FaEnvelope, FaPaperPlane, FaMoon } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import './App.css';
import ContactForm from './components/ContactForm';
import About from './pages/About';
import axios from 'axios';
import Portfolio from './pages/Portfolio'; 
import Service from './pages/Service';


// function Services() { return <h2>Services & Pricing Page</h2>; }
function Resume() { return <h2>Resume Page</h2>; }

function App() {
  const [profile, setProfile] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  useEffect(() => {
    axios.get('http://localhost:8080/api/profile/getProfileById?profileId=1')
      .then(res => setProfile(res.data))
      .catch(err => console.error('Error loading profile', err));
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result;

      const updatedProfile = {
        profileId: 1,
        base64Image: base64Image.split(",")[1],
      };

      try {
        const res = await axios.post('http://localhost:8080/api/profile/uploadProfileImage', updatedProfile);
        setProfile(res.data);
        alert("Profile image updated successfully!");
      } catch (err) {
        console.error("Upload failed", err);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <div className="profile">
            <div className="profile-image-wrapper">
              {profile?.profileImage2 ? (
                <img src={'http://localhost:8080' + profile.profileImage} alt="Profile" className="profile-image" />
              ) : (
                <div className="placeholder-circle"></div>
              )}
              <label className="edit-iconprofile">
                <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                ✏️
              </label>
            </div>
            <h2>Deepti Parulekar</h2>
            <p>Hi, my name is Deepti Parulekar</p>
            <p>I'm a Software Engineer</p>                 
            <p>Welcome to my personal website!</p>
          </div>

          <div className="social-icons">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

          <nav>
            <Link to="/about"><FaUser style={{ marginRight: '8px' }} /> About Me</Link>
            <Link to="/portfolio"><FaBriefcase style={{ marginRight: '8px' }} /> Portfolio</Link>
            <Link to="/services"><FaTags style={{ marginRight: '8px' }} /> Services & Pricing</Link>
            <Link to="/resume"><FaFileAlt style={{ marginRight: '8px' }} /> Resume</Link>
            <Link to="/contact"><FaEnvelope style={{ marginRight: '8px' }} /> Contact</Link>
            <Link to="/hire"><FaPaperPlane style={{ marginRight: '8px' }} /> Hire Me</Link>
            <div className="dark-mode-toggle-wrapper">
              <label className="toggle-label">
                <FaMoon style={{ marginRight: '8px' }} />
                Dark Mode
              </label>
              <label className="switch">
                <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                <span className="slider round"></span>
              </label>
            </div>

          </nav>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Service />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/hire" element={<ContactForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;





