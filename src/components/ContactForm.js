import React, { useState } from "react";
import "./ContactForm.css";
import { faXTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Not sure",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="contact-wrapper">
      {/* Top Section */}
      <div className="left-section">
        <h1>Contact</h1>
        <p>
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me an email to{" "}
          <a href="mailto:deeptiparulekar1997@gmail.com">
            deeptiparulekar1997@gmail.com
          </a>
        </p>
        <div className="social-links">
          <p>Want to get connected? Follow me on the social channels below.</p>
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
      </div>

      {/* Bottom Section */}
      <div className="right-section">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row two-cols">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <label>Service</label>
            <select name="service" value={formData.service} onChange={handleChange}>
              <option value="Not sure">Not sure</option>
              <option value="Web Design">Web Design</option>
              <option value="Consultation">Consultation</option>
            </select>
            <small>
              Want to know what's included in each package? Check the Services & Pricing page.
            </small>
          </div>

          <div className="form-row">
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Send Now</button>
        </form>

        <div className="footer-note">
          © <a href="/about">MY PORTFOLIO</a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;


