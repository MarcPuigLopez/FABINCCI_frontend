import React, { useState } from "react";

import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";

const Reservas = (props, ref) => {
  return (
    <div
      ref={ref}
      className="bg-[url('assets/images/Fondo4.png')] bg-cover bg-center bg-no-repeat flex w-reservas-width"
    >
      <div className="grid grid-cols-2 w-reservas-width h-[84vh] relative ">
        <div className="p-5 mx-auto">
          <h1 className="font-press-start p-10 text-7xl font-bold text-white text-center text-shadow-lg shadow-gray-700">
            <span className="px-8 ">NUESTRAS TARIFAS</span>
          </h1>
          <TablonReservas />
        </div>

        <div className="p-5 w-4/5 mx-auto">
          <h1 className="font-press-start p-10 text-7xl font-bold text-white text-center text-shadow-lg shadow-gray-700">
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
  const Month = new Date();

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
          className={`p-5 ${
            selectedDate?.toDateString() === date.toDateString()
              ? "bg-yellow-500 text-white"
              : "text-black"
          } 
          ${isSunday && "cursor-not-allowed pointer-events-none bg-gray-300"} 
          ${
            !isSunday &&
            "cursor-pointer bg-white hover:bg-yellow-500 hover:transition hover:duration-300 hover:ease-in-out"
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
    <div className="flex flex-col p-10 ">
      <div className="flex w-full justify-between text-lg text-center font-bold p-2 rounded-t-lg bg-white">
        <button className="ml-4" onClick={handlePrevMonth}>
          {currentMonth.getMonth() === Month.getMonth() ? (
            ""
          ) : (
            <RiArrowDropLeftLine />
          )}
        </button>
        <h1 className="text-xl">{monthName}</h1>
        <button className="mr-4" onClick={handleNextMonth}>
          {currentMonth.getMonth() === Month.getMonth() + 6 ? (
            ""
          ) : (
            <RiArrowDropRightLine />
          )}
        </button>
      </div>

      {/* <div className="flex text-center bg-gradient-to-b from-gray-400 to-black p-3"></div> */}

      <div className="grid grid-cols-7 p-5 pt-1 bg-white text-black text-center font-bold uppercase">
        <div className="">Mon</div>
        <div className="">Tue</div>
        <div className="">Wed</div>
        <div className="">Thu</div>
        <div className="">Fri</div>
        <div className="">Sat</div>
        <div className="">Sun</div>
      </div>
      <ul className="grid grid-cols-7 text-center align-center bg-white">
        {[...Array(firstDayOfMonth.getDay())].map((_, i) => (
          <li
            key={`empty-${i}`}
            className="pointer-events-none justify-center  text-black "
          ></li>
        ))}
        {renderCalendarCells()}
        {[...Array(7 - ((firstDayOfMonth.getDay() + daysInMonth) % 7))].map(
          (_, i) => (
            <li
              key={`empty-${i}`}
              className="pointer-events-none text-center my-auto text-black  hover:opacity-75 transition duration-300 ease-in-out "
            ></li>
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
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Corte de Pelo</h3>
            <h4 className="text-gray-500 text-xs">
              {" "}
              Incluye lavado de cabello y peinado
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> 15€</p>
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
            <p className=""> 25€</p>
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
            <p className=""> 25€</p>
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
            <p className=""> 30€</p>
          </div>
        </li>
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Corte de Pelo</h3>
            <h4 className="text-gray-500 text-xs">
              {" "}
              Incluye lavado de cabello y peinado
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> X €</p>
          </div>
        </li>
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Corte de Pelo</h3>
            <h4 className="text-gray-500 text-xs">
              {" "}
              Incluye lavado de cabello y peinado
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> X €</p>
          </div>
        </li>
        <li className="flex m-3 pb-3 pr-3 border-b-2 font-black text-white font-serif">
          <div className="flex-auto">
            <h3>Corte de Pelo</h3>
            <h4 className="text-gray-500 text-xs">
              {" "}
              Incluye lavado de cabello y peinado
            </h4>
          </div>
          <div className="flex-none text-yellow-200">
            <p className=""> X €</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
