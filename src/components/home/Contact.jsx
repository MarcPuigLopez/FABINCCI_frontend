import React from "react";

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

const Contact = (props, ref) => {
  return (
    <div
      ref={ref}
      className="h-[84vh] w-contact-width font-Roboto"
    >
      {/* <div>
        <h1 className="font-press-start p-5 text-7xl font-bold text-white text-center text-shadow-lg shadow-gray-700">
          CONTACTA CON NOSOTROS
        </h1>
      </div> */}
      <div className="flex flex-col p-10 mx-auto justify-center items-center">
        <h1 className="text-5xl font-bold text-white pt-3"> ¡CONTACTA CON NOSOTROS!</h1>
        <ul className="grid grid-cols-3 w-84 h-84 rotate-45 m-40">
          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
            <AiFillInstagram />
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
            <BsTwitter />
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
            <FiTwitch />
            {/* <AiFillFacebook /> */}
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
            <AiFillYoutube />
            {/* <BsPinterest /> */}
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
            {/* <AiFillLinkedin /> */}
            <FaTiktok />
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125 -rotate-45">
            <AiOutlineWhatsApp />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.forwardRef(Contact);
