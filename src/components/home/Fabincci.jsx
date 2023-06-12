import React from "react";
import { motion } from "framer-motion";

const Fabincci = (props, ref) => {
  return (
    <div ref={ref} className="lg:h-[84vh] w-screen flex ">
      <div className="grid grid-cols-5 w-screen">
        {/* TEXTO 1 */}
        <div className="bg-white bg-opacity-80 col-start-2 drop-shadow-2xl rounded-xl mt-32 mb-64 -ml-20 mr-28 text-black text-shadow-lg shadow-gray-700 font-Roboto">
          <h2 className="text-2xl font-bold p-5">FABINCCI</h2>
          <p className="text-lg p-5"> hola</p>
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
        <div className="bg-black col-start-4 drop-shadow-2xl rounded-xl mt-32 mb-64 -mr-20 ml-28 text-white text-shadow-lg shadow-gray-700 font-Roboto">
          <h2 className="text-2xl font-bold p-5">FABINCCI</h2>
          <p className="text-lg p-5"> hola</p>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Fabincci);
