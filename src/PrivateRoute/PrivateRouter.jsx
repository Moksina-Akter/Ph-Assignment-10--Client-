import { Navigate } from "react-router";
import { useAuth } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

export default PrivateRoute;
