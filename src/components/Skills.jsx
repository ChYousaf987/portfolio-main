"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHead from "./SectionHead";

const skillsData = {
  All: [
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
    },
    {
      name: "Next.js",
      img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
    },

    {
      name: "Redux",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "TailwindCSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "MongoDB",
      img: "https://coursera-university-assets.s3.amazonaws.com/05/353594a7964fdeaff4e10615de58c0/MongoDBSquareLogo.png",
    },
    {
      name: "GitHub",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Figma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ],
  Languages: [
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
    },
    {
      name: "Next.js",
      img: "https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png",
    },
  ],
  Frameworks: [
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Bootstrap",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      name: "TailwindCSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  Tools: [
    {
      name: "GitHub",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Figma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Django",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    },
  ],
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div
      id="skills"
      className="py-10 text-center text-white flex flex-col items-center px-4 sm:px-6 md:px-8"
    >
      <SectionHead>Skill</SectionHead>

      {/* Categories Buttons */}
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-8 mb-6">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 sm:px-4 font-openSans md:px-6 py-2 text-sm sm:text-base md:text-lg font-semibold rounded-md transition-all duration-300 transform hover:scale-110 ${
              selectedCategory === category
                ? "bg-blue-500 text-white border-b-2 border-purple-500"
                : "text-gray-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        key={selectedCategory}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-6 w-full max-w-6xl"
      >
        {skillsData[selectedCategory].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 relative h-32 w-36 flex flex-col items-center justify-center bg-gray-900 rounded-lg shadow-lg border border-gray-800 hover:border-purple-700 hover:scale-110 transition-all duration-300"
          >
            <div className="absolute top-[-2px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-700 to-transparent"></div>
            <img
              src={skill.img}
              alt={skill.name}
              loading="lazy"
              className="w-12 h-12 mb-2 relative"
            />
            <span className="text-sm relative">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
