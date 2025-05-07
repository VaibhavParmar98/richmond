import React, { useRef } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const buttonRef = useRef(null);
  const isButtonInView = useInView(buttonRef, { once: true, margin: "-50px" });

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-1/2 bg-champagneBeige" />
        <div className="h-1/2 bg-white" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-marcellus space-y-8 sm:space-y-12">
        <div className="relative flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start text-center md:text-left sm:gap-8">
          <motion.div
            className="w-full md:w-2/3 space-y-4 sm:space-y-6 ml-0 md:ml-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-deepMaroon">
              Empowering Local Artistry,
              <br className="md:block lg:hidden hidden" />
              One Creation At A Time
            </h1>
          </motion.div>
          <motion.div
            className="right-section w-full md:w-1/3 text-xs sm:text-sm mt-6 md:mt-0 mr-0 md:mr-9 flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h1 className="font-semibold text-[18px] sm:text-[16px]">Help Shape the Future of Local Art</h1>
            <p className="text-deepMaroon text-[14px] leading-5 max-w-md">
            
            We're conducting a short survey to better understand how we can support and uplift our local artist community. Your feedback will guide our future events, workshops, and artist features.
            </p>
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center md:justify-start">
              <motion.button
                ref={buttonRef}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isButtonInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}
                className="button font-medium bg-deepMaroon hover:border hover:bg-black"
                style={{ "--clr": "#2B0A0A" }}
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
                Survey
              </motion.button>
              <NavLink to="/signup">
                <motion.button
                  ref={buttonRef}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isButtonInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  }}
                  className="button font-medium hover:border bg-burntCopper hover:bg-black"
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
                  Sign Up
                </motion.button>
              </NavLink>
            </div>
          </motion.div>
          <motion.div
            className="top-right-icon absolute top-0 right-0 hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img
              src="https://iili.io/31cmdan.png
"
              alt="Icon"
              className="w-20 sm:w-24 md:w-28 mt-8 md:mt-10"
            />
          </motion.div>
        </div>

        <motion.div
          className="image-section flex flex-col md:flex-row gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            staggerChildren: 0.2,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <img
              src="https://iili.io/31cP13v.png"
              alt="Art Mural"
              className="rounded-lg object-cover w-full h-64 sm:h-80 md:h-full"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 relative rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="relative w-full h-80 sm:h-96 md:h-[450px]">
              <img
                src="https://iili.io/3O4BNPs.jpg"
                alt="Artist Event"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>
            <motion.div
              className="absolute inset-0 flex items-center mt-32 md:items-end md:justify-start p-2 sm:p-3 md:p-4 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="event-overlay w-full text-white">
                <motion.h3
                  className="text-base sm:text-lg md:text-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                >
                  Art Walk & Talk
                </motion.h3>
                <motion.p
                  className="text-sm sm:text-base md:text-lg opacity-80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                >
                  20 Apr 2025
                </motion.p>
                <motion.p
                  className="text-xs sm:text-[14px] leading-5 md:text-sbase opacity-90 mt-1 sm:mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                >
                  Host a guided walk through local galleries with artists
                  discussing their works.
                </motion.p>
                <motion.button
                  className="button text-base font-medium bg-deepMaroon hover:bg-black mt-3"
                  style={{ "--clr": "#AA7446" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
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
                   P D F
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* <motion.div
          className="stats-section bg-offWhite rounded-xl mt-6 p-4 sm:p-6 flex flex-col md:flex-row justify-between items-center text-deepMaroon text-xs sm:text-sm gap-4 sm:gap-6 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            staggerChildren: 0.1,
            ease: "easeInOut",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <p className="lg:text-base xl:text-base text-lg md:text-base">
              Embracing Faith’s Promise <br className=" hidden lg:block xl:block" /> Sharing Love’s Light
            </p>
          </motion.div>
          <motion.div
            className="divider hidden md:block h-12 sm:h-16 w-px border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
          />
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          >
            <p className="text-[14px] leading-5">
              Discover, support, and celebrate the vibrant creativity of local
              artists in your community and beyond. Explore unique artwork,
              connect with creators, attend inspiring events, and be part of a
              thriving artistic movement.
            </p>
          </motion.div>
          <motion.div
            className="divider hidden md:block h-12 sm:h-16 w-px border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
          />
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          >
            <span className="text-xl sm:text-2xl font-bold">4.8/5</span>
            <span className="flex items-center gap-1 text-xs sm:text-sm text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
            <span>Building Bonds Blessings</span>
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
