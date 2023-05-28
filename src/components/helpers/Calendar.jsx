import React, { useState } from "react";

import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";

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
              "cursor-pointer bg-white hover:bg-yellow-500 hover:transition hover:duration-200 hover:ease-in-out"
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
          {currentMonth.getMonth() === Month.getMonth() + 6 ? (
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

import {
  format,
  startOfMonth,
  getDaysInMonth,
  addMonths,
  subMonths,
} from "date-fns";

export default Calendar;
