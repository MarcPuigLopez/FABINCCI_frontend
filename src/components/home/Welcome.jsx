import React from "react";
import { motion } from "framer-motion";

// Logo
import logoBlanco from "../../assets/images/LogoBlanco.png";
import fabi from "../../assets/images/Fabi.png";

// Imagenes
import Item1 from "../../assets/images/Item1.png";
import Item2 from "../../assets/images/Item2.png";
import Item3 from "../../assets/images/Item3.png";
import Item4 from "../../assets/images/Item4.png";
import Item5 from "../../assets/images/Item5.png";
import Item6 from "../../assets/images/Item6.png";
import ItemP1 from "../../assets/images/ItemP1.jpg";

const Welcome = (props, ref) => {
  return (
    <div ref={ref} className="bg-[url('assets/images/FONDO1.jpg')] bg-cover bg-center flex h-[84vh] w-screen">
      <div className="w-screen h-[84vh] grid grid-cols-3">
        <div className="h-[84vh] grid grid-cols-5 grid-rows-6">
          {/* ITEM 1 */}
          <motion.img
            className="animate-pulse object-contain col-start-1 col-span-2 row-start-1 row-end-2 p-10 w-72 h-60"
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
          {/* ITEM 2 */}
          <motion.img
            className="animate-pulse object-contain col-start-3 col-span-2 row-start-3 row-end-4 p-10 w-72 h-60"
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
          {/* ITEM 3 */}
          <motion.img
            className="animate-pulse object-contain col-start-1 col-span-2 row-start-5 row-end-6 p-10 w-72 h-60"
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

        <div className="h-[84vh] grid grid-rows-6 text-center">
          <motion.h1
            className="row-start-1 text-8xl font-bold text-white pt-6 p-5 text-shadow-lg shadow-gray-700 font-Merienda"
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
            className="row-start-4 pt-20 text-white text-xl font-Merienda"
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
            WELCOME TO FABINCCI'S UNIVERSE
          </motion.h2>
          <motion.p className="row-start-5 row-end-6 pt-2 text-white text-xs text-justify px-20 font-Merienda">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            velit a nisl sagittis hendrerit. Vivamus quis lectus mollis, gravida
            justo quis, lobortis velit. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. In eleifend nibh cursus tincidunt
            vestibulum. Pellentesque luctus nulla ut condimentum sodales.
            Suspendisse tortor lectus, maximus non est eget, scelerisque
            ultrices est. Phasellus ut pretium sapien. Nullam fringilla, nunc
            nec auctor efficitur, erat metus consequat leo, vitae ornare sapien
            magna vel lorem.
          </motion.p>
        </div>

        <div className="h-[84vh] grid grid-cols-5 grid-rows-6">
          {/* ITEM 4 */}
          <motion.img
            className="animate-pulse object-contain col-start-4 col-span-2 row-start-1 row-end-2 p-10 w-72 h-60"
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
          <motion.img
            className="animate-pulse object-contain col-start-2 col-span-2 row-start-3 row-end-4 p-10 w-72 h-60"
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
          <motion.img
            className="animate-pulse object-contain col-start-4 col-span-2 row-start-5 row-end-6 p-10 w-72 h-60"
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
