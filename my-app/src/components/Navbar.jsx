import React from "react";
import { Linkedin, Github, Instagram, Facebook, Crown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-grey-500 text-white p-4 flex justify-between items-center shadow-lg">
      {/* Crown Icon */}
      <Crown className="w-6 h-6 cursor-pointer hover:text-red-400 transition" />

      {/* Social Links */}
      <div className="flex gap-4">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 hover:text-gray-400 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 hover:text-blue-600 transition" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
