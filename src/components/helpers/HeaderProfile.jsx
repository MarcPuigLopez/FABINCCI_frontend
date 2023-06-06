import React, { useEffect, useState, useRef } from "react";

//Logo
import logo from "../../assets/images/LogoNegro.png";

//Icons
import { RiMenuFill, RiArrowLeftSFill } from "react-icons/ri";

import { Link, useNavigate, useLocation } from "react-router-dom";

// Hooks
import useAuth from "../../hooks/useAuth";

const HeaderProfile = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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

  const handleLogin = () => {
    localStorage.setItem("scrollposProfile", containerRef.current.scrollLeft);
  };

  return (
    <header
      className="flex bg-white border-b-2 items-center px-10 justify-between 
    xl:justify-end w-full p-4 h-[9vh] font-sarif sticky top-0 z-10"
    >
      <img src={logo} alt="Fabincci Logo" className="w-16 h-8 xl:hidden" />
      <Link
        to="/"
        className="flex gap-2 text-center m-5 text-black uppercase text-sm"
      >
        <RiArrowLeftSFill className="my-auto text-xl" />
        Volver al inicio
      </Link>

      <nav
        className={` fixed w-full h-full right-0 top-0 xl:static 
          flex-1 flex flex-col xl:flex-row items-center justify-center gap-8 
          xl:gap-32 transition ease-linear duration-500 xl:visible xl:opacity-100 z-50 ${
            showMenu ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        {/* <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden">
          <RiCloseLine />
        </button>
        <Link to="/" onClick={handleScrollToWelcome} className="">
          HOME
        </Link>
        <Link to="/" onClick={handleScrollToAboutUs} className="">
          SABER HACER
        </Link> */}
        <Link
          to="/"
          className="xl:block hidden"
        >
          <img src={logo} alt="Fabincci Logo" className="w-16 h-8" />
        </Link>
        <Link
          to="/"
          className="xl:hidden block"
        >
          FABINCCI
        </Link>
        {/* <Link to="/" onClick={handleScrollToReservas} className="">
          RESERVAS
        </Link>
        <Link to="/" onClick={handleScrollToContact} className="">
          CONTACTO
        </Link> */}
      </nav>

      <nav
        className={`lg:flex lg:justify-center items-center h-full xl:visible xl:opacity-100 gap-2 ${
          showMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Link
          className="block text-center m-5 text-black uppercase text-sm "
          to="/login"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </Link>
      </nav>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        <RiMenuFill />
      </button>
    </header>
  );
};

export default HeaderProfile;
