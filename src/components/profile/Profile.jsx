import React from "react";

// Import Routes
import { Routes, Route, NavLink } from "react-router-dom";

// Import Hooks
import { useRef } from "react";

// Import Pages
import UserTab from "./UserTab";
import ReservationsTab from "./ReservationsTab";
import BookingTab from "./BookingTab";
import HeaderProfile from "../helpers/HeaderProfile";
import SideBar from "../helpers/SideBar";

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
        <SideBar
          handleProfileClick={scrollToProfile}
          handleReservationsClick={scrollToReservations}
          handleBookingClick={scrollToBooking}
        />

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
