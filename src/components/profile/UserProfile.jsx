// Import Hooks
import { useRef, useEffect } from "react";

// Import react-router-dom components
import { useLocation, useNavigate } from "react-router-dom";

// Import Pages
import UserTab from "./UserTab";
import ReservationsTab from "./ReservationsTab";
import BookingTab from "./BookingTab";
import HeaderProfile from "../helpers/HeaderProfile";
import SideBar from "../helpers/SideBar";

const UserProfile = () => {
  const profileRef = useRef(null);
  const reservationsRef = useRef(null);
  const bookingRef = useRef(null);
  const containerRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // execute on location change
    const handleBeforeUnload = () => {
      localStorage.setItem("scrollposProfile", containerRef.current.scrollLeft);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location]);

  // Save scrollPosPosition in localStorage
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("scrollposProfile", containerRef.current.scrollLeft);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Restaura la posició del scroll al carregar la página
  useEffect(() => {
    const scrollpos = localStorage.getItem("scrollposProfile");
    if (scrollpos) {
      containerRef.current.scrollTo({
        left: parseInt(scrollpos),
      });
    }
  }, []);

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
    <div className="bg-[url('assets/images/HomeBg/bg-welcome.webp')] bg-cover bg-fixed h-full">
      <HeaderProfile />

      <div ref={containerRef} className="flex justify-between">
        <SideBar
          handleProfileClick={scrollToProfile}
          handleReservationsClick={scrollToReservations}
          handleBookingClick={scrollToBooking}
        />

        <div className="transition-all ease-linear transition-500 bg-white shadow rounded-lg m-7 p-10 w-full lg:ml-84 h-auto">
          <div className="h-auto">
            <ReservationsTab ref={reservationsRef} />
            <BookingTab ref={bookingRef} />
            <UserTab ref={profileRef} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
