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
    <div className="flex flex-col transition-all ease-linear transition-500
                    xl:p-10 p-3 items-center">
      <ul className="bg-white bg-opacity-70 p-8 
                        rounded-lg shadow-xl border-t border-r 
                        xl:grid grid
                        xl:grid-cols-2 
                        sm:mx-auto
                        sm:w-4/5 w-full 
                        mb-8">
        {servicios.map((servicio, index) => (
          <li
            key={index}
            className=" flex  border-b-2 border-black font-black text-black font-serif
                        sm:m-3 m-1
                        sm:pl-3 pl-0
                        sm:pb-3 pb-1
                        sm:pr-3 
                        sm:text-base text-xs"
          >
            <div className="flex-auto">
              <h3>{servicio.cutName}</h3>
              <h4 className="text-gray-800 text-xs sm:block hidden ">{servicio.description}</h4>
            </div>
            <div className="flex-none text-black my-auto sm:pl-8 
                            sm:pr-8 pr-3">
              <p className="">{servicio.price}</p>
            </div>

            <button
              className="bg-yellow-600 hover:bg-yellow-700 transition text-white font-bold rounded 
                          sm:py-2 py-1
                          sm:px-4 px-2
                          sm:ml-5 
                          xl:text-base text-xs"
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
