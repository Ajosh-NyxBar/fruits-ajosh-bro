import React from "react";
import banner from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeRight, FadeUp } from "../../utility/animation";
import {
  IoBagHandleOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";

const bgStyle = {
  backgroundImage: `url(${banner})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const imgStyle = {
  backgroundImage: `bg-white`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Banner3 = () => {
  return (
    <section className="">
      <div
        className="container flex flex-col md:flex-row items-center justify-center gap-10 py-10 rounded-3xl "
        style={bgStyle}
      >
        {/* Img */}
        <div className="md:min-h-[450px] md:min-w-[450px]"></div>
        {/* Info */}
        <div className="flex flex-col gap-4 max-w-[500px]">
          <motion.h1
            initial="hidden"
            whileInView={{ opacity: 1, y: 0 }}
            animate="visible"
            variants={FadeUp(0.4)}
            className="text-3xl lg:text-5xl font-bold text-center md:text-left"
            style={imgStyle}
          >
            Brand Info
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView={{ opacity: 1, y: 0 }}
            animate="visible"
            variants={FadeUp(0.8)}
            className="text-center md:text-left text-sm md:text-base"
            style={imgStyle}
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
            className="text-center md:text-left text-sm md:text-base"
            style={imgStyle}
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

export default Banner3; // Perbaiki nama komponen yang diekspor
