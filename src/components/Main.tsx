import React from "react";
import Navbar from "./Navbar";
import Breaking from "./Breaking";
import Home from "./HomeSection";
import About from "./About";
import Tokenomics from "./Tokenomics";
import Roadmap from "./Roadmap";
import Footer from "./Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <Breaking />
      <Home />
      <About />
      <Tokenomics />
      <Footer />
    </>
  );
};

export default Main;
