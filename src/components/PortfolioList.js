import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PortfolioList() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/portfolio/getAllPortfolios')
      .then(response => {
        console.log('Fetched portfolio data:', response.data);
        setPortfolio(response.data);
      })
      .catch(error => {
        console.error('Error fetching portfolio data:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Portfolio Showcase</h2>
      <div className="row">
        {portfolio.length > 0 ? (
          portfolio.map(item => (
            <div key={item.portfolioId} className="col-md-4 mb-4">
              <div className="card shadow-sm rounded h-100">
                <div className="card-body">
                  <h5 className="card-title">{item.portfolioTitle}</h5>
                  <p className="card-text">{item.portfolioDescription}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No portfolio data found.</p>
        )}
      </div>
    </div>
  );
}

export default PortfolioList;
