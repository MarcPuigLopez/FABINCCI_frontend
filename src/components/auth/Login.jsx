import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../helpers/Alert";
import clienteAxios from "../../config/clienteAxios";
import useAuth from "../../hooks/useAuth";

import { MDBCheckbox } from "mdb-react-ui-kit";

const Login = (res) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [alert, setAlert] = useState({});
  const { setAuth, isAdmin, setIsAdmin } = useAuth();
  const navigate = useNavigate();

  // si esta logeado lo redirecciona a profile
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  }, []);

  function handleRememberMe() {
    setRememberMe((prevRememberMe) => !prevRememberMe);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      const url = `/users/login`;
      const { data } = await clienteAxios.post(url, {
        email,
        password,
        rememberMe,
      });
      setAlert({});
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/login");
      navigate(0);
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;

  return (
    <main className="bg-[url('assets/images/HomeBg/bg-saberHacer.webp')] bg-cover bg-center h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="md:w-2/3 lg:w-2/5 w-4/5 xl:p-16 p-10 bg-white rounded-lg">
          <h1 className="text-sky-600 font-black xl:text-6xl md:text-5xl text-4xl xl:mb-5 text-center">
            <Link alt="Volver a la pagina Home" to="/">
              FABINCCI <br />
            </Link>
            <span className="text-slate-700 xl:text-5xl md:text-4xl text-3xl">
              <Link alt="Volver a la pagina Home" to="/">
                INICIAR SESIÓN
              </Link>
              {/* Login */}
            </span>
          </h1>

          {msg && <Alert alert={alert} />}

          <form
            className="xl:my-10 bg-white shadow rounded-lg xl:p-10 md:p-5 p-3"
            onSubmit={handleSubmit}
          >
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block md:text-xl text-base font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Correo electrónico"
                // Email
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50 md:text-lg text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                alt="Campo para ingresar correo electrónico"
              />
            </div>
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block md:text-xl text-base font-bold"
                htmlFor="password"
              >
                Contraseña
                {/* Password */}
              </label>
              <input
                id="password"
                type="password"
                placeholder="Contraseña"
                // Password
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50 md:text-lg text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                alt="Campo para ingresar contraseña"
              />
            </div>

            <div
              className=" md:flex 
                          md:justify-between
                          md:text-justify text-center 
                          md:m-8 m-6 
                          md:text-sm text-xs"
            >
              <MDBCheckbox
                name="flexCheck"
                value={rememberMe}
                onChange={handleRememberMe}
                id="flexCheckDefault"
                label=" Recuerdame"
                className="md:mb-0 mb-4"
                alt="Botón para recordar usuario"
              />

              <Link
                className="text-blue-600 
                            md:text-sm text-xs"
                to="/users/reset-password"
                alt="Botón para recuperar contraseña"
              >
                ¿Has olvidado tu contraseña?
                {/* Forgot password? */}
              </Link>
            </div>

            <input
              type="submit"
              value="Iniciar sesión"
              // Login
              className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
              alt="Botón para iniciar sesion"
            />
          </form>

          <nav className="justify-center flex">
            <div className="block text-center my-5 text-slate-500 md:text-sm text-xs">
              ¿Aún no te has registrado?
              {/* Not a member? */}
              <span className="text-blue-500 mx-2">
                <Link alt="Botón de registro" to="/register">
                  Registrarse
                </Link>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Login;
