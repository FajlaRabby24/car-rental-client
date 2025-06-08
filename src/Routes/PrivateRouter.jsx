import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const locaiton = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to={"/login"} state={locaiton.pathname} />;
  }

  return children;
};

export default PrivateRoute;
