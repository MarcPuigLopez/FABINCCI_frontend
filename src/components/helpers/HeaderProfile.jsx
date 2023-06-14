import React, { useEffect, useState, startTransition  } from "react";

//Logo
import logo from "../../assets/images/LogoNegro.webp";

//Icons
import { RiArrowLeftSFill } from "react-icons/ri";

import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

// Hooks
import useAuth from "../../hooks/useAuth";

const HeaderProfile = (props) => {
  const isTabletOrSmaller = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { logoutAuth } = useAuth();

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("token");
      setIsLoggedIn(loggedIn);
    };
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    if (!isLoggedIn) return;
    logoutAuth();
    localStorage.removeItem("token");
    localStorage.setItem("scrollposProfile", containerRef.current.scrollLeft);
    window.location.reload(false);
  };

  return (
    <header
      className="flex bg-white border-b-2 items-center lg:px-10 pl-6 pr-5 justify-between 
    xl:justify-end w-full p-4 h-[9vh] font-sarif sticky top-0 z-10"
    >
      <Link
        to="/"
        className="flex gap-2 text-center lg:m-5 text-black uppercase lg:text-sm text-xs"
        alt="Botón para volver al inicio"
      >
        <RiArrowLeftSFill className="my-auto text-xl" />
        {!isTabletOrSmaller ? "Volver al inicio" : "Inicio"}
      </Link>

      <nav
        className="w-full h-full right-0 top-0 flex-1 flex items-center justify-center lg:ml-0 ml-8"
        alt="Logo Fabincci para volver al inicio"
      >
        <Link to="/" className="">
          <img src={logo} alt="Fabincci Logo" className="w-16 h-8" />
        </Link>
      </nav>

      <nav className="lg:flex lg:justify-center items-center h-full xl:visible xl:opacity-100 lg:gap-2 ">
        <Link
          className="block text-center lg:m-5 mt-3 text-black uppercase lg:text-sm text-xs "
          to="/login"
          onClick={handleLogout}
          alt="Botón para Cerrar sesión"
        >
          Cerrar Sesión
        </Link>
      </nav>
    </header>
  );
};

export default HeaderProfile;
