import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
// var $ = require("jquery");

// declare global {
//   interface Window {
//     $: any;
//     jQuery: any;
//   }
// }

// if (typeof window !== "undefined") {
//   window.$ = window.jQuery = require("jquery");
// }
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // const goToSlide = (index: number) => {
  //   if (typeof window !== "undefined") {
  //     const owl = $(".owl-carousel"); // Ensure jQuery is only available on the client
  //     owl.trigger("to.owl.carousel", [index, 300]); // Navigate to the slide
  //   }
  // };

  // useEffect(() => {
  //   // Ensure jQuery is only available on the client side
  //   if (typeof window !== "undefined") {
  //     const $ = require("jquery");
  //     window.$ = window.jQuery = $;
  //   }
  // }, []);

  return (
    <div className="relative flex items-center justify-between p-2 px-7 w-full bg-[#ffcc02]">
      <div className="relative h-auto">
        <img
          src={Logo}
          alt="Logo"
          className="rounded-none shadow-none max-w-[140px]"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="text-black flex-1 hidden md:flex items-center justify-center gap-6 font-gs-eb">
        <a
          className="text-[18px] px-2 rounded-lg hover:text-white hover:bg-[#fe7a13] cursor-pointer"
          href="#home"
        >
          Home
        </a>
        <a
          className="text-[18px] px-2 rounded-lg hover:text-white hover:bg-[#fe7a13] cursor-pointer"
          href="#about"
        >
          About
        </a>
        <a
          className="text-[18px] px-2 rounded-lg hover:text-white hover:bg-[#fe7a13] cursor-pointer"
          href="#tokenomics"
        >
          Tokenomics
        </a>
        <a
          className="text-[18px] px-2 rounded-lg hover:text-white hover:bg-[#fe7a13] cursor-pointer"
          href="#roadmap"
        >
          Roadmap
        </a>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button onClick={toggleDrawer} className="text-2xl focus:outline-none">
          {isDrawerOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Drawer for Mobile */}
      <div
        className={`text-black fixed top-0 left-0 w-2/3 h-full bg-[#ffcc02] p-4 z-40 transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-4  font-gs-eb">
          <a
            className="text-[18px] px-2 rounded-lg hover:text-white hover:bg-[#fe7a13] cursor-pointer"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-[18px] px-2 rounded-lg hover:text-white hover:bg-[#fe7a13] cursor-pointer"
            href="#about"
          >
            About
          </a>
          <a
            className="text-[18px] px-2 rounded-lg hover:text-white hover:bg-[#fe7a13] cursor-pointer"
            href="#tokenomics"
          >
            Tokenomics
          </a>
          <a
            className="text-[18px] px-2 rounded-lg hover:text-white hover:bg-[#fe7a13] cursor-pointer"
            href="#roadmap"
          >
            Roadmap
          </a>
          <div className="flex justify-evenly">
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
          <a
            href="https://solscan.io/token/J4DHQpNE1LZ79wV2TuQsR64oAhwbE3pAJh5YHej5QQ9m"
            target="_blank"
            className="bg-black text-white text-center hover:bg-opacity-70 min-w-[130px] py-2.5 rounded-full uppercase font-gs-b text-xl"
          >
            Contract
          </a>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <ul className="flex gap-2 text-lg">
          <li>
            <a
              href="https://t.me/ligeroffical"
              target="_blank"
              className="bg-black p-2.5 rounded-lg hover:bg-opacity-70 cursor-pointer block"
            >
              <FaTelegramPlane size={24} color="#fff" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ligerofficial5"
              target="_blank"
              className="bg-black p-2.5 rounded-lg hover:bg-opacity-70 cursor-pointer block"
            >
              <RiTwitterXFill size={24} color="#fff" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ligerofficial5/"
              target="_blank"
              className="bg-black p-2.5 rounded-lg hover:bg-opacity-70 cursor-pointer block"
            >
              <AiFillInstagram size={24} color="#fff" />
            </a>
          </li>
        </ul>
        <a
          href="https://solscan.io/token/J4DHQpNE1LZ79wV2TuQsR64oAhwbE3pAJh5YHej5QQ9m"
          target="_blank"
          className="bg-black text-white text-center hover:bg-opacity-70 min-w-[130px] py-2.5 rounded-full uppercase font-gs-b text-xl"
        >
          Contract
        </a>
      </div>
    </div>
  );
};

export default Navbar;
