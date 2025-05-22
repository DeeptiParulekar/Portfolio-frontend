import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/contactForm';

const createContactForm = (contactData) => {
  return axios.post(`${BASE_URL}/createContactForm`, contactData);
};

const updateContactForm = (contactId, contactData) => {
  return axios.put(`${BASE_URL}/updateContactForm`, contactData, {
    params: { contactId },
  });
};

const getAllContactForms = () => {
  return axios.get(`${BASE_URL}/getAllContactForm`);
};

const getContactFormById = (contactId) => {
  return axios.get(`${BASE_URL}/getByIdContactForm`, {
    params: { contactId },
  });
};

const deleteContactForm = (contactId) => {
  return axios.delete(`${BASE_URL}/deleteContactForm`, {
    params: { contactId },
  });
};

// Group all methods into one object
const ContactFormService = {
  createContactForm,
  updateContactForm,
  getAllContactForms,
  getContactFormById,
  deleteContactForm,
};

export default ContactFormService;
