import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className=" bg-white text-black text-sm font-Roboto font-bold justify-between 
                    text-center h-[5vh] flex items-center px-36"
    >
      <div>
        <p className="pl-10">@2023 Fabincci Barber Shop Mataró</p>
      </div>
      <div className="flex">
        <Link className="pr-5">Politica de Cookies</Link>
        <Link className="">Politica de Privacidad</Link>
      </div>
      <div>
        <p className="pr-10">Designed by Marc Puig López</p>
      </div>
    </div>
  );
};

export default Footer;
