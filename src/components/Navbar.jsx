import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import Darkmode from "./DarkMode"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full dark:bg-gray-900  shadow-md z-50">
      <div className="max-w-6xl mx-4 lg:mx-8 px-2 py-4 flex justify-between items-center">
        {/* Left Section: Logo & Links */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-green-500 mr-3">ZipLink</h1>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex space-x-6">
            {[ "Features", "Pricing", "Contact"].map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-gray-700 dark:text-white cursor-pointer hover:text-green-600 lg:text-lg"
                >
                  {section}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Sign In & Sign Up */}
        <div className="hidden md:flex items-center space-x-4 lg:text-lg">
          <button className="px-4 py-2 text-green-600  rounded-md hover:bg-green-100">
            Login
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
            Sign Up
          </button>
         
            <Darkmode />
          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-white text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        
      </div>
      

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 space-y-4 text-center">
          {/* Mobile Links */}
          {["Features", "Pricing", "Contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="text-gray-700 dark:text-white text-lg block hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              {section}
            </ScrollLink>
          ))}
          {/* Mobile Sign In & Sign Up */}
          <div className="flex flex-col space-y-2">
            <button className="px-4 py-2 text-green-500  rounded-md">
              Login
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
              Sign Up
            </button>
            
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;

