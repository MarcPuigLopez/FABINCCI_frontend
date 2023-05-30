import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

import Alerta from "../components/helpers/Alerta";

const ReservationsContext = createContext();

const ReservationsProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);
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
    } catch (error) {
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
      setReservations(data);
    } catch (error) {
      setReservations([]);
    }

    setLoading(false);
  };

  // Citas del mes
  const getMonthlyReservations = async (fecha) => {
    const token = localStorage.getItem("token");
    if (!token) return;

    console.log(fecha);

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

      // setAlerta({
      //   msg: data.msg,
      //   error: false,
      // });

      // setTimeout(() => {
      //   setAlerta({});
      // }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReservationsContext.Provider
      value={{
        reservations,
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
