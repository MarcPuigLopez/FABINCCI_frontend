import React, { useState } from "react";

import { motion } from "framer-motion";
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

  const handleCalendarOpen = () => {
    setShowTablon(true);
    setShowCalendar(false);
  };

  return (
    <div ref={ref} className="flex w-reservas-width">
      <div className="grid w-screen lg:h-[84vh] relative ">
        {showTablon && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: showCalendar ? 1 : 0, duration: 1000 }}
            animate={{ opacity: 1 }}
            className={`transition-opacity duration-1000 p-5 mx-auto${
              showTablon ? "" : "hidden"
            }`}
          >
            <h1 className="font-press-start p-10 text-7xl font-bold text-white text-center text-shadow-lg shadow-gray-700">
              <span className="">NUESTRAS TARIFAS</span>
            </h1>
            <TablonReservas handleReservation={handleReservaClick} />
          </motion.div>
        )}
        {showCalendar && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: showTablon ? 1 : 0, duration: 1000 }}
            animate={{ opacity: 1 }}
            className=""
          >
            <div
              className={`transition-opacity duration-1000 p-5 w-2/5 mx-auto ${
                showCalendar ? "" : "hidden"
              }`}
            >
              <h1 className="font-press-start p-10 text-7xl font-bold text-white text-center text-shadow-lg shadow-gray-700">
                <span className="">RESERVAS</span>
              </h1>
              <div className="relative">
                <div className="bg-white ml-10 absolute top-3 left-0 rounded">
                  <button
                    onClick={() => {
                      setShowTablon(true);
                      setShowCalendar(false);
                    }}
                    className="flex text-black font-bold py-2 px-4"
                  >
                    <BsArrowLeftCircleFill className="my-auto text-xl mr-3" />
                    Volver
                  </button>
                </div>
              </div>

              <Calendar cutType={cutType} handleCalendarOpen={handleCalendarOpen} />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default React.forwardRef(Reservas);
