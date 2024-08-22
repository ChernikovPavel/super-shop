import axios from 'axios';
let accessToken = '';

const axiosInstance = axios.create();

export function setAccessToken(newToken) {
  accessToken = newToken;
}

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = accessToken;
  }
  return config;
});

export default axiosInstance;
