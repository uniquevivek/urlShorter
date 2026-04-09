import axios from "axios";

// Backend base URL (from .env)
const API = import.meta.env.VITE_API_URL;

// Function to call backend API
export const shortenUrl = async (url) => {
  try {
    const response = await axios.post(`${API}/shorten`, {
      originalUrl: url,
    });

    return response.data;

  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};