import React from "react";

// Import Icons
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const SideBar = (props) => {

    const {auth} = useAuth();

  return (
    <div className="bg-gray-300 shadow rounded-lg m-3 ml-8 text-xl h-[85vh] fixed top-[11vh]">
      <div className="border-b-2 pb-1">
        <h2 className="flex m-5 items-center justify-center font-bold text-black pointer-events-none">
          Hola {auth.nombre}
        </h2>
      </div>
      <div className="p-10 pt-3 pr-20 w-72">
        <button
          onClick={props.handleProfileClick}
          className="flex items-center text-black hover:text-gray-500 hover:transition mt-4"
        >
          <FaUser className="m-5" /> Perfil
        </button>
        <button
          onClick={props.handleReservationsClick}
          className="flex items-center text-black hover:text-gray-500 hover:transition mt-4"
        >
          <FaCalendarAlt className="m-5" /> Citas
        </button>
        <button
          onClick={props.handleBookingClick}
          className="flex items-center text-black hover:text-gray-500 hover:transition mt-4"
        >
          <FaClock className="m-5" /> Reservas
        </button>
      </div>
    </div>
  );
};

export default SideBar;