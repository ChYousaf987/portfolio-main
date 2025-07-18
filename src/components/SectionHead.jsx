import React from "react";
import { motion } from "framer-motion";

const SectionHead = ({ children }) => {
  return (
    <motion.h2
      className="text-center font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.h2>
  );
};

export default SectionHead;
