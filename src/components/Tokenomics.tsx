import React from "react";
import HeroBg from "../assets/slide-bg.jpg";
import HeroImage from "../assets/tokenomics.gif";
import TokenomicsText from "../assets/tokenomics-text.png";
import TokenomicsImage from "../assets/tokenomics.png";
// import Widget from "./Widget";
import { PieChart } from "react-minimal-pie-chart";

const Hero = () => {
  return (
    <div className="relative w-full md:min-h-screen text-white bg-[radial-gradient(circle_at_right,_rgba(128,90,213,0.6)_20%,_rgba(0,0,0,1)_50%)]" id="tokenomics">
      <div className="relative w-full md:min-h-screen">
        {/* Background Image */}
       

        <div className="relative z-10 max-w-[1100px] max-md:max-w-[90vw] mx-auto flex flex-col md:flex-row items-center gap-6 md:min-h-screen max-md:py-5">
          {/* Widget Section */}
          {/* <div className="flex-shrink-0 max-md:hidden">

            <Widget />
          </div> */}

          {/* Tokenomics Section */}
          <div className="flex-[2] text-center md:text-left relative">
            <img
              src={TokenomicsText}
              alt="Tokenomics"
              className="max-w-[250px] md:max-w-[350px] w-auto mx-auto md:mx-0"
            />

            <p className="text-gray-300 max-w-[90%] md:max-w-[550px] font-gs text-lg md:text-xl my-4 mx-auto md:mx-0">
              LYRA has a total supply of 1,000,000,000 tokens. The $LYRA token
              is minted on SOLANA and is unique in that it can also be claimed,
              stored, and traded on Solana.
            </p>

            <div className="flex flex-col gap-4 items-center justify-center md:justify-start max-w-[600px]">
              <div className="">
                {/* <img
                  src={TokenomicsImage}
                  alt="Hero background"
                  className="max-w-[250px] md:max-w-[300px] w-auto mx-auto"
                /> */}

                {/* <PieChart
                  lineWidth={60}
                  data={[
                    { title: "Public Sale", value: 45, color: "#D82424" },
                    { title: "Liquidity", value: 42, color: "#C11A1A" },
                    { title: "Marketing", value: 6, color: "#640606" },
                    { title: "Team & Advisors", value: 5, color: "#F57900" },
                    { title: "Airdrops", value: 2, color: "#B45901" },
                  ]}
                  label={({ dataEntry }) =>
                    `${Math.round(dataEntry.percentage)}%`
                  }
                  labelStyle={{
                    fontSize: "6px",
                    fontFamily: "sans-serif",
                    fill: "#fff",
                  }}
                  labelPosition={70}
                /> */}
              </div>

              <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                {[
                  { title: "Public Sale", value: "45%", color: "#D82424" },
                  {
                    title: "Exchange Liquidity",
                    value: "42%",
                    color: "#C11A1A",
                  },
                  { title: "Marketing", value: "6%", color: "#640606" },
                  { title: "Team & Advisors", value: "5%", color: "#F57900" },
                  { title: "Airdrops", value: "2%", color: "#B45901" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col justify-center items-center gap-2 p-2 rounded-lg shadow-md`}
                    style={{ backgroundColor: item.color }}
                  >
                    <h1 className="text-white font-gs-b text-2xl md:text-3xl">
                      {item.value}
                    </h1>
                    <p className="text-white font-gs-eb text-lg md:text-2xl">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="max-md:hidden flex-1">
            <img
              src={TokenomicsImage}
              alt="Hero Image"
              className="w-full md:min-w-[500px] max-md:hidden"
            />
          </div>

          {/* Hero Image */}
          {/* <div className="mt-5 md:mt-0">
            <Image
              src={HeroImage}
              alt="Hero Image"
              quality={100}
              className="min-w-[350px] mx-auto"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
