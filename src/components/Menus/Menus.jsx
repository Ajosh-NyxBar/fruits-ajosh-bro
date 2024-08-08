import React from "react";
import { menus } from "../../constant";
import { motion, delay } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Menus
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {menus.map((menu) => (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FadeLeft(menu.delay)}
              key={menu.id}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row 
              items-center justify-around gap-3"
            >
              <img
                src={menu.img}
                alt={menu.name}
                className="w-[60px] mb-4 scale-110 transition-all duration-300 hover:scale-150"
              />

              <div>
                <h2 className="text-lg font-semibold">{menu.name}</h2>
                <p className="text-sm text-secondary font-semibold">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
