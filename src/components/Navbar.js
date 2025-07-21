import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setVisible(true);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 backdrop-blur-md bg-opacity-80 shadow-md transition-all duration-700 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}`}
    >
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-white">
        <h1 className="text-xl font-bold mb-4 sm:mb-0">Portfolio</h1>
        <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 items-center">
          {["hero", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-pink-400 transition-colors duration-300 capitalize"
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
