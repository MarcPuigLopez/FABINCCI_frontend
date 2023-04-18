import React, { useState } from "react";

const Reservas = (props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[url('assets/Fondo4.png')] bg-cover bg-center bg-no-repeat flex w-reservas-width"
    >
      <div className="grid grid-cols-2 w-reservas-width h-[80vh] relative ">
        <div className="p-5 mx-auto">
          <h1 className="text-5xl font-bold text-black text-center p-10 text-shadow-lg shadow-gray-400">
            <span className="px-8 ">NUESTRAS TARIFAS</span>
          </h1>
          <TablonReservas />
        </div>

        <div className="p-5 w-4/5 mx-auto">
          <h1 className="text-5xl font-bold text-black text-center p-10 text-shadow-lg shadow-gray-400">
            <span className="px-8 ">RESERVAS</span>
          </h1>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Reservas);

import {
  format,
  startOfMonth,
  getDaysInMonth,
  addMonths,
  subMonths,
} from "date-fns";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfMonth = startOfMonth(currentMonth);
  const monthName = format(firstDayOfMonth, "MMMM yyyy");

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const renderCalendarCells = () => {
    const cells = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      );
      const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
      const isSunday = date.getDay() === 6;
      const cell = (
        <div
          key={i}
          className={`cursor-pointer p-2 ${
            selectedDate?.toDateString() === date.toDateString()
              ? "bg-yellow-500 text-white"
              : "text-black"
          } ${!isCurrentMonth && "bg-gray-300"} ${
            isSunday && "cursor-not-allowed bg-gray-200"
          }`}
          onClick={() => handleDateClick(date)}
        >
          {isCurrentMonth && i}
        </div>
      );
      cells.push(cell);
    }

    return cells;
  };

  return (
    <div className="flex flex-col p-10">
      <div className="flex w-full justify-center text-lg text-center font-bold  bg-gray-400 p-2 rounded-t-lg">
        <button className="mr-4" onClick={handlePrevMonth}>
          Prev
        </button>
        <h1 className="text-xl">{monthName}</h1>
        <button className="ml-4" onClick={handleNextMonth}>
          Next
        </button>
      </div>

      {/* <div className="flex text-center bg-gradient-to-b from-gray-400 to-black p-3"></div> */}

      <div className="grid grid-cols-7 p-2 pt-1 bg-black">
        <div className="text-center text-white">Sun</div>
        <div className="text-center text-white">Mon</div>
        <div className="text-center text-white">Tue</div>
        <div className="text-center text-white">Wed</div>
        <div className="text-center text-white">Thu</div>
        <div className="text-center text-white">Fri</div>
        <div className="text-center text-white">Sat</div>
      </div>
      <ul className="grid grid-cols-7 text-center align-center bg-white">
        {[...Array(firstDayOfMonth.getDay())].map((_, i) => (
          <li
            key={`empty-${i}`}
            className="pointer-events-none p-2 text-black bg-gray-200"
          >
            -
          </li>
        ))}
        {renderCalendarCells()}
        {[...Array(7 - ((firstDayOfMonth.getDay() + daysInMonth) % 7))].map(
          (_, i) => (
            <li
              key={`empty-${i}`}
              className="pointer-events-none text-center text-black bg-gray-200 hover:opacity-75 transition duration-300 ease-in-out "
            >
              -
            </li>
          )
        )}
      </ul>
    </div>
  );
};

function TablonReservas() {
  return (
    <div className="flex flex-col p-10">
      <ul className="bg-black p-8 grid grid-cols-3 rounded-lg shadow-xl border-t border-r mx-auto">
        <li className="flex items-stretch m-3 pb-3 pr-3 border-b-2 text-sm text-white font-serif">
          <div className="flex-auto">
            <h3>Corte de Pelo</h3>
            <h4 className="mt-2 text-gray-500 text-xs">
              Incluye lavado de cabello y peinado
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <a className="">20€</a>
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
            <p className=""> 20€</p>
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
            <p className=""> 20€</p>
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
            <p className=""> 20€</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
