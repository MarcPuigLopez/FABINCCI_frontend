import React from "react";

import { motion } from "framer-motion";

import Video1 from "../../assets/videos/AboutUsVideo1.mp4";
import Video2 from "../../assets/videos/AboutUsVideo2.mp4";
import Video3 from "../../assets/videos/AboutUsVideo3.mp4";

const AboutUs = (props, ref) => {
  return (
    <motion.div
      ref={ref}
      className="bg-[url('assets/images/FONDO1.jpg')] bg-contain h-[84vh] w-screen"
    >
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
        SOBRE NOSOTROS
      </motion.h1>
      <div className="flex">
        <div className="w-welcome-width h-[80vh] relative aspect-auto flex justify-between mr-20 ml-10 mt-1">
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

          {/* Text 1 */}
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
            <h2 className="p-2 text-4xl font-bold text-white text-center">
              {" "}
              HOLA MUNDO{" "}
            </h2>
            <p className="pt-5 text-white text-justify">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              velit a nisl sagittis hendrerit. Vivamus quis lectus mollis,
              gravida justo quis, lobortis velit. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. In eleifend nibh cursus tincidunt
              vestibulum. Pellentesque luctus nulla ut condimentum sodales.
              Suspendisse tortor lectus, maximus non est eget, scelerisque
              ultrices est. Phasellus ut pretium sapien. Nullam fringilla, nunc
              nec auctor efficitur, erat metus consequat leo, vitae ornare
              sapien magna vel lorem.
            </p>
          </motion.div>

          {/* Cadro y video 2 */}
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

          {/* Text 2 */}
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
            <h2 className="p-2 text-4xl font-bold text-white text-center">
              {" "}
              HOLA MUNDO{" "}
            </h2>
            <p className="pt-5 text-white text-justify">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
              velit a nisl sagittis hendrerit. Vivamus quis lectus mollis,
              gravida justo quis, lobortis velit. Interdum et malesuada fames ac
              ante ipsum primis in faucibus. In eleifend nibh cursus tincidunt
              vestibulum. Pellentesque luctus nulla ut condimentum sodales.
              Suspendisse tortor lectus, maximus non est eget, scelerisque
              ultrices est. Phasellus ut pretium sapien. Nullam fringilla, nunc
              nec auctor efficitur, erat metus consequat leo, vitae ornare
              sapien magna vel lorem.
            </p>
          </motion.div>

          {/* Cadro y video 3 */}
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
    </motion.div>
  );
};

export default React.forwardRef(AboutUs);
