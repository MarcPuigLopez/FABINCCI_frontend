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

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const [isDateSelected, setIsDateSelected] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const Month = new Date();

  const currentDay = currentMonth.getDate();
  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDayOfMonth = startOfMonth(currentMonth);
  const monthName = format(firstDayOfMonth, "MMMM yyyy");

  const [showHours, setShowHours] = useState({});

  const [showModalConfirm, setShowModalConfirm] = useState(false);
  const [showModalNotLogged, setShowModalNotLogged] = useState(false);
  const [showModalLogged, setShowModalLogged] = useState(false);
  const [availableHours, setAvailableHours] = useState([]);

  const { reservations, getMonthlyReservations, addReservation } =
    useReservations();
  const { auth } = useAuth();
  const { cutType } = props;

  useEffect(() => {
    getMonthlyReservations(format(currentMonth, "yyyy-MM"));
  }, [currentMonth]);

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
    const reservedHours = reservations.map((reservation) =>
      moment(reservation.date).format("DD-MM") ===
      moment(selectedDay).format("DD-MM")
        ? moment(reservation.date).format("HH:mm")
        : ""
    );

    const hoursAvailable = allHours.filter(
      (hour) => !reservedHours.includes(hour)
    );
    setAvailableHours(hoursAvailable);
  }, [showModalLogged, reservations]);

  const handleDateClick = (date) => {
    setSelectedDay(date);
    setShowHours((prev) => ({ ...prev, [date.toDateString()]: true }));
    if (Object.keys(auth).length !== 0) {
      setShowModalLogged(true);
    } else {
      setShowModalNotLogged(true);
    }
  };

  const handleCloseModal = (date) => {
    setShowHours({});
    if (Object.keys(auth).length !== 0) {
      setShowModalLogged(false);
    } else {
      setShowModalNotLogged(false);
    }
  };

  const handleSelectedHour = (hour) => {
    if (isDateSelected === true && selectedHour === hour) {
      setIsDateSelected(false);
      setSelectedHour(null);
    } else {
      setIsDateSelected(true);
      setSelectedHour(hour);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleConfirmReservation = async () => {
    try {
      setIsLoading(true);

      await addReservation({
        date: moment(selectedDay).format(
          "YYYY-MM-DD[T]" + selectedHour + ":00.000Z"
        ),
        cutType: cutType,
        confirmed: true,
        user: auth._id,
      });

      setIsLoading(false);
      setShowModalLogged(false);
      setShowModalConfirm(true);
    } catch (error) {
      setIsLoading(false);
      // Manejar el error si ocurriera
      console.log("Ha habido un error: ", error);
      let errorMessage = "Ha habido un error al confirmar la reserva.";

      setTimeout(() => {
        setAlert({
          msg: errorMessage,
          error: true,
        });
      }, 3000);
    }
  };

  const handleCloseConfirmModal = () => {
    if (alert.error) {
      setAlert({});
    } else {
      setShowModalConfirm(false);
      setSelectedDay(null);
      setSelectedHour(null);
      setIsDateSelected(false);
      props.handleCalendarOpen();
    }
  };

  const isDayComplete = (day) => {
    const reservasDelDia = reservations.filter((reservation) => {
      const dateReservation = moment(reservation.date).format("D");
      return parseInt(dateReservation, 10) === day;
    });

    return allHours.every((hour) => {
      const horaReservada = reservasDelDia.find((reserva) => {
        const horaReserva = moment(reserva.date).format("HH:mm");
        return horaReserva === hour;
      });
      return horaReservada;
    });
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

      const cellClasses = classNames("sm:p-5 p-4", {
        "bg-yellow-500 text-white":
          selectedDay?.toDateString() === date.toDateString() &&
          showModalLogged === true,
        "text-black": selectedDay?.toDateString() !== date.toDateString(),
        "cursor-not-allowed pointer-events-none opacity-50":
          i < currentDay && currentMonth.getMonth() === Month.getMonth(),
        "cursor-not-allowed pointer-events-none text-red-500":
          isDayComplete(i) && parseInt(moment().format("D")) <= i,
        "cursor-not-allowed pointer-events-none bg-gray-400": isSunday,
        "cursor-pointer bg-white hover:bg-yellow-500 transition duration-400 ease-in-out":
          !isSunday,
      });

      const cell = (
        <div
          key={i}
          className={cellClasses}
          onClick={() => handleDateClick(date)}
          alt={`El día: ${i} del mes: ${
            currentMonth.getMonth() + 1
          } está disponible`}
        >
          <span>{isCurrentMonth && i}</span>
        </div>
      );
      cells.push(cell);
    }

    return cells;
  };

  const renderHourList = () => {
    return allHours.map((hour) =>
      availableHours.includes(hour) ? (
        <li
          key={hour}
          className={classNames("text-lg p-1 px-2 rounded", {
            "cursor-pointer hover:bg-gray-400": isLoading === false,
            "cursor-not-allowed opacity-50": isLoading === true,
            "bg-gray-300": isDateSelected ? selectedHour === hour : "",
          })}
          onClick={() => handleSelectedHour(hour)}
          alt={`La hora: ${hour} del día: ${moment(selectedDay).format(
            "DD-MM"
          )} está disponible`}
        >
          {hour} : Disponible
        </li>
      ) : (
        <li
          key={hour}
          className="text-lg cursor-not-allowed pointer-events-none opacity-50 p-1"
        >
          {hour} : Reservado
        </li>
      )
    );
  };

  const { msg } = alert;

  return (
    <div className="flex flex-col py-10 font-Bebas transition-all ease-linear transition-500">
      <div className="flex w-full justify-between text-lg text-center font-bold p-2 rounded-t-lg bg-white">
        <button className="ml-4" onClick={handlePrevMonth} alt="Mes anterior">
          {currentMonth.getMonth() === Month.getMonth() ? (
            ""
          ) : (
            <RiArrowDropLeftLine />
          )}
        </button>
        <h1 className="text-xl">{monthName}</h1>
        <button className="mr-4" onClick={handleNextMonth} alt="Mes siguiente">
          {currentMonth.getMonth() === Month.getMonth() + 1 ||
          currentDay <= 20 ? (
            ""
          ) : (
            <RiArrowDropRightLine />
          )}
        </button>
      </div>

      <div className="grid grid-cols-7 md:p-5 p-2 md:pt-1 py-1 bg-white text-black text-center font-bold uppercase">
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

      {showModalLogged && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50"
          onClick={handleCloseModal}
        >
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-200 opacity-50" />
          <div
            className="bg-white rounded-lg p-8 flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className={classNames("text-lg p-1", {
                "text-2xl font-bold text-center cursor-default":
                  isLoading === false,
                "cursor-default opacity-50": isLoading === true,
              })}
            >
              ¡Selecciona una hora disponible!
            </h2>

            {msg && <Alert alert={alert} className="font-sans" />}

            <ul className="text-center mt-8">
              {selectedDay && showHours[selectedDay.toDateString()] && (
                <>{renderHourList()}</>
              )}
            </ul>
            {isLoading && (
              <div className="absolute items-center justify-center mt-5">
                <FaSpinner className="animate-spin text-gray-500 h-8 w-8 " />
              </div>
            )}
            <button
              className={`mt-5 bg-yellow-500 mb-5 w-full py-3 text-white uppercase rounded ${
                !isDateSelected
                  ? "pointer-events-none opacity-50"
                  : "hover:cursor-pointer hover:bg-sky-800 transition-colors"
              }`}
              onClick={() => handleConfirmReservation()}
              disabled={!isDateSelected}
            >
              {" "}
              Reservar{" "}
            </button>
          </div>
        </div>
      )}

      {showModalNotLogged && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              ¡No has iniciado sesión!
            </h3>
            <div className="text-center text-lg m-8">
              <h2>
                Para reservar una cita debes <br />
                entrar con tu cuenta
              </h2>
            </div>
            <div className="flex justify-center">
              <span
                alt="Debes iniciar sesión para Hacer una reserva"
                className="m-2 mt-0 p-2 bg-yellow-500 rounded-lg hover:bg-yellow-400 transition-colors "
              >
                <Link to="/login">Iniciar sesión</Link>
              </span>
            </div>
          </div>
        </div>
      )}
      {showModalConfirm && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseConfirmModal}
        >
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold p-10 text-center">
              ¡Has reservado tu cita para el dia: <br />
              {moment(selectedDay).format("DD-MM-YYYY")} a las {selectedHour}!
            </h3>
            <h4 className="text-center text-xl">
              {" "}
              Gracias por confiar en FABINCCI
            </h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
