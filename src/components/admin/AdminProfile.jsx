// Import Hooks
import { useRef, useEffect } from "react";

// Import react-router-dom components
import { useLocation } from "react-router-dom";

// Import Pages
import AdminTab from "./AdminTab";
import CalendarTab from "./CalendarTab";
import HeaderProfile from "../helpers/HeaderProfile";
import SideBar from "../helpers/SideBar";

const UserAdmin = () => {
  const adminRef = useRef(null);
  const reservationsRef = useRef(null);
  const containerRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    // execute on location change
    const handleBeforeUnload = () => {
      localStorage.setItem("scrollposAdmin", containerRef.current.scrollLeft);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location]);

  // Save scrollPosPosition in localStorage
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.setItem("scrollposAdmin", containerRef.current.scrollLeft);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Restaura la posició del scroll al carregar la página
  useEffect(() => {
    const scrollpos = localStorage.getItem("scrollposAdmin");
    if (scrollpos) {
      containerRef.current.scrollTo({
        left: parseInt(scrollpos),
      });
    }
  }, []);

  const scrollToAdmin = () => {
    adminRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReservations = () => {
    reservationsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[url('assets/images/HomeBg/bg-home.webp')] bg-cover bg-fixed h-full">
      <HeaderProfile />

      <div ref={containerRef} className="flex justify-between">
        <SideBar
          handleProfileClick={scrollToAdmin}
          handleReservationsClick={scrollToReservations}
        />

        <div className="transition-all ease-linear transition-500 bg-white shadow rounded-lg m-7 p-10 w-full lg:ml-84 h-auto">
          <div className="h-auto">
            <CalendarTab ref={reservationsRef} />
            <AdminTab ref={adminRef} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserAdmin;
