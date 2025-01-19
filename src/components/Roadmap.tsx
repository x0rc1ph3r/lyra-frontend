import React from "react";
import HeroBg from "../assets/slide-bg.jpg";
// import HeroImage from "../assets/roadmap.webp";
import PawPrint from "../assets/paw-print.png";
// import Widget from "./Widget";
import RoadmapText from "../assets/roadmap-text.png";
import RafleContest from "../assets/raflecontest.png";
import Roadmap from "../assets/roadmap.png";

const Hero = () => {
  return (
    <div className="max-md:bg-primary" id="roadmap">
      <div className="relative w-full md:min-h-screen">
        <div className="absolute inset-0 w-full h-full max-md:hidden">
          <img src={HeroBg} alt="Hero background" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12 md:min-h-screen max-md:py-5">
          {/* Widget Section */}
          {/* <div className="flex-shrink-0 max-md:hidden">
            <Widget />
          </div> */}
          {/* <div className="flex-1 relative">
            <img
              src={RoadmapText}
              alt="Hero background"
              className="max-w-[250px] md:max-w-[350px] w-auto mx-auto md:mx-0"
            />
            <div className="flex justify-center flex-wrap gap-1 md:gap-2 mt-5 max-w-[700px]">
              {[
                {
                  title: "Phase 1: The Beginning",
                  items: [
                    "Website Goes Live",
                    "Contract Gets Written",
                    "Social Channels Are Born",
                    "Community Building",
                    "Presale Starts",
                  ],
                },
                {
                  title: "Phase 2: Development",
                  items: [
                    "Developing the Liger wallet platform",
                    "Presale Ends",
                    "Listing on Raydium",
                  ],
                },
                {
                  title: "Phase 3: Awareness",
                  items: [
                    "Huge Marketing Campaign",
                    "Liger listing on CoinMarketCap and CoinGecko",
                  ],
                },
                {
                  title: "Phase 4: Expansion",
                  items: [
                    "Start Launch swap platform",
                    "Start staking program",
                    "Start liquidity pool",
                    "Start Liger Blockchain Development",
                  ],
                },
                {
                  title: "Phase 5: Cosmic Travel",
                  items: [
                    "Launching Liger Blockchain",
                  ],
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 bg-[#fe7a13] p-4 rounded-lg min-w-[250px] w-full max-w-[300px]"
                >
                  <h1 className="text-white font-gs-b md:text-2xl">
                    {phase.title}
                  </h1>
                  <ul>
                    {phase.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-white font-gs-b flex gap-2 items-start text-[12px] md:text-sm"
                      >
                        <img
                          src={PawPrint}
                          alt="Paw print icon"
                          className="max-w-[15px] mb-1"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div> */}
          <div className="flex-1">
          <img
              src={RoadmapText}
              alt="Hero background"
              className="max-w-[250px] md:max-w-[350px] w-auto mx-auto md:mx-0"
            />
            <img
              src={Roadmap}
              alt="Raffle Contest"
              className="max-w-[300px] md:max-w-[500px] mt-4 mx-auto md:mx-0"
            />
          </div>
          <div>
            <img
              src={RafleContest}
              alt="Raffle Contest"
              className="max-w-[300px] md:max-w-[500px] mt-4 mx-auto md:mx-0 border-[5px] rounded border-black"
            />
          </div>
          {/* <div className="max-md:hidden">
            <img
              src={HeroImage}
              alt="Hero background"
              className="max-w-[450px] mx-auto"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
