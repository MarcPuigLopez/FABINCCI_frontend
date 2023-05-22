import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedAdminRoute = () => {
  const { auth, loading } = useAuth();

  if(loading) return 'cargando...';
  return (
  <>
    {auth._id ? <Outlet /> : <Navigate to="/login" />} 
  </>
  );
};

export default ProtectedAdminRoute;
