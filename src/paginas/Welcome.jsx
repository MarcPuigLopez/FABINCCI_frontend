import React from "react";

//Logo
import logoBlanco from "../assets/LogoBlanco.png"
import fabi from "../assets/Fabi.png";

const Welcome = (props, ref) => {
  return (
    <div className="bg-[url('assets/FONDO1.png')] bg-cover bg-center bg-no-repeat flex w-welcome-width">
      <div ref={ref} className="w-welcome-width h-[80vh] relative aspect-auto">

        <div>
          <h1 className="text-7xl font-bold text-white text-center p-5 text-shadow-lg shadow-gray-700">
            <span className="px-8 ">FABINCCI</span>
          </h1>

          <img
            src={logoBlanco}
            alt="Fabincci Logo"
            className="xl:h-64 lg:h-52 md:h-32 h-20 items-center mx-auto max-w-xl"
          />
        </div>

        <div className="m-4 bg-white w-80 absolute top-96 left-60 z-10">
          <h2 className="border-2 border-black p-4 text-2xl text-center font-bold">
            {" "}
            INFO{" "}
          </h2>
          <p className="border-2 border-black p-5 h-40 text-justify">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit amet lorem felis. Mauris ultricies, tellus non iaculis
            fringilla, mauris justo finibus ex.{" "}
          </p>
        </div>

        <div className="m-4 bg-white w-auto absolute top-96 right-60  border-black border-2 z-0">
          <img src={fabi} alt="Fabian Viñas" className="h-56" />
        </div>
        <div className="m-4 bg-white w-80 absolute top-52 right-10 z-10">
          <h2 className="border-2 border-black p-4 text-2xl text-center font-bold">
            {" "}
            INFO{" "}
          </h2>
          <p className="border-2 border-black p-5 h-40 text-justify">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit amet lorem felis. Mauris ultricies, tellus non iaculis
            fringilla, mauris justo finibus ex.{" "}
          </p>
        </div>
        <div className="m-4 bg-white w-auto absolute top-52 left-10 border-black border-2 z-0">
          <img src={fabi} alt="Fabian Viñas" className="h-56" />
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Welcome);
