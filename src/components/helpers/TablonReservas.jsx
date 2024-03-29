import React from "react";

const TablonReservas = ({ handleReservation }) => {
  const servicios = [
    {
      cutName: "Corte De pelo",
      description: "Incluye Desgradado + Peinado",
      price: "15€",
    },
    {
      cutName: "Corte + Afeitado",
      description: "Incluye Degradado + Peinado + Afeitado",
      price: "25€",
    },
    {
      cutName: "Afeitado Clásico",
      description: "Incluye Afeitado ",
      price: "15€",
    },
  ];

  const handleButtonClick = (cutName) => {
    handleReservation(cutName);
  };

  return (
    <div
      className="flex flex-col transition-all ease-linear transition-500
                    xl:p-10 p-3 items-center font-Roboto"
    >
      <ul
        className="bg-white bg-opacity-70 xl:p-8 p-2 py-6
                        rounded-lg shadow-xl border-t border-r 
                        lg:grid grid
                        lg:grid-cols-1 
                        sm:mx-auto
                        w-full 
                        mb-8"
      >
        {servicios.map((servicio, index) => (
          <li
            key={index}
            className=" flex border-b-2 border-black font-black text-black
                        sm:m-3 m-1 my-2
                        sm:pl-3 pl-0
                        sm:pb-3 pb-1
                        sm:pr-3 
                        sm:text-base text-xs"
          >
            <div className="flex-auto">
              <h2>{servicio.cutName}</h2>
              <h3 className="text-gray-800 text-xs sm:block hidden ">
                {servicio.description}
              </h3>
            </div>
            <div
              className="flex-none text-black my-auto sm:pl-8 text-lg
                            sm:pr-8 pr-3"
            >
              <p className="pl-2 pr-2">{servicio.price}</p>
            </div>

            {/* <button
              className="bg-yellow-600 hover:bg-yellow-700 transition text-white font-bold rounded 
                          sm:py-2 py-1
                          sm:px-4 px-2
                          sm:ml-5 
                          xl:text-base text-xs"
              onClick={() => handleButtonClick(servicio.cutName)}
              alt={`Botón para hacer una reserva para: ${servicio.cutName}`}
            >
              Reservar
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TablonReservas;
