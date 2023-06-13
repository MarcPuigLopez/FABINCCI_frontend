import React, { useEffect, useState } from "react";

import useReservations from "../../hooks/useReservations";
import { sortBy, prop } from "ramda";
import moment from "moment";

const ActiveReservations = () => {
  const {
    reservations,
    userReservations,
    getUserReservations,
    deleteReservation,
  } = useReservations();
  const [cancelReservationId, setCancelReservationId] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getUserReservations();
  }, []);

  const handleOpenModal = (id) => {
    setCancelReservationId(id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setCancelReservationId("");
    setShowModal(false);
  };

  // Filtrar las reservas activas
  const activeReservations = userReservations.filter(
    (reservation) =>
      reservation.confirmed === true &&
      moment(reservation.date).format("MMDDHHmm") >= moment().format("MMDDHHmm")
  );

  const sortedReservations = sortBy(prop("date"))(activeReservations);

  const handleCancelButton = () => {
    // Lógica para cancelar la reserva con el ID cancelReservationId
    // Realiza la llamada a la base de datos u otras acciones necesarias
    deleteReservation(cancelReservationId);

    // Cierra el modal después de cancelar la reserva
    handleCloseModal();
  };

  return (
    <>
      <h4 className="text-xl font-bold sm:pl-10">
        Próximas citas: {activeReservations.length}
      </h4>
      <div className=" flex flex-col overflow-y-auto
                        sm:p-10 pt-8 h-96">
        {activeReservations.length > 0 ? (
          sortedReservations.map((reservation) => (
            <div className="flex text-justify" key={reservation._id}>
              <p className="sm:text-lg text-sm mb-5 pl-1 sm:p-5 p-2 sm:w-4/5">
                El día:{" "}
                <span className="font-bold sm:text-xl text-base">
                  {moment(reservation.date).format("DD-MM-YY")}
                </span>{" "}
                a las:{" "}
                <span className="font-bold sm:text-xl text-base">
                  {moment(reservation.date).format("HH:mm")}h. <br />
                </span>
                <span className="font-bold"> {reservation.cutType}</span> con{" "}
                <span className="font-bold sm:text-xl text-base">Fabian Viñas</span>
              </p>
              <button
                className="m-4 sm:my-8 my-5  sm:p-2 bg-gray-400 rounded-lg hover:bg-gray-300 transition-colors sm:w-1/5 w-1/4"
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
      {showModal && (
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
            <div className="flex justify-center mt-8">
              <button
                className="m-2 p-2 bg-red-500 rounded-lg hover:bg-gray-400 text-white transition-colors"
                onClick={handleCancelButton}
              >
                Cancelar Cita
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActiveReservations;
