import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect } from "react";

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
import PrivacyPolicy from "./components/auxPages/PrivacyPolicy";

// Import de contexts
import { AuthProvider } from "./context/AuthProvider";
import { ReservationsProvider } from "./context/ReservationsProvider";

// Páginas de usuário autenticado y administrador
import UserProfile from "./components/profile/UserProfile";
import AdminProfile from "./components/admin/AdminProfile";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ReservationsProvider>
          <Routes>
            {/* Ruta NotFound */}
            <Route path="/*" element={<NotFound />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

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
              <Route index element={<AdminProfile />} />
            </Route>
          </Routes>
        </ReservationsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
