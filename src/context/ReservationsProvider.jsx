import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

import Alerta from "../components/helpers/Alerta";

const ReservationsContext = createContext();

const ReservationsProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);
  const [userReservations, setUserReservations] = useState([]);
  const [alerta, setAlerta] = useState({});
  const [loading, setLoading] = useState(true);

  // Añadir una cita
  const addReservation = async (reservation) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await clienteAxios.post(
        "/reservation/add",
        reservation,
        config
      );
      setReservations([...reservations, data]);
      setUserReservations([...userReservations, data]);
    } catch (error) {
      setUserReservations([]);
      setReservations([]);
    }

    setLoading(false);
  };

  // Citas de un usuario
  const getUserReservations = async (reservation) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await clienteAxios("/reservation/user", config);
      setUserReservations(data);
    } catch (error) {
      setUserReservations([]);
    }

    setLoading(false);
  };

  // Citas del mes
  const getMonthlyReservations = async (fecha) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const { data } = await clienteAxios(
        `/reservation/month/${fecha}`,
        config
      );
      setReservations(data);
    } catch (error) {
      setReservations([]);
    }

    setLoading(false);
  };

  const deleteReservation = async (id) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await clienteAxios.delete(`/reservation/delete/${id}`, config);

      // Sincronizar el State
      setReservations(
        reservations.filter((reservation) => reservation._id !== id)
      );

      setUserReservations(
        userReservations.filter((reservation) => reservation._id !== id)
      );
    } catch (error) {}
  };

  return (
    <ReservationsContext.Provider
      value={{
        reservations,
        userReservations,
        addReservation,
        getUserReservations,
        getMonthlyReservations,
        deleteReservation,
      }}
    >
      {children}
    </ReservationsContext.Provider>
  );
};

export { ReservationsProvider };

export default ReservationsContext;
