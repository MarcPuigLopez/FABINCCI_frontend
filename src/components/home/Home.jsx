import React from "react";
import { motion } from "framer-motion";

// Imagenes
import Item1 from "../../assets/images/HomeElements/Item1.webp";
import Item2 from "../../assets/images/HomeElements/Item2.webp";
import Item3 from "../../assets/images/HomeElements/Item3.webp";
import Item4 from "../../assets/images/HomeElements/Item4.webp";
import Item5 from "../../assets/images/HomeElements/Item5.webp";
import Item6 from "../../assets/images/HomeElements/Item6.webp";

const Home = (props, ref) => {
  return (
    <div
      ref={ref}
      className="lg:pt-0 pt-24 flex lg:h-[84vh] h-screen w-screen font-Roboto"
    >
      <div
        className="w-screen lg:h-[84vh] h-screen grid 
                        lg:grid-cols-8 grid-cols-1"
      >
        {/* COLUMNA 1 */}
        <div
          className="lg:h-[84vh] h-screen col-start-1 col-span-3 grid-cols-6 grid-rows-6 
                        lg:grid hidden"
        >
          {/* ITEM 1 */}
          <div className="justify-center flex items-center col-start-2 col-span-2 row-start-1 row-span-2">
            <motion.img
              className="animate-pulse invisible md:visible md:w-10 lg:w-16 xl:w-24 ml-5 pt-10"
              src={Item1}
              alt="Recipiente para la cera"
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
          <div className="justify-center flex  items-center col-start-4 col-span-2 row-start-3 row-span-2">
            <motion.img
              className="animate-pulse invisible md:visible md:w-10 lg:w-16 xl:w-24 -ml-5 -mt-3"
              src={Item2}
              alt="Pluma para quitar el vello"
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
          <div className="justify-center flex items-center col-start-2 col-span-2 row-start-5 row-span-2">
            <motion.img
              className="animate-pulse invisible md:visible md:w-10 lg:w-16 xl:w-24 ml-4 -mt-10"
              src={Item3}
              alt="Cuchilla de afeitar"
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
        <div className="h-[84vh] grid grid-rows-6 lg:col-start-4 col-span-2 text-center">
          <motion.h1
            className="row-start-1 font-bold text-white pt-6 p-5 text-shadow-lg shadow-gray-700 font-Roboto
                        2xl:text-8xl text-6xl"
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
            className="pt-20 text-white font-Roboto
                        2xl:text-2xl lg:text-xl md:text-lg text-lg
                        row-start-4 "
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
          <motion.div
            className="row-start-5 row-span-2 pt-2 text-white 
                                  2xl:text-lg lg:text-base sm:text-sm 
                                  2xl:px-16 xl:px-14  font-Roboto"
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
            <h3
              className=" md:pt-5 sm:pt-7 pt-10 text-center
                          lg:px-0 px-10
                          xl:mt-0 lg:mt-2"
            >
              Brindamos el mejor servicio adaptado a cada persona para una
              experiencia personalizada que superará todas tus expectativas.
            </h3>
          </motion.div>
        </div>

        {/* COLUMNA 3 */}
        <div
          className="h-[84vh] grid-cols-6 col-start-6 col-span-3 grid-rows-6
                      lg:grid hidden"
        >
          {/* ITEM 4 */}
          <div className="justify-center flex items-center col-start-4 col-span-2 row-start-1 row-span-2">
            <motion.img
              className="animate-pulse invisible md:visible md:w-10 lg:w-16 xl:w-24 -ml-5 pt-10"
              src={Item4}
              alt="Tijeras para cortar el pelo"
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
          <div className="justify-center flex items-center col-start-2 col-span-2 row-start-3 row-span-2">
            <motion.img
              className="animate-pulse invisible md:visible md:w-10 lg:w-16 xl:w-24 -ml-2 "
              src={Item5}
              alt="Maquinilla de afeitar antigua"
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
          <div className="justify-center flex items-center col-start-4 col-span-2 row-start-5 row-span-2">
            <motion.img
              className="animate-pulse invisible md:visible md:w-5 lg:w-10 xl:w-14 xl:-ml-12 -ml-8 -mt-10"
              src={Item6}
              alt="Maquina para afeitar nueva"
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
      </div>
    </div>
  );
};

export default React.forwardRef(Home);
