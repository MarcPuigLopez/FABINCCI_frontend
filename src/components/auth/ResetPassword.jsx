import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../config/clienteAxios";
import Alert from "../helpers/Alert";

import { useMediaQuery } from "react-responsive";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  const isPhoneOrSmaller = useMediaQuery({ query: "(max-width: 700px)" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || email.length < 6) {
      setAlert({
        msg: "Introduce un email valido",
        error: true,
      });
      return;
    }

    try {
      const url = `/users/reset-password`;
      const { data } = await clienteAxios.post(url, {
        email,
      });

      setAlert({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;

  return (
    <main className="bg-[url('assets/images/HomeBg/bg-saberHacer.webp')] bg-cover bg-center bg-no-repeat h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="md:w-2/3 lg:w-2/5 w-4/5 xl:p-16 p-10 bg-white rounded-lg">
          <h1 className="text-sky-600 font-black xl:text-6xl md:text-5xl text-4xl xl:mb-5 text-center">
            <Link to="/">
              FABINCCI <br />
            </Link>
            <span className="text-slate-700 xl:text-5xl md:text-4xl text-3xl">
              <Link to="/">NUEVA CONTRASEÑA</Link>
            </span>
          </h1>

          {msg && <Alert alert={alert} />}

          <form
            className="xl:my-10 my-3 bg-white shadow rounded-lg p-10"
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
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50  md:text-lg text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Enviar instrucciones"
              className="bg-sky-700 mb-5 w-full md:text-sm text-xs py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
          </form>

          <nav
            className="  sm:justify-between justify-center flex sm:mx-10 
                          sm:gap-0 gap-10"
          >
            <a className=" items-center sm:block grid text-center sm:my-5 text-slate-500 text-xs">
              ¿Eres miembro?
              <span className="text-blue-500 sm:mx-2 md:mt-0 mt-1">
                <Link to="/login">Iniciar Sesión</Link>
              </span>
            </a>

            <a className="items-center sm:block grid text-center sm:my-5 text-slate-500 text-xs">
              {!isPhoneOrSmaller
                ? "¿Aún no te has registrado?"
                : "¿Aún no lo eres?"}

              <span className="text-blue-500 sm:mx-2">
                <Link to="/register">Registrarse</Link>
              </span>
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default ResetPassword;
