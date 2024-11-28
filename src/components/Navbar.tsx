import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle state

  return (
    <nav className="bg-blue-500 text-white p-4 relative">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">T</div>
        <button
          onClick={toggleMenu}
          className="p-2 rounded focus:outline-none"
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Toggleable Menu */}
      <div className={`${isOpen ? "block" : "hidden"} bg-blue-700 p-4`}>
        <ul className="space-y-2">
          <li>
            <a href="#home" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#project" className="hover:underline">
              Project
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="#services" className="hover:underline">
              Services
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
