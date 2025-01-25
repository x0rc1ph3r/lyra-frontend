import React from "react";
import AboutText from "../assets/about-text.png";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black" id="about">
      <div className="relative w-full md:min-h-screen">
        {/* Background gradient with purple effect */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-700 via-gray-900 to-black opacity-30"></div>

        {/* Main content */}
        <div className="relative z-10 max-w-[1200px] mx-auto flex justify-center flex-col md:flex-row md:min-h-screen items-center gap-6 max-md:py-5">
          {/* Text and Image Section */}
          <div className="flex-1 text-center md:text-left relative">
            {/* About Text Image */}
            <img
              src={AboutText || "/placeholder.svg"}
              alt="About Text"
              className="max-w-[300px] md:max-w-[400px] w-auto mx-auto md:mx-0 mb-6 animate-fadeIn"
            />

            {/* Paragraph Section */}
            <p className="text-gray-300 max-w-[90%] md:max-w-[700px] font-gs text-lg md:text-xl mt-4 mx-auto md:mx-0 leading-relaxed">
              In the playful world of digital currencies, where community and creativity shine, Lyra emerges as a
              heartwarming favorite, inspired by the charm of a fluffy dog. Just like a loyal companion, Lyra embodies
              trust, energy, and fun in the blockchain space. With a strong foundation and a lighthearted spirit, Lyra
              aims to bring joy to the crypto jungle, offering investors and enthusiasts a chance to be part of an
              exciting and engaging ecosystem. Swap SOL for $LYRA, directly in your wallet. There is no tax to buy, so
              you don't need to worry about buying with a specific slippage, although you may.
            </p>
          </div>
        </div>

        {/* Decorative Overlay for Better Design */}
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default About;
