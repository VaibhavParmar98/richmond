import React, { useState, useEffect, useRef } from "react";
import { FaCaretRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { NavLink } from "react-router-dom";

const HeaderDesktop = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubmenuOpen2, setIsSubmenuOpen2] = useState(false);
  const [isSubmenuOpen3, setIsSubmenuOpen3] = useState(false);
  const submenuRef = useRef(null);
  const submenuRef2 = useRef(null);
  const submenuRef3 = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !submenuRef.current?.contains(event.target) &&
        !submenuRef2.current?.contains(event.target) &&
        !submenuRef3.current?.contains(event.target)
      ) {
        setIsSubmenuOpen(false);
        setIsSubmenuOpen2(false);
        setIsSubmenuOpen3(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmenuClick = (submenu) => {
    setIsSubmenuOpen(submenu === "whoWeAre" ? !isSubmenuOpen : false);
    setIsSubmenuOpen2(submenu === "thingsToDo" ? !isSubmenuOpen2 : false);
    setIsSubmenuOpen3(submenu === "artistRegistry" ? !isSubmenuOpen3 : false);
  };

  return (
    <div className="bg-champagneBeige p-3 relative hidden md:block">
      <div className="max-w-6xl mx-auto flex items-center xl:justify-between">
        <NavLink to="/" className="flex gap-1 items-center">
          <img src="https://iili.io/31cmG8g.png" alt="Logo" className="w-9 h-9" />
          <p className="flex flex-col font-bold text-xl">
            Richmond
            <span className="text-[8px] font-medium text-oldLavender">
              Richmond Arts Corridor
            </span>
          </p>
        </NavLink>

        <div className="flex xl:flex-row lg:flex-row md:flex-col md:ml-16 md:gap-4 lg:ml-12 items-center lg:gap-7 xl:gap-16">
          <ul className="flex text-nowrap items-center gap-8 text-sm font-marcellus">
            <li className="cursor-pointer">The Story</li>

            {/* Who We Are */}
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
                  isSubmenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
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
                  <NavLink to='/about'>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />About Us
                  </li>
                  </NavLink>
                </ul>
              </div>
            </li>

            {/* Things To Do */}
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
                  isSubmenuOpen2 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <ul className="flex flex-col gap-2">
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Food
                  </li>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Services
                  </li>
                 <NavLink to='/event'>
                 <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Events
                  </li>
                 </NavLink>
                </ul>
              </div>
            </li>

            {/* Artist Registry */}
            <li
              ref={submenuRef3}
              className="relative cursor-pointer flex items-center gap-1"
              onClick={() => handleSubmenuClick("artistRegistry")}
            >
              Artist Registry
              {isSubmenuOpen3 ? (
                <MdOutlineKeyboardArrowUp className="text-lg" />
              ) : (
                <MdOutlineKeyboardArrowDown className="text-lg" />
              )}
              <div
                className={`absolute left-0 top-full mt-2 bg-champagneBeige p-4 w-40 shadow-lg rounded-lg z-20 transition-all duration-300 ease-in-out ${
                  isSubmenuOpen3 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <ul className="flex flex-col gap-2">
                  <NavLink to='/signup'>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Register
                  </li>
                  </NavLink>
                  <NavLink to='/gallery'>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />Gallery
                  </li>
                  </NavLink>
                  <NavLink to='/faq'>
                  <li className="py-1 px-2 hover:bg-gray-100 rounded flex gap-2 items-center">
                    <FaCaretRight />FAQ
                  </li>
                  </NavLink>
                </ul>
              </div>
            </li>

           
            <NavLink to='/contact'><li className="cursor-pointer">Contact Us</li></NavLink>
          </ul>

          <div className="flex w-full md:justify-end gap-4 text-sm font-marcellus">
  <button className="py-3 rounded-3xl px-4 bg-white cursor-pointer">Donations</button>

  <a
    href="https://calendar.google.com/calendar/u/0?cid=N2IxOTc3NjlkZjkwYjAzZjUwM2ZkZTdlZjQxYjBkM[...]DU2ODVlY2Q3ODk1MWViZTUzYkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
    target="_blank"
    rel="noopener noreferrer"
    className="flex gap-2 rounded-3xl items-center py-1 px-4 bg-white cursor-pointer"
  >
    <span>
      <img src="https://iili.io/3VR8DeS.png" alt="Calendar" className="w-5 h-5" />
    </span>
    Calendar
  </a>
</div>

        </div>
      </div>
    </div>
  );
};

export default HeaderDesktop;
