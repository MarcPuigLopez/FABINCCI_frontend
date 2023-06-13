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
    <div ref={ref} className="flex lg:w-reservas-width w-screen font-Roboto">
      <div className="grid lg:h-[84vh] relative lg:w-reservas-width w-screen">
        {showTablon && (
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
            className={`transition-opacity duration-1000 p-5 mx-auto${
              showTablon ? "" : "hidden"
            }`}
          >
            <h1 className=" font-press-start pt-6 
                            font-bold text-white text-center text-shadow-lg shadow-gray-700
                            lg:text-7xl text-5xl">
              <span className="">NUESTRAS TARIFAS</span>
            </h1>
            <TablonReservas handleReservation={handleReservaClick} />
          </motion.div>
        )}
        {showCalendar && (
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
            className=""
          >
            <div
              className={`transition-opacity duration-1000 p-5 mx-auto 
                          lg:w-2/5 md:w-3/5 sm:w-4/5 w-full  ${
                showCalendar ? "" : "hidden"
              }`}
            >
              <h1 className=" font-press-start p-10
                              font-bold text-white text-center text-shadow-lg shadow-gray-700
                              lg:text-7xl text-5xl">
                <span className="">RESERVAS</span>
              </h1>
              <div className="relative">
                <div className="bg-white absolute top-3 left-0 rounded">
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
