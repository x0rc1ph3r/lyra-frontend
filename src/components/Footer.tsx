import React from "react";
import liger from "../assets/lyra.jpg";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative bg-primary">
      <div className="flex justify-center">
        <div className="flex items-center space-x-4">
          <img
            src={liger}
            alt="Logo"
            className="w-full rounded-full border-2 border-white shadow-none max-w-[180px]"
          />
          <span className="text-white text-7xl font-bold font-gs-eb">LYRA</span>
        </div>
      </div>
      <div className="text-black text-center text-balance">
        Copyright © 2025 LYRA. All Rights Reserved
      </div>

      <div className="flex justify-center gap-2 py-4">
        <a
          href="https://x.com/"
          target="_blank"
          className="bg-black p-2.5 rounded-lg hover:bg-opacity-70 cursor-pointer block"
        >
          <RiTwitterXFill size={24} color="#fff" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
