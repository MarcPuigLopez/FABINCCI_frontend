import React from "react";
import { motion } from "framer-motion";

// Logo
import logoBlanco from "../../assets/images/LogoBlanco.png";

// Imagenes
import Item1 from "../../assets/images/WelcomeElements/Item1.png";
import Item2 from "../../assets/images/WelcomeElements/Item2.png";
import Item3 from "../../assets/images/WelcomeElements/Item3.png";
import Item4 from "../../assets/images/WelcomeElements/Item4.png";
import Item5 from "../../assets/images/WelcomeElements/Item5.png";
import Item6 from "../../assets/images/WelcomeElements/Item6.png";

const Welcome = (props, ref) => {
  return (
    <div ref={ref} className="flex h-[84vh] w-screen">
      <div className="w-screen h-[84vh] grid grid-cols-8">
        {/* COLUMNA 1 */}
        <div className="h-[84vh] grid col-start-1 col-span-3 grid-cols-6 grid-rows-6">
          {/* ITEM 1 */}
          <div className="justify-center items-center col-start-2 col-span-2 row-start-1 row-span-2">
            <motion.img
              className="animate-pulse p-16 ml-3 mt-8"
              src={Item1}
              alt="Item1"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
              }}
            ></motion.img>
          </div>
          {/* ITEM 2 */}
          <div className="justify-center items-center col-start-4 col-span-2 row-start-3 row-span-2">
            <motion.img
              className="animate-pulse p-16 -ml-2 -mt-3"
              src={Item2}
              alt="Item2"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
                delay: 0.2,
              }}
            ></motion.img>
          </div>
          {/* ITEM 3 */}
          <div className="justify-center items-center col-start-2 col-span-2 row-start-5 row-span-2">
            <motion.img
              className="animate-pulse p-16 ml-4 -mt-2"
              src={Item3}
              alt="Item3"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
                delay: 0.4,
              }}
            ></motion.img>
          </div>
        </div>

        {/* COLUMNA 2 */}
        <div className="h-[84vh] grid grid-rows-6 col-start-4 col-span-2 text-center">
          <motion.h1
            className="row-start-1 text-8xl font-bold text-white pt-6 p-5 text-shadow-lg shadow-gray-700 font-Roboto"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 2,
            }}
          >
            FABINCCI
          </motion.h1>
          <motion.h2
            className="row-start-4 pt-20 text-white text-2xl font-Roboto"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 2,
            }}
          >
            ¡BIENVENIDO AL UNIVERSO FABINCCI!
          </motion.h2>
          <motion.div className="row-start-5 row-span-2 pt-2 text-white text-base px-16 font-Roboto">
            <h4 className="pt-3 px-5 text-center">
              Brindamos el mejor servicio adaptado a cada persona para una
              experiencia personalizada que superará todas tus expectativas.
            </h4>
          </motion.div>
        </div>

        {/* COLUMNA 3 */}
        <div className="h-[84vh] grid grid-cols-6 col-start-6 col-span-3 grid-rows-6">
          {/* ITEM 4 */}
          <div className="justify-center items-center col-start-4 col-span-2 row-start-1 row-span-2">
            <motion.img
              className="animate-pulse p-16 mt-11 -ml-4"
              src={Item4}
              alt="Item4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
              }}
            ></motion.img>
          </div>
          {/* ITEM 5 */}
          <div className="justify-center items-center col-start-2 col-span-2 row-start-3 row-span-2">
            <motion.img
              className="animate-pulse p-16 -ml-2 mt-6"
              src={Item5}
              alt="Item5"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
                delay: 0.2,
              }}
            ></motion.img>
          </div>
          {/* ITEM 6 */}
          <div className="justify-center items-center col-start-4 col-span-2 row-start-5 row-span-2">
            <motion.img
              className="animate-pulse p-24 -mt-14 -ml-5"
              src={Item6}
              alt="Item6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
                delay: 0.4,
              }}
            ></motion.img>
          </div>
        </div>

        {/* <img
            src={logoBlanco}
            alt="Fabincci Logo"
            className="xl:h-64 lg:h-52 md:h-32 h-20 items-center mx-auto max-w-xl"
          /> */}

        {/* <div className="m-4 bg-white w-80 absolute top-96 left-60 z-10">
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
        </div> */}
      </div>
    </div>
  );
};

export default React.forwardRef(Welcome);
