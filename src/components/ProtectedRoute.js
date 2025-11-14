import { Navigate } from "react-router-dom";

const isTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp * 1000; // convert to ms
    return Date.now() < exp;
  } catch (error) {
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
   return isTokenValid() ? children : <Navigate to="/login" replace />;;
};

export default ProtectedRoute;
