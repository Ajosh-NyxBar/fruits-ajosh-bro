import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLeaf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12 mt-12">
      <div className="container flex justify-between items-center">
        {/* logo */}
        <div className="text-2xl flex items-center gap-2 font-bold">
          <p className="text-2xl text-secondary">
            AJOSH <span className="text-primary">| FRUITs</span>
          </p>
          <FaLeaf className="text-green-500 text-2xl" />
        </div>
        {/* Sosial */}
        <div className="flex items-center gap-4">
          <FaFacebookF className="text-2xl text-primary hover:text-primary/50 transition-all duration-300" />
          <FaInstagram className="text-2xl text-primary hover:text-primary/50 transition-all duration-300" />
          <FaTwitter className="text-2xl text-primary hover:text-primary/50 transition-all duration-300" />
          <FaYoutube className="text-2xl text-primary hover:text-primary/50 transition-all duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
