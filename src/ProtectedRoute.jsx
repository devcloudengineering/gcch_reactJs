import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  console.log("Esta autenticado: ", isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// Validación de tipos con PropTypes
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
