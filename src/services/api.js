import axios from 'axios';

const api = axios.create({
  baseURL: 'http://45.32.1.209:3339/',
  // baseURL: 'http://10.0.0.100:3333/',
});

export default api;