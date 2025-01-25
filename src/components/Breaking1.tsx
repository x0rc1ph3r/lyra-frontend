import React from "react";
import Marquee from "react-fast-marquee";
import PawPrint from "../assets/lyra.jpg";

const Breaking = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b-[3px] border-gray-700 border-t-[3px] p-2 flex items-center">
      <div className="relative w-full">
        {/* Glassmorphism Effect */}
        <div className="absolute inset-0 w-full h-full bg-black/20 backdrop-blur-md"></div>
        {/* Marquee Content */}
        <Marquee gradient={false} className="relative z-10">
          <p className="inline text-purple-300 font-gs-b text-3xl mx-4">
            {" "}LYRA Presale live
          </p>
          <img
            src={PawPrint}
            alt="Paw print icon"
            className="rounded-full border-2 border-purple-300 shadow-lg max-w-[50px] mx-10"
          />
          <p className="inline text-purple-300 font-gs-b text-3xl mx-4">
            {" "}LYRA Presale live
          </p>
          <img
            src={PawPrint}
            alt="Paw print icon"
            className="rounded-full border-2 border-purple-300 shadow-lg max-w-[50px] mx-10"
          />
          <p className="inline text-purple-300 font-gs-b text-3xl mx-4">
            {" "}LYRA Presale live
          </p>
          <img
            src={PawPrint}
            alt="Paw print icon"
            className="rounded-full border-2 border-purple-300 shadow-lg max-w-[50px] mx-10"
          />
          <p className="inline text-purple-300 font-gs-b text-3xl mx-4">
            {" "}LYRA Presale live
          </p>
          <img
            src={PawPrint}
            alt="Paw print icon"
            className="rounded-full border-2 border-purple-300 shadow-lg max-w-[50px] mx-10"
          />
          <p className="inline text-purple-300 font-gs-b text-3xl mx-4">
            {" "}LYRA Presale live
          </p>
          <img
            src={PawPrint}
            alt="Paw print icon"
            className="rounded-full border-2 border-purple-300 shadow-lg max-w-[50px] mx-10"
          />
          <p className="inline text-purple-300 font-gs-b text-3xl mx-4">
            {" "}LYRA Presale live
          </p>
          <img
            src={PawPrint}
            alt="Paw print icon"
            className="rounded-full border-2 border-purple-300 shadow-lg max-w-[50px] mx-10"
          />
          <p className="inline text-purple-300 font-gs-b text-3xl mx-4">
            {" "}LYRA Presale live
          </p>
          <img
            src={PawPrint}
            alt="Paw print icon"
            className="rounded-full border-2 border-purple-300 shadow-lg max-w-[50px] mx-10"
          />
          <p className="inline text-purple-300 font-gs-b text-3xl mx-4">
            {" "}LYRA Presale live
          </p>
          <img
            src={PawPrint}
            alt="Paw print icon"
            className="rounded-full border-2 border-purple-300 shadow-lg max-w-[50px] mx-10"
          />
        </Marquee>
      </div>
    </div>
  );
};

export default Breaking;
