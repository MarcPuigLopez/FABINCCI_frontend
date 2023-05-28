import { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../helpers/Alerta";
import clienteAxios from "../../config/clienteAxios";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, apellidos, email, password, repetirPassword].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (email.length < 6) {
      setAlerta({
        msg: "Introduce un correo valido",
        error: true,
      });
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "La contraseña es muy corta, debe tener minimo 6 caracteres",
        error: true,
      });
      return;
    }

    setAlerta({});

    // Crear el usuario en la API
    try {
      const url = `/users`;
      const { data } = await clienteAxios.post(url, {
        nombre,
        apellidos,
        email,
        password,
      });

      setAlerta({
        msg: data.msg,
        error: false,
      });

      setNombre("");
      setApellidos("");
      setEmail("");
      setPassword("");
      setRepetirPassword("");
    } catch (error) {
      setAlerta({
        msg: error.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <main className="bg-[url('assets/images/FONDO1.jpg')] bg-cover bg-center h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="md:w-2/3 lg:w-2/5 p-14 pb-2 bg-white rounded-lg">
          <h1 className="text-sky-600 font-black text-6xl text-center">
            <Link to="/">FABINCCI </Link>
            <span className="text-slate-700">
              <Link to="/">REGISTRO</Link>
              {/* REGISTER */}
            </span>
          </h1>

          {msg && <Alerta alerta={alerta} />}

          <form
            className="my-7 mt-5 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
          >
            <div className="my-1">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                className="w-full mt-2 p-3 border rounded-xl bg-gray-50"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="my-4">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="apellidos"
              >
                Apellidos
              </label>
              <input
                id="apellidos"
                type="text"
                placeholder="Tus apellidos"
                className="w-full mt-2 p-3 border rounded-xl bg-gray-50"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
              />
            </div>

            <div className="my-4">
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
                className="w-full mt-2 p-3 border rounded-xl bg-gray-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="password"
              >
                Constraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Constraseña de Registro"
                className="w-full mt-2 p-3 border rounded-xl bg-gray-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="my-4">
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="password2"
              >
                Repetir Constraseña
              </label>
              <input
                id="password2"
                type="password"
                placeholder="Repetir tu contraseña"
                className="w-full mt-2 p-3 border rounded-xl bg-gray-50"
                value={repetirPassword}
                onChange={(e) => setRepetirPassword(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Registrarse"
              className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
          </form>

          <nav className="lg:flex lg:justify-center">
            <a className="block text-center my-4 text-slate-500 text-sm">
              ¿Eres miembro?
              {/* Are you a member? */}
              <span className="text-blue-500 mx-2">
                <Link to="/login">Iniciar Sesión</Link>
              </span>
            </a>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Register;
