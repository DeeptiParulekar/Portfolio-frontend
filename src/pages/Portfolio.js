import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    // Fallback static data
    const data = [
      {
        projectTitle: 'LIDKAR IMS Project',
        description:
          'Enterprise solution with Ecommerce, Inventory, Warehouse, Billing, HRMS, File Management, Beneficiary ID, Indents, Certificates, Dashboard etc.',
        client: 'LIDKAR (Govt of Karnataka)',
        category: 'Web App',
        imageUrl: 'http://localhost:8080/uploads/lidkar.png',
      },
      {
        projectTitle: 'PMMS - AMRUT 2.0',
        description:
          'Government project for KUWSDB with Zones, Districts, Milestones, Tranches & Progress Tracking.',
        client: 'KUWSDB',
        category: 'Backend',
        imageUrl: 'http://localhost:8080/uploads/pmms.png',
      },
      {
        projectTitle: 'Chikku (Internal Project)',
        description:
          'Internal platform at Sunplus for automation, testing, and process improvement.',
        client: 'Sunplus (Internal)',
        category: 'Frontend',
        imageUrl: 'http://localhost:8080/uploads/chikku.png',
      },
    ];

    setPortfolios(data);
  }, []);

  const categories = ['All', 'Web App', 'Frontend', 'Backend'];

  const filteredPortfolios =
    activeCategory === 'All'
      ? portfolios
      : portfolios.filter(item => item.category === activeCategory);

  return (
    <>
      <div className="portfolio-top-section">
        <div className="portfolio-container">
          <h1 className="portfolio-title">Portfolio</h1>
          <p className="portfolio-subtitle">
            Welcome to my online portfolio. I'm taking on freelance work at the moment.
            Want some help building your software?
          </p>
          <button className="hire-me-btn" onClick={() => navigate('/contact')}>
            🚀 Hire Me
          </button>
        </div>
      </div>

      <div className="portfolio-container white-background">
        <div className="portfolio-tabs">
          {categories.map(category => (
            <button
              key={category}
              className={`tab-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div className="portfolio-grid">
          {filteredPortfolios.length === 0 ? (
            <p>No projects to display.</p>
          ) : (
            filteredPortfolios.map((portfolio, index) => (
              <div key={index} className="portfolio-card">
                <img
                  src={portfolio.imageUrl}
                  alt={portfolio.projectTitle}
                  className="portfolio-img"
                />
                <div className="portfolio-content">
                  <h3 className="portfolio-heading">{portfolio.projectTitle}</h3>
                  <p>{portfolio.description}</p>
                  <p>
                    <strong>Client:</strong> {portfolio.client}
                  </p>
                  <p>
                    <strong>Category:</strong> {portfolio.category}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;




