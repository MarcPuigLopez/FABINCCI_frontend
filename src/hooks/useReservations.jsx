import { useContext } from "react";
import ReservationsContext from "../context/ReservationsProvider";

const useReservations = () => {
  return useContext(ReservationsContext);
};

export default useReservations;