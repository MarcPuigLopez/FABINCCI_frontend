import React from "react";
import { motion } from "framer-motion";

const Fabincci = (props, ref) => {
  return (
    <div ref={ref} className="lg:h-[84vh] w-screen flex ">
      <div className="grid grid-cols-5 w-screen">
        {/* TEXTO 1 */}
        <div
          className="col-start-2 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md 
                          border border-white border-opacity-30 drop-shadow-2xl
                          mt-36 mb-60 -ml-20 mr-28 text-white text-shadow-lg 
                          shadow-gray-700 font-Roboto text-justify"
        >
          <h2 className="text-2xl text-center font-bold p-5">FABINCCI</h2>
          <p className="text-lg p-5">
            {" "}
            En nuestro estudio, no solo ofrecemos cortes de cabello
            excepcionales, sino que también queremos transmitir nuestra pasión y
            compromiso hacia esta profesión.
            <br />
            <br />
            Nos enorgullece poder ayudar a nuestros clientes a encontrar el
            corte perfecto que se adapte a sus necesidades diarias. Sabemos lo
            importante que es lucir y sentirse bien, y nuestro objetivo es
            elevar el estado de ánimo de cada persona que pase por nuestra
            barbería.
          </p>
        </div>
        {/* TITULO */}
        <div className="col-start-3 justify-center">
          <motion.h1
            className="text-8xl font-bold text-white pt-6 p-5 text-shadow-lg shadow-gray-700 font-Roboto"
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

          {/* TEXTO 2 */}
        </div>
        <div
          className="col-start-4 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md 
                        border border-white border-opacity-30 drop-shadow-2xl
                        mt-36 mb-60 -mr-20 ml-28 text-white text-shadow-lg 
                        shadow-gray-700 font-Roboto text-justify"
        >
          <h2 className="text-2xl text-center font-bold p-5">FABINCCI</h2>
          <p className="text-lg p-5">
            Además de ofrecer servicios de barbería excepcionales, también nos
            apasiona compartir conocimientos y consejos sobre el cuidado del
            cabello y el estilo.
            <br />
            <br />
            Gracias por visitar nuestra página principal y esperamos recibirte
            pronto en nuestra barbería. ¡Déjanos ayudarte a expresar tu estilo y
            alcanzar la confianza que te permitirá brillar en todos los aspectos
            de tu vida!
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Fabincci);
