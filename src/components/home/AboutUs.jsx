import React from "react";

import { motion } from "framer-motion";

import Video1 from "../../assets/videos/AboutUsVideo1.mp4";
import Video2 from "../../assets/videos/AboutUsVideo2.mp4";
import Video3 from "../../assets/videos/AboutUsVideo3.mp4";

const AboutUs = (props, ref) => {
  return (
    <motion.div ref={ref} className="h-[84vh] w-screen">
      <motion.h1
        className="p-2 pb-0 pt-3 text-7xl font-bold text-white text-center font-press-start"
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
        <div className="w-welcome-width h-[80vh] relative aspect-auto justify-between -ml-3 mt-1 grid-cols-5 grid">
          <div className="col-start-1">
            {/* Cadro y video 1 */}
            <motion.div
              className="m-10 w-72 h-128 border"
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
                className="m-10 w-72 h-128 border"
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
                  className="lazy"
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
          <div className="col-start-2">
            <motion.div
              className="p-14 pr-0 m-4"
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
              <h2 className="p-2 text-xl font-bold text-white text-center my-10 mt-20">
                {" "}
                ¿No encuentras el look adecuado?{" "}
              </h2>
              <h2 className="p-2 text-xl font-bold text-white text-center my-10">
                {" "}
                ¿Te cuesta expresar que tipo de peinado quieres?{" "}
              </h2>
              <h2 className="p-2 text-xl font-bold text-white text-center my-10">
                {" "}
                ¿Tu barbero/estilista no te deja como tú le pides?{" "}
              </h2>
            </motion.div>
          </div>
          {/* Cadro y video 2 */}
          <div className="col-start-3">
            <motion.div
              className="m-10 w-72 h-128 border"
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
                className="m-10 w-72 h-128 border"
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
                  className="lazy"
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
          <div className="col-start-4">
            <motion.div
              className="p-14 pr-0 m-4 "
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
              <p className="pt-5 text-white text-justify">
                {/* TODO: TREURE PER QUE NOMES SIGUI UN PARAGRAF */}
                {" "}
                En FABINCCI Barber S.L. , somos expertos en adaptar cada estilo
                a las fascinantes particularidades de cada persona. Tomamos en
                cuenta la dirección natural de tu cabello, los rasgos faciales,
                el tipo de pelo, para asesorarte y encontrar el estilo más
                adecuado que realce tu belleza única.
                <br />
                <br />A través de años de experiencia y formación continua,
                hemos creado un conjunto de habilidades y técnicas que nos
                permite superar las expectativas de nuestros clientes y brindar
                resultados impecables. No importa cuán desafiante parezca,
                ¡estamos seguros de que juntos lograremos descubrir el look
                perfecto para ti!
              </p>
            </motion.div>
          </div>
          {/* Cadro y video 3 */}
          <div className="col-start-5">
            <motion.div
              className="m-10 w-72 h-128 border"
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
                className="m-10 w-72 h-128 border"
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
                  className="lazy"
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
        </div>
      </div>
    </motion.div>
  );
};

export default React.forwardRef(AboutUs);
