import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DropdownMenu = ({ title, items, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    if (isMobile) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => !isMobile && setIsOpen(true)}
      onMouseLeave={() => !isMobile && setIsOpen(false)}
    >
      <button
        className="flex items-center gap-1 cursor-pointer"
        onClick={toggleDropdown}
      >
        {title}
        <span className="text-[10px] mt-[1px]">
          {isMobile ? (isOpen ? <FaChevronUp /> : <FaChevronDown />) : <FaChevronDown />}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={`${
              isMobile
                ? "pl-4 mt-1 text-left"
                : "absolute left-0 top-full mt-1 bg-white text-oldLavender p-2 rounded-xl shadow-md z-20"
            } flex flex-col gap-2 text-xs sm:text-sm`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {items.map((item, i) => (
              <li key={i} className="cursor-pointer hover:text-black transition">
                {item}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
