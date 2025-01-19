import React from "react";
import Marquee from "react-fast-marquee";
import PawPrint from "../assets/liger.png";

const Breaking = () => {
  return (
    <div className="relative bg-[#ed323d] border-b-[3px] border-black border-t-[3px] p-1.5 px-6 flex items-center">
      <Marquee>
        <p className="inline text-white font-gs-b text-3xl">
            {" "} Buy Liger

        </p>
        <img
          src={PawPrint}
          alt="Paw print icon"
          className="max-w-[50px] mx-20"
        />
        <p className="inline text-white font-gs-b text-3xl">
            {" "} Buy Liger

        </p>
        <img
          src={PawPrint}
          alt="Paw print icon"
          className="max-w-[50px] mx-20"
        />
        <p className="inline text-white font-gs-b text-3xl">
            {" "} Buy Liger

        </p>
        <img
          src={PawPrint}
          alt="Paw print icon"
          className="max-w-[50px] mx-20"
        />
        <p className="inline text-white font-gs-b text-3xl">
            {" "} Buy Liger

        </p>
        <img
          src={PawPrint}
          alt="Paw print icon"
          className="max-w-[50px] mx-20"
        />
        <p className="inline text-white font-gs-b text-3xl">
            {" "} Buy Liger

        </p>
        <img
          src={PawPrint}
          alt="Paw print icon"
          className="max-w-[50px] mx-20"
        />      
      </Marquee>
    </div>
  );
};

export default Breaking;
