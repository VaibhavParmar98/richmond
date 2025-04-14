import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import image24 from '../assets/Group.png'
import image1 from '../assets/image1.png'
import image3 from '../assets/image3.png'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-1/2 bg-champagneBeige" />
        <div className="h-1/2 bg-white" />
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 font-marcellus space-y-8 sm:space-y-12"
      >
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-6 sm:gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full md:w-2/3 space-y-4 sm:space-y-6 ml-0 md:ml-9"
          >
            <h1 className="hero-heading text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-deepMaroon">
              Empowering Local Artistry,
              <br />
              One Creation At A Time
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeRight}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="right-section w-full md:w-1/3 text-xs sm:text-sm mt-6 md:mt-0 mr-0 md:mr-9"
          >
            <p className="text-deepMaroon max-w-md">
              Discover, support, and celebrate the vibrant creativity of local
              artists in your community through exhibitions, workshops, and
              collaborations.
            </p>
            <div className="flex gap-3 sm:gap-4 mt-4 sm:mt-6">
              <button
                className="button font-medium bg-deepMaroon hover:bg-black"
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
              </button>
              <button
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
                Dontae
              </button>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeLeft}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="top-right-icon absolute top-0 right-0 hidden md:block"
          >
            <img
              src={image24}
              alt="Icon"
              className="w-20 sm:w-24 md:w-28 mt-8 md:mt-10"
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleFade}
          transition={{ duration: 0.7, ease: "easeInOut", staggerChildren: 0.2 }}
          className="image-section flex flex-col md:flex-row gap-4 sm:gap-6"
        >
          <motion.div className="w-full md:w-2/3">
            <img
              src={image1}
              alt="Art Mural"
              className="rounded-lg object-cover w-full h-64 sm:h-80 md:h-full"
            />
          </motion.div>

          <motion.div className="w-full md:w-1/3 relative rounded-lg overflow-hidden shadow-lg">
            <img
              src={image3}
              alt="Artist Event"
              className="w-full h-80 sm:h-96 md:h-[450px] object-cover"
            />
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.1 }}
              className="absolute inset-0 flex items-end p-2 sm:p-3 md:p-4"
            >
              <div className="event-overlay w-full text-white">
                <h3 className="text-base sm:text-lg md:text-xl">Art Walk & Talk</h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80">20 Apr 2025</p>
                <p className="text-xs sm:text-sm md:text-sm opacity-90 mt-1 sm:mt-2">
                  Host a guided walk through local galleries with artists
                  discussing their works.
                </p>
                <button
                  className="button font-medium bg-burntCopper hover:bg-black mt-3"
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
                  View Event
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.1 }}
          className="stats-section bg-offWhite rounded-xl mt-6 p-4 sm:p-6 flex flex-col md:flex-row justify-between items-center text-deepMaroon text-xs sm:text-sm gap-4 sm:gap-6"
        >
          <div>
            <p className="text-base sm:text-lg">
              Embracing Faith’s Promise <br /> Sharing Love’s Light
            </p>
          </div>
          <div className="divider hidden md:block h-12 sm:h-16 w-px border" />
          <div className="max-w-md">
            <p>
              Discover, support, and celebrate the vibrant creativity of local
              artists in your community and beyond. Explore unique artwork,
              connect with creators, attend inspiring events, and be part of a
              thriving artistic movement.
            </p>
          </div>
          <div className="divider hidden md:block h-12 sm:h-16 w-px border" />
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-bold">4.8/5</span>
            <span className="flex items-center gap-1 text-xs sm:text-sm text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </span>
            <span>Building Bonds Blessings</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;