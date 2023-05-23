import React from "react";

// Import Routes
import { Routes, Route, NavLink } from "react-router-dom";

// Import Icons
import { FaUser, FaCalendarAlt, FaClock } from "react-icons/fa";

// Import Hooks
import { useRef } from "react";

// Import Pages
import UserTab from "./UserTab";
import ReservationsTab from "./ReservationsTab";
import BookingTab from "./BookingTab";
import HeaderProfile from "../components/HeaderProfile";

const UserProfile = (props) => {
  const profileRef = useRef(null);
  const reservationsRef = useRef(null);
  const bookingRef = useRef(null);

  const scrollToProfile = () => {
    profileRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReservations = () => {
    reservationsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBooking = () => {
    bookingRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[url('assets/images/FONDO1.jpg')] h-full">
      <HeaderProfile />

      <div className="flex justify-between">
        <div className="bg-gray-300 shadow rounded-lg m-3 ml-8 text-xl h-[85vh] fixed top-[11vh]">
          <div className="border-b-2 pb-1">
            <h2 className="flex m-5 items-center justify-center text-black hover:text-gray-500 hover:transition">
              Menu
            </h2>
          </div>
          <div className="p-10 pt-3 pr-20">
            <button
              onClick={scrollToProfile}
              className="flex items-center text-black hover:text-gray-500 hover:transition mt-4"
            >
              <FaUser className="m-5" /> Profile
            </button>
            <button
              onClick={scrollToReservations}
              className="flex items-center text-black hover:text-gray-500 hover:transition mt-4"
            >
              <FaCalendarAlt className="m-5" /> Reservations
            </button>
            <button
              onClick={scrollToBooking}
              className="flex items-center text-black hover:text-gray-500 hover:transition mt-4"
            >
              <FaClock className="m-5" /> Booking
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg m-7 p-10 w-full ml-84 h-auto">
          <div className="h-auto">
            <UserTab ref={profileRef} />
            <ReservationsTab ref={reservationsRef} />
            <BookingTab ref={bookingRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
