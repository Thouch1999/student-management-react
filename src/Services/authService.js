import { API_BASE_URI } from "./api";

const TOKEN_KEY = "token";

/**
 * Login user with email & password
 */
export const login = async (email, password) => {
  try {
    const response = await API_BASE_URI.post(`/login`, { email, password });
    localStorage.setItem(TOKEN_KEY, response.data.access_token);
    return response.data;
  } catch (error) {
    console.error("Login API Error:", error.response?.data || error.message);
    throw error; // important to propagate error
  }
};
/**
 * Logout user
 */
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

/**
 * Get token
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

/**
 * Check if token is valid (JWT not expired)
 */
export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;
  } catch (error) {
    return false;
  }
};
