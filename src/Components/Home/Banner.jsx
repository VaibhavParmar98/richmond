import React from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-30 bg-black/50 hover:bg-black/80 px-2 sm:px-3 py-1 rounded-full text-white transition-all duration-300 shadow-md backdrop-blur-sm text-sm sm:text-lg`}
    onClick={onClick}
    aria-label="Previous Slide"
  >
    ❮
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    className={`absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-30 bg-black/50 hover:bg-black/80 px-2 sm:px-3 py-1 rounded-full text-white transition-all duration-300 shadow-md backdrop-blur-sm text-sm sm:text-lg`}
    onClick={onClick}
    aria-label="Next Slide"
  >
    ❯
  </button>
);

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const slideVariants = {
  enter: { opacity: 0, x: 100 },
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    x: -100,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const Banner = () => {
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    className: "w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px] font-marcellus",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          autoplaySpeed: 4000,
          arrows: true,
          dots: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          autoplaySpeed: 3000,
          arrows: true,
          dots: false, 
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          autoplaySpeed: 3000,
          arrows: false,
          dots: true, 
          slidesToShow: 1,
        },
      },
    ],
  };
  

  return (
    <Slider {...settings}>
      <AnimatePresence>
        <motion.div
          className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px]"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <img
            src="https://iili.io/31cPcGa.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
 <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8">
            <div className="flex flex-col xl:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-4 sm:gap-8 lg:gap-12">
              <div className="lg:w-1/2 flex flex-col gap-3 sm:gap-4 items-center justify-center text-center lg:text-left">
                <motion.h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Coming Soon
                </motion.h1>
                <motion.p
                  className="text-sm sm:text-base md:text-lg font-semibold tracking-wider text-center max-w-md sm:max-w-lg"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  A short message to hype up the community-led transformation
                  and development of an arts corridor.
                </motion.p>
              </div>
              <div className="lg:w-1/2 flex flex-col items-center justify-center text-center">
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-nowrap"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  Richmond Arts Corridor
                </motion.h1>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px]"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <img
            src="https://iili.io/31cmkFt.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-900/70 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8">
            <div className="flex flex-col xl:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-4 sm:gap-8 lg:gap-12">
              <div className="lg:w-1/2 flex flex-col gap-3 sm:gap-4 items-center justify-center text-center lg:text-left">
                <motion.h1
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase text-center"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Community Survey
                </motion.h1>
                <motion.p
                  className="text-sm sm:text-base md:text-lg font-medium tracking-wide leading-relaxed text-center max-w-md sm:max-w-lg"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                >
                  Get your voice heard! Imagine what the Arts Corridor can be —
                  how can we make Richmond the next viral hot spot while being
                  sustainable, and ensure development without displacement.
                </motion.p>
              </div>
              <div className="lg:w-1/2 flex flex-col items-center justify-center text-center">
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-nowrap"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                >
                  Richmond Arts Corridor
                </motion.h1>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[350px]"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <img
            src="https://iili.io/31cmvcX.jpg"
            alt="Conceptual Framework"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8">
            <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center text-center">
              <motion.h1
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase text-center text-nowrap"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                Conceptual Framework
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg font-medium tracking-wide leading-relaxed text-center max-w-md sm:max-w-lg"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                A conceptual framework of ideas that have been populated by
                artists and community members to build on!
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.section
          className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] min-h-[400px]"
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          aria-labelledby="community-session-heading"
        >
          <img
            src="https://iili.io/31cm8Sn.jpg"
            sizes="(max-width: 600px) 100vw, (max-width: 960px) 80vw, 1200px"
            alt="Community Listening Session"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-4xl flex flex-col gap-4 sm:gap-6 md:gap-8 items-center text-center lg:mb-0 xl:mb-0 md:mb-0 mb-10">
              <motion.h1
                id="community-session-heading"
                className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold tracking-wide uppercase"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                Community Listening Session Events
              </motion.h1>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                <div className="flex flex-col gap-3">
                  <motion.p
                    className="text-base sm:text-lg md:text-xl md:text-start text-center"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                  >
                    Attend an upcoming listening session and share your{" "}
                    <br className="md:block hidden" /> voice! All events link to
                    an RSVP page.
                  </motion.p>
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-1 ml-6 md:ml-0 text-start gap-1 text-sm sm:text-base"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                  >
                    <p>• Open house style</p>
                    <p>• Community gathering</p>
                    <p>• Mural building</p>
                  </motion.div>
                </div>
                <motion.div
                  className="grid grid-cols-1 gap-3 text-sm sm:text-base"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.6 }}
                >
                  <div className="tracking-wide text-center sm:text-start">
                    Ryse Center
                  </div>
                  <div className="tracking-wide text-center sm:text-start">
                    East Bay Center For Performing Arts
                  </div>
                  <div className="tracking-wide text-center sm:text-start">
                    Richmond Art Center
                  </div>
                  <div className="tracking-wide text-center sm:text-start">
                    Richmond Museum of History and Culture
                  </div>
                </motion.div>
              </div>
              {/* <motion.button
                className="button font-medium text-sm sm:text-base px-6 py-2 md:py-3 md:mb-0"
                style={{ "--clr": "#AA7446" }}
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                aria-label="RSVP for Community Listening Session"
              >
                <span className="button__icon-wrapper">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg"
                    width="12"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    />
                  </svg>
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="12"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon-svg button__icon-svg--copy"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                RSVP Now
              </motion.button> */}
            </div>
          </div>
        </motion.section>
      </AnimatePresence>
    </Slider>
  );
};

export default Banner;
