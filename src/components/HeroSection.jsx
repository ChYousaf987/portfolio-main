"use client";
import { TypeAnimation } from "react-type-animation";
import HeaderSummary from "./HeaderSummary";
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";
import { links } from "@/config/linksConfig";
import Image from "next/image";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-[95vh] flex relative bg-[#0D1224] text-white px-3 md:px-6 flex-col justify-evenly"
    >
      {/* Background Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full min-h-screen z-0 bg-no-repeat bg-cover bg-center bg-blend-overlay"
        style={{
          backgroundImage: `url('https://abusaid.netlify.app/hero.svg')`,
        }}
      ></div>

      <div className="grid grid-cols-1 pt-12 lg:grid-cols-12 my-4 h-[100%]">
        {/* Image Section */}
        <motion.div
          className="col-span-4 place-self-center lg:mt-0 lg:order-1"
          initial={{
            opacity: 0,
            x: "100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.4,
            x: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <div className="rounded-full bg-transparent relative w-[200px] h-[200px] lg:w-[360px] lg:h-[360px] overflow-hidden mb-6">
            {/* Glow Effect Background */}
            <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] absolute transform -translate-x-1/2 translate-y-1/3 left-1/2 rounded-full blur-[20px]"></div>

            {/* Beautified Image */}
            <Image
              loading="eager"
              height={355}
              width={300}
              src="/assets/Yusaf.webp" // Replace this path if needed
              alt="Yousaf Awais"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 size-[250px] md:size-[350px] rounded-2xl shadow-lg shadow-pink-500/30 hover:scale-105 hover:rotate-1 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.4,
            x: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="col-span-8 place-self-center place-items-start gap-4"
        >
          <h1 className="mb-2 lg:mb-4 font-extrabold font-montserrat">
            <span className="text-transparent text-3xl md:text-4xl lg:text-5xl xl:text-7xl bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ">
              Hi there <span className="text-white">👋</span>
              <br />
              I&apos;m Yousaf Awais
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-montserrat text-white">
              <TypeAnimation
                sequence={["App Developer", 1000, "Fullstack Developer", 1000]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="font-openSans text-[#ADB7BE] text-sm lg:text-xl mb-6">
            Passionate coder aspiring to architect software solutions that
            seamlessly blend functionality and solve problems. Let&apos;s build
            the future together!
          </p>
        </motion.div>
      </div>

      {/* Summary Component */}
      <HeaderSummary />
    </section>
  );
};

export default HeroSection;
