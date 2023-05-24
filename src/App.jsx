import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";

import { AuthProvider } from "./context/AuthProvider";
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";
import ProtectedUserRoute from "./layouts/ProtectedUserRoute";
import ProtectedAdminRoute from "./layouts/ProtectedAdminRoute";

// Autentificación de usuário
import Index from "./Index";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ResetPassword from "./components/auth/ResetPassword";
import NewPassword from "./components/auth/NewPassword";
import ConfirmAccount from "./components/auth/ConfirmAccount";
import NotFound from "./components/auxPages/NotFound";

// Páginas de usuário autenticado y administrador
import UserProfile from "./components/profile/Profile";
import AdminProfile from "./components/profile/AdminProfile";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Ruta NotFound */}
          <Route path="/*" element={<NotFound />} />

          {/* Ruta Pública Home */}
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Index />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          {/* Ruta Pública Auth */}
          <Route path="users/" element={<AuthLayout />}>
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="reset-password/:token" element={<NewPassword />} />
            <Route path="confirm/:id" element={<ConfirmAccount />} />
          </Route>

          {/* Ruta Privada Profile */}
          <Route path="profile/" element={<ProtectedUserRoute />}>
            <Route index element={<UserProfile />} />
          </Route>

          {/* Ruta Privada Admin*/}
          <Route path="admin/profile/" element={<ProtectedAdminRoute />}>
            <Route element={<AdminProfile />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
