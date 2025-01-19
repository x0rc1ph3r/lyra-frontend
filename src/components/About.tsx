import React from "react";
import HeroBg from "../assets/slide-2.jpg";
import HeroImage from "../assets/about.gif";
import AboutText from "../assets/about-text.png";
// import RafleContest from "../assets/raflecontest.png";

const Hero = () => {
  return (
    <div className="bg-[#b8d2c0] max-md:bg-primary" id="about">
      <div className="relative w-full md:min-h-screen">
        <div className="absolute inset-0 w-full h-full max-md:hidden">
          <img src={HeroBg} alt="Hero background" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto flex justify-center flex-col md:flex-row md:min-h-screen items-center gap-6 max-md:py-5">
          <div className="flex-1 text-center md:text-left relative ">
            <img
              src={AboutText}
              alt="About Text"
              className="max-w-[250px] md:max-w-[350px] w-auto mx-auto md:mx-0"
            />
            <p className="text-black max-w-[90%] md:max-w-[700px] font-gs text-lg md:text-xl mt-4 mx-auto md:mx-0">
              In the wild world of digital currencies, where innovation and
              adaptability reign supreme, Liger emerges as a distinctive player,
              blending the strength of a lion with the agility of a tiger Just
              like the legendary Liger, which combines the best traits of both
              lions and tigers, Liger cryptocurrency embodies versatility and
              potency in the blockchain realm. With a robust infrastructure and
              a visionary approach, Liger seeks to carve its path through the
              jungle of cryptocurrencies, offering investors and enthusiasts a
              unique opportunity to participate in a dynamic and evolving
              ecosystem. Swap SOL for $LIGER, directly in your wallet. There is
              no tax to buy, so you don’t need to worry about buying with a
              specific slippage, although you may.
            </p>
          </div>
          <img
            src={HeroImage}
            alt="Hero Image"
            className="w-full max-w-[450px] max-md:hidden absolute -right-32"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
