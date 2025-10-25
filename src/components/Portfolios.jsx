"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const Portfolios = ({ w, tabId, onClose }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () =>
    setCurrentImage((prev) => (prev + 1) % (w.images?.length || 1));
  const prevSlide = () =>
    setCurrentImage(
      (prev) => (prev - 1 + (w.images?.length || 1)) % (w.images?.length || 1)
    );

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="min-h-screen mt-20 bg-[#0D1224] text-white font-montserrat overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative h-[70vh] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={
            w.images && w.images.length > 0
              ? w.images[currentImage]
              : w.backgroundIMG
          }
          alt={w.title}
          layout="fill"
          objectFit="cover"
          className="brightness-[0.7] contrast-[1.2]"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0D1224] flex flex-col justify-end p-8 md:p-16">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-3 text-white drop-shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {w.title}
          </motion.h1>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 rounded-full mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {/* Controls */}
        {w.images?.length > 1 && (
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 md:px-10 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full transition-all duration-300"
              aria-label="Previous image"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md p-3 rounded-full transition-all duration-300"
              aria-label="Next image"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        )}

        {/* Close Button */}
        
      </motion.section>

      {/* Description */}
      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-6xl mx-auto mt-10 px-6 leading-relaxed text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {w.desc}
      </motion.p>

      {/* Details Section */}
      <motion.section
        className="max-w-6xl mx-auto py-16 px-6 md:px-12 grid md:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Technologies */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {w.tech?.length > 0 ? (
              w.tech.map((tech, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  className="bg-gradient-to-r from-[#1a233d] to-[#1e2a4a] text-sm text-gray-200 px-4 py-2 rounded-xl shadow-md border border-white/10"
                >
                  {tech}
                </motion.span>
              ))
            ) : (
              <p className="text-gray-400">No technologies listed.</p>
            )}
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
            Project Links
          </h2>
          <div className="flex flex-col gap-5">
            {w.gitlink && (
              <motion.a
                href={w.gitlink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-lg text-blue-400 hover:text-blue-300"
              >
                <FaGithub className="text-2xl" /> View on GitHub
              </motion.a>
            )}
            {w.site && (
              <motion.a
                href={w.site}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-lg text-green-400 hover:text-green-300"
              >
                <FaExternalLinkAlt className="text-xl" /> Visit Live Site
              </motion.a>
            )}
            {!w.gitlink && !w.site && (
              <p className="text-gray-400">No links available.</p>
            )}
          </div>
        </div>
      </motion.section>

      {/* Footer Glow */}
      <div className="w-full h-[2px] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 opacity-70" />
    </div>
  );
};

export default Portfolios;
