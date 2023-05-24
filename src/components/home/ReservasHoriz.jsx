import React, { useState } from "react";

const Reservas = (props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[url('assets/images/Fondo4.png')] bg-cover bg-center bg-no-repeat flex w-reservas-width"
    >
      <div className="flex items-center justify-center w-reservas-width h-[80vh] relative ">

        <div className="p-5 h-[35vh] ">
          <h1 className="text-5xl font-bold text-black text-center p-10 text-shadow-lg shadow-gray-400">
            <span className="px-8 ">NUESTRAS TARIFAS</span>
          </h1>
          <TablonReservas />
        </div>

        <div className="p-5 w-1/2 justify-center bg-gradient-to-br from-white via-gray-500 to-black rounded-3xl mx-auto">
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
  getDaysInMonth,
  startOfMonth,
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
      cells.push(
        <div
          key={i}
          className={`cursor-pointer p-2 rounded-full ${
            selectedDate?.toDateString() === date.toDateString()
              ? "bg-yellow-500 text-white"
              : "text-black"
          }`}
          onClick={() => handleDateClick(date)}
        >
          {i}
        </div>
      );
    }

    return cells;
  };

  return (
    <div className="flex flex-col p-12 rounded-lg">
      <h1 className="text-2xl text-center font-bold  bg-orange-400 p-2">
        {monthName}
      </h1>
      <div className="grid grid-cols-7 gap-2 p-2 bg-black">
        <div className="text-center text-white">Sun</div>
        <div className="text-center text-white">Mon</div>
        <div className="text-center text-white">Tue</div>
        <div className="text-center text-white">Wed</div>
        <div className="text-center text-white">Thu</div>
        <div className="text-center text-white">Fri</div>
        <div className="text-center text-white">Sat</div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center align-center bg-white">
        {[...Array(firstDayOfMonth.getDay())].map((_, i) => (
          <div key={`empty-${i}`} className="p-2 rounded-full text-black">
            -
          </div>
        ))}
        {renderCalendarCells()}
        {[...Array(7 - ((firstDayOfMonth.getDay() + daysInMonth) % 7))].map(
          (_, i) => (
            
            <div key={`empty-${i}`} className="text-center text-black">
              -
            </div>
          )
        )}
      </div>
    </div>
  );
};

function TablonReservas() {
  return (
    <ul className="bg-black p-10 grid grid-cols-3 rounded-lg shadow-xl border-t max-w-4xl w-4/5 mx-auto">
      <li className="flex items-stretch m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
        <div className="flex-auto">
          <h3>Corte de Pelo</h3>
          <h4 className="text-gray-500 text-xs">
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
  );
}
