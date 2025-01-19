import React from "react";
import liger from "../assets/logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative bg-primary">
      <div className="flex justify-center">
        <img className="w-full max-w-[350px]" src={liger} alt="" />
      </div>
      <div className="text-black text-center text-balance">
        Copyright © 2024 liger.life. All Rights Reserved
      </div>

      <div className="flex justify-center gap-2 py-4">
        <a
          href="https://t.me/ligeroffical"
          target="_blank"
          className="bg-black p-2.5 rounded-lg hover:bg-opacity-70 cursor-pointer block"
        >
          <FaTelegramPlane size={24} color="#fff" />
        </a>
        <a
          href="https://x.com/ligerofficial5"
          target="_blank"
          className="bg-black p-2.5 rounded-lg hover:bg-opacity-70 cursor-pointer block"
        >
          <RiTwitterXFill size={24} color="#fff" />
        </a>
        <a
          href="https://www.instagram.com/ligerofficial5/"
          target="_blank"
          className="bg-black p-2.5 rounded-lg hover:bg-opacity-70 cursor-pointer block"
        >
          <AiFillInstagram size={24} color="#fff" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
