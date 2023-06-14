import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../../config/clienteAxios";
import Alert from "../helpers/Alert";

const ConfirmAccount = () => {
  const [alert, setAlert] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `/users/confirm/${id}`;
        const { data } = await clienteAxios(url);

        setAlert({
          msg: data.msg,
          error: false,
        });
        setCuentaConfirmada(true);
      } catch (error) {
        setAlert({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    confirmAccount();
  }, []);

  const { msg } = alert;

  return (
    <main className="bg-[url('assets/images/HomeBg/bg-home.webp')] bg-cover bg-center bg-no-repeat h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="md:w-2/3 lg:w-2/5 w-4/5 xl:p-16 p-10 bg-white rounded-lg">
          <h1 className="text-sky-600 font-black xl:text-6xl md:text-5xl text-4xl xl:mb-5 text-center">
            <Link alt="Volver a la pagina Home" to="/">
              FABINCCI <br />
            </Link>
            <span className="text-slate-700 xl:text-5xl md:text-4xl text-3xl">
              <Link alt="Volver a la pagina Home" to="/">CONFIRMACIÓN DE CUENTA</Link>
            </span>
          </h1>

          <div className="xl:mt-20 md:mt-10 mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            {msg && <Alert alert={alert} />}

            {cuentaConfirmada && (
              <Link
                className="block text-center my-5 text-slate-500 uppercase text-sm"
                to="/login"
                alt="Ir a Iniciar Sesión"
              >
                Inicia Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ConfirmAccount;
