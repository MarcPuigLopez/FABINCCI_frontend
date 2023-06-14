import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isTabletOrSmaller = useMediaQuery({ query: "(max-width: 670px)" });
  const isSoSmall = useMediaQuery({ query: "(min-width: 350px)" });
  const isNotHigh = useMediaQuery({ query: "(min-height: 600px)" });

  const handleClick = () => {
    localStorage.setItem("scrollposHome", containerRef.current.scrollLeft);
  };

  return (
    <div
      className={` fixed bottom-0 w-full 
                bg-white text-black text-sm font-Roboto font-bold justify-between 
                  text-center lg:h-[6vh] h-[7vh] flex items-center cursor-default
                  xl:px-36 lg:px-24 md:px-16 sm:px-10 px-5 pb-2 pt-2 transition ease-linear duration-500
                  ${isSoSmall ? "" : "opacity-0 pointer-events-none"}
                  ${isNotHigh ? "" : "opacity-0 pointer-events-none"}`}
    >
      <div>
        <p
          className=" xl:pl-10 
                      xl:text-sm text-xs"
        >
          @2023 Fabincci {isTabletOrSmaller ? <br /> : null}
          Barber Shop Mataró
        </p>
      </div>
      <div
        className=" flex gap-5 
                    xl:text-sm text-xs"
      >
        <Link alt="Política de privacidad de Fabincci Barbería" className="" onClick={handleClick} to="/privacy-policy">
          Politica de {isTabletOrSmaller ? <br /> : null}
          Privacidad
        </Link>
      </div>
      <div>
        <p
          className=" xl:pr-10 
                      xl:text-sm text-xs"
        >
          Designed by {isTabletOrSmaller ? <br /> : null}
          Marc Puig López
        </p>
      </div>
    </div>
  );
};

export default Footer;
