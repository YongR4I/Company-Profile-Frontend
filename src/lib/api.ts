import axios from 'axios';

// When backend is ready, set NEXT_PUBLIC_API_URL in .env.local
// E.g., NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api
// For now, it defaults to the root of the frontend server to fetch from the /public folder.
const baseURL = process.env.NEXT_PUBLIC_API_URL || '';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add request/response interceptors for logging or authorization tokens later
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);
