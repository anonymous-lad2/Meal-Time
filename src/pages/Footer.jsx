import React from "react";
import appmart from '../utility/images/appmart.avif'
import playstore from '../utility/images/play_store.avif'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Download Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 border-b border-gray-300 dark:border-gray-700">
        <h2 className="text-lg font-semibold">
          For better experience, download the app now
        </h2>
        <div className="flex gap-4 mt-4 lg:mt-0">
          <img
            src={playstore}
            alt="Google Play"
            className="h-12"
          />
          <img
            src={appmart}
            alt="App Store"
            className="h-12"
          />
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 px-6 py-8">
        {/* Swiggy Brand */}
        <div>
          <h3 className="text-xl font-bold text-orange-600">Meal Time</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            © 2024 MealTime Limited
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:cursor-pointer hover:text-yellow-500">About Us</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Corporate</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Careers</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Team</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Instamart</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Dineout</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Genie</li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:cursor-pointer hover:text-yellow-500">Help & Support</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Partner with Us</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Ride with Us</li>
          </ul>
        </div>

        {/* Available Locations */}
        <div>
          <h3 className="font-semibold mb-4">Available In:</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:cursor-pointer hover:text-yellow-500">Bangalore</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Gurgaon</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Hyderabad</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Delhi</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Mumbai</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Pune</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:cursor-pointer hover:text-yellow-500">Terms & Conditions</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Cookie Policy</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Privacy Policy</li>
            <li className="hover:cursor-pointer hover:text-yellow-500">Investor Relations</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold mb-4">Social Links</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" aria-label="discord">
              <FaDiscord />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
