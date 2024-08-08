import React from "react";
import banner from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "../../utility/animation";
import {
  IoBagHandleOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

const Banner = () => {
  return (
    <section className="bg-secondary/70">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-10 py-10">
        {/* Img */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            src={banner}
            alt=""
            className="w-[300px] md:w-[500px]"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4">
          <motion.h1
            initial="hidden"
            whileInView={{ opacity: 1, y: 0 }}
            animate="visible"
            variants={FadeUp(0.4)}
            className="text-3xl lg:text-5xl font-bold"
          >
            Brand Info
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView={{ opacity: 1, y: 0 }}
            animate="visible"
            variants={FadeUp(0.8)}
            className=""
          >
            this is the brand info, enjoy the fruits, energy, and health. don't
            forget to subscribe, like, and share, thank you for watching. and
            enjoy the best fruits in the world.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView={{ opacity: 1, y: 0 }}
            animate="visible"
            variants={FadeUp(1.2)}
            className=""
          >
            this is the brand info, enjoy the fruits, energy, and health. don't
            forget to subscribe, like, and share, thank you for watching. and
            enjoy the best fruits in the world.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView={{ opacity: 1, y: 0 }}
            animate="visible"
            variants={FadeUp(1.6)}
            className="flex gap-6 justify-center md:justify-start"
          >
            <button className="primary-btn flex items-center gap-2">
              <span>
                <IoInformationCircleOutline />
              </span>
              <span>Learn More</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
