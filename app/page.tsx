'use client'
import Image from "next/image";
import Header from "./components/Header";
import Card from "./components/Card";
import ImageSlider from './components/Image-Silder'
import { FlipWords } from "@/app/components/ui/flip_words";
import Footer from "./components/Footer";
import NewFooter from "./components/NewFooter";
import Community from "./components/CommunityFeedback";
import SellGuide from "./components/SellGuide";
import OurMission from "./components/OurMission";
import BeliveSection from "./components/BeliveSection";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import ChatbotPage from "./components/ChatBot";

export default function Home() {

  const words = ["Vegetables", "Fruits", "Seeds", "Meat", "Eggs"];
  const controls = useAnimation();

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({
        opacity: scrollY > 100 ? 1 : 0,
        y: scrollY > 100 ? 0 : 50,
        transition: { duration: 0.8 }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <main>
      <Header />

      <div className="flex justify-center font-bebas items-center px-4">
        <div className="text-4xl mx-auto text-center pb-2 pt-2 text-green-600">
          Shop Local
          <FlipWords words={words} /> <br />
          <span className="text-2xl text-gray-600">Your farm products supply to consumer DoorDash for an easy way web platform</span>
        </div>
      </div>

     
     
        <ImageSlider />
    

      <motion.div
        className="my-8"
        variants={fadeIn}
        initial="hidden"
        animate={controls}
      >
        <SellGuide />
      </motion.div>

      <motion.div
        className="my-8"
        variants={fadeIn}
        initial="hidden"
        animate={controls}
      >
        <OurMission />
      </motion.div>

      <motion.div
        className="my-8"
        variants={fadeIn}
        initial="hidden"
        animate={controls}
      >
        <BeliveSection />
      </motion.div>

      <motion.div
        className="my-8"
        variants={fadeIn}
        initial="hidden"
        animate={controls}
      >
        <Community />
      </motion.div>
      <ChatbotPage/>

      <NewFooter />
    </main>
  );
}
