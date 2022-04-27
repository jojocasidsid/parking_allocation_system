import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const REQUEST_TIMEOUT = 30000;

const api = axios.create({
  baseURL,
  timeout: REQUEST_TIMEOUT
});

api.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers = {
    Accept: 'application/json'
  };

  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorDetails = {
      status: error.response?.data.errors.status,
      message: error.response?.data.errors.title,
      error: {
        data: error.response?.data.errors,
        message: error.response?.data.message,
        status: error.response?.status
      }
    };

    return Promise.reject(errorDetails);
  }
);

export default api;
