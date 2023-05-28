import React  from "react";

import Calendar from "../helpers/Calendar";

const Reservas = (props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[url('assets/images/Fondo4.png')] bg-cover bg-center bg-no-repeat flex w-reservas-width"
    >
      <div className="grid grid-cols-2 w-reservas-width h-[84vh] relative ">
        <div className="p-5 mx-auto">
          <h1 className="font-press-start p-10 text-7xl font-bold text-white text-center text-shadow-lg shadow-gray-700">
            <span className="px-8 ">NUESTRAS TARIFAS</span>
          </h1>
          <TablonReservas />
        </div>

        <div className="p-5 w-4/5 mx-auto">
          <h1 className="font-press-start p-10 text-7xl font-bold text-white text-center text-shadow-lg shadow-gray-700">
            <span className="px-8 ">RESERVAS</span>
          </h1>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Reservas);



function TablonReservas() {
  return (
    <div className="flex flex-col p-10">
      <ul className="bg-black p-8 grid grid-cols-3 rounded-lg shadow-xl border-t border-r mx-auto">
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Corte de Pelo</h3>
            <h4 className="text-gray-500 text-xs">
              {" "}
              Incluye lavado de cabello y peinado
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> 15€</p>
          </div>
        </li>
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Afeitado</h3>
            <h4 className="text-gray-500 text-xs">Incluye Afeitado</h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> 20€</p>
          </div>
        </li>
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Completo</h3>
            <h4 className="text-gray-500 text-xs">Incluye lavado + Afeitado</h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> 25€</p>
          </div>
        </li>
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Corte de Pelo Premium</h3>
            <h4 className="text-gray-500 text-xs">
              Corte de Pelo + Tratamiento facial
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> 20€</p>
          </div>
        </li>
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Afeitado Premium</h3>
            <h4 className="text-gray-500 text-xs">
              Incluye afeitado + Tratamiento facial
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> 25€</p>
          </div>
        </li>
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Completo Premium</h3>
            <h4 className="text-gray-500 text-xs">
              Incluye corte + Afeitado + Tratamiento facial
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> 30€</p>
          </div>
        </li>
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Corte de Pelo</h3>
            <h4 className="text-gray-500 text-xs">
              {" "}
              Incluye lavado de cabello y peinado
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> X €</p>
          </div>
        </li>
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Corte de Pelo</h3>
            <h4 className="text-gray-500 text-xs">
              {" "}
              Incluye lavado de cabello y peinado
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> X €</p>
          </div>
        </li>
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Corte de Pelo</h3>
            <h4 className="text-gray-500 text-xs">
              {" "}
              Incluye lavado de cabello y peinado
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> X €</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
