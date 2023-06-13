import React from "react";

import { motion } from "framer-motion";

import Video1 from "../../assets/videos/AboutUsVideo1.mp4";
import Video2 from "../../assets/videos/AboutUsVideo2.mp4";
import Video3 from "../../assets/videos/AboutUsVideo3.mp4";

const AboutUs = (props, ref) => {
  return (
    <div ref={ref} className="lg:h-[84vh] w-screen lg:w-aboutUs-width">
      <motion.h1
        className="p-2 pt-3 font-bold text-white text-center font-press-start
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
          className="xl:h-[80vh] relative aspect-auto justify-between -ml-3 mt-1 grid 
                        md:mx-16
                        lg:grid-cols-5 grid-cols-2
                        lg:grid-rows-1 grid-rows-3"
        >
          <div className="col-start-1">
            {/* Cadro y video 1 */}
            <motion.div
              className="border
                          xl:m-10 ml-10 m-7 mr-3
                          xl:w-72 md:w-56 w-24 
                          xl:h-128 md:h-80 h-52"
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
                className="border 
                            xl:m-10 ml-10 m-7 mr-3
                            xl:w-72 md:w-56 w-24
                            xl:h-128 md:h-80 h-52"
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
                  <source src={Video1} type="video/mp4"></source>
                </motion.video>
              </motion.div>
            </motion.div>
          </div>
          {/* Text 1 */}
          <div className="xl:col-start-2 col-start-2">
            <motion.div
              className=" xl:p-12 md:p-10 p-4
                          md:py-28 py-10 
                          md:pr-16 pr-5"
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
              <h2
                className=" font-bold text-white text-center
                              xl:p-2 py-2 pt-5
                              xl:text-xl text-sm
                              xl:my-10
                              xl:mt-20
                              "
              >
                {" "}
                ¿No encuentras el look adecuado?{" "}
              </h2>
              <h2
                className="font-bold text-white text-center
                              xl:p-2 py-2
                              xl:text-xl text-sm
                              xl:my-10
                              xl:mt-20"
              >
                {" "}
                ¿Te cuesta expresar que tipo de peinado quieres?{" "}
              </h2>
              <h2
                className="font-bold text-white text-center
                              xl:p-2 py-2
                              xl:text-xl text-sm
                              xl:my-10
                              xl:mt-20"
              >
                {" "}
                ¿Tu barbero/estilista no te deja como tú le pides?{" "}
              </h2>
            </motion.div>
          </div>
          {/* Cadro y video 2 */}
          <div
            className=" xl:col-start-3 col-start-2
                        xl:row-start-1 row-start-2"
          >
            <motion.div
              className=" border
                          xl:m-10 md:ml-20 ml-10 m-7 mr-3
                          xl:w-72 md:w-56 w-24 
                          xl:h-128 md:h-80 h-52"
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
                className=" border
                            xl:m-10 ml-10 m-7 mr-3
                            xl:w-72 md:w-56 w-24 
                            xl:h-128 md:h-80 h-52"
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
                  <source src={Video2} type="video/mp4"></source>
                </motion.video>
              </motion.div>
            </motion.div>
          </div>
          {/* Text 2 */}
          <div
            className="xl:col-start-4 col-start-1
                          xl:row-start-1 row-start-2"
          >
            <motion.div
              className=" xl:p-14 
                          xl:pt-20 md:pt-16 pt-7 pl-10 pr-0
                          xl:m-4"
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
              <p
                className="text-white
                              xl:text-justify text-center
                              xl:pt-10
                              xl:text-base md:text-base text-xs"
              >
                En <b>FABINCCI Barber S.L. </b>, somos expertos en adaptar cada
                estilo a las fascinantes particularidades de cada persona.
                <br />
              </p>
              <p
                className="text-white
                              xl:text-justify text-center
                              xl:pt-10
                              xl:text-base md:text-base text-xs"
              >
                <br /> A través de años de experiencia y formación continua,
                hemos creado un conjunto de habilidades y técnicas que nos
                permite superar las expectativas de nuestros clientes y brindar
                resultados impecables.
                <br />
              </p>

            </motion.div>
          </div>
          {/* Cadro y video 3 */}
          <div
            className=" xl:col-start-5 col-start-1
                        xl:row-start-1 row-start-3
                        md:mb-10 mb-20"
          >
            <motion.div
              className=" border
                          xl:m-10 ml-10 m-5 mr-3
                          xl:w-72 md:w-56 w-24 
                          xl:h-128 md:h-80 h-52"
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
                className="border
                            xl:m-10 ml-10 m-7 mr-3
                            xl:w-72 md:w-56 w-24 
                            xl:h-128 md:h-80 h-52"
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
                  <source src={Video3} type="video/mp4"></source>
                </motion.video>
              </motion.div>
            </motion.div>
          </div>
          <div
            className="col-start-2
                            row-start-3"
          >
            <p
              className=" text-white 
                            xl:text-justify text-center
                            lg:hidden block
                            xl:pt-10
                            xl:text-base md:text-base text-xs
                            lg:mt-0 md:mt-32 mt-20
                              "
            >
              <br /> No importa cuán desafiante parezca, ¡estamos seguros de que
              lograremos descubrir el look perfecto para ti!
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(AboutUs);
