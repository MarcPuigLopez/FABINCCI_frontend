import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import clienteAxios from "../../config/clienteAxios";
import Alert from "../helpers/Alert";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [tokenValido, setTokenValido] = useState(false);
  const [alert, setAlert] = useState({});
  const [passwordModificado, setPasswordModificado] = useState(false);

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/users/reset-password/${token}`);
        setTokenValido(true);
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    comprobarToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setAlert({
        msg: "La contraseña debe ser minimo de 6 caracteres",
        error: true,
      });
      return;
    }

    try {
      const url = `/users/reset-password/${token}`;
      const { data } = await clienteAxios.post(url, { password });

      setAlert({
        msg: data.msg,
        error: false,
      });
      setPasswordModificado(true);
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
          <h1 className="text-sky-600 font-black xl:text-6xl md:text-5xl text-3xl xl:mb-5 mb-5 text-center">
            <Link alt="Volver a la pagina Home" to="/">
              FABINCCI <br />
            </Link>
            <span className="text-slate-700 xl:text-5xl md:text-4xl text-2xl">
              <Link alt="Volver a la pagina Home" to="/">
                RECUPERACIÓN DE CONTRASEÑA
              </Link>
            </span>
          </h1>

          {msg && <Alert alert={alert} />}

          {tokenValido && (
            <form
              className="my-10 bg-white shadow rounded-lg p-10"
              onSubmit={handleSubmit}
            >
              <div className="my-5">
                <label
                  className="uppercase text-gray-600 block md:text-xl text-base font-bold"
                  htmlFor="password"
                >
                  Nueva contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Escribe tu nueva contraseña"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50 md:text-lg text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  alt="Campo para escribir nueva contraseña"
                />
              </div>
              <input
                type="submit"
                value="Guardar nueva contraseña"
                className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
                alt="Botón para guardar nueva contraseña"
              />
            </form>
          )}

          {passwordModificado && (
            <Link
              className="block text-center my-5 text-slate-500 uppercase text-sm"
              to="/login"
              alt="Enlace para iniciar sesión"
            >
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};

export default NewPassword;
