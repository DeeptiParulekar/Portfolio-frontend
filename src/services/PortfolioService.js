// src/services/PortfolioService.js
import axios from 'axios'; // ✅ Make sure this is at the top

const API_BASE_URL = 'http://localhost:8080/api/portfolio';

// Get all portfolios
export const getAllPortfolios = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getAllPortfolio`);
    return response.data;
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    throw error;
  }
};

// Get portfolio by ID
export const getPortfolioById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getByIdPortfolio`, {
      params: { portfolioId: id }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching portfolio with ID ${id}:`, error);
    throw error;
  }
};

// Create a new portfolio
export const createPortfolio = async (portfolioData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/createPortfolio`, portfolioData);
    return response.data;
  } catch (error) {
    console.error('Error creating portfolio:', error);
    throw error;
  }
};

// Update a portfolio by ID
export const updatePortfolio = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/updatePortfolio`, updatedData, {
      params: { portfolioId: id }
    });
    return response.data;
  } catch (error) {
    console.error(`Error updating portfolio with ID ${id}:`, error);
    throw error;
  }
};

// Delete a portfolio by ID
export const deletePortfolio = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/deletePortfolio`, {
      params: { portfolioId: id }
    });
    return response.data;
  } catch (error) {
    console.error(`Error deleting portfolio with ID ${id}:`, error);
    throw error;
  }
};
