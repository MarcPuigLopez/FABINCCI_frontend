import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/clienteAxios";

const ReservationsContext = createContext();

const ReservationsProvider = ({ children }) => {
  return (
    <ReservationsContext.Provider 
    value={{}}>
      {children}
    </ReservationsContext.Provider>
  );
};

export { ReservationsProvider };

export default ReservationsContext;
