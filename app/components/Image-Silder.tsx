"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

export default function VideoBackgroundDemo() {
  return (
    <div className="relative h-[40rem] font-bebas w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/NewAds1.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Foreground content */}
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="relative z-10 flex flex-col justify-center items-center h-full"
      >
        <motion.p className="font-bold text-xl md:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Connecting farmers and buyers for fresh, local produce—straight from the farm to your doorstep.
        </motion.p>

        <button className="px-8 py-3 backdrop-blur-sm border bg-green-600/20 border-emerald-500/20 hover:border-emerald-600 text-white mx-auto text-center rounded-full relative mt-4">
          <Link href={"/category"}>
            <span className="text-xl">Shop Now</span>
          </Link>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 z-5" />
    </div>
  );
}
