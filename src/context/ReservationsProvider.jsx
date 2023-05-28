import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const ReservationsContext = createContext();

const ReservationsProvider = ({ children }) => {

  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getReservations = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clienteAxios("/reservations", config);
        setReservations(data);
      } catch (error) {
        setReservations([]);
      }

      setLoading(false);
    };
    getReservations();
  }, []);



  return (
    <ReservationsContext.Provider 
    value={{
      reservations,
    }}>
      {children}
    </ReservationsContext.Provider>
  );
};

export { ReservationsProvider };

export default ReservationsContext;
