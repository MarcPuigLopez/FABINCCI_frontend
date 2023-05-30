import React, { useEffect, useState } from "react";

// Css Classnames
import classNames from "classnames";

import moment from "moment";

// Arrow icons
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";

import useReservations from "../../hooks/useReservations";

// Date functions
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

  const currentDay = currentMonth.getDate();

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfMonth = startOfMonth(currentMonth);
  const monthName = format(firstDayOfMonth, "MMMM yyyy");

  const { getMonthlyReservations, reservations } = useReservations();

  const [showHours, setShowHours] = useState(false);

  const handleDateClick = (date) => {
    if (selectedDate?.toDateString() === date.toDateString()) {
      setSelectedDate(null);
      setShowHours(false);
    } else {
      setSelectedDate(date);
      setShowHours(true);
    }
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
      const isSunday = date.getDay() === 0;
      const isReserved = reservations.confirmed;

      const cellClasses = classNames("p-5", {
        "bg-yellow-500 text-white":
          selectedDate?.toDateString() === date.toDateString(),
        "text-black": selectedDate?.toDateString() !== date.toDateString(),
        "cursor-not-allowed pointer-events-none opacity-50":
          i < currentDay && currentMonth.getMonth() === Month.getMonth(),
        "cursor-not-allowed pointer-events-none bg-gray-400": isSunday,
        "cursor-pointer bg-white hover:bg-yellow-500 hover:transition hover:duration-200 hover:ease-in-out":
          !isSunday,
      });

      const cell = (
        <div
          key={i}
          className={cellClasses}
          onClick={() => handleDateClick(date)}
        >
          <span>{isCurrentMonth && i}</span>

          {showHours && (
            <ul className="absolute bg-black mt-2 p-2 shadow">
              {isReserved ? (
                <li>Reservado</li>
              ) : (
                <>
                  <li>09:00</li>
                  <li>10:00</li>
                  <li>11:00</li>
                  <li>12:00</li>
                  <li>------</li>
                  <li>17:00</li>
                  <li>18:00</li>
                  <li>19:00</li>
                  <li>20:00</li>
                </>
              )}
            </ul>
          )}
        </div>
      );
      cells.push(cell);
    }

    return cells;
  };

  return (
    <div className="flex flex-col p-10 font-Bebas">
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
          {currentMonth.getMonth() === Month.getMonth() + 1 ||
          currentDay <= 20 ? (
            ""
          ) : (
            <RiArrowDropRightLine />
          )}
        </button>
      </div>

      {/* <div className="flex text-center bg-gradient-to-b from-gray-400 to-black p-3"></div> */}

      <div className="grid grid-cols-7 p-5 pt-1 bg-white text-black text-center font-bold uppercase">
        <div className="">Lun</div>
        <div className="">Mar</div>
        <div className="">Mie</div>
        <div className="">Jue</div>
        <div className="">Vie</div>
        <div className="">Sab</div>
        <div className="">Dom</div>
      </div>
      <ul className="grid grid-cols-7 text-center align-center bg-white">
        {[...Array(firstDayOfMonth.getDay() - 1)].map((_, i) => (
          <li
            key={`empty-${i}`}
            className="pointer-events-none justify-center"
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

export default Calendar;
