import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/login" replace />;

  const { role } = jwtDecode(token);

  console.log(role);

  if (role !== "Admin") return <Navigate to="/" replace />;

  return children;
};

export default ProtectedRoute;
