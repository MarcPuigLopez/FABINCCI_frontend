import React from "react";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

import Cut1 from "../../assets/images/CutImages/Cut1.webp";
import Cut2 from "../../assets/images/CutImages/Cut2.webp";
import Cut3 from "../../assets/images/CutImages/Cut3.webp";

const Fabincci = (props, ref) => {
  const isTabletOrSmaller = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div
      ref={ref}
      className="lg:h-[84vh] w-screen lg:w-fabincci-width font-Roboto"
    >
      <div
        className=" grid h-screen w-screen lg:w-fabincci-width
                    lg:grid-cols-7 md:grid-cols-3 grid-cols-2
                    lg:grid-rows-5 grid-rows-3 items-center"
      >
        {/* IMAGEN 1*/}
        <motion.div
          className="lg:col-start-3 lg:row-start-4 md:col-start-1 md:row-start-3 col-start-1 row-start-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
        >
          <img
            className="lg:w-44 lg:h-44 md:w-40 md:h-40 w-32 h-32 border mx-auto"
            src={Cut1}
            alt="Corte de pelo degradado con pico"
          ></img>
        </motion.div>

        {/* TEXTO 1 */}
        <motion.div
          className=" lg:col-start-2 md:col-start-1 lg:row-start-2 lg:row-span-2 md:row-start-2 col-start-1 row-start-2
                      lg:w-64 lg:h-84  
                    sm:text-white text-black text-shadow-lg 
                    shadow-gray-700 font-Roboto text-justify
                      my-2 mx-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
        >
          <p
            className=" lg:text-base text-xs p-5
                      bg-white bg-opacity-20 backdrop-filter backdrop-blur-md 
                        border border-white border-opacity-30 drop-shadow-2xl"
          >
            {" "}
            En nuestro estudio, no solo ofrecemos cortes de cabello
            excepcionales, sino que también queremos transmitir nuestra pasión y
            compromiso hacia esta profesión.
            <br />
            <br />
            {!isTabletOrSmaller && (
              <p>
                Nos enorgullece poder ayudar a nuestros clientes a encontrar el
                corte perfecto que se adapte a sus necesidades diarias. Nuestro
                objetivo es elevar el estado de ánimo de cada persona que pase
                por nuestra barbería.
              </p>
            )}
          </p>
        </motion.div>

        {/* IMAGEN 2
        <motion.div
          className="lg:col-start-4 lg:row-start-4 md:col-start-2 md:row-start-3 col-start-2 row-start-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
        >
          <img
            className="lg:w-44 lg:h-44 md:w-40 md:h-40 w-32 h-32 border mx-auto"
            src={Cut2}
            alt="Cut2"
          ></img>
        </motion.div> */}

        {/* TITULO */}
        <div className="lg:col-start-3 lg:col-span-3 md:col-start-2 col-start-1 md:col-span-1 sm:col-span-2 col-span-2 justify-center text-center">
          <motion.h1
            className="mt-10 xl:text-8xl lg:text-7xl text-6xl font-bold text-white pt-6 p-5 text-shadow-lg shadow-gray-700 font-Roboto"
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
        </div>

         {/* IMAGEN 3*/}
         <motion.div
          className="lg:col-start-5 lg:row-start-4 md:col-start-3 md:row-start-3 col-start-2 row-start-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
        >
          <img
            className="lg:w-44 lg:h-44 md:w-40 md:h-40 w-32 h-32 border mx-auto"
            src={Cut2}
            alt="Corte de pelo degradado con dibujo"
          ></img>
        </motion.div>

        {/* TEXTO 2 */}

        <motion.div
          className=" lg:col-start-6 lg:row-start-2 lg:row-span-2 md:row-start-2 md:col-start-3 col-start-2 row-start-2
                      lg:w-64 lg:h-84 
                    sm:text-white text-black text-shadow-lg 
                    shadow-gray-700 font-Roboto text-justify
                      my-2 mx-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
        >
          <p
            className=" lg:text-base text-xs p-5
                      bg-white bg-opacity-20 backdrop-filter backdrop-blur-md 
                        border border-white border-opacity-30 drop-shadow-2xl"
          >
            Además de ofrecer servicios de barbería excepcionales, también nos
            apasiona compartir conocimientos y consejos sobre el cuidado del
            cabello y el estilo.
            <br />
            <br />
            {!isTabletOrSmaller && (
              <p>
                Gracias por visitar nuestra página principal y esperamos
                recibirte pronto en nuestra barbería. ¡Déjanos ayudarte a
                expresar tu estilo y alcanzar la confianza que te permitirá
                brillar en todos los aspectos de tu vida!
              </p>
            )}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default React.forwardRef(Fabincci);
