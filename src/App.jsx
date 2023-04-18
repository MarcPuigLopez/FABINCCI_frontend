import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./layouts/ProtectedRoute";

import Index from "./Index";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ResetPassword from "./auth/ResetPassword";
import NewPassword from "./auth/NewPassword";
import ConfirmAccount from "./auth/ConfirmAccount";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Index />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="users/reset-password" element={<ResetPassword />} />
            <Route
              path="users/reset-password/:token"
              element={<NewPassword />}
            />
            <Route path="users/confirm/:id" element={<ConfirmAccount />} />
            <Route path="users/profile" element={<Index />} />
          </Route>

          <Route path="/admin" element={<ProtectedRoute />}>
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
