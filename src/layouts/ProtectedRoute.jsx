import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { auth } = useAuth();

  return (
    <>
      <main className="">
        <div className="">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default ProtectedRoute;
