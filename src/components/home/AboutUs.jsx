import React from "react";

import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import Video1 from "../../assets/videos/AboutUsVideo1.mp4";
import Video2 from "../../assets/videos/AboutUsVideo2.mp4";
import Video3 from "../../assets/videos/AboutUsVideo3.mp4";

const AboutUs = (props, ref) => {
  const isTabletOrSmaller = useMediaQuery({ query: "(max-height: 700px)" });

  return (
    <div
      ref={ref}
      className="lg:h-[84vh] h-full w-screen lg:w-aboutUs-width font-Roboto z-10"
    >
      <motion.h1
        className="p-2 pt-6 font-bold text-white text-center font-Roboto
                    xl:text-7xl md:text-6xl text-3xl"
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
        SABER HACER
      </motion.h1>

      <div className="">
        <div
          className="xl:h-[70vh] relative aspect-auto justify-between -ml-3 mt-1 grid 
                        md:mx-16
                        lg:grid-cols-5 grid-cols-2
                        lg:grid-rows-1 grid-rows-3"
        >
          <div className="col-start-1">
            {/* Cadro y video 1 */}
            <motion.div
              className={` border
                          2xl:m-10 xl:m-10 lg:ml-12 sm:ml-20 ml-10 m-7 mr-3
                          2xl:w-72 xl:w-64 md:w-52 sm:w-36 w-24 
                          2xl:h-120 xl:h-96 md:h-72 sm:h-64 h-52 
                          ${
                            isTabletOrSmaller
                              ? "lg:w-36 lg:h-64"
                              : "lg:w-64 lg:h-96"
                          }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <motion.div
                className={` border 
                            2xl:m-10 xl:m-10 ml-10 m-7 mr-3
                            2xl:w-72 xl:w-64 md:w-56 sm:w-36 w-24 
                            2xl:h-120 xl:h-96 md:h-72 sm:h-64 h-52
                            ${
                              isTabletOrSmaller
                                ? "lg:w-36 lg:h-64"
                                : "lg:w-64 lg:h-96"
                            }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <motion.video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="lazy w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 1,
                  }}
                >
                  <source
                    src={Video1}
                    alt="Video de Fabincci donde se muestra como hace un corte degradado a un niño"
                    type="video/mp4"
                  ></source>
                </motion.video>
              </motion.div>
            </motion.div>
          </div>
          {/* Text 1 */}
          <div className="lg:col-start-2 col-start-2">
            <motion.div
              className={`lg:p-12 md:p-10 p-4
                          xl:py-2 lg:py-0 md:py-28 sm:py-20 py-10 
                          lg:pr-16 sm:pr-10 pr-5
                          ${isTabletOrSmaller ? "" : ""}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 2,
                ease: "linear",
              }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <motion.h2
                className={` font-bold text-white text-center
                            lg:p-2 py-2 pt-5
                            xl:text-xl lg:text-lg text-sm
                            lg:my-10
                            ${isTabletOrSmaller ? "" : "xl:mt-32 lg:mt-20"}`}
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
                {" "}
                ¿No encuentras el look adecuado?{" "}
              </motion.h2>
              <motion.h2
                className={` font-bold text-white text-center
                            lg:p-2 py-2
                            xl:text-xl lg:text-lg text-sm
                            lg:my-10
                            ${isTabletOrSmaller ? "" : "lg:mt-2"}`}
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
              >
                {" "}
                ¿Te cuesta expresar que tipo de peinado quieres?{" "}
              </motion.h2>
              <motion.h2
                className={` font-bold text-white text-center
                            lg:p-2 py-2
                            xl:text-xl lg:text-lg text-sm
                            lg:my-10
                            ${isTabletOrSmaller ? "" : "lg:mt-2"}`}
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
              >
                {" "}
                ¿Tu barbero/estilista no te deja como tú le pides?{" "}
              </motion.h2>
            </motion.div>
          </div>
          {/* Cadro y video 2 */}
          <div
            className=" lg:col-start-3 col-start-2
                        lg:row-start-1 row-start-2
                        "
          >
            <motion.div
              className={` border 
                          2xl:m-10 xl:m-10 lg:ml-12 sm:ml-20 ml-10 m-7 mr-3
                          2xl:w-72 xl:w-64 md:w-56 sm:w-36 w-24 
                          2xl:h-120 xl:h-96 md:h-72 sm:h-64 h-52
                          ${
                            isTabletOrSmaller
                              ? "lg:w-36 lg:h-64"
                              : "lg:w-64 lg:h-96"
                          }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <motion.div
                className={` border 
                            2xl:m-10 xl:m-10 ml-10 m-7 mr-3
                            2xl:w-72 xl:w-64 md:w-56 sm:w-36 w-24 
                            2xl:h-120 xl:h-96 md:h-72 sm:h-64 h-52
                            ${
                              isTabletOrSmaller
                                ? "lg:w-36 lg:h-64"
                                : "lg:w-64 lg:h-96"
                            }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <motion.video
                  className="lazy w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 1,
                  }}
                >
                  <source
                    src={Video2}
                    alt="Video de Fabincci donde se muestra como hace un corte degradado a un una mujer"
                    type="video/mp4"
                  ></source>
                </motion.video>
              </motion.div>
            </motion.div>
          </div>
          {/* Text 2 */}
          <div
            className=" lg:col-start-4 col-start-1
                        lg:row-start-1 row-start-2"
          >
            <motion.div
              className={` lg:p-14 
                          pt-16 pl-7 -mr-2
                          lg:m-4
                          ${isTabletOrSmaller ? "lg:text-xs lg:pt-5" : "lg:text-base lg:pt-20"}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 2,
                ease: "linear",
              }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 2,
                  delay: 0.6,
                }}
              >
                <p
                  className={` text-white
                              lg:text-justify text-center
                               md:text-base text-xs
                              ${isTabletOrSmaller ? "" : "xl:mt-10 lg:mt-5"}`}
                >
                  En <b>FABINCCI Barber S.L. </b>, somos expertos en adaptar
                  cada estilo a las fascinantes particularidades de cada
                  persona.
                  <br />
                </p>
                <p
                  className=" text-white
                              lg:text-justify text-center
                              lg:pt-10
                               md:text-base text-xs"
                >
                  A través de años de experiencia y formación continua, hemos
                  creado un conjunto de habilidades y técnicas que nos permite
                  superar las expectativas de nuestros clientes y brindar
                  resultados impecables.
                  <br />
                </p>
              </motion.div>
            </motion.div>
          </div>
          {/* Cadro y video 3 */}
          <div
            className=" lg:col-start-5 col-start-1
                        lg:row-start-1 row-start-3
                        mb-10"
          >
            <motion.div
              className={` border 
                          2xl:m-10 xl:m-10 lg:ml-12 sm:ml-20 ml-10 m-7 mr-3
                          2xl:w-72 xl:w-64 md:w-56 w-24 
                          2xl:h-120 xl:h-96 md:h-72 sm:h-64 h-52
                          ${
                            isTabletOrSmaller
                              ? "lg:w-36 lg:h-64"
                              : "lg:w-64 lg:h-96"
                          }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <motion.div
                className={` border 
                            2xl:m-10 xl:m-10 ml-10 m-7 mr-3
                            2xl:w-72 xl:w-64 md:w-56 sm:w-36 w-24 
                            2xl:h-120 xl:h-96 md:h-72 sm:h-64 h-52
                            ${
                              isTabletOrSmaller
                                ? "lg:w-36 lg:h-64"
                                : "lg:w-64 lg:h-96"
                            }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
              >
                <motion.video
                  className="lazy w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    duration: 1,
                  }}
                >
                  <source
                    src={Video3}
                    alt="Video de Fabincci donde se muestra como hace un corte degradado a un una hombre"
                    type="video/mp4"
                  ></source>
                </motion.video>
              </motion.div>
            </motion.div>
          </div>
          <div
            className=" col-start-2
                        row-start-3"
          >
            <motion.p
              className=" text-white 
                            lg:text-justify text-center
                            lg:hidden block
                            lg:pt-10
                            lg:p-0 p-5
                            lg:text-base md:text-base text-xs
                            lg:mt-0 md:mt-32 mt-20
                              "
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 2,
                delay: 0.8,
              }}
            >
              <br /> No importa cuán desafiante parezca, ¡estamos seguros de que
              lograremos descubrir el look perfecto para ti!
              <br />
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(AboutUs);
