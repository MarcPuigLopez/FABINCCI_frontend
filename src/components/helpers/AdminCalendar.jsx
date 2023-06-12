import React, { useState, useEffect } from "react";
import { format, startOfWeek, addDays, addWeeks } from "date-fns";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import { sortBy, prop, set } from "ramda";

import classNames from "classnames";
import moment from "moment";
import es from "date-fns/locale/es";

import Alert from "../helpers/Alert";
import useReservations from "../../hooks/useReservations";
import useAuth from "../../hooks/useAuth";

const AdminCalendar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [alert, setAlert] = useState({});

  const actualDate = moment().format("DD");
  const actualHour = moment().format("HH:mm");

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const [selectedReservation, setSelectedReservation] = useState(null);

  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date()));

  const [showModalModifyReservation, setShowModalModifyReservation] =
    useState(false);
  const [showModalNewReservation, setShowModalNewReservation] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { usersData, getUsers } = useAuth();
  const {
    reservations,
    getMonthlyReservations,
    deleteReservation,
    addAdminReservation,
  } = useReservations();

  const [prevData, setPrevData] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    getMonthlyReservations(format(currentWeek, "yyyy-MM"));
    getUsers();
  }, [currentWeek, reservations]);

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

  const handlePrevWeek = () => {
    setCurrentWeek((prevWeek) => addWeeks(prevWeek, -1));
  };

  const handleNextWeek = () => {
    setCurrentWeek((prevWeek) => addWeeks(prevWeek, 1));
  };

  const handleCloseModifyReservationModal = () => {
    setEditing(false);
    setData({
      name: prevData.name,
      email: prevData.email,
      phone: prevData.phone,
      cutType: prevData.cutType,
      day: prevData.day,
      hour: prevData.hour,
    });
  };

  const handleCloseModal = () => {
    setShowModalNewReservation(false);
    setShowModalModifyReservation(false);
    setShowDeleteModal(false);
    setData({
      name: "",
      email: "",
      phone: "",
      cutType: "Corte",
      day: "",
      hour: "",
    });
    setEditing(false);
  };

  const handleNewReservationButton = async () => {
    const reservationUser = usersData.find((user) => user.email === data.email);

    if (!reservationUser) {
      setAlert({
        msg: "El usuario no existe",
        error: true,
      });
      setTimeout(() => {
        setAlert({});
      }, 1000);
    } else {
      setIsLoading(true);
      await addAdminReservation({
        date: moment(currentWeek).format(
          "YYYY-MM-" +
            `${selectedDay <= 9 ? "0" + selectedDay : selectedDay}` +
            "[T]" +
            selectedHour +
            ":00.000Z"
        ),
        cutType: data.cutType,
        confirmed: true,
        user: reservationUser._id,
      });
      setIsLoading(false);
      setShowModalNewReservation(false);
    }

    setData({
      name: "",
      email: "",
      phone: "",
      cutType: "Corte",
      day: "",
      hour: "",
    });
  };

  const handleCancelReservationButton = () => {
    setShowModalModifyReservation(false);
    setShowDeleteModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleShowModifyReservationModal = (
    day,
    hour,
    reservation,
    reservationUser
  ) => {
    setSelectedDay(day);
    setSelectedHour(hour);
    setSelectedReservation(reservation);
    reservationUser;

    setData((prevData) => ({
      ...prevData,
      name: reservationUser.name || "loading...",
      email: reservationUser.email || "loading...",
      phone: reservationUser.telefono || "loading...",
      cutType: reservation.cutType || "loading...",
      day: day || "loading...",
      hour: hour || "loading...",
    }));

    setPrevData((prevData) => ({
      ...prevData,
      name: reservationUser.name || "loading...",
      email: reservationUser.email || "loading...",
      phone: reservationUser.telefono || "loading...",
      cutType: reservation.cutType || "loading...",
      day: day || "loading...",
      hour: hour || "loading...",
    }));

    setShowModalModifyReservation(true);
  };

  const handleShowNewReservationButton = (day, hour) => {
    setSelectedDay(day);
    setSelectedHour(hour);

    setData({
      name: "",
      email: "",
      phone: "",
      cutType: "Corte",
      day: day,
      hour: hour,
    });
    setShowModalNewReservation(true);
  };

  const handleConfirmCancelReservationButton = () => {
    setShowDeleteModal(false);

    deleteReservation(selectedReservation._id);
  };

  const handleCloseNewReservationButton = () => {
    setShowModalNewReservation(false);
    setShowModalModifyReservation(false);
    setData({
      name: "",
      email: "",
      phone: "",
      cutType: "Corte",
      day: "",
      hour: "",
    });
    setEditing(false);
  };

  const handleCloseConfirmModalButton = () => {
    setSelectedDay();
    setSelectedHour();
    setSelectedReservation();

    setShowModalNewReservation(false);
    setShowModalModifyReservation(false);
    setData({
      name: "",
      email: "",
      phone: "",
      cutType: "Corte",
      day: "",
      hour: "",
    });
    setEditing(false);
    setShowDeleteModal(false);
  };

  const renderWeekDays = () => {
    const days = [];
    let startDate = currentWeek;
    startDate = addDays(startDate, 1);

    days.push(
      <div key={0}>
        <div className="text-gray-600">
          <div className="flex flex-col items-center justify-center h-12 uppercase border-gray-200 rounded-md">
            <div className=""></div>
          </div>
        </div>
        <div className="grid grid-rows-8 p-3 items-center">
          {allHours.map((hour) => {
            return (
              <div
                key={hour}
                className="my-1 py-3 text-2xl text-center rounded h-16 flex items-center justify-center"
              >
                {hour}
              </div>
            );
          })}
        </div>
      </div>
    );

    const startDay = parseInt(format(startDate, "d"));
    const finalDay = parseInt(format(addDays(startDate, 5), "d"));

    for (let i = startDay; i <= finalDay; i++) {
      const formattedDate = format(startDate, "EEEE d", { locale: es });
      const dayReservations = reservations.filter((reservation) => {
        const reservationDate = moment(reservation.date).format("YYYY-MM-DD");
        return reservationDate === moment(startDate).format("YYYY-MM-DD");
      });

      const sortedDayReservations = sortBy(prop("date"))(dayReservations);

      days.push(
        <div key={i}>
          <div className="flex flex-col items-center justify-center h-12 border border-gray-200 rounded-md capitalize">
            <div className="">{formattedDate}</div>
          </div>
          <div
            className={classNames("grid grid-rows-8 p-2", {
              "opacity-50 ": i < parseInt(actualDate),
            })}
          >
            {allHours.map((hour) => {
              const reservation = sortedDayReservations.find(
                (res) => moment(res.date).format("HH:mm") === hour
              );

              const reservationUser = reservation
                ? usersData.find((user) => user._id === reservation.user)
                : null;

              return (
                <div
                  key={hour}
                  className={classNames(
                    "my-1 text-center font-Roboto text-sm",
                    {
                      "opacity-50 ":
                        i === parseInt(actualDate) && hour < actualHour,
                    }
                  )}
                >
                  {reservation ? (
                    <div
                      className="bg-red-100 hover:bg-red-200 transition py-4 p-2 rounded h-16 cursor-pointer"
                      onClick={() =>
                        handleShowModifyReservationModal(
                          i,
                          hour,
                          reservation,
                          reservationUser
                        )
                      }
                    >
                      <span className="font-bold text-sm capitalize">
                        {reservationUser?.name} {reservationUser?.lastName}{" "}
                        <br />
                      </span>

                      <span className="text-sm capitalize">
                        {reservation?.cutType} <br />
                      </span>
                    </div>
                  ) : (
                    <div
                      className="bg-green-100 hover:bg-green-200 py-4 p-2 
                                rounded h-16 my-auto flex items-center justify-center cursor-pointer"
                      onClick={() => handleShowNewReservationButton(i, hour)}
                    >
                      <span className="">Disponible</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
      startDate = addDays(startDate, 1);
    }

    return days;
  };

  const { msg } = alert;

  return (
    <div className="bg-white p-4 rounded-lg shadow font-Bebas">
      <div className="flex items-center justify-between mb-4">
        <button
          className="flex items-center text-gray-600 hover:text-gray-800"
          onClick={handlePrevWeek}
        >
          <RiArrowDropLeftLine className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-bold">
          {format(currentWeek, "MMMM yyyy")}
        </h2>
        <button
          className="flex items-center text-gray-600 hover:text-gray-800"
          onClick={handleNextWeek}
        >
          <RiArrowDropRightLine className="h-5 w-5" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-4">{renderWeekDays()}</div>

      {showModalModifyReservation && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 font-Roboto"
          onClick={handleCloseModal}
        >
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-200 opacity-50" />
          <div
            className="bg-white rounded-lg px-8 pt-10 pb-0 w-2/5 flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className={classNames("text-xl p-1 font-Bebas", {
                "text-2xl font-bold text-center cursor-default":
                  isLoading === false,
                "cursor-default opacity-50": isLoading === true,
              })}
            >
              El día {selectedDay} a las {selectedHour} tienes a:{" "}
            </h2>

            {isLoading && (
              <div className="absolute items-center justify-center mt-5">
                <FaSpinner className="animate-spin text-gray-500 h-8 w-8" />
              </div>
            )}

            {!isLoading && (
              <div className="p-10 pt-3 py-20 w-full">
                <div className="mx-5 pl-2">
                  <div className="grid grid-cols-1 mt-5 gap-2">
                    <label className="block font-bold" htmlFor="name">
                      Nombre
                    </label>
                    <div className="flex justify-between">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        disabled={true}
                        onChange={handleInputChange}
                        className="appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
                      />
                    </div>
                    <label className="block font-bold" htmlFor="email">
                      Correo Electrónico
                    </label>
                    <div className="flex justify-between">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={data.email}
                        disabled={true}
                        onChange={handleInputChange}
                        className="appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
                      />
                    </div>

                    <label className="block font-bold" htmlFor="phone">
                      Teléfono
                    </label>
                    <div className="flex justify-between">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={data.phone}
                        disabled={true}
                        onChange={handleInputChange}
                        className="appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
                      />
                    </div>
                    <div className="flex justify-between gap-5">
                      <div className="w-full">
                        <label className="block font-bold" htmlFor="day">
                          Día
                        </label>
                        <div className="flex justify-between">
                          <input
                            type="text"
                            id="day"
                            name="day"
                            value={data.day}
                            onChange={handleInputChange}
                            disabled={!editing}
                            className="appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
                          />
                        </div>
                      </div>

                      <div className="w-full">
                        <label className="block font-bold" htmlFor="hour">
                          Hora
                        </label>
                        <div className="flex justify-between">
                          <input
                            type="text"
                            id="hour"
                            name="hour"
                            value={data.hour}
                            onChange={handleInputChange}
                            disabled={!editing}
                            className="appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
                          />
                        </div>
                      </div>
                    </div>

                    <label className="block font-bold" htmlFor="cutType">
                      Tipo de Corte
                    </label>
                    <div className="flex justify-between">
                      <select
                        id="cutType"
                        name="cutType"
                        value={data.cutType}
                        onChange={handleInputChange}
                        disabled={!editing}
                        className="appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
                      >
                        <option value="Corte">Corte</option>
                        <option value="Corte + Afeitado">
                          Corte + Afeitado
                        </option>
                        <option value="Afeitado">Afeitado</option>
                        <option value="Corte Niños">Corte Niños</option>
                        <option value="Corte + Color">Corte + Color</option>
                        <option value="Cejas">Cejas</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-center mt-5 gap-5 font-Bebas">
                    <button
                      className="p-3 py-1 m-2 bg-red-500 hover:bg-red-600 text-white rounded"
                      onClick={handleCancelReservationButton}
                    >
                      Cancelar Cita
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showModalNewReservation && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 font-Roboto"
          onClick={handleCloseModal}
        >
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-200 opacity-50" />
          <div
            className="bg-white rounded-lg px-8 pt-10 pb-0 w-2/5 flex flex-col items-center justify-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className={classNames("text-xl p-1 font-Bebas", {
                "text-2xl font-bold text-center cursor-default":
                  isLoading === false,
                "cursor-default opacity-50": isLoading === true,
              })}
            >
              El dia {selectedDay} a las {selectedHour}:{" "}
            </h2>

            {msg && <Alert alert={alert} />}

            {isLoading && (
              <div className="absolute items-center justify-center mt-5">
                <FaSpinner className="animate-spin text-gray-500 h-8 w-8" />
              </div>
            )}

            {!isLoading && (
              <div className="p-10 pt-3 py-20 w-full">
                <div className="mx-5 pl-2">
                  <div className="grid grid-cols-1 mt-5 gap-2">
                    <label className="block font-bold" htmlFor="email">
                      Correo Electrónico:
                    </label>
                    <div className="flex justify-between">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={data.email}
                        placeholder="Correo electrónico"
                        onChange={handleInputChange}
                        className="appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
                      />
                    </div>

                    <label className="block font-bold" htmlFor="cutType">
                      Tipo de Corte
                    </label>
                    <div className="flex justify-between">
                      <select
                        id="cutType"
                        name="cutType"
                        value={data.cutType}
                        onChange={handleInputChange}
                        className="appearance-none border rounded w-full mb-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition"
                      >
                        <option value="Corte">Corte</option>
                        <option value="Corte + Afeitado">
                          Corte + Afeitado
                        </option>
                        <option value="Afeitado">Afeitado</option>
                        <option value="Corte Niños">Corte Niños</option>
                        <option value="Corte + Color">Corte + Color</option>
                        <option value="Cejas">Cejas</option>
                      </select>
                    </div>

                    <div className="flex justify-center mt-5 font-Bebas">
                      <button
                        className="p-3 py-1 m-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
                        onClick={handleNewReservationButton}
                      >
                        Crear Reserva
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showDeleteModal && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Confirmar cancelación
            </h3>
            <p className="text-center">
              ¿Estás seguro de que deseas cancelar esta cita?
            </p>
            <div className="flex justify-center mt-8 font-Bebas">
              <button
                className="p-3 py-1 m-2 bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
                onClick={handleConfirmCancelReservationButton}
              >
                Cancelar Cita
              </button>
              <button
                className="p-3 py-1 m-2 bg-gray-300 hover:bg-gray-400 rounded transition-colors"
                onClick={handleCloseConfirmModalButton}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCalendar;
