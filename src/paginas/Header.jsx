import React, { useState } from "react";
//Logo
import logo from "../assets/LogoNegro.png";
//Icons
import { RiMenuFill, RiCloseLine } from "react-icons/ri";

const Header = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex items-center justify-between xl:justify-end w-full p-4 h-[10vh]">
      <img src={logo} alt="Fabincci Logo" className="w-16 h-8 xl:hidden" />

      <nav
        className={` fixed bg-white w-full h-full right-0 top-0 xl:static 
          flex-1 flex flex-col xl:flex-row items-center justify-center gap-8 
          xl:gap-32 transition ease-linear duration-500 xl:visible xl:opacity-100 ${
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
      {/* </Transition> */}
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
