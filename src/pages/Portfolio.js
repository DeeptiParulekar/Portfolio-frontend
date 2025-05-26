// import React, { useEffect, useState } from 'react';
// import { getAllPortfolios } from '../services/PortfolioService';
// import './Portfolio.css';

// const Portfolio = () => {
//   const [portfolios, setPortfolios] = useState([]);
//   const [activeCategory, setActiveCategory] = useState('All');

//   useEffect(() => {
//     fetchPortfolios();
//   }, []);

//   const fetchPortfolios = async () => {
//     try {
//       const data = await getAllPortfolios();
//       setPortfolios(data);
//     } catch (error) {
//       console.error('Failed to fetch portfolios:', error);
//     }
//   };

//   const categories = ['All', 'Web App', 'Mobile App', 'Frontend', 'Backend'];

//   const filteredPortfolios =
//     activeCategory === 'All'
//       ? portfolios
//       : portfolios.filter((item) => item.category === activeCategory);

//   return (
//     <>
//       {/* Top Section with Grey Background */}
//       <div className="portfolio-top-section">
//         <div className="portfolio-container">
//           <h1 className="portfolio-title">Portfolio</h1>
//           <p className="portfolio-subtitle">
//             Welcome to my online portfolio. I'm taking on freelance work at the moment. Want some help building your software?
//           </p>
//           <button className="hire-me-btn">🚀 Hire Me</button>
//         </div>
//       </div>

//       {/* Bottom Section with White Background */}
//       <div className="portfolio-container white-background">
//         {/* Category Tabs */}
//         <div className="portfolio-tabs">
//           {categories.map((category) => (
//             <button
//               key={category}
//               className={`tab-button ${activeCategory === category ? 'active' : ''}`}
//               onClick={() => setActiveCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Portfolio Cards */}
//         <div className="portfolio-grid">
//           {filteredPortfolios.map((portfolio, index) => (
//             <div key={index} className="portfolio-card">
//               <img src={portfolio.imageUrl} alt="Project" className="portfolio-img" />
//               <div className="portfolio-content">
//                 <h3 className="portfolio-heading">{portfolio.projectTitle}</h3>
//                 <p>{portfolio.description}</p>
//                 <p className="portfolio-client">Client: {portfolio.client}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolio;


import React, { useEffect, useState } from 'react';
import { getAllPortfolios } from '../services/PortfolioService';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate
import './Portfolio.css';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    fetchPortfolios();
  }, []);

  const fetchPortfolios = async () => {
    try {
      const data = await getAllPortfolios();
      setPortfolios(data);
    } catch (error) {
      console.error('Failed to fetch portfolios:', error);
    }
  };

  const categories = ['All', 'Web App', 'Mobile App', 'Frontend', 'Backend'];

  const filteredPortfolios =
    activeCategory === 'All'
      ? portfolios
      : portfolios.filter((item) => item.category === activeCategory);

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
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredPortfolios.map((portfolio, index) => (
            <div key={index} className="portfolio-card">
              <img src={portfolio.imageUrl} alt="Project" className="portfolio-img" />
              <div className="portfolio-content">
                <h3 className="portfolio-heading">{portfolio.projectTitle}</h3>
                <p>{portfolio.description}</p>
                <p className="portfolio-client">Client: {portfolio.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
