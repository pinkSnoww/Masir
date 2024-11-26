import axios from 'axios';

// Define base URL for API endpoints
const API_ENDPOINTS = {
  categories: '/api/categories',
  categoryById: (id) => `/api/categories/${id}`,
  podcasts: '/api/podcasts/'
};

// Create axios instance with increased timeout
const apiClient = axios.create({
  baseURL: '',
  timeout: 30000,  // Increased to 30 seconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
});

const getCategories = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.categories);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

const getCategory = async (id) => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.categoryById(id));
    return response.data;
  } catch (error) {
    console.error('Error fetching category:', error);
    throw error;
  }
};

const updateCategory = async (id, data) => {
  try {
    const response = await apiClient.put(API_ENDPOINTS.categoryById(id), data);
    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

const getPodcasts = async () => {
  try {
    const response = await apiClient.get(API_ENDPOINTS.podcasts, {
      validateStatus: (status) => {
        // Allow 302 status to be handled
        return status >= 200 && status < 400; 
      }
    });

    // Log the response headers to check for redirects
    console.log('Response Headers:', response.headers);

    return response.data;
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timed out. Please try again.');
    }
    console.error('Error fetching podcasts:', error);
    throw error;
  }
};

export { getCategories, getCategory, updateCategory, getPodcasts };
