import './About.css';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight, FaFileAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPen } from 'react-icons/fa';
import React from 'react'

<FaPen />

const About = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/profile/getProfileById?profileId=1') 
      .then(res => setProfile(res.data))
      .catch(err => console.error('Error loading profile', err));
  }, []);

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
        const res = await axios.post('http://localhost:8080/api/profile/uploadProfileImage2', updatedProfile);
        setProfile(res.data);
        alert("Profile image updated successfully!");
      } catch (err) {
        console.error("Upload failed", err);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="about-page">
      <section className="intro-section">
        <div className="intro-text">
          <div className="name-title">
            <h1 className="big-name">{profile?.profileName || "Deepti Parulekar"}</h1>
            <h2 className="job-title">{profile?.profileTitle || "Software Engineer"}</h2>
          </div>

          <div className="bio">
            <p>
              {profile?.profileDescription || "Im a software engineer specialised in frontend and backend development for complex scalable web apps."}
              Want to know how I may help your project? Check out my{' '}
              <Link to="/portfolio" className="plain-link">Project Portfolio</Link> and{' '}
              <Link to="/resume" className="plain-link">online resume</Link>.
            </p>
          </div>

          <div className="intro-buttons">
            <Link to="/portfolio" className="btn green">
              <FaArrowCircleRight style={{ marginRight: '8px' }} />
              View Portfolio
            </Link>
            <Link to="/resume" className="btn dark">
              <FaFileAlt style={{ marginRight: '8px' }} />
              View Resume
            </Link>
          </div>
        </div>

        <div className="profile-image-wrapper">
          <div className="image-container">
            {profile?.profileImage2 ? (
              <img src={'http://localhost:8080'+profile.profileImage2} alt="Profile" className="profile-image" />
            ) : (
              <div className="placeholder-circle"></div>
            )}

            
            <label className="edit-icon">
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
              ✏️
            </label>
          </div>
        </div>

      </section>

      <hr className="section-divider" />

  

<section className="what-i-do">
  <h2>What I Do</h2>
  <p>{profile?.whatIDo || "I have 3.8 years of experience in building software for clients."}</p>

  <div className="card-container">
  <div className="info-card">
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
      alt="React" 
      style={{ width: '40px', height: '40px' }} 
    />

      </div>
      <div>
        <h4>React</h4>
        <p>I build interactive UIs using Reacts</p>
      </div>
    </div>


    <div className="info-card">
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
          alt="Java"
          style={{ width: '40px', height: '40px' }}
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
          alt="Spring Boot"
          style={{ width: '40px', height: '40px' }}
        />
      </div>
      <div>
        <h4>Java + Spring Boot</h4>
        <p>REST APIs and Microservices with Spring Boot.</p>
      </div>
    </div>

      <div className="info-card">
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <img 
  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
  alt="PostgreSQL" 
  style={{ width: '40px', height: '40px' }} 
/>

      </div>
      <div>
        <h4>PostgreSQL</h4>
        <p>Database Management.</p>
      </div>
    </div>

          <div className="info-card">
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <img 
  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/postman.svg" 
  alt="Postman" 
  style={{ width: '40px', height: '40px', fill: '#FF6C37' }} 
/>

      </div>
      <div>
        <h4>Postman</h4>
        <p>API Testing and Debugging</p>
      </div>
    </div>

          <div className="info-card">
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <img 
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/amazonaws.svg" 
      alt="AWS" 
      style={{ width: '40px', height: '40px', fill: '#FF9900' }} 
    />

      </div>
      <div>
        <h4>AWS</h4>
        <p>Amazaon Web Services</p>
      </div>
    </div>
  </div> 
</section>


    </div>
  );
};

export default About;





