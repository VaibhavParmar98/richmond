import React, { useRef } from "react";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  const testimonialRef = useRef(null);
  const textRef = useRef(null);
  const playButtonRef = useRef(null);
  const progressBarRef = useRef(null);
  const thumbRef = useRef(null);
  const durationStartRef = useRef(null);
  const durationEndRef = useRef(null);
  const volumeBarRef = useRef(null);
  const volumeThumbRef = useRef(null);

  return (
    <div
      ref={testimonialRef}
      className="bg-burntCopper font-marcellus text-white p-4 sm:p-6 md:p-8 max-w-full sm:max-w-2xl md:max-w-3xl mx-auto shadow-lg"
    >
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xs sm:text-[14px] md:text-[14px] leading-5 text-center md:text-start">
          Joining This Website Has Been A Game-Changer For Me. It Has Given Me Exposure, Connected Me
          With Fellow Artists, And Inspired Me To Create More. The Supportive Community And Opportunities
          Provided Have Truly Helped Me Grow And Showcase My Work With Confidence. I'm Incredibly Thankful
          For This Experience And Continued Support. Through The Various Events, Workshops, And Collaborations,
          I’ve Gained Valuable Knowledge And Built Lasting Relationships With Other Creatives.
        </p>
      </motion.div>

      <div className="mt-6 sm:mt-8 border border-white p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <motion.div
            ref={playButtonRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-12 sm:w-14 md:w-14 h-12 sm:h-14 md:h-14 bg-gray-100 text-black rounded-full flex items-center justify-center cursor-pointer"
          >
            <svg className="w-5 sm:w-6 md:w-6 h-5 sm:h-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>

          <div className="flex-1 w-full">
            <div
              ref={durationStartRef}
              className="text-xs sm:text-sm md:text-sm mb-1"
            >
              00:00
            </div>
            <div className="relative w-full h-1 bg-white rounded-full">
              <motion.div
                ref={progressBarRef}
                initial={{ width: "0%" }}
                animate={{ width: "33%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-0 left-0 h-1 bg-yellow-400 rounded-full"
              ></motion.div>
              <motion.div
                ref={thumbRef}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="absolute left-[32%] top-1/2 -translate-y-1/2 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-yellow-400 rounded-full"
              ></motion.div>
            </div>
          </div>

          <div ref={durationEndRef} className="text-xs sm:text-sm md:text-sm ml-0 sm:ml-2">
            15:30
          </div>

          <div className="flex items-center gap-2 ml-0 sm:ml-4 mt-3 sm:mt-0">
            <svg className="w-4 sm:w-5 md:w-5 h-4 sm:h-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 10v4h4l5 5V5l-5 5H3z" />
            </svg>
            <div className="relative w-20 sm:w-24 md:w-24 h-1 bg-white rounded-full">
              <motion.div
                ref={volumeBarRef}
                initial={{ width: "0%" }}
                animate={{ width: "66%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute top-0 left-0 h-1 bg-yellow-400"
              ></motion.div>
              <motion.div
                ref={volumeThumbRef}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="absolute left-[60%] top-1/2 -translate-y-1/2 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-yellow-400 rounded-full"
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
