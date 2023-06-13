import React from "react";
import { motion } from "framer-motion";

import { useMediaQuery } from "react-responsive";

const Fabincci = (props, ref) => {
  const isTabletOrSmaller = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <div ref={ref} className="lg:h-[84vh] w-screen ">
      <div
        className=" grid w-screen
                    lg:grid-cols-5 md:grid-cols-3 grid-cols-2
                    lg:grid-rows-1 grid-rows-3"
      >
        {/* TEXTO 1 */}
        <div
          className="lg:col-start-2 md:col-start-1 md:row-start-2 col-start-1 row-start-2
                       bg-white bg-opacity-20 backdrop-filter backdrop-blur-md 
                       border border-white border-opacity-30 drop-shadow-2xl
                       sm:text-white text-black text-shadow-lg 
                       shadow-gray-700 font-Roboto text-justify
                       lg:mb-60 lg:-ml-20 lg:mr-28
                       my-2 mx-5"
        >
          <h2 className="text-2xl text-center font-bold p-5">FABINCCI</h2>
          <p className="lg:text-base text-xs p-5">
            {" "}
            En nuestro estudio, no solo ofrecemos cortes de cabello
            excepcionales, sino que también queremos transmitir nuestra pasión y
            compromiso hacia esta profesión.
            <br />
            <br />
            {!isTabletOrSmaller && (
              <p>
                Nos enorgullece poder ayudar a nuestros clientes a encontrar el
                corte perfecto que se adapte a sus necesidades diarias. Sabemos
                lo importante que es lucir y sentirse bien, y nuestro objetivo
                es elevar el estado de ánimo de cada persona que pase por
                nuestra barbería."
              </p>
            )}
          </p>
        </div>

        {/* TITULO */}
        <div className="xl:col-start-3 md:col-start-2 col-start-1 sm:col-span-1 col-span-2 justify-center text-center">
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

        {/* TEXTO 2 */}

        <div
          className="lg:col-start-4 md:col-start-3 md:row-start-2 col-start-2 row-start-2
           bg-white bg-opacity-20 backdrop-filter backdrop-blur-md 
                        border border-white border-opacity-30 drop-shadow-2xl
                        sm:text-white text-black text-shadow-lg 
                        shadow-gray-700 font-Roboto text-justify
                        lg:mb-60 lg:-mr-20 lg:ml-28
                        my-2 mx-5"
        >
          <h2 className="text-2xl text-center font-bold p-5">FABINCCI</h2>
          <p className="lg:text-base text-xs p-5">
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
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Fabincci);
