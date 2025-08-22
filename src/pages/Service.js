
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Service.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/service/getAllServices');
      setServices(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching services:', err);
      setError('Failed to fetch services');
      setLoading(false);
    }
  };

  if (loading) return <p className="loading">Loading services...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="services-container">
      <h1>Services & Pricing</h1>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.serviceEntityId} className="service-card">
            <div className="icon-wrapper">
              {service.iconUrl && <img src={service.iconUrl} alt={service.title} className="service-icon" />}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {service.packageInfo && <p className="package-info"><strong>Package:</strong> {service.packageInfo}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
