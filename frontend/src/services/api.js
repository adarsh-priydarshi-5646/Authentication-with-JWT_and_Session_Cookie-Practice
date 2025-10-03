import axios from 'axios';

// Smart API URL detection based on environment
const getApiBaseUrl = () => {
  const isProduction = window.location.hostname !== 'localhost';
  if (isProduction) {
    return 'https://authentication-with-jwt-and-session.onrender.com';
  }
  return import.meta.env.VITE_API_URL || 'http://localhost:8080';
};

const API_BASE_URL = getApiBaseUrl();

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth API calls
export const authAPI = {
  signUp: async (userData) => {
    const response = await api.post('/auth/signup', userData);
    return response.data;
  },
  
  login: async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },
  
  logout: async () => {
    const response = await api.post('/auth/logout');
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },
};

export default api;
