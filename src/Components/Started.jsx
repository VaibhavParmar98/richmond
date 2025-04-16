import React, { useRef } from "react";
import { motion } from "framer-motion";
import image23 from '../assets/image23.png';
import image15 from '../assets/image15.png';

const Started = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  return (
    <div className="bg-[#FBF6EF] py-12 sm:py-16 md:py-20">
      <div className="relative max-w-full sm:max-w-3xl md:max-w-3xl mx-auto bg-white shadow-lg rounded-lg font-marcellus flex flex-col md:flex-row md:justify-between overflow-hidden">

        <img
          src={image23}
          alt="Background Design"
          className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
        />

        <div className="relative z-10 flex flex-col gap-3 sm:gap-4 py-4 sm:py-6 px-4 sm:px-8 md:px-10 items-center justify-center md:justify-start md:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl text-center md:text-start"
          >
            Ready to get started?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            ref={descRef}
            className="text-xs sm:text-[14px] md:text-[14px] text-gray-500 leading-5 text-center md:text-start"
          >
            Be part of Richmond’s creative transformation! Join us to <br /> celebrate 
            local talent, revitalize public spaces, and build a <br /> vibrant arts 
            community together.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1], delay: 0.4 }}
            ref={buttonRef}
            className="button bg-burntCopper hover:bg-black w-40"
            style={{ "--clr": "#AA7446" }}
          >
            <span className="button__icon-wrapper">
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg"
                width="10"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>

              <svg
                viewBox="0 0 14 15"
                fill="none"
                width="10"
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon-svg button__icon-svg--copy"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            Contact Us
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >
          <img
            ref={imageRef}
            src={image15}
            alt=""
            className="w-full sm:w-48 md:w-60 h-auto sm:h-48 md:h-60 p-6 sm:p-3 md:p-3"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Started;
