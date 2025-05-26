// src/services/hireMeFormService.js

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/hireme/submitHireMe'; // Change port if needed

export const submitHireMeForm = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error;
  }
};
