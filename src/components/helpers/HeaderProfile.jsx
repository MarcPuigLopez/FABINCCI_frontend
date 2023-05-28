import React, { useEffect, useState, useRef } from "react";

//Logo
import logo from "../../assets/images/LogoNegro.png";

//Icons
import { RiMenuFill, RiCloseLine } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";

// Hooks
import useAuth from "../../hooks/useAuth";

const HeaderProfile = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();

  useEffect(() => {

    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem("token");
      setIsLoggedIn(loggedIn);
    };
    checkLoginStatus();
  }, []);

  const { logoutAuth } = useAuth();

  const handleLogout = () => {
    if (!isLoggedIn) return;
    logoutAuth();
    localStorage.removeItem("token");
    window.location.reload(false);
  };

  const welcomeRef = useRef(null);
  const aboutUsRef = useRef(null);

  const scrollToWelcome = () => {
    welcomeRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(1);
  };

  const scrollToAboutUs = () => {
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    setScrollLeft(aboutUsRef.current.clientWidth);
  };

  return (
    <header className="flex bg-white border-b-2 items-center pl-40 justify-between xl:justify-end w-full p-4 h-[9vh] font-sarif sticky top-0">
      <img src={logo} alt="Fabincci Logo" className="w-16 h-8 xl:hidden" />

      <nav
        className={` fixed w-full h-full right-0 top-0 xl:static 
          flex-1 flex flex-col xl:flex-row items-center justify-center gap-8 
          xl:gap-32 transition ease-linear duration-500 xl:visible xl:opacity-100 z-50 ${
            showMenu ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden">
          <RiCloseLine />
        </button>
        <Link to="/" onClick={props.handleWelcomeClick} className="">
          HOME
        </Link>
        <Link to="/" onClick={props.handleAboutUsClick} className="">
          SOBRE NOSOTROS
        </Link>
        <Link to="/" onClick={props.handleFabincciClick} className="xl:block hidden">
          <img src={logo} alt="Fabincci Logo" className="w-16 h-8" />
        </Link>
        <Link to="/" onClick={props.handleFabincciClick} className="xl:hidden block">
          FABINCCI
        </Link>
        <Link to="/" onClick={props.handleReservasClick} className="">
          RESERVAS
        </Link>
        <Link to="/" onClick={props.handleContactClick} className="">
          CONTACTO
        </Link>
      </nav>

      <nav
        className={`lg:flex lg:justify-center xl:visible xl:opacity-100 ${
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
