import React from "react";

const TablonReservas = ({ handleReservation }) => {
  const servicios = [
    {
      cutName: "Corte",
      description: "Incluye Desgradado + Peinado",
      price: "20€",
    },
    {
      cutName: "Corte Niños",
      description: "Corte para niños menores de 12 años",
      price: "15€",
    },
    {
      cutName: "Corte + Afeitado",
      description: "Incluye Degradado + Peinado + Afeitado",
      price: "25€",
    },
    {
      cutName: "Corte + Color",
      description: "Incluye Corte + Coloración + Peinado",
      price: "90€",
    },
    {
      cutName: "Afeitado Clásico",
      description: "Incluye Afeitado ",
      price: "15€",
    },
    {
      cutName: "Cejas",
      description: "Incluye Depilación de Cejas",
      price: "5€",
    },
  ];

  const handleButtonClick = (cutName) => {
    handleReservation(cutName);
  };

  return (
    <div className="flex flex-col p-10 transition-all ease-linear transition-500">
      <ul className="bg-white bg-opacity-50 p-8 grid xl:grid-cols-2 rounded-lg shadow-xl border-t border-r mx-auto">
        {servicios.map((servicio, index) => (
          <li
            key={index}
            className="flex m-3 pb-3 pr-3 border-b-2 border-black font-black text-black font-serif"
          >
            <div className="flex-auto">
              <h3>{servicio.cutName}</h3>
              <h4 className="text-gray-800 text-xs 2xl:block ">{servicio.description}</h4>
            </div>
            <div className="flex-none text-black my-auto pl-8 pr-8">
              <p className="">{servicio.price}</p>
            </div>
            <button
              className="bg-yellow-600 hover:bg-yellow-700 transition text-white font-bold py-2 px-4 rounded ml-5"
              onClick={() => handleButtonClick(servicio.cutName)}
            >
              Reservar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TablonReservas;
