import React from "react";
import {motion} from "framer-motion";
import { Navigation } from "./Navigation";

export const HeroSection: React.FC = () => {
  return (
    <section className="overflow-hidden relative w-full bg-red-300 bg-opacity-90 h-[1117px] max-md:pb-12 max-md:h-auto max-md:min-h-[800px]">
      <div className="absolute top-0 left-0 w-full bg-rose-400 bg-opacity-50 h-[215px]" />

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/8a26133b6dc8184dc83dcc0c51f39db59c846bb7?width=714"
        alt="Floravelle Logo"
        className="absolute z-10 h-[363px] top-[-30px] w-[357px] max-md:top-2.5 max-md:left-5 max-md:h-[203px] max-md:w-[200px]"
      />

      <div className="absolute z-10 left-[500px] top-[139px] max-md:hidden">
        <Navigation />
      </div>

      <div className="absolute left-[84px] top-[395px] w-[754px] z-[5] max-md:left-5 max-md:text-center max-md:top-[250px] max-md:w-[calc(100%_-_40px)]">
        <motion.h1 
         initial={{ opacity: 0, y: 70 }} // down
         animate={{ opacity: 1, y: 0 }}   // up
         transition={{ duration: 0.8, delay: 0.5 }}
         className="mb-6 text-7xl font-bold h-[330px] text-neutral-800 w-[754px] max-md:mb-5 max-md:w-full max-md:h-auto max-md:text-5xl max-sm:text-4xl ">
          Let's make beautiful flowers a part of your life.
        </motion.h1>

        <motion.p 
         initial={{ opacity: 0, y: 70 }} // down
         animate={{ opacity: 1, y: 0 }}   // up
        transition={{ duration: 0.8, delay: 0.5 }}
         className="mb-20 text-xl leading-8 h-[103px] text-neutral-1000 text-opacity-60 w-[675px] max-md:mb-8 max-md:w-full max-md:h-auto max-md:text-lg max-sm:text-base">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </motion.p>

        <button className="flex justify-center items-center px-11 py-5 bg-rose-400 rounded-lg cursor-pointer h-[73px] w-[189px]">
          <span className="text-xl font-bold text-black">Shop Now</span>
        </button>
      </div>

      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/53312729a3f523c696dd2154f71fcfdb85b0206e?width=1270"
        alt="Beautiful flowers arrangement"
        className="absolute right-0 h-[800px] top-[317px] w-[635px] z-[1] max-md:block max-md:relative max-md:top-auto max-md:right-auto max-md:mx-auto max-md:mt-8 max-md:mb-0 max-md:h-[500px] max-md:w-[400px] max-sm:h-[375px] max-sm:w-[300px]"
      />
    </section>
  );
};
