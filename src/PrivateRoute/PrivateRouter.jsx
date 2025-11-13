// import { Navigate } from "react-router";
// import { useAuth } from "../Context/AuthProvider";

// const PrivateRouter = ({ children }) => {
//   const { user } = useAuth();

//   if (user === undefined) return <div>Loading...</div>;
//   if (!user) return <Navigate to="/login" replace />;
//   return children;
// };

// export default PrivateRouter;
import { Navigate } from "react-router";
import { useAuth } from "../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center mt-10">Loading...</div>; // wait for firebase
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

export default PrivateRoute;
