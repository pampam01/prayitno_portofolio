import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold transition-all duration-300 drop-shadow-sm scale-110"

      
      : "text-slate-500 font-medium hover:text-blue-500 transition-all duration-300 hover:scale-105";

  return (
    <header className="header flex justify-between items-center w-full z-50 p-4">
      <div className="z-50">
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-bold shadow-md"
          onClick={() => setIsOpen(false)}
        >
          <p className="blue-gradient_text">PM</p>
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex text-base font-poppins gap-8 tracking-wide">
        <NavLink to="/about" className={getLinkClasses}>
          About
        </NavLink>
        <NavLink to="/projects" className={getLinkClasses}>
          Projects
        </NavLink>
        <NavLink to="/certificates" className={getLinkClasses}>
          Certificates
        </NavLink>
      </nav>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center z-50">
        <button
          onClick={toggleMenu}
          className="text-slate-100 hover:text-blue-500 focus:outline-none transition-colors duration-300"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-40 transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        } transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center`}
      >
        <nav className="flex flex-col text-3xl font-poppins gap-10 text-center tracking-wider">
          <NavLink to="/about" className={getLinkClasses} onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/projects" className={getLinkClasses} onClick={toggleMenu}>
            Projects
          </NavLink>
          <NavLink to="/certificates" className={getLinkClasses} onClick={toggleMenu}>
            Certificates
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
