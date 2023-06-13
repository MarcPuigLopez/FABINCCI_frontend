import React from "react";

import { motion } from "framer-motion";

import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsTwitter, BsPinterest } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiTwitch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Contact = (props, ref) => {
  return (
    <div ref={ref} className="lg:h-[84vh] h-screen w-screen font-Roboto">
      {/* <div>
        <h1 className="font-press-start p-5 text-7xl font-bold text-white text-center text-shadow-lg shadow-gray-700">
          CONTACTA CON NOSOTROS
        </h1>
      </div> */}
      <div className="flex flex-col p-10 mx-auto justify-center items-center">
        <motion.h1
          className="md:text-5xl text-center text-3xl font-bold text-white pt-6"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 3,
          }}
        >
          {" "}
          ¡CONTACTA CON NOSOTROS!
        </motion.h1>
        <div className="h-1/2">.</div>
        <motion.div
          className=""
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 2,
          }}
        >
          <ul
            className=" grid grid-cols-3 rotate-45
                        lg: md:h-84 h-64
                        lg: md:w-84 w-70"
          >
            <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45"></li>

            <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45"></li>

            <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
              <Link to="https://www.instagram.com/fabincci_barber/">
                <AiFillInstagram />
              </Link>
            </li>

            <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45"></li>

            <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
              {/* <Link to="" target="_blank">
                <BsTwitter />
              </Link> */}
            </li>

            <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
              {/* <AiFillFacebook /> */}
              <Link to="" target="_blank">
                <FiTwitch />
              </Link>
            </li>

            <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
              {/* <BsPinterest /> */}
              <Link
                to="https://www.youtube.com/@fabinccibarber"
                target="_blank"
              >
                <AiFillYoutube />
              </Link>
            </li>

            <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
              {/* <AiFillLinkedin /> */}
              <Link
                to="https://www.tiktok.com/@fabincci?is_from_webapp=1&sender_device=pc"
                target="_blank"
              >
                <FaTiktok />
              </Link>
            </li>

            <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
              <Link to="" target="_blank">
                <AiOutlineWhatsApp />
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default React.forwardRef(Contact);
