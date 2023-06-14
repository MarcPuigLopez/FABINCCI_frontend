import React, { useEffect, useState } from "react";
//Logo
import logo from "../../assets/images/LogoNegro.webp";
//Icons
import { RiMenuFill, RiCloseLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

import { Link, useNavigate, useLocation } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import { useMediaQuery } from "react-responsive";

const Header = (props) => {
  const isTabletOrSmaller = useMediaQuery({ query: "(max-width: 1279px)" });
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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
    localStorage.setItem("scrollposHome", containerRef.current.scrollLeft);
    window.location.reload(false);
  };

  const handleLogin = () => {
    localStorage.setItem("scrollposHome", containerRef.current.scrollLeft);
  };

  const handleLoginMenuClick = (handleProps) => {
    setShowMenu(false);
    handleProps();
  };

  return (
    <header className="w-full fixed top-0 z-50 lg:sticky">
      <div className="flex bg-white border-b-2 items-center xl:pl-56 pl-10 justify-between xl:justify-end w-full p-4 h-[9vh] font-sarif">
        <img src={logo} alt="Fabincci Logo" className="w-16 h-8 xl:hidden" />

        <nav
          className={`fixed w-full h-full right-0 top-0 xl:static 
        flex-1 flex flex-col xl:flex-row items-center justify-center gap-8 
        xl:gap-32 transition ease-linear duration-500 xl:visible xl:opacity-100 z-50 ${
          showMenu ? "visible opacity-100 bg-white" : "invisible opacity-0"
        }`}
        >
          <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden">
            <RiCloseLine />
          </button>
          <button onClick={() => handleLoginMenuClick(props.handleHomeClick)} className="">
            HOME
          </button>
          <button onClick={() => handleLoginMenuClick(props.handleAboutUsClick)} className="">
            SABER HACER
          </button>
          <button
            onClick={() => handleLoginMenuClick(props.handleFabincciClick)}
            className="xl:block hidden"
          >
            <img src={logo} alt="Fabincci Logo" className="w-16 h-8" />
          </button>
          <button
            onClick={() => handleLoginMenuClick(props.handleFabincciClick)}
            className="xl:hidden block"
          >
            FABINCCI
          </button>
          <button onClick={() => handleLoginMenuClick(props.handleReservasClick)} className="">
            RESERVAS
          </button>
          <button onClick={() => handleLoginMenuClick(props.handleContactClick)} className="">
            CONTACTO
          </button>

          {isTabletOrSmaller && (
            <>
              <Link
                className="mt-5 block text-center text-black uppercase text-sm "
                to={`${isLoggedIn ? "/profile" : "/login"}`}
                onClick={() => handleLoginMenuClick(handleLogin)}
              >
                {isLoggedIn ? <ProfileIcon /> : "Iniciar Sesión"}
              </Link>
              <Link
                className="block text-center text-black uppercase text-sm"
                to={`${isLoggedIn ? "/login" : "/register"}`}
                onClick={() => handleLoginMenuClick(handleLogout)}
              >
                {isLoggedIn ? "Cerrar Sesión" : "Registro"}
              </Link>
            </>
          )}
        </nav>

        {!isTabletOrSmaller && (
          <nav
            className={`lg:flex lg:justify-center items-center h-full xl:visible xl:opacity-100 gap-2 z-50 ${
              showMenu ? "visible opacity-100" : "invisible opacity-0"
            }`}
          >
            <Link
              className="block text-center m-5 text-black uppercase text-sm "
              to={`${isLoggedIn ? "/login" : "/login"}`}
              onClick={handleLogout}
            >
              {`${isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}`}
            </Link>

            <Link
              className="block text-center m-5 text-black uppercase text-sm"
              to={`${isLoggedIn ? "/profile" : "/register"}`}
              onClick={handleLogin}
            >
              {isLoggedIn ? <ProfileIcon /> : "Registro"}
            </Link>
          </nav>
        )}

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="xl:hidden text-2xl pr-10"
        >
          <RiMenuFill />
        </button>
      </div>
    </header>
  );
};

const ProfileIcon = () => {
  return (
    <div className="items-center justify-center">
      <CgProfile className="text-2xl" />
    </div>
  );
};

export default Header;
