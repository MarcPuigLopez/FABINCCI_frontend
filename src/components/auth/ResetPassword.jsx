import { useState } from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../config/clienteAxios";
import Alerta from "../helpers/Alerta";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || email.length < 6) {
      setAlerta({
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

      setAlerta({
        msg: data.msg,
        error: false,
      });
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <main className="bg-[url('assets/images/HomeBg/bg-saberHacer.webp')] bg-cover bg-center bg-no-repeat h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="md:w-2/3 lg:w-2/5 p-16 pb-8 bg-white rounded-lg">
          <h1 className="text-sky-600 font-black text-6xl capitalize text-center">
            <Link to="/">FABINCCI <br/></Link>
            <span className="text-slate-700 text-5xl">
              <Link to="/">NUEVA CONTRASEÑA</Link>
            </span>
          </h1>

          {msg && <Alerta alerta={alerta} />}

          <form
            className="my-10 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
          >
            <div className="my-5">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Correo electrónico"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Enviar instrucciones"
              className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
          </form>

          <nav className="lg:flex lg:justify-between flex mx-10">
            <a className="block text-center my-5 text-slate-500 text-sm">
              ¿Eres miembro?
              <span className="text-blue-500 mx-2">
                <Link to="/login">Iniciar Sesión</Link>
              </span>
            </a>

            <a className="block text-center my-5 text-slate-500 text-sm">
              ¿Aún no te has registrado?
              <span className="text-blue-500 mx-2">
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
