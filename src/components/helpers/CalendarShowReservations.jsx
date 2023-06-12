import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import classNames from "classnames";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  format,
  startOfMonth,
  getDaysInMonth,
  addMonths,
  subMonths,
} from "date-fns";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import Alert from "./Alert";

import useReservations from "../../hooks/useReservations";
import useAuth from "../../hooks/useAuth";

const Calendar = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({});

  const [isDateSelected, setIsDateSelected] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const Month = new Date();

  const currentDay = currentMonth.getDate();
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfMonth = startOfMonth(currentMonth);
  const monthName = format(firstDayOfMonth, "MMMM yyyy");

  const [showHours, setShowHours] = useState();

  const [showModal, setShowModal] = useState(false);
  const [modalDay, setModalDay] = useState(null);

  const { userReservations, getUserReservations } =
    useReservations();
  const { auth } = useAuth();
  const { cutType } = props;

  const [selectedDaysAndHours, setSelectedDaysAndHours] = useState([]);

  const allHours = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  useEffect(() => {
    getUserReservations(auth._id);
  }, []);

  useEffect(() => {
    const selectedDatesAndHours = userReservations
      .filter((reservation) => reservation.user === auth._id)
      .map((reservation) => moment(reservation.date).format("MM-DD HH:mm"));

    setSelectedDaysAndHours(selectedDatesAndHours);
  }, [userReservations, auth._id]);

  const handleOpenModal = (day, event) => {
    if (isDayReserved(day)) {
      setShowHours(true);
      setShowModal(true);
      setModalDay(day);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowHours(false);
    setModalDay(null);
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const isDayReserved = (day) => {
    if (selectedDaysAndHours) {
      return selectedDaysAndHours.some((obj) => {
        const date = moment(obj, "MM-DD HH:mm").toDate();
        return date.getDate() === day;
      });
    }
    return false;
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

      const cellClasses = classNames("p-5", {
        "cursor-not-allowed pointer-events-none opacity-50":
          i < currentDay && currentMonth.getMonth() === Month.getMonth(),
        "cursor-pointer bg-white hover:bg-yellow-500 transition duration-400 ease-in-out bg-yellow-400 text-white hover:text-white":
          isDayReserved(i) && parseInt(moment().format("D")) <= i,
        "cursor-not-allowed pointer-events-none bg-gray-400": isSunday,
        "cursor-not-allowed pointer-events-none":
          !isDayReserved(i) && !isSunday,
      });

      const cell = (
        <div
          key={i}
          className={cellClasses}
          onMouseEnter={() => handleOpenModal(i)}
          onMouseLeave={() => handleCloseModal()}
        >
          <span>{isCurrentMonth && i}</span>
        </div>
      );
      cells.push(cell);
    }

    return cells;
  };

  const renderHourList = () => {
    if (modalDay === null) return null;

    const selectedDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      modalDay
    );
    const selectedDateString = format(selectedDate, "MM-dd");

    const availableHours = allHours.filter((hour) =>
      selectedDaysAndHours.includes(`${selectedDateString} ${hour}`)
    );

    return availableHours.map((hour) => (
      <li
        key={hour}
        className={classNames("text-lg p-1 px-2 rounded", {
          "cursor-pointer hover:bg-gray-400": !isLoading,
          "cursor-not-allowed opacity-50": isLoading,
          "bg-gray-300": isDateSelected && selectedHour === hour,
        })}
        onClick={() => handleSelectedHour(hour)}
      >
        Tienes reserva para las {hour} horas
      </li>
    ));
  };

  const { msg } = alert;

  return (
    <div className="flex flex-col p-10 font-Bebas transition-all ease-linear transition-500">
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

      <div className="relative">
        {showModal && (
          <div
            className="absolute left-0 right-0 top-0 flex items-center justify-center z-50"
            onClick={handleCloseModal}
          >
            <div className=" bg-gray-900 opacity-50" />
            <div className=" bg-gray-200 opacity-0" />
            <div
              className="bg-white border-2 border-black rounded-lg p-8 flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2
                className={classNames("text-lg p-1", {
                  "text-2xl font-bold text-center cursor-default": !isLoading,
                  "cursor-default opacity-50": isLoading,
                })}
              >
                Tienes una reserva para el día {modalDay} de {monthName}
              </h2>

              {msg && <Alert alert={alert} className="font-sans" />}

              <ul className="text-center mt-8">{renderHourList()}</ul>
              {isLoading && (
                <div className="absolute items-center justify-center mt-5">
                  <FaSpinner className="animate-spin text-gray-500 h-8 w-8 " />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
