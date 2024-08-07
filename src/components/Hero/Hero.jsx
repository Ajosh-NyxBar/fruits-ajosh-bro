import React from "react";
import { IoAccessibility, IoBagHandleOutline } from "react-icons/io5";
import HeroPng from "../../assets/fruit-plate.png";
import Leaf from "../../assets/leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../../utility/animation";
const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        {/* Brand */}

        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={FadeRight(0.5)}
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia"
            >
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={FadeRight(0.9)}
              className="text-2xl tracking-wide"
            >
              Order your favorite fruits now!
            </motion.p>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={FadeRight(1.3)}
              className="text-gray-400"
            >
              Healthy food is a way to stay healthy and fit. It is a way to stay
              healthy and fit. Stay healthy and fit. Go healthy with us! and
              enjoy the best fruits in the world.
            </motion.p>

            {/* BUTON */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={FadeRight(1.7)}
              className="flex gap-6 justify-center md:justify-start"
            >
              <button className="primary-btn flex items-center gap-2">
                <span>
                  <IoBagHandleOutline />
                </span>
                <span>Order Now</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Imager Hero */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={HeroPng}
            alt=""
            className="w-[350px] md:w-[550px] drop-shadow"
          />
        </div>

        {/* LEAF */}
        <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[40deg]">
          <motion.img
            initial={{ opacity: 0, x: -200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={Leaf}
            alt=""
            className="w-full md:max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
