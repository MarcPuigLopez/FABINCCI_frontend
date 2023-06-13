import { useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../helpers/Alert";
import clienteAxios from "../../config/clienteAxios";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([name, lastName, email, phone, password, repetirPassword].includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (email.length < 6) {
      setAlert({
        msg: "Introduce un correo valido",
        error: true,
      });
      return;
    }

    if (password !== repetirPassword) {
      setAlert({
        msg: "Las contraseñas no son iguales",
        error: true,
      });
      return;
    }

    if (password.length < 6) {
      setAlert({
        msg: "La contraseña es muy corta, debe tener minimo 6 caracteres",
        error: true,
      });
      return;
    }

    if (phone.length < 9) {
      setAlert({
        msg: "El telefono debe tener minimo 9 caracteres",
        error: true,
      });
      return;
    }

    setAlert({});

    // Crear el user en la API
    try {
      const url = `/users`;
      const { data } = await clienteAxios.post(url, {
        name,
        lastName,
        email,
        phone,
        password,
      });

      setAlert({
        msg: data.msg,
        error: false,
      });

      setName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setRepetirPassword("");
    } catch (error) {
      setAlert({
        msg: error.msg,
        error: true,
      });
    }
  };

  const { msg } = alert;

  return (
    <main className="bg-[url('assets/images/HomeBg/bg-saberHacer.webp')] bg-cover bg-center h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="md:w-2/3 lg:w-2/5 p-14 pb-2 bg-white rounded-lg">
          <h1 className="text-sky-600 font-black text-5xl text-center">
            <Link to="/">FABINCCI </Link>
            <span className="text-slate-700">
              <Link to="/">REGISTRO</Link>
              {/* REGISTER */}
            </span>
          </h1>

          {msg && <Alert alert={alert} />}

          <form
            className="my-2 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
          >
            <div className="my-1">
              <label
                className="uppercase text-gray-600 block text-lg font-bold"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="my-4">
              <label
                className="uppercase text-gray-600 block text-lg font-bold"
                htmlFor="lastName"
              >
                Apellidos
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Tus apellidos"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="my-4">
              <label
                className="uppercase text-gray-600 block text-lg font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Correo electrónico"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label
                className="uppercase text-gray-600 block text-lg font-bold"
                htmlFor="phone"
              >
                Teléfono
              </label>
              <input
                id="phone"
                type="phone"
                placeholder="Teléfono de contacto"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label
                className="uppercase text-gray-600 block text-lg font-bold"
                htmlFor="password"
              >
                Constraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Constraseña de Registro"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="my-4">
              <label
                className="uppercase text-gray-600 block text-lg font-bold"
                htmlFor="password2"
              >
                Repetir Constraseña
              </label>
              <input
                id="password2"
                type="password"
                placeholder="Repetir tu contraseña"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50"
                value={repetirPassword}
                onChange={(e) => setRepetirPassword(e.target.value)}
              />
            </div>

            <input
              type="submit"
              value="Registrarse"
              className="bg-sky-700 mb-1 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
          </form>

          <nav className="lg:flex lg:justify-center">
            <p className="block text-center my-4 text-slate-500 text-sm">
              ¿Eres miembro?
              {/* Are you a member? */}
              <span className="text-blue-500 mx-2">
                <Link to="/login">Iniciar Sesión</Link>
              </span>
            </p>
          </nav>
        </div>
      </div>
    </main>
  );
};

export default Register;
