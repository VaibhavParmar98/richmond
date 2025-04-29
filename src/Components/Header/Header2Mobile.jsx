import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa6";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const HeaderMobile = ({ isMenuOpen, toggleMenu }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveSubmenu(null);
        toggleMenu(); // Close full menu when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleMenu]);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  return (
    <div
      className={`bg-champagneBeige p-3 relative md:hidden transition-all duration-300 ${
        isMenuOpen ? "rounded-b-3xl shadow-lg" : ""
      }`}
      ref={menuRef}
    >
      <div className="max-w-full mx-auto px-4 flex flex-col">
        <div className="flex justify-between items-center w-full">
          <NavLink to="/" className="flex gap-1 items-center" onClick={toggleMenu}>
            <img
              src="https://iili.io/31cmG8g.png"
              alt="Logo"
              className="w-8 h-8"
            />
            <p className="flex flex-col font-bold text-lg">
              Richmond
              <span className="text-[7px] font-medium text-oldLavender">
                Richmond Arts Corridor
              </span>
            </p>
          </NavLink>
          <button
            className="text-xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`flex flex-col w-full mt-4 bg-champagneBeige overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out transform ${
            isMenuOpen
              ? "max-h-[600px] opacity-100 translate-y-0 scale-y-100"
              : "max-h-0 opacity-0 -translate-y-2 scale-y-95"
          }`}
        >
          <ul className="flex flex-col text-nowrap items-start gap-4 text-xs font-marcellus px-1">
            <li className="cursor-pointer" onClick={toggleMenu}>The Story</li>

            <li className="cursor-pointer w-full">
              <div
                className="flex items-center gap-1"
                onClick={() => toggleSubmenu("whoWeAre")}
              >
                Who We Are
                {activeSubmenu === "whoWeAre" ? (
                  <MdOutlineKeyboardArrowUp className="text-base" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="text-base" />
                )}
              </div>
              <div
                className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden ${
                  activeSubmenu === "whoWeAre"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="p-4 mt-2 bg-champagneBeige w-auto rounded-lg flex flex-col gap-2">
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center" onClick={toggleMenu}>
                    <FaCaretRight />
                    Richmond Renaissance
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center" onClick={toggleMenu}>
                    <FaCaretRight />
                    Co-Founders and Steering Committee
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center" onClick={toggleMenu}>
                    <FaCaretRight />
                    Anchor Organizations
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center" onClick={toggleMenu}>
                    <FaCaretRight />
                    Organizations at Large
                  </li>
                </ul>
              </div>
            </li>

            <li className="cursor-pointer w-full">
              <div
                className="flex items-center gap-1"
                onClick={() => toggleSubmenu("thingsToDo")}
              >
                Things To Do
                {activeSubmenu === "thingsToDo" ? (
                  <MdOutlineKeyboardArrowUp className="text-base" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="text-base" />
                )}
              </div>
              <div
                className={`transition-[max-height,opacity] duration-700 ease-in-out overflow-hidden ${
                  activeSubmenu === "thingsToDo"
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="p-4 mt-2 bg-champagneBeige w-40 rounded-lg flex flex-col gap-2">
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center" onClick={toggleMenu}>
                    <FaCaretRight />
                    Food
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center" onClick={toggleMenu}>
                    <FaCaretRight />
                    Services
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center" onClick={toggleMenu}>
                    <FaCaretRight />
                    Events
                  </li>
                </ul>
              </div>
            </li>

            <li className="cursor-pointer" onClick={toggleMenu}>
              <NavLink to="/signup">Artist Registry</NavLink>
            </li>
            <li className="cursor-pointer" onClick={toggleMenu}>Contact Us</li>
          </ul>

          <div className="flex gap-3 text-xs font-marcellus mt-4">
            <button
              className="py-3 rounded-3xl px-3 bg-white cursor-pointer"
              onClick={toggleMenu}
            >
              Donations
            </button>
            <button
              className="flex gap-2 rounded-3xl items-center py-1 px-3 bg-white cursor-pointer"
              onClick={toggleMenu}
            >
              <span>
                <img src="https://iili.io/3VR8DeS.png" alt="Calendar" className="w-4 h-4" />
              </span>
              Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
