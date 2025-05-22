import './About.css';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight, FaFileAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPen } from 'react-icons/fa';
import React from 'react'
// In JSX
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
              {profile?.profileDescription || "I'm a software engineer specialised in frontend and backend development for complex scalable web apps."}
              Want to know how I may help your project? Check out my{' '}
              <Link to="/portfolio" className="plain-link">project portfolio</Link> and{' '}
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

            {/* Edit Icon */}
            <label className="edit-icon">
              <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
              ✏️
            </label>
          </div>
        </div>

      </section>

      <hr className="section-divider" />

      <section className="what-i-do">
        <h2>What I do</h2>
        <p>
          {profile?.whatIDo || "I have 3.6 years of experience in building software for clients all over the world."}
        </p>
        <div className="skills">
          <img src="/icons/angular.svg" alt="Angular" />
          <img src="/icons/react.svg" alt="React" />
          <img src="/icons/java.svg" alt="Java" />
        </div>
      </section>
    </div>
  );
};

export default About;





