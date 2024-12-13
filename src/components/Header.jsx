import React, { useState } from "react";
import logo from "../utility/restaurant-logo-design-template-removebg-preview.png";
import { MdNightlight, MdOutlineLightMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const Header = (props) => {
  const darkTheme = props.darkTheme;
  const setDarkTheme = props.setDarkTheme;
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  // Smooth scrolling function
  const handleScroll = (id) => {
    // Navigate to the base route if needed
    navigate("/");
    // Smooth scroll to the section
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); // Delay ensures the navigation completes first
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center 
                    w-screen mx-auto px-10 py-1 mb-11 bg-white dark:bg-gray-800 shadow-md"
    >
      {/* Logo with Scroll to Home */}
      <div onClick={() => handleScroll("home")} className="cursor-pointer">
        <img src={logo} alt="Logo" className="h-14 w-18 sm:h-16" />
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center gap-4">
        {/* Scroll to Home */}
        <li
          onClick={() => handleScroll("home")}
          className="hover:underline hover:cursor-pointer"
        >
          Home
        </li>

        {/* Navigation to About Page */}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:underline hover:cursor-pointer ${
              isActive ? "text-orange-500 font-semibold" : ""
            }`
          }
        >
          About
        </NavLink>

        {/* Scroll to Contact Section */}
        <li
          onClick={() => handleScroll("footer")}
          className="hover:underline hover:cursor-pointer"
        >
          Contact
        </li>

        {/* Navigation to Login Page */}
        {!isLoggedIn && (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:underline hover:cursor-pointer ${
                isActive ? "text-orange-500 font-semibold" : ""
              }`
            }
          >
            Login
          </NavLink>
        )}

        {!isLoggedIn && (
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              `hover:underline hover:cursor-pointer ${
                isActive ? "text-orange-500 font-semibold" : ""
              }`
            }
          >
            Sign Up
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink to="/">
            <button
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("LogOut Successfully");
              }}
            >
              Log out
            </button>
          </NavLink>
        )}
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-4 relative">
        <NavLink to="/cart">
          <FaCartShopping className="hover:underline cursor-pointer text-2xl" />
          <div className="absolute -top-2 dark:bg-green-600 left-4 p-3 rounded-full z-30 flex items-center justify-center">
            {/* {cartItems.length} */}
            <p className="absolute">{cartItems.length}</p>
          </div>
        </NavLink>

        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className="p-2 rounded-md text-2xl"
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
          {/* Scroll to Home */}
          <li
            onClick={() => {
              handleScroll("home");
              setIsMobileMenuOpen(false);
            }}
            className="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full text-center py-2 cursor-pointer list-none transition-all duration-300"
          >
            Home
          </li>

          {/* Navigation to About Page */}
          <NavLink
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({
              isActive,
            }) => `hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full text-center py-2 cursor-pointer list-none transition-all duration-300
            ${isActive ? "bg-orange-500 text-white" : ""}`}
          >
            About
          </NavLink>

          {/* Scroll to Contact Section */}
          <li
            onClick={() => {
              handleScroll("footer");
              setIsMobileMenuOpen(false);
            }}
            className="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full text-center py-2 cursor-pointer list-none transition-all duration-300"
          >
            Contact
          </li>

          {/* Navigation to Login Page */}
          {!isLoggedIn && (
            <NavLink
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({
                isActive,
              }) => `hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full text-center py-2 cursor-pointer list-none transition-all duration-300
           ${isActive ? "bg-orange-500 text-white" : ""}`}
            >
              Login
            </NavLink>
          )}

          {!isLoggedIn && (
            <NavLink
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({
                isActive,
              }) => `hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full text-center py-2 cursor-pointer list-none transition-all duration-300
          ${isActive ? "bg-orange-500 text-white" : ""}`}
            >
              Sign Up
            </NavLink>
          )}

          {isLoggedIn && (
            <NavLink
              to="/"
              className="hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md w-full text-center py-2 cursor-pointer list-none transition-all duration-300"
            >
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  toast.success("LogOut Successfully");
                  setIsLoggedIn(false);
                }}
              >
                Log Out
              </button>
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
