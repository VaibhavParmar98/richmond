import React from "react";
import { motion } from "framer-motion";

const SuppoertLocla = () => {
  return (
    <div className="bg-champagneBeige py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 flex flex-col items-center justify-center font-marcellus">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col gap-2 sm:gap-3"
        >
          <p className="uppercase text-xs sm:text-sm">
            Support Local Art, Inspire Creativity
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl">
            Make a Lasting Impact Through Your Donation
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 mt-8 sm:mt-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2"
          >
            <img
              src="https://iili.io/31cmIae.md.png"
              alt="Support Local Artists"
              className="w-full h-auto object-cover"
            />
            <h1 className="text-lg sm:text-xl text-center md:text-start">
              Support Local Artists – Make a Difference Today!
            </h1>
            <p className="text-xs sm:text-[14px] leading-5 text-center md:text-start mb-2">
              Your generous contribution helps empower local artists, fund
              community events, and create opportunities for emerging talent.
              Every donation nurtures creativity.
            </p>

            <div className="w-full mt-2">
              <div className="relative h-4 bg-white rounded-full">
                <motion.div
                  className="progress-fill absolute top-0 left-0 h-4 bg-[#2b0b0b] rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "50%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div className="percentage absolute left-1/2 transform -translate-x-1/2 -top-5 sm:-top-6 text-xs sm:text-sm text-black font-semibold">
                  50%
                </div>
              </div>
              <div className="progress-details flex justify-between mt-2 text-xs sm:text-sm text-black font-semibold">
                <p>Raised: $25,000</p>
                <p>Goal: $50,000</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2"
          >
            <img
              src="https://iili.io/31cmzF9.png"
              alt="Fuel Creativity"
              className="w-full h-auto object-cover"
            />
            <h1 className="text-lg sm:text-xl text-center md:text-start">
              Fuel Creativity – Support Our Mission!
            </h1>
            <p className="text-xs sm:text-[14px] leading-5 text-center md:text-start mb-2">
              Help us continue providing a platform for local artists to
              showcase their talent. Your support ensures that art thrives and
              inspires future generations.
            </p>

            <div className="w-full mt-2">
              <div className="relative h-4 bg-white rounded-full">
                <motion.div
                  className="progress-fill absolute top-0 left-0 h-4 bg-[#2b0b0b] rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "38%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div className="percentage absolute left-[38%] transform -translate-x-1/2 -top-5 sm:-top-6 text-xs sm:text-sm text-black font-semibold">
                  38%
                </div>
              </div>
              <div className="progress-details flex justify-between mt-2 text-xs sm:text-sm text-black font-semibold">
                <p>Raised: $15,000</p>
                <p>Goal: $40,000</p>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="button font-medium hover:border bg-burntCopper hover:bg-black mt-10"
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
          More Donation
        </motion.button>
      </div>
    </div>
  );
};

export default SuppoertLocla;
