import React, { useEffect, useState } from "react";
//Logo
import logo from "../assets/images/LogoNegro.png";
//Icons
import { RiMenuFill, RiCloseLine } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [itsLogged, setItsLogged] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/users/profile") setItsLogged(true);
    else setItsLogged(false);
  }, []);

  const { logoutAuth } = useAuth();

  const handleLogout = () => {
    if (!itsLogged) return;
    logoutAuth();
    localStorage.removeItem("token");
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
        <button onClick={props.handleWelcomeClick} className="">
          WELCOME
        </button>
        <button onClick={props.handleAboutUsClick} className="">
          ABOUT US
        </button>
        <button onClick={props.handleFabincciClick} className="xl:block hidden">
          <img src={logo} alt="Fabincci Logo" className="w-16 h-8" />
        </button>
        <button onClick={props.handleFabincciClick} className="xl:hidden block">
          FABINCCI
        </button>
        <button onClick={props.handleReservasClick} className="">
          RESERVAS
        </button>
        <button onClick={props.handleContactClick} className="">
          CONTACT
        </button>
      </nav>

      <nav
        className={`lg:flex lg:justify-center xl:visible xl:opacity-100 ${
          showMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <Link
          className="block text-center m-5 text-black uppercase text-sm "
          to={`${itsLogged ? "/" : "/login"}`}
          onClick={handleLogout}
        >
          {`${itsLogged ? "Logout" : "Login"}`}
        </Link>

        <Link
          className="block text-center m-5 text-black uppercase text-sm"
          to="/register"
        >
          Register
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

export default Header;
