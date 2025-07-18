"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const WorkCard = ({ w }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % (w.images?.length || 1));
  };

  const prevSlide = () => {
    setCurrentImage(
      (prev) => (prev - 1 + (w.images?.length || 1)) % (w.images?.length || 1)
    );
  };

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <>
      <div className="bg-[#1a1f35] rounded-2xl shadow-lg border border-gray-700 hover:border-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 overflow-hidden">
        <div className="relative w-full h-[200px]">
          <Image
            src={w.backgroundIMG}
            alt={w.title}
            fill
            className="object-cover w-full h-full"
            unoptimized
          />
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-2">{w.title}</h3>
          <p className="text-sm text-gray-400 line-clamp-3">{w.desc}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {w.tech?.map((t, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-gray-700 text-white rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-4">
            {w.gitlink && (
              <a
                href={w.gitlink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <FiGithub size={18} />
              </a>
            )}
            <Link
              href={`/portfolio/${w.id}`}
              className="text-white hover:text-gray-300"
            >
              <IoOpenOutline size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black rounded-lg w-full max-w-3xl relative p-6 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-4 text-2xl"
            >
              &times;
            </button>

            <div className="mb-4">
              <Image
                src={w.images?.[currentImage] || w.backgroundIMG}
                alt={w.title}
                width={600}
                height={300}
                className="rounded object-cover w-full"
                unoptimized
              />
              {w.images?.length > 1 && (
                <div className="flex justify-between mt-2">
                  <button onClick={prevSlide}>&larr; Prev</button>
                  <button onClick={nextSlide}>Next &rarr;</button>
                </div>
              )}
            </div>

            <h2 className="text-xl font-bold">{w.title}</h2>
            <p className="text-gray-700 mt-2">{w.desc}</p>

            {w.tech && (
              <div className="mt-4">
                <h4 className="font-semibold">Technologies:</h4>
                <div className="flex flex-wrap gap-2 mt-1">
                  {w.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {w.gitlink && (
              <a
                href={w.gitlink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-600 underline mt-4"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default WorkCard;
