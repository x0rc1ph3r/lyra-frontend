import React from "react";
import Marquee from "react-fast-marquee";
import PawPrint from "../assets/lyra.jpg";

const Breaking = () => {
  return (
    <div className="bg-[#1a1a1a] border-b-[3px] border-gray-800 border-t-[3px] p-1.5 px-6 flex items-center">
      <Marquee>
        <p className="inline text-gray-300 font-gs-b text-2xl">
          Lyra is a fluffy dog-inspired Solana token, brimming with playful vibes!
        </p>
        <img
          src={PawPrint}
          alt="Paw print icon"
          className="rounded-full border-2 border-gray-500 shadow-none max-w-[50px] mx-10"
        />
        <p className="inline text-gray-300 font-gs-b text-2xl">
          A token so fluffy, even bears can’t resist!
        </p>
        <img
          src={PawPrint}
          alt="Paw print icon"
          className="rounded-full border-2 border-gray-500 shadow-none max-w-[50px] mx-10"
        />
        <p className="inline text-gray-300 font-gs-b text-2xl">
          Lyra is a fluffy dog-inspired Solana token, brimming with playful vibes!
        </p>
        <img
          src={PawPrint}
          alt="Paw print icon"
          className="rounded-full border-2 border-gray-500 shadow-none max-w-[50px] mx-10"
        />
        <p className="inline text-gray-300 font-gs-b text-2xl">
          A token so fluffy, even bears can’t resist!
        </p>
        <img
          src={PawPrint}
          alt="Paw print icon"
          className="rounded-full border-2 border-gray-500 shadow-none max-w-[50px] mx-10"
        />
        <p className="inline text-gray-300 font-gs-b text-2xl">
          Lyra is a fluffy dog-inspired Solana token, brimming with playful vibes!
        </p>
        <img
          src={PawPrint}
          alt="Paw print icon"
          className="rounded-full border-2 border-gray-500 shadow-none max-w-[50px] mx-10"
        />
        <p className="inline text-gray-300 font-gs-b text-2xl">
          A token so fluffy, even bears can’t resist!
        </p>
        <img
          src={PawPrint}
          alt="Paw print icon"
          className="rounded-full border-2 border-gray-500 shadow-none max-w-[50px] mx-10"
        />
      </Marquee>
    </div>
  );
};

export default Breaking;
