import axios from 'axios';

// Create an Axios instance with a base URL and withCredentials option
const api = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

// Login function
export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const fetchFromPatient = async (endpoint, data = {}, method = 'GET') => {
  try {
      let response;
      if (method === 'POST') {
          response = await api.post(`/patient${endpoint}`, data);
      } else {
          const queryString = new URLSearchParams(data).toString();
          response = await api.get(`/patient${endpoint}?${queryString}`);
      }

      // Axios automatically parses JSON responses, so just return the parsed data
      if (response.headers['content-type']?.includes('application/json')) {
          return response.data;
      } else {
        console.log("Non-js response :" + response.data);
        
          throw new Error(`Received non-JSON response: ${response.statusText}`);
      }
  } catch (error) {
      console.error('Fetch patient data error:', error.response ? error.response.data : error.message);
      throw error;
  }
};
export const fetchFromDoctor = async (endpoint, data = {}, method = 'GET') => {
  try {
      let response;
      if (method === 'POST') {
          response = await api.post(`/patient${endpoint}`, data);
          console.log(response)
      } else {
          response = await api.get(`/patient${endpoint}`);
      }

      // return response.data;

      if (response.headers['content-type']?.includes('application/json')) {
          return response.data;
      } else {
          const responseText = await response.json();
          throw new Error(`Received non-JSON response: ${responseText}`);
      }
  } catch (error) {
      console.error('Fetch patient data error:', error.response ? error.response.data : error.message);
      throw error;
  }
};

export default api;
