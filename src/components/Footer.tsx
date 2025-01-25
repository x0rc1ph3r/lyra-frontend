import React from "react"
import liger from "../assets/lyra.jpg"
import { AiFillInstagram } from "react-icons/ai"
import { RiTwitterXFill } from "react-icons/ri"
import { FaTelegramPlane } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 pt-24 text-gray-300">
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px]"
        >

        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-12">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <img
              src={liger || "/placeholder.svg"}
              alt="Logo"
              className="w-full rounded-full border-4 border-gray-700 shadow-lg max-w-[150px]"
            />
            <span className="text-white text-6xl md:text-7xl font-bold font-gs-eb tracking-wider">LYRA</span>
          </div>
          <div className="w-full max-w-2xl">
            <p className="text-gray-400 text-center text-balance text-lg mb-6">
              Empowering the future of decentralized finance. Join us in reshaping the financial landscape.
            </p>
            <div className="flex justify-center gap-6 py-4">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer block"
              >
                <RiTwitterXFill size={24} color="#fff" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer block"
              >
                <AiFillInstagram size={24} color="#fff" />
              </a>
              <a
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-all duration-300 cursor-pointer block"
              >
                <FaTelegramPlane size={24} color="#fff" />
              </a>
            </div>
          </div>
          <div className="text-gray-500 text-center text-sm border-t border-gray-800 pt-6 pb-8 w-full">
            Copyright © 2025 LYRA. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

