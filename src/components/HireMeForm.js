import React, { useState } from 'react';
import { submitHireMeForm } from './services/hireMeFormService';
import './HireMeForm.css';

const HireMeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitHireMeForm(formData);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', service: '', message: '' });
      setError('');
    } catch (err) {
      setError(err.message || 'Submission failed.');
    }
  };

  return (
    <form className="hire-me-form" onSubmit={handleSubmit}>
      <h2>Hire Me</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
      />
      <input
        name="service"
        value={formData.service}
        onChange={handleChange}
        placeholder="Service Required"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows="4"
        required
      />
      <button type="submit">Submit</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default HireMeForm;
