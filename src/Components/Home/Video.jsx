import React, { useRef } from "react";
import { motion } from "framer-motion";

const Video = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef([]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[500px] flex items-center justify-center overflow-hidden font-marcellus"
    >
      <div className="absolute inset-0">
        <img
          src="https://iili.io/31cmwnp.md.png"
          alt=""
          className="w-full h-full  opacity-90"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl mb-6 text-white drop-shadow-lg"
        >
          Experience Creativity Through Inspiring Visual Stories
        </motion.h1>

        <div className="flex gap-6">
          <motion.button
            ref={(el) => (buttonsRef.current[0] = el)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="button font-medium bg-burntCopper hover:bg-black"
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
            Watch video
          </motion.button>

          <motion.button
            ref={(el) => (buttonsRef.current[1] = el)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="button text-base hover:text-deepMaroon font-medium bg-deepMaroon hover:bg-black"
            style={{ "--clr": "#AA7446" }}
          >
            <span className="button__icon-wrapper hover:text-black text-deepMaroon">
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
                />
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
                />
              </svg>
            </span>
            Contact Us
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Video;
