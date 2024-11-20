import React, { useState } from "react";
import logo from "../utility/restaurant-logo-design-template.avif";
import { MdNightlight, MdOutlineLightMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

const Header = ({ darkTheme, setDarkTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ["Home", "About", "Contact", "Deals🔥"];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center 
                    w-screen mx-auto px-10 py-1 mb-11 bg-white dark:bg-gray-800 shadow-md">
      <img src={logo} alt="Logo" className="h-12 w-18 sm:h-16" />

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center gap-4">
        {menuItems.map((item) => (
          <li key={item} className="hover:underline cursor-pointer list-none">
            {item}
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <FaRegUser className="hover:underline cursor-pointer" />

        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="p-2 rounded-md"
        >
          {darkTheme ? <MdOutlineLightMode /> : <MdNightlight />}
        </button>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md z-50"
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-[300px] bg-white dark:bg-gray-800 shadow-lg transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <ul className="flex flex-col items-center gap-4 py-8">
          {menuItems.map((item) => (
            <li
              key={item}
              className="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full text-center py-2 cursor-pointer list-none transition-all duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
