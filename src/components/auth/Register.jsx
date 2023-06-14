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

    if (
      [name, lastName, email, phone, password, repetirPassword].includes("")
    ) {
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
        <div className="md:w-2/3 lg:w-2/5 w-4/5 xl:p-8 p-6 bg-white rounded-lg">
          <h1 className="text-sky-600 font-black md:text-5xl text-4xl xl:mb-2 text-center">
            <Link alt="Volver a la pagina Home" to="/">
              FABINCCI <br />{" "}
            </Link>
            <span className="text-slate-700 xl:text-5xl md:text-4xl text-3xl">
              <Link alt="Volver a la pagina Home" to="/">
                REGISTRO
              </Link>
              {/* REGISTER */}
            </span>
          </h1>

          {msg && <Alert alert={alert} />}

          <form
            className="xl:my-2 bg-white shadow rounded-lg xl:p-10 md:p-5 p-3"
            onSubmit={handleSubmit}
          >
            <div className="my-1">
              <label
                className="uppercase text-gray-600 block md:text-lg text-base font-bold"
                htmlFor="name"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                placeholder="Tu nombre"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50 md:text-base text-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                alt="Campo para ingresar el nombre"
              />
            </div>

            <div className="my-4">
              <label
                className="uppercase text-gray-600 block lg:text-xl md:text-lg text-base font-bold"
                htmlFor="lastName"
              >
                Apellidos
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Tus apellidos"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50 md:text-base text-sm"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                alt="Campo para ingresar los apellidos"
              />
            </div>

            <div className="my-4">
              <label
                className="uppercase text-gray-600 block lg:text-xl md:text-lg text-base font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Correo electrónico"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50 md:text-base text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                alt="Campo para ingresar el correo electrónico"
              />
            </div>
            <div className="my-4">
              <label
                className="uppercase text-gray-600 block lg:text-xl md:text-lg text-base font-bold"
                htmlFor="phone"
              >
                Teléfono
              </label>
              <input
                id="phone"
                type="phone"
                placeholder="Teléfono de contacto"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50 md:text-base text-sm"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                alt="Campo para ingresar el teléfono"
              />
            </div>
            <div className="my-4">
              <label
                className="uppercase text-gray-600 block lg:text-xl md:text-lg text-base font-bold"
                htmlFor="password"
              >
                Constraseña
              </label>
              <input
                id="password"
                type="password"
                placeholder="Constraseña de Registro"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50 md:text-base text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                alt="Campo para ingresar la contraseña"
              />
            </div>

            <div className="my-4">
              <label
                className="uppercase text-gray-600 block lg:text-xl md:text-lg text-base font-bold"
                htmlFor="password2"
              >
                Repetir Constraseña
              </label>
              <input
                id="password2"
                type="password"
                placeholder="Repetir tu contraseña"
                className="w-full mt-1 p-2 border rounded-xl bg-gray-50 md:text-base text-sm"
                value={repetirPassword}
                onChange={(e) => setRepetirPassword(e.target.value)}
                alt="Campo para repetir la contraseña"
              />
            </div>

            <input
              type="submit"
              value="Registrarse"
              className="bg-sky-700 mb-1 w-full py-3 text-white uppercase font-bold 
                            rounded hover:cursor-pointer hover:bg-sky-800 transition-colors
                            md:text-base text-sm"
              alt="Botón para registrarse"
            />
          </form>

          <nav className="lg:flex lg:justify-center">
            <p className="block text-center my-4 text-slate-500 md:text-sm text-xs">
              ¿Eres miembro?
              {/* Are you a member? */}
              <span
                className="text-blue-500 mx-2 md:text-sm text-xs"
                alt="Botón para ir al inicio de sesión"
              >
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
