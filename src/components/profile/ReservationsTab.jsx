import React, { useEffect, useState } from "react";

import CalendarShowReservations from "../helpers/CalendarShowReservations";

import useReservations from "../../hooks/useReservations";

import { sortBy, prop } from "ramda";
import moment from "moment";
moment.updateLocale("es");

const ReservationsTab = (props, ref) => {
  const { reservations, userReservations, getUserReservations, deleteReservation } =
    useReservations();
  const [showModal, setShowModal] = useState(false);
  const [cancelReservationId, setCancelReservationId] = useState("");

  useEffect(() => {
    getUserReservations();
  }, []);

  // Filtrar las reservas activas
  const activeReservations = userReservations.filter(
    (reservation) =>
      reservation.confirmed === true &&
      moment(reservation.fecha).format("MMDDHHmm") >=
        moment().format("MMDDHHmm")
  );

  const sortedReservations = sortBy(prop("fecha"))(activeReservations);

  const handleOpenModal = (id) => {
    setCancelReservationId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setCancelReservationId("");
    setShowModal(false);
  };

  const handleCancelButton = () => {
    // Lógica para cancelar la reserva con el ID cancelReservationId
    // Realiza la llamada a la base de datos u otras acciones necesarias
    deleteReservation(cancelReservationId);

    // Cierra el modal después de cancelar la reserva
    handleCloseModal();
  };

  return (
    <div className="font-Roboto p-4 scroll-mt-32" ref={ref}>
      <h2 className="text-2xl font-bold mb-4 text-center ">Gestión de Citas</h2>

      <div className="xl:flex pb-20 justify-center mt-10">
        <div className="mr-5 xl:w-1/2">
          <h3 className="text-2xl font-bold mb-16 text-center">
            Reservas Activas
          </h3>
          <h4 className="text-xl font-bold pl-10">
            Próximas citas: {activeReservations.length}
          </h4>
          <div className="flex flex-col p-10 pt-8 h-96 overflow-y-auto">
            {activeReservations.length > 0 ? (
              sortedReservations.map((reservation) => (
                <div className="flex text-justify" key={reservation._id}>
                  <p className="text-lg mb-5 pl-1 p-5 w-4/5">
                    El día:{" "}
                    <span className="font-bold text-xl">
                      {moment(reservation.fecha).format("DD-MM-YY")}
                    </span>{" "}
                    a las:{" "}
                    <span className="font-bold text-xl">
                      {moment(reservation.fecha).format("HH:mm")}h. <br />
                    </span>
                    <span className="font-bold">
                      {" "}
                      {reservation.corte}
                    </span>{" "}
                    con{" "}
                    <span className="font-bold text-xl">Fabian Viñas</span>
                  </p>
                  <button
                    className="m-4 my-8 p-2 bg-gray-400 rounded-lg hover:bg-gray-300 transition-colors w-1/5"
                    onClick={() => handleOpenModal(reservation._id)}
                  >
                    Cancelar
                  </button>
                </div>
              ))
            ) : (
              <p>No hay reservas activas.</p>
            )}
          </div>
        </div>
        <div className="xl:w-1/2 ml-5">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Localiza tu cita
          </h3>
          <CalendarShowReservations />
          <p className="text-center mt-4"> Situa el ratón encima del dia para ver información sobre tu cita.  </p>
        </div>
      </div>

      {showModal && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Confirmar cancelación
            </h3>
            <p className="text-center">
              ¿Estás seguro de que deseas cancelar esta cita?
            </p>
            <div className="flex justify-center mt-8">
              <button
                className="m-2 p-2 bg-gray-400 rounded-lg hover:bg-gray-300 transition-colors"
                onClick={handleCancelButton}
              >
                Cancelar Cita
              </button>
              <button
                className="m-2 p-2 bg-gray-400 rounded-lg hover:bg-gray-300 transition-colors"
                onClick={handleCloseModal}
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

export default React.forwardRef(ReservationsTab);
