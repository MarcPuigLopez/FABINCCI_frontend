import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

import Alert from "../components/helpers/Alert";

const ReservationsContext = createContext();

const ReservationsProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);
  const [userReservations, setUserReservations] = useState([]);
  const [alert, setAlert] = useState({});
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
      console.log(error);
      setUserReservations([]);
      setReservations([]);
    }

    setLoading(false);
  };

    // el admin añade una cita
    const addAdminReservation = async (reservation) => {
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
          "/reservation/admin/add",
          reservation,
          config
        );
        setReservations([...reservations, data]);
        setUserReservations([...userReservations, data]);
      } catch (error) {
        console.log(error);
        setUserReservations([]);
        setReservations([]);
      }
  
      setLoading(false);
    };

  // Citas de un user
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
  const getMonthlyReservations = async (date) => {
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
        `/reservation/month/${date}`,
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
        addAdminReservation,
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
