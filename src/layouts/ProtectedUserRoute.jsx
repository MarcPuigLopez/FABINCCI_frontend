import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedUserRoute = () => {
  const { auth, loading, isAdmin, setIsAdmin } = useAuth();

  if (loading)
    return (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-200 opacity-50"></div>
        <div
          className="flexpx-8 pt-10 pb-0 w-2/5 flex flex-col items-center justify-center relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-center text-2xl">cargando </h3>
        </div>
      </div>
    );

  if (isAdmin) return <Navigate to="/admin/profile" />;
  return <>{auth._id ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedUserRoute;
