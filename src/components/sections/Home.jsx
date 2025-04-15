import React from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import PortfolioSlider from "./PortfolioSlider";

export const Home = () => {
  return (
    <section
      id="home"
      // Use flex-col so everything stacks vertically
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white"
    >
      {/* Intro / Hero Section */}
      <RevealOnScroll>
        <div className="text-center px-4 my-8">
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Remneet Brar.
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I’m a geospatial analyst who loves turning complex spatial data into powerful insights. 
            My passion is crafting detailed maps and streamlining data workflows...
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59.130,246,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59.130,246,246,0.4)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Slider Below Intro */}
      <div className="w-full max-w-6xl px-4 pb-10">
        <PortfolioSlider />
      </div>
    </section>
  );
};

export default Home;
