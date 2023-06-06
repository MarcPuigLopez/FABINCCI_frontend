import React, { useState } from "react";

import { BsArrowLeftCircleFill } from "react-icons/bs";

import Calendar from "../helpers/Calendar";
import TablonReservas from "../helpers/TablonReservas";

const Reservas = (props, ref) => {
  const [showTablon, setShowTablon] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);

  const [cutType, setCutType] = useState("");

  const handleReservaClick = (cutType) => {
    setCutType(cutType);

    setShowTablon(false);
    setShowCalendar(true);
  };

  return (
    <div ref={ref} className="flex w-reservas-width">
      <div className="grid w-reservas-width h-[84vh] relative ">
        {showTablon && (
          <div className="p-5 mx-auto">
            <h1 className="font-press-start p-10 text-7xl font-bold text-white text-center text-shadow-lg shadow-gray-700">
              <span className="px-8 ">NUESTRAS TARIFAS</span>
            </h1>
            <TablonReservas handleReservation={handleReservaClick} />
          </div>
        )}
        {showCalendar && (
          <div className="">
            <div className="p-5 w-2/5 mx-auto">
              <h1 className="font-press-start p-10 text-7xl font-bold text-white text-center text-shadow-lg shadow-gray-700">
                <span className="px-8 ">RESERVAS</span>
              </h1>
              <div className="relative">
                <div className="absolute top-0 left-0">
                  <button
                    onClick={() => {
                      setShowTablon(true);
                      setShowCalendar(false);
                    }}
                    className="flex text-black font-bold py-2 px-4"
                  >
                    <BsArrowLeftCircleFill className="my-auto text-xl ml-5 mr-3" />
                    Volver
                  </button>
                </div>
              </div>

              <Calendar cutType={cutType} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(Reservas);
