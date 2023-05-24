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
      className="bg-[url('assets/images/FONDO5.png')] bg-cover bg-center bg-no-repeat h-[84vh] w-contact-width"
    >
      <div>
        <h1 className="font-press-start p-5 text-7xl font-bold text-white text-center text-shadow-lg shadow-gray-700">
          CONTACTA CON NOSOTROS
        </h1>
      </div>
      <div className="flex flex-col p-10 mx-auto justify-center items-center">
        <ul className="bg-black p-5 grid grid-cols-3 rounded-xl shadow-xl border-t border-r w-1/5">
          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125">
            <AiFillInstagram />
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125">
            <FaTiktok />
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125">
            <BsTwitter />
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125">
            <FiTwitch />
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125">
            <AiFillYoutube />
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125">
            <AiFillFacebook />
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125">
            <BsPinterest />
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125">
            <AiFillLinkedin />
          </li>

          <li className="flex m-3 p-3 font-black text-5xl text-white transition hover:-translate-y-1 hover:scale-125">
            <AiOutlineWhatsApp />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.forwardRef(Contact);
