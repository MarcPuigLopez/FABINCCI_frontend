import React from "react";

const TablonHorarios = ({ handleReservation }) => {
  const servicios = [
    {
      hourName: "Lunes a viernes",
      description: "10:00 am - 13:00 pm / 16:00 pm - 20:00 pm",
    },
    {
      hourName: "Sabado",
      description: "9:00 am - 15:00 pm",
    },
    {
      hourName: "Domingo",
      description: "CERRADO",
    },
  ];

  // const handleButtonClick = (hourName) => {
  //   handleReservation(hourName);
  // };

  return (
    <div
      className="flex flex-col transition-all ease-linear transition-500
                    xl:p-10 p-3 items-center font-Roboto"
    >
      <ul
        className="bg-white bg-opacity-70 xl:p-8 p-2 py-6 text-center
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
            <div
              className="flex-auto text-center
                         sm:px-0"
            >
              <h2>{servicio.hourName}</h2>
              <h3 className="text-gray-800 text-xs sm:block hidden text-center px-10">
                {servicio.description}
              </h3>
            </div>

            {/* <button
              className="bg-yellow-600 hover:bg-yellow-700 transition text-white font-bold rounded 
                          sm:py-2 py-1
                          sm:px-4 px-2
                          sm:ml-5 
                          xl:text-base text-xs"
              onClick={() => handleButtonClick(servicio.hourName)}
              alt={`Botón para hacer una reserva para: ${servicio.hourName}`}
            >
              Reservar
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TablonHorarios;
