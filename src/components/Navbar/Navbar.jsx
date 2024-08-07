import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { navLinks } from "../../constant";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container flex items-center justify-between py-4 md:pt-4">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold">
            <p className="text-2xl text-secondary">
              AJOSH <span className="text-primary">| FRUITs</span>
            </p>
            <FaLeaf className="text-green-500 text-2xl" />
          </div>

          {/* Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] transition-all"
                >
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}

              <button className="text-2xl text-primary hover:text-white hover:bg-primary hover:shadow-lg hover:shadow-primary transition-all rounded-full p-2 duration-300">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>

          {/* Mobile Hamburger */}
          <div className="block md:hidden">
            <MdMenu
              className="text-4xl text-primary"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </nav>

      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;