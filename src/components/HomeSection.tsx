import React from "react";
import HeroBg from "../assets/slide-bg.jpg";
import HeroImage from "../assets/home.gif";
import Liger from "../assets/lyra_png.png";
import Widget from "./Widget";
import LigerText from "../assets/lyra_png.png";
// import SolidProf from "../assets/solid-proof.png";

const Hero = () => {
  return (
    <div className="relative w-full md:min-h-screen text-white bg-[radial-gradient(ellipse_at_left,_rgba(128,90,213,0.6)_20%,_rgba(0,0,0,1)_50%)]" id="home">
      <div className="relative w-full md:min-h-screen">
        {/* Background Image */}
        {/* <div className="absolute inset-0 w-full h-full max-md:hidden">
          <img
            src={HeroBg}
            alt="Hero background"
            className="object-cover w-full h-full opacity-30"
          />
        </div> */}

        <div className="relative z-10 container flex flex-col md:flex-row items-center gap-8 md:gap-12 md:min-h-screen max-md:py-6">
          {/* Widget Section */}
          <div className="flex-shrink-0 max-md:w-[90vw]">
            <Widget />
          </div>

          {/* Text and Phases Section */}
          <div className="flex-1 relative text-center md:text-left">
            <div className="flex mt-20 items-center justify-between max-w-[700px]">
              <img
                src={LigerText}
                alt="Liger Text"
                className="max-w-[200px] md:max-w-[340px] mx-auto md:mx-0 animate-fadeIn"
              />
              {/* <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl min-w-[200px]">
                <a
                  href="/liger-pdf.pdf"
                  target="_blank"
                  className="block text-center cursor-pointer w-full p-2 rounded-xl font-gs-eb text-white hover:opacity-90"
                >
                  Token Audit
                </a>
                <div className="p-1 flex justify-center">
                  <img
                    src={SolidProf}
                    alt="Solid Proof"
                    className="max-w-[120px] mx-auto md:mx-0"
                  />
                </div>
              </div> */}
            </div>
            <p className="text-gray-300 max-w-[1200px] md:max-w-[550px] font-gs text-lg md:text-xl mt-4 mx-auto md:mx-0 leading-relaxed">
              Lyra is a playful cryptocurrency designed to bring fun and community spirit to the fast-paced world of decentralized finance (DeFi). This digital asset captures the charm of meme culture while leveraging the speed and efficiency of Solana, creating a seamless and engaging experience for users.
            </p>

            {/* Phases */}
            {/* <div className="flex flex-wrap justify-center md:justify-start gap-5 mt-5 max-w-[600px]">
              {[
                { phase: "Phase 1", price: "0.035$" },
                { phase: "Phase 2", price: "0.05$" },
                { phase: "Phase 3", price: "0.08$" },
                { phase: "Launch Price", price: "0.12$" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-gradient-to-r from-orange-500 to-yellow-500 p-6 rounded-lg min-w-[250px] md:min-w-[280px] shadow-lg"
                >
                  <div>
                    <img
                      src={Liger}
                      alt={`${item.phase} icon`}
                      className="max-w-[50px] md:max-w-[70px] transform scale-x-[-1]"
                    />
                  </div>
                  <div>
                    <p className="text-white font-gs-b text-lg md:text-2xl">
                      {item.phase}
                    </p>
                    <p className="text-gray-900 font-gs-eb text-xl md:text-3xl">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Hero Image */}
            {/* <div className="max-md:hidden">
              <img
                src={HeroImage}
                alt="Hero Image"
                className="w-full max-w-[400px] mt-20 absolute -right-16 top-24"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
