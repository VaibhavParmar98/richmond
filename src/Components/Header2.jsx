import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import calender from "../assets/calendar.svg";

const Header2 = ({ isMenuOpen, toggleMenu }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubmenuOpen2, setIsSubmenuOpen2] = useState(false);

  return (
    <div
      className={`bg-champagneBeige p-3 relative sm:rounded-b-none ${
        isMenuOpen ? "rounded-b-3xl sm:rounded-b-3xl" : ""
      }`}
    >
      <div className="max-w-full sm:max-w-5xl md:max-w-6xl mx-auto px-4 sm:px-6 md:px-0 flex flex-col md:flex-row md:gap-48 md:items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="flex gap-1 items-center">
            <img src="/image20.png" alt="" className="w-8 sm:w-9 h-8 sm:h-9" />
            <p className="flex flex-col font-bold text-lg sm:text-xl">
              Richmond
              <span className="text-[7px] sm:text-[8px] font-medium text-oldLavender">
                Richmond Arts Corridor
              </span>
            </p>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`md:flex flex-col md:flex-row md:gap-16 md:items-center w-full md:w-auto mt-4 md:mt-0 bg-champagneBeige md:bg-transparent overflow-hidden transition-all duration-700 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 md:max-h-full md:opacity-100"
          }`}
        >
          <div className="text-xs sm:text-sm md:text-sm font-marcellus">
            <ul className="flex flex-col md:flex-row text-nowrap items-start md:items-center gap-4 md:gap-8 text-xs sm:text-sm font-marcellus px-1">
              <li className="cursor-pointer">The Story</li>
              <li
                className="relative cursor-pointer"
                onMouseEnter={() => setIsSubmenuOpen(true)}
                onMouseLeave={() => setIsSubmenuOpen(false)}
              >
                Who We Are
                {isSubmenuOpen && (
                  <div className="absolute left-0 bg-white p-4 mt-2 w-40 shadow-lg rounded-lg">
                    <ul>
                      <li className="py-1 px-2">Our Vision</li>
                      <li className="py-1 px-2">Our Team</li>
                      <li className="py-1 px-2">Our History</li>
                    </ul>
                  </div>
                )}
              </li>
              <li
                className="relative cursor-pointer"
                onMouseEnter={() => setIsSubmenuOpen2(true)}
                onMouseLeave={() => setIsSubmenuOpen2(false)}
              >
                Things To Do
                {isSubmenuOpen2 && (
                  <div className="absolute left-0  bg-white p-4 mt-2 w-40 shadow-lg rounded-lg">
                    <ul>
                      <li className="py-1 px-2">Events</li>
                      <li className="py-1 px-2">Exhibitions</li>
                      <li className="py-1 px-2">Workshops</li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="cursor-pointer">Artist Registry</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </div>

          <div className="flex mb-2 sm:mb-0 sm:flex-row gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm md:text-sm font-marcellus mt-4 md:mt-0">
            <button className="py-3 rounded-3xl px-3 sm:px-4 bg-white cursor-pointer ">
              Donations
            </button>
            <button className="flex gap-2 rounded-3xl items-center py-1 px-3 sm:px-4 bg-white cursor-pointer ">
              <span>
                <img src={calender} alt="" className="w-4 sm:w-5 h-4 sm:h-5" />
              </span>
              Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
