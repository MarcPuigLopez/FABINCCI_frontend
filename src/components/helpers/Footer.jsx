import { Link } from "react-router-dom";

const Footer = () => {
  const handleClick = () => {
    localStorage.setItem("scrollposHome", containerRef.current.scrollLeft);
  };

  return (
    <div
      className="   fixed bottom-0 w-full 
                   bg-white text-black text-sm font-Roboto font-bold justify-between 
                    text-center lg:h-[5vh] h-[6vh] flex items-center cursor-default
                    xl:px-36 px-5 pb-2"
    >
      <div>
        <p
          className=" xl:pl-10 
                      xl:text-sm text-xs"
        >
          @2023 Fabincci <br />
          Barber Shop Mataró
        </p>
      </div>
      <div
        className=" flex gap-5 
                    xl:text-sm text-xs"
      >
        <Link className="" onClick={handleClick} to="/privacy-policy">
          Politica de Privacidad
        </Link>
      </div>
      <div>
        <p
          className=" xl:pr-10 
                      xl:text-sm text-xs"
        >
          Designed by <br />
          Marc Puig López
        </p>
      </div>
    </div>
  );
};

export default Footer;
