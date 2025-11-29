"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard.jsx";
import SectionHead from "./SectionHead";
import { ReactData } from "../data/WorkData.jsx";

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  const visibleProjects = showAll ? ReactData : ReactData.slice(0, 3);

  return (
    <section
      id="portfolio"
      className="relative bg-[#0D1224] text-white px-4 md:px-12 py-10 font-montserrat overflow-hidden scroll-mt-[80px]"
    >
      <div
        className="absolute top-0 left-0 w-full h-full min-h-screen z-0 bg-no-repeat bg-cover bg-center bg-blend-overlay"
        style={{
          backgroundImage: `url('https://abusaid.netlify.app/hero.svg')`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHead>My Projects</SectionHead>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
          initial={{ opacity: 0 }}
          whileInView={fade}
        >
          {visibleProjects.map((project, index) => (
            <WorkCard key={index} w={project} index={index} />
          ))}
        </motion.div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-all font-semibold"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
