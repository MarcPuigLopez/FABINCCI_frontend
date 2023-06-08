import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../config/clienteAxios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [userData, setUserData] = useState({});
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

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

        if (data.email === import.meta.env.VITE_ADMIN_EMAIL) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }

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

  const getUser = async () => {
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
      setUserData(data);
    } catch (error) {
      setUserData({});
    }

    setLoading(false);
  };

  const getUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    if (isAdmin) {
      try {
        const { data } = await clienteAxios(`/users/all`, config);
        setUsersData(data);
      } catch (error) {
        setUsersData({});
      }
    }
    setLoading(false);
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
      setUserData({
        nombre: data.nombre,
        apellidos: data.apellidos,
        email: data.email,
        telefono: data.telefono,
        password: "*********",
      });
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
        getUser,
        userData,
        setUserData,
        isAdmin,
        getUsers,
        usersData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
