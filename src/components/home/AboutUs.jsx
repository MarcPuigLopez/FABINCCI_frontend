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
              <h2 className="p-2 text-2xl font-bold text-white text-center">
                {" "}
                ¿No encuentras el look adecuado?{" "}
              </h2>
              <p className="pt-5 text-white text-justify">
                {" "}
                En FABINCCI, somos los expertos en adaptar cada estilo a las
                fascinantes particularidades de cada persona. Tomamos en cuenta
                las facciones, el tipo de cabello que tienes (rizado, liso,
                encrespado, etc.) para asesorarte y encontrar el estilo más
                adecuado que realce tu belleza única. <br />
                <br />A través de años de experiencia y formación continua,
                hemos creado un conjunto de habilidades y técnicas que nos
                permite superar las expectativas de nuestros clientes y brindar
                resultados impecables. No importa cuán desafiante parezca,
                ¡estamos seguros de que juntos lograremos descubrir el look
                perfecto para ti!
              </p>
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
              <h2 className="p-2 text-2xl font-bold text-white text-center">
                {" "}
                ¿Tu barbero/estilista no te dejan como tú le pides?{" "}
              </h2>
              <p className="pt-5 text-white text-justify">
                {" "}
                En Saber Hacer, nos enorgullece decir que somos diferentes.
                Nuestro enfoque se basa en comprender y trabajar en armonía con
                las características individuales de cada cliente. Consideramos
                las partes craneales, la dirección natural de tu cabello, tus
                rasgos faciales y el tipo de cabello que tienes para lograr y
                asesorar el estilo más adecuado para ti. Nos esforzamos por
                crear una experiencia de barbería excepcional que garantice que
                salgas con un look que te haga sentir seguro y satisfecho.
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
