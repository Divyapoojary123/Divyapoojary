import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Animate navbar fade-in + slide down after mount
    setVisible(true);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 backdrop-blur-md bg-opacity-80 shadow-md transition-all duration-700 ease-in-out
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold">MyPortfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-pink-400 transition-colors duration-300">
              Hero
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-pink-400 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-pink-400 transition-colors duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-pink-400 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-400 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
