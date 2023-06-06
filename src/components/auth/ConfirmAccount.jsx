import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import clienteAxios from "../../config/clienteAxios";
import Alerta from "../helpers/Alerta";

const ConfirmAccount = () => {
  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `/users/confirm/${id}`;
        const { data } = await clienteAxios(url);

        setAlerta({
          msg: data.msg,
          error: false,
        });
        setCuentaConfirmada(true);
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        });
      }
    };
    confirmAccount();
  }, []);

  const { msg } = alerta;

  return (
    <main className="bg-[url('assets/images/HomeBg/bg-welcome.webp')] bg-cover bg-center bg-no-repeat h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="md:w-2/3 lg:w-2/5 p-16 pb-8 bg-white rounded-lg mb-16">
          <h1 className="text-sky-600 font-black text-6xl capitalize text-center">
            <Link to="/">
              FABINCCI <br />
            </Link>
            <span className="text-slate-700">
              <Link to="/">CONFIRMACIÓN DE CUENTA</Link>
            </span>
          </h1>

          <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
            {msg && <Alerta alerta={alerta} />}

            {cuentaConfirmada && (
              <Link
                className="block text-center my-5 text-slate-500 uppercase text-sm"
                to="/login"
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
