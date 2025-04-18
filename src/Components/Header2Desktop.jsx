import React, { useState, useEffect, useRef } from "react";
import calendar from "../assets/calendar.svg";
import { FaCaretRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { NavLink } from "react-router-dom";

const HeaderDesktop = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubmenuOpen2, setIsSubmenuOpen2] = useState(false);
  const submenuRef = useRef(null);
  const submenuRef2 = useRef(null);

  // Handle outside clicks to close submenus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target) &&
        submenuRef2.current &&
        !submenuRef2.current.contains(event.target)
      ) {
        setIsSubmenuOpen(false);
        setIsSubmenuOpen2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmenuClick = (submenu) => {
    if (submenu === "whoWeAre") {
      setIsSubmenuOpen(!isSubmenuOpen);
      setIsSubmenuOpen2(false);
    } else if (submenu === "thingsToDo") {
      setIsSubmenuOpen2(!isSubmenuOpen2);
      setIsSubmenuOpen(false);
    }
  };

  return (
    <div className="bg-champagneBeige p-3 relative hidden md:block">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
       <NavLink to='/'>
       <div className="flex gap-1 items-center">
          <img src="https://iili.io/31cmG8g.png" alt="Logo" className="w-9 h-9" />
          <p className="flex flex-col font-bold text-xl">
            Richmond
            <span className="text-[8px] font-medium text-oldLavender">
              Richmond Arts Corridor
            </span>
          </p>
        </div>
       </NavLink>

        <div className="flex items-center gap-16">
          <ul className="flex text-nowrap items-center gap-8 text-sm font-marcellus">
            <li className="cursor-pointer">The Story</li>
            <li
              ref={submenuRef}
              className="relative cursor-pointer flex items-center gap-1"
              onClick={() => handleSubmenuClick("whoWeAre")}
            >
              Who We Are
              {isSubmenuOpen ? (
                <MdOutlineKeyboardArrowUp className="text-lg" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-lg" />
              )}
              <div
                className={`absolute left-0 top-full mt-2 bg-champagneBeige p-4 w-auto shadow-lg rounded-lg z-20 transition-all duration-300 ease-in-out ${
                  isSubmenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <ul className="flex flex-col gap-2">
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Richmond Renaissance
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Co-Founders and Steering Committee

                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Anchor Organizations
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Organizations at Large

                  </li>
                </ul>
              </div>
            </li>
            <li
              ref={submenuRef2}
              className="relative cursor-pointer flex items-center gap-1"
              onClick={() => handleSubmenuClick("thingsToDo")}
            >
              Things To Do
              {isSubmenuOpen2 ? (
                <MdOutlineKeyboardArrowUp className="text-lg" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-lg" />
              )}
              <div
                className={`absolute left-0 top-full mt-2 bg-champagneBeige p-4 w-40 shadow-lg rounded-lg z-20 transition-all duration-300 ease-in-out ${
                  isSubmenuOpen2
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <ul className="flex flex-col gap-2">
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Food
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Services
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Events
                  </li>
                </ul>
              </div>
            </li>
            <li className="cursor-pointer">Artist Registry</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>

          <div className="flex gap-4 text-sm font-marcellus">
            <button className="py-3 rounded-3xl px-4 bg-white cursor-pointer">
              Donations
            </button>
            <button className="flex gap-2 rounded-3xl items-center py-1 px-4 bg-white cursor-pointer">
              <span>
                <img src={calendar} alt="Calendar" className="w-5 h-5" />
              </span>
              Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;