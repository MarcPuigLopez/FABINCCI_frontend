import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clienteAxios("/users/profile", config);
        setAuth(data);
      } catch (error) {
        setAuth({});
      }

      setLoading(false);
    };
    autenticarUsuario();
  }, []);

  const logoutAuth = () => {
    setAuth({});
  };

  const modifyUser = async (user) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await clienteAxios.put("/users/profile", user, config);
      setUserData(data);
    } catch (error) {
      setUserData({});
    }
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        loading,
        logoutAuth,
        modifyUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
