import React, { useState } from "react";

import { BsArrowLeftCircleFill } from "react-icons/bs";

import Calendar from "../helpers/Calendar";
import TablonReservas from "../helpers/TablonReservas";

const BookingTab = (props, ref) => {
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
    <div className="p-4 scroll-mt-32" ref={ref}>
      <h2 className="mb-4 font-Roboto text-2xl font-bold text-center">
        Reserva tu cita
      </h2>

      {showTablon && (
        <div className="p-5 mx-auto">
          <TablonReservas handleReservation={handleReservaClick} />
        </div>
      )}
      {showCalendar && (
        <div className="">
          <div className="p-5 w-2/5 mx-auto">
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

            <Calendar
              handleCalendarOpen={handleCalendarOpen}
              cutType={cutType}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default React.forwardRef(BookingTab);
