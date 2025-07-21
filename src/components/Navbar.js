import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 backdrop-blur-md bg-opacity-80 shadow-md transition-all duration-700 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center text-white">
        <h1 className="text-xl font-bold">Portfolio</h1>

        {/* Hamburger Button */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Nav Links */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 items-center w-full sm:w-auto mt-4 sm:mt-0`}
        >
          {["hero", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-pink-400 transition-colors duration-300 capitalize py-2 px-4 block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
